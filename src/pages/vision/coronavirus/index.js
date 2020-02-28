import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../../../components/layouts/layout'
import BackgroundImage from '../../../components/background-image'
import Image from '../../../components/image'
import Author from '../../../components/author'

import NumberListItem from '../../../components/vision/coronavirus/number-list-item'

import { mediaUrl } from '../../../helpers'
import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Understanding the Novel Coronavirus (2019-nCoV) - GoInvo',
  metaDescription:
    'Learn about 2019-nCoV, what it means for U.S. residents, and how you can protect yourself. Updated as new information emerges.',
  heroImage: '/images/features/coronavirus/hero-2.jpg',
}

class CoronavirusFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="coronavirus">
          <div className="hero">
            <div className="hero__image-container">
              <BackgroundImage
                src={frontmatter.heroImage}
                className="hero__image"
              />
            </div>
            <div className="coronavirus-header-container">
              <div className="max-width content-padding pad-bottom">
                <h1>
                  Understanding
                  <br />
                  the Novel Coronavirus
                </h1>
                <h2>COVID-19</h2>
                <p>last update 25 February 2020</p>
              </div>
            </div>
          </div>
          <section>
            <div className="max-width content-padding">
              <h3>
                <span className="coronavirus-section-header">
                  What is COVID-19?
                </span>
              </h3>
              <p>
                The 2019 Novel Coronavirus, also known as{' '}
                <strong>COVID-19</strong>, caused an outbreak of respiratory
                illness in Wuhan, China and has since spread to other parts of
                China and the world. There is still a lot that we don’t know
                about COVID-19 and the situation is evolving day-by-day.
              </p>
              <p>
                However, this isn’t the first time the world has dealt with a
                Coronavirus. Coronaviruses are a family of viruses that infect
                birds and mammals (this includes humans!). Typically, they cause
                mild respiratory symptoms similar to the common cold, but in
                some cases—like in SARS or MERS—it can lead to death, often in
                those that are already immunocompromised.
              </p>
              <h4>
                Quick look : How does COVID-19 compare to the other
                coronaviruses?
              </h4>
              {
                // TODO: Graph in code
              }
              <Image
                src="/images/features/coronavirus/graph.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <h3>
                <span className="coronavirus-section-header">
                  Timeline of the outbreak<sup>18</sup>
                </span>
              </h3>
            </div>
            <Image
              src="/images/features/coronavirus/timeline.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
            <div className="max-width content-padding">
              <h3>
                <span className="coronavirus-section-header">
                  How is it spreading?<sup>6</sup>
                </span>
              </h3>
              <p>
                At this time, we don’t know how fast or easily this virus is
                spreading between people. More information is discovered
                everyday, but here’s what we know so far.
              </p>
              <h4>Human-to-human transmission is possible</h4>
              <p>
                The virus first came from an animal source, but it is now able
                to spread from human to human.
              </p>
              <h4>It’s an airborne virus</h4>
              <p>It can infect humans through...</p>
              <div className="hidden--lg">
                <Image
                  src="/images/features/coronavirus/mobile-spread-1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="1">
                  Through the air by coughing and sneezing. People who are
                  nearby could inhale those droplets into their lungs.
                </NumberListItem>
                <Image
                  src="/images/features/coronavirus/mobile-spread-2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="2">
                  Through close contact, at about 6 feet, including touching,
                  shaking hands.
                </NumberListItem>
                <Image
                  src="/images/features/coronavirus/mobile-spread-3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="3">
                  It is still unclear if you can get the COVID-19 by touching an
                  object or surface contaminated by the virus, then touching
                  your mouth, nose, or eyes.
                </NumberListItem>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/spread.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
            <div className="max-width content-padding">
              <h4>
                Incubation Period<sup>9</sup>
              </h4>
              <p>
                The time between exposure to the virus and the start of symptoms
                is between 5.2 - 12.5 days.
              </p>
            </div>
          </section>
          <section>
            <div className="hero hero--small">
              <div className="hero__image-container">
                <BackgroundImage
                  src="/images/features/coronavirus/section-header.jpg"
                  className="hero__image"
                />
              </div>
              <div className="coronavirus-header-container">
                <div className="max-width content-padding">
                  <h2>Your Part</h2>
                </div>
              </div>
            </div>
            <div className="max-width content-padding">
              <p>
                Outbreaks at this scale can be scary, but besides staying up to
                date on the news, there are still a lot of things that you can
                do to stay healthy and help stop the spread of disease!
              </p>
              <h3>
                <span className="coronavirus-section-header">
                  Prevention<sup>4</sup>
                </span>
              </h3>
              <p>
                COVID-19 has not become an epidemic in America yet,
                <br />
                <strong>
                  and here’s what you can do to prevent it from becoming one:
                </strong>
              </p>
            </div>
            <div className="hidden--lg">
              <Image
                src="/images/features/coronavirus/mobile-prevention.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="max-width content-padding">
                <NumberListItem number="1">
                  <strong>Stay home</strong> when you are sick.
                </NumberListItem>
                <NumberListItem number="2">
                  <strong>Wash your hands</strong> often with soap and warm
                  water. If unable to wash your hands, use alcohol-based hand
                  sanitizer.
                </NumberListItem>
                <NumberListItem number="3">
                  <strong>Avoid close contact</strong> with people who are sick.
                </NumberListItem>
                <NumberListItem number="4">
                  <strong>Clean and disinfect</strong> frequently touched
                  objects and surfaces.
                </NumberListItem>
                <NumberListItem number="5">
                  <strong>Cover coughs and sneezes</strong> with your elbow or a
                  tissue. Throw tissues in the trash.
                </NumberListItem>
                <NumberListItem number="6">
                  Get your annual <strong>flu vaccine.</strong>
                </NumberListItem>
                <NumberListItem number="7">
                  <strong>Take flu antivirals</strong> if prescribed.
                </NumberListItem>
                <NumberListItem number="8">
                  <strong>Avoid touching</strong> your eyes, nose, and mouth
                  with unwashed hands.
                </NumberListItem>
                <NumberListItem number="9">
                  Check CDC's COVID-19 <strong>travel health notices</strong>{' '}
                  often and <strong>avoid</strong> nonessential travel to China.
                </NumberListItem>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/prevention.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
            <div className="max-width content-padding">
              <div className="close-contact">
                <h3>
                  <span className="coronavirus-section-header">
                    Close Contact<sup>3</sup>
                  </span>
                </h3>
                <p>
                  If you come into close contact with someone who is confirmed
                  to have COVID-19,
                  <br />
                  <strong>here’s what you can do to stay well:</strong>
                </p>
                <p>
                  - <strong>Monitor your health</strong> starting for at least{' '}
                  <strong>14 days</strong> after your last contact with the
                  infected person.
                </p>
                <p>
                  - Watch for these signs and symptoms
                  <br />
                  <strong>Contact your healthcare provider</strong> right away
                  if you notice these signs:
                </p>
              </div>
            </div>
            <div className="hidden--lg">
              <Image
                src="/images/features/coronavirus/mobile-close-contact.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="max-width content-padding">
                <NumberListItem number="1">Fever</NumberListItem>
                <NumberListItem number="2">Coughing</NumberListItem>
                <NumberListItem number="3">Shortness of breath</NumberListItem>
                <p>
                  If you have any of these symptoms,{' '}
                  <strong>*call your doctor ahead of time</strong> to tell
                  them...
                </p>
                <p>
                  ...you've had <strong>close contact</strong> with someone with
                  the COVID-19 infection
                </p>
                <p>
                  ...to call the <strong>local</strong> or{' '}
                  <strong>state health department</strong>
                </p>
                <p>
                  This helps your provider prevent other people from being
                  infected.
                </p>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/close-contact.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
            <div className="max-width content-padding">
              <div className="stay-calm pad-horizontal--double pad-vertical">
                <p className="coronavirus-text--primary text--uppercase text--lg">
                  <strong>Stay Calm, Take Care</strong>
                </p>
                <p>
                  Remember, <strong>don't panic!</strong>
                </p>
                <p>
                  Before an announcement of an epidemic, take care of yourself
                  just like you would during the annual flu season.
                </p>
                <p>
                  Stay on top of the news and other credible sources to keep
                  updated on if you need to do anything different.
                </p>
              </div>
            </div>
          </section>

          <div className="max-width text--center">
            <a
              className="button"
              href={mediaUrl(
                '/pdf/vision/coronavirus/Understanding%20the%202019%20Novel%20Coronavirus.v3.pdf'
              )}
            >
              Download PDF
            </a>
          </div>
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Patricia Nguyen" />
                <Author name="Colleen Tang Poy" />
                <Author name="Parsuree Vatanasirisuk" />

                <h3 className="header--md">Contributors</h3>

                <Author name="Meghana Karande" />
                <Author name="Juhan Sonin" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CoronavirusFeature
