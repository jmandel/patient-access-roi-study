# Esse Health — form-2.pdf Evaluation

## 1. DOCUMENT IDENTIFICATION

This is **not** a Release of Information (ROI) form. Form-2.pdf is a **communication/message authorization form** titled with two separate sections: "AUTHORIZATION TO COMMUNICATE INFORMATION TO PATIENT" and "AUTHORIZATION TO COMMUNICATE INFORMATION TO OTHERS." It authorizes Esse Health staff to leave voicemail messages about healthcare and to discuss diagnosis/treatment and billing information with designated individuals.

Esse Health's actual ROI form is form-1.pdf ("AUTHORIZATION FOR RELEASE OF MEDICAL INFORMATION"), which is a standard medical records release/transfer authorization. Form-2.pdf serves a different, complementary purpose — it governs how the practice communicates with the patient and their contacts, not how records are released. The two forms were found on the same patient forms page at `essehealth.com/patient-center/patient-forms/` under "General Forms," and the source URL filename confirms the distinction: "Physician-Office-Medical-Records-and-Message-Authorizations – Allows-Us-to-Leave-Messages-and-Speak-with-a-Designated-Person-About-Medical-and-Financial-Information.pdf."

## 2. FINDABILITY

The form was easy to find. Per the retrieval notes, a site-scoped web search (`site:essehealth.com "medical records" "release form"`) immediately surfaced the patient forms page. The forms page is well-organized and labels this document clearly with a descriptive title. The URL slug, though extremely long, accurately describes the form's purpose. Retrieval difficulty was rated "Easy" with no bot blocking, login walls, or JavaScript rendering issues.

However, for a patient whose goal is to **request their own medical records**, this form would be a potential source of confusion — its title on the website includes the phrase "Medical Records" which could mislead a patient into downloading it when they actually need form-1.pdf (the ROI form). The two forms are listed in the same section without guidance on which to use for which purpose.

## 3. TECHNICAL ACCESSIBILITY

- **Text layer**: Present — full text is extractable (1,867 characters). Not an image-only scan.
- **Page count**: 1 page, appropriate for the form's scope.
- **Fillable fields**: The metadata reports `fillable_field_count: 27`, but `fillable_field_names` is an empty array. This suggests the PDF has form field annotations but they may be unnamed/unlabeled, which limits assistive technology and programmatic use.
- **File size**: 415,595 bytes (~406 KB) for a single-page form — somewhat large, likely due to the embedded image (logo). Not problematic but not optimized.
- **Fonts**: 4 fonts embedded; text is digitally rendered, not scanned.
- **Digital-first design**: This appears to be a digitally created document (not a scan), with underline blanks for handwriting. The 27 fillable fields suggest some effort toward digital completion, though the unnamed fields limit usability.

## 4. CONTENT DESIGN

**Length and proportionality**: At 1 page and ~1,867 characters of text, the form is appropriately concise for its purpose.

**Clarity**: The language is reasonably plain. The key authorization statements are direct: "The undersigned authorizes Esse Health, its physicians, staff and representatives to communicate with me by leaving messages related to my healthcare at the following numbers." The patient rights section is clear: "I understand that these authorizations are voluntary and that I can refuse to sign the authorization. I understand I may revoke this authorization at any time. I understand I do not have to sign this form to receive care."

**Organization**: The form has a logical two-section structure:
1. Authorization for communication **to the patient** (phone numbers for messages)
2. Authorization for communication **to others** (designated persons with granular permissions)

Each designated person entry includes fields for name, relationship, phone numbers, and separate yes/no checkboxes for diagnosis/treatment and billing discussions.

**Layout**: The form uses underline-style blanks and a compact layout. Two designated person entries are provided, which is reasonable but may be limiting for patients with larger support networks. The revocation section at the bottom is clearly separated with "SIGN BELOW ONLY IF YOU WISH TO REVOKE YOUR AUTHORIZATION" in what appears to be distinct formatting.

## 5. PATIENT-CENTEREDNESS

**Relevance to records access**: This form does **not** serve a patient trying to access their own health records. It addresses a different HIPAA concern — communication preferences and designating who may receive verbal information about the patient's care.

**Granularity**: The form does offer useful granularity for its purpose — patients can separately authorize or deny discussion of diagnosis/treatment versus billing information for each designated person. This is a meaningful privacy control.

**Voluntary nature**: The form explicitly states "I understand I do not have to sign this form to receive care," which is appropriate and patient-friendly.

**Revocation**: A built-in revocation section is provided on the same page, which is convenient — patients don't need to write a separate letter. However, there is no mention of how to submit the revocation or whether it must be done in writing at the office.

**Missing elements**: No expiration date is specified or mentioned. Unlike form-1.pdf which defaults to 6-month expiration, this authorization appears to remain in effect indefinitely unless revoked. The form states "I understand it is my responsibility to update this list in order to keep accurate who can obtain information about my health," placing the ongoing maintenance burden on the patient.

## 6. COMPLIANCE

- **No treatment conditioning**: The form correctly states it is voluntary and not required for care.
- **No expiration clause**: The authorization has no stated expiration, which differs from form-1.pdf's 6-month default. For a communication authorization (as opposed to a records release), indefinite duration is more common and arguably appropriate — but it means patients may forget they've authorized communication with someone and never revoke it.
- **No fees or barriers**: No fees are mentioned, no notarization required, no in-person submission requirement stated.
- **Limited designated persons**: Only two slots are provided. This is a design limitation rather than a compliance issue, but could be seen as restrictive for patients with complex care support networks.

## 7. NOTABLE OBSERVATIONS

### ⚠️ AMBIGUITIES

- **No expiration date or mechanism**: Unlike form-1.pdf which specifies a 6-month default expiration, this form has no expiration language at all. It says the patient "may revoke this authorization at any time" and that "it is my responsibility to update this list," but provides no sunset clause. A patient who signs this and later becomes incapacitated may have authorized persons indefinitely without review.
- **Revocation process unclear**: The form includes a revocation signature line but gives no instruction on how to submit the revocation — in person? By mail? Does it take effect immediately upon signing, or when received by the office?
- **Confusing website listing**: The source URL and website listing include "Medical Records" in the title, which could mislead patients looking for the actual records release form (form-1.pdf) into downloading this communication authorization instead.

### ✨ BRIGHT SPOTS

- **Granular permission controls**: The ability to separately authorize or deny diagnosis/treatment discussions versus billing information for each designated person is a thoughtful privacy design that goes beyond a simple "all or nothing" authorization.
- **Integrated revocation section**: Including a revocation signature block directly on the form is convenient and eliminates a barrier that some providers create by requiring a separate written request.
- **Clear voluntariness language**: The statement "I understand I do not have to sign this form to receive care" is explicit and patient-protective.
