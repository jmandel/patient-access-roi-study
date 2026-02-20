# Minnie Hamilton Health System — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**form-1.pdf is not a Release of Information form.** It is a 2-page instructional guide titled "How to send medical documents and images to your Provider through your Portal Account." The document describes how patients can attach files to secure messages sent to providers through the Athena Health patient portal. It covers selecting a provider, choosing a location, selecting a message subject, composing a message, and attaching files.

This document was the only PDF found on the MHHS website that had any relevance to patient health information exchange. A second document (form-2.pdf) was downloaded from the affiliate system Mon Health Medical Center — a proper ROI authorization form — but it is branded specifically for Mon Health Medical Center (MHMC) in Morgantown, WV, not for Minnie Hamilton Health System.

Minnie Hamilton Health System does not appear to publish a standalone ROI/authorization form online. The organization directs medical records requests through ChartRequest, a third-party platform (https://app.chartrequest.com/p/l/minniehamiltonhealthsystem-grantsville), where the authorization form is embedded in the electronic workflow and not available as a downloadable PDF.

## 2. FINDABILITY

This document was located at `https://www.mhhs.healthcare/wp-content/uploads/2024/11/how-to-send-medical-documents-via-the-mhhs-patient-portal.pdf`, found through searches of the MHHS website. However, it is not an ROI form, so its findability is only relevant in establishing what *is* available rather than what *should* be.

The search process documented in notes.md was extensive — multiple web searches using varied query terms, site-specific searches, Wayback Machine CDX API queries, and direct website navigation — none of which surfaced a downloadable ROI form. The MHHS website has no "Patient Forms" or "Downloads" section. The only pathway to request medical records is through the ChartRequest third-party platform, which requires account creation before any forms or workflows become visible.

In practical terms, a patient seeking to request their own medical records from MHHS would not find a downloadable authorization form anywhere on the public-facing website.

## 3. TECHNICAL ACCESSIBILITY

As a patient portal instruction guide, the document is technically competent but limited:

- **Text layer**: Present and functional. The 1,882 characters of extracted text are clean and readable.
- **Fillable fields**: Zero (0). This is expected — the document is informational, not a form.
- **Page count**: 2 pages.
- **File size**: 839,572 bytes (~840 KB), which is somewhat large for 2 pages of instructional content. This is explained by the 9 embedded images (likely screenshots of the portal interface).
- **Font count**: 10 fonts.
- **Digital-first design**: Yes — this was clearly created as a digital document, not a scan. The text is natively rendered and the layout is clean.

The document is not an image-only scan and has proper text extraction, so it is accessible to screen readers and search indexing.

## 4. CONTENT DESIGN

The document is reasonably well-structured as an instructional guide:

- **Numbered steps** (1-7) walk the user through the portal messaging workflow in logical order.
- **Plain language**: Instructions are written clearly — e.g., "Select the provider to whom you want to send the message" and "click the blue 'Attach Files' link."
- **Helpful specifics**: The document lists the available subject line options ("Medical question," "Appointments and scheduling," "Prescriptions and refills," "Billing and payments," "My profile," "Insurance," "Other") and notes practical details like "You can attach up to 10 files, but you must click 'Attach Files' and attach them individually."
- **Safety reminder**: Includes the advisory "Please do not send any credit card information through to your provider."
- **Limitation noted**: The document explicitly states the workflow is for "desktop computer" use and notes that "When accessing the Patient Portal from a desktop browser, the send attachments workflow can only be initiated from the main homepage" — distinguishing it from the Messages link workflow which does not support attachments.

However, the document's scope is narrow — it only covers *sending* documents to a provider, not *requesting* records or information from a provider. It describes a one-way patient-to-provider communication channel.

## 5. PATIENT-CENTEREDNESS

This document does **not** serve a patient trying to access their own health records. It describes the opposite direction of information flow — sending documents *to* a provider rather than obtaining records *from* a provider.

There is:
- No mention of requesting medical records
- No reference to HIPAA, Right of Access, or 45 CFR § 164.524
- No discussion of record types, date ranges, or delivery format options
- No mention of fees, timelines, or authorization requirements
- No reference to the ChartRequest platform that MHHS actually uses for records requests

A patient who encounters this document while searching for a way to request their records would gain no useful guidance toward that goal. The document addresses a different use case entirely.

## 6. COMPLIANCE

Since this is not an ROI form, traditional compliance evaluation (authorization requirements, consent bundling, fee disclosure, etc.) does not apply.

The broader compliance concern is at the organizational level: MHHS does not publish a downloadable ROI/authorization form. Patients must navigate to a third-party platform (ChartRequest) and create an account to access the records request workflow. While using a third-party platform is not inherently non-compliant, the lack of any publicly accessible information about the records request process — no mention of fees, timelines, required documentation, or patient rights — means patients have very little visibility into the process before committing to account creation on a third-party service.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No publicly available ROI form**: Minnie Hamilton Health System does not publish any downloadable authorization or records request form. The only pathway requires creating an account on ChartRequest, a third-party platform. This creates an unnecessary barrier — patients cannot review the authorization terms, understand what information will be requested, or prepare their request before engaging with the platform.
- **Third-party platform gatekeeping**: Requiring account creation on ChartRequest before a patient can even *see* the records request form means the authorization process is opaque from the outside. Patients with limited internet access or technology literacy face compounded barriers.

### ⚠️ AMBIGUITIES

- **Relationship between portal messaging and records requests is unclear**: The MHHS website links to both the Athena Health patient portal (which this document supports) and ChartRequest for medical records. It is not clear to patients whether sending a message through the portal requesting records would be an acceptable alternative to the ChartRequest workflow, or whether ChartRequest is the only authorized channel.
- **Affiliate relationship with Mon Health is unexplained**: The Mon Health logo appears in the website footer, and Mon Health Medical Center has its own ROI form (form-2.pdf), but it is unclear whether that form would be accepted by MHHS or whether the two facilities share records infrastructure.

### ❌ ERRORS

- **Document mismatch**: This PDF is an instructional guide for sending documents *to* a provider, not for requesting records *from* a provider. Its presence as the closest-to-relevant downloadable document on the MHHS website highlights a significant gap in patient-facing resources.

### ✨ BRIGHT SPOTS

- **Digital-first approach**: MHHS has adopted electronic platforms (Athena Health portal, ChartRequest) rather than relying solely on paper forms. If the ChartRequest workflow is well-designed internally, the electronic submission pathway could be a positive — though this cannot be evaluated without creating an account.
- **Clear instructional writing**: The portal instructions document itself is well-written, with numbered steps, plain language, and practical details. If MHHS applied the same clarity to a publicly accessible records request guide, it would serve patients well.
