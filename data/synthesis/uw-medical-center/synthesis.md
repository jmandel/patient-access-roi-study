# UW Medical Center — Org-Level Synthesis

## Overview

UW Medical Center, part of the UW Medicine system (University of Washington), provides a single ROI form for all of its facilities: "Patient Authorization to Disclose, Release, and/or Obtain Protected Health Information" (form U0626, version V.2512, last approved December 2025). This 3-page fillable PDF covers Harborview Medical Center, UW Medical Center (Montlake and Northwest campuses), UW Medicine Primary Care, and UW Physicians. No separate patient-access-specific form exists — this is a generic HIPAA authorization serving both patient self-access and third-party release.

## Access Pathway Differentiation

UW Medicine does **not** offer a dedicated patient access form distinct from third-party authorization. The single form handles all release scenarios — attorneys, providers, insurers, and patients alike. The "Purpose of Request" section includes a "Personal" checkbox, and the "Recipient of Records" field lists "Patient" as one example alongside "Insurance Company, Attorney, Physician." A patient can certainly use this form, but the framing treats self-access as one option among many rather than a first-class use case.

However, UW Medicine partially compensates with an outstanding **MyChart fast-track**: the form opens with a prominent callout — *"Recent medical records are available via MyChart for immediate download without filling out this form"* — and page 3 elaborates with instructions and a URL. The form also notes that an electronic request form is available within MyChart as an alternative. This effectively creates a two-tier system: MyChart for recent records (instant, self-service), and the paper authorization for everything else.

## Retrieval Experience

Finding the form was **straightforward**. Web searches for UW Medical Center ROI terms immediately surfaced it, and the UW Medicine website's Patient Forms page links directly to the canonical URL on the UW compliance site (`depts.washington.edu/comply/docs/103f7_AuthRq.pdf`). One complication: the uwmedicine.org CDN blocks programmatic downloads (403 errors), but since the official patient forms page links to the compliance-hosted version, patients following the normal path encounter no issues. No browser fallback was needed for the working URL.

## Form Document Quality

The form is a well-designed interactive PDF with **61 fillable fields**, a full text layer, and 10 embedded fonts — clearly a digital-first document, not a scan. The layout follows a logical **numbered structure** (Items #1–7): patient information, purpose, facility selection, recipient, record types, format preferences, and expiration. This is easy to follow and a patient could complete it without assistance.

**Language** is mostly plain and accessible, though the patient rights section on page 2 includes a dense legal paragraph about conditioning treatment on authorization that would challenge many readers. Page 3 provides item-by-item **completion instructions** — an unusual and genuinely helpful addition that sets this form apart.

**Delivery format options** are exceptional: CD/DVD, Paper, MyChart, USB/Thumb Drive, and Email — five choices, more than nearly any other provider form. **Submission channels** are equally strong: postal mail, fax ((206) 744-9997), and email (uwmedroi@uw.edu), with separate contacts for billing records.

## Barriers

No significant barriers exist. There is **no notarization or witness requirement**, no in-person submission mandate, and no fee disclosure on the form (neither a stated fee nor a stated exemption). The 3-year default authorization expiration is generous. Revocation requires a written request to the Compliance Office — standard but could be more accessible.

One ambiguity: the form includes a blanket statement that the authorization "permits UW Medicine to release information related to sexually transmitted diseases, HIV/AIDS, behavioral or mental health services, and treatment for alcohol and drug abuse," which could confuse patients about whether signing automatically releases all sensitive categories.

## Notable Strengths

- **MyChart fast-track** at the top of the form actively diverts patients to faster self-service
- **Five delivery formats** give patients genuine choice
- **Three submission channels** (mail, fax, email) with complete contact information
- **Instruction page** with item-by-item guidance and honest expectations about record completeness
- **Multi-facility coverage** via a single form with clear facility checkboxes
- **Sensitive information opt-in model** for specific unit records (sexual assault, mental health, living donor)

## Weaknesses

- No dedicated patient access form — generic authorization serves all purposes
- No mention of HIPAA Right of Access (§ 164.524) or fee limits for patient access
- "PLACE PATIENT LABEL HERE" hospital artifact may confuse patients filling out at home
- Fillable field names are empty in metadata, potentially indicating accessibility deficiencies for screen readers

## Overall Assessment

UW Medical Center provides a **competent, well-designed generic authorization form** with strong digital capabilities and multiple submission options. The MyChart promotion is a standout patient-centering feature that partially compensates for the lack of a dedicated patient access pathway. The form's thorough instruction page, granular record selection, and five delivery formats demonstrate genuine care for usability. The main gap is structural: patients requesting their own records navigate the same form designed for attorneys and insurers, with no acknowledgment that their rights and fee protections differ. This is a solid B-level experience — functional, accessible, and mostly patient-friendly, but not designed around patient self-access as a primary use case.
