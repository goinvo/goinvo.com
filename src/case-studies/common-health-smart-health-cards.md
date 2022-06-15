---
title: 'Vaccination Cards for the Nation '
image: '/images/case-studies/mitre/SHR/shr-header2.jpg'
client: 'Common Health'
caption: 'CommonHealth drives an open source patient health record and vaccination credentials for every Android phone.'
categories:
  - 'health-it-and-infrastructure'
  - 'open-source'
  - 'patient-engagement'
upNext:
  - 'fastercures-health-data-basics'
  - 'determinants-of-health'
  - 'open-source-healthcare'
hidden: false
metaDescription: 'CommonHealth drives an open source patient health record and vaccination credentials for every Android phone.'
---

import Divider from 'components/divider'
import Quote from 'components/quote'

# Vaccination Cards for the Nation

for Common Health

### Problem

<!-- prettier-ignore-start -->
The Commons Project needed an infusion of design across their product and services to explore and define the future of patient data access and use.
<!-- prettier-ignore-end -->

### Solution

We created a flexible project model to work closely with The Commons Project team on a variety of projects as needed, including informed patient data sharing, a design review of their current app, groundwork thinking on verifiable vaccination records, and more.

### Results

For each focus area, we infused our fast-paced timeline with crucial design steps: research, concept creation, design and prototyping, small-scale user feedback, iteration, documentation, and delivery. Our verifiable vaccination record work contributed to VCI’s SMART Health Card initiative.

<span class="text--uppercase text--gray text--bold text--spacing text--md">Time:</span> 1.2 designers for 5 months
<br /><span class="text--uppercase text--gray text--bold text--spacing text--md">Tags:</span> Patient Engagement, Health IT & Infrastructure, Open Source
<br />
<a href="https://vaccinationcredential.org/about#smart-health" target="blank" rel="noopener noreferrer" class="button button--secondary button--lg margin-top--double margin-bottom--half margin-right--only-lg">VCI website</a>
<a href="https://github.com/smart-on-fhir/health-cards" target="blank" rel="noopener noreferrer" class="button button--secondary button--lg margin-top--double margin-bottom--half">GitHub</a>

<Divider />

## Process

