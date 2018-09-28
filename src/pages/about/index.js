import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import ImageBlock from '../../components/image-block'
import TeamMember from '../../components/team-member'
import Image from '../../components/image'
import Columns from '../../components/columns'
import Card from '../../components/card'

import team from '../../data/team.json'

import config from '../../../config'

const ethics = [
  {
    title: 'Speak the truth',
    content: 'We are honest, open, and genuine. Truth is the essence of goodness.'
  },
  {
    title: 'Be curious creators',
    content: 'We are curious creators who welcome new ideas and the input of others.'
  },
  {
    title: 'Commit to community',
    content: 'We fight inequality and stand to protect ideas, community and human-kind.'
  },
  {
    title: 'Don\'t settle',
    content: 'We are driven and committed to what we do. We strive to deliver exceptional results.'
  },
  {
    title: 'Blend beautiful with useful',
    content: 'We craft ideas and products that are both useful and beautiful.'
  }
]

// TODO: Real images for this list
const upNextList = [
  {
    link: "/work/1",
    image: "features/determinants-of-health/feature_banner.jpg",
    title: "Open Source Healthcare Journal",
    caption: "OS will improve the healthcare system by empowering interoperability, with open data standards, for better patient outcomes."
  },
  {
    link: "/work/2",
    image: "features/determinants-of-health/feature_banner.jpg",
    title: "Open source healthcare products",
    caption: "Learn about our opensource projects and why we’re passionate about making healthcare open."
  },
  {
    link: "/vision/",
    image: "features/determinants-of-health/feature_banner.jpg",
    title: "Why we cook and eat together",
    caption: "Cause we like food."
  }
];

const AboutPage = () => (
  <Layout>
    <Hero image="/images/about/care-cards-hand.jpg">
      <h1 className="header--xl">
        Our shared purpose:<br/>
        better health access +<br/>
        outcomes thru design<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding pad-vertical">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2">
          <h2 className="header--lg pad-right--only-lg">GoInvo is a digital design studio in Boston, crafting the future of healthcare through strategy, creativity, and vision.</h2>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2">
          <p className="text--gray pad-left--only-lg">With backgrounds spanning from medical illustration to physics, we share a foundational knowledge of development, design, and healthcare in the shared pursuit of impact for good.</p>
        </div>
      </div>
    </div>
    <div className="background--blue pad-vertical--double">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
            <ImageBlock image="/images/about/beth-working.jpg" sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth} title="Open office hours" caption="Stop by and receive design advice on your product’s strategy, layout, and data visualization. Alternatively, meet the tribe, or plot your career direction." />
            <Link to="/about/open-office-hours/" className="button button--primary button--block margin-bottom--double hidden--lg">Schedule a visit</Link>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
            <ImageBlock image="/images/about/bai-laughing.jpg" sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth} title="Join the team" caption="If you're an independent thinker and passionate maker hunting for meaningful work, give us a holler." />
            <Link to="/about/careers/" className="button button--primary button--block margin-bottom--double hidden--lg">Careers</Link>
          </div>
        </div>
        <div className="pure-g hidden--until-lg">
          <div className="pure-u-1 pure-u-lg-1-2 pad-right">
            <Link to="/about/open-office-hours/" className="button button--primary button--block">Schedule a visit</Link>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left">
            <Link to="/about/careers/" className="button button--primary button--block">Careers</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="max-width content-padding">
      <h2 className="header--xl text--center">Our team</h2>
      {team.slice(0, 3).map(member => <TeamMember key={member.name} member={member} />)}
    </div>
    <div className="background--blue margin-bottom--double">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="pad-right--only-lg">
              <Image src="/images/about/silhouette.jpg" className="image--max-width" />
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="pad-left--only-lg pad-top--double">
              <p className="text--bold margin-top--none margin-bottom--half">Your Career Awaits</p>
              <p className="text--gray margin--none">Designer and/or Engineer</p>
              <p className="text--gray">If you’re looking to engage in meaningful work, learn from a diverse team  and thrive with autonomy on complex projects, we’d be a good fit.</p>
              <Link to="/about/careers/" className="button button--primary button--lg margin-bottom">Learn about careers</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-width content-padding">
      {team.slice(3, team.length).map(member => <TeamMember key={member.name} member={member} />)}
    </div>
    <div className="background--gray pad-vertical--double">
      <div className="max-width content-padding">
        <h3 className="header--md text--center">Code of Ethics</h3>
        <ul className="ul flex-wrap flex-wrap--half">
          {ethics.map(ethic => {
            return (
              <li key={ethic.title} className="margin-bottom">
                <p>
                  <span className="display--block text--bold margin-bottom--half">{ethic.title}</span>
                  <span className="text--gray">{ethic.content}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    <div className="max-width content-padding pad-vertical--double">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2 margin-bottom--double">
          <div className="pad-left--only-lg">
            <h3 className="header--md text--center">Our Story</h3>
            <p className="text--gray margin-bottom pad-right--only-lg">
              With early roots designing for Yahoo, Mcaffee, and Obama’s 2008 campaign, GoInvo is now focused exclusively on healthcare. We’ve delivered over 110 products with partners ranging from 3M, U.S. Department of Health and Human Services, Partners Healthcare, and a variety of startups.
            </p>
            <Link to="/about/studio-timeline/" className="margin-right--double">Studio timeline</Link>
            {
              // TODO: Real link here
            }
            <Link to="/about/oral-history/">Oral history</Link>
          </div>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2">
          <div className="pad-left--only-lg">
            <Image src="/images/about/bowling.jpg" sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth} className="image--max-width" />
          </div>
        </div>
      </div>
    </div>
    <div className="background--blue">
      <div className="max-width content-padding pad-vertical">
        <h4 className="header--md">Up next</h4>
        <Columns columns={3}>
          { upNextList.map(item => {
            return (
              <Card key={item.link} link={item.link}>
                <ImageBlock
                  title={item.title}
                  image={item.image}
                  caption={item.caption}
                  hoverable />
              </Card>
            )
          })}
        </Columns>
      </div>
    </div>
  </Layout>
)

export default AboutPage
