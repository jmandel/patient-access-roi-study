# Broward Health — form-4.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

Form-4.pdf is the **Portuguese-language translation** of Broward Health's "Autorização para Divulgação de Informações Médicas Confidenciais" (Authorization for Release of Confidential Medical Information). It is one of four language versions of the same ROI form: English (form-1.pdf), Spanish (form-2.pdf), Haitian Creole (form-3.pdf), and Portuguese (form-4.pdf). All four share the same form number: **H-1007 - 119550 - (R) 8/2014**. The Portuguese version is structurally identical to the Spanish and Creole versions — same sections, same field layout, same legal clauses — just translated.

This is a general-purpose authorization form that covers both patient self-access and third-party release, not a form dedicated exclusively to patient access requests.

## 2. FINDABILITY

Per the retrieval notes, the form was linked from Broward Health's dedicated Medical Records Request page at `https://www.browardhealth.org/patients-and-visitors/information-request/medical-records-request`, reachable in **3 clicks** from the homepage (Patients and Visitors → Information Request → Medical Records Request). The page explicitly offers forms in four languages, making the Portuguese version easy to locate once on the page.

However, there were two retrieval difficulties:
- **Cloudflare bot protection** blocked direct `curl` downloads, requiring browser-based fetch instead.
- The source URL misspells "Portuguese" as "portugese" (`roi_portugese.ashx`), which is a minor cosmetic issue but not a barrier to access since the link is served from the page itself.

The page also offers an **online request option** via Swellbox, a third-party wizard — though it is unclear whether the Swellbox option supports Portuguese.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present and extractable (unlike the English version, form-1.pdf, which is an image-only scan with no text layer).
- **Fillable fields**: Zero (0). The form has no interactive form fields — all blanks are represented as underscores in the text layer, requiring the patient to print and hand-fill.
- **File size**: 92,959 bytes (93 KB) for a single page — reasonable.
- **Page count**: 1.
- **Fonts**: 10 embedded fonts.
- **Images**: 0 embedded images.
- **Digital design**: This appears to be a digitally-created PDF (not a scan), given the presence of real text, multiple fonts, and zero images. However, it was clearly designed as a **print-first** document — the underscore-based blanks, "ADDRESSOGRAPH" stamp area, "WHITE - MEDICAL RECORD / CANARY - PATIENTS" carbon-copy instructions, and witness signature line all point to a paper workflow.
- **Encoding defects**: Several lines near the bottom of the form contain garbled characters from encoding errors. The expiration clause reads as: `6DOYR\u0003GLVSRVLomR\u0003HP\u0003FRQWUiULR\u0003UHYRJDGD...` and the witness line reads `$VVLQDWXUD\u0003GR\u0003 GD \u00037HVWHPXQKR\u0003 D` instead of legible Portuguese. This appears to be a font-encoding issue where certain text is rendered using a substitution cipher-like font mapping, making those lines unreadable in the extracted text (and likely also unreadable to screen readers).

## 4. CONTENT DESIGN

**Length**: The entire form fits on a single page, which is efficient but results in a very dense layout. Every available inch appears to be used.

**Organization**: The form follows a logical sequence:
1. Sensitive record classification (drug/alcohol, mental health, HIV/AIDS, genetic) with initial lines
2. Confidentiality acknowledgment under Florida law
3. Patient demographics (name, address, DOB, phone)
4. Authorization statement with recipient designation ("EU MESMO" = myself, or "OUTRO" = other)
5. Delivery method (pick up paper or encrypted CD; mail paper or encrypted CD)
6. Purpose, date range, and record type selection (full record, H&P, lab, discharge summary, radiology, consult, operative report, pathology, progress notes, orders, PT records, nursing notes, photos)
7. Four legal disclosure paragraphs covering right to revoke, voluntariness, re-disclosure risk, and minimum necessary standard
8. Signature block for patient, Broward Health representative, and witness

**Clarity**: The form is written in Portuguese legal/medical language. While the translation appears competent, the density of legal disclaimers compressed into a single page makes it challenging to read. The four legal paragraphs at the bottom are preceded by bullet marks (`x`) rather than numbered items, with small text.

**Record type granularity**: Offers a detailed breakdown including specific date ranges for lab and radiology reports, which is a useful feature. The "Todo o prontuário médico, excluindo:" (entire medical record, excluding:) option allows broad requests with specific carve-outs.

## 5. PATIENT-CENTEREDNESS

**Patient access vs. third-party**: The form accommodates both use cases. It includes a checkbox for `"EU MESMO"` (myself), allowing patients to request their own records directly. There is also an `"OUTRO"` (other) option for third-party release. This dual-purpose design is functional but does not differentiate the workflow or requirements for patient access versus third-party authorization.

**Delivery options**: The form offers:
- Pick up in person (paper or encrypted CD)
- Mail via US Postal Service (paper or encrypted CD)

