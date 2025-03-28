import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'
import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Where Your Health Dollars Go (redux)',
  metaDescription:
    'An interactive app to explore the flow and destimation of money within the US healthcare system.',
  heroImage: '/images/features/healthcare-dollars-redux/healthcare-dollars-redux-hero.jpg',
}

class HealthcareDollars extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="healthcare-dollars">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Where Your Health Dollars Go (redux)</h1>
              <h4 className="header--sm">
                To Understand the Healthcare system, follow the money
              </h4>
              <p className="margin-bottom--none text--gray">
              "Where your Health Dollars Go" is a map of the US healthcare system and its components. By following  the allocation and flow of money in healthcare, the thread of how the  organizations, departments, and major players are connected becomes  apparent.
              </p>
              <p className="margin-bottom--none text--gray">
              We expand on previous work to present an interactive map of the flow. Check it out to see how your dollars work their way through the system from your paycheck to the paychecks of nurses and the pockets of shareholders and CEOs. Select stories to focus on specific parts of the system. 
              </p>
            
              <div className="card--shadow margin-top--double">
                <a  
                    href={"https://dreeves4321.github.io/healthcare-flow/"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Image
                    src="/images/features/healthcare-dollars-redux/healthcare-dollars-redux-shot.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                  />
                </a>
              </div>

              <div className="button-primary">
                  <a
                    href={"https://dreeves4321.github.io/healthcare-flow/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary button--lg margin-top--double margin-bottom--double button--block"
                  >
                    Open the App
                  </a>
              </div>

              <Divider />
              <h2 className="header--xl text--center">The Process</h2>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame 1.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame 2.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              
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
              <div>
                <h2 className="header--xl text--center">Author</h2>
                <Author name="Daniel Reeves" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HealthcareDollars
