import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'
import Card from '../../components/card'
import ImageBlock from '../../components/image-block'
import Columns from '../../components/columns'
import Image from '../../components/image'
import Quote from '../../components/quote'
import HubspotForm from '../../components/hubspot-form'
import Carousel from '../../components/carousel'
import GradientImageColumns from '../../components/gradient-image-columns'
import { Link } from 'gatsby'

import Flickr from '../../assets/images/icon-flickr.inline.svg'
import Medium from '../../assets/images/icon-medium.inline.svg'
import SoundCloud from '../../assets/images/icon-soundcloud.inline.svg'
import Twitter from '../../assets/images/icon-twitter.inline.svg'

import atlantic from '../../assets/images/publication-logos/logo-atlantic.png'
import forbes from '../../assets/images/publication-logos/logo-forbes.png'
import lancet from '../../assets/images/publication-logos/logo-lancet.png'
import newScientist from '../../assets/images/publication-logos/logo-new-scientist.png'
import npr from '../../assets/images/publication-logos/logo-npr.png'
import ted from '../../assets/images/publication-logos/logo-ted.png'
import wired from '../../assets/images/publication-logos/logo-wired.png'

import features from '../../data/features.json'

import config from '../../../config'

const spotlightFeature = features.find(
  feature => feature.id === 'us-healthcare-problems'
)

const frontmatter = {
  metaTitle: 'Our vision on the future of health - GoInvo',
  metaDescription:
    'Our thoughts on the intersection of design, technology, and healthcare.',
  heroImage: '/images/vision/vision-hero.jpg',
}

class VisionPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      features: features.filter(
        feature => feature.id !== spotlightFeature.id && !feature.external
      ),
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="vision">
          <div className="max-width content-padding pad-vertical--double--only-lg">
            <h1 className="header--xl pad-bottom--double">
              The future of healthcare is...
            </h1>
            <h1 className="header--xl">
              you step foot on US soil, you get healthcare,
            </h1>
            <h1 className="header--xl">
              with a phone, you have 24-365 access to primary care,
            </h1>
            <h1 className="header--xl">clinicians can practice anywhere,</h1>
            <h1 className="header--xl">EPIC is open source,</h1>
            <h1 className="header--xl">patients own their health data,</h1>
            <h1 className="header--xl pad-bottom--double">
              and people over profit.
            </h1>
          </div>
          <div className="max-width content-padding pad-vertical--top--only-lg">
            <h3 className="header--md">What are we doing to get there?</h3>
            <h2 className="header--lg">We are open source advocates.</h2>
            <Image
              src="/images/vision/orange-arrow.jpg"
              sizes={config.sizes.half}
              className="arrow"
            />
          </div>
          <div className="max-width content-padding pad-vertical--double--only-lg">
            <div className="equal-height-rows">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 vertical-middle">
                  <div className="pad-right--only-lg">
                    <div className="pad-vertical--double--only-lg">
                      <h2 className="header--lg">
                        Design for patients as the drivers of their care, and
                        clinicians as the guides for care teams.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-left--only-lg">
                    <div className="pad-bottom--double pad-top--only-lg">
                      <a href="https://www.hgraph.org">
                        <Image
                          src="/images/vision/hgraph-ring.jpg"
                          sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                          className="image--max-width"
                        />
                      </a>
                      <a href="https://www.hgraph.org">
                        hGraph: Your health in one picture.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-width content-padding pad-vertical--only-lg">
            <div className="equal-height-rows">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 vertical-middle">
                  <div className="pad-right--only-lg">
                    <div className="pad-vertical--double--only-lg">
                      <h2 className="header--lg">
                        Software kills.  Design like your life is on the line.
                        And know the biases in it.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-left--only-lg">
                    <div className="pad-bottom--double pad-top--double--only-lg">
                      <a href="https://opensourcehealthcare.org">
                        <Image
                          src="/images/vision/open-source-healthcare-journal.jpg"
                          sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                          className="image--max-width"
                        />
                      </a>
                      <a href="https://opensourcehealthcare.org">
                        Open Source Healthcare Journal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-width content-padding pad-vertical--only-lg">
            <div className="equal-height-rows">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 vertical-middle">
                  <div className="pad-right--only-lg">
                    <div className="pad-vertical--double--only-lg">
                      <h2 className="header--lg">
                        Nobody wants to think about health.  So when we do, it
                        should be beautiful.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-left--only-lg">
                    <div className="pad-bottom--double pad-top--double--only-lg">
                      <a href="/vision/precision-autism/">
                        <Image
                          src="/images/vision/precision-autism.jpg"
                          sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                          className="image--max-width"
                        />
                      </a>
                      <a href="/vision/precision-autism/">Precision Autism</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-width content-padding pad-vertical--double--only-lg">
            <h3 className="header--md pad-vertical--double">Spotlight</h3>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-2-3 pad-right--only-lg margin-bottom">
                <Card
                  link={spotlightFeature.link}
                  fillHeight
                  // NOTE: `externalLink` is optional based on where the spotlight feature is located
                  // externalLink
                  suppressNewTab={true}
                >
                  <ImageBlock
                    title={spotlightFeature.title}
                    image={spotlightFeature.image}
                    client="Feature"
                    date={spotlightFeature.date}
                    caption={spotlightFeature.caption}
                    sizes={config.sizes.fullToTwoThirdsAtLargeInsideMaxWidth}
                    hoverable
                  />
                </Card>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3 margin-bottom">
                <Card
                  link="/vision/health-visualizations"
                  fillHeight
                  suppressNewTab={true}
                >
                  <ImageBlock
                    title="Health Visualizations"
                    image="/images/features/posters/health-viz-vision-preview-2.jpg"
                    caption="Open source visualizations on health and the healthcare industry."
                    sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    hoverable
                  />
                </Card>
              </div>
            </div>
          </div>
          <div className="background--blue pad-vertical pad-vertical--quad--only-lg">
            <div className="max-width content-padding">
              <h3 className="header--md pad-bottom--double">Features</h3>
              <Columns columns={3}>
                {this.state.features.map((feature, i) => {
                  return (
                    <Card
                      link={feature.link}
                      key={feature.id}
                      externalLink
                      suppressNewTab={true}
                    >
                      <ImageBlock
                        title={feature.title}
                        image={feature.image}
                        client="Feature"
                        date={feature.date}
                        caption={feature.caption}
                        sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        hoverable
                      />
                    </Card>
                  )
                })}
              </Columns>
            </div>
          </div>
          <div className="max-width content-padding pad-vertical--quad">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                <Image
                  src="/images/vision/emerging-tech-books.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
                <h2 className="header--xl" id="books">
                  Design and Tech Publications
                </h2>
                <p className="text--gray">
                  Preview our books on product design, emerging technology,
                  prototyping, and the internet of things, published by O’Reilly
                  Media.
                </p>
                <div className="margin-bottom--half">
                  <a
                    href="https://www.amazon.com/Designing-Emerging-Technologies-Genomics-Robotics/dp/1449370519"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Designing for Emerging Technologies
                  </a>
                </div>
                <div className="margin-bottom--half">
                  <a
                    href="https://www.oreilly.com/design/free/future-of-product-design.csp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Future of Product Design
                  </a>
                </div>
                <div className="margin-bottom--half">
                  <a
                    href="https://creativenext.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Next
                  </a>{' '}
                  podcast, on{' '}
                  <a
                    href="https://itunes.apple.com/us/podcast/creative-next/id1451673481?mt=2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iTunes
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://open.spotify.com/show/3TEs0y2xkFhrdrftDj2LrH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify
                  </a>
                </div>
                <div className="margin-bottom--half">
                  <a
                    href="https://thedigitalife.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Digital Life
                  </a>{' '}
                  podcast, on{' '}
                  <a
                    href="https://soundcloud.com/involution-studios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SoundCloud
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="background--gray margin-top--double">
            <div className="max-width content-padding">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-3-5 vision-form-wrapper">
                  <HubspotForm
                    formId={config.hubspotNewsletterFormId}
                    title="Get our latest ideas"
                    submitButtonText="Submit"
                    inline
                    className="margin-bottom"
                    breakout
                  />
                </div>
                <div className="pure-u-1 pure-u-lg-2-5 pad-left--only-lg pad-vertical margin-top--only-sm">
                  <ul className="social-links list--unstyled container container--justify-space-around container--align-center container--fill-height">
                    <li className="margin-left--only-lg">
                      <span className="text--gray">Find us on:</span>
                    </li>
                    <li>
                      <a href="https://twitter.com/goinvo">
                        <Twitter className="icon icon--lg" />
                      </a>
                    </li>
                    <li>
                      <a href="https://medium.com/@goinvo">
                        <Medium className="icon icon--lg" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.flickr.com/photos/juhansonin/">
                        <Flickr className="icon icon--lg" />
                      </a>
                    </li>
                    <li>
                      <a href="https://soundcloud.com/involution-studios">
                        <SoundCloud className="icon icon--lg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="background--gray">
            <div className="max-width content-padding">
              <div className="pure-g pad-vertical pad-vertical--quad--only-lg">
                <div className="pure-u-1 pure-u-lg-1-3">
                  <h2 className="header--lg margin--none pad-right--double">
                    Our design and analysis has been featured in
                    <span className="text--serif text--primary">...</span>
                  </h2>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3 margin-top--until-lg">
                  <ul className="publication-links list--unstyled container container--justify-space-around container--align-center container--fill-height">
                    <li>
                      <a
                        href="https://www.npr.org/sections/health-shots/2014/03/28/295734262/if-a-pictures-worth-1-000-words-could-it-help-you-floss"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={npr} alt="NPR logo" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.forbes.com/sites/oreillymedia/2014/03/07/defining-and-sculpting-interactions-between-man-and-technology/#23f6861d6571"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={forbes} alt="Forbes logo" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.theatlantic.com/health/archive/2013/01/the-future-of-medical-records/267202/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={atlantic} alt="The Atlantic logo" />
                      </a>
                    </li>
                    <li className="hidden--until-lg">
                      <a
                        href="https://www.ted.com/talks/stephen_friend_the_hunt_for_unexpected_genetic_heroes"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={ted} alt="TED logo" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)30154-X/fulltext"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={lancet} alt="The Lancet logo" />
                      </a>
                    </li>
                    <li className="hidden--until-lg">
                      <a
                        href="https://www.newscientist.com/article/dn25969-my-genes-could-help-cure-childhood-diseases/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={newScientist} alt="New Scientist logo" />
                      </a>
                    </li>
                    <li className="hidden--until-lg">
                      <a
                        href="https://www.wired.com/2013/01/medical-record-redesign/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={wired} alt="Wired logo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="max-width content-padding pad-top--double">
            <h2 className="header--xl margin-bottom--none">
              Reviews for
              <span className="text--serif text--primary">...</span>
            </h2>
          </div>
          <Carousel
            menuItems={[
              'Inspired EHRs',
              'Designing for Emerging Techologies',
              'Determinants of Health',
              'Bathroom to Healthroom',
            ]}
          >
            <GradientImageColumns
              image="/images/services/inspired-ehrs-book.jpg"
              backgroundColor="gray"
              backgroundNotResponsive
            >
              <Quote
                background="gray"
                quotee="Janet Campbell"
                quoteeSub="Epic"
                small
              >
                I sent this around to our User Experience team here, and there
                was a lot of discussion and appreciation for the work you've
                done.
              </Quote>
              <Link
                to="/work/inspired-ehrs"
                className="button button--secondary button--lg button--block"
              >
                Read the Case Study
              </Link>
            </GradientImageColumns>
            <GradientImageColumns
              image="/images/vision/emerging-tech-wood.jpg"
              backgroundColor="gray"
              backgroundNotResponsive
            >
              <Quote
                background="gray"
                quotee="Dan Saffer"
                quoteeSub="Author of Microinteractions"
                small
              >
                If you’re looking for insights into how to design the future
                today, look no further.
              </Quote>
              <a
                href="https://www.amazon.com/Designing-Emerging-Technologies-Genomics-Robotics/dp/1449370519"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--secondary button--lg button--block"
              >
                Check out the Book
              </a>
            </GradientImageColumns>
            <GradientImageColumns
              image="/images/services/doh-preview.jpg"
              backgroundColor="gray"
              backgroundNotResponsive
            >
              <Quote
                background="gray"
                quotee="Toyin Ajayi"
                quoteeSub="Chief Health Officer of Cityblock Health"
                small
              >
                The SDoH poster stands taped to the giant whiteboard outside my
                office [at Google Cityblock Health Labs], and will form the
                basis of many rich conversations among my team. Thank you!
              </Quote>
              <Link
                to="/vision/determinants-of-health/"
                className="button button--secondary button--lg button--block"
              >
                Read the Feature
              </Link>
            </GradientImageColumns>
            <GradientImageColumns
              image="/images/features/bathroom-to-healthroom/bathroom-to-healthroom-featured.jpg"
              backgroundColor="gray"
              backgroundNotResponsive
            >
              <Quote
                background="gray"
                quotee="Eric Topol"
                quoteeSub="Scripps Translational Science Institute"
                small
              >
                Designers at GoInvo have the right ideas for the smart medical
                home of the future.
              </Quote>
              <a
                href="https://www.goinvo.com/features/from-bathroom-to-healthroom/"
                className="button button--secondary button--lg button--block"
              >
                Read the Feature
              </a>
            </GradientImageColumns>
          </Carousel>
        </div>
      </Layout>
    )
  }
}

export default VisionPage
