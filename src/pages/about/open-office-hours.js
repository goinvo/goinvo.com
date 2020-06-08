import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import GradientImageColumns from '../../components/gradient-image-columns'

const frontmatter = {
  metaTitle: 'Open Office Hours for UX Design at GoInvo',
  metaDescription:
    'Our UX design company is open to anyone seeking advice on design, from students to startups. Sign up!',
  heroImage: '/images/about/open-office-hours/whiteboard.jpg',
}

class OpenOfficeHoursPage extends Component {
  componentDidMount() {
    if (!window.Calendly) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true

      document.body.appendChild(script)
    } else {
      window.Calendly.createInlineWidgets()
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="right center">
          <h1 className="header--xl">
            Enjoy fresh ideas with a side of coffee
            <span className="text--serif text--primary">.</span>
          </h1>
        </Hero>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="max-width--half-left content-padding pad-bottom--double pad-vertical--double--only-lg">
              <h2 className="header--lg">Open office hours</h2>
              <p className="text--gray">
                Our studio is open to anyone seeking advice on design, from
                students to startups, or chat with our passionate team on
                improving healthcare for all.
              </p>
              <a
                href="#calendly-open-office-hours"
                className="button button--secondary button--lg"
              >
                Choose a time to chat
              </a>
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2 background--blue">
            <div className="max-width--half-right content-padding pad-vertical--double--only-lg">
              <div className="pad-vertical--double">
                <a
                  href="https://www.google.com/maps/place/661+Massachusetts+Ave,+Arlington,+MA+02476/@42.4161195,-71.1563006,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>661 Massachusetts Ave, 3rd Floor,</div>
                  <div>Arlington, MA 02476</div>
                </a>
                <p className="text--gray">
                  Parking is available on the street and in a public lot behind
                  our building.
                </p>
              </div>
            </div>
          </div>
        </div>
        <GradientImageColumns
          image="/images/about/beth-working.jpg"
          reverse
          backgroundColor="blue"
        >
          <div className="pad-vertical--double">
            <h2 className="header--lg">
              How can we help
              <span className="text--primary text--serif">?</span>
            </h2>
            <ul className="list--unstyled text--gray">
              <li className="margin-bottom">Company and/or product strategy</li>
              <li className="margin-bottom">Startup guidance</li>
              <li className="margin-bottom">Digital health design methods</li>
              <li className="margin-bottom">Product critiques</li>
              <li className="margin-bottom">
                Direction for building in-house design teams
              </li>
              <li className="margin-bottom">
                Portfolio reviews for engineers & designers
              </li>
              <li className="margin-bottom">Simply meeting the team</li>
            </ul>
          </div>
        </GradientImageColumns>
        <div className="max-width content-padding pad-vertical--double">
          <h2 className="header--lg text--center">Choose a Time</h2>
          <div
            id="calendly-open-office-hours"
            className="calendly-inline-widget"
            data-url="https://calendly.com/goinvo/open-office-hours"
            style={{ minWidth: '320px', height: '800px' }}
          />
        </div>
      </Layout>
    )
  }
}

export default OpenOfficeHoursPage
