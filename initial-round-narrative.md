# How Well Can Patients Request Their Own Medical Records Online?

## Findings from a 190-Organization Study of ROI Form Quality

### The Big Picture

HIPAA gives every patient the right to request their own health records. In practice, exercising that right usually starts with finding and filling out a provider-specific authorization form. We evaluated 190 healthcare organizations across 43 states — community hospitals, teaching hospitals, critical access hospitals, FQHCs, and physician practices — to measure how well they serve patients trying to do this online.

The results are mediocre. The mean score across all organizations is **3.30 out of 5** (a C+), with half of all organizations earning a C grade and 43% earning a B. Only one organization earned an A. Fourteen organizations scored D or F — meaning their forms are effectively unusable or inaccessible online.

No organization should feel comfortable with these numbers. The forms patients encounter are, overwhelmingly, not designed for them.

### The Wrong Form Problem

The most striking finding is how few organizations distinguish between a patient requesting their own records and a third party requesting someone else's. **75% of organizations route patients through a generic HIPAA authorization form** — a document designed for attorneys, insurers, and other providers. Only 12% offer a dedicated patient access form, and 10% use an online portal.

This matters because HIPAA's Right of Access (§ 164.524) and its authorization framework (§ 164.508) are legally distinct. When patients request their own records, they are exercising a right with stronger protections, shorter deadlines, and lower fee limits. A form titled "Authorization to Release Medical Information" frames the interaction backwards — the patient is not authorizing anything; they are making a demand the law requires the provider to fulfill.

The organizations that get this right stand out sharply. Intermountain Health publishes two separate forms with self-explanatory URLs: `request-records-for-yourself` versus `request-records-be-sent-to-someone-else`. Barnes-Jewish Hospital explicitly categorizes "Individual requests" separately from "Third-party requests" on its website. Valleywise Health's patient form omits the purpose-of-release requirement entirely — correctly recognizing that patients don't need to justify requesting their own records. These organizations represent the 21% that have a dedicated patient access pathway. The other 79% have not made this distinction.

### Forms as Technical Artifacts

Three-quarters of all ROI forms have **zero fillable fields** — but this isn't because they're old photocopies. Only 13% are actual image-only scans. The vast majority — 58% of all organizations — publish clean, born-digital PDFs authored in Word or InDesign, with proper text layers and embedded fonts, that were exported *without anyone clicking "Add Form Fields."* These are modern documents trapped in paper-era workflows. The technology to make them interactive already exists in the tools that created them.

Patients must print the PDF, fill it out by hand, and then scan, fax, or mail it back. In 2026, this imposes a real access barrier — particularly for lower-income patients who may lack printers and scanners, and for the 12% of organizations where the only submission option is physical delivery (no fax, no email, no portal). Only 25% of forms combine all three basic document design qualities: clear layout, plain language, and instructions.

The contrast within the dataset makes this inexcusable rather than inevitable. A 25-bed critical access hospital in Idaho (Gritman Medical Center) offers 63 fillable fields on a single-page form. A 99-bed community hospital in rural Kansas (Labette Health) bypassed PDF entirely, routing patients through an online form with electronic signature and photo ID upload. Vanderbilt University Medical Center — a leading academic center — publishes a form that is an image-only scan with zero fillable fields; Decatur County Hospital, a 25-bed government-owned critical access hospital in rural Iowa, has 61 fillable fields. Meanwhile, JPS Health Network in Fort Worth publishes a seven-year-old image-only scan for its patient form while simultaneously producing modern, fillable PDFs for its provider-to-provider forms. The technology exists; the investment has not been directed toward patients.

The sole A-grade organization — **Flowers Hospital**, a 235-bed for-profit hospital in Dothan, Alabama — scores 4.65/5 by combining 66 fillable fields, a Swellbox online portal, a co-equal Spanish translation, five delivery methods, and the title "Patient Request for Health Information" with "Myself" as the first recipient option. That a mid-size for-profit community hospital in rural Alabama outperforms every major academic medical center in the study underscores that excellence reflects organizational intent, not resources.

### What Predicts Quality?

