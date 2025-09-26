import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import References from '../../../components/references'
import Author from '../../../components/author'
import Divider from '../../../components/divider'

import { mediaUrl } from '../../../helpers'
import config from '../../../../config'
import Image from '../../../components/image'

const frontmatter = {
  metaTitle: 'National Cancer Navigation - GoInvo',
  metaDescription:
    'Mapping cancer journey pain points and exploring how navigation could support patients and their families.',
  heroImage: '/images/features/national-cancer-navigation/hero.png',
}

const images = Array.from(Array(7), (x, i) => i + 1)

class NationalCancerNavigationFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="top" />
        <div className="national-cancer-navigation">
          <div className="pad-vertical--double pad-bottom--none">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">National Cancer Navigation</h1>
              <h2 className="header--lg">
                The White House Calls for a Childhood Cancer Service
              </h2>
              <p>
                Earlier this year, the Biden-Harris administration{' '}
                <a
                  href="https://www.whitehouse.gov/briefing-room/statements-releases/2023/02/02/fact-sheet-on-one-year-anniversary-of-reignited-cancer-moonshot-biden-harris-administration-announces-new-actions-to-end-cancer-as-we-know-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  announced
                </a>{' '}
                a handful of new actions relating to the Cancer Moonshot goals
                to reduce cancer mortality rates and improve the lives of
                patients and survivors.
              </p>
              <p>
                The first action listed is the creation of CC-DIRECT: Childhood
                Cancer: Data Integration for Research, Education, Care, and
                Clinical Trials — an initiative to support children,
                adolescents, and young adults throughout their cancer journey.
                Among other services, CC-DIRECT would provide patient navigation
                support to families, facilitate research participation, and
                establish a portable, shareable, standardized cancer health
                record.
              </p>
              <p>
                The National Cancer Institute has been tasked with creating
                CC-DIRECT, and since April 2023, NCI has been laying the
                groundwork with their{' '}
                <a
                  href="https://nationalcancerplan.cancer.gov/national-cancer-plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Cancer Plan
                </a>
                . Although their efforts and strategies are primarily focused on
                research, they have extended a call to action for contributions
                from across different sectors.
              </p>

              <h2 className="header--lg">
                7 Underlying Problems in the US Cancer Space
              </h2>
              <p>
                Our research aims to organize cancer journey pain points and
                underlying problems to support decision-makers in evaluating the
                potential impact of solutions they devise. This work reflects
                what our team has learned so far and is not a comprehensive
                representation of all aspects of the cancer experience. Feedback
                and suggestions are welcome at{' '}
                <a href="mailto:CancerNavigator@goinvo.com">
                  CancerNavigator@goinvo.com
                </a>
                .
              </p>
            </div>
            <div className="max-width">
              {images.map(i => {
                return (
                  <div key={i} className="pure-g margin-bottom--double">
                    <div className="pure-u-1 pure-u-lg-1-2">
                      <Image
                        src={`/images/features/national-cancer-navigation/${i}-prob.png`}
                        className="image--max-width"
                        sizes={config.sizes.full}
                      />
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-2">
                      <Image
                        src={`/images/features/national-cancer-navigation/${i}-solve.png`}
                        className="image--max-width"
                        sizes={config.sizes.full}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="max-width max-width--md content-padding">
              <p>
                Disparities exist across all of these problem areas,
                disproportionately impacting individuals from low-income
                backgrounds, minority populations, and rural areas, as well as
                those with disabilities, language barriers, and cultural
                differences. Services must be designed around these communities'
                experiences from the outset if they are to be successful at
                closing the gaps. As we consider these problems, it’s helpful to
                identify the focus of a given approach: is it mostly intended to
                address the underlying, upstream problems, or the more
                immediate, downstream pain points?
              </p>
              <p>
                The implementation of a national patient navigation service like
                CC-DIRECT could promptly address numerous pain points in cancer
                care, and research strongly highlights the significance and
                impact of human touch in patient care. In fact, the genesis of
                patient navigation resulted from a 1989 report by the American
                Cancer Society that found that poor cancer patients faced
                substantially greater barriers in obtaining care and often did
                not seek care they couldn’t afford. The following year, the
                Harlem Hospital Center implemented the first patient navigation
                program for underserved cancer patients, showing that patient
                navigation could dramatically improve outcomes.
              </p>
              <p>
                By also expanding our attention to underlying problems like
                delays in detection and diagnosis and the siloed nature of
                health systems, we can decrease the volume of manual
                responsibilities for navigators and maximize the impact and
                scalability of patient navigation.
              </p>

              <h2 className="header--lg">
                Reimagining Patient Navigation for Cancer
              </h2>
            </div>
            <iframe
              src="https://goinvo.github.io/cancernavigator/"
              width="100%"
              height="650px"
              allowFullScreen
              frameBorder="0"
              title="Cancer Navigator"
            ></iframe>
            <div className="max-width max-width--md content-padding">
              <p>
                This timeline outlines how cancer navigation could look across
                multiple services, each of which is a direct response to
                existing issues with quality and experience of care for
                patients. These services include:
              </p>
              <ul>
                <li className="margin-bottom--half">
                  <b>Digital Navigation Tool</b>
                  <br />
                  Mobile application for facility referral, record sharing, and
                  care logistics
                </li>
                <li className="margin-bottom--half">
                  <b>Patient Navigator</b>
                  <br />
                  Designated patient advocate who arranges logistics, emotional
                  support, and resources on eligibility
                </li>
                <li className="margin-bottom--half">
                  <b>Financial Navigator</b>
                  <br />A service that breaks down costs transparency, determine
                  eligibility for financial aid
                </li>
                <li className="margin-bottom--half">
                  <b>SDOH Accommodations</b>
                  <br />
                  Free transportation and lodging as needed for patients
                  traveling for care
                </li>
                <li className="margin-bottom--half">
                  <b>Patient Education</b>
                  <br />
                  Resources to help patients further their understanding of
                  their health
                </li>
                <li className="margin-bottom--half">
                  <b>Standard Health Record</b>
                  <br />A longitudinal, shareable electronic health record
                </li>
              </ul>
              <p>
                <b>See our progress since November 2022</b>
              </p>
              <div className="pure-g">
                <div className="pure-u-1">
                  <div className="margin-bottom--double">
                    <div className="poster margin-bottom--half">
                      <a
                        href={mediaUrl(
                          '/pdf/vision/national-cancer-navigation/cancer_nav_process_highlevel_v1.pdf'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/features/national-cancer-navigation/highlevel-preview.png"
                          className="image--max-width display--block"
                          sizes={
                            config.sizes.fullToHalfAtLargeInsideMediumMaxWidth
                          }
                        />
                      </a>
                    </div>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/national-cancer-navigation/cancer_nav_process_highlevel_v1.pdf'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cancer Navigation Process High Level V1 pdf
                    </a>
                  </div>
                </div>
                <div className="pure-u-1">
                  <div className="margin-bottom--double">
                    <div className="poster margin-bottom--half">
                      <a
                        href={mediaUrl(
                          '/pdf/vision/national-cancer-navigation/cancer_nav_process_breakdown_v1.pdf'
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/features/national-cancer-navigation/breakdown-preview.png"
                          className="image--max-width display--block"
                          sizes={
                            config.sizes.fullToHalfAtLargeInsideMediumMaxWidth
                          }
                        />
                      </a>
                    </div>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/national-cancer-navigation/cancer_nav_process_breakdown_v1.pdf'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cancer Navigation Process Breakdown V1 pdf
                    </a>
                  </div>
                </div>
              </div>
              <p>
                <a
                  href="https://github.com/goinvo/cancernavigator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Repo
                </a>
              </p>
              <p>
                Have feedback? Send it to{' '}
                <a href="mailto:CancerNavigator@goinvo.com">
                  CancerNavigator@goinvo.com
                </a>
              </p>

              <Divider />

              <h2 className="header--lg margin-bottom--half">Authors</h2>
              <p className="margin-top--none">
                Claire Lin
                <br />
                Tala Habbab
                <br />
                Sharon Lee
                <br />
                Craig McGinley
                <br />
                Samantha Wuu
                <br />
                Juhan Sonin
              </p>
              <h2 className="header--lg margin-bottom--half margin-top--double">
                Contributors
              </h2>
              <p className="margin-top--none">
                <a
                  href="https://www.linkedin.com/in/gcordovano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grace Cordovano, PhD
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/wendi-cross-98153519/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wendi Cross, PhD
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/daniel-ngo-41953232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Daniel Ngo
                </a>
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'Walsh, Jennifer, et al. “What Are the Current Barriers to Effective Cancer Care Coordination? A Qualitative Study.” BMC Health Services Research, vol. 10, no. 1, 20 May 2010',
                      link:
                        'https://link.springer.com/article/10.1186/1472-6963-10-132',
                    },
                    {
                      title:
                        'Delamare Fauvel, Alix, et al. “Diagnosis of Cancer in the Emergency Department: A Scoping Review.” Cancer Medicine, vol. 12, no. 7, 9 Jan. 2023. Accessed 16 Apr. 2023',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/36622062/',
                    },
                    {
                      title:
                        '“Cancer and Emergency Medicine | EGRP/DCCPS/NCI/NIH.” Accessed 31 May 2023',
                      link: 'https://epi.grants.cancer.gov/emergency-medicine/',
                    },
                    {
                      title:
                        'Tong, Michelle, and 2022. “Racial Disparities in Cancer Outcomes, Screening, and Treatment.” KFF, 3 Feb. 2022',
                      link:
                        'www.kff.org/racial-equity-and-health-policy/issue-brief/racial-disparities-in-cancer-outcomes-screening-and-treatment/',
                    },
                    {
                      title:
                        'Zhu, J., et al. “First-Onset Mental Disorders after Cancer Diagnosis and Cancer-Specific Mortality: A Nationwide Cohort Study.” Annals of Oncology, vol. 28, no. 8, 19 May 2017, pp. 1964-1969',
                      link: 'https://doi.org/10.1093/annonc/mdx265',
                    },
                    {
                      title:
                        'Carrera, Pricivel M., et al. “The Financial Burden and Distress of Patients with Cancer: Understanding and Stepping-up Action on the Financial Toxicity of Cancer Treatment.” CA: A Cancer Journal for Clinicians, vol. 68, no. 2, 16 Jan. 2018, pp. 153-165',
                      link: 'https://doi.org/10.3322/caac.21443',
                    },
                    {
                      title:
                        'Fallowfield, Lesley, and Valerie Jenkins. “Communicating Sad, Bad, and Difficult News in Medicine.” Lancet (London, England), vol. 363, no. 9405, 2004, pp. 312-9',
                      link: 'https://www.ncbi.nlm.nih.gov/pubmed/14751707',
                    },
                    {
                      title:
                        'Nazemi, Kellie J., and Suman Malempati. “Emergency Department Presentation of Childhood Cancer.” Emergency Medicine Clinics of North America, vol. 27, no. 3, 1 Aug. 2009, pp. 477-495. Accessed 31 May 2023',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/19646649/',
                    },
                    {
                      title:
                        "Hendren, Samantha, et al. “Patients' Barriers to Receipt of Cancer Care, and Factors Associated with Needing More Assistance from a Patient Navigator.” Journal of the National Medical Association, vol. 103, no. 8, July 2011, pp. 701-710",
                      link: 'https://doi.org/10.1016/s0027-9684(15)30409-0',
                    },
                    {
                      title:
                        '“Rural Urban Disparities in Cancer.” Gis.cancer.gov',
                      link:
                        'https://gis.cancer.gov/mapstory/rural-urban/index.html',
                    },
                    {
                      title:
                        'Onega, Tracy, et al. “Geographic Access to Cancer Care in the U.S.” Cancer, vol. 112, no. 4, 2008, pp. 909-918',
                      link: 'https://doi.org/10.1002/cncr.23229',
                    },
                    {
                      title:
                        'Ward, E., et al. “Association of Insurance with Cancer Care Utilization and Outcomes.” CA: A Cancer Journal for Clinicians, vol. 58, no. 1, 1 Jan. 2008, pp. 9-31',
                      link: 'https://doi.org/10.3322/ca.2007.0011',
                    },
                    {
                      title:
                        'Marlow, Nicole M., et al. The Relationship between Insurance Coverage and Cancer Care: A Literature Synthesis. PubMed, Research Triangle Park (NC), RTI Press, 2009',
                      link: 'https://www.ncbi.nlm.nih.gov/books/NBK542737/',
                    },
                    {
                      title:
                        'Meijer, Anna, et al. “Effects of Screening for Psychological Distress on Patient Outcomes in Cancer: A Systematic Review.” Journal of Psychosomatic Research, vol. 75, no. 1, July 2013, pp. 1-17',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3833882/',
                    },
                    {
                      title:
                        'Kling, Jim. “Time to Cancer Diagnoses in U.S. Averages 5 Months.” www.mdedge.com, 15 Sept. 2022. Accessed 31 May 2023',
                      link:
                        'https://www.mdedge.com/hematology-oncology/article/257891/breast-cancer/time-cancer-diagnoses-us-averages-5-months',
                    },
                    {
                      title:
                        'Handtke, Oriana, et al. “Culturally Competent Healthcare - a Scoping Review of Strategies Implemented in Healthcare Organizations and a Model of Culturally Competent Healthcare Provision.” PLOS ONE, vol. 14, no. 7, 30 July 2019, pp. 1-24',
                      link:
                        'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0219971',
                    },
                    {
                      title:
                        'Nekhlyudov, Larissa, et al. “Patient-Centered, Evidence-Based, and Cost-Conscious Cancer Care across the Continuum: Translating the Institute of Medicine Report into Clinical Practice.” CA: A Cancer Journal for Clinicians, vol. 64, no. 6, 9 Sept. 2014, pp. 408-421',
                      link: 'https://doi.org/10.3322/caac.21249',
                    },
                    {
                      title:
                        "Kessels, Roy P C. “Patients' Memory for Medical Information.” Journal of the Royal Society of Medicine, vol. 96, no. 5, May 2003, pp. 219-22",
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC539473/',
                    },
                    {
                      title:
                        'Rosenkrantz, Andrew B., et al. “Perceptions of Radiologists and Emergency Medicine Providers Regarding the Quality, Value, and Challenges of Outside Image Sharing in the Emergency Department Setting.” AJR. American Journal of Roentgenology, vol. 214, no. 4, 1 Apr. 2020, pp. 843-852. Accessed 28 June 2021',
                      link: 'https://pubmed.ncbi.nlm.nih.gov/32023121/',
                    },
                    {
                      title:
                        'Virnig, Beth A., et al. “A Matter of Race: Early-versus Late-Stage Cancer Diagnosis.” Health Affairs, vol. 28, no. 1, Jan. 2009, pp. 160-168',
                      link: 'https://doi.org/10.1377/hlthaff.28.1.160',
                    },
                    {
                      title:
                        '“Survey: Majority of Cancer Patients Struggle to Afford Cancer Care.” American Cancer Society Cancer Action Network, 15 Dec. 2021',
                      link:
                        'www.fightcancer.org/releases/survey-majority-cancer-patients-struggle-afford-cancer-care',
                    },
                    {
                      title:
                        'Robin Vanderpool, DrPH. “Availability and Accessibility of Cancer Care Delivery Approaches to Reduce Financial Toxicity of Rural and Urban Cancer Patients in Kentucky.” Www.jons-Online.com, vol. 13, no. 5, 1 June 2022. Accessed 31 May 2023',
                      link:
                        'www.jons-online.com/issues/2022/may-2022-vol-13-no-5/4518-availability-and-accessibility-of-cancer-care-delivery-approaches-to-reduce-financial-toxicity-of-rural-and-urban-cancer-patients-in-kentucky',
                    },
                    {
                      title:
                        'Awidi, Muhammad, and Samer Al Hadidi. “Participation of Black Americans in Cancer Clinical Trials: Current Challenges and Proposed Solutions.” JCO Oncology Practice, vol. 17, no. 5, May 2021, pp. 265-271',
                      link: 'https://doi.org/10.1200/op.21.00001',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NationalCancerNavigationFeature
