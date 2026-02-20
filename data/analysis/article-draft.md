# Permission to Access Yourself: The Absurdity of the American Medical Records Request

Imagine walking into your local public library to check out a book, only to be handed a corporate subpoena designed for a litigation attorney. 

You are told to write your own name in the "Third-Party Recipient" box. You are instructed to formally declare your "Purpose" for wanting to read the book. You are sent back out into the lobby to track down two witnesses to co-sign your request. Finally, before the librarian hands you the text, you are warned that the library is not liable for what you do with the information.

This is what happens when an American patient attempts to download their own medical records. 

Under the HIPAA Right of Access (45 CFR § 164.524), patients have a legal right to their health data—whether to feed into an AI health app, transfer to a specialist for a second opinion, or simply keep on their own phone. But our evaluation of release-of-information forms shows a wide gap between the law's intent and how health systems actually operate.

We evaluated publicly available PDF forms at 181 healthcare organizations across 43 states. To ensure a representative picture of the U.S. healthcare landscape, we used a stratified sampling methodology calibrated across facility types, corporate ownership models, system affiliations, and geographic regions. We deployed AI agents—automated browsers that performed web searches, navigated hospital websites, and downloaded forms—to replicate the experience of a patient looking for a records request form. Each downloaded document was then scored on findability, technical accessibility, content design, patient-centeredness, and compliance. 

We specifically evaluated publicly available PDF forms, excluding online portals that require account creation or identity verification. Even among organizations that offer portals, over 90% still publish a downloadable PDF alongside them. The PDF remains the universal baseline artifact for medical records access, and the most auditable one.

Based on those artifacts, the industry earned a collective **C**. The mean score was 3.36 out of 5; the median, 3.40. Just one organization earned an A. 

Forms were generally easy to find (mean findability score: 3.85 out of 5). But the two dimensions that carried the most weight—technical accessibility and patient-centeredness—scored the lowest (both 3.11), dragging down the overall picture. The problem is not that forms are hidden; it is that they are poorly designed once a patient finds them.

Patient access functions as an administrative orphan, leaving individuals to beg as a bureaucratic favor what the law guarantees as a civil right.

***

### Using Third-Party Forms for Patient Access

A HIPAA authorization form (designed for a third party) and a patient access request (designed for you) are legally distinct instruments. Because treating them as such requires maintaining two separate public workflows, 78.5% of the healthcare organizations we studied forced patients to act as external legal entities. 

Only 12.2% of organizations provided a form explicitly designed for a patient. 