CommonHealth is an Android app that helps people gather their medical data on their phones, empowering patients to take more ownership over their health and have the ability to manage their health data as they see fit. Created by the non-profit The Commons Project, CommonHealth puts patient privacy first by storing data on the patient’s own phone rather than in the cloud and does not sell, share, or use patient data for marketing or advertising without the patient’s informed consent ([1](https://www.commonhealth.org/)). Across the past decade, the GoInvo studio has worked on projects to help patients have access and ownership of their health data, making this engagement a perfect fit. Our studio’s values are strongly aligned with the non-profit, whose core principles are human-centricity, interoperability, responsible stewardship, and equitable access. ([2](https://www.thecommonsproject.org/about))

We worked with The Commons Project to review their app design for CommonHealth and develop new exploratory designs from multiple angles. For this project, we integrated closely into The Commons Project team and tackled areas of interest in ~6 week bursts, a more flexible model crafted to best fit their needs.

Our work spanned many areas:

- **Patient Data Sharing** - We developed designs and prototypes around informed patient data sharing
- **UI/UX Design Review** - Performed a design review of the CommonHealth app to identify areas for improvement
- **Clinical Notes and Insurance Data** - Explored what new data would be available via FHIR r4 and conducted research and design around how this new information should be presented to patients within the CommonHealth App
- **Verifiable Vaccination Records and Test Results** - Contributed and developed groundwork thinking on vaccination record gathering and sharing
- **... And more**

For each of the main projects, we infused our fast-paced timeline with crucial design steps: research, concept creation, design and prototyping, small-scale user feedback, iteration, documentation, and delivery. Because we’ve worked on a wide range of products and services across healthcare, we were able to provide tactical as well as strategic support. We handled everything from identifying data elements that FHIR r4 resources would support to envisioning the patient experience of learning about and receiving their vaccination records.

#### On the Cutting Edge of Covid-19 Vaccination Record Sharing

Over an 8-week period, we dove into the emerging effort to create verifiable test result and vaccination records, motivated by the public health challenges posed by COVID-19. As the world considered how international travel would need to transform during a pandemic, global players such as the International Air Transport Association (IATA) and hundreds of local players such as CLEAR Health Pass began to imagine solutions. Early on, the consensus was that airlines and country borders needed a way to check travelers’ COVID-19 status to make sure they were safe to travel. This could be done by showing a recent PCR or antigen test result or a vaccination record. A crucial challenge was verifying that the record could be trusted – if the record came from a legitimate source, had been tampered with, etc.

The Vaccine Credentialing Initiative (VCI) developed a solution to this problem through SMART Health Cards (SHC), an open source project. As a founding member of the VCI, The Commons Project helped develop and productionize SMART Health Cards (SHC), working with partners including Epic, Microsoft, MITRE, Apple, and many more. The Commons Project brought us into these foundational conversations and asked us to explore and envision the patient SHC experience.

#### Defining an Evolving National Effort

Early on, we worked with The Commons Project to grasp the many moving parts of this effort to help patients access and use their verifiable vaccination (and test result) records. We had to understand the technical abilities and limitations of the new verifiable record data standard (SMART Health Cards). We explored how people should interact with these verifiable records and mapped out potential hurdles to a smooth user experience.

It was immediately apparent that the user experience would be difficult to control. The verifiable record effort relied on many different parties, such as the partners contributing to the development of SMART Health Cards, patient apps, COVID testing, vaccination sites, and state or local government efforts. The diagram below shows early thinking on how people could access these new records.

This diagram is tellingly complex due to a few key challenges:

1. The industry was not fully settling on one standard (such as SMART Health Cards) to use as the single verifiable record type.
2. There were major state-to-state differences in what vaccination data was gathered and retained, whether a portal to view vaccination records existed, etc.
3. As a joint effort rather than a top-down approach, no single entity had the authority to require states, vaccination or testing centers, other health providers, or other industry players to provide SHCs or inform patients about SHCs in a standard way or at all.

#### Designing the patient experience

As a secure and patient-centric health record app,CommonHealth was a promising place to hold verifiable health records. We researched, designed, prototyped, tested, and iterated designs around patients adding these verifiable records to their CommonHealth app. Through this effort, we explored public sentiment around having to show health records for access to travel and more. We considered the value of verifiable records outside of the COVID-19 use cases, such as students needing to share immunization records with their schools. We also dug into the mental model around these new records - how should people hear about these verifiable records, and how should the records be organized in and added to CommonHealth? In a round of small-scale user feedback, we performed task testing and gathered qualitative input on the designs.

<Divider />

## Insights

#### 1. The power of small-scale user testing

Nielsen Norman advocates for smaller and more frequent tests with users over single large-scale testing. Interviewing at least 5 participants can be sufficient to get a general feedback pulse. While new insights can arise from each interview, the feedback begins to repeat after five sessions (citation). Throughout the engagement, we conducted testing with 8 to12 participants to keep evaluating our design blind spots, discovering improvements, and validating what worked. Because SMART Health Cards would potentially reach a broad audience, we did our best to engage a range of perspectives across age, sex, state lines, professions, race and ethnicity, and android vs. apple users. While incomplete and imperfect, it helped us get a better range of perspectives in our feedback.

#### 2. A unique challenge to create a public good that works for everyone

As a record that could be required of any traveler, the product needed to work for those who aren’t tech-savvy, those who are worried about their privacy with digital solutions, those who don’t have reliable access to the internet, those who need screen reader accessible digital tools, and more. These concerns showed up in secondary research as well as in user feedback. We encouraged the team to advocate for a printed version of the SHC to be given to patients directly and emailed to be printed later so that patients wouldn’t have to use the digital version if they didn’t want to or couldn’t do so.

#### 3. Interest in sharing digital health records

Despite concerns, people were interested in having a digital version of their vaccination record more so than just paper.

#### 4. Showing vaccination status could be emotionally charged

As anticipated, our user feedback highlighted a wide (although not comprehensive) range of perspectives on sharing COVID-19 vaccination or test result status. Some participants had no problem with sharing a verifiable digital record. Some were even excited to do so. Others described stressful experiences around family strife across vaccination lines and the dread of imagining a future where they would have to show proof of all kinds of vaccinations. The topic of obtaining this type of vaccination credential (SMART Health Cards) brought up strong emotions for a New Yorker who had already jumped through hurdles to get their credential in their Excelsior app. This input helped to inform messaging and phrasing to ease concerns and help set expectations appropriately where possible.

#### 5. Obtaining a verifiable record or COVID-19 Pass should be a cohesive experience.

From the perspective of the team, it was nearly unbelievable that so many separate entities would come together to create, build, provide, and use SMART Health Cards. With this in mind, the limitations and usability hurdles were to be expected and understandable. However, the general public simply expected a smooth experience. For example, those using the Excelsior Pass were not excited about the prospect of needing another similar but different pass. If they receive a “verifiable record” they expected or at least hoped that it would be accepted everywhere. Additionally, something as simple as inadequate email communication design could break the entire experience if not carefully crafted. Because of this, the success of SMART Health Cards would likely rely upon the industry’s adoption and standardized communication and use of this new verifiable file type.

#### 6. Infusing patient education throughout the experience

A key priority was to include education throughout the SMART Health Card experience. However, we did not want to burden the patient with pages of content to scroll through if they were not interested. Instead, we kept the content concise and included a "learn more" button that could address frequently asked questions. We identified these frequently asked questions and concerns from our initial research and updated them based on common questions and concerns during user testing. We included ways to learn more both on the main SMART Health Card page as well as at the bottom of each Card page.

<Divider />

![SHR completeness](/images/case-studies/mitre/SHR/shr-completeness-record.jpg)

## Results

The international coalition of health and tech companies coalesced around the Vaccination Credential Initiative (VCI). CommonHealth was the primary, open source platform and reference implementation for the digital patient vaccine records. Open data standards based on the SMART Health Card spec, along with commercial and government buy-in, drove the toolkit’s planetary adoption.

Crisis can often instigate shock doctrine to the detriment of the many. Instead the VCI (and the C19HCC.org alliance), driven by private and non-profit organizations along with The Commons Project, triggered an amazing mission that shipped: every US resident will have their verifiable vaccination record, available on their phones, using open source specifications and software. While the US government struggled to perform under the fire of a pandemic, these alliances showed their grace under pressure, delivering international aid to Washington instead of the other way around.

Overall, we were able to help provide insight, user experience design, and interface design across many topics and areas of The Commons Project’s products.
