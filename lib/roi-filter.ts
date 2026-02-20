// Filter to orgs where we found an actual ROI / authorization form.
// Orgs where we only retrieved NPPs, employer forms, intake packets,
// or forms from the wrong organization are excluded — we can't assess
// their ROI form quality because we don't have one.

import type { OrgSynthesis } from "./synthesis-schema";

const POSITIVE_KEYWORDS = ["roi", "release", "authorization", "request", "access"];

const EXCLUDE_KEYWORDS = [
  "not an roi",
  "not a roi",
  "not a release",
  "not an roi form",
  "notice of privacy",
  "employer",
  "consent-to-treat",
  "registration packet",
  "amendment",
  "proxy",
  "verbal",
  "hie ",
  "wrong organization",
  "wrong facility",
  "not for general patients",
  "intake",
  "bill of rights",
];

/** Returns true if the org has at least one downloaded form that is
 *  an actual ROI / authorization / patient access form. */
export function hasRoiForm(synthesis: OrgSynthesis): boolean {
  for (const form of synthesis.forms ?? []) {
    const dt = (form.document_type ?? "").toLowerCase();
    const hasPositive = POSITIVE_KEYWORDS.some((kw) => dt.includes(kw));
    const hasExclude = EXCLUDE_KEYWORDS.some((kw) => dt.includes(kw));
    if (hasPositive && !hasExclude) return true;
  }
  return false;
}
