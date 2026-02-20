# CentraCare – Long Prairie Hospital: Org-Level Synthesis

## Overview

CentraCare – Long Prairie Hospital is a critical access hospital in Long Prairie, MN, part of the CentraCare regional health system based in St. Cloud. Long Prairie does not maintain its own facility-specific medical records request forms; instead, it uses CentraCare's system-wide "Authorization for Release of Health Information" form, available from a centralized medical records release page at centracare.com. Three documents were found: the main ROI authorization form, a companion instruction sheet, and a separate substance use disorder consent form.

## Access Pathway: Generic Authorization, Not Patient-Specific

CentraCare does **not** offer a dedicated patient access pathway. The primary form (form-1) is a general-purpose HIPAA authorization designed for all releases of information — to insurers, attorneys, other providers, and patients alike. A patient requesting their own records must navigate the "Release Information From" and "Release Information To" fields, placing themselves in the "To" field — an unintuitive workflow for someone who simply wants a copy of their own chart. There is no separate patient access request form, no dedicated section for individual access, and no reference to HIPAA's Right of Access (§ 164.524).

That said, the form does include a "Personal Use" checkbox under "Reason for Release," which normalizes patient self-requests and helps HIM staff route them appropriately. The companion instruction document (form-2) provides clear, section-by-section guidance written in second person, explaining not just *what* to fill in but *why* each field matters — an unusual and helpful touch.

## Retrieval Experience

Finding the forms required moderate effort. Web searches converged on CentraCare's centralized patient resources page, which logically organizes the forms. However, a patient searching specifically for "Long Prairie Hospital medical records form" must recognize that Long Prairie uses system-wide CentraCare forms and navigate accordingly. Direct download via automated tools (`curl`) was blocked by bot protection, requiring browser-based retrieval — a concern for assistive technologies and non-standard browsers.

## Form Document Quality

The main authorization form (form-1) is a 2-page, born-digital PDF with a text layer — not a scan. However, despite its digital origins, it has **zero fillable fields**. Patients must print the form and complete it by hand, or use third-party PDF annotation tools. This is a significant gap for a regional health system. The form has approximately 15–20 fields across patient demographics, release from/to addresses, record type checkboxes, delivery method, reason for release, and signature/date.

The layout is clean and logically structured: Patient Information → Release From → Release To → Information to be Released → Special Disclosure → Preferred Method → Reason → Authorization → Revocation. Page 2 provides a comprehensive directory of all CentraCare HIM offices organized by region with fax numbers, phone, mail addresses, and a shared email. The language is mostly accessible, though the revocation paragraph contains dense legalese that may confuse patients.

## Submission and Delivery

CentraCare offers strong submission and delivery options. Completed forms can be submitted by **email** (CCHROI@CentraCare.com), **fax**, or **mail** — email submission is prominently featured and works for all locations. Records can be delivered via paper, CD, encrypted email, or MyChart portal. This is a genuinely patient-friendly set of options, particularly the encrypted email and MyChart delivery channels.

## Barriers

No notarization or witness requirement. No in-person submission requirement. No fee information is disclosed on either the form or the instructions, though the instructions reference "who may be responsible for the cost of records" without specifying amounts. No response time commitment is stated. The anti-re-release clause ("I do not authorize re-release of this information to anyone") is embedded as non-optional boilerplate rather than a patient choice. The form-3 SUD consent is an image-only scan with no text layer — inaccessible to screen readers — but this is a supplementary document, not the primary pathway.

## Overall Assessment

CentraCare – Long Prairie Hospital provides a **functional but not patient-centered** records request process. The strong points are the multiple electronic submission channels (especially email), diverse delivery options (MyChart, encrypted email), the "Personal Use" reason checkbox, and the unusually helpful instruction document. The weaknesses are the lack of a dedicated patient access pathway, the non-fillable form requiring print-and-handwrite, the absence of fee disclosure, and the lack of any patient rights information. A patient can successfully request their own records, but the process was designed for third-party release and the patient must adapt to it. Grade: **B**.
