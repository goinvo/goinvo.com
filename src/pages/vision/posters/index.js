import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
//import Hero from '../../../components/hero'
//<Hero image={frontmatter.heroImage} />
import Columns from '../../../components/columns'
import PosterCard from '../../../components/vision/posters/PosterCard'
import Image from '../../../components/image'
import { mediaUrl } from '../../../helpers'

import posterItems from '../../../data/vision/posters/posters.json'

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
        <div className="max-width content-padding pad-vertical--double--only-lg">
          <div className="margin-top--only-lg">
            <Columns columns={3}>
              {this.state.posterItems.map((poster, i) => {
                return <PosterCard />
              })}
            </Columns>
          </div>
        </div>

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
                    <h4 className="header--sm margin-top--none">
                      Where Your Healthcare Dollars Go
                    </h4>
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
                    <h4 className="header--sm margin-top--none">
                      Spending within the Determinants of Health
                    </h4>
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
                    <h4 className="header--sm margin-top--none">
                      Open Source Healthcare Journal
                    </h4>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/open-source-healthcare/open-source-healthcare-journal.pdf'
                      )}
                      className="button button--primary button--block margin-bottom--half"
                    >
                      Download
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
                    <h4 className="header--sm margin-top--none">
                      Determinants of Health
                    </h4>
                    <a
                      href="https://github.com/goinvo/HealthDeterminants/raw/master/poster/health_determinants_poster_42x50.pdf"
                      className="button button--primary margin-bottom--half button--block"
                    >
                      Download
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
                    <h4 className="header--sm margin-top--none">
                      Open Healthcare Systems Model
                    </h4>
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

                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div class="poster">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/shr-medical-encounter-journey-map.pdf'
                      )}
                    >
                      <Image
                        src="/images/features/posters/shr-medical-encounter-journey-map.jpg"
                        className="image--max-width"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none">
                      Open Healthcare Systems Model
                    </h4>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/shr-medical-encounter-journey-map.pdf'
                      )}
                      className="button button--primary button--block"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>

              <div className="pure-g">
                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div className="poster">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/hie-data-access-workflow.pdf'
                      )}
                    >
                      <Image
                        src="/images/features/posters/hie-data-access-workflow.jpg"
                        className="background-image image-block__image"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none">
                      HIE Data Access Workflow
                    </h4>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/hie-data-access-workflow.pdf'
                      )}
                      className="button button--primary margin-bottom--half button--block"
                    >
                      Download
                    </a>
                  </div>
                </div>

                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div class="poster">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/ebola-care-guideline.pdf'
                      )}
                    >
                      <Image
                        src="/images/features/posters/ebola-care-guideline.jpg"
                        className="image--max-width"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none">
                      Ebola Care Guideline
                    </h4>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/ebola-care-guideline.pdf'
                      )}
                      className="button button--primary button--block"
                    >
                      Download
                    </a>
                  </div>
                </div>

                <div className="poster-section pad-vertical--double pure-u-1 pure-u-lg-1-3">
                  <div class="poster">
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/shr-medical-encounter-journey-map.pdf'
                      )}
                    >
                      <Image
                        src="/images/features/posters/shr-medical-encounter-journey-map-2.jpg"
                        className="image--max-width"
                        sizes={config.sizes.fullInsideMediumMaxWidth}
                      />
                    </a>
                  </div>
                  <div className="posterInfo">
                    <h4 className="header--sm margin-top--none">
                      SHR Medical Encounter
                    </h4>
                    <a
                      href={mediaUrl(
                        '/pdf/vision/posters/shr-medical-encounter-journey-map.pdf'
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
