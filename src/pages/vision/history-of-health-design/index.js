import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Author from '../../../components/author'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'History of Health Design',
  metaDescription:
    'Our list of the top healthcare innovations from the past 10,000 years of human history.',
  heroImage: '/images/features/history-of-health-design/hero.jpg',
}

class HistoryOfHealthDesignFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="history-of-health-design">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">History of Health Design</h1>
              <p>
                Early humans didn't know much about how our bodies worked. We
                had to come up with clever ways to treat illnesses and injuries,
                often with rituals and herbal remedies.
              </p>
              <p>
                Over the past 10,000 years, we've gone on a tear. As we've
                learned more about science, the world around us, and our own
                minds, we've invented tools, machines, and techniques that help
                us stay healthy and fix things that go wrong inside and out of
                our bodies. Soon enough, we'll be dictating how long we want to
                live.
              </p>
              <p>
                Here's our evolving list of top healthcare innovations over
                time, from the stone surgical knife to genetic “scissors.”
              </p>
              <p>
                Let us know what we're missing at{' '}
                <a href="mailto:feedback@goinvo.com">feedback@goinvo.com</a>.
              </p>
            </div>
            <div className="content-padding">
              <iframe
                src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1qa0ZwX09I8ON2YuHXaigZ8M7p_wnImQALPFyd8fVN98&font=Default&lang=en&initial_zoom=10&height=650"
                width="100%"
                height="650"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                frameborder="0"
                title="History of Health Design"
              ></iframe>
            </div>
            <div className="max-width max-width--md content-padding">
              <div className="text--center">
                <a
                  href="https://docs.google.com/spreadsheets/d/1qa0ZwX09I8ON2YuHXaigZ8M7p_wnImQALPFyd8fVN98/edit#gid=301364053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary"
                >
                  Timeline Events and References
                </a>
              </div>
              <div>
                <div className="pad-vertical--double">
                  <h2 className="header--xl text--center">Authors</h2>
                  <Author name="Samantha Wuu" />
                  <Author name="Juhan Sonin" />
                </div>
              </div>
            </div>

            <div className="pad-vertical--double">
              <div className="max-width max-width--md content-padding">
                <HubspotForm
                  formId={config.hubspotNewsletterFullFormId}
                  title="Subscribe to our open source healthcare newsletter."
                  submitButtonText="Subscribe"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HistoryOfHealthDesignFeature
