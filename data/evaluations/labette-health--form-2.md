# Labette Health — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**form-2.pdf is NOT a Release of Information (ROI) form.** It is Labette Health's **Notice of Privacy Practices (NPP)**, effective November 17, 2021, downloaded from:
`https://www.labettehealth.com/media/fc6f03662a5e4b14bfb881ecb89bc2f9/notice-of-privacy-practices-effective-november-17.pdf`

The document opens with: *"This Notice describes how medical information about you may be used and disclosed and how you can obtain access to this information. Please review it carefully."*

This is a HIPAA-required privacy notice, not a patient authorization or records release form. It is a supporting document that describes patients' rights — including the right to inspect and copy records — but does not itself serve as a mechanism for requesting records.

**Relationship to other documents found:**
- **form-1.pdf**: A generic 1-page PatientPop "Authorization for Release of Medical Records" template (24 KB). This is not Labette Health's own form — it appeared in search results but does not mention Labette Health anywhere.
- **Formstack online form** (no PDF): Labette Health's actual ROI mechanism is an online Formstack form at `https://labetteheatlh.formstack.com/forms/medical_records_request` (note the typo in the subdomain). A screenshot was captured as `formstack-screenshot.png`.

Labette Health does not appear to offer a downloadable PDF ROI form. Their primary records-request pathway is the online Formstack form.

## 2. FINDABILITY

As a Notice of Privacy Practices, this document was found via the website's **Notice of Privacy Practices** page — a standard, expected location. The retrieval notes indicate that the agent found it by navigating the website. The URL is not human-readable (`/media/fc6f03662a5e4b14bfb881ecb89bc2f9/notice-of-privacy-practices-effective-november-17.pdf`) — it uses a UUID-style path, though the filename itself is descriptive.

The NPP page exists alongside the Formstack-based records request form, which is linked from the **Patients & visitors** menu as "Medical records request form." The NPP is a separate document serving a different purpose (informing patients of their rights, not facilitating a request).

Since this is not an ROI form, findability in the context of records-request workflow is tangential. A patient looking for how to request records would find the Formstack link, not this document.

## 3. TECHNICAL ACCESSIBILITY

- **Format**: 4-page PDF, 95,150 bytes (reasonable for a text document)
- **Text layer**: Yes — full text is extractable (11,997 characters)
- **Fillable fields**: 0 (expected — NPPs are informational, not interactive)
- **Image-only scan**: No — this is a digitally-generated document
- **Fonts**: 5 embedded fonts
- **Embedded images**: 0

The document is a clean, digitally-created PDF with good text extraction. It is well-suited for screen readers and text search. The lack of fillable fields is appropriate for a document of this type (informational, not transactional).

## 4. CONTENT DESIGN

**Length**: 4 pages covering standard NPP topics — reasonable and proportionate for the content. Not padded, not truncated.

**Organization**: The document follows a logical structure:
1. Who is covered by the notice (employees, volunteers, students, etc.)
2. How health information may be used/disclosed (Treatment, Payment, Healthcare Operations, Business Associates, Public Health, Law Enforcement, etc.)
3. Patient rights (inspect/copy, amendment, accounting of disclosures, restrictions, alternative communication, breach notification)
4. Health information technology (Kansas HIT/HIO participation)
5. Complaints process
6. Contact information

**Clarity**: The language is reasonably clear for a legal document, though it leans toward formal/legal phrasing. Sentences like *"We are required by law to make a good-faith effort to provide you with our Notice and obtain such acknowledgement from you"* are grammatically dense but not unintelligible. The document uses bullet points and bold headings effectively.

**Visual hierarchy**: Section headings are bold and descriptive (e.g., "Right to inspect and copy," "Right to request amendment"). Sub-sections under uses and disclosures are consistently formatted with bold lead-in phrases followed by explanatory text.

**Readability**: Text appears to be standard size. Layout is clean with no embedded images or visual clutter. The document reads as a professional, well-formatted legal notice.

