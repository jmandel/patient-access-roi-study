/**
 * Org-Level Synthesis Schema
 *
 * Produced by synthesize-orgs, which reads all of an org's stage 3 notes
 * and stage 4 form evaluations, then produces a single org-level assessment:
 * both a qualitative narrative (synthesis.md) and structured data (scores.json).
 *
 * Unit of analysis is the ORGANIZATION, not the form. When an org has multiple
 * forms, we assess based on the best available pathway for a patient requesting
 * their own records ("high-watermark" principle). We don't average across forms
 * or penalize an org for having extra documents.
 *
 * The structured output goes deep on two key questions:
 *   1. Does this org offer a clear, patient-centric pathway for individual
 *      record access — or does it funnel patients through generic HIPAA
 *      authorization designed for third-party release?
 *   2. How well do the actual form documents serve a patient — are they
 *      fillable, clearly written, logically laid out, and free of
 *      unnecessary barriers?
 */

// ── Access Pathway Assessment ──────────────────────────────────────────

/** How the org routes a patient who wants their own records. */
export interface AccessPathwayAssessment {
  /** Does the org provide a route clearly designed for individual access,
   *  distinct from third-party authorization release? */
  has_individual_access_pathway: boolean;

  /** What a patient actually encounters — one-sentence description. */
  primary_pathway_description: string;

  /**
   * Classification of the primary pathway:
   * - "dedicated_patient_form": a form specifically for patient self-access
   * - "generic_hipaa_auth": a broad authorization form used for all releases
   * - "online_portal": web-based request wizard (e.g. Swellbox/Datavant)
   * - "patient_portal_only": only via EHR patient portal (MyChart etc.)
   * - "phone_or_in_person_only": no written/online option found
   * - "unclear": couldn't determine from available materials
   */
  primary_pathway_type:
    | "dedicated_patient_form"
    | "generic_hipaa_auth"
    | "online_portal"
    | "patient_portal_only"
    | "phone_or_in_person_only"
    | "unclear";

  /** Whether the form/process clearly distinguishes patient self-access
   *  from third-party release (separate forms, separate sections, or
   *  clearly labeled pathways). */
  differentiates_self_vs_third_party: boolean;

  /** Whether a patient can submit the request electronically — not just
   *  download a PDF, but actually send it in online (portal, email, or fax).
   *  Note: fax counts as electronic for scoring purposes. */
  online_submission_available: boolean;

  /** Whether in-person or postal mail is the ONLY submission option
   *  (no fax, email, or portal). This is the real barrier — fax-only
   *  is acceptable and should not be penalized. */
  requires_physical_delivery: boolean;
}

// ── Form Document Quality ──────────────────────────────────────────────

/** Quality assessment of the best available form document for patient access. */
export interface FormDocumentQuality {
  /** Is it an interactive/fillable PDF or web form (vs. flat scan/print-only)? */
  fillable_fields: boolean;

  /** Approximate number of fields/blanks a patient must complete. */
  field_count_estimate: number;

  /** Approximate page count of the primary form. */
  page_count: number;

  /** Does the form include clear instructions or guidance text for patients? */
  has_instructions: boolean;

  /** Is the layout clean, logically organized, with clear section headers? */
  clear_layout: boolean;

  /** Is the language plain and accessible — vs. dense legalese? */
  plain_language: boolean;

  /** Is the form available in languages other than English? */
  multilingual: boolean;

  /** Languages available (e.g. ["en", "es"]). */
  languages_available: string[];

  /** Does the form bundle consent for records release with other
   *  authorizations (e.g. treatment consent, billing authorization)
   *  in a way that may confuse patients? */
  consent_bundling: boolean;

  /** Does the form include a clear statement of patient rights
   *  (e.g., right to revoke, right to inspect, no-conditioning)? */
  includes_patient_rights: boolean;
}

// ── Barriers & Hygiene ─────────────────────────────────────────────────

/** Assessment of barriers, requirements, and form hygiene. */
export interface BarrierAssessment {
  /** Is notarization or a witness signature required? */
  requires_notarization_or_witness: boolean;

  /** Is in-person submission required (no mail/fax/electronic option)? */
  requires_in_person: boolean;

  /** Fee disclosure status:
   *  - "none_mentioned": form says nothing about fees
   *  - "free_for_patient_access": explicitly states no fee for individual access
   *  - "compliant": mentions fees that appear within HIPAA limits
   *  - "potentially_excessive": fees that may exceed HIPAA cost-based limits
   *  - "unclear": mentions fees but amounts/applicability are ambiguous */
  fee_disclosure:
    | "none_mentioned"
    | "free_for_patient_access"
    | "compliant"
    | "potentially_excessive"
    | "unclear";

  /** Does the form state a response time or turnaround commitment? */
  response_time_stated: boolean;

  /** Response time if stated, e.g. "30 days" */
  response_time_value: string | null;

  /** Specific red flags — requirements or language that may violate patient
   *  rights or create illegitimate barriers. Empty array if none. */
  red_flags: string[];

  /** Specific bright spots — things done unusually well that other orgs
   *  could learn from. Empty array if none. */
  bright_spots: string[];
}

