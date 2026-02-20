# Evaluation: Essentia Health-Fosston — form-3.pdf

## 1. DOCUMENT IDENTIFICATION

**Document title:** "MyChart Access - Adult Patient Proxy Authorization"
**Form number:** EH4583 01/25
**Page count:** 1
**Purpose:** This form authorizes another person (a "proxy") to have full access to a patient's MyChart portal account — including viewing medical records, emailing the doctor's office, refilling prescriptions, scheduling appointments, and initiating e-visits. It is **not** a standard Release of Information (ROI) form; it is specifically a patient portal proxy delegation form.

**Relationship to other forms found for this organization:**
Essentia Health-Fosston uses system-wide Essentia Health forms. Four forms were retrieved:
- **form-1.pdf** — The primary ROI form ("Authorization for Use and Disclosure of Protected Health Information," EH10843 12/25). This is the main medical records release form.
- **form-2.pdf** — MyChart Access Self-Authorization (EH2931 12/20), for granting oneself portal access.
- **form-3.pdf (this document)** — MyChart Adult Patient Proxy Authorization (EH4583 01/25), for granting another person access to one's MyChart account.
- **form-4.pdf** — Verbal Authorization (EH10302 12/25), for verbal information-sharing with designated individuals.

This form is a companion to form-2 (self-authorization for MyChart). Together they cover the full spectrum of MyChart access authorization — self and proxy. It is related to but distinct from the general ROI form (form-1).

## 2. FINDABILITY

