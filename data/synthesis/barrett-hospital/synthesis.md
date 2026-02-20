# Barrett Hospital & HealthCare — Org-Level Synthesis

## Overview

Barrett Hospital & HealthCare is a small independent nonprofit critical access hospital in Dillon, Montana. The organization offers a single pathway for patients requesting their medical records: a one-page PDF authorization form linked from a dedicated "Request Medical Records" page on its Wix-hosted website. Only one form was found during the retrieval process.

## Access Pathway

Barrett Hospital does **not** differentiate between patient self-access and third-party release of information. The sole form — titled "Authorization for Disclosure of Protected Health Information" — is a generic HIPAA authorization designed to cover all disclosure scenarios, including inter-provider transfers, third-party releases, and patient access. The form includes dual "RECEIVE from" / "RELEASE to" fields, a compensation disclosure clause, and language about conditioning treatment on signing — elements that are appropriate for third-party authorizations but inappropriate and potentially confusing when a patient is simply exercising their HIPAA right of access under § 164.524. There is no mention of patient access rights anywhere on the form.

The "Purpose" field does include "Personal Use" as a circled option, which is the closest the form comes to acknowledging patient self-access. However, this is a single option among several on a general-purpose form, not a dedicated pathway.

## Retrieval Experience

Finding the form was straightforward. A site-specific search quickly identified the "Request Medical Records" page, which features a clearly labeled download link. For a small rural critical access hospital, this level of web accessibility is commendable — many larger organizations make their forms harder to find. No bot blocking or browser fallback was needed.

## Form Document Quality

The form is a **natively digital PDF but not fillable** — it has zero interactive form fields. Patients must print, handwrite their responses on blank lines, and return the form via fax, mail, or in-person pickup. The "circle one" instructions for format and delivery options confirm the print-and-handwrite design intent.

Despite the non-fillable limitation, the form is well-organized and concise at a single page. It follows a logical flow: patient identification → recipient → purpose → record types → date ranges → format/delivery → legal notices → signature. The record-type section uses an efficient tabular layout with per-category date ranges. The turnaround time ("10 days") is stated prominently at the top — a practice many organizations neglect entirely.

The language is mostly plain, though the legal paragraphs at the bottom are denser. The "Initial" column in the record-type table is ambiguous — patients are apparently expected to initial next to each record type they want, but this is never explained. The abbreviation "Disc" next to imaging options is also cryptic.

The form collects last four digits of SSN, which is unnecessary under HIPAA for identity verification and may deter some patients. Delivery options include pick up, fax, and mail — fax qualifies as an electronic submission pathway per our scoring baseline, so the organization meets the minimum for remote submission.

## Barriers and Compliance Concerns

The most significant compliance issue is the conditioning language: "I understand that I may refuse this authorization and that my refusal to sign may affect my ability to obtain treatment or payment or my eligibility for benefits." Under HIPAA § 164.524, providers cannot condition treatment on a patient's willingness to authorize access to their own records. Because this dual-purpose form makes no distinction between patient access and third-party release, this problematic language is presented to all requestors regardless of context.

The compensation disclosure clause ("I understand that _____ will receive compensation for its use/disclosure of the information") is similarly irrelevant for patient access requests and adds confusion. No fee schedule is disclosed on the form or the website's medical records page.

## Strengths

- **Easy findability** with a dedicated medical records page and clear download link
- **Concise single-page design** that reduces patient burden
- **Stated turnaround time** of 10 days sets clear expectations
- **Fax submission available**, providing a remote electronic pathway
- **42 CFR Part 2 and redisclosure notices** are properly included

## Overall Assessment

Barrett Hospital provides a functional but unexceptional records request process typical of small independent hospitals. The form is easy to find, reasonably organized, and concise, but it is a generic third-party authorization form repurposed for all disclosure purposes — including patient self-access — without any differentiation. The non-fillable PDF and conditioning language are the most notable shortcomings. For a critical access hospital with limited resources, the web presence and form accessibility are respectable, but the organization misses the mark on patient-centeredness by failing to treat individual access as distinct from third-party release.
