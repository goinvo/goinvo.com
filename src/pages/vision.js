import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Columns from '../components/columns'
import Image from '../components/image'
import Quote from '../components/quote'
import HubspotForm from '../components/hubspot-form'
import Carousel from '../components/carousel'
import GradientImageColumns from '../components/gradient-image-columns'

import Flickr from '../assets/images/icon-flickr.inline.svg'
import Medium from '../assets/images/icon-medium.inline.svg'
import SoundCloud from '../assets/images/icon-soundcloud.inline.svg'
import Twitter from '../assets/images/icon-twitter.inline.svg'

import atlantic from '../assets/images/publication-logos/logo-atlantic.png'
import forbes from '../assets/images/publication-logos/logo-forbes.png'
import lancet from '../assets/images/publication-logos/logo-lancet.png'
import newScientist from '../assets/images/publication-logos/logo-new-scientist.png'
import npr from '../assets/images/publication-logos/logo-npr.png'
import ted from '../assets/images/publication-logos/logo-ted.png'
import wired from '../assets/images/publication-logos/logo-wired.png'

import config from '../../config'

import { formatDate } from '../helpers.js'

class VisionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: [],
      // NOTE: For now 'recentBlogPostImage' is not in use but may come back later
      // recentBlogPostImage: '',
    }
  }

  componentDidMount() {
    this.getBlogFeed();
  }

  getBlogFeed = () => {
    axios.get(config.rssToJsonServiceUrl + config.hubspotBlogFeedUrl)
      .then(res => {
        const blogPosts = [];
        res.data.items.slice(0, 5).map(item => {
          return blogPosts.push({
            title: item.title,
            date: formatDate(item.pubDate),
            link: item.link,
          })
        })

        this.setState({
          blogPosts,
          // NOTE: For now 'recentBlogPostImage' is not in use but may come back later
          // recentBlogPostImage: res.data.items[0].thumbnail
        });
      })
      .catch(err => {
        console.log("Couldn't fetch hubspot blog posts", err);
        setTimeout(this.getBlogFeed, 5000);
      })
  }

  renderBlogFeed = () => {
    return this.state.blogPosts.map(post => {
      return (
        <li key={post.link}>
          <Card link={post.link} className="pad-all margin-bottom">
            <div className="text--bold">{post.title}</div>
            <span className="text--gray">{post.date}</span>
          </Card>
        </li>
      )
    })
  }

  render() {
    return (
      <Layout>
        <Hero image="/images/vision/vision-hero.jpg">
          <h1 className="header--xl">
            Seeing the future of health<span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <div className="background--gray">
          <div className="max-width content-padding">
            <div className="pure-g pad-vertical--double">
              <div className="pure-u-1 pure-u-lg-1-3">
                <h2 className="header--lg margin--none pad-right--double">Our design and analysis has been featured in<span className="text--serif text--primary">...</span></h2>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3 margin-top--until-lg">
                <ul className="publication-links list--unstyled container container--justify-space-around container--align-center container--fill-height">
                  <li>
                    <a href="https://www.npr.org/sections/health-shots/2014/03/28/295734262/if-a-pictures-worth-1-000-words-could-it-help-you-floss" target="_blank" rel="noopener noreferrer">
                      <img src={npr} alt="NPR logo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.forbes.com/sites/oreillymedia/2014/03/07/defining-and-sculpting-interactions-between-man-and-technology/#23f6861d6571" target="_blank" rel="noopener noreferrer">
                      <img src={forbes} alt="Forbes logo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.theatlantic.com/health/archive/2013/01/the-future-of-medical-records/267202/" target="_blank" rel="noopener noreferrer">
                      <img src={atlantic} alt="The Atlantic logo" />
                    </a>
                  </li>
                  <li className="hidden--until-lg">
                    <a href="https://www.ted.com/talks/stephen_friend_the_hunt_for_unexpected_genetic_heroes" target="_blank" rel="noopener noreferrer">
                      <img src={ted} alt="TED logo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(17)30154-X/fulltext" target="_blank" rel="noopener noreferrer">
                      <img src={lancet} alt="The Lancet logo" />
                    </a>
                  </li>
                  <li className="hidden--until-lg">
                    <a href="https://www.newscientist.com/article/dn25969-my-genes-could-help-cure-childhood-diseases/" target="_blank" rel="noopener noreferrer">
                      <img src={newScientist} alt="New Scientist logo" />
                    </a>
                  </li>
                  <li className="hidden--until-lg">
                    <a href="https://www.wired.com/2013/01/medical-record-redesign/" target="_blank" rel="noopener noreferrer">
                      <img src={wired} alt="Wired logo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="max-width content-padding pad-vertical--double">
          <h3 className="header--md">Spotlight</h3>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-2-3 pad-right--only-lg margin-bottom">
              {
                // TODO: Real images here
              }
              <Card link="/vision/determinants-of-health" fillHeight>
                <ImageBlock
                  title="Social determinants of health"
                  image="features/determinants-of-health/feature_banner.jpg"
                  client="Feature"
                  date="Oct.2016"
                  caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health."
                  hoverable />
              </Card>
            </div>
            <div className="pure-u-1 pure-u-lg-1-3 margin-bottom">
              <Card link="/vision/determinants-of-health" fillHeight>
                <ImageBlock
                  title="Social determinants of health"
                  image="features/determinants-of-health/feature_banner.jpg"
                  client="Feature"
                  date="Oct.2016"
                  caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health."
                  hoverable />
              </Card>
            </div>
          </div>
        </div>
        <div className="background--blue pad-vertical--double">
          <div className="max-width content-padding">
            <h3 className="header--md">Most recent features</h3>
            {
              // TODO: Real images here
            }
            <Columns columns={3}>
              <Card link="/vision/determinants-of-health" key="one">
                <ImageBlock
                  title="Social determinants of health"
                  image="features/determinants-of-health/feature_banner.jpg"
                  client="Feature"
                  date="Oct.2016"
                  caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health."
                  hoverable />
              </Card>
              <Card link="/vision/determinants-of-health" key="two">
                <ImageBlock
                  title="Social determinants of health"
                  image="features/determinants-of-health/feature_banner.jpg"
                  client="Feature"
                  date="Oct.2016"
                  caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health."
                  hoverable />
              </Card>
              <Card link="/vision/determinants-of-health" key="three">
                <ImageBlock
                  title="Social determinants of health"
                  image="features/determinants-of-health/feature_banner.jpg"
                  client="Feature"
                  date="Oct.2016"
                  caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health."
                  hoverable />
              </Card>
            </Columns>
            <button className="button button--primary button--block margin-top">All features</button>
          </div>
        </div>
        <div className="max-width content-padding pad-vertical pad-bottom--double">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
              <div className="container container--column container--justify-center container--fill-height">
                <Image src="/images/vision/emerging-tech-books.jpg" className="image--max-width" />
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
              <h2 className="header--xl">Design and Tech Publications</h2>
              <p className="text--gray">Preview our books on product design, emerging technology, prototyping, and the internet of things, published by O’reilly Media.</p>
              <div className="margin-bottom--half">
                <a href="https://www.amazon.com/Designing-Emerging-Technologies-Genomics-Robotics/dp/1449370519" target="_blank" rel="noopener noreferrer">Designing for Emerging Technologies</a>
              </div>
              <div>
                <a href="https://www.oreilly.com/design/free/future-of-product-design.csp" target="_blank" rel="noopener noreferrer">The Future of Product Design</a>
              </div>
            </div>
          </div>
        </div>
        <div className="background--gray margin-top--double">
          <div className="max-width content-padding">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-3-5">
                <HubspotForm
                  formId={config.hubspotNewsletterFormId}
                  title="Get our latest ideas"
                  submitButtonText="Submit"
                  inline
                  className="margin-bottom"
                  breakout />
              </div>
              <div className="pure-u-1 pure-u-lg-2-5 pad-left--only-lg margin-top--only-sm">
                <ul className="social-links list--unstyled container container--justify-space-around container--align-center container--fill-height">
                  <li className="margin-left--only-lg">
                    <span className="text--gray">Find us on:</span>
                  </li>
                  <li>
                    <a href="https://twitter.com/goinvo"><Twitter className="icon icon--lg" /></a>
                  </li>
                  <li>
                    <a href="https://medium.com/@goinvo"><Medium className="icon icon--lg" /></a>
                  </li>
                  <li>
                    <a href="https://www.flickr.com/photos/juhansonin/"><Flickr className="icon icon--lg" /></a>
                  </li>
                  <li>
                    <a href="https://soundcloud.com/involution-studios"><SoundCloud className="icon icon--lg" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="background--blue pad-vertical--double">
          <div className="max-width content-padding">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <h3 className="header--md">Blog Posts</h3>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
                <h3 className="header--md">Podcast</h3>
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2 border-right--only-lg pad-right--only-lg margin-bottom--double">
                <ImageBlock
                  title="Keep up to date with us!"
                  image="/images/homepage/standardized-health-data-preview-2.jpg"
                  caption="Our posts cover everything from the theories behind messy desks to health data standardization." />
                <ul className="list--unstyled">
                  { this.renderBlogFeed() }
                </ul>
                <a className="float--right" href="https://yes.goinvo.com/articles">View all blog posts</a>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double">
                <ImageBlock
                  title="The Digital Life"
                  image="/images/vision/microphone.jpg"
                  caption="Explore our podcast on emerging technology and digital design." />
                <iframe
                  title="GoInvo SoundCloud Embed"
                  width="100%"
                  height="450"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/14454933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                </iframe>
                <a className="float--right" href="https://soundcloud.com/involution-studios" target="_blank" rel="noopener noreferrer">View all episodes on SoundCloud</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-width content-padding pad-top">
          <h2 className="header--xl margin-bottom--none">Reviews for<span className="text--serif text--primary">...</span></h2>
        </div>
        {
          // TODO: Real images here
        }
        <Carousel menuItems={['Designing for Emerging Techologies', 'Determinants of Health', 'Bathroom to Healthroom', 'Inspired EHRs']}>
          <GradientImageColumns image="/images/vision/emerging-tech-wood.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote background="gray" quotee="Dan Saffer" quoteeSub="Author of Microinteractions" small>If you're looking for insights how to design the future today, look no further.</Quote>
          </GradientImageColumns>
          <GradientImageColumns image="/images/services/doh-preview.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote background="gray" quotee="Nobody" quoteeSub="Nothing" small>Quote about DOH</Quote>
          </GradientImageColumns>
          <GradientImageColumns image="home/culture-2017.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote background="gray" quotee="Eric Topol" quoteeSub="Scripps Translational Science Institute" small>Designers at GoInvo have the right ideas for the smart medical home of the future.</Quote>
          </GradientImageColumns>
          <GradientImageColumns image="/images/services/inspired-ehrs-book.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote background="gray" quotee="Janet Campbell" quoteeSub="Epic" small>I sent this around to our User Experience team here, and there was a lot of discussion and appreciation for the work you've done.</Quote>
          </GradientImageColumns>
        </Carousel>
      </Layout>
    )
  }
}

export default VisionPage
