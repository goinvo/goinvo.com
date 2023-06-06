import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import References from '../../../components/references'
import Image from '../../../components/image'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'National Cancer Navigation - GoInvo',
  metaDescription:
    'Mapping cancer journey pain points and exploring how navigation could support patients and their families.',
  heroImage: '/images/features/national-cancer-navigation/banner.png',
}

const images = Array.from(Array(7), (x, i) => i + 1)

class NationalCancerNavigationFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="top" />
        <div className="primary-self-care-algorithms">
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
                  <div className="pure-g margin-bottom--double">
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
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              frameborder="0"
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
                <br />-{' '}
                <a
                  href="https://www.dropbox.com/s/92n9k4b5mz5ryov/cancer_nav_process_highlevel_v1.pdf?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cancer Navigation Process High Level V1 pdf
                </a>
                <br />-{' '}
                <a
                  href="https://www.dropbox.com/s/r6xwmaknrw5a6ic/cancer_nav_process_breakdown_v1.pdf?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cancer Navigation Process Breakdown V1 pdf
                </a>
                <br />-{' '}
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
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our open source healthcare newsletter."
                submitButtonText="Subscribe"
              />
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
                    // {
                    //   title:
                    //     'Bruel, S, et al. Patient Decision Aid in Vaccination: A Systematic Review of the Literature. U.S. National Library of Medicine',
                    //   link: 'https://pubmed.ncbi.nlm.nih.gov/32163307/',
                    // },
                    // {
                    //   title: '“COVID-19: Vaccine Options.” Dynamed Decisions',
                    //   link:
                    //     'https://decisions.dynamed.com/shared-decision-making/covid-19-vaccine-options',
                    // },
                    // {
                    //   title:
                    //     '“Mental Illness.” National Institute of Mental Health, U.S. Department of Health and Human Services',
                    //   link:
                    //     'https://www.nimh.nih.gov/health/statistics/mental-illness',
                    // },
                    // {
                    //   title:
                    //     '“Suicide Statistics.” American Foundation for Suicide Prevention, 14 June 2022',
                    //   link: 'https://afsp.org/suicide-statistics/',
                    // },
                    // {
                    //   title:
                    //     'Chinman, Matthew, et al. “Computer-Assisted Self-Assessment in Persons with Severe Mental Illness.” Psychiatrist.com, Physicians Postgraduate Press, Inc., 4 Feb. 2021',
                    //   link:
                    //     'https://www.psychiatrist.com/jcp/bipolar/computer-assisted-self-assessment-persons-severe-mental/',
                    // },
                    // {
                    //   title:
                    //     'Depp, Colin A, et al. “Technology to Assess and Support Self-Management in Serious Mental Illness.” Dialogues in Clinical Neuroscience, U.S. National Library of Medicine, 18 June 2018',
                    //   link: 'https://pubmed.ncbi.nlm.nih.gov/27489457/',
                    // },
                    // {
                    //   title:
                    //     '“Heart Disease Facts.” Centers for Disease Control and Prevention, 15 July 2022',
                    //   link: 'https://www.cdc.gov/heartdisease/facts.htm',
                    // },
                    // {
                    //   title: 'CDC National Health Report Highlights',
                    //   link:
                    //     'https://www.cdc.gov/healthreport/publications/compendium.pdf',
                    // },
                    // {
                    //   title:
                    //     'Hypertension in Adults: Screening. US Preventive Services Taskforce, 27 Apr. 2021',
                    //   link:
                    //     'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/hypertension-in-adults-screening',
                    // },
                    // {
                    //   title:
                    //     'Tucker, Katherine L, et al. “Self-Monitoring of Blood Pressure in Hypertension: A Systematic Review and Individual Patient Data Meta-Analysis.” PLoS Medicine, Public Library of Science, 19 Sept. 2017',
                    //   link:
                    //     'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5604965/',
                    // },
                    // {
                    //   title:
                    //     '“Kidney Basics.” National Kidney Foundation, 28 July 2022',
                    //   link: 'https://www.kidney.org/kidney-basics',
                    // },
                    // {
                    //   title:
                    //     'Erez, Daniella Levy, et al. “Dipping at Home: Is It Better, Easier, and More Convenient? A Feasibility and Acceptability Study of a Novel Home Urinalysis Using a Smartphone Application - Pediatric Nephrology.” SpringerLink, Springer Berlin Heidelberg, 21 Apr. 2022',
                    //   link:
                    //     'https://link.springer.com/article/10.1007/s00467-022-05556-8',
                    // },
                    // {
                    //   title:
                    //     '“10 Parameter Urinalysis Test at Home.” Diagnox Health: Innovative Wellness and Healthcare Products',
                    //   link:
                    //     'https://www.diagnoxhealth.com/blog/10-parameter-urinalysis-test-at-home',
                    // },
                    // {
                    //   title: 'Olive Diagnostics',
                    //   link: 'https://www.olive.earth/',
                    // },
                    // {
                    //   title:
                    //     '“Breast Cancer Statistics: How Common Is Breast Cancer?” American Cancer Society, 2022',
                    //   link:
                    //     'https://www.cancer.org/cancer/breast-cancer/about/how-common-is-breast-cancer.html',
                    // },
                    // {
                    //   title:
                    //     'Boraas, Marcia, and Sameer Gupta. “Breast Self-Exam (BSE).” BreastCancer.org, 29 June 2022',
                    //   link:
                    //     'https://www.breastcancer.org/screening-testing/breast-self-exam-bse',
                    // },
                    // {
                    //   title:
                    //     '“The Breast Cancer Risk Assessment Tool.” The National Cancer Institute',
                    //   link: 'https://bcrisktool.cancer.gov/index.html',
                    // },
                    // {
                    //   title:
                    //     '“Vision Impairment and Blindness.” World Health Organization',
                    //   link:
                    //     'https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment',
                    // },
                    // {
                    //   title:
                    //     '“Vision Impairment and Chronic Health Conditions.” Centers for Disease Control and Prevention, 17 June 2020',
                    //   link:
                    //     'https://www.cdc.gov/visionhealth/living/index.html',
                    // },
                    // {
                    //   title:
                    //     'Yannuzzi, L A. A Modified Amsler Grid. A Self-Assessment Test for Patients with Macular Disease. U.S. National Library of Medicine',
                    //   link: 'https://pubmed.ncbi.nlm.nih.gov/6175935/',
                    // },
                    // {
                    //   title: 'https://www.homeacuitytest.org',
                    //   link: 'https://www.homeacuitytest.org',
                    // },
                    // {
                    //   title:
                    //     '“National Diabetes Statistics Report.” Centers for Disease Control and Prevention, 18 Jan. 2022',
                    //   link:
                    //     'https://www.cdc.gov/diabetes/data/statistics-report/index.html',
                    // },
                    // {
                    //   title:
                    //     'Sia, Hon-Ke, et al. “Self-Monitoring of Blood Glucose in Association with Glycemic Control in Newly Diagnosed Non-Insulin-Treated Diabetes Patients: A Retrospective Cohort Study.” Nature News, Nature Publishing Group, 13 Jan. 2021',
                    //   link:
                    //     'https://www.nature.com/articles/s41598-021-81024-x',
                    // },
                    // {
                    //   title: '“What Is Nightscout?” Nightscout',
                    //   link: 'https://nightscout.github.io/#:~:text=Nightscout',
                    // },
                    // {
                    //   title:
                    //     '“The U.S. Government and International Family Planning &amp; Reproductive Health Efforts.” KFF, 24 June 2022',
                    //   link:
                    //     'https://www.kff.org/global-health-policy/fact-sheet/the-u-s-government-and-international-family-planning-reproductive-health-efforts/',
                    // },
                    // {
                    //   title:
                    //     'Stevenson, Amanda J, et al. The Impact of Contraceptive Access on High School Graduation. American Association for the Advancement of Science, 5 May 2021',
                    //   link:
                    //     'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8099178/',
                    // },
                    // {
                    //   title: '“Unmet Need for Contraception: Fact Sheet.” PRB',
                    //   link:
                    //     'https://www.prb.org/resources/unmet-need-for-contraception-fact-sheet/',
                    // },
                    // {
                    //   title:
                    //     '“A Decision Aid to Help Women Choose and Use a Method of Birth Control.” PCORI, 4 Mar. 2022',
                    //   link:
                    //     'https://www.pcori.org/research-results/2013/decision-aid-help-women-choose-and-use-method-birth-control',
                    // },
                    // {
                    //   title:
                    //     'Your Birth Control Choices - Reproductive Health Access Project. Reproductive Access Project, Oct. 2021',
                    //   link:
                    //     'https://www.reproductiveaccess.org/wp-content/uploads/2014/06/2020-09-contra-choices.pdf',
                    // },
                    // {
                    //   title:
                    //     'Ambrosino, Nicolino, and Enrica Bertella. Lifestyle Interventions in Prevention and Comprehensive Management of COPD. European Respiratory Society, Sept. 2018',
                    //   link:
                    //     'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6118879/',
                    // },
                    // {
                    //   title:
                    //     'Saini, Jagriti, et al. “A Comprehensive Review on Indoor Air Quality Monitoring Systems for Enhanced Public Health - Sustainable Environment Research.” BioMed Central, BioMed Central, 29 Jan. 2020',
                    //   link:
                    //     'https://sustainenvironres.biomedcentral.com/articles/10.1186/s42834-020-0047-y',
                    // },
                    // {
                    //   title: '“Pulse Oximetry.” Yale Medicine, 2 Mar. 2021',
                    //   link:
                    //     'https://www.yalemedicine.org/conditions/pulse-oximetry#:~:text=Basically%2C',
                    // },
                    // {
                    //   title:
                    //     'Hang, Liang-Wen, et al. “Validation of Overnight Oximetry to Diagnose Patients with Moderate to Severe Obstructive Sleep Apnea.” BMC Pulmonary Medicine, U.S. National Library of Medicine, 20 Mar. 2015',
                    //   link: 'https://pubmed.ncbi.nlm.nih.gov/25880649/',
                    // },
                    // {
                    //   title:
                    //     'Luks, Andrew M, and Erik R Swenson. “Pulse Oximetry for Monitoring Patients with COVID-19 at Home. Potential Pitfalls and Practical Guidance.” Annals of the American Thoracic Society, U.S. National Library of Medicine, 17 Sept. 2020',
                    //   link: 'https://pubmed.ncbi.nlm.nih.gov/32521167/',
                    // },
                    // {
                    //   title:
                    //     '“Evaluating Clinical Decision Support.” Rethinking Clinical Trials, 27 Dec. 2021',
                    //   link:
                    //     'https://rethinkingclinicaltrials.org/chapters/conduct/real-world-evidence-clinical-decision-support/evaluating-cds/',
                    // },
                    // {
                    //   title:
                    //     '“Immunization Calculation Engine (ICE).” CDS Connect',
                    //   link:
                    //     'https://cds.ahrq.gov/cdsconnect/artifact/immunization-calculation-engine-ice-0',
                    // },
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
