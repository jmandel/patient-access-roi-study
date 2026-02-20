import type { SiteStats, OrgData } from "../types";
import { GRADE_COLORS } from "../types";
import { GradeBadge, Histogram } from "../components/Charts";

export function Landing({ stats, orgs }: { stats: SiteStats; orgs: OrgData[] }) {
  const overallScores = orgs.map((o) => o.scores.overall.score).filter((s) => s != null);
  const gradeEntries = Object.entries(stats.grades).filter(([, n]) => n > 0);
  const total = gradeEntries.reduce((a, [, n]) => a + n, 0);

  // Count key stats
  const hasDedicatedForm = orgs.filter((o) => o.access_pathway?.primary_pathway_type === "dedicated_patient_form").length;
  const hasFillable = orgs.filter((o) => o.form_quality?.fillable_fields).length;
  const hasPortal = orgs.filter((o) => o.access_pathway?.primary_pathway_type === "online_portal").length;
  const pctDedicated = total ? Math.round((hasDedicatedForm / total) * 100) : 0;

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}>How Easy Is It to Request Your Health Records?</h1>
        <p style={styles.subtitle}>
          A study of {stats.totalOrgs} healthcare organizations' Release of Information forms
          and processes — evaluating findability, accessibility, design, patient-centeredness,
          and compliance.
        </p>
      </header>

      {/* Headline stats */}
      <div style={styles.statGrid}>
        <StatCard value={stats.totalOrgs.toString()} label="Organizations Studied" />
        <StatCard value={stats.meanScore.toFixed(1)} label="Mean Score (1-5)" />
        <StatCard value={stats.medianScore.toFixed(1)} label="Median Score" />
        <StatCard value={`${pctDedicated}%`} label="Have Dedicated Patient Form" />
      </div>

      {/* Grade distribution */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Grade Distribution</h2>
        <div style={styles.gradeBar}>
          {gradeEntries.map(([grade, count]) => (
            <div
              key={grade}
              style={{
                flex: count,
                background: GRADE_COLORS[grade],
                color: "#fff",
                textAlign: "center",
                padding: "12px 4px",
                fontSize: 14,
                fontWeight: 600,
                minWidth: count > 0 ? 40 : 0,
              }}
            >
              {grade}: {count}
            </div>
          ))}
        </div>
      </div>

      {/* Score distribution */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Overall Score Distribution</h2>
        <Histogram values={overallScores} width={600} height={140} bins={15} />
      </div>

      {/* Key findings cards */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Findings</h2>
        <div style={styles.cardGrid}>
          <FindingCard
            icon="📋"
            title="The Wrong Form Problem"
            text={`Only ${pctDedicated}% of orgs offer a form specifically designed for patient self-access. The rest funnel patients through generic third-party authorization forms.`}
          />
          <FindingCard
            icon="💻"
            title="Digital Readiness"
            text={`${Math.round((hasFillable / total) * 100)}% of organizations offer fillable/interactive forms. The rest require printing and handwriting.`}
          />
          <FindingCard
            icon="🌐"
            title="Portal Adoption"
            text={`${Math.round((hasPortal / total) * 100)}% of orgs use an online portal as their primary request pathway — but does portal mean better?`}
          />
          <FindingCard
            icon="🔍"
            title="Explore the Data"
            text="Every organization, every score, every form — browse, filter, and draw your own conclusions."
            link="#/explorer"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={styles.stat}>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function FindingCard({ icon, title, text, link }: { icon: string; title: string; text: string; link?: string }) {
  const inner = (
    <div style={styles.card}>
      <div style={{ fontSize: 28 }}>{icon}</div>
      <h3 style={{ fontSize: 16, fontWeight: 600, margin: "8px 0 4px" }}>{title}</h3>
      <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.5 }}>{text}</p>
    </div>
  );
  return link ? <a href={link} style={{ textDecoration: "none", color: "inherit" }}>{inner}</a> : inner;
}

const styles: Record<string, React.CSSProperties> = {
  header: { textAlign: "center", padding: "40px 0 32px" },
  title: { fontSize: 32, fontWeight: 800, lineHeight: 1.2, maxWidth: 700, margin: "0 auto" },
  subtitle: { fontSize: 16, color: "#4b5563", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.6 },
  statGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16, margin: "24px 0" },
  stat: { background: "#fff", borderRadius: 8, padding: "20px 16px", textAlign: "center", border: "1px solid #e5e7eb" },
  statValue: { fontSize: 32, fontWeight: 800, color: "#1a1a2e" },
  statLabel: { fontSize: 12, color: "#6b7280", marginTop: 4 },
  section: { margin: "32px 0" },
  sectionTitle: { fontSize: 20, fontWeight: 700, marginBottom: 16 },
  gradeBar: { display: "flex", borderRadius: 8, overflow: "hidden" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 },
  card: { background: "#fff", borderRadius: 8, padding: 20, border: "1px solid #e5e7eb", height: "100%" },
};