Per the retrieval notes, this form was sourced from `https://www.essentiamychart.org/MyChart/MyChart%20Adult%20Proxy.pdf`. It was found via the Essentia Health medical records page, which links to MyChart-related resources. The main medical records page (https://www.essentiahealth.org/patients-visitors/medical-records) is well-organized and appears to surface these forms effectively. The search notes report "None significant" difficulties in locating forms.

However, this form lives on a separate domain (`essentiamychart.org`) from the main Essentia Health website (`essentiahealth.org`), which could cause confusion for patients navigating directly. The URL also contains a space encoded as `%20`, suggesting ad-hoc file hosting rather than a CMS-managed document library.

## 3. TECHNICAL ACCESSIBILITY

This document has significant technical deficiencies:

- **No text layer:** The metadata confirms `has_text_layer: false`, `full_text_chars: 1` (just a form feed character), `font_count: 0`, and `fillable_field_count: 0`. The document is entirely rendered as vector graphics with no extractable text.
- **No fillable fields:** Despite having clearly visible blank lines for patient name, date of birth, address, proxy information, and signatures, none are implemented as interactive PDF form fields.
- **No embedded images or fonts:** `embedded_image_count: 0`, `font_count: 0`. The content appears to be rendered as vector paths, consistent with the notes indicating it was "created via 'Microsoft Print to PDF'" — a process that rasterizes/vectorizes content rather than preserving text structure.
- **File size:** 373,164 bytes for a single page — over twice the size of the primary ROI form (form-1, 169,186 bytes) despite having similar content density, likely due to the vector rendering approach.
- **Title metadata:** The PDF's internal title is "EH4583_Proof.pdf," suggesting this may be a proof copy that was never properly finalized for digital distribution.

**Accessibility impact:** The form cannot be read by screen readers, cannot be searched or indexed, cannot be copy-pasted, and cannot be filled digitally. A patient would need to print it and complete it by hand.

## 4. CONTENT DESIGN

Based on visual inspection of the rendered PDF:

**Structure:** The form is organized into clear sections:
1. An introductory paragraph explaining what proxy authorization means
2. "Patient Information" section (name, DOB, age, address, phone)
3. "Proxy Information" section with a note: "You must complete a separate form for each proxy request"
4. A block of "I understand that:" bullet points (10 items)
5. Signature lines for both patient and proxy
6. Mailing/contact information

**Introductory explanation:** The form opens with a helpful plain-language description: "A proxy authorization means that you give another person full access to your MyChart medical record through an online MyChart account. They can email your doctor's office, refill your prescriptions, schedule appointments and do e-visits through MyChart. It is as if they were you. This might be a parent, spouse or adult child who helps you take care of your health."

**Disclosure terms:** The bullet points cover:
- Duration: "This authorization is good for five years. I will need to sign a new form every five years to renew access."
- Revocation: "I can change my mind about proxy access to MyChart at any time. I will need to let Essentia Health know in writing."
- Privacy limitations: "Essentia Health cannot be responsible for the privacy of information given to the proxy."
- Treatment non-conditioning: "If I do not sign this form, Essentia Health will still provide medical treatment to me."
- Form validity: "A photocopy, fax or electronically scanned and transmitted image is the same as the original."

**Layout:** Clean and readable. The form fits on one page. Fields are logically grouped. The bold section headers ("Patient Information," "Proxy Information") provide clear visual hierarchy.

**Weaknesses:**
- The form collects SSN Last Four Digits from the proxy — an unusual data point that may raise privacy concerns.
- The instruction "Please print clearly" suggests the form is designed exclusively for handwriting, not digital completion.
- The note about completing "a separate form for each proxy request" adds administrative burden.

## 5. PATIENT-CENTEREDNESS

**Positive aspects:**
- The opening paragraph uses plain language and gives relatable examples of who a proxy might be (parent, spouse, adult child).
- The form clearly states that treatment will not be conditioned on signing.
- The form explains what proxy access actually entails in concrete terms (email doctor's office, refill prescriptions, schedule appointments, do e-visits).
- The revocation process is explained.
- Multiple submission channels are listed: mail, email, or fax.

**Concerns:**
- The form is entirely non-fillable and has no text layer, making it inaccessible to patients with visual impairments who use screen readers.
- The five-year authorization period is reasonable but requires active renewal — "I will need to sign a new form every five years."
- The form requires a separate submission "for each proxy request," which could be burdensome for patients with multiple caregivers.
- The proxy must use a code provided by Essentia Health to set up the account, adding an extra step that isn't fully explained on the form itself.
- The mailing address is in Duluth, MN (502 East Second Street → corrected on the form to "502 East Second Street"), which is the centralized HIM department — no local Fosston option is mentioned.

## 6. COMPLIANCE

- **SSN collection:** The form asks for the proxy's "SSN Last Four Digits." Collecting partial SSN from a third party for portal access authorization is unusual and may raise data minimization concerns.
- **Five-year duration:** The authorization lasts five years, which is longer than many authorization forms (the main ROI form, form-1, defaults to one year). For proxy portal access this may be appropriate, but it's a notably long duration.
- **Revocation:** Must be done "in writing," with the change effective "no later than the next business day." This is reasonable.
- **Treatment non-conditioning:** Explicitly stated — consistent with HIPAA requirements.
- **42 CFR Part 2 and HIPAA references:** The form mentions that information disclosed "is no longer protected by federal and state privacy rules" once the proxy shares it further. However, the form does not specifically reference 42 CFR Part 2 or address substance use disorder records, unlike form-1 and form-4. This is a potential gap if the proxy would have access to SUD records through MyChart.
- **Non-Essentia providers:** The form mentions proxy access includes the ability to "view medical records including documents from Non-Essentia Health Providers for the patient through MyChart." This is a significant scope expansion that patients may not fully appreciate.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Proxy SSN collection:** The form requests "SSN Last Four Digits" from the proxy. Collecting partial Social Security Numbers from third parties for a portal access authorization raises data minimization concerns — this data point is not standard on proxy authorization forms and increases the data breach risk surface for the proxy individual.

### ⚠️ AMBIGUITIES

- **Scope of proxy access to SUD/behavioral health records:** Unlike the primary ROI form (form-1), this proxy authorization form does not address whether the proxy will have access to substance use disorder records, behavioral health notes, or other specially protected categories through MyChart. A patient signing this form may not realize the proxy could potentially access sensitive records visible in the portal.
- **"Documents from Non-Essentia Health Providers":** The form states the proxy can "view medical records including documents from Non-Essentia Health Providers." The scope of what "Non-Essentia" records are included is undefined and potentially surprising to patients.

### ❌ ERRORS

- **No text layer / "Proof" title:** The PDF has no extractable text (`font_count: 0`, `has_text_layer: false`) and its internal title is "EH4583_Proof.pdf." This strongly suggests a proof or draft version was published to the website rather than a production-ready PDF. The "Microsoft Print to PDF" creation method destroyed all text structure, making the document completely inaccessible to screen readers and search engines.
- **Inconsistent mailing address:** The contact information on this form lists "502 East Second Street" with phone "877-231-1985 (option 2)" and fax "218-786-6658" and email "MyChartSignUp@EssentiaHealth.org" — while form-1 (the main ROI form) lists "502 East Second Street" but with different phone (866-203-7454), different fax (920-593-3114), and different email (ReleaseOfInformation@EssentiaHealth.org). While these may be intentionally different departments, the different addresses and contact info across the form suite could confuse patients.

### ✨ BRIGHT SPOTS

- **Plain-language proxy explanation:** The introductory paragraph explaining what proxy access means — "It is as if they were you" — is clear, concrete, and uses relatable examples. This is better than many proxy forms that use only legal/technical language.
- **Multiple submission channels:** The form accepts mail, email, or fax submissions, giving patients flexibility. The email option (MyChartSignUp@EssentiaHealth.org) is a particularly convenient alternative to mailing a physical form.
