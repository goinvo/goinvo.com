
import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Quote from '../../../components/quote'
import Author from '../../../components/author'
import References from '../../../components/references'
import Divider from '../../../components/divider'
import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Transforming Service Access in Massachusetts',
  metaDescription:
    'A centralized MA resident database for better service accessibility.',
  heroImage:
    '/images/features/eligibility/hero-image.jpg',
}


class EligibilityEngine extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="eligibility-engine">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">
                Transforming Service Access in Massachusetts
              </h1>
              <p>
                The current benefit system in Massachusetts is fragmented and inefficient, leading to low utilization rates. Residents struggle to navigate the complex application process, while caseworkers are overwhelmed.
              </p>
              <p>
                To solve this, a centralized resident database and integrated benefit application system could be implemented. This would enable proactive service recommendations, streamlined applications, and automated benefit renewals.
              </p>
              <p>
                The goal of the proposed system is to increase access to services for residents and improve efficiency for government agencies. By simplifying the process and providing personalized guidance, the system could lead to higher benefit utilization rates and improved program outcomes.
              </p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h2 className="header--lg text--center max-width--sm margin-auto">
                  Challenges of Accessing Services in Massachusetts
                </h2>
              </div>
              <p>
                The Commonwealth of Massachusetts demonstrates a strong commitment to its residents by investing substantial resources in providing a wide array of services, ranging from healthcare and food assistance to housing and educational programs. The full spectrum of these services can be explored on the official Mass.gov website. However, despite these efforts, a significant portion of eligible residents, over 50%, are not receiving the benefits they qualify for, such as MassHealth and SNAP.<sup><a href="#references">1</a></sup>{' '}<sup><a href="#references">2</a></sup>{' '}
              </p>

              {/* <div classNAme="max-width max-width--md content-padding">
                <iframe src="https://goinvo.github.io/ma-services/" className="max-width"></iframe>
              </div>
              <div class="text--center">
                <a
                  href="https://goinvo.github.io/ma-services/"
                  target="blank"
                  rel="noopener noreferrer"
                  class="button button--secondary button--lg margin-top--double margin-bottom--half"
                >
                  {"View MA Service List"}
                </a>
              </div> */}
              <p>
                One of the primary reasons for this gap is the difficulty in navigating the complex network of available services. Residents often face challenges in identifying programs that are relevant to their needs, understanding the eligibility criteria, and gathering the necessary information and documents to apply. The current service application process, which often involves manual data entry and document uploads on multiple agency-specific portals, can be time-consuming and overwhelming.
              </p>

              <div className="margin-auto">
                <a
                  href={mediaUrl(
                    '/images/features/eligibility/current-process-2.jpg'
                  )}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/eligibility/current-process-2.jpg"
                    className="image--max-width"
                  />
                </a>
                <div class="text--center">
                  <p>
                    Current Application Process
                  </p>
                </div>
              </div>
              <a
                href={mediaUrl(
                  '/pdf/vision/eligibility/journey-map.pdf'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-download"
              >
                <Image
                  src="/images/features/eligibility/journey-map-preview.jpg"
                  className="image--max-width"
                />
              </a>

              <div className="button-group">
                <a
                  href={mediaUrl(
                    '/pdf/vision/eligibility/journey-map.pdf'
                  )}
                  className="button button--secondary margin-top--double margin-bottom--double"
                >
                  Download full applicant journey map
                </a>
              </div>

              <p>
                Furthermore, the high caseloads faced by caseworkers can lead to delays in processing applications and providing much-needed support to residents. This creates a frustrating experience for individuals seeking assistance and hinders the effectiveness of the programs themselves.
              </p>

              <Quote
                quotee="Streamlining Access to Public Benefits in Michigan"
              >
                Although many residents have previously applied for benefits, they often feel surprised and caught off guard by the verification requirements. Without clear and customized guidance, residents find themselves guessing what is needed and submitting wrong or outdated paperwork.
                <sup><a href="#references">3</a></sup>{' '}
              </Quote>

              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h2 className="header--lg text--center max-width--sm margin-auto">
                  Common Data Elements for MA Residents
                </h2>
              </div>

              <p>
                The creation of a centralized database containing common data elements of Massachusetts residents could significantly improve the current situation. Residents would need to provide the information only once and this database would enable a more proactive and efficient approach to service delivery, where eligible residents are automatically informed about and even can be pre-approved for relevant programs.
              </p>
              <p>
                From a government perspective, a unified record of MA residents would streamline the eligibility verification process, reduce administrative burdens, and enable more targeted and effective program implementation.
              </p>
              <p>
                The Commonwealth of Massachusetts already collects essential identification information, including names, birth dates, Social Security numbers, and addresses, through the driver's license and state ID registration process. By incorporating additional data elements like income and household information, this core dataset could be leveraged to assess eligibility for a wide range of benefits and services.
              </p>

              <div className="margin-auto">
                <a
                  href={mediaUrl(
                    '/images/features/eligibility/application-data-2.jpg'
                  )}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/eligibility/application-data-2.jpg"
                    className="image--max-width"
                  />
                </a>
                <div class="text--center">
                  <p>
                    Data required for major MA benefit application
                  </p>
                </div>
              </div>

              <div class="max-width">
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT2dKnbphA4iq9sL7br2RkPHMbZkdFecELfz14-q3rSN9KB2Xv0HYoTP7jeCGsEG4Yr6SeTVh4LY_4_/pubhtml?widget=true&amp;headers=false"></iframe>
              </div>
              <div class="text--center">
                <a
                  href="https://docs.google.com/spreadsheets/d/1SRI5Tz5pJLIEr_ibwOj32J4cwN0Ry1cgbXNAXfiBWfk/edit?usp=sharing"
                  target="blank"
                  rel="noopener noreferrer"
                  class="button button--secondary button--lg margin-top--double margin-bottom--half"
                >
                  {"View Common data for MA services"}
                </a>
              </div>
              <p></p>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h2 className="header--lg text--center max-width--sm margin-auto">
                  The Power of a Centralized Resident Database
                </h2>
              </div>
              <p><strong>Introduce Mila - Massachusetts Integrated Life Assistant</strong></p>
              <p>
                We propose an integrated benefit management system, called Mila, that utilizes a single resident database to enhance the user experience for both residents and agencies. This approach could serve as a model for improving the delivery of other services provided by Massachusetts in the future.
              </p>

              <div className="margin-auto">
                <a
                  href={mediaUrl(
                    '/images/features/eligibility/streamlined-process-2.jpg'
                  )}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/eligibility/streamlined-process-2.jpg"
                    className="image--max-width"
                  />
                </a>
                <div class="text--center">
                  <p>
                    Streamlined Application Process with Resident Database
                  </p>
                </div>
              </div>


              <p><strong>Proactive Service Recommendations</strong></p>
              <p>
                The system would actively analyze the information about residents in the database. By doing so, it could identify and suggest benefits they might be eligible for but haven't yet applied to. This saves residents the time and effort of having to search for programs themselves.
              </p>

              <div className="eligibility-engine__video">
                <video
                  poster={mediaUrl(
                    '/images/features/eligibility/feature-1.jpg'
                  )}
                  controls
                >
                  <source
                    src={mediaUrl(
                      '/videos/features/eligibility/feature-1.mp4'
                    )}
                    type="video/mp4"
                  />
                  <source
                    src={mediaUrl(
                      '/videos/features/eligibility/feature-1.webm'
                    )}
                    type="video/webm"
                  />
                </video>
              </div>

              <p><strong>Simplified Application Process</strong></p>
              <p>
                When a resident wants to apply for a benefit, the system would pre-populate the application form with their data already stored in the database. Residents would then only need to provide additional information specific to that particular program. This significantly simplifies the application process.
              </p>

              <div className="eligibility-engine__video">
                <video
                  poster={mediaUrl(
                    '/images/features/eligibility/feature-2.jpg'
                  )}
                  controls
                >
                  <source
                    src={mediaUrl(
                      '/videos/features/eligibility/feature-2.mp4'
                    )}
                    type="video/mp4"
                  />
                  <source
                    src={mediaUrl(
                      '/videos/features/eligibility/feature-2.webm'
                    )}
                    type="video/webm"
                  />
                </video>
              </div>

              <p><strong>Renew your benefits in a snap</strong></p>
              <p>
                The platform could automate the process of renewing benefits, sending timely reminders to residents and handling re-enrollment paperwork, thus reducing administrative work and preventing lapses in coverage.
              </p>

              <div className="eligibility-engine__video">
                <video
                  poster={mediaUrl(
                    '/images/features/eligibility/feature-3.jpg'
                  )}
                  controls
                >
                  <source
                    src={mediaUrl(
                      '/videos/features/eligibility/feature-3.mp4'
                    )}
                    type="video/mp4"
                  />
                  <source
                    src={mediaUrl(
                      '/videos/features/eligibility/feature-3.webm'
                    )}
                    type="video/webm"
                  />
                </video>
              </div>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h2 className="header--lg text--center max-width--sm margin-auto">
                  Anticipated Impact
                </h2>
              </div>

              <p>
                A service/benefit management system built on a centralized MA resident database could offer the following advantages
              </p>

              <p><strong>For MA Resident</strong></p>
              <ul>
                <li>
                  <strong>Greater Access to Services: </strong>Proactive recommendations and a simplified application process would make it easier for residents to discover and access a wider range of services they qualify for.
                </li>
                <li>
                  <strong>Timely Communication and Support: </strong> The system could provide real-time updates and notifications about benefit eligibility, renewal deadlines, and other important information, ensuring residents stay informed and receive the support they need.
                </li>
              </ul>
              <p><strong>For Government/ Agencies</strong></p>
              <ul>
                <li>
                  <strong>Increased Efficiency and Resource Optimization: </strong>Automating eligibility verification and renewal processes would reduce administrative costs and allow staff to focus on other critical tasks.
                </li>
                <li>
                  <strong>Data-Driven Insights: </strong> The centralized database would provide valuable data on program usage and effectiveness, enabling agencies to make informed decisions about program improvements and resource allocation.
                </li>
              </ul>

              <Divider />
              <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
                <h2 className="header--lg text--center max-width--sm margin-auto">
                  Footnotes
                </h2>
              </div>
              <p>Here is a record of the efforts made so far to address the service gap in Massachusetts in response to the Integrated Eligibility System (IES) initiative for the Commonwealth of Massachusetts.<sup><a href="#references">4</a></sup>{' '}</p>

              <div className="margin-auto">
                <a
                  href={mediaUrl(
                    '/images/features/eligibility/footprint.jpg'
                  )}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/eligibility/footprint.jpg"
                    className="image--max-width"
                  />
                </a>
                <div class="text--center">
                </div>
              </div>


            </div>
          </div>



          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our newsletter."
                submitButtonText="Subscribe"
              />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Malia Hong" />
                <Author name="Sue Park" />
                <Author name="Eric Benoit" />
                <Author name="Juhan Sonin" />
              </div>
            </div>
          </div>


          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'Massachusetts Department of Transitional Assistance. (2023). Annual Department of Transitional Assistance Organizational Report.',
                      link:
                        'https://www.mass.gov/doc/annual-department-of-transitional-assistance-organizational-report-november-2023/download',
                    },
                    {
                      title:
                        'Kelsey Waddill. (2023). 4 Barriers to Coverage Among Uninsured Individuals in Massachusetts. Retrieved September 2, 2024, from',
                      link:
                        'https://healthpayerintelligence.com/news/4-barriers-to-coverage-among-uninsured-individuals-in-massachusetts',
                    },
                    {
                      title:
                        'Civilla and Code for America. (2019). Streamlining Access to Public Benefits in Michigan',
                      link:
                        'https://s3-us-west-1.amazonaws.com/codeforamerica-cms1/documents/Streamlining-Access-Report_Integrated-Benefits-Initiative-Civilla_Code-for-America_March-2019.pdf'
                    },
                    {
                      title:
                        'The Commonwealth of Massachusetts Executive Office of Health and Human Services Office of Medicaid. (2015). Integrated Eligibility Implementation Plan',
                      link:
                        'https://www.mass.gov/doc/integrated-eligibility-implementation-plan-october-2015'
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

export default EligibilityEngine
