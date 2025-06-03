import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Divider from '../../../components/divider'
import MailerLiteForm from '../../../components/mailerlite-form'
import { LazyImage } from '../../../components/optimized-image'
import References from '../../../components/references'
import Author from '../../../components/author'

import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle:
    'Test. Treat. Trace. The strategy to defeat pandemic viruses like COVID-19.',
  metaDescription:
    'As new treatments and vaccines are developed, containing virus spread is critical. We need a comprehensive approach of testing, treating, and tracing as a core backbone to response.',
  heroImage: '/images/features/test-treat-trace/test-treat-trace-header-2.jpg',
}

class TestTreatTraceFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="top center" />
        <div className="test-treat-trace">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-top--half">
                Test. Treat. Trace.
              </h1>

              <div className="poster margin-top--double">
                <a
                  href={mediaUrl(
                    '/pdf/vision/test-treat-trace/Test-Treat-Trace-18Jun2020.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LazyImage
                    src="/images/features/test-treat-trace/test-treat-trace-2.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
              </div>

              <div className="button-group">
                <a
                  href={mediaUrl(
                    '/pdf/vision/test-treat-trace/Test-Treat-Trace-18Jun2020.pdf'
                  )}
                  className="button button--secondary margin-top--double margin-bottom--double"
                >
                  Download Poster
                </a>
              </div>
            </div>

            <div className="pad-vertical--double">
              <div className="max-width max-width--md content-padding">
                <Divider />
                <div className="pad-vertical--double">
                  <h2 className="header--xl text--center">Authors</h2>
                  <Author name="Parsuree Vatanasirisuk" />
                  <Author name="Juhan Sonin" />
                </div>
                <h2 className="header--lg text--center margin-top--double">
                  Thank you for the feedback from...
                </h2>
                <ul className="ul">
                  <li>Peter Jones</li>
                  <li>Danny van Leeuwen</li>
                  <li>Dafna Gold Melchior</li>
                </ul>
              </div>
            </div>

            <div className="pad-vertical--double background--gray">
              <div className="max-width max-width--md content-padding">
                <MailerLiteForm />
              </div>
            </div>

            <div className="max-width max-width--md content-padding">
              <References
                references={[
                  {
                    title:
                      'All State View of Week to Week Change in Percentage of Positive Tests: JHU Coronavirus Resource Center. Retrieved June 1, 2020, from',
                    link:
                      'https://coronavirus.jhu.edu/testing/individual-states',
                  },
                  {
                    title:
                      'HarvardGlobalHealth. (2020, May 25). HGHI and NPR publish new state testing targets. Retrieved from',
                    link:
                      'https://globalepidemics.org/2020/05/07/hghi-projected-tests-needed-may15/',
                  },
                  {
                    title:
                      'Management of Patients with Confirmed 2019-nCoV. (2020, May 20). Retrieved from',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/hcp/clinical-guidance-management-patients.html',
                  },
                  {
                    title:
                      'Simmons-Duffin, S. (2020, May 7). States Nearly Doubled Plans For Contact Tracers Since NPR Surveyed Them 10 Days Ago. Retrieved May 29, 2020, from',
                    link:
                      'https://www.npr.org/sections/health-shots/2020/04/28/846736937/we-asked-all-50-states-about-their-contact-tracing-capacity-heres-what-we-learne',
                  },
                  {
                    title:
                      "Stein, R., Wroth, C., & Hurt, A. (2020, May 7). U.S. Coronavirus Testing Still Falls Short. How's Your State Doing? Retrieved from",
                    link:
                      'https://www.npr.org/sections/health-shots/2020/05/07/851610771/u-s-coronavirus-testing-still-falls-short-hows-your-state-doing',
                  },
                  {
                    title:
                      'Swanson, I., & Leonhardt, M. (2020, May 5). WarnerRobins.com',
                    link:
                      'https://www.warnerrobins.com/2020/05/05/free-covid-19-testing-available-at-museum-of-aviation/',
                  },
                  {
                    title:
                      'TeamSafe. About TeamSafe. Retrieved from',
                    link: 'https://www.teamsa.fe/',
                  },
                  {
                    title:
                      "The National Association of County and City Health Officials' Position Statement on Public Health Capacity for COVID-19 Contact Tracing Surge. Retrieved from",
                    link:
                      'https://www.naccho.org/uploads/downloadable-resources/NACCHO-Contact-Tracing-Statement.pdf',
                  },
                  {
                    title: 'Contact tracing. (n.d.). Retrieved from',
                    link:
                      'https://www.who.int/news-room/q-a-detail/contact-tracing',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout >
    )
  }
}

export default TestTreatTraceFeature
