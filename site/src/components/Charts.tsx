import type { OrgData } from "../types";
import { GRADE_COLORS } from "../types";

export function GradeBadge({ grade, size = "md" }: { grade: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: { w: 28, fs: 13 }, md: { w: 36, fs: 16 }, lg: { w: 52, fs: 24 } };
  const s = sizes[size];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: s.w,
        height: s.w,
        borderRadius: 6,
        background: GRADE_COLORS[grade] || "#999",
        color: "#fff",
        fontWeight: 700,
        fontSize: s.fs,
      }}
    >
      {grade}
    </span>
  );
}

export function ScoreBar({ scores }: { scores: OrgData["scores"] }) {
  const dims = [
    { key: "findability", label: "Find", color: "#6366f1" },
    { key: "technical_accessibility", label: "Tech", color: "#8b5cf6" },
    { key: "content_design", label: "Content", color: "#a855f7" },
    { key: "patient_centeredness", label: "Patient", color: "#d946ef" },
    { key: "compliance", label: "Comply", color: "#ec4899" },
  ] as const;

  return (
    <div style={{ display: "flex", gap: 3, alignItems: "end" }}>
      {dims.map((d) => {
        const val = (scores as any)[d.key]?.score ?? 0;
        return (
          <div key={d.key} style={{ textAlign: "center", flex: 1 }}>
            <div
              style={{
                height: val * 8,
                background: d.color,
                borderRadius: "3px 3px 0 0",
                minHeight: 4,
              }}
            />
            <div style={{ fontSize: 9, color: "#666", marginTop: 2 }}>{d.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export function BoolIcon({ value, label }: { value: boolean; label: string }) {
  return (
    <span
      title={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 12,
        color: value ? "#16a34a" : "#dc2626",
        background: value ? "#f0fdf4" : "#fef2f2",
        padding: "2px 8px",
        borderRadius: 4,
      }}
    >
      {value ? "✓" : "✗"} {label}
    </span>
  );
}

export function PathwayBadge({ type }: { type: string }) {
  const labels: Record<string, { label: string; color: string }> = {
    dedicated_patient_form: { label: "Patient Form", color: "#16a34a" },
    generic_hipaa_auth: { label: "Generic Auth", color: "#ea580c" },
    online_portal: { label: "Online Portal", color: "#2563eb" },
    patient_portal_only: { label: "Patient Portal", color: "#7c3aed" },
    phone_or_in_person_only: { label: "Phone/In-Person", color: "#dc2626" },
    unclear: { label: "Unclear", color: "#6b7280" },
  };
  const info = labels[type] || { label: type, color: "#6b7280" };
  return (
    <span
      style={{
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 4,
        background: info.color + "18",
        color: info.color,
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {info.label}
    </span>
  );
}

export function Histogram({
  values,
  bins = 10,
  width = 300,
  height = 120,
  color = "#6366f1",
}: {
  values: number[];
  bins?: number;
  width?: number;
  height?: number;
  color?: string;
}) {
  if (!values.length) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const binWidth = range / bins;
  const counts = new Array(bins).fill(0);
  for (const v of values) {
    const i = Math.min(Math.floor((v - min) / binWidth), bins - 1);
    counts[i]++;
  }
  const maxCount = Math.max(...counts);
  const barW = (width - bins + 1) / bins;

  return (
    <svg width={width} height={height + 20} style={{ display: "block" }}>
      {counts.map((c, i) => (
        <g key={i}>
          <rect
            x={i * (barW + 1)}
            y={height - (c / maxCount) * height}
            width={barW}
            height={(c / maxCount) * height}
            fill={color}
            rx={2}
          />
          {i % Math.ceil(bins / 5) === 0 && (
            <text x={i * (barW + 1)} y={height + 14} fontSize={10} fill="#666">
              {(min + i * binWidth).toFixed(1)}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
