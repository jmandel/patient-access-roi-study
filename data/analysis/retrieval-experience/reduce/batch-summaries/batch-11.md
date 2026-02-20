# Retrieval Experience Analysis — Batch 11

## Overview

This batch contains one organization whose retrieval notes survived the input staging process: **West Tennessee Healthcare**, a multi-facility health system in western Tennessee. The retrieval experience for this organization represents a best-case scenario — a well-organized website with clearly labeled pages and directly linked PDF forms.

## Search Process and Click Count

Finding West Tennessee Healthcare's ROI forms required minimal effort:

1. **First web search** for `West Tennessee Healthcare "authorization" "release" "health information" medical records form` — immediately returned direct PDF links and the medical records page URL.
2. **Confirmatory site-scoped search** (`site:wth.org authorization release medical records form`) — validated the same results.
3. **Direct navigation** to `https://www.wth.org/request-medical-records/` — a clearly labeled landing page with all forms linked.

The first search was sufficient. A patient could have found the form in **one search and one click** — the ideal experience. The retrieval was rated **easy**.

## Navigation Patterns That Worked

**Direct web search succeeded immediately.** The combination of the organization name plus keywords like "authorization," "release," and "medical records" surfaced the relevant page as a top result. This is the pattern that works best across the study: when an organization publishes a dedicated medical records page with descriptive URLs (in this case `/request-medical-records/`), search engines index it effectively and patients find it quickly.

**Clear URL structure helped.** The WordPress-based site used human-readable paths (`/request-medical-records/`) and descriptive PDF filenames (`Medical_Release_Authorization.pdf`, `AUTH-2020.pdf`, `ACCESS-REQUEST-2020.pdf`). These naming conventions make both search engine discovery and direct navigation straightforward.

## Obstacles Encountered

**None.** No broken links, no bot blocking, no login walls, no outdated URLs, and no browser fallback was needed. All three PDFs downloaded cleanly with extractable text layers (not image-only scans).

## Notable Positive Practices

West Tennessee Healthcare exhibits several practices that distinguish it from more difficult-to-navigate providers:

1. **Dedicated medical records page.** Rather than burying form links inside nested "Patient Resources" or "Health Information Management" sections, the organization maintains a top-level page specifically for medical records requests.

2. **Separate forms for distinct purposes.** The organization provides three distinct forms:
   - **Form 1** (`Medical_Release_Authorization.pdf`): An older (2019) general medical release for clinic use.
   - **Form 2** (`AUTH-2020.pdf`): A third-party release authorization for when someone other than the patient initiates the request.
   - **Form 3** (`ACCESS-REQUEST-2020.pdf`): A dedicated patient access request form, explicitly noted as "to be used when patient wants to access their own medical record."

   This separation is a best practice. Many organizations offer only a generic third-party authorization form and expect patients requesting their own records to use it — creating confusion about who the "requestor" is, which fields to complete, and whether authorization is even required for self-access under HIPAA § 164.524.

3. **Multilingual support.** Spanish versions of forms 2 and 3 are available on the same page.

4. **Online portal option.** The page also links to a ScanStat portal for online record requests (hospital records only), giving patients a digital alternative to the paper form.

5. **Text-layer PDFs.** All forms have extractable text, meaning they can be read by screen readers and processed digitally — unlike the image-only scans that plague many smaller providers.

## Difficulty Assessment

This retrieval was trivially easy. The organization's website design — clear page naming, direct PDF links, dedicated records request landing page — represents the gold standard for form discoverability. A patient searching for "how to get my medical records from West Tennessee Healthcare" would find the answer within seconds.

## Patterns and Limitations

With only one organization visible in this batch, broader pattern analysis is limited. However, West Tennessee Healthcare illustrates a recurring theme across the study: **organizations that invest in a dedicated medical records request page with descriptive URLs and directly downloadable PDFs make the retrieval experience effortless.** The differentiator is not technical sophistication — this is a standard WordPress site — but intentional information architecture. The organization decided that "request medical records" deserved its own page, used a clear URL slug, linked the forms directly (rather than behind a portal login or nested navigation), and maintained separate forms for separate purposes.

The contrast with harder-to-navigate organizations typically comes down to this single design decision: does the website treat medical records access as a first-class patient need, or bury it as an afterthought?