This mismatch created absurd requirements in practice. If a patient wanted their own data from [Cordova Community Medical Center](https://www.cdvcmc.com/wp-content/uploads/2017/11/Release-of-Information-form.pdf), they had to fill out a "Release To" block meant for inter-facility clinical transfers. At [Fenway Health](https://fenwayhealth.org/wp-content/uploads/2025/10/FHROIForm10202025.pdf), patients were asked to write their own names on a line labeled "Facility's name." At [El Centro de Corazón](https://www.elcentrodecorazon.org/wp-content/uploads/2020/08/AUTHORIZATION-FOR-DISCLOSURE-OF-HEALTH-INFORMATION-2.pdf), there was no checkbox for a personal request; patients simply had to use the "Other (Specify)" line.

The mismatch extended to fields demanding patients justify their requests. HIPAA explicitly states that individuals do not need to provide a reason for wanting their own records. Yet the generic forms in our sample routinely framed the "Purpose" field as mandatory. We found that [Ascension Sacred Heart Pensacola](https://healthcare.ascension.org/-/media/project/ascension/healthcare/legacy/markets/florida/flpen_medrec/ffm99-8700-010-00-authorization-for-release-of-medical-info-from-ascension-sacred-heart-8-20.pdf) and [Broward Health](https://www.browardhealth.org/-/media/Broward-Health/Files/Patients-and-Visitors/ROI-English-032620.ashx) required a purpose statement, with no exception listed for patients requesting their own data. 

To navigate these documents, patients found themselves legally authorizing a hospital to hand over their own data, justifying why they wanted it, and agreeing to third-party redisclosure warnings that made no sense when the sender and the recipient were the same person.

---

<div>

#### Sidebar: Flat PDFs

Despite widespread digital adoption in healthcare, only 26.5% of the organizations we studied offered fillable PDF forms. 

The rest distributed "flat" PDFs. These were "born-digital" documents created in Microsoft Word or Adobe InDesign, uploaded to the web without interactive checkboxes and text fields. 

A patient downloading one of these files still had to locate a physical printer, fill the form out with a pen, find a scanner or a fax machine, and send it back to a digital inbox. 

</div>

---

### Friction, Fees, and Social Security Numbers

Applying a corporate legal template to a patient's civil right introduced unlawful friction and risk. 

To complete this administrative hurdle, we found that [Abbeville Area Medical Center](https://www.abbevilleareamc.com/wp-content/uploads/2023/01/HIM-1022-authorization.pdf) required patients to print the form, handwrite it, locate *two* witnesses, and obtain their signatures. [Nemaha Valley Community Hospital](https://nemvch.com/wp-content/uploads/2019/10/Authorization-for-Release.pdf) and [ENT & Allergy Associates](https://www.entandallergy.com/documents/content/enta_arphi_form.doc) demanded full Social Security Numbers—an unnecessary identity theft risk for documents frequently submitted via unencrypted fax. 

Because they used forms built for lawyers and life insurers, organizations mistakenly applied third-party fee schedules to individuals. [JPS Health Network](https://jpshealthnet.org/patient-tools/patient-records) in Texas listed a $75 flat fee for electronic delivery—a figure that may be legal for a law firm subpoena, but vastly exceeds HIPAA's "reasonable, cost-based" limit for patient self-access. 

---

<div>

#### Sidebar: System Affiliation Drives Quality

We analyzed four organizational axes to see what predicted quality. Geography meant little; organizations across the country earned statistically similar scores. Facility type mattered slightly, but the variation *within* categories outweighed the differences between them. [Wayne County Hospital](https://waynehospital.org/files/galleries/Medical_Records_Release.pdf), a 25-bed critical access facility in rural Kentucky, far outperformed [OSU Wexner Medical Center](https://wexnermedical.osu.edu/-/media/files/wexnermedical/patient-care/patient-and-visitor-guide/medical-records/roi-form-and-instructions.pdf), a 1,400-bed academic institution that forced patients to physically mail hand-written requests. 

The strongest predictor of quality was **system affiliation**. Large health systems acted as quality amplifiers. They had the resources to invest in form design and the organizational structure to propagate it across dozens of facilities. They amplified good and bad templates alike—whether that meant distributing a beautifully designed 66-field interactive PDF or a decade-old scanned image. 

</div>

---

### Capabilities Versus Choices

Health systems possess the technology to build seamless digital forms, but our findings show they routinely reserve it for alternative workflows.

In 2025, JPS Health Network published a polished, fillable, text-searchable [HIE authorization form](https://jpshealthnet.org/sites/default/files/2025-05/Patient-HIE-Authorization-Form.pdf) with encrypted email submission. However, the [form it provided to patients](https://jpshealthnet.org/sites/default/files/inline-files/roi_english_revised_2018_10.pdf) requesting their own records was a degraded, image-only scan from 2018. 

At [Ironwood Cancer & Research Centers](https://www.ironwoodcrc.com/wp-content/uploads/2019/03/Authorization-to-release-protected-health-information.pdf), the form designed for other doctors to send records to the clinic featured 22 fillable digital fields. The form for patients to get their records out had zero.

---

<div>

#### Sidebar: Missing Computable Data Options

The 21st Century Cures Act legally obligates providers to offer patients their electronic health information in a computable format (EHI Export). Yet, of the 474 individual forms evaluated in our study, exactly two organizations—[Samaritan Lebanon Community Hospital](https://samhealth.org/computer-readable-ehi-export-request-english?type=pdf) and [Owensboro Health](https://www.owensborohealth.org/sites/default/files/inline/b7/health-disclosure-form.pdf)—mentioned EHI Export on their release forms. For the remaining 99% of the industry, this federal interoperability requirement did not translate into public-facing forms.

</div>

---

### Practical Fixes

Improving this process requires minimal budget or procurement. A small vanguard of organizations already demonstrates effective design.

[Northwell Health](https://www.northwell.edu/sites/northwell.edu/files/2022-03/request-for-access-to-health-information-form-english-2022.pdf) used a dedicated patient access form that explicitly cited HIPAA Right of Access (45 CFR § 164.524) at the top, immediately establishing that the patient was exercising a right. [Barnes-Jewish Hospital](https://www.barnesjewish.org/Portals/0/PDF-Files/BJH_Individual_Authorization_Form.pdf) distilled the entire process down to a single page. [Merit Health Central](https://www.merithealthcentral.com/Uploads/Public/Documents/all-new-documents/HIM-1406.pdf) featured "Myself" as the first recipient option. [Intermountain Health](https://prod.intermountainhealth.org/-/media/files/intermountain-health/for-patients/medical-records/request-records-for-yourself.ashx) used conversational headers like *"What records do you want?"* 

Based on the highest-performing anomalies in our dataset, an effective medical records form follows a few simple rules:
1. **Make it a separate document.** Title it "Patient Request for Access to Records." 
2. **Make it fillable.** Every field should be typeable on a smartphone or computer.
3. **Remove the friction.** Eliminate witness requirements, Social Security fields, and mandatory "Purpose" lines.
4. **Offer a "To Me" checkbox.** Do not make patients write their own home address in a "Facility Name" box.
5. **Accept it digitally.** Provide fax, email, or a web submission route that does not require account creation. The form itself can contain the necessary identity attributes—such as a photo of a driver's license—making it a self-contained artifact.

Looking ahead, the same principle should extend to programmatic access. An open submission API—mirroring the capabilities of a fax line but accessible to software—would let AI health apps and patient-authorized tools assemble and submit requests on a patient's behalf. No organization in our sample offers this today, but the infrastructure is trivial compared to what was required to digitize the records themselves.

Healthcare organizations have spent billions of dollars digitizing American medical records. The one-page form that lets a patient actually retrieve them should not be the hardest part.
