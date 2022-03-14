import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import ImageBlock from '../../../components/image-block'
import Quote from '../../../components/quote'
import HubspotForm from '../../../components/hubspot-form'
import Divider from '../../../components/divider'
import Columns from '../../../components/columns'
import Card from '../../../components/card'

import config from '../../../../config'

const upNextList = [
  {
    link: '../../work/hgraph',
    image: '/images/case-studies/goinvo/hgraph/hgraph-hero2.jpg',
    title: 'hGraph, page 46',
    caption: 'Your health in one picture.',
  },
  {
    link: 'https://www.goinvo.com/features/careplans',
    externalLink: true,
    suppressNewTab: true,
    image: '/images/features/care-plans/care-plans-featured2.jpg',
    title: 'Care Plans, page 100-103',
    caption:
      'A patient guide to manage day-to-day health based on health concerns, goals, and interventions.',
  },
  {
    link: '../../work/mitre-shr',
    image: '/images/case-studies/mitre/SHR/shr-header2.jpg',
    title: 'Standard Health Record, page 107',
    caption:
      'Prototyping and envisioning future applications of a national health data standard to drive its development.',
  },
]

const frontmatter = {
  metaTitle: 'Health Design Thinking Book',
  metaDescription:
    'GoInvo Studio’s practice is highlighted in the diverse case studies that make up the new book "Health Design Thinking," co-written by Ellen Lupton and Dr. Bon Ku.',
  heroImage:
    '/images/features/health-design-thinking/health-design-thinking-book-hero-6.jpg',
}

class HealthDesignThinkingBook extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="health-design-thinking">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Health Design Thinking</h1>
              <h4 className="header--sm">
                Creating products and services for better health.
              </h4>
              <p className="text--grey">
                Work from the past decade of the GoInvo Studio's practice is
                highlighted in the diverse case studies that make up the new
                book "
                <a
                  href="https://mitpress.mit.edu/books/health-design-thinking-second-edition"
                  target="_blank"
                  rel="noreferrer"
                >
                  Health Design Thinking
                </a>
                ," co-written by Ellen Lupton and Dr. Bon Ku, and published by
                Cooper Hewitt, Smithsonian Design Museum and MIT Press in
                February 2022.
              </p>
              <p className="text--grey">
                These include artifacts and examples from GoInvo's innovative,
                human-centered design approach to solving healthcare challenges
                — drawings, photographs, storyboards, and visualizations — such
                as an infovis of the{' '}
                <a href="/vision/determinants-of-health/">
                  Social Determinants of Health
                </a>
                , and instructional design work for{' '}
                <a href="https://www.goinvo.com/features/ebola-care-guideline">
                  Ebola medical team preparedness
                </a>
                .
              </p>
            </div>

            <div className="max-width max-width--md content-padding">
              <div className="margin-bottom--double">
                <div className="pure-g button-group margin-bottom--double">
                  <a
                    href="https://mitpress.mit.edu/books/health-design-thinking-second-edition"
                    target="_blank"
                    rel="noreferrer"
                    className="button button--secondary margin-top--double margin-bottom--half button--block margin-right"
                  >
                    Order At MIT Press
                  </a>
                </div>
              </div>
            </div>

            <Quote
              background="gray"
              quotee="Bon Ku, MD"
              quoteeSub="A practicing emergency physician, is Assistant Dean for Health and Design at Sidney Kimmel Medical College at Thomas Jefferson University, where he is also Director of the Health Design Lab."
            >
              GoInvo's influential user experience work and visualizations of
              the future of healthcare provide excellent examples of the
              real-world impact of health design. We're delighted they were able
              to contribute work to Health Design Thinking (First Edition).
            </Quote>

            <div className="max-width max-width--md content-padding">
              <div className="margin-bottom--double">
                <h4 class="header--sm margin-bottom--half">
                  Featured In The Book
                </h4>
                <Columns columns={2}>
                  {upNextList.map(item => {
                    return (
                      <Card
                        key={item.link}
                        link={item.link}
                        externalLink={item.externalLink}
                        suppressNewTab={item.suppressNewTab}
                      >
                        <ImageBlock
                          title={item.title}
                          image={item.image}
                          caption={item.caption}
                          sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                          hoverable
                        />
                      </Card>
                    )
                  })}
                </Columns>
              </div>
              <Divider />
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
              <h4 className="header--sm margin-bottom--half margin-top--double">
                About GoInvo
              </h4>
              <p className="text--gray">
                GoInvo's human centered design practice is dedicated to
                innovation in healthcare — to improve people's lives and enable
                us all to live a healthier future. Over the past 15 years,
                GoInvo has created digital health products and services for
                patients, clinicians, researchers, and administrators - working
                with organizations as far-reaching as AstraZeneca, Johnson and
                Johnson, 3M, and the U.S. Department of Health and Human
                Services.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HealthDesignThinkingBook
