import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'

import config from '../../../../config'
import { mediaUrl } from '../../../helpers'

const frontmatter = {
  metaTitle: 'US Healthcare Problems',
  metaDescription:
    'The United States is home to some of the best and worst care. The list serves as a call to action for everyone to close the gap.',
  heroImage:
    '/images/features/us-healthcare-problems/us_healthcare_problems_hero_draft.jpg',
}

class USHealthcareProblemsFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="us-healthcare-problems">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">US Healthcare Problems</h1>
              <p>
                The United States is home to some of the best and worst care.
                The US Healthcare Problems list is the product of GoInvo’s
                efforts to understand why these gaps exist and how they impact
                us. By drawing attention to the most prominent problems faced in
                our healthcare system, we can start to envision how it may be
                redesigned.
              </p>
              <p>
                The result of our research is a list ranked based on several
                quantitative indicators, such as number of deaths, number of
                American people impacted, and dollars spent or lost. The
                interconnected nature of the US healthcare system makes it
                nearly impossible to fully separate these problems. GoInvo has
                coupled analytical skills and interest in health policy to bring
                to light this complex web of menacing realities. Unsurprisingly,
                all problems can be attributed to the fee-for-service system in
                some way.
              </p>
            </div>
          </div>

          <div className="max-width pad-vertical--double">
            <iframe
              class="airtable-embed"
              src="https://airtable.com/embed/shrE0r9pF2A7UdkVB?backgroundColor=gray&viewControls=on"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="600"
            ></iframe>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h2 className="header--lg text--center margin-bottom--half margin-top--double">
                We'd Like Your Feedback
              </h2>
              <p className="text--gray">
                We’ve highlighted the top problems related to healthcare in the
                US. Where data is available, we’ve also listed quantitative
                metrics supporting the severity of each problem. Explore the
                list and references then send your feedback on this draft to{' '}
                <a href="mailto:hello@goinvo.com"> hello@goinvo.com</a>.
              </p>
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

          <div className="background--blue pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div id="methodology">
                <h2 className="header--xl text--center">Methodology</h2>
                <p className="text--gray">
                  The US Healthcare Problems list began as a google spreadsheet
                  research effort, with sources including “The Long Fix” by
                  Vivian Lee, CDC, and CMS. Our team aimed to pool relevant
                  quantitative and anecdotal information for each outlined
                  problem, making it possible to start to prioritize what needs
                  addressing. Ideally, the move away from a fee-for-service
                  system and towards a value-based approach would alleviate some
                  of this burden.
                </p>
                <p className="text--gray">
                  The initial ranking is based on the quantitative data as well
                  as the prevalence of the problem as explained in research. The
                  next iteration will implement a more robust rank-order that
                  considers more factors with relative weightings.
                </p>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Hannah Sennik" />
                <Author name="Juhan Sonin" company="GoInvo, MIT" />
              </div>

              <h3 className="header--md">Additional Contributors</h3>
              <p>
                Brad Dumke
                <br />
                Megan Janas
                <br />
                Susan Woods, MD
              </p>

              <Divider />

              <div id="references"></div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default USHealthcareProblemsFeature
