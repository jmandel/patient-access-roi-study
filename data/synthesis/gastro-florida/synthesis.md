# Gastro Florida — Org-Level Synthesis

## Overview

Gastro Florida is an independent, for-profit gastroenterology practice in Clearwater, FL. Notably, the organization **does not publish a downloadable ROI or patient access request form**. Instead, medical records requests are handled entirely through a third-party online portal operated by Sharecare/HDS. Three PDF documents were downloaded from the website — a new patient registration packet, an older NPP summary (2020), and an updated full NPP (2026) — but none functions as a records request form.

## Available Pathways and Primary Access Route

The primary pathway for a patient requesting their own records is the **Sharecare/HDS online portal** (https://myplatform.hds.sharecare.com/submission-tools/ui/patient?clientId=FL2000), linked from the Patient Forms page under "Medical Records Request." This is a fully digital, multi-step submission wizard with a progress bar showing approximately 31 steps and identity verification via driver's license or state ID. No PDF form is provided through this portal or elsewhere on the site.

The organization does differentiate between patient self-access and third-party release. The intake form (form-1.pdf) contains a narrow "Authorization to Release Information" clause limited to payor/provider disclosures for care coordination and billing, while the Sharecare portal handles patient-initiated records requests. These are structurally separate pathways, which is a positive design choice.

## Retrieval Experience

Finding the records request pathway required **moderate effort**. The website's dedicated "Medical Records" page (gastrofl.com/medical-records/) is completely empty — just a heading with no content, instructions, or links. A patient navigating there first would hit a dead end. The functional link lives on the Patient Forms page, where it appears alongside intake paperwork downloads. Multiple targeted web searches for a downloadable ROI form yielded nothing, because none exists. No bot-blocking or browser fallback issues were encountered.

## Form Document Quality

Since the primary mechanism is a web portal rather than a PDF form, traditional form quality metrics apply differently. The Sharecare portal provides a fully digital workflow — no printing, handwriting, or physical submission required. However, the 31-step process is substantially more complex than a typical records request form (which usually has 10–20 fields). The identity verification requirement (driver's license/state ID upload) adds friction that may exclude patients without government-issued photo ID.

The downloaded PDF documents themselves are not usable for records requests. The intake packet (form-1.pdf) has zero fillable fields despite dozens of blanks, requiring print-and-handwrite completion. The 2026 NPP (form-3.pdf) contains an unresolved "ClientName" template placeholder in its opening sentence — a clear production error indicating it was published from a vendor template without customization.

## Barriers and Compliance

No notarization or in-person submission is required; the portal is fully electronic. Fee language in the NPPs mentions "a reasonable, cost-based fee" without specifying amounts, consistent with HIPAA. The older NPP (form-2.pdf) states a 30-day turnaround, consistent with HIPAA requirements. No excessive fees or illegitimate barriers were identified in the records request pathway itself.

However, the intake form (form-1.pdf) bundles six unrelated authorizations under a single signature — including consent for treatment, promotional use of patient survey comments, and portal enrollment — with language stating Gastro Florida "has the right to refuse to treat you if you refuse to sign this consent." This consent bundling, while not directly related to records access, is a compliance concern.

## Notable Strengths

- **Dedicated online portal**: The Sharecare/HDS portal provides a purpose-built, fully digital pathway for patient records requests, clearly separated from third-party authorization.
- **No physical submission required**: Patients can complete the entire request digitally.
- **Named Privacy Officer with direct contact**: The updated NPP names Josh Frazier with a direct phone number.

## Notable Weaknesses

- **Empty Medical Records page**: The page that patients would most naturally navigate to for records access contains no content whatsoever.
- **No downloadable form option**: Patients who lack a driver's license, prefer paper, or have difficulty with multi-step web forms have no alternative pathway documented online.
- **Template errors**: The 2026 NPP contains "ClientName" instead of "Gastro Florida" — undermining trust and suggesting minimal quality review.
- **No instructions bridging patients to the portal**: Neither the NPPs nor the website explain what the Sharecare portal is, how to use it, or what to expect.

## Overall Assessment

Gastro Florida earns credit for adopting a modern, portal-based approach to patient records requests that cleanly separates patient access from third-party release. The technical implementation is strong. However, the surrounding patient experience is poor: the Medical Records page is broken, no guidance or instructions exist, and the portal's 31-step process with ID verification is unusually burdensome. The organization's digital infrastructure is good, but its patient-facing communication about how to use that infrastructure is inadequate.
