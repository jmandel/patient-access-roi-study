# Pocahontas Memorial Hospital — Org-Level Synthesis

## Overview

Pocahontas Memorial Hospital (PMH) is an independent, nonprofit critical access hospital in Buckeye, West Virginia. Two PDF forms were found on the hospital's Medical Records page: a general-purpose **Authorization for Release of Medical Information** (form-1, 2 pages) and a narrowly scoped **COVID-19 Testing Authorization** (form-2, 1 page). Only form-1 is relevant for a patient requesting their own records; form-2 is a pandemic-era authorization for releasing COVID test results to employers or schools.

## Access Pathway: Generic Authorization, No Dedicated Patient Form

PMH does not offer a dedicated patient access pathway. The sole route for a patient requesting their own records is the generic HIPAA authorization form (form-1), which is designed to handle all release scenarios — personal use, insurance, attorneys, and other third parties. The form does include "Personal use" as the first option under Purpose of Disclosure, and a patient can name themselves as the recipient, but the overall structure (recipient fields, entity authorization, third-party delivery options) is oriented toward release to others. There is no separate patient access request form, online portal, or patient portal–based request workflow.

## Retrieval Experience

Finding the form required moderate effort. A general web search for PMH authorization forms returned generic template sites rather than the hospital's own link. A site-scoped search (`site:pmhwv.org`) succeeded, and the form is linked from a logical location: Patients and Visitors > Medical Records. Bot protection on the website blocked direct programmatic (curl) downloads, requiring a browser-based workaround. A patient navigating the website directly would find the form in 2–3 clicks, which is reasonable for a small facility.

## Form Document Quality

Form-1 is a digitally created PDF with a text layer — not a scan — but it has **zero fillable fields**. All blanks are underscored lines requiring the patient to print and handwrite. The form is 2 pages with approximately 15–18 fields covering patient demographics, record type selection (about 10 checkbox options), date range, sensitive information opt-outs, purpose of disclosure, recipient information, and delivery preferences. The logical flow is sensible: patient info → what to release → purpose → recipient → delivery → authorization → signature.

Layout is functional but minimal. There are no bold section headers, boxed regions, or strong visual hierarchy beyond the document title and some capitalized labels. The sensitive information opt-out section is a dense paragraph with inline initial-lines that could be difficult to parse. Language is a mix of plain phrasing and standard legal boilerplate; the authorization paragraph on page 2 is a single dense block. A notable text encoding defect drops the "ti" ligature throughout the PDF (rendering "Patient" as "Pa ent," "authorization" as "authoriza on," etc.), which breaks screen readers and text search — a significant accessibility flaw.

## Submission Methods & Delivery Options

The form offers multiple submission and delivery options: in-person pickup (self or authorized representative), US Mail, fax (304-799-2276), and email. Format options explicitly include Paper and Electronic (email, USB, CD, Portal, other). This is a notably comprehensive set of electronic delivery options for a small critical access hospital. Since fax is available, a patient can submit without physically visiting the facility.

## Barriers and Compliance

**No notarization required** — only a patient signature. The form includes a clear **non-conditioning statement** ("may not condition its providing of health care on whether copies... are released"), an unusual and commendable inclusion for a small rural facility. A **30-day response time** is stated, consistent with HIPAA requirements. Revocation and re-disclosure language are present and standard.

However, the form states **"Photo ID is required"** as a blanket requirement without clarifying whether this applies only to in-person pickup or also to mailed/faxed requests — a potential barrier for remote patients. **Fee disclosure is vague**: "All other requestors are charged as state and federal laws allow" provides no specific amounts, leaving patients unable to estimate costs. These are not dealbreakers but reflect areas where the form could better serve patients.

## Strengths and Weaknesses

**Bright spots**: Electronic format options explicitly listed (email, USB, CD, Portal); multiple delivery methods; non-conditioning statement included; 30-day response time stated; logical form flow.

**Red flags**: Zero fillable fields despite being digitally created; blanket photo ID requirement; vague fee disclosure; systematic text encoding defect affecting accessibility; "Snowshoe Mountain Clinic" listed as a record type alongside clinical categories (confusing).

## Overall Assessment

PMH provides a functional but unexceptional records request process typical of a small independent critical access hospital. The form is findable, logically organized, and offers commendable delivery flexibility. However, the lack of a dedicated patient access pathway, zero fillable fields, and several barrier concerns prevent it from rising above average. The form adequately serves a patient who knows what they need, but it wasn't designed with the patient self-access use case as a priority.
