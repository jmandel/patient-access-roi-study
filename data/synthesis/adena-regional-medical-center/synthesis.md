# Adena Regional Medical Center — Org-Level Synthesis

## Overview

Adena Regional Medical Center, a nonprofit community hospital in Chillicothe, Ohio and part of the Adena Health System, provides a generic HIPAA authorization form for all records release requests. The organization does not differentiate between patient self-access and third-party release — patients requesting their own records must navigate the same form designed for disclosures to insurers, attorneys, and other third parties. Three documents were found on the organization's medical records request page: two versions of the same ROI authorization form (one current, one outdated) and a fee schedule.

## Available Pathways and Primary Form

The most relevant form for patient self-access is **form-1.pdf** (CLI.1777, Rev. 10/25), a one-page "Authorization: Release of Information Form" that serves as the current version. An older version (form-2.pdf, revised 09/02/2020) is also linked from the same page under "Option 3 – By Mail or Fax," creating confusion about which form to use. The fee schedule (form-3.pdf) is a supplementary document published as an image-only scan with no text layer.

Submission is available by mail or fax. Form-2 explicitly lists the fax number (740-779-7769) and mailing address; form-1 does not include a fax number, an oversight that may force patients to hunt for contact information. No online portal submission for records requests was found.

## Access Pathway Differentiation

Adena does **not** offer a dedicated patient access pathway. Both form versions use a three-way checkbox ("Obtain records from / Release records to / Exchange verbal information with") oriented toward third-party disclosure flows. A patient requesting their own records would need to check "Release records to" and enter their own name as recipient — a non-obvious workflow. The form includes "Personal" as a purpose-of-disclosure option, which is a helpful signal, but there is no mention of HIPAA's Right of Access (§ 164.524) or any language distinguishing patient-access requests from third-party authorizations.

## Retrieval Experience

Finding the forms was easy. A web search for the medical records release form surfaced the dedicated medical records request page at `/patients-and-visitors/patient-rights/medical-records-request` on the first attempt. No bot blocking, CAPTCHA, or JavaScript rendering issues were encountered. All PDFs were directly downloadable. The page is logically located under "Patient Rights," reachable in approximately three clicks from the homepage.

## Form Document Quality

Form-1 is a digitally-created, text-based PDF — not a scan — but has **zero fillable fields**. All blanks use underscores, requiring patients to print the form and complete it by hand (or use a third-party PDF annotation tool). The form fits on a single page, which is commendable for brevity, but the layout is cramped as a result. Sections flow logically (demographics → direction → recipient → date range → record types → purpose → rights → signature), though there are no formal section headers. The record type selection is comprehensive, offering 14 options including an "Abstract" bundle. Language is moderately legalistic, particularly in the "I understand the following" rights section. An "Administrative Use Only – Driver's license number" field at the very top may confuse patients into thinking it's required.

A notable positive: the form explicitly offers electronic delivery of records via email, putting it ahead of many peers. However, no encryption or secure delivery mechanism is mentioned.

## Barriers

The most significant barrier is a **witness signature requirement** — HIPAA does not require witness signatures for patient authorizations, and a patient filling out the form at home would need to find a witness, potentially discouraging submission. The form also collects the last four digits of SSN, which is common but not required by HIPAA and raises data security concerns.

Fee language is problematic: the form states charges "WILL" apply "in accordance with Ohio Law" without distinguishing patient-access requests (subject to HIPAA's cost-based fee cap) from third-party releases (subject to potentially higher state rates). The fee schedule is published proactively on the medical records page — a positive practice — but as an image-only scan it is inaccessible to screen readers, translation tools, and text search.

The psychotherapy notes checkbox requires "approval by psychotherapist," which is appropriate for third-party release but would constitute an impermissible barrier if applied to patient self-access requests.

## Overall Assessment

Adena Regional Medical Center provides a functional but unremarkable records request process. The form is easy to find and concise, with some thoughtful features like electronic delivery and comprehensive record type options. However, the lack of fillable fields, the generic third-party-oriented design, the witness signature requirement, and ambiguous fee language collectively create a process that works for patients who are persistent but was clearly not designed with patient self-access as a priority. The organization earns a **C grade** — adequate but with meaningful room for improvement in both form design and patient-centeredness.