## 5. PATIENT-CENTEREDNESS

As an NPP rather than an ROI form, this document serves an informational purpose. Evaluated on its own terms:

**Right of access language**: The document explicitly addresses the patient's right to inspect and copy health information: *"You have the right to inspect and copy health information maintained by Labette Health. To do so, you must complete a specific form providing information needed to process your request. You also have a right to an electronic copy of your health information."*

This is a positive inclusion — it acknowledges both the right to access and the right to an electronic copy. However, it does not specify which form to complete, where to find it, or provide a link/reference to the Formstack form. The phrase "a specific form" is vague and could leave patients unsure about next steps.

**Fee disclosure**: The NPP states *"If you request copies, we may charge a reasonable fee"* — this is accurate HIPAA language but provides no specifics about actual costs.

**HIT section**: The document includes a Kansas-specific section on Health Information Technology and HIOs (Health Information Organizations), referencing KanHIT.org. This provides opt-out information for electronic health information exchange — a relatively uncommon and informative inclusion for a community hospital NPP.

**Complaint process**: Clear instructions for filing complaints with Labette Health's Privacy Officer or the HHS Secretary, including contact information (address, phone, email) at the end.

**Contact information**: Complete and specific — *"Privacy Officer, Labette Health, 1902 S. Hwy 59, Parsons, KS 67357, 620.820.5280, privacyofficer@labettehealth.com"*

## 6. COMPLIANCE

This is a compliance document itself (HIPAA-required NPP), not an authorization form. Evaluated for the accuracy and completeness of its compliance content:

- **Standard NPP elements present**: Uses/disclosures for TPO, required-by-law disclosures, public health, judicial proceedings, law enforcement, breach notification, complaint process — all covered.
- **Psychotherapy notes and marketing**: Correctly identifies these as requiring express written authorization: *"We will obtain your express written authorization before using or disclosing your information for any other purpose, including most uses and disclosures of: (1) psychotherapy notes; and (2) health information for marketing purposes."*
- **Revocation right**: Mentioned — *"You may revoke such authorization, in writing, at any time to the extent Labette Health has not relied on it."*
- **Non-conditioning**: Correctly states *"your receipt of care and treatment from Labette Health is not conditioned upon your providing the written acknowledgement."*
- **Right to restrict disclosures for self-pay**: Addressed — *"We must accept certain requests to not disclose health information to your health plan for payment or healthcare operations purposes if you have paid in full out of your own pocket for the item or service."*
- **Fundraising opt-out**: Mentioned — *"You have a right to opt out of receiving such fundraising communications."*
- **Effective date**: November 17, 2021 — current and reasonable.

The NPP covers the required elements comprehensively for a document of this type.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **"Complete a specific form"**: The NPP repeatedly tells patients they "must complete a specific form" for various rights (inspect/copy, amendment, accounting, restrictions, alternative communication) without ever identifying which form or where to find it. A patient reading the NPP would have no clear path to the Formstack records request form. This creates a dead end for any patient using the NPP as their starting point for accessing records.

- **Electronic copy right stated but not connected to process**: The NPP states *"You also have a right to an electronic copy of your health information"* but does not explain how to exercise this right or whether the Formstack form supports this request type. The Formstack form does include an "Email delivery option" field, but the NPP provides no bridge to that capability.

### ✨ BRIGHT SPOTS

- **Kansas HIT/HIO section**: The inclusion of a detailed section on Health Information Technology and the Kansas Health Information Organization (KanHIT.org) is unusually specific and informative for a community hospital NPP. It gives patients concrete opt-out instructions for electronic health information exchange — something many larger organizations omit or bury.

- **Complete contact information**: The NPP provides a named role (Privacy Officer), physical address, direct phone number, and email address. This is more specific and actionable than many NPPs that give only a generic mailing address.

- **Remunerated treatment communications**: The NPP includes a section on disclosures where Labette Health receives payment for making treatment communications — a relatively obscure HIPAA provision that many organizations fail to address. The opt-out right is clearly stated.
