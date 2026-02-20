# Retrieval Experience Analysis — Batch 8

## Overall Difficulty Spectrum

Of the 16 organizations in this batch, the retrieval experience split into three tiers: roughly half (8) were easy, about a third (5) required significant effort with partial success, and two were impossible — no form exists online at all. One additional organization (Canton-Potsdam Hospital) required archival research via the Wayback Machine to recover forms from a defunct website.

## Search Effort and Click Counts

For the **easy cases** (Alabama Medical Group, Barrett Hospital, Carle BroMenn, Flowers Hospital, Hendrick Health, Mercy Health Fairfield, Riverside Community Hospital, SSM Health St. Mary's Madison), a single well-crafted web search typically surfaced direct PDF links. These organizations had forms at stable URLs, often under clear paths like `/patient-resources/medical-records/`. Total effort: 1–2 searches, 0–1 page navigations, immediate download. Hendrick Health exemplified the best case — a search for their name plus "authorization release health information" immediately returned direct PDF URLs with no website navigation needed at all.

For the **moderate cases**, 3–6 searches were typical, often requiring fallback strategies. At UMC Southern Nevada, the ROI form is hosted on the website but *not linked from the medical records page* — the page links only to an amendment form. The authorization form is discoverable via search engine but invisible to a patient navigating the site. Penobscot Community Health Care has the same problem: the form exists at a WordPress upload URL but the Health Information Management page directs patients to a Datavant portal instead of linking the PDF. A patient who navigates the site would never find the downloadable form.

## Navigation Patterns: What Worked vs. Failed

**Web search was far more reliable than website navigation.** In at least 10 of 16 cases, a targeted Google-style search (`"Org Name" "medical records" "release form" filetype:pdf`) found the form faster than browsing the organization's website. This is a damning finding: patients who start at the hospital homepage and click through menus are worse off than those who go to Google.

**Site-specific search** (`site:domain.com authorization release`) served as a useful secondary strategy, particularly for confirming form existence and finding the correct medical records page.

**Direct website navigation failed frequently.** Several organizations have medical records or HIM pages that mention records requests but don't link to the actual form. Wayne County Hospital's HIM page provides a phone number but not the PDF that sits in their `/files/galleries/` directory. UMC Southern Nevada's medical records page links to an amendment form but omits the release authorization form entirely.

## Common Obstacles

**Website transitions and domain mergers** created the most severe findability problems. Canton-Potsdam Hospital's parent system (St. Lawrence Health) was absorbed into Rochester Regional Health, and the old domain now redirects. The parent system's online records tool explicitly excludes St. Lawrence Health facilities, telling patients to call instead. The only way to find the original forms was through the Wayback Machine's CDX API — a strategy no patient would attempt. The forms recovered were a generic NY State OCA-960, including one that was an image-only scan from a Ricoh copier.

**No form published online** was the outcome for two organizations. Lake Martin Community Hospital (Ivy Creek Healthcare system) has an FAQ stating that "a signed authorization form is required" but never provides one for download — after exhaustive searching including WordPress upload directory probing, Wayback Machine checks, and third-party ROI vendor searches, nothing was found. Neighborhood Health Association, an FQHC in Toledo, similarly has no ROI form anywhere on its website despite having a medical records department with phone extensions and a fax number.

**E-signature platform migration** created new barriers at East Georgia Healthcare Center, where forms moved from direct PDF downloads to RightSignature. The old WordPress-hosted PDF URLs return 404, while the RightSignature versions require entering name and email to interact. The underlying documents are rendered as PNG images, not downloadable PDFs — extracting them required DOM inspection and image conversion.

**Decentralized practice networks** made form discovery unpredictable. Consensus Health operates as a network of independent practices with no patient forms on its main website. The ROI-related forms were found only by discovering a member practice (Skylands Medical Group) that happened to host Consensus Health–branded documents. A patient looking at consensushealth.com would find nothing.

## Browser Fallback

Browser-based exploration was needed in at least 4 of 16 cases. Canton-Potsdam Hospital required the Wayback Machine. East Georgia Healthcare Center required browser rendering to extract RightSignature form images. Consensus Health required navigating multiple practice websites. Lake Martin Community Hospital required browser exploration even though it ultimately found nothing. For the remaining organizations, command-line tools (curl, wget) were sufficient.

## Systematically Harder Website Designs

**FQHCs were disproportionately difficult.** Of the three FQHCs in this batch (East Georgia Healthcare Center, Lake Martin Community Hospital, Neighborhood Health Association), two had no downloadable ROI form at all, and the third required extracting images from an e-signature platform. FQHCs tend to have simpler websites focused on services and appointments rather than patient self-service document access.

**Small/rural independent hospitals** (Lake Martin, Wayne County) had bare-bones websites lacking patient forms sections entirely. Their sites emphasize service descriptions and contact information over self-service tools.

**Large health systems** (SSM Health, Mercy Health, HCA/Riverside) generally performed well, with centralized medical records pages and direct PDF links — though even Mercy Health's current form is an image-only scan replacing an older text-based version, representing a quality regression.

**Multi-entity organizations** (Consensus Health's practice network, Canton-Potsdam's system merger) created confusion about where to look. When an organization spans multiple websites or has recently been absorbed into a parent system, the patient has no clear starting point.

## Key Takeaway

The most consistent finding is that *search engines are better at finding ROI forms than the organizations' own websites*. Forms frequently exist on servers but aren't linked from the pages patients would naturally visit. This suggests a systematic failure in information architecture: health systems build medical records pages but neglect to link the actual documents patients need.
