import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layouts/layout'
import Hero from '../components/hero'
import CategoriesList from '../components/categories-list'
import Columns from '../components/columns'
import Card from '../components/card'
import ImageBlock from '../components/image-block'
import Quote from '../components/quote'
import HubspotForm from '../components/hubspot-form'
import Image from '../components/image'
import ClientLogos from '../components/client-logos'

import config from '../../config'

import caseStudies from '../data/case-study-list.json'

const IndexPage = () => (
  <Layout>
    <Hero image="features/careplans/part3/hero_image.jpg" caption="We deliver beautiful and useful experiences for patients, clinicians, clinics, companies, & governments." isLarge withLogo>
      <h1 className="header--xl">
        Designing<br/>
        the future of<br/>
        healthcare<span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding">
      <div className="pure-g margin-vertical--double">
        <div className="pure-u-1 pure-u-lg-1-3">
          <h2 className="header--xl margin--none pad-right--double">Our designs in healthcare are used every day<span className="text--serif text--primary">.</span></h2>
        </div>
        <div className="pure-u-1 pure-u-lg-2-3">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-2">
              <p className="pad-right--only-lg">
                <span className="text--bold">160 million US residents</span><br/>
                <span className="text--gray">are analyzed, care planned, and risk adjusted with the software we design.</span><br/>
              </p>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <p className="pad-left--only-lg">
                <span className="text--bold">700,000 Massachusetts residents</span><br/>
                <span className="text--gray">count on our service design.</span><br/>
                <Link to="#">Read the case study</Link>
              </p>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <p className="pad-right--only-lg">
                <span className="text--bold">Wikipedia</span><br/>
                <span className="text--gray">relies on our data visualization to explain complex health topics.</span><br/>
                <Link to="#">Social determinants of health</Link>
              </p>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <p className="pad-left--only-lg">
                <span className="text--bold">1 billion prescriptions</span><br/>
                <span className="text--gray">will flow through the software we've designed in 2019.</span><br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="background--gray pad-vertical--double">
      <div className="max-width content-padding">
        <ClientLogos />
      </div>
    </div>
    <div className="max-width content-padding">
      <div className="pure-g margin-vertical--double">
        <div className="pure-u-1 pure-u-lg-1-3">
          <h2 className="header--xl margin--none pad-right--double">Our expertise in healthcare covers<span className="text--serif text--primary">...</span></h2>
        </div>
        <div className="pure-u-1 pure-u-lg-2-3 pad-top">
          <CategoriesList columns={2} />
        </div>
      </div>
      {
        // TODO:
        // - Pick the featured four case studies here
        // - Pass sizes to ImageBlock/Image to optimize image load
      }
      <Columns columns={2}>
        { caseStudies.map((study, i) => {
          return (
            <Card link={`/work/${study.slug}`} key={study.slug} hidden={{ class: 'hidden--sm', condition: i > 1 }}>
              <ImageBlock
                title={study.title}
                image={study.image}
                client={study.client}
                categories={study.categories}
                caption={study.caption}
                hoverable />
            </Card>
          )
        })}
      </Columns>
      <div className="container container--justify-center margin-top margin-bottom--double">
        <Link to="/work/" className="button button--primary button--lg">View all work</Link>
      </div>
    </div>
    <Quote quotee="Eric Topol" quoteeSub="MD, Director, Scripps Translational Science Institute">
      The GoInvo studio is one of the most talented groups of designers I have ever met in the health care space. Not only are their ideas, designs, and graphics remarkable, but I haven’t yet figured out how they know so much about medicine and its future.
    </Quote>
    <div className="max-width content-padding">
      <div className="container container--justify-center margin-vertical">
        <h2 className="header--xl">See the future<span className="text--serif text--primary">.</span></h2>
      </div>
      <Columns columns={3}>
        <ImageBlock key={"1"} image="features/determinants-of-health/feature_banner.jpg" title="Health Reports" caption="Design concepts and objective analysis for grokking the evolving healthcare universe."/>
        <ImageBlock key={"2"} image="features/determinants-of-health/feature_banner.jpg" title="Publications" caption="Preview our books on product design, emerging technology, prototyping, and the internet of things."/>
        <ImageBlock key={"3"} image="features/determinants-of-health/feature_banner.jpg" title="The Digital Life podcast" caption="An online radio show that explores important, timely topics in the world of digital design and technology."/>
      </Columns>
    </div>
    <div className="background--blue pad-vertical--double">
      <div className="max-width content-padding">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="pad-bottom--double pad-right--double">
              <h2 className="header--xl">Let's work together<span className="text--primary text--serif">.</span></h2>
              <p className="text--gray">We work across the entire production process, applying the design method to reimagine your software, system, or service.</p>
              <div className="pure-g">
                <div className="pure-u-1-2">
                  <p>
                    Research<br/>
                    User interviews<br/>
                    Analysis<br/>
                    User mapping<br/>
                    Ideation<br/>
                    UI & UX Design<br/>
                  </p>
                </div>
                <div className="pure-u-1-2">
                  <p>
                    Prototyping<br/>
                    User testing<br/>
                    Front-end development<br/>
                    Strategy consulting<br/>
                    Workshop<br/>
                    Graphic facilitation<br/>
                  </p>
                </div>
              </div>
              <a href="/services/">Learn more about our services</a>
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2">
            <HubspotForm formId={config.hubspotContactFormId} title="Get in touch" />
          </div>
        </div>
      </div>
    </div>
    <div className="max-width content-padding pad-vertical--double">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-lg-1-2">
          <div className="container container--column container--justify-center container--fill-height pad-right--only-lg">
            <Image src="new/test_2000.jpg" className="image--max-width" />
          </div>
        </div>
        <div className="pure-u-1 pure-u-lg-1-2">
          <div className="pad-left--only-lg">
            <h2 className="header--xl">We are GoInvo<span className="text--primary text--serif">.</span></h2>
            <p className="text--gray margin-bottom--double">
              Small by design.<br/>
              Big thinkers.<br/>
              Sweat the details.<br/>
              Ethics not optional.<br/>
              Hyperfocused on healthcare.<br/>
            </p>
            <button className="button button--primary button--lg margin-bottom">Meet our team</button><br/>
            <Link to="/about/open-office-hours/">Visit our open office hours</Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
