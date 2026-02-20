import type { RunOptions, Organization } from "../lib/types";
import type { OrgFormAbstraction } from "../lib/abstraction-schema";
import { readJson, writeJson, dataDir, dataPath, exists, listFiles, listDirs } from "../lib/store";
import { runAgentJSON } from "../lib/llm";
import { runStage } from "../lib/stage-runner";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

const ORGS_DIR = "organizations";
const FORMS_DIR = "forms";
const ABSTRACTIONS_DIR = "abstractions";

function allOrganizations(): Organization[] {
  const files = listFiles(ORGS_DIR, ".json");
  const orgs: Organization[] = [];
  for (const f of files) {
    const data = readJson<Organization[]>(`${ORGS_DIR}/${f}.json`);
    if (data) orgs.push(...data);
  }
  return orgs;
}

interface AbstractionCandidate {
  org: Organization;
  formDir: string;
}

function findCandidates(): AbstractionCandidate[] {
  const orgs = allOrganizations();
  const orgMap = new Map(orgs.map((o) => [o.org_id, o]));
  const candidates: AbstractionCandidate[] = [];

  for (const orgId of listDirs(FORMS_DIR)) {
    const org = orgMap.get(orgId);
    if (!org) continue;

    const dir = dataPath(FORMS_DIR, orgId);
    if (!existsSync(join(dir, "notes.md"))) continue;

    candidates.push({ org, formDir: dir });
  }
  return candidates;
}

function makePrompt(c: AbstractionCandidate): string {
  return `You are producing a structured abstraction of ROI form retrieval results.

Read DESIGN.md to understand the full study.
Read lib/abstraction-schema.ts for the exact TypeScript interface your output must conform to.

This directory contains all forms, notes, and metadata for: ${c.org.name}
Organization: ${c.org.name} (${c.org.city}, ${c.org.state})
Website: ${c.org.website}

Read these files:
- notes.md — the full retrieval narrative
- All *-metadata.json files — technical metadata for each downloaded PDF

Produce a JSON file "output.json" conforming to the OrgFormAbstraction interface.
Set org_id to "${c.org.org_id}".

Base every field on what the notes and metadata actually say. Don't infer or assume
details that aren't documented.

After writing, validate: read output.json back and confirm it's valid JSON with all
required fields populated.`;
}

export async function run(opts: RunOptions) {
  await runStage<AbstractionCandidate, OrgFormAbstraction>({
    name: "Abstract: Structured Summaries",
    loadItems: findCandidates,
    itemId: (c) => c.org.org_id,
    itemLabel: (c) => `${c.org.org_id} (${c.org.name})`,
    isComplete: (c) => exists(`${ABSTRACTIONS_DIR}/${c.org.org_id}.json`),
    emptyMessage: "No forms with notes found. Run stage3 first.",
    run: async (c, opts) => {
      const result = await runAgentJSON<OrgFormAbstraction>({
        workDir: c.formDir,
        prompt: makePrompt(c),
        outputFile: "output.json",
        model: opts.model,
        instanceId: `abstract/${c.org.org_id}`,
      });
      writeJson(`${ABSTRACTIONS_DIR}/${c.org.org_id}.json`, result);
      return result;
    },
    formatResult: (_c, r) =>
      `${r.request_pathways.length} pathways, ${r.forms.length} forms`,
    summarize: (results) => {
      const done = results.filter((r) => r.result);
      const portalCount = done.filter((r) =>
        r.result!.request_pathways.some((p) => p.type === "online_portal" || p.type === "patient_portal")
      ).length;
      const systemFormCount = done.filter((r) => r.result!.uses_system_forms).length;
      console.log(`\n  Portal pathway found: ${portalCount}/${done.length}`);
      console.log(`  Uses system forms: ${systemFormCount}/${done.length}`);
    },
  }, opts);
}
