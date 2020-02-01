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
          <Image
            src="/images/features/coronavirus/coronavirus-1.jpg"
            sizes={config.sizes.full}
          />
          <div className="max-width text--center">
            <a
              className="button"
              href={mediaUrl(
                '/pdf/vision/coronavirus/Understanding%20the%202019%20Novel%20Coronavirus.v1.pdf'
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
