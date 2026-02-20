# Synthesis: Joseph P. Addabbo Family Health Center

## Overview

Joseph P. Addabbo Family Health Center is an independent, nonprofit FQHC in Far Rockaway, NY. Three documents were found on the organization's website: the primary ROI authorization form (form-1), a bilingual patient exit survey (form-2), and a general HIPAA consent/NPP acknowledgment form (form-3). Only form-1 functions as an actual records request authorization.

## Access Pathway: Generic Authorization, No Patient-Specific Route

Addabbo does not offer a pathway designed specifically for patient self-access. The sole records request mechanism is **OCA Official Form No. 960**, a New York State standard "Authorization for Release of Health Information Pursuant to HIPAA." This is a general-purpose third-party authorization form — originally designed for litigation — that patients must repurpose when requesting their own records. The form includes "At request of individual" as one checkbox among several reasons for release, but it does not distinguish between a patient exercising their HIPAA Right of Access (§ 164.524) and a third party seeking records. The instruction page explicitly states the form was designed for "release of health information needed for litigation in New York State courts" and "can, however, be used more broadly."

The form does not reference the patient's right to receive their own records, does not offer format or delivery options (electronic, paper, CD), and does not mention a patient portal. It collects Social Security Number, which is unnecessary for patient self-access and creates privacy risk.

## Retrieval Experience

Finding the form was **moderately easy**. The organization's website has a dedicated Medical Records page (`/for-patients/medical-records/`) accessible through the "For Patients" navigation menu. However, the forms are hosted on a third-party platform (Practice Builders / `pbformsonline.com`) via a JavaScript-based PDF viewer, requiring browser DevTools inspection to obtain the actual PDF download URL. A patient could fill the form within the embedded viewer, but downloading for offline completion requires technical sophistication.

A potential confusion point: the Patient Forms page labels form-3 as "HIPAA Consent to Release Information," which could mislead patients into downloading a registration consent form instead of the actual ROI authorization.

## Form Document Quality

Form-1 is a **fillable PDF** with 25 interactive fields, though none have accessible name attributes (degrading screen reader usability). The form is 2 pages — one page of authorization content and one page of litigation-context instructions. This is appropriately concise.

The form's structure front-loads six numbered legal disclosures (HIV redisclosure warnings, revocation rights, voluntariness) before any patient-fillable fields, creating a dense, legalistic opening. The language throughout is complex — written for attorneys, not patients. Item 6's all-caps restriction on discussing health information "WITH ANYONE OTHER THAN THE ATTORNEY OR GOVERNMENTAL AGENCY SPECIFIED IN ITEM 9(b)" is confusing in a non-litigation context.

A notable bright spot: Addabbo added a **typed-signature acceptance clause**, allowing patients to complete and sign the form digitally without printing. This is a meaningful accommodation for remote submission. The form also provides a clear enumeration of what "entire medical record" includes and granular opt-in initialing for sensitive information categories (alcohol/drug treatment, mental health, HIV).

## Barriers

- **SSN collection**: The form requests Social Security Number — unnecessary for patient self-access and a privacy risk.
- **No fee disclosure**: The form says nothing about costs. While this avoids imposing excessive fees, it also doesn't inform patients of their cost-limited rights.
- **No submission method specified on form**: The form itself does not indicate how to submit. The website context and Practice Builders platform provide some guidance, but submission via fax or in-person delivery appears to be expected.
- **Exit survey co-location**: The "We're Listening" exit survey (form-2) is posted alongside the ROI form on the Medical Records page, framing all records requests as patient transfers. If presented as a companion requirement, this could function as an implicit barrier. The survey contains pervasive Spanish translation errors.

## Bright Spots

- Typed-signature acceptance removes the print-sign-scan barrier
- Explicit enumeration of medical record contents gives patients clarity
- Granular sensitive-information opt-in via initialing
- Bilingual exit survey (despite translation quality issues) reflects community awareness
- Dedicated Medical Records page with direct link to the ROI form

## Overall Assessment

Addabbo provides a functional but imperfect pathway for patient records access. The organization relies on a state-standard litigation authorization form rather than creating a patient-centered access process. The form is fillable with typed-signature support — a meaningful digital accommodation — but the legalistic language, SSN collection, litigation framing, and lack of patient access rights language place the experience squarely in "adequate but not designed for you" territory. The retrieval experience is reasonable, though the third-party form hosting and confusingly labeled companion documents create unnecessary friction.