There is **no electronic delivery option** — no email, no patient portal download, no secure digital transmission. The most "digital" option is an encrypted CD, which is an outdated medium.

**HIPAA Right of Access reference**: The form explicitly references **CFR 164.524**, stating: "Entendo que posso inspecionar ou copiar as informações a serem divulgadas, conforme previsto no CFR 164.524 (com uma carga razoável)." This is a positive inclusion that informs patients of their inspection and copy rights, though it notes a "reasonable charge" without specifying amounts.

**Scope options**: Patients can specify date ranges for treatment, choose from ~14 specific record types, or request the full record with exclusions. This is a reasonably flexible scope selection.

**EHI Export**: No mention of electronic health information export, bulk data, or any modern data portability concept.

**Language accessibility**: The existence of a Portuguese translation is itself a significant patient-centeredness feature, especially in the Fort Lauderdale/South Florida area with a substantial Brazilian community.

## 6. COMPLIANCE

**Witness requirement**: The form includes a dedicated signature line for a **witness** ("Assinatura do/da Testemunho/a"). HIPAA does not require witness signatures for patient access requests. This could create a practical barrier for patients submitting the form remotely, as they would need to find a witness. It is unclear whether Broward Health enforces this requirement or treats it as optional.

**Expiration**: The authorization expires **six months** from the signature date (per the garbled but partially decipherable expiration clause). Six months is a standard timeframe and not unreasonably short.

**Voluntariness**: The form explicitly states that authorization is voluntary and that Broward Health "não basearão meu tratamento, pagamento ou elegibilidade em benefícios se forneço ou não autorização" (will not condition treatment, payment, or eligibility on providing authorization). This is a correct HIPAA-compliant statement.

**Minimum necessary**: The form states Broward Health "divulgará apenas a quantidade mínima de informação necessária para satisfazer um pedido." Note: the minimum necessary standard under HIPAA does **not** apply to disclosures requested by the individual about themselves (45 CFR § 164.502(b)(2)(v)). Applying minimum necessary to patient self-access requests could be used to limit what patients receive, though this may simply be boilerplate applied to all uses of the form.

**No notarization**: The form does not require notarization.

**No fee disclosure**: No specific fee amounts are mentioned, only a reference to "reasonable charge" in the CFR 164.524 citation.

**Form age**: The revision date is **8/2014** (per footer "H-1007 - 119550 - (R) 8/2014 PORTUGUESE"), making this form nearly 12 years old. It has not been updated to reflect the 2016 CURES Act, the 2020 ONC Information Blocking Rule, or any modern patient access developments.

## 7. NOTABLE OBSERVATIONS

### 🚩 RED FLAGS

- **Witness signature requirement**: The form includes a witness signature line, which is not required by HIPAA for patient access requests and could create a barrier for patients submitting remotely (by mail or fax). Patients may believe they cannot submit without a witness.
- **Minimum necessary language applied to patient self-access**: The statement that Broward Health will only release "the minimum amount of information necessary" could be used to restrict patient access, contrary to 45 CFR § 164.502(b)(2)(v), which exempts disclosures to the individual from the minimum necessary standard.

### ⚠️ AMBIGUITIES

- **Encrypted CD as the only "digital" format**: The form offers "CD criptografado" as an alternative to paper. It is unclear how a patient would access an encrypted CD — what encryption method is used, how decryption keys are delivered, and whether patients need specific software. This option may create more confusion than it resolves.
- **Purpose field**: The form asks "Para a finalidade de:" (for the purpose of) without clarifying that patients requesting their own records under HIPAA do not need to state a reason. This could deter patients who feel they need to justify their request.

### ❌ ERRORS

- **Garbled text from font-encoding issues**: The expiration clause and witness signature label contain corrupted characters (e.g., `6DOYR\u0003GLVSRVLomR\u0003HP\u0003FRQWUiULR\u0003UHYRJDGD`). While likely readable in the visual PDF rendering, this text is inaccessible to screen readers and text extraction tools, creating an accessibility barrier.
- **Misspelled URL**: The source URL uses `roi_portugese.ashx` — misspelling "Portuguese" — a minor but sloppy error.
- **Form dated 8/2014**: Nearly 12 years old with no updates to reflect significant regulatory changes (21st Century Cures Act, Information Blocking Rule).

### ✨ BRIGHT SPOTS

- **Multilingual availability**: Providing the ROI form in four languages (English, Spanish, Haitian Creole, Portuguese) is exceptional and reflects the linguistic diversity of the South Florida community. Few healthcare organizations offer this breadth.
- **Explicit CFR 164.524 reference**: The form directly cites the HIPAA right of access regulation, informing patients of their right to inspect and copy their information.
- **"EU MESMO" self-access option**: The form explicitly accommodates patients requesting their own records, not just third-party releases, with a dedicated checkbox.
- **Granular record type selection**: The detailed record type checklist with date range options for lab and radiology gives patients meaningful control over what they request.
