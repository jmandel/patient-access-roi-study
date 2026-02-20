/**
 * Abstraction Schema for ROI Form Retrieval Results
 *
 * After Stage 3 retrieves forms and notes for each organization, we need a
 * structured summary of what was found. This schema defines that summary.
 *
 * The goal is to capture the FULL landscape of how a patient can request their
 * records from this organization — not just the PDFs we downloaded, but also
 * online portals, phone options, and other pathways the org offers. This
 * matters because some orgs have moved entirely to portal-based intake
 * (e.g., Swellbox/Datavant wizards) and may not offer a downloadable form
 * at all.
 *
 * The abstraction also captures relationships between forms: many facilities
 * use their parent health system's forms rather than their own, and orgs
 * often have multiple versions (old/new, English/Spanish, department-specific).
 * Understanding these relationships is essential for fair evaluation — we
 * shouldn't penalize a community hospital for using its parent system's
 * well-designed form.
 *
 * This schema is used as the target format for Stage 3.5 (abstraction), where
 * an LLM reads each org's notes.md and metadata files and produces a
 * structured summary conforming to this interface.
 */

/** A pathway through which a patient can request their records. */
export interface RequestPathway {
  /** How the request is submitted. */
  type: "pdf_form" | "online_portal" | "patient_portal" | "phone" | "in_person" | "email" | "fax" | "mail";

  /** Human-readable name, e.g. "Swellbox records request wizard", "MyChart" */
  name?: string;

  /**
   * Third-party vendor or platform powering this pathway, if any.
   * e.g. "Swellbox/Datavant", "Epic MyChart", "Cerner", "Legal Image"
   */
  vendor?: string;

  /** URL for this pathway, if web-accessible. */
  url?: string;

  /**
   * Whether this appears to be the pathway the org primarily directs patients to.
   * An org may have a PDF form available but steer patients toward an online portal
   * as the default — in that case the portal is primary.
   */
  is_primary: boolean;
}

/** A downloaded form or document associated with this organization. */
export interface RetrievedForm {
  /** Local filename as downloaded, e.g. "form-1.pdf" */
  filename: string;

  /** Original URL from which this document was downloaded. */
  source_url: string;

  /**
   * Organizational scope of this form:
   * - "facility": specific to this hospital/clinic
   * - "system": covers the entire parent health system
   * - "department": specific to a department (e.g., oncology, behavioral health)
   * - "state": a state-mandated standard form
   */
  scope: "facility" | "system" | "department" | "state";

  /** Language of the form, e.g. "en", "es" */
  language: string;

  /**
   * Whether this appears to be the current/active version of the form,
   * as opposed to an older or superseded version still accessible online.
   */
  is_current: boolean;

  /**
   * What this document actually is, based on reading its content.
   * e.g. "ROI authorization form", "patient access request form",
   * "fee schedule", "privacy notice", "form instructions",
   * "department-specific records release"
   */
  document_type: string;
}

/**
 * Structured summary of an organization's ROI form retrieval results.
 * Produced by abstracting over the freeform notes.md and metadata files
 * from Stage 3.
 */
export interface OrgFormAbstraction {
  org_id: string;

  /**
   * All pathways a patient could use to request their records from this org.
   * Includes both traditional (PDF, mail, fax) and digital (portal, email).
   */
  request_pathways: RequestPathway[];

  /**
   * All documents downloaded during retrieval, with classification.
   * Includes ROI forms, related documents (fee schedules, instructions),
   * and even wrong-type documents — the evaluation stage will sort out
   * which ones matter.
   */
  forms: RetrievedForm[];

  /**
   * Name of the parent health system, if this facility is part of one.
   * e.g. "Northwell Health", "HCA Healthcare", "Ascension"
   * Null if the org operates independently.
   */
  parent_system: string | null;

  /**
   * Whether this facility uses its parent system's ROI forms rather than
   * its own facility-specific forms. Common for large health systems where
   * HIM is centralized. When true, the forms[] entries will typically have
   * scope "system" rather than "facility".
   */
  uses_system_forms: boolean;

  /** How difficult it was to find and download forms for this org. */
  retrieval_difficulty: "easy" | "moderate" | "hard" | "impossible";

  /** Whether any download attempt was blocked by bot protection (Cloudflare, etc.) */
  bot_blocking_encountered: boolean;

  /** Whether the Chrome DevTools browser fallback was needed to retrieve forms. */
  browser_fallback_needed: boolean;
}
