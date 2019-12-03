import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
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

import { formatDate } from '../../helpers.js'

const spotlightFeature = features.find(
  feature => feature.id === 'vapepocolypse'
)

// NOTE: Not spotlighting podcasts for now...
// const spotlightPodcast = {
//   title: 'AI + Science',
//   date: '12.Oct.2018',
//   caption:
//     'Discussing the intersection of artificial intelligence and science with special guest is Dany DeGrave, founder of Unconventional Innovation.',
//   link: 'https://soundcloud.com/involution-studios/ai-and-science',
//   image: 'https://i1.sndcdn.com/artworks-000419931243-4y0rds-t500x500.jpg',
// }

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
      blogPosts: [],
      recentFeatures: features
        .filter(
          feature => feature.id !== spotlightFeature.id && !feature.external
        )
        .slice(0, 6),
      showAllFeatures: false,
      // NOTE: For now 'recentBlogPostImage' is not in use but may come back later
      // recentBlogPostImage: '',
    }
  }

  componentDidMount() {
    this.getBlogFeed()
  }

  showAllFeatures = () => {
    this.setState({
      showAllFeatures: true,
      recentFeatures: features.filter(
        feature => feature.id !== spotlightFeature.id && !feature.external
      ),
    })
  }

  getBlogFeed = () => {
    axios
      .get(config.rssToJsonServiceUrl + config.hubspotBlogFeedUrl)
      .then(res => {
        const blogPosts = []
        res.data.items.slice(0, 5).map(item => {
          return blogPosts.push({
            title: item.title,
            date: formatDate(item.pubDate.split(' ')[0]),
            link: item.link,
          })
        })

        this.setState({
          blogPosts,
          // NOTE: For now 'recentBlogPostImage' is not in use but may come back later
          // recentBlogPostImage: res.data.items[0].thumbnail
        })
      })
      .catch(err => {
        console.log("Couldn't fetch hubspot blog posts", err)
        setTimeout(this.getBlogFeed, 5000)
      })
  }

  renderBlogFeed = () => {
    return this.state.blogPosts.map(post => {
      return (
        <li key={post.link}>
          <Card
            link={post.link}
            className="pad-all margin-bottom"
            externalLink
            suppressNewTab={true}
          >
            <div className="text--bold">{post.title}</div>
            <span className="text--gray">{post.date}</span>
          </Card>
        </li>
      )
    })
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage}>
          <h1 className="header--xl">
            Seeing the future of health
            <span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
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
            <h3 className="header--md pad-bottom--double">
              Most recent features
            </h3>
            <Columns columns={3}>
              {this.state.recentFeatures.map((feature, i) => {
                return (
                  <Card
                    link={feature.link}
                    key={feature.id}
                    externalLink
                    suppressNewTab={true}
                    hidden={{
                      condition: !this.state.showAllFeatures && i > 2,
                      class: 'hidden--until-lg',
                    }}
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
            {!this.state.showAllFeatures ? (
              <button
                className="button button--primary button--block margin-top"
                onClick={this.showAllFeatures}
              >
                All {features.length - 1} features
              </button>
            ) : null}
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
                prototyping, and the internet of things, published by O’reilly
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
        <div className="background--blue pad-vertical--quad--only-lg">
          <div className="max-width content-padding">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2 margin-bottom--double">
                <h3 className="header--md pad-vertical">Blog Posts</h3>
                <div className="border-right--only-lg pad-right--only-lg">
                  <ImageBlock
                    title="Keep up to date with us!"
                    image="/images/homepage/standardized-health-data-preview-2.jpg"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    caption="Our posts cover everything from the theories behind messy desks to health data standardization."
                  />
                  <ul className="list--unstyled">{this.renderBlogFeed()}</ul>
                  <a
                    className="float--right"
                    href="https://yes.goinvo.com/articles"
                  >
                    View all blog posts
                  </a>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double">
                <h3 className="header--md pad-vertical">Podcast</h3>
                <ImageBlock
                  title="The Digital Life"
                  image="/images/vision/microphone.jpg"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  caption="Explore our podcast on emerging technology and digital design."
                />
                <iframe
                  title="GoInvo SoundCloud Embed"
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/14454933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                />
                <a
                  className="float--right"
                  href="https://soundcloud.com/involution-studios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View all episodes on SoundCloud
                </a>
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
              I sent this around to our User Experience team here, and there was
              a lot of discussion and appreciation for the work you've done.
            </Quote>
            <Link
              to="/work/inspired-ehrs"
              className="button button--primary button--lg button--block"
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
              className="button button--primary button--lg button--block"
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
              office [at Google Cityblock Health Labs], and will form the basis
              of many rich conversations among my team. Thank you!
            </Quote>
            <Link
              to="/vision/determinants-of-health/"
              className="button button--primary button--lg button--block"
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
              className="button button--primary button--lg button--block"
            >
              Read the Feature
            </a>
          </GradientImageColumns>
        </Carousel>
      </Layout>
    )
  }
}

export default VisionPage
