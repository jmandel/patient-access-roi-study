import { useState, useMemo } from "react";
import type { OrgData } from "../types";
import { GRADE_COLORS, DIMENSIONS } from "../types";
import { GradeBadge, ScoreBar, PathwayBadge, Histogram } from "../components/Charts";

type SortKey = "org_name" | "state" | "grade" | "overall" | "findability" | "technical_accessibility" | "content_design" | "patient_centeredness" | "compliance" | "pathway" | "forms";

interface Filters {
  search: string;
  grades: Set<string>;
  pathwayTypes: Set<string>;
  axisFilters: Record<string, Set<string>>;
  booleans: Record<string, boolean | null>;
  difficulty: Set<string>;
}

const PATHWAY_TYPES = [
  "dedicated_patient_form",
  "generic_hipaa_auth",
  "online_portal",
  "patient_portal_only",
  "phone_or_in_person_only",
  "unclear",
];

const BOOL_FILTERS = [
  { key: "fillable_fields", label: "Fillable", path: (o: OrgData) => o.form_quality?.fillable_fields },
  { key: "has_individual_access_pathway", label: "Individual Access Pathway", path: (o: OrgData) => o.access_pathway?.has_individual_access_pathway },
  { key: "differentiates", label: "Differentiates Self vs. 3rd Party", path: (o: OrgData) => o.access_pathway?.differentiates_self_vs_third_party },
  { key: "online_submit", label: "Online Submission", path: (o: OrgData) => o.access_pathway?.online_submission_available },
  { key: "multilingual", label: "Multilingual", path: (o: OrgData) => o.form_quality?.multilingual },
  { key: "notarization", label: "Requires Notarization/Witness", path: (o: OrgData) => o.barriers?.requires_notarization_or_witness },
  { key: "has_red_flags", label: "Has Red Flags", path: (o: OrgData) => (o.barriers?.red_flags?.length ?? 0) > 0 },
];

function getAxisValues(orgs: OrgData[]): Record<string, string[]> {
  const axes: Record<string, Set<string>> = {};
  for (const o of orgs) {
    for (const [k, v] of Object.entries(o.axes || {})) {
      if (!axes[k]) axes[k] = new Set();
      axes[k].add(v);
    }
  }
  return Object.fromEntries(Object.entries(axes).map(([k, s]) => [k, [...s].sort()]));
}

