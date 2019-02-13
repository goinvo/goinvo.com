import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import { mediaUrl } from '../../../helpers'
import config from '../../../../config'

const frontmatter = {
  metaTitle: '',
  metaDescription: '',
  heroImage: '/images/features/posters/poster-hero.jpg',
}

class Posters extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="poster-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">GoInvo Posters</h1>

              <div className="poster-section pad-vertical--double">
                <h2 className="header--lg margin-top--double margin-bottom--none">
                  Where Your Healthcare Dollars Go
                </h2>
                <p className="text--gray poster-date margin-top--none">
                  Feb 2019
                </p>
                <a
                  href={mediaUrl(
                    '/pdf/vision/healthcare-dollars/healthcare-dollars-poster.pdf'
                  )}
                >
                  <Image
                    src="/images/features/healthcare-dollars/healthcare-dollars-preview.jpg"
                    className="image--max-width poster"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
                <div className="button-group">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/healthcare-dollars/healthcare-dollars-poster.pdf'
                      )}
                      className="button button--primary button--lg margin-top--double margin-bottom--double button--block"
                    >
                      Download Poster
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="/vision/healthcare-dollars/"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <Divider />

              <div className="poster-section pad-vertical--double">
                <h2 className="header--lg margin-top--double margin-bottom--none">
                  Spending within the Determinants of Health
                </h2>
                <p className="text--gray poster-date margin-top--none">
                  Jan 2019
                </p>
                <a
                  href="https://github.com/goinvo/HealthDeterminants/raw/master/sdoh-spend/SDOH_to_spend_v12-01.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/determinants-of-health/sdoh-spend-mockup.jpg"
                    className="image--max-width margin-top--half poster"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
                <div className="button-group">
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="https://github.com/goinvo/HealthDeterminants/raw/master/sdoh-spend/SDOH_to_spend_v12-01.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Download Poster
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="/vision/determinants-of-health/#determinants-spending"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <Divider />

              <div className="poster-section pad-vertical--double">
                <h2 className="header--lg margin-top--double margin-bottom--none">
                  Open Source Healthcare Journal
                </h2>
                <p className="text--gray poster-date margin-top--none">
                  Nov 2018
                </p>
                <a
                  href={mediaUrl(
                    '/pdf/vision/open-source-healthcare/open-source-healthcare-journal.pdf'
                  )}
                >
                  <Image
                    src="/images/features/posters/oshc-book.jpg"
                    className="image--max-width margin-top--half poster"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
                <div className="button-group margin-bottom--double">
                  <div className="pure-u-1 pure-u-lg-1-3">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/open-source-healthcare/open-source-healthcare-journal.pdf'
                      )}
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Download 25MB
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-3">
                    <a
                      href="http://www.blurb.com/b/8980724-open-source-healthcare-journal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      $12 Magazine
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-3">
                    <a
                      href="/vision/open-source-healthcare/"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <Divider />

              <div className="poster-section pad-vertical--double">
                <h2 className="header--lg margin-top--double margin-bottom--none">
                  Determinants of Health
                </h2>
                <p className="text--gray poster-date margin-top--none">
                  Feb 2018
                </p>
                <a href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf">
                  <Image
                    src="/images/features/determinants-of-health/determinants-of-health-poster.jpg"
                    className="image--max-width poster"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
                <div className="button-group">
                  <div className="pure-u-1 pure-u-lg-1-3">
                    <a
                      href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Download Poster
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-3">
                    <a
                      href="https://www.amazon.com/Determinants-Health-Poster-24-35-75/dp/B06X1GFDH1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Buy Print
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-3">
                    <a
                      href="/vision/determinants-of-health/"
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <Divider />

              <div className="poster-section pad-vertical--double">
                <h2 className="header--lg margin-top--double margin-bottom--none">
                  Standardization of Data Architecture
                </h2>
                <p className="text--gray poster-date margin-top--none">
                  Feb 2017
                </p>
                <a
                  href={mediaUrl(
                    '/pdf/vision/posters/precision-prism-architecture-diagram.pdf'
                  )}
                >
                  <Image
                    src="/images/features/posters/precision-prism-architecture-diagram.jpg"
                    className="image--max-width poster"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
                <div className="button-group">
                  <div className="pure-u-1 pure-u-lg-1-3">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/precision-prism-architecture-diagram.pdf'
                      )}
                      className="button button--primary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Download Poster
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Posters
