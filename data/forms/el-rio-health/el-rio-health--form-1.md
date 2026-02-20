# El Rio Health — form-1.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

**Document type:** HIPAA Notice of Privacy Practices / Patient Compliance Booklet — **not** a Release of Information (ROI) authorization form.

This is a 16-page patient compliance booklet (filename on their site: `compliance-booklet-eng.pdf`, form number 600-154) that El Rio Health provides to new patients. It covers:

- HIPAA Notice of Privacy Practices (Your Rights, Your Choices, Our Uses & Disclosures, Our Responsibilities)
- Chronic Pain Management Guidelines / Controlled Substances Policy
- Statement of Patient Rights and Responsibilities / Code of Conduct
- Health Current (Arizona HIE) Information Notice
- Advance Directives / Patient Self-Determination information
- Receipt Acknowledgment signature page

This is the **only document found** for El Rio Health. No actual ROI authorization form is published on their website. The notes document extensive searching (web search, site-specific search, sitemap analysis, WordPress upload probing, MyChart portal, Wayback Machine) — all without finding a downloadable ROI form. This compliance booklet was retrieved as the closest available document.

**Relationship to records access:** The booklet *describes* the right to request records (e.g., "You can ask to see or get an electronic or paper copy of your medical record and other health information we have. Ask us how to do this.") but provides no mechanism to exercise that right. It tells patients to call (520) 670-3909 or use MyChart.

## 2. FINDABILITY

**Retrieval difficulty: Hard/Impossible** (for an actual ROI form).

The compliance booklet itself is linked from the Patient Information page at `elrio.org/for-patients/patient-information/`, making it moderately easy to find. However, there is no ROI form to find. The search process documented in notes.md included:

- Multiple Google queries with filetype:pdf
- Site-specific searches
- Full website navigation including header links
- Sitemap analysis (`page-sitemap.xml`)
- WordPress upload directory probing (~12 filename patterns)
- MyChart FAQ review
- Wayback Machine checks

None of these produced an ROI form. El Rio Health has no "Medical Records," "Health Information Management," or "Forms" page on their website. The patient-facing downloads consist only of booklets and notices — no actionable forms.

## 3. TECHNICAL ACCESSIBILITY

As a PDF, the compliance booklet is competently produced:

- **Text layer:** Yes — full extractable text (39,081 characters), not a scan
- **Fillable fields:** 0 — the document has no interactive form fields. The receipt acknowledgment page at the end has printed lines for signature and date but no fillable PDF fields
- **File size:** 273,703 bytes (274 KB) for 16 pages — reasonable
- **Fonts:** 12 fonts embedded
- **Images:** 2 embedded images (likely logos/headers)
- **Design origin:** Appears to be a digitally-designed document (not a scan of a paper form), based on the clean text layer and multiple embedded fonts

Since this is an informational booklet rather than a form, the lack of fillable fields is expected. However, the single signature field on the acknowledgment page (page 16) is not interactive, meaning even the acknowledgment cannot be completed digitally.

## 4. CONTENT DESIGN

**Length:** 16 pages. For a compliance booklet covering HIPAA notice, patient rights, pain management, advance directives, and HIE participation, this is substantial but not unreasonable. However, as a resource for a patient trying to request records, it buries the relevant information within a large, multi-topic document.

**Clarity:** The HIPAA Notice section uses plain, patient-friendly language with clear formatting. The opening section ("YOUR INFORMATION. YOUR RIGHTS. OUR RESPONSIBILITIES.") follows the HHS model notice format, which is well-structured with bullet points and bold headings.

**Organization:** The booklet is divided into clearly labeled sections with visual headers (YOUR RIGHTS, YOUR CHOICES, OUR USES & DISCLOSURES, LEGAL POLICIES, SITE POLICIES, etc.). However, topics range widely — from smoking policies to controlled substances to advance directives — which makes the document feel like a "kitchen sink" of patient-facing policies.

**Records access information:** The right-to-access section tells patients: "We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee." This is accurate. But the instruction is just "Ask us how to do this" — no specific process, form, or contact information is provided in the records access section itself. The phone number (520) 670-3909 appears only later, in the patient communications section.

## 5. PATIENT-CENTEREDNESS

**Critical gap:** This document does not serve a patient trying to access their own health records in any actionable way. It describes the *existence* of the right but provides no form, no clear process, and no direct link to exercise that right. The repeated instruction "Ask us how to do this" places the entire burden on the patient to make contact and navigate an undocumented process.

**No scope or format options:** Since no ROI form exists, there are no options for specifying record types, date ranges, or delivery format.

**No electronic submission:** No form to submit at all, let alone electronically.

**MyChart as alternative:** Notes indicate El Rio directs patients to MyChart for online record access. This is a reasonable portal-based pathway but is not documented in this booklet or on the website in a way that connects it to the formal right of access under HIPAA.

**Third-party release:** The document references needing "full mutual releases of information" in the chronic pain management section, implying ROI forms exist internally but are not patient-facing. The text states: "Full mutual releases of information for all previous medical providers and local emergency departments/urgent care centers, including releases for mental health and substance use information." This suggests the organization uses ROI forms operationally but doesn't make them publicly available.

**Language access:** The filename `compliance-booklet-eng.pdf` implies an English version, suggesting a Spanish version may also exist (consistent with serving a Tucson, AZ population), though this was not confirmed.

## 6. COMPLIANCE

**No unreasonable barriers documented** — because no form exists to impose them. However, the *absence* of a publicly available ROI form is itself a barrier to exercising HIPAA Right of Access (45 CFR § 164.524).

The booklet correctly states:
- Records will be provided "usually within 30 days"
- A "reasonable, cost-based fee" may be charged
- Patients will not face retaliation for complaints

The advance directives section references notarization requirements, but these pertain to legal documents (health care power of attorney, living wills), not to records access.

The Health Current (HIE) notice section is notable: it defaults patients to opt-in for HIE participation ("IF YOU DO NOTHING, YOUR INFORMATION MAY BE SECURELY SHARED THROUGH HEALTH CURRENT") and requires an opt-out form to withdraw — but this is standard Arizona HIE practice, not an El Rio-specific concern.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **No ROI form available online:** Despite extensive searching, El Rio Health does not publish a downloadable authorization form for patients to request their own records. Patients must call or visit in person to even obtain the form, creating an unnecessary barrier to exercising HIPAA Right of Access rights. This is a significant access barrier, especially for patients with limited mobility, transportation challenges, or those who prefer to manage healthcare tasks outside business hours.

### ⚠️ AMBIGUITIES

- **"Ask us how to do this":** The records access section of the HIPAA notice repeatedly uses this phrase without providing any specific instructions, phone numbers, or process details. A patient reading this section would not know what concrete step to take next.
- **Internal ROI forms exist but aren't public:** The chronic pain section references "full mutual releases of information" as a requirement, confirming the organization has ROI forms — they are simply not made available to patients proactively.

### ✨ BRIGHT SPOTS

- **Plain-language HIPAA notice:** The Notice of Privacy Practices follows the HHS model format closely and uses clear, accessible language. The "Your Rights / Your Choices / Our Uses & Disclosures" structure is well-designed for patient comprehension.
- **Comprehensive patient rights section:** The Statement of Patient Rights and Responsibilities covers accessible care, respect and dignity, family involvement, information and education, and physical comfort in a well-organized format.
- **Bilingual availability suggested:** The filename convention (`compliance-booklet-eng.pdf`) suggests availability in at least one other language, likely Spanish — appropriate for a Tucson FQHC serving a bilingual population.
