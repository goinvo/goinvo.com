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
    link: '../vision/determinants-of-health/',
    image: '/images/services/doh-preview.jpg',
    title: 'Determinants of Health, page 29-31',
    caption:
      '89% of health occurs outside of the clinical space through our genetics, behavior, environment, and social circumstances. These factors are known as the social determinants of health.',
  },
  {
    link: '../work/paintrackr',
    image: '/images/case-studies/goinvo/paintrackr/paintrackr-hero.jpg',
    title: 'PainTrackr, page 41',
    caption: 'A straightforward, tactile tool for logging pain.',
  },
  {
    link: 'https://www.goinvo.com/features/ebola-care-guideline',
    externalLink: true,
    suppressNewTab: true,
    image:
      '/images/features/ebola-care-guideline/ebola-care-guideline-featured.jpg',
    title: 'Ebola Care Guideline, page 55',
    caption: 'An illustrated process on personal protective equipment.',
  },
  {
    link: '../work/mitre-shr',
    image: '/images/case-studies/mitre/SHR/shr-header2.jpg',
    title: 'Standard Health Record, page 89-91, 95',
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
                <a href="https://mitpress.mit.edu/books/health-design-thinking">
                  Health Design Thinking
                </a>
                ," co-written by Ellen Lupton and Dr. Bon Ku, and published by
                Cooper Hewitt, Smithsonian Design Museum and MIT Press in March
                2020.
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
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="https://mitpress.mit.edu/books/health-design-thinking"
                      rel="noreferrer"
                      className="button button--secondary margin-top--double margin-bottom--half button--block margin-right"
                    >
                      Pre-Order At MIT Press
                    </a>
                  </div>
                  <div className="pure-u-1 pure-u-lg-1-2">
                    <a
                      href="https://www.eventbrite.com/e/making-healthcare-beautiful-by-design-tickets-91909456659"
                      rel="noreferrer"
                      className="button button--secondary margin-top--double margin-bottom--half  button--block margin-right"
                    >
                      Attend Book Launch
                    </a>
                  </div>
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
              to contribute work to Health Design Thinking.
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

          <div className="max-width max-width--md content-padding">
            <div>
              <h2 class="header--lg margin-top--double text--center">
                "Making Healthcare Beautiful by Design", Book Launch Event
              </h2>
              <p>
                Join Dr. Bon Ku, an emergency medicine physician and Director of
                the Health Design Lab at Thomas Jefferson University, in a
                conversation about design and health care at the GoInvo Health
                Design Studio in Arlington, Massachusetts on Thursday, March 26,
                2020 at 7 PM. Bon will show how design has been applied to
                real-world problems in health care — from gyn exams in the
                emergency room to better pill bottles, hospital gowns and exam
                rooms.
              </p>
              <p>
                His new book, "Health Design Thinking," co-written by the
                influential designer Ellen Lupton, shows ways to generate
                creative ideas and solutions in the context of medicine.
                Problems in health care often involve ambiguity and uncertainty,
                lacking black-and-white answers. Bon’s talk will invite
                attendees to think like designers and embrace the art of
                listening and the joy of making.
              </p>
            </div>

            <div className="margin-bottom--double">
              <div className="pure-g button-group margin-bottom--double">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <a
                    href="https://www.eventbrite.com/e/making-healthcare-beautiful-by-design-tickets-91909456659"
                    rel="noreferrer"
                    className="button button--secondary margin-top--double margin-bottom--half  button--block margin-right"
                  >
                    Attend Book Launch
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