// ── Scoring Rubrics ─────────────────────────────────────────────────────
//
// Each dimension is scored 1-5. Rubrics describe conceptual thresholds,
// not checklists. Apply the level that best fits what you observed.
//
// FINDABILITY (weight: 15%)
//   5 = Prominently available; minimal effort to locate.
//   4 = Easy to find with basic navigation or a simple search.
//   3 = Requires moderate effort or a non-obvious path.
//   2 = Difficult; requires persistence or creative search strategies.
//   1 = Effectively unfindable online.
//
// TECHNICAL ACCESSIBILITY (weight: 25%)
//   5 = Fully functional digital workflow from form completion through
//       submission — no printing or handwriting required.
//   4 = Mostly digital; one gap in the workflow (e.g., can fill digitally
//       but must fax, or must print but can submit electronically).
//   3 = Usable digitally with workarounds; fax submission available.
//   2 = Primarily a paper workflow (print, handwrite, mail or deliver).
//   1 = No usable digital form exists.
//
// CONTENT DESIGN (weight: 15%)
//   5 = Clear, concise, well-organized; a patient could complete it
//       without assistance.
//   4 = Well-organized with minor clarity or length issues.
//   3 = Adequate but has notable problems with clarity, language
//       complexity, or unnecessary length.
//   2 = Confusing, poorly organized, or unnecessarily complex.
//   1 = Unusable without significant effort or outside help.
//
// PATIENT-CENTEREDNESS (weight: 25%)
//   5 = Process designed around patient self-access as a first-class
//       use case, clearly distinct from third-party release.
//   4 = Patient access is clearly accommodated even if the form serves
//       multiple purposes.
//   3 = A patient can use the process but it wasn't designed for them;
//       they must figure out which parts apply.
//   2 = Patient self-access is an afterthought or not addressed.
//   1 = Process actively discourages or obstructs patient access.
//
// COMPLIANCE (weight: 20%)
//   5 = No unnecessary barriers; transparent about rights and costs.
//   4 = Minor ambiguities but nothing that would materially impede
//       a patient or misrepresent their rights.
//   3 = Some requirements or language that may go beyond what the law
//       requires for patient access.
//   2 = Requirements that likely exceed legal limits or create
//       illegitimate barriers.
//   1 = Clear violations of patient access rights or significant
//       barriers with no legal basis.

export interface DimensionalScore {
  /** 1 (worst) to 5 (best), per the rubric in this file. */
  score: number;
  /** One-sentence justification citing specific evidence. */
  rationale: string;
}

export interface OverallScore {
  /** Weighted average of dimensional scores. */
  score: number;
  /** Letter grade: A (4.5-5.0), B (3.5-4.4), C (2.5-3.4), D (1.5-2.4), F (<1.5). */
  grade: "A" | "B" | "C" | "D" | "F";
  /** One-sentence summary. */
  summary: string;
}

// ── Request Pathways & Retrieval Context ───────────────────────────────

/** A pathway through which a patient can request their records. */
export interface RequestPathway {
  /** How the request is submitted. */
  type: "pdf_form" | "online_portal" | "patient_portal" | "phone" | "in_person" | "email" | "fax" | "mail";

  /** Human-readable name, e.g. "Swellbox records request wizard", "MyChart" */
  name?: string;

  /** Third-party vendor or platform, if any. e.g. "Swellbox/Datavant", "Epic MyChart" */
  vendor?: string;

  /** URL for this pathway, if web-accessible. */
  url?: string;

  /** Whether this is the pathway the org primarily directs patients to. */
  is_primary: boolean;
}

/** A downloaded form/document classified by type. */
export interface RetrievedFormSummary {
  /** Local filename, e.g. "form-1.pdf" */
  filename: string;

  /** Original download URL. */
  source_url: string;

  /** Organizational scope: facility-specific, system-wide, department, or state-mandated. */
  scope: "facility" | "system" | "department" | "state";

  /** Language code, e.g. "en", "es" */
  language: string;

  /** What this document actually is. e.g. "ROI authorization form", "patient access request form",
   *  "fee schedule", "privacy notice", "form instructions" */
  document_type: string;
}

/** Retrieval context — how the search process went. */
export interface RetrievalContext {
  /** How difficult it was to find forms for this org. */
  difficulty: "easy" | "moderate" | "hard" | "impossible";

  /** Whether bot protection (Cloudflare, etc.) blocked any download attempt. */
  bot_blocking_encountered: boolean;

  /** Whether a browser fallback was needed to retrieve forms. */
  browser_fallback_needed: boolean;
}

// ── Top-Level Output ───────────────────────────────────────────────────

/** Complete org-level synthesis — the structured half of synthesize-orgs output. */
export interface OrgSynthesis {
  org_id: string;
  org_name: string;
  category_id: string;

  /** Filename of the form deemed most relevant for patient self-access. */
  primary_form: string;

  /** How many total documents (PDFs) were found for this org. */
  total_forms_found: number;

  /** Name of the parent health system, if part of one. Null if independent. */
  parent_system: string | null;

  /** Whether this facility uses its parent system's forms rather than its own. */
  uses_system_forms: boolean;

  /** All pathways a patient could use to request records (not just the primary one). */
  request_pathways: RequestPathway[];

  /** Classification of each downloaded document. */
  forms: RetrievedFormSummary[];

  /** How the retrieval process went. */
  retrieval: RetrievalContext;

  /** Deep assessment of the patient access pathway. */
  access_pathway: AccessPathwayAssessment;

  /** Deep assessment of the best available form's document quality. */
  form_quality: FormDocumentQuality;

  /** Assessment of barriers and hygiene issues. */
  barriers: BarrierAssessment;

  /** Dimensional + overall scores. */
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
