# Vanderbilt University Medical Center — Org-Level Synthesis

## Available Pathways and Primary Form

Vanderbilt Health offers patients multiple pathways to request their medical records. The official medical records page at vanderbilthealth.com lists both downloadable PDF authorization forms (English and Spanish) and three online portals: a **Swellbox patient request portal**, a Swellbox provider request portal, and a ChartSwap third-party request portal. The separation of these portals by requester type — patient, provider, and third party — is a meaningful structural differentiator that many organizations lack.

Five PDF documents were discovered across Vanderbilt web properties. The current official English form is **form-4.pdf** (VMR 3017, dated 10/2023), a 2-page authorization linked from the main medical records page. Form-5 is its Spanish translation. Forms 1 and 2 are older versions (2022 and 2017 respectively) still publicly hosted on VUMC subdomains with no deprecation notice. Form-3 is an incoming-records form (release TO Vanderbilt) irrelevant to patient self-access.

## Access Pathway Differentiation

Vanderbilt partially differentiates individual access from third-party release. At the portal level, the separation is clear: patients, providers, and third parties each have distinct Swellbox/ChartSwap entry points. However, at the PDF form level, Vanderbilt uses a single generic "Authorization for the Use or Disclosure of Protected Health Information" — a HIPAA § 164.508 authorization form doing double duty for patient access requests that should technically fall under § 164.524 Right of Access. The form does correctly scope the purpose question in Section 8, noting it is only required "if not for your personal use," which recognizes patient self-access as the default. But the overall framing ("I hereby give Vanderbilt Health permission to disclose my individually identifiable protected health information") miscasts a patient right as a permission grant.

## Retrieval Experience

Finding the current form was straightforward. The official vanderbilthealth.com medical records page clearly links both the English and Spanish PDFs under "Request Records by Authorization Form," and all downloads succeeded without bot blocking or login walls. The primary findability concern is that **outdated versions persist** on VUMC subdomains (student health, information privacy & security) — a patient searching Google could land on the 2017 or 2022 version, which has different fee structures, fewer facilities, and old branding, with no indication it's superseded.

## Form Document Quality

Form-4 is compact and well-organized, condensed from the older 4-page format to 2 pages with 10 numbered sections and clear bold headers. However, it is fundamentally an **image-only scan** — zero fillable fields, only 61 characters of extractable text, and no screen-reader accessibility. A patient must print it, complete it by hand, and submit via mail or fax. The electronic delivery option described in Section 4 (PDF through a request portal, directions sent to email) is a genuine patient-friendly feature. The fee schedule, while complex (6 scenarios), is transparently disclosed with all fees capped at $50 and a $6.50 flat rate for fully electronic delivery.

The form requests Last 4 SSN, which is more personal information than necessary. Section 9's acknowledgment section packs 11 bullet points of legal text in small font. The sensitive-information handling (Section 6) defaults to including psychiatric, substance use, and HIV information with an opt-out checkbox — permissible but puts the burden on the patient.

## Barriers and Strengths

**Barriers are minimal.** No notarization or witness is required. Submission is possible via fax (adequate electronic pathway) and mail, plus the Swellbox portal provides a fully digital alternative. The 30-day response timeline is stated explicitly, and the form commits to no treatment conditioning. Fees are disclosed upfront and capped.

**Notable strengths** include: the Spanish-language version linked alongside the English form; the differentiated Swellbox patient portal as a digital alternative; the transparent and capped fee schedule; the correctly scoped purpose question; and the inclusion of an electronic delivery option via a request portal. The QR code on the form header may provide an additional pathway, though its destination isn't determinable from the PDF.

**Red flags** are the dual-purpose authorization framing, the persistence of outdated forms on subdomains, and the image-only scan format — surprising for a 2023 form from a major academic medical center that fails basic WCAG/Section 508 accessibility standards.

## Overall Assessment

Vanderbilt Health provides a **competent but imperfect** patient records request experience. The organization earns credit for offering differentiated digital pathways (Swellbox patient portal), a Spanish translation, transparent fees, and a well-organized 2-page form. It falls short on digital-first form design (image-only scan, no fillable fields) and conflates patient access rights with third-party authorization. The availability of the Swellbox portal as an alternative substantially mitigates the PDF's technical limitations, making this an organization that serves digitally-savvy patients reasonably well while leaving paper-dependent patients with an unnecessarily cumbersome experience.
