import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import Quote from '../components/quote'
import Columns from '../components/columns'
import ImageBlock from '../components/image-block'
import Image from '../components/image'
import Divider from '../components/divider'

import IconComplexity from '../assets/images/icon-complexity.inline.svg'
import IconHealthcare from '../assets/images/icon-healthcare.inline.svg'
import IconTeam from '../assets/images/icon-team.inline.svg'
import IconVision from '../assets/images/icon-vision.inline.svg'

import config from '../../config'

const services = [
  {
    title: "Healthcare product strategy",
    description: "We envision products and services through collaborative design exercises that will help frame your digital future.",
    methods: "vision workshops, design facilitation, ideation, concept work, product roadmapping",
    image: "/images/services/pgp-green.jpg",
    color: "#D6E8E2",
    example: {
      link: "/work/personal-genome-project-vision",
      title: "Personal Genome Project"
    }
  },
  {
    title: "Research",
    description: "We uncover deep user insights with patients, clinicians, and industry experts that inform priorities, drive features, and inspire strategy.",
    methods: "user interviews, analytic reviews, journey mapping, market research, competitive analysis, survey creation",
    image: "/images/services/wuxi-blue.jpg",
    color: "#D3DCEE",
    example: {
      link: "/work/wuxi-nextcode-familycode",
      title: "WuXi NextCODE"
    }
  },
  {
    title: "Product definition",
    description: "We define complex products and bring ideas to life by mapping systems, touchpoints, and features.",
    methods: "system mapping, use cases, persona development, storyboarding, user requirements",
    image: "/images/services/shr-red.jpg",
    color: "#EAC5BA",
    example: {
      link: "/work/mitre-shr",
      title: "Standard Health Record"
    }
  },
  {
    title: "User experience design",
    description: "We create product user experiences that are both functional and beautiful, crafting every detail from initial sketch to interactive prototype to front-end code.",
    methods: "UI and UX design, information architecture, wireframes, mockups, interactive prototypes, design systems",
    image: "/images/services/hgraph-gold.jpg",
    color: "#EEE0CA",
    example: {
      link: "/work/hgraph",
      title: "hGraph"
    }
  },
  {
    title: "Usability and validation",
    description: "We test and iterate designs with users throughout a project to validate product features, functions, and designs.",
    methods: "expert reviews, A/B testing, usability testing, accessability testing",
    image: "/images/services/glytec-brown.jpg",
    color: "#E2DACE",
    example: {
      link: "/work/mass-snap",
      title: "Mass SNAP"
    }
  }
]

const ServicesPage = () => (
  <Layout>
    {
      // TODO: Real meta info here
    }
    <Helmet
      title="GoInvo | Services"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: 'goinvo services' },
      ]}
    />
    <Hero image="/images/services/hand-drawing.jpg" position="center top">
      <h1 className="header--xl">
        Disrupt from within,<br/>
        Reinvent your product,<br/>
        Change the market<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding pad-vertical--double">
      <div className="equal-height-rows">
        {services.map((service, i) => {
          return (
            <div key={service.title} className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double">
                    <h4 className="header--sm margin-bottom--none">{service.title}</h4>
                    <hr className="hr hr--thick" style={{ backgroundColor: service.color }} />
                    <p className="text--gray">
                      {service.description}
                    </p>
                    <p className="text--gray">
                      <span className="text--bold text--uppercase text--spacing">Methods: </span>{service.methods}
                    </p>
                    <p className="text--gray">
                      <span className="text--bold text--uppercase text--spacing">Example: </span><Link to={service.example.link}>{service.example.title}</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <div className="pad-vertical--double">
                    <Image src={service.image} sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth} className="image--max-width" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    <Quote background="gray" quotee="Serban Georgescu, MD" quoteeSub="InfoBionic Director of Clinical Development">
      With Invo, design wasn't just design. It impacted our IP portfolio. It changed our business.
    </Quote>
    <div className="max-width content-padding pad-vertical--double margin-bottom--double">
      <h3 className="header--md">Approach</h3>
      <div className="pure-g pad-bottom--double">
        <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double pad-vertical--double">
          <IconHealthcare className="icon--wide icon--secondary" />
          <h4 className="header--sm margin-top--none margin-bottom--half">We're focused on healthcare.</h4>
          <p className="text--gray margin-top--half">
            Healthcare is an exceedingly complex field that holds unique challenges both seen and unseen. At GoInvo, we’ve focused solely on this space for over a decade, designing more than 110 products and services during that time.
          </p>
          <Link to="/work/">View all sectors</Link>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double">
          <IconVision className="icon--wide icon--secondary" />
          <h4 className="header--sm margin-top--none margin-bottom--half">We'll help you envision the future.</h4>
          <p className="text--gray margin-top--half">
            We bring fresh ideas and a history of healthcare design and research to help our clients leverage emerging technologies, envision future products and services, and realize long-term goals.
          </p>
          <Link to="/work/hgraph/" className="display--inline-block margin-right--double">Your health in one picture</Link>
          <a href="https://www.goinvo.com/features/careplans" className="display--inline-block">Care plans</a>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg margin-bottom--double">
          <IconTeam className="icon--wide icon--secondary" />
          <h4 className="header--sm margin-top--none margin-bottom--half">We deploy dedicated teams.</h4>
          <p className="text--gray margin-top--half">
            At GoInvo, you’ll get a dedicated design team that collaborates with you throughout the course of your project, communicating openly and adapting quickly to new challenges. We’re adept at integrating our design efforts with your engineering and product teams to form a seamless whole.
          </p>
          <Link to="/about/">Team biographies</Link>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg margin-bottom--double">
          <IconComplexity className="icon--wide icon--secondary" />
          <h4 className="header--sm margin-top--none margin-bottom--half">We're comfortable with complexity.</h4>
          <p className="text--gray margin-top--half">
            From enterprise-grade health IT to data-driven precision healthcare, GoInvo works closely with our clients and partners to transform messy problems into structured strategy and solutions.
          </p>
          <Link to="/work/mitre-shr" className="display--inline-block margin-right--double">Standard health record</Link>
          <Link to="/work/partners-insight" className="display--inline-block">Partners Insight IRB</Link>
        </div>
      </div>
      <Divider />
    </div>
    <div className="max-width content-padding pad-vertical--double">
      <Columns columns={3}>
        <ImageBlock key={"1"} image="/images/services/emerging-tech-shr-layers.jpg" title="Emerging technology" caption="We’ve worked on projects across the spectrum of emerging technology from artificial intelligence for medical coding to self-documenting voice encounters and wearable devices.">
          <div><a href="https://www.goinvo.com/features/from-bathroom-to-healthroom/">From bathroom to healthroom</a></div>
          <div><Link to="/work/wuxi-nextcode-familycode/">WuXi NextCODE</Link></div>
        </ImageBlock>
        <ImageBlock key={"2"} image="/images/services/doh-preview.jpg" title="Information visualizations" caption="We create beautiful printed and interactive health-related data visualizations that span payment dashboards to visualizing the social determinants of health to clinical practice guidelines for Zika.">
          <div><a href="https://www.goinvo.com/features/determinants-of-health/">Determinants of Health</a></div>
          <div><a href="https://www.goinvo.com/features/ebola-care-guideline/">Clinical Practice Guidelines for Zika</a></div>
        </ImageBlock>
        <ImageBlock key={"3"} image="/images/services/inspired-ehrs-book.jpg" title="Open source healthcare products" caption="We’ve built 10 of our own open source products and integrated open source code with a range of clients. Our services range from guidance to design and development.">
        <div><Link to="/work/inspired-ehrs/">Inspired EHRs</Link></div>
        <div><Link to="/work/paintrackr/">PainTrackr</Link></div>
        <div><Link to="/work/?category=open-source">See all open source products</Link></div>
        </ImageBlock>
      </Columns>
    </div>
  </Layout>
)

export default ServicesPage
