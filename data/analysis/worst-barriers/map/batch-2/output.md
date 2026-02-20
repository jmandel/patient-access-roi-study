# Worst Barriers — Batch 2

## 1. Consensus Health: Functionally Nonexistent Online Access (D grade, 2.05/5)

Consensus Health, a for-profit physician practice network in New Jersey, has no patient forms page, no medical records section, and no ROI form linked from its website. The only form found was an unbranded, generic one-page PDF on a third-party PatientPop CDN — discovered only through extensive searching. That form has **no submission instructions** (no address, fax, email, or portal link), **no organizational branding**, and is **missing required HIPAA authorization elements** (no expiration date, no revocation language, no disclosing entity). A patient who finds this form has no idea it belongs to their provider and no way to return it. This is the most complete failure in the batch — not hostile, but functionally absent.

## 2. Tioga Medical Center: Image-Only Scan, Witness Requirement

This small critical access hospital in North Dakota provides a PDF that is an **image-only fax scan** at 200 DPI — zero text layer, zero fillable fields, completely inaccessible to screen readers. The form includes a **witness signature line** with no indication it's optional, creating a real barrier for rural patients completing forms at home. The Release From/To structure forces patients to awkwardly list themselves as the recipient with no guidance. For a facility serving a remote population, the entirely analog workflow (print, handwrite, fax or mail) compounds the accessibility problem.

## 3. Cottage Hospital: Cloudflare-Blocked Website

This independent critical access hospital in Woodsville, NH has its entire website blocked by **Cloudflare Turnstile bot protection**, preventing direct access. Forms were only retrievable via Wayback Machine archives. The form itself has no submission instructions, a witness signature line, and confusing phantom page numbering ("PAGE 14 OF 28" on a standalone one-page form). A patient visiting cottagehospital.org would hit a wall before even finding the form.

## 4. Grady Memorial Hospital: Paper-Only Submission with Liability Waiver

This major government hospital in Atlanta (700+ beds) offers **no electronic submission pathway** — no fax, no email, no portal for submitting the completed form. Patients must mail or physically deliver forms. The form bundles a **broad liability waiver** ("not to hold Grady responsible for anything that may happen from use or release of PHI") and threatens that incomplete forms "may be considered invalid." Combined with SSN collection and zero fillable fields, this creates a discouraging gauntlet for patients at a safety-net hospital serving a vulnerable population.

## 5. OSU Wexner Medical Center: Mail-Only Submission from a Major Teaching Hospital

Despite being a flagship academic medical center, Ohio State requires patients to **print, handwrite, and physically mail** their authorization form — no fax number, no email submission, no portal. The form mandates a "Purpose of Disclosure" for all requests, which HIPAA does not require for patient self-access. Fee questions are routed to a third-party vendor (CIOX Health) with no schedule provided. For a well-resourced institution, this paper-only workflow is a surprising gap.

## 6. Ironwood Cancer & Research Centers: Form Not Linked from Website

This Arizona oncology practice's ROI form is **not linked from any page on its website** — it was only discoverable via search engine indexing of a WordPress uploads directory. Meanwhile, the provider-facing incoming records form has 22 fillable fields while the patient-facing form has zero. The form also cites **Washington State law (RCW 70.24)** despite being an Arizona practice, suggesting a template was copied without review.

## 7. Adena Regional Medical Center: Witness Required, Psychotherapy Gating

This Ohio community hospital **requires a witness signature** on its ROI form — a requirement HIPAA does not impose for patient access. The form also states that psychotherapy notes require **psychotherapist approval** before release, which would be an impermissible barrier if applied to patient self-access requests. Fee language states charges "WILL" apply per Ohio law, with no acknowledgment of HIPAA's lower cost-based cap for patient access.

## 8. Millinocket Regional Hospital: Decade-Old Form with Opt-Out Record Types

This Maine critical access hospital's sole form hasn't been updated since **2014** and was only findable via a site-scoped search. Its record type section uses an unusual **opt-out model** — all 18 categories are released unless crossed out — creating double-negative logic. The form warns that "refusal or revocation may result in improper diagnosis or treatment, denial of health benefits" — alarming language that could discourage patients from exercising their rights, even though it applies to third-party scenarios.

## 9. UPMC Presbyterian: 90-Day Expiration, Payment-Conditioned Access

UPMC's form defaults to a **90-day authorization expiration** — unusually short and unnecessary for patient access. More concerning, the form states "records will be sent upon receipt of payment," which could be read as **conditioning access on prepayment**, potentially conflicting with HIPAA's requirement for timely access. The form has essentially zero fillable fields despite being born-digital, and there is no online submission portal.

## Summary of Barrier Patterns

Three systemic patterns dominate this batch:

**Missing submission instructions** is the most common critical failure — Consensus Health, Cottage Hospital, Ironwood, Hillcrest Claremore, Advocate Good Samaritan, Black River Memorial, and several others publish forms with no indication of where to send them. This transforms a usable form into a dead end.

**Non-fillable PDFs remain the norm**, even from born-digital documents at well-resourced institutions. Of ~50 organizations in this batch, the majority have zero fillable fields, forcing a print-handwrite-scan workflow. NorthLakes Community Clinic actually *regressed* from fillable to non-fillable in its 2023 revision.

**Witness signature requirements** appear at Tioga, Cottage Hospital, Adena, and ambiguously at several others (Lakeland Regional, Nevada Health Centers, Ben Taub, Cuba Memorial). HIPAA does not require witnesses for patient access requests, and this barrier disproportionately affects isolated and rural patients who may not have someone available to witness.

The pattern is overwhelmingly one of **indifference rather than intentional obstruction** — forms designed for inter-provider information exchange that were never adapted for patient self-access. The organizations causing the most friction tend to be smaller independent facilities (critical access hospitals, physician practices) with limited administrative resources, though notable exceptions like Grady and OSU Wexner show that size does not guarantee a modern process.
