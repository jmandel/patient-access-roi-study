import type { SiteStats, OrgData } from "../types";
import { GRADE_COLORS } from "../types";
import { GradeBadge, Histogram } from "../components/Charts";
import { Explorer } from "./Explorer";

export function Landing({ stats, orgs }: { stats: SiteStats; orgs: OrgData[] }) {
  const gradeEntries = Object.entries(stats.grades).filter(([, n]) => n > 0);
  const total = gradeEntries.reduce((a, [, n]) => a + n, 0);

  const hasDedicatedForm = orgs.filter((o) => o.access_pathway?.primary_pathway_type === "dedicated_patient_form").length;
  const hasFillable = orgs.filter((o) => o.form_quality?.fillable_fields).length;
  const pctDedicated = total ? Math.round((hasDedicatedForm / total) * 100) : 0;
  const pctFillable = total ? Math.round((hasFillable / total) * 100) : 0;

  return (
    <div>
      {/* Compact hero */}
      <header style={styles.header}>
        <h1 style={styles.title}>How Easy Is It to Request Your Health Records?</h1>
        <p style={styles.subtitle}>
          A study of <strong>{stats.totalOrgs}</strong> healthcare organizations' Release of Information
          forms and processes.
        </p>
      </header>

      {/* Inline stats + grade bar */}
      <div style={styles.overview}>
        <div style={styles.statRow}>
          <Stat value={stats.meanScore.toFixed(1)} label="Mean Score" />
          <Stat value={stats.medianScore.toFixed(1)} label="Median" />
          <Stat value={`${pctDedicated}%`} label="Dedicated Patient Form" />
          <Stat value={`${pctFillable}%`} label="Fillable" />
        </div>
        <div style={styles.gradeBar}>
          {gradeEntries.map(([grade, count]) => (
            <div
              key={grade}
              style={{
                flex: count,
                background: GRADE_COLORS[grade],
                color: "#fff",
                textAlign: "center",
                padding: "8px 4px",
                fontSize: 13,
                fontWeight: 600,
                minWidth: count > 0 ? 36 : 0,
              }}
            >
              {grade}: {count}
            </div>
          ))}
        </div>
      </div>

      {/* Explorer directly on the homepage */}
      <Explorer orgs={orgs} />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 24, fontWeight: 800 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#6b7280" }}>{label}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: { textAlign: "center", padding: "24px 0 12px" },
  title: { fontSize: 26, fontWeight: 800, lineHeight: 1.2, maxWidth: 700, margin: "0 auto" },
  subtitle: { fontSize: 15, color: "#4b5563", maxWidth: 640, margin: "8px auto 0", lineHeight: 1.5 },
  overview: { margin: "16px 0 24px", padding: "16px 20px", background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb" },
  statRow: { display: "flex", justifyContent: "space-around", marginBottom: 12 },
  gradeBar: { display: "flex", borderRadius: 6, overflow: "hidden" },
};