**System affiliation is the strongest predictor.** Organizations in major health systems score significantly higher across every dimension (overall median 3.65 vs. 3.25 for independents, p=0.0001, η²=0.108). They are far more likely to have fillable fields (Cramér's V=0.278, p<0.001), to offer a dedicated patient access pathway (V=0.353, p<0.001), and — unsurprisingly — to use system-level forms (V=0.764, p<0.001). System resources drive standardization, and standardization at scale tends to produce better artifacts.

**Facility type matters, but less.** Teaching hospitals lead (median overall 3.68), followed by community hospitals (3.40), FQHCs (3.30), physician practices (3.28), and critical access hospitals (3.10). The gap is significant (p=0.0009) but the effect is modest (η²=0.080). Teaching hospitals benefit from academic medical center infrastructure and HIM departments with dedicated compliance staff; critical access hospitals are typically small, rural, and resource-constrained.

**Ownership type and geography are not significant predictors.** Nonprofit, for-profit, and government hospitals score similarly on overall quality (p=0.103). Census region shows no significant effect on any dimension except compliance, where the Northeast and Midwest score slightly higher than the South and West (p=0.031) — likely reflecting state-level regulatory variation in New York and other states that impose additional authorization requirements.

### The Portal Transition

The industry is in the middle of a transition from paper forms to online portals, and it's happening unevenly. About **49% of organizations offer some form of online portal** for records requests, but only 20% position it as the primary pathway. Two vendors dominate: **Epic MyChart** (~35% of portal deployments) and **Swellbox/Datavant** (~31%). Their roles differ — MyChart is usually a secondary option for existing portal users, while Swellbox is purpose-built for records requests and three times more likely to be the primary pathway.

Critically, portals have not replaced PDF forms. 85% of portal-equipped organizations still offer a downloadable form alongside their portal. The 15% that have gone portal-only create a new barrier: patients without portal accounts or reliable internet access may have no path forward. Several portal-only FQHCs — organizations specifically chartered to serve underserved populations — fall into this trap.

### The Worst of It

Fourteen organizations score D or F. Several of these — including FQHCs like Aaron E. Henry Community Health Center, Franklin Primary Health Center, and El Rio Health — publish no ROI form and offer no publicly visible guidance on how to request records, even though they may operate patient portals (MyChart, eClinicalWorks, etc.) that allow enrolled patients to view their records. The gap is not necessarily in capability but in communication: a patient who isn't already enrolled in the portal would find no indication on these organizations' websites that requesting records is even possible.

Other failure modes include forms that serve the wrong direction (East Georgia Healthcare Center's form is for *incoming* records from other providers), website migrations that strand documents on defunct domains (Canton-Potsdam Hospital, Troy Regional Medical Center), organizations that describe their records process on a webpage but never link to the actual form, and — remarkably — El Rio Health's 16-page HIPAA compliance booklet that describes the right to access records without providing any actionable mechanism.

Multilingual support tells its own story: 33% of organizations offer a Spanish translation, but beyond Spanish, only a handful respond to actual community demographics — Somali forms in Minnesota, Hmong in Wisconsin, Haitian Creole in South Florida, Chinese at NewYork-Presbyterian. These outliers demonstrate what community-responsive design looks like. The 67% offering English only have not considered who their patients actually are.

### Findability Paradox

Most forms are reasonably findable — 69% were rated "easy" to locate, with a typical search requiring 2-3 queries and 2-3 clicks. But the remaining 31% ranged from moderately frustrating to impossible. The consistent finding across all retrieval attempts is that **search engines are better at finding ROI forms than the organizations' own websites.** Forms frequently exist on servers but are not linked from the pages patients would naturally visit. Wayne County Hospital's HIM page provides a phone number but not the PDF sitting in its own `/files/galleries/` directory. UMC Southern Nevada's medical records page links to an amendment form but omits the release authorization entirely.

### Dimension Correlations

The five scoring dimensions are moderately correlated (Spearman ρ = 0.27–0.52), but two clusters emerge. Technical accessibility and patient-centeredness are the most tightly paired (ρ=0.52) — organizations that invest in fillable, digital-first forms also tend to think about the patient's experience more broadly. Findability, by contrast, is only weakly correlated with other dimensions (ρ=0.27–0.33), suggesting it reflects web/IT decisions that are largely independent of form design quality.

The two weakest dimensions overall are **technical accessibility** (mean 3.06) and **patient-centeredness** (mean 3.05). These are also the dimensions most sensitive to system affiliation — major systems pull the mean up, while independent organizations drag it down. The strongest dimension is **findability** (mean 3.75), though this still means one in four organizations makes it meaningfully difficult to locate their form.

### What Good Looks Like

The best organizations in the study share a handful of practices that any provider could adopt:

1. **Separate patient access from third-party release** — different forms, or at minimum a clear "for yourself" pathway on the website.
2. **Make the PDF fillable** — this is a one-time design investment, not ongoing cost.
3. **Link the form from the obvious place** — a "Medical Records" page under "Patients & Visitors" with a direct PDF download link.
4. **State the patient's rights on the form** — a single sentence acknowledging HIPAA § 164.524 transforms the tone from bureaucratic to empowering.
5. **Offer electronic submission** — fax counts. Email counts. A portal counts. Just don't require a physical visit.
6. **Disclose fees clearly** — or better, state that patient self-access is free (as HIPAA's cost-based limits effectively require for electronic copies).

None of these require large budgets or advanced technology. Labette Health — 99 beds, independent, rural Kansas — implements nearly all of them. The barriers documented in this study are not technical limitations. They are design choices that can be reversed.

---

> ### 📋 Sidebar: One in Four Forms Asks for Your Social Security Number
>
> 47 of 190 organizations (25%) request a Social Security Number on their ROI form — information that is unnecessary for patient identification under HIPAA and dangerous on documents designed to be faxed or mailed. [DHR Health](../../../data/forms/dhr-health/form-1.pdf) in Edinburg, Texas requires a full SSN with no indication the field is optional, on a form submitted by fax — in a community that is 90% Hispanic/Latino. [Ascension Saint Thomas Rutherford Hospital](../../../data/forms/ascension-saint-thomas-rutherford/form-1.pdf) combines SSN collection with an "ALL BLANKS MUST BE COMPLETED" instruction across eight Tennessee facilities, implying patients *must* provide their SSN to get their records. [Fisher-Titus Medical Center](../../../data/forms/fisher-titus-medical-center/form-1.pdf)'s form was updated as recently as July 2025 and still includes SSN — proof that revision doesn't guarantee review. No organization in the study explains why it collects this information or what happens to it after processing.

---

> ### 🏥 Sidebar: Small Rural Hospitals Punch Above Their Weight
>
> The study's most counterintuitive performers are tiny critical access hospitals. [Fallon Medical Complex](../../../data/forms/fallon-medical-complex/form-1.pdf) in Baker, Montana — 25 beds, serving a frontier region — offers seven delivery formats including USB drive and patient portal signup, with a "first copy free" policy. [Gritman Medical Center](../../../data/forms/gritman-medical-center/form-1.pdf) in Moscow, Idaho packs 63 fillable fields onto a single-page form with a "Major Documents for the Last 3 Years" shortcut for patients who don't know exact treatment dates. [Wayne County Hospital](../../../data/forms/wayne-county-hospital/form-1.pdf) in Monticello, Kentucky (25 beds) offers both a downloadable PDF and a web-based submission form, and prints the state's free-first-copy statute directly on the form. [Cordova Community Medical Center](../../../data/forms/cordova-community-medical-center/form-1.pdf) in remote coastal Alaska earns a perfect findability score: one search, one click, direct download. Wayne County (3.65) beats UPMC Presbyterian (2.9). Gritman (3.75) matches or exceeds most teaching hospitals. Simplicity is an advantage: small organizations with bare-bones WordPress sites and straightforward processes outperform complex health systems where the form is buried behind navigation mazes, portal walls, and competing institutional priorities.

---

> ### ⚖️ Sidebar: Liability Waivers as a Condition of Access
>
> 18 of 190 organizations (9%) embed liability waivers into their authorization forms, requiring patients to release the facility from legal responsibility as a condition of requesting their own records. [Troy Regional Medical Center](../../../data/forms/troy-regional-medical-center/form-1.pdf) in Alabama requires patients to "discharge the facility from any and all liabilities" — while simultaneously contradicting itself: one paragraph states treatment cannot be conditioned on authorization, the next notes that "if conditioning is permitted, refusal to sign... may result in denial of care." [Grady Memorial Hospital](../../../data/forms/grady-memorial-hospital/form-1.pdf) in Atlanta makes patients agree not to hold Grady responsible for "anything that may happen from use or release of PHI." Requesting your own medical records is a federal right under HIPAA, not a favor. Conditioning that right on a liability waiver is legally questionable and practically intimidating — particularly for patients who may not realize the waiver has no legal force.

---

> ### 🤦 Sidebar: The Form That Tells You Not to Use It
>
> [Texas Oncology](../../../data/forms/texas-oncology/form-1.pdf)'s authorization form contains a legally accurate footnote stating that the form itself "is not required for the permissible disclosure of an individual's protected health information to the individual." The form tells patients they don't need it — but provides no alternative pathway. Meanwhile, the [Baton Rouge Clinic](../../../data/forms/baton-rouge-clinic/form-3.pdf) created a dedicated "Right of Access Form" explicitly citing HIPAA § 164.524 — more structural differentiation than 88% of organizations attempt. Yet the form directs records "to: Name: ___" with no option for a patient to simply request their own records without naming a third-party recipient. The organization that came closest to getting the legal framework right still designed a form where the most common use case doesn't fit.

---

> ### 🔧 Sidebar: They Can Build Good Forms — Just Not for Patients
>
> The study's most revealing pattern is the capability-deployment gap: organizations that demonstrably *can* produce high-quality digital forms choosing not to apply that capability to patient access. JPS Health Network in Fort Worth publishes modern, fillable 2025 HIE forms with encrypted email submission for provider-to-provider exchange ([see their HIE form](../../../data/forms/jps-health-network/form-2.pdf)) — but its [patient ROI form](../../../data/forms/jps-health-network/form-1.pdf) is a 2018 image-only scan with no text layer and no fillable fields. [Neshoba General Hospital](../../../data/forms/neshoba-general-hospital/form-1.pdf) in Mississippi produced a 54-field fillable employer authorization form but offers patients no publicly visible records request form — despite operating a Cerner patient portal behind login. Mercy General Hospital in Sacramento has [42 fillable fields on its third-party authorization form](../../../data/forms/mercy-general-hospital/form-1.pdf) but [zero on its patient access form](../../../data/forms/mercy-general-hospital/form-3.pdf). [UPMC Presbyterian](../../../data/forms/upmc-presbyterian/form-1.pdf) authored its PDF in Adobe Acrobat Pro — and added zero fillable fields. These are not technology problems. They are revealed preferences about whose time matters. Organizations invest in forms that serve institutional workflows — employer authorizations, provider-to-provider transfers, insurance requests — because those workflows generate revenue or reduce operational friction. Patient self-access generates neither.

---

> ### 📭 Sidebar: Complete the Form — Then Guess Where to Send It
>
> Multiple organizations publish ROI forms with no submission instructions whatsoever — no fax number, no mailing address, no email, no portal link. A patient who downloads and completes [Troy Regional Medical Center](../../../data/forms/troy-regional-medical-center/form-1.pdf)'s form, [GI Alliance](../../../data/forms/gi-alliance/form-1.pdf)'s form, or [Alabama Medical Group](../../../data/forms/alabama-medical-group/form-1.pdf)'s form has no way to know where to send it. The form exists in isolation — a document that asks you to authorize the release of your records without telling you who to give it to. Instructions accompany only 43% of forms overall; teaching hospitals include them 73% of the time, while critical access hospitals manage just 14%. A fax number printed at the bottom of the page costs nothing. Its absence speaks volumes about whether anyone tested the form from the patient's perspective.
