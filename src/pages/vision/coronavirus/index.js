import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Image from '../../../components/image'

import { mediaUrl } from '../../../helpers'
import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Understanding the Novel Coronavirus (2019-nCoV) - GoInvo',
  metaDescription:
    'Learn about 2019-nCoV, what it means for U.S. residents, and how you can protect yourself. Updated as new information emerges.',
}

class CoronavirusFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="coronavirus">
          <div className="desktop-feature hidden--until-lg">
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-part1-2.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-part2-2.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-part3.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-part4.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
          </div>
          <div className="mobile-feature hidden--lg">
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-mobile-part1-2.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-mobile-part2-2.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-mobile-part3-2.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
            <Image
              src="/images/features/coronavirus/coronavirus-wk2-mobile-part4-2.jpg"
              sizes={config.sizes.full}
              className="full-width-no-scroll"
            />
          </div>
          <div className="max-width text--center">
            <a
              className="button"
              href={mediaUrl(
                '/pdf/vision/coronavirus/Understanding%20the%202019%20Novel%20Coronavirus-v2.pdf'
              )}
            >
              Download PDF
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CoronavirusFeature
