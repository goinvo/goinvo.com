import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import ImageBlock from '../../components/image-block'
import Columns from '../../components/columns'
import TeamMember from '../../components/team-member'

import team from '../../data/team.json'

const AboutPage = () => (
  <Layout>
    <Hero image="products/health-axioms.png">
      <h1 className="header--xl">
        Our shared purpose:<br/>
        better health access +<br/>
        outcomes thru design<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding">
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
            <ImageBlock image="features/determinants-of-health/feature_banner.jpg" title="Open office hours" caption="Stop by and receive design advice on your product’s strategy, layout, and data visualization. Alternatively, meet the tribe, or plot your career direction." />
            <Link to="/about/open-office-hours/" className="button button--primary button--block margin-bottom--double hidden--lg">Schedule a visit</Link>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
            <ImageBlock image="features/determinants-of-health/feature_banner.jpg" title="Join the team" caption="If you're an independent thinker and passionate maker hunting for meaningful work, give us a holler." />
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
      {team.map(member => <TeamMember key={member.name.trim()} member={member} />)}
    </div>
  </Layout>
)

export default AboutPage
