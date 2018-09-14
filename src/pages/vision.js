import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Columns from '../components/columns'
import Image from '../components/image'
import Quote from '../components/quote'

const VisionPage = () => (
  <Layout>
    <Hero image="products/hero.png">
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
          <div className="pure-u-1 pure-u-lg-2-3">

          </div>
        </div>
      </div>
    </div>
    <div className="max-width content-padding pad-vertical--double">
      <h3 className="header--sm">Spotlight</h3>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-2-3 pad-right--only-lg">
          <Card link="/vision/determinants-of-health" noShadow>
            <ImageBlock
              title="Social determinants of health"
              image="features/determinants-of-health/feature_banner.jpg"
              client="Feature"
              date="Oct.2016"
              caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health." />
          </Card>
        </div>
        <div className="pure-u-1 pure-u-lg-1-3 pad-left--only-lg">
          <Card link="/vision/determinants-of-health" noShadow>
            <ImageBlock
              title="Social determinants of health"
              image="features/determinants-of-health/feature_banner.jpg"
              client="Feature"
              date="Oct.2016"
              caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health." />
          </Card>
        </div>
      </div>
    </div>
    <div className="background--blue pad-vertical--double">
      <div className="max-width content-padding">
        <h3 className="header--sm">Most recent features</h3>
        <Columns columns={3}>
          <Card link="/vision/determinants-of-health">
            <ImageBlock
              title="Social determinants of health"
              image="features/determinants-of-health/feature_banner.jpg"
              client="Feature"
              date="Oct.2016"
              caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health."
              hoverable />
          </Card>
          <Card link="/vision/determinants-of-health">
            <ImageBlock
              title="Social determinants of health"
              image="features/determinants-of-health/feature_banner.jpg"
              client="Feature"
              date="Oct.2016"
              caption="89% of health occurs outside of the clinical space through our genetics, behavior, environment and social circumstances. These factors are known as the social determinants of health."
              hoverable />
          </Card>
          <Card link="/vision/determinants-of-health">
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
            <Image src="new/test_2000.jpg" className="image--max-width" />
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
    <div className="background--gray pad-vertical--double">

    </div>
    <div className="background--blue pad-vertical--double">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <h3 className="header--sm">Blog & Article Posts</h3>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2">
            <h3 className="header--sm">Podcast</h3>
          </div>
        </div>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2 border-right--only-lg pad-right--only-lg margin-bottom--double">
            <ImageBlock
              title="Keep up to date with us!"
              image="features/determinants-of-health/feature_banner.jpg"
              caption="Our posts cover everything from the theories behind messy desks to health data standardization." />
            <a className="float--right" href="https://medium.com/@goinvo" target="_blank" rel="noopener noreferrer">View all articles on Medium</a>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double">
            <ImageBlock
              title="The Digital Life"
              image="features/determinants-of-health/feature_banner.jpg"
              caption="Explore our podcast on emerging technology and digital design." />
            <a className="float--right" href="https://soundcloud.com/involution-studios" target="_blank" rel="noopener noreferrer">View all episodes on SoundCloud</a>
          </div>
        </div>
      </div>
    </div>
    <div className="background--gray pad-vertical--double">
      <div className="max-width content-padding">
        <h3 className="header--sm text--center">Designing for Emerging Technologies</h3>
        <Quote quotee="Carla Diana, Creative Technologist and Author">
          This book is a must-read for anyone involved in innovative product design, new business creation, or technology research for near future applications. The wide collection of essays offers a wild ride across multiple disciplines.
        </Quote>
      </div>
    </div>
  </Layout>
)

export default VisionPage
