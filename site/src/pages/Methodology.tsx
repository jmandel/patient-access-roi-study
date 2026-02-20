import { useState, useEffect } from "react";
import type { OrgData } from "../types";

export function Methodology({ orgs }: { orgs?: OrgData[] }) {
  // Compute axis distributions from actual data
  const axisCounts: Record<string, Record<string, number>> = {};
  const totalOrgs = orgs?.length ?? 0;
  const categoryCount = new Set(orgs?.map((o) => o.category_id)).size;

  for (const o of orgs ?? []) {
    for (const [axis, val] of Object.entries(o.axes || {})) {
      if (!axisCounts[axis]) axisCounts[axis] = {};
      axisCounts[axis][val] = (axisCounts[axis][val] || 0) + 1;
    }
  }

  const axisLabels: Record<string, string> = {
    facility_type: "Facility Type",
    system_affiliation: "System Affiliation",
    ownership: "Ownership",
    census_region: "Census Region",
  };

  return (
    <div style={{ maxWidth: 800 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>Methodology</h1>

      <Section title="Study Design">
        <p>
          This study evaluates how well U.S. healthcare organizations make their Release of
          Information (ROI) forms available online for patients requesting their own health
          records under HIPAA's Right of Access (§ 164.524).
        </p>
        <p>
          We used an LLM-powered pipeline to discover organizations, retrieve their forms,
          evaluate document quality, and synthesize org-level assessments. The goal was to
          assemble a sample representative of the cross-section of healthcare provider types
          in the United States — varying by facility type, health system affiliation, ownership
          model, and geographic region — to understand how the patient experience of requesting
          records differs across these dimensions.
        </p>
      </Section>

      <Section title="Sampling Strategy">
        <p>
          We sampled <strong>{totalOrgs} organizations</strong> across{" "}
          <strong>{categoryCount} categories</strong> defined by crossing four stratification
          axes. The axes were chosen to capture the structural diversity of U.S. healthcare
          delivery — from large nonprofit teaching hospitals in major metro areas to small
          independent critical access hospitals in rural communities, government-run FQHCs,
          and for-profit physician practices.
        </p>
        <p>
          Category targets were calibrated against real-world distributions from AHA, CMS,
          and HRSA data to ensure each combination with meaningful real-world representation
          was included. The goal was sufficient sample size in each cell to enable subgroup
          comparisons, while acknowledging that some combinations (e.g., government teaching
          hospitals) are rare in practice.
        </p>

        <h3 style={h3Style}>Sample Distribution by Axis</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "16px 0" }}>
          {Object.entries(axisCounts).map(([axis, counts]) => {
            const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
            const max = Math.max(...sorted.map(([, n]) => n));
            return (
              <div key={axis} style={cardStyle}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
                  {axisLabels[axis] || axis.replace(/_/g, " ")}
                </div>
                {sorted.map(([val, n]) => (
                  <div key={val} style={{ marginBottom: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 2 }}>
                      <span>{val.replace(/_/g, " ")}</span>
                      <span style={{ fontWeight: 600 }}>{n}</span>
                    </div>
                    <div style={{ height: 8, background: "#f3f4f6", borderRadius: 4 }}>
                      <div style={{ height: 8, background: "#6366f1", borderRadius: 4, width: `${(n / max) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <h3 style={h3Style}>Power Analysis</h3>
        <p>
          With N≈{totalOrgs}, we can detect:
        </p>
        <ul>
          <li><strong>Large effects</strong> (Cohen's d=0.8): need ~26 per group — achievable for most axis values</li>
          <li><strong>Medium effects</strong> (d=0.5): need ~64 per group — only the largest groups (community hospitals, nonprofits)</li>
          <li><strong>Small effects</strong> (d=0.2): need ~394 per group — not achievable for any comparison</li>
        </ul>
        <p>
          We treat this as an <em>exploratory</em> study focused on descriptive statistics and
          effect sizes rather than p-values, identifying hypotheses for future work rather than
          drawing confirmatory conclusions.
        </p>
      </Section>

      <Section title="Pipeline Stages">
        <ol style={{ lineHeight: 2 }}>
          <li><strong>Stage 1:</strong> Define sampling categories and target organizations</li>
          <li><strong>Stage 2:</strong> Discover specific organizations matching each category</li>
          <li><strong>Stage 3:</strong> Retrieve ROI forms and document the search process</li>
          <li><strong>Stage 4:</strong> Evaluate each form individually</li>
          <li><strong>Synthesize:</strong> Produce org-level assessment combining all forms and evaluations</li>
        </ol>
      </Section>

      <Section title="Scoring Rubrics">
        <p>Each organization is scored 1-5 on five dimensions:</p>

        <RubricTable
          dim="Findability"
          weight={15}
          levels={[
            "Effectively unfindable online",
            "Difficult; requires persistence or creative search strategies",
            "Requires moderate effort or a non-obvious path",
            "Easy to find with basic navigation or a simple search",
            "Prominently available; minimal effort to locate",
          ]}
        />

        <RubricTable
          dim="Technical Accessibility"
          weight={25}
          levels={[
            "No usable digital form exists",
            "Primarily a paper workflow (print, handwrite, mail or deliver)",
            "Usable digitally with workarounds; fax submission available",
            "Mostly digital; one gap in the workflow",
            "Fully functional digital workflow from completion through submission",
          ]}
        />

        <RubricTable
          dim="Content Design"
          weight={15}
          levels={[
            "Unusable without significant effort or outside help",
            "Confusing, poorly organized, or unnecessarily complex",
            "Adequate but has notable problems with clarity or length",
            "Well-organized with minor clarity or length issues",
            "Clear, concise, well-organized; completable without assistance",
          ]}
        />

        <RubricTable
          dim="Patient-Centeredness"
          weight={25}
          levels={[
            "Process actively discourages or obstructs patient access",
            "Patient self-access is an afterthought or not addressed",
            "Patient can use the process but it wasn't designed for them",
            "Patient access clearly accommodated even if form serves multiple purposes",
            "Process designed around patient self-access as a first-class use case",
          ]}
        />

        <RubricTable
          dim="Compliance"
          weight={20}
          levels={[
            "Clear violations of patient access rights or significant barriers",
            "Requirements that likely exceed legal limits or create illegitimate barriers",
            "Some requirements may go beyond what the law requires",
            "Minor ambiguities but nothing that would materially impede a patient",
            "No unnecessary barriers; transparent about rights and costs",
          ]}
        />
      </Section>

      <Section title="Key Principles">
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>High-Watermark Scoring</h3>
        <p>
          When an organization has multiple forms, we assess based on the <em>best available
          pathway</em> for a patient requesting their own records. An org that publishes 10
          documents is evaluated on its best, not the average of all documents.
        </p>

        <h3 style={{ fontSize: 15, fontWeight: 600, margin: "16px 0 8px" }}>Submission Baseline</h3>
        <p>
          Fax submission counts as an adequate electronic pathway. Organizations are not
          penalized for lacking online/portal submission. Only in-person or postal-mail-only
          submission is treated as a barrier.
        </p>

        <h3 style={{ fontSize: 15, fontWeight: 600, margin: "16px 0 8px" }}>Limitations</h3>
        <p>
          This study uses LLM agents for form retrieval and evaluation, which introduces
          variability. Scoring rubrics were designed to minimize subjective drift, but
          inter-rater reliability has not been formally assessed. The sample size (~200 orgs)
          provides power to detect large effects across categories but not medium or small ones.
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #e5e7eb" }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, lineHeight: 1.8, color: "#374151" }}>{children}</div>
    </section>
  );
}

function RubricTable({ dim, weight, levels }: { dim: string; weight: number; levels: string[] }) {
  return (
    <div style={{ margin: "16px 0" }}>
      <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
        {dim} <span style={{ color: "#6b7280", fontWeight: 400 }}>({weight}%)</span>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <tbody>
          {levels.map((desc, i) => (
            <tr key={i}>
              <td style={{ width: 30, padding: "4px 8px", fontWeight: 700, textAlign: "center", borderBottom: "1px solid #f3f4f6" }}>
                {i + 1}
              </td>
              <td style={{ padding: "4px 8px", borderBottom: "1px solid #f3f4f6" }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const h3Style: React.CSSProperties = { fontSize: 15, fontWeight: 600, margin: "16px 0 8px" };
const cardStyle: React.CSSProperties = { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 16 };
