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
  heroImage: '/images/services/doh-preview.jpg',
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
              <h4 className="header--sm">
                The United States is home to some of the best and worst care.
                The list serves as a call to action for everyone to close the
                gap.
              </h4>
              <p className="text--grey">
                We can write a lovely paragraph here... or two.
              </p>
            </div>

            <div className="max-width max-width--md content-padding">
              <div className="margin-bottom--double">
                <div className="pure-g button-group margin-bottom">
                  <div className="pure-u-1">
                    <a
                      href="https://table2site.com/site/us-healthcare-problems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--secondary margin-top--double margin-bottom button--block"
                    >
                      Visit USHealthcareProblems.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-width pad-vertical--double">
            <iframe
              class="airtable-embed"
              src="https://airtable.com/embed/shrN0KZBQsPyNOB5X?backgroundColor=gray&viewControls=on"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="600"
            ></iframe>
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
                  Below is a description of the methodology used in creating the
                  US Healthcare Problems list. It is also a record of versioned
                  updates to the methodology based on continuing research and
                  feedback. Thank you to those who have reached out and helped
                  identify areas to improve.
                </p>
                <h3 className="header--md margin-bottom--half margin-top--double">
                  v1 - 21.Jan.2021
                </h3>
                <p className="text--gray">the the the...</p>
              </div>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Hannah Sennik" />
                <Author name="Juhan Sonin" company="GoInvo, MIT" />

                <h3 className="header--md">Contributors</h3>
                <Author
                  name="Anyone else?"
                  company="???"
                  image="/images/features/determinants-of-health/headshot-hrothgar.jpg"
                >
                  can add bio here.
                </Author>
              </div>

              <Divider />

              <div id="references">
                <References
                  references={[
                    {
                      title: 'you can write the first reference here',
                      link: 'full url here',
                    },
                    {
                      title: 'you can write the second reference here',
                      link: 'full url here',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default USHealthcareProblemsFeature