export function Explorer({ orgs }: { orgs: OrgData[] }) {
  const axisValues = useMemo(() => getAxisValues(orgs), [orgs]);
  const [sortKey, setSortKey] = useState<SortKey>("overall");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [filters, setFilters] = useState<Filters>({
    search: "",
    grades: new Set(),
    pathwayTypes: new Set(),
    axisFilters: {},
    booleans: {},
    difficulty: new Set(),
  });

  const filtered = useMemo(() => {
    return orgs.filter((o) => {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const match =
          o.org_name?.toLowerCase().includes(q) ||
          o.city?.toLowerCase().includes(q) ||
          o.state?.toLowerCase().includes(q) ||
          o.parent_system?.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (filters.grades.size && !filters.grades.has(o.scores?.overall?.grade)) return false;
      if (filters.pathwayTypes.size && !filters.pathwayTypes.has(o.access_pathway?.primary_pathway_type)) return false;
      if (filters.difficulty.size && !filters.difficulty.has(o.retrieval?.difficulty)) return false;
      for (const [axis, vals] of Object.entries(filters.axisFilters)) {
        if (vals.size && !vals.has(o.axes?.[axis])) return false;
      }
      for (const bf of BOOL_FILTERS) {
        const fval = filters.booleans[bf.key];
        if (fval != null && bf.path(o) !== fval) return false;
      }
      return true;
    });
  }, [orgs, filters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      let av: any, bv: any;
      switch (sortKey) {
        case "org_name": av = a.org_name; bv = b.org_name; break;
        case "state": av = a.state; bv = b.state; break;
        case "grade": av = a.scores?.overall?.grade; bv = b.scores?.overall?.grade; break;
        case "overall": av = a.scores?.overall?.score ?? 0; bv = b.scores?.overall?.score ?? 0; break;
        case "pathway": av = a.access_pathway?.primary_pathway_type; bv = b.access_pathway?.primary_pathway_type; break;
        case "forms": av = a.total_forms_found ?? 0; bv = b.total_forms_found ?? 0; break;
        default: av = (a.scores as any)?.[sortKey]?.score ?? 0; bv = (b.scores as any)?.[sortKey]?.score ?? 0;
      }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("desc"); }
  };

  const toggleGrade = (g: string) => {
    const next = new Set(filters.grades);
    next.has(g) ? next.delete(g) : next.add(g);
    setFilters({ ...filters, grades: next });
  };

  const togglePathway = (p: string) => {
    const next = new Set(filters.pathwayTypes);
    next.has(p) ? next.delete(p) : next.add(p);
    setFilters({ ...filters, pathwayTypes: next });
  };

  const toggleAxis = (axis: string, val: string) => {
    const cur = filters.axisFilters[axis] ?? new Set();
    const next = new Set(cur);
    next.has(val) ? next.delete(val) : next.add(val);
    setFilters({ ...filters, axisFilters: { ...filters.axisFilters, [axis]: next } });
  };

  const toggleBool = (key: string) => {
    const cur = filters.booleans[key];
    const next = cur === true ? false : cur === false ? null : true;
    setFilters({ ...filters, booleans: { ...filters.booleans, [key]: next } });
  };

  const overallScores = filtered.map((o) => o.scores?.overall?.score).filter((s): s is number => s != null);
  const mean = overallScores.length ? (overallScores.reduce((a, b) => a + b, 0) / overallScores.length).toFixed(2) : "–";

  const SortHeader = ({ k, label, w }: { k: SortKey; label: string; w?: number }) => (
    <th
      onClick={() => toggleSort(k)}
      style={{ ...thStyle, width: w, cursor: "pointer", userSelect: "none" }}
    >
      {label} {sortKey === k ? (sortDir === "asc" ? "↑" : "↓") : ""}
    </th>
  );

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.filterSection}>
          <input
            type="text"
            placeholder="Search name, city, state…"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.filterSection}>
          <div style={styles.filterTitle}>Grade</div>
          <div style={{ display: "flex", gap: 4 }}>
            {["A", "B", "C", "D", "F"].map((g) => (
              <button
                key={g}
                onClick={() => toggleGrade(g)}
                style={{
                  ...styles.filterChip,
                  background: filters.grades.has(g) ? GRADE_COLORS[g] : "#f3f4f6",
                  color: filters.grades.has(g) ? "#fff" : "#374151",
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.filterSection}>
          <div style={styles.filterTitle}>Pathway Type</div>
          {PATHWAY_TYPES.map((p) => (
            <label key={p} style={styles.checkLabel}>
              <input
                type="checkbox"
                checked={filters.pathwayTypes.has(p)}
                onChange={() => togglePathway(p)}
              />
              {p.replace(/_/g, " ")}
            </label>
          ))}
        </div>

        {Object.entries(axisValues).map(([axis, vals]) => (
          <div key={axis} style={styles.filterSection}>
            <div style={styles.filterTitle}>{axis.replace(/_/g, " ")}</div>
            {vals.map((v) => (
              <label key={v} style={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={filters.axisFilters[axis]?.has(v) ?? false}
                  onChange={() => toggleAxis(axis, v)}
                />
                {v.replace(/_/g, " ")}
              </label>
            ))}
          </div>
        ))}

        <div style={styles.filterSection}>
          <div style={styles.filterTitle}>Attributes</div>
          {BOOL_FILTERS.map((bf) => {
            const val = filters.booleans[bf.key];
            return (
              <button
                key={bf.key}
                onClick={() => toggleBool(bf.key)}
                style={{
                  ...styles.filterChip,
                  width: "100%",
                  textAlign: "left",
                  background: val === true ? "#dbeafe" : val === false ? "#fee2e2" : "#f3f4f6",
                  marginBottom: 4,
                }}
              >
                {val === true ? "✓ " : val === false ? "✗ " : "  "}{bf.label}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Stats bar */}
        <div style={styles.statsBar}>
          <span><strong>{filtered.length}</strong> of {orgs.length} orgs</span>
          <span>Mean: <strong>{mean}</strong></span>
          <span style={{ display: "flex", gap: 4 }}>
            {["A", "B", "C", "D", "F"].map((g) => {
              const n = filtered.filter((o) => o.scores?.overall?.grade === g).length;
              return n > 0 ? (
                <span key={g} style={{ fontSize: 11, color: GRADE_COLORS[g], fontWeight: 600 }}>
                  {g}:{n}
                </span>
              ) : null;
            })}
          </span>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <SortHeader k="org_name" label="Organization" w={220} />
                <SortHeader k="state" label="State" w={50} />
                <SortHeader k="grade" label="Grade" w={60} />
                <SortHeader k="overall" label="Score" w={60} />
                <SortHeader k="pathway" label="Pathway" w={120} />
                <th style={{ ...thStyle, width: 100 }}>Dimensions</th>
                <SortHeader k="forms" label="Forms" w={50} />
              </tr>
            </thead>
            <tbody>
              {sorted.map((o) => (
                <tr
                  key={o.org_id}
                  onClick={() => (window.location.hash = `/explorer/${o.org_id}`)}
                  style={styles.row}
                >
                  <td style={tdStyle}>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{o.org_name}</div>
                    <div style={{ fontSize: 11, color: "#6b7280" }}>{o.city}, {o.state}</div>
                  </td>
                  <td style={tdStyle}>{o.state}</td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    <GradeBadge grade={o.scores?.overall?.grade} size="sm" />
                  </td>
                  <td style={{ ...tdStyle, textAlign: "center", fontWeight: 600 }}>
                    {o.scores?.overall?.score?.toFixed(1)}
                  </td>
                  <td style={tdStyle}>
                    <PathwayBadge type={o.access_pathway?.primary_pathway_type} />
                  </td>
                  <td style={tdStyle}>
                    <ScoreBar scores={o.scores} />
                  </td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>{o.total_forms_found}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "8px 6px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 600,
  color: "#6b7280",
  textTransform: "uppercase",
  letterSpacing: 0.5,
  borderBottom: "2px solid #e5e7eb",
  background: "#fafbfc",
};

const tdStyle: React.CSSProperties = {
  padding: "8px 6px",
  fontSize: 13,
  borderBottom: "1px solid #f3f4f6",
  verticalAlign: "middle",
};

const styles: Record<string, React.CSSProperties> = {
  sidebar: {
    width: 240,
    flexShrink: 0,
    background: "#fff",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    padding: 12,
    alignSelf: "flex-start",
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
    fontSize: 12,
  },
  filterSection: { marginBottom: 16 },
  filterTitle: { fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", marginBottom: 6 },
  searchInput: {
    width: "100%",
    padding: "6px 10px",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    fontSize: 13,
    outline: "none",
  },
  filterChip: {
    padding: "4px 10px",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 12,
    fontWeight: 600,
  },
  checkLabel: { display: "flex", alignItems: "center", gap: 4, marginBottom: 3, cursor: "pointer" },
  statsBar: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    padding: "8px 12px",
    background: "#fff",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
    marginBottom: 12,
    fontSize: 13,
  },
  table: { width: "100%", borderCollapse: "collapse", background: "#fff" },
  row: { cursor: "pointer", transition: "background 0.1s" },
};
