import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import Carousel from '../../components/carousel'
import GradientImageColumns from '../../components/gradient-image-columns'
import Quote from '../../components/quote'
import Columns from '../../components/columns'
import ImageBlock from '../../components/image-block'
import HubspotForm from '../../components/hubspot-form'

import config from '../../../config'

class CareersPage extends Component {
  render() {
    return (
      <Layout>
        <Hero image="features/careplans/part3/hero_image.jpg">
          <h1 className="header--xl">
            This is our job<span className="text--serif text--primary">!</span>
          </h1>
        </Hero>
        <div className="background--blue pad-vertical">
          <div className="max-width content-padding">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3 pad-right--only-lg">
                <h3 className="header--md margin-bottom--half">We are open source</h3>
                <p className="text--gray margin-top--half">We operate as an open company. Our finances are open. You own a part of the company the moment you walk in the door. And all of our products are licensed under open source licenses.</p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3 pad-left--only-lg pad-right--only-lg">
                <h3 className="header--md margin-bottom--half">Design for action</h3>
                <p className="text--gray margin-top--half">Design is not a theoretical exercise. Design like you give a damn and ship. Shippers change the world.</p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3 pad-left--only-lg">
                <h3 className="header--md margin-bottom--half">Demand truth and justice</h3>
                <p className="text--gray margin-top--half">Hunting for systemic problems, popping political blisters, and fighting for the right idea are parts of finding truth... and key to how we design.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-width content-padding pad-top">
          <h2 className="header--xl margin-bottom--none">Experiencing GoInvo for<span className="text--serif text--primary">...</span></h2>
        </div>
        <Carousel menuItems={['a summer internship', '1 year', '3 years', '7 years']}>
          <GradientImageColumns image="home/culture-2017.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote quotee="Lily Fan" quoteeSub="Design Intern" small>Interning at Invo made me realize the importance of not only working at an awesome company to help transform software in healthcare but the value of spending your every day in an extremely inclusive environment with a diverse range of people who genuinely want to see you succeed.</Quote>
          </GradientImageColumns>
          <GradientImageColumns image="home/culture-2017.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote quotee="Eric Bai" quoteeSub="Designer & Engineer" small>I started working at Invo as an engineer and gradually took on a greater design focus. My friends at Invo mentored and supported me as I learned design basics. But beyond just aiming for design competency, I was also challenged to consider the broader impact of the work -- its effect on patients, on access to healthcare, and on health as a whole. If you want to work at a place that challenges you, supports you, and infuses your work with a sense of purpose, come to Invo.</Quote>
          </GradientImageColumns>
          <GradientImageColumns image="home/culture-2017.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote quotee="Beth Herlin" quoteeSub="Designer" small>GoInvo provided a incubator-like space to expand my toolbox of skills and practices while also giving me a kick in the pants to cultivate my own design principles, passions, and ethics. It was an inspiring environment to do meaningful work with a family of driven, talented people.</Quote>
          </GradientImageColumns>
          <GradientImageColumns image="home/culture-2017.jpg" backgroundColor="gray" backgroundNotResponsive>
            <Quote quotee="Nobody" quoteeSub="Nothing" small>Who am I?</Quote>
          </GradientImageColumns>
        </Carousel>
        <div className="max-width content-padding pad-vertical--double">
          <Columns columns={3}>
            <ImageBlock key={"1"} image="features/determinants-of-health/feature_banner.jpg" title="Break Bread" caption="We cook for one another and share meals together. Cooking and eating as a tribe makes us a closer, better tribe."/>
            <ImageBlock key={"2"} image="features/determinants-of-health/feature_banner.jpg" title="Work & Play" caption="Design can be a grind. So is Life. Plan yours as you see fit. We don’t track vacation or sick days. Just be responsible."/>
            <ImageBlock key={"3"} image="features/determinants-of-health/feature_banner.jpg" title="Makers & Shippers" caption="We explore with our hands, heads, and hearts. Tinkering with, building, and shipping things is part of our DNA."/>
          </Columns>
        </div>
        <GradientImageColumns image="home/culture-2017.jpg" backgroundColor="black" gradient reverse>
          <div className="pad-vertical--double">
            <HubspotForm formId={config.hubspotApplicationFormId} title="Application" />
          </div>
        </GradientImageColumns>
      </Layout>
    )
  }
}

export default CareersPage
