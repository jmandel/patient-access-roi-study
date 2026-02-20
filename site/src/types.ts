/** Shared types mirroring OrgSynthesis from the pipeline */

export interface DimensionalScore {
  score: number;
  rationale: string;
}

export interface OverallScore {
  score: number;
  grade: "A" | "B" | "C" | "D" | "F";
  summary: string;
}

export interface AccessPathway {
  has_individual_access_pathway: boolean;
  primary_pathway_description: string;
  primary_pathway_type: string;
  differentiates_self_vs_third_party: boolean;
  online_submission_available: boolean;
  requires_physical_delivery: boolean;
}

export interface FormQuality {
  fillable_fields: boolean;
  field_count_estimate: number;
  page_count: number;
  has_instructions: boolean;
  clear_layout: boolean;
  plain_language: boolean;
  multilingual: boolean;
  languages_available: string[];
  consent_bundling: boolean;
  includes_patient_rights: boolean;
}

export interface Barriers {
  requires_notarization_or_witness: boolean;
  requires_in_person: boolean;
  fee_disclosure: string;
  response_time_stated: boolean;
  response_time_value: string | null;
  red_flags: string[];
  bright_spots: string[];
}

export interface RetrievalContext {
  difficulty: string;
  bot_blocking_encountered: boolean;
  browser_fallback_needed: boolean;
}

export interface RequestPathway {
  type: string;
  name?: string;
  vendor?: string;
  url?: string;
  is_primary: boolean;
}

export interface RetrievedFormSummary {
  filename: string;
  source_url: string;
  scope: string;
  language: string;
  document_type: string;
}

export interface OrgData {
  org_id: string;
  org_name: string;
  category_id: string;
  city: string;
  state: string;
  website: string;
  axes: Record<string, string>;
  primary_form: string;
  total_forms_found: number;
  parent_system: string | null;
  uses_system_forms: boolean;
  request_pathways: RequestPathway[];
  forms: RetrievedFormSummary[];
  retrieval: RetrievalContext;
  access_pathway: AccessPathway;
  form_quality: FormQuality;
  barriers: Barriers;
  scores: {
    findability: DimensionalScore;
    technical_accessibility: DimensionalScore;
    content_design: DimensionalScore;
    patient_centeredness: DimensionalScore;
    compliance: DimensionalScore;
    overall: OverallScore;
  };
  synthesized_at: string;
}

export interface SiteStats {
  totalOrgs: number;
  grades: Record<string, number>;
  meanScore: number;
  medianScore: number;
}

export const GRADE_COLORS: Record<string, string> = {
  A: "#22c55e",
  B: "#84cc16",
  C: "#eab308",
  D: "#f97316",
  F: "#ef4444",
};

export const DIMENSIONS = [
  { key: "findability", label: "Findability", weight: 0.15 },
  { key: "technical_accessibility", label: "Technical", weight: 0.25 },
  { key: "content_design", label: "Content", weight: 0.15 },
  { key: "patient_centeredness", label: "Patient-Centered", weight: 0.25 },
  { key: "compliance", label: "Compliance", weight: 0.20 },
] as const;
