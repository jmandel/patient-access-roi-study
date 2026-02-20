import { useState, useEffect } from "react";
import type { OrgData } from "../types";
import { DIMENSIONS, GRADE_COLORS } from "../types";
import { GradeBadge, BoolIcon, PathwayBadge } from "../components/Charts";

export function OrgDetail({ orgs, orgId }: { orgs: OrgData[]; orgId: string }) {
  const org = orgs.find((o) => o.org_id === orgId);
  const [narrative, setNarrative] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [evals, setEvals] = useState<{ name: string; content: string }[]>([]);

  useEffect(() => {
    if (!org) return;
    fetch(`data/narratives/${orgId}.md`).then((r) => r.ok ? r.text() : "").then(setNarrative);
    fetch(`data/notes/${orgId}.md`).then((r) => r.ok ? r.text() : "").then(setNotes);

    // Load evaluations for this org's forms
    const loadEvals = async () => {
      const results: { name: string; content: string }[] = [];
      for (const form of org.forms || []) {
        const stem = form.filename.replace(".pdf", "");
        const evalId = `${orgId}--${stem}`;
        try {
          const resp = await fetch(`data/evaluations/${evalId}.md`);
          if (resp.ok) results.push({ name: evalId, content: await resp.text() });
        } catch {}
      }
      setEvals(results);
    };
    loadEvals();
  }, [orgId, org]);

  if (!org) {
    return <div style={{ padding: 40 }}>Organization not found: {orgId}</div>;
  }

  const s = org.scores;
  const ap = org.access_pathway;
  const fq = org.form_quality;
  const b = org.barriers;

  return (
    <div>
      {/* Back link */}
      <a href="#/explorer" style={{ fontSize: 13, color: "#6b7280" }}>← Back to Explorer</a>

      {/* Header */}
      <div style={styles.header}>
        <div style={{ flex: 1 }}>
          <h1 style={styles.orgName}>{org.org_name}</h1>
          <div style={styles.location}>
            {org.city}, {org.state}
            {org.parent_system && <span> · {org.parent_system}</span>}
            {org.website && (
              <span> · <a href={org.website} target="_blank" rel="noopener">{new URL(org.website).hostname}</a></span>
            )}
          </div>
          <div style={styles.tags}>
            {Object.entries(org.axes || {}).map(([k, v]) => (
              <span key={k} style={styles.tag}>{v.replace(/_/g, " ")}</span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <GradeBadge grade={s.overall.grade} size="lg" />
          <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>{s.overall.score.toFixed(1)}</div>
        </div>
      </div>

      {/* Scores */}
      <Section title="Scores">
        <div style={styles.scoreGrid}>
          {DIMENSIONS.map((d) => {
            const ds = (s as any)[d.key];
            return (
              <div key={d.key} style={styles.scoreCard}>
                <div style={styles.scoreHeader}>
                  <span style={styles.dimLabel}>{d.label}</span>
                  <span style={{ fontSize: 11, color: "#9ca3af" }}>({(d.weight * 100).toFixed(0)}%)</span>
                </div>
                <div style={styles.scoreValue}>{ds?.score ?? "–"}</div>
                <div style={styles.scoreBar}>
                  <div style={{ width: `${((ds?.score ?? 0) / 5) * 100}%`, height: 6, background: "#6366f1", borderRadius: 3 }} />
                </div>
                <div style={styles.rationale}>{ds?.rationale}</div>
              </div>
            );
          })}
        </div>
        <div style={styles.summaryBox}>
          <strong>Overall:</strong> {s.overall.summary}
        </div>
      </Section>

      {/* Access Pathway */}
      <Section title="Access Pathway">
        <div style={{ marginBottom: 12 }}>
          <PathwayBadge type={ap?.primary_pathway_type} />
          <span style={{ marginLeft: 8, fontSize: 14 }}>{ap?.primary_pathway_description}</span>
        </div>
        <div style={styles.boolGrid}>
          <BoolIcon value={ap?.has_individual_access_pathway} label="Individual Access Pathway" />
          <BoolIcon value={ap?.differentiates_self_vs_third_party} label="Differentiates Self vs. 3rd Party" />
          <BoolIcon value={ap?.online_submission_available} label="Online Submission" />
          <BoolIcon value={!ap?.requires_physical_delivery} label="No Physical Delivery Required" />
        </div>
        {org.request_pathways?.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <div style={styles.subTitle}>All Request Pathways</div>
            {org.request_pathways.map((rp, i) => (
              <div key={i} style={styles.pathwayRow}>
                <span style={styles.pathwayType}>{rp.type.replace(/_/g, " ")}</span>
                {rp.name && <span>{rp.name}</span>}
                {rp.vendor && <span style={{ color: "#6b7280" }}>({rp.vendor})</span>}
                {rp.is_primary && <span style={styles.primaryBadge}>Primary</span>}
                {rp.url && <a href={rp.url} target="_blank" rel="noopener" style={{ fontSize: 11 }}>Link →</a>}
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Form Quality */}
      <Section title="Form Quality">
        <div style={styles.qualityGrid}>
          <div style={styles.qualityStat}>
            <div style={styles.qualityValue}>{fq?.page_count ?? "–"}</div>
            <div style={styles.qualityLabel}>Pages</div>
          </div>
          <div style={styles.qualityStat}>
            <div style={styles.qualityValue}>{fq?.field_count_estimate ?? "–"}</div>
            <div style={styles.qualityLabel}>Fields</div>
          </div>
          <div style={styles.qualityStat}>
            <div style={styles.qualityValue}>{fq?.languages_available?.join(", ") || "en"}</div>
            <div style={styles.qualityLabel}>Languages</div>
          </div>
        </div>
        <div style={styles.boolGrid}>
          <BoolIcon value={fq?.fillable_fields} label="Fillable" />
          <BoolIcon value={fq?.has_instructions} label="Instructions" />
          <BoolIcon value={fq?.clear_layout} label="Clear Layout" />
          <BoolIcon value={fq?.plain_language} label="Plain Language" />
          <BoolIcon value={fq?.multilingual} label="Multilingual" />
          <BoolIcon value={fq?.includes_patient_rights} label="Patient Rights" />
          <BoolIcon value={!fq?.consent_bundling} label="No Consent Bundling" />
        </div>
      </Section>

      {/* Barriers */}
      <Section title="Barriers & Compliance">
        <div style={styles.boolGrid}>
          <BoolIcon value={!b?.requires_notarization_or_witness} label="No Notarization Required" />
          <BoolIcon value={!b?.requires_in_person} label="No In-Person Required" />
        </div>
        <div style={{ margin: "8px 0", fontSize: 13 }}>
          <strong>Fee disclosure:</strong> {b?.fee_disclosure?.replace(/_/g, " ") || "–"}
        </div>
        {b?.response_time_stated && (
          <div style={{ fontSize: 13 }}>
            <strong>Response time:</strong> {b.response_time_value || "stated but unspecified"}
          </div>
        )}
        {b?.red_flags?.length > 0 && (
          <div style={styles.flagSection}>
            <div style={{ ...styles.subTitle, color: "#dc2626" }}>🚩 Red Flags</div>
            {b.red_flags.map((f, i) => <div key={i} style={styles.redFlag}>{f}</div>)}
          </div>
        )}
        {b?.bright_spots?.length > 0 && (
          <div style={styles.flagSection}>
            <div style={{ ...styles.subTitle, color: "#16a34a" }}>✨ Bright Spots</div>
            {b.bright_spots.map((f, i) => <div key={i} style={styles.brightSpot}>{f}</div>)}
          </div>
        )}
      </Section>

      {/* Retrieved Forms */}
      {org.forms?.length > 0 && (
        <Section title={`Retrieved Forms (${org.total_forms_found})`}>
          <div style={styles.formGrid}>
            {org.forms.map((f, i) => (
              <div key={i} style={styles.formCard}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>📄 {f.filename}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>
                  {f.document_type} · {f.scope} · {f.language}
                </div>
                {f.source_url && (
                  <a href={f.source_url} target="_blank" rel="noopener" style={{ fontSize: 11 }}>
                    Source →
                  </a>
                )}
                {f.filename === org.primary_form && (
                  <span style={styles.primaryBadge}>Primary</span>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Narrative Synthesis */}
      {narrative && (
        <Section title="Synthesis Narrative">
          <pre style={styles.markdown}>{narrative}</pre>
        </Section>
      )}

      {/* Evaluations */}
      {evals.length > 0 && (
        <Section title={`Form Evaluations (${evals.length})`}>
          {evals.map((ev) => (
            <details key={ev.name} style={styles.evalDetail}>
              <summary style={styles.evalSummary}>{ev.name}</summary>
              <pre style={styles.markdown}>{ev.content}</pre>
            </details>
          ))}
        </Section>
      )}

      {/* Retrieval Notes */}
      {notes && (
        <Section title="Retrieval Notes">
          <div style={{ marginBottom: 8 }}>
            <span style={styles.tag}>Difficulty: {org.retrieval?.difficulty}</span>
            {org.retrieval?.bot_blocking_encountered && <span style={{ ...styles.tag, background: "#fee2e2" }}>Bot Blocking</span>}
            {org.retrieval?.browser_fallback_needed && <span style={{ ...styles.tag, background: "#fef3c7" }}>Browser Fallback</span>}
          </div>
          <pre style={styles.markdown}>{notes}</pre>
        </Section>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: { display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 0", borderBottom: "1px solid #e5e7eb" },
  orgName: { fontSize: 26, fontWeight: 800 },
  location: { fontSize: 14, color: "#4b5563", marginTop: 4 },
  tags: { display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" },
  tag: { fontSize: 11, padding: "2px 8px", background: "#f3f4f6", borderRadius: 4, color: "#374151" },
  section: { margin: "24px 0", padding: "16px 0", borderBottom: "1px solid #f3f4f6" },
  sectionTitle: { fontSize: 18, fontWeight: 700, marginBottom: 12 },
  subTitle: { fontSize: 13, fontWeight: 700, marginBottom: 6 },
  scoreGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 },
  scoreCard: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 12 },
  scoreHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  dimLabel: { fontSize: 13, fontWeight: 600 },
  scoreValue: { fontSize: 28, fontWeight: 800, margin: "4px 0" },
  scoreBar: { height: 6, background: "#f3f4f6", borderRadius: 3, marginBottom: 8 },
  rationale: { fontSize: 12, color: "#4b5563", lineHeight: 1.4 },
  summaryBox: { marginTop: 12, padding: 12, background: "#f0f9ff", borderRadius: 8, fontSize: 14, lineHeight: 1.5 },
  boolGrid: { display: "flex", gap: 8, flexWrap: "wrap", margin: "8px 0" },
  pathwayRow: { display: "flex", gap: 8, alignItems: "center", padding: "4px 0", fontSize: 13 },
  pathwayType: { fontWeight: 600, textTransform: "capitalize" },
  primaryBadge: { fontSize: 10, padding: "1px 6px", background: "#dbeafe", color: "#2563eb", borderRadius: 3, fontWeight: 600 },
  qualityGrid: { display: "flex", gap: 20, marginBottom: 12 },
  qualityStat: { textAlign: "center" },
  qualityValue: { fontSize: 24, fontWeight: 800 },
  qualityLabel: { fontSize: 11, color: "#6b7280" },
  formGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 8 },
  formCard: { padding: 12, border: "1px solid #e5e7eb", borderRadius: 8, background: "#fff" },
  flagSection: { marginTop: 12 },
  redFlag: { padding: "6px 10px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, fontSize: 12, marginBottom: 4, lineHeight: 1.4 },
  brightSpot: { padding: "6px 10px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, fontSize: 12, marginBottom: 4, lineHeight: 1.4 },
  markdown: { fontFamily: "inherit", fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap", wordBreak: "break-word", background: "#fff", padding: 16, borderRadius: 8, border: "1px solid #e5e7eb" },
  evalDetail: { marginBottom: 8 },
  evalSummary: { cursor: "pointer", fontSize: 14, fontWeight: 600, padding: "8px 0" },
};
