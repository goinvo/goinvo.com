import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'
import Divider from '../../../components/divider'

import { mediaUrl } from '../../../helpers'
import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Understanding the Novel Coronavirus (2019-nCoV) - GoInvo',
  metaDescription:
    'Learn about 2019-nCoV, what it means for U.S. residents, and how you can protect yourself. Updated as new information emerges.',
  heroImage: '/images/features/coronavirus/hero.jpg',
}

class CoronavirusFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="coronavirus">
          <Image
            src="/images/features/coronavirus/coronavirus-1.jpg"
            sizes={config.sizes.full}
          />
          <div className="max-width max-width--md content-padding">
            <div className="text--center">
              <a
                className="button"
                href={mediaUrl(
                  '/pdf/vision/coronavirus/Understanding%20the%202019%20Novel%20Coronavirus.v1.pdf'
                )}
              >
                Download PDF
              </a>
            </div>

            <Divider />

            <div>
              <h2 className="header--xl text--center">Authors</h2>
              <Author name="Colleen Tang Poy" />
              <Author name="Patricia Nguyen" />
              <Author name="Parsuree Vatanasirisuk" />

              <h3 className="header--md">Contributors</h3>
              <Author name="Juhan Sonin" />
            </div>

            <Divider />

            <div className="pad-bottom--double" id="references">
              <References
                references={[
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020, January 29). Prevention, Treatment of Novel Coronavirus (2019-nCoV). Retrieved January 31, 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/about/prevention-treatment.html',
                  },
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020, January 28). What to do if you are sick with 2019 Novel Coronavirus (2019-nCoV). Retrieved January 31, 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/about/steps-when-sick.html',
                  },
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020, January 29). Preventing 2019-nCoV from Spreading to Others. Retrieved January 31, 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-prevent-spread.html#steps-for-caregivers',
                  },
                  {
                    title:
                      'Li, Q., Zhu, N., Munster, V. J., Phan, L. T., & Chinese Center for Disease Control and Prevention. (2020, January 24). Early Transmission Dynamics in Wuhan, China, of Novel Coronavirus–Infected Pneumonia: NEJM. Retrieved January 31, 2020',
                    link:
                      'http://www.nejm.org/doi/full/10.1056/NEJMoa2001316?query=featured_home',
                  },
                  {
                    title:
                      'World Health Organization. (2020, January 23). Middle East respiratory syndrome coronavirus (MERS-CoV). Retrieved January 31, 2020',
                    link: 'https://www.who.int/emergencies/mers-cov/en/',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CoronavirusFeature
