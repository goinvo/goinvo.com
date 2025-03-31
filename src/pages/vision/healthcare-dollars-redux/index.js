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
  metaTitle: 'Where Your Health Dollars Go (Redux)',
  metaDescription:
    'An interactive app to explore the flow and destination of money within the US healthcare system.',
  heroImage: '/images/features/health-dollars-redux/health-dollars-redux-hero.jpg',
}

class HealthcareDollarsRedux extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="healthcare-dollars-redux-feature">
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
              We expand on <a href="../healthcare-dollars/">prior work</a> and present an interactive map of the flow. Check it out and see how your dollars work their way through the system from your paycheck to the paychecks of nurses and the pockets of shareholders and CEOs. Select stories to focus on specific parts of the system. 
              </p>
            
              <div className="card--shadow margin-top--double" style={{ borderRadius: '5px', overflow: 'hidden' }}>
                <a  
                    href={"https://goinvo.github.io/healthcare-flow/"}
                    target="_blank"
                    rel="noopener noreferrer"
                ><Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-shot.jpg"
                    className="image--max-width image--center"                    
                    sizes={config.sizes.fullInsideMediumMaxWidth}
                    alt="Screenshot of Where Your Healthcare Dollars Go interactive map."
                  /></a>
              </div>

              <div>
                  <a
                    href={"https://goinvo.github.io/healthcare-flow/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary button--lg margin-top--double margin-bottom--double button--block"
                  >
                    Open the Interactive Map
                  </a>
              </div>

              <Divider />
              <h2 className="header--xl text--center">The Process</h2>
              <div className="pure-g pad-bottom--double">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--half pad-left--half">
                  <a href="../healthcare-dollars/">
                    <Image
                      src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--1.jpg"
                      className="image--max-width hoverable-comic"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                      alt="Comic frame 1: The original Where Your Health Dollars Go map, with a comic style caption, 'The Original'."                     
                    />
                  </a>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--half pad-right--half">
                    <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--2.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 2: Two people are looking at the original map. The first says 'But where does it go from here? Who's making all that money?!' The second is thinking 'You doc? Or CEOs?'"
                  />
                </div>
              </div>
              <div className="pure-g pad-bottom--double">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--half pad-left--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--3.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 3: Back in the studio, time for desk research! A designer pours over stacks of papers and charts. Citations float about the room."
                  />
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--half pad-right--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--4.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 4: The designer thinks out loud, 'I got the big totals, but... what about the breakdowns?!' Behind the designer hangs a backdrop of an Airtable database."
                  />
                </div>
              </div>
              <div className="pure-g pad-bottom--double">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--half pad-left--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--5.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 5 — From off page, the designer's voice calls, 'Oh Gemini! Give me a hand! Please provide an estimate table of the breakdowns of expense for the home health industry. Include categories similar to prior tables.' Below that text buble are two screenshots of Gemini output."
                  />
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--half pad-right--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--6.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 6 — Sketches on paper of the interactive map. In a caption box it reads, 'Time to sketch up some ideas...'"
                  />
                </div>
              </div>
              <div className="pure-g pad-bottom--double">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--half pad-left--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--7.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 7 — Caption box reads, 'Then give prompt-to-build a try!' with screenshots of Cursor and a early version of the map."
                  />
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--half pad-right--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--8.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 8 — The designer thinks out loud, 'Well that's... ugly. Let's Design!.' Behind the designer is a backdrop of a Figma file."
                  />
                </div>
              </div>
              <div className="pure-g pad-bottom--double">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--half pad-left--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--9.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 9 — Text bubbles forming a process loop: Text-to-code, debug, evaluate, what's next, desgn, iterate!"
                  />
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--half pad-right--half">
                  <Image
                    src="/images/features/health-dollars-redux/health-dollars-redux-comic-frame--10.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    alt="Comic frame 10 — The designer and person from Frame 2 are  looking at the new interctive map. The designer says, 'Well that's closer'. The other person thinks, 'It's something!'"
                  />
                </div>
              </div>
              
              <div className="button-group">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <a
                    href="https://github.com/goinvo/healthcare-flow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary button--lg margin-top--double margin-bottom--double button--block"
                  >
                    Contribute on GitHub
                  </a>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <a
                    href="https://airtable.com/appWDZVTJCKQpQudH/shrNjVJ8t7e0EC078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary margin-top--double margin-bottom--half  button--block margin-right"
                  >
                    View the Data
                  </a>
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

export default HealthcareDollarsRedux
