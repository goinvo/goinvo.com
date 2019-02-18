import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Image from '../../../components/image'
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
              <h1 className="header--xl">Health Visualization Posters</h1>

              <div className="pure-g">
                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div className="poster">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/healthcare-dollars/healthcare-dollars.pdf'
                      )}
                    >
                      <Image
                        src="/images/features/healthcare-dollars/healthcare-dollars-preview-2.jpg"
                        className="background-image image-block__image"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none margin-bottom--none">
                      Where Your Healthcare Dollars Go
                    </h4>
                    <p className="text--gray text--sm poster-date margin-top--none">
                      Feb 2019
                    </p>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/healthcare-dollars/healthcare-dollars.pdf'
                      )}
                      className="button button--primary button--block"
                    >
                      Download
                    </a>
                    <p className="text--center">
                      <a href="/vision/healthcare-dollars/">Learn More</a>
                    </p>
                  </div>
                </div>

                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div className="poster">
                    <a
                      href="https://github.com/goinvo/HealthDeterminants/raw/master/sdoh-spend/SDOH_to_spend_v12-01.png"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/features/determinants-of-health/sdoh-spend-mockup.jpg"
                        className="background-image image-block__image"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none margin-bottom--none">
                      Spending within the Determinants of Health
                    </h4>
                    <p className="text--gray text--sm poster-date margin-top--none">
                      Jan 2019
                    </p>
                    <a
                      href="https://github.com/goinvo/HealthDeterminants/raw/master/sdoh-spend/SDOH_to_spend_v12-01.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary button--block"
                    >
                      Download
                    </a>
                    <p className="text--center">
                      <a href="/vision/determinants-of-health/#determinants-spending">
                        Learn More
                      </a>
                    </p>
                  </div>
                </div>

                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div className="poster">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/open-source-healthcare/open-source-healthcare-journal.pdf'
                      )}
                    >
                      <Image
                        src="/images/features/posters/oshc-book.jpg"
                        className="background-image image-block__image"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none margin-bottom--none">
                      Open Source Healthcare Journal
                    </h4>
                    <p className="text--gray text--sm poster-date margin-top--none">
                      Nov 2018
                    </p>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/open-source-healthcare/open-source-healthcare-journal.pdf'
                      )}
                      className="button button--primary button--block margin-bottom--half"
                    >
                      Download 25MB
                    </a>
                    <a
                      href="http://www.blurb.com/b/8980724-open-source-healthcare-journal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary button--block"
                    >
                      $12 Magazine
                    </a>
                    <p className="text--center">
                      <a href="/vision/open-source-healthcare/">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pure-g">
                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div className="poster">
                    <a href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf">
                      <Image
                        src="/images/features/determinants-of-health/determinants-of-health-poster.jpg"
                        className="background-image image-block__image"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none margin-bottom--none">
                      Determinants of Health
                    </h4>
                    <p className="text--gray text--sm poster-date margin-top--none">
                      Feb 2018
                    </p>
                    <a
                      href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf"
                      className="button button--primary margin-bottom--half button--block"
                    >
                      Download
                    </a>
                    <a
                      href="https://www.amazon.com/Determinants-Health-Poster-24-35-75/dp/B06X1GFDH1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--primary button--block"
                    >
                      Buy Print
                    </a>
                    <p className="text--center">
                      <a href="/vision/determinants-of-health/">Learn More</a>
                    </p>
                  </div>
                </div>

                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div class="poster">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/precision-prism-architecture-diagram.pdf'
                      )}
                    >
                      <Image
                        src="/images/features/posters/precision-prism-architecture-diagram.jpg"
                        className="image--max-width"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none margin-bottom--none">
                      Standardization of Data Architecture
                    </h4>
                    <p className="text--gray text--sm poster-date margin-top--none">
                      Feb 2017
                    </p>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/precision-prism-architecture-diagram.pdf'
                      )}
                      className="button button--primary button--block"
                    >
                      Download
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
