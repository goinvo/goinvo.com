import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Divider from '../../../components/divider'
import { mediaUrl } from '../../../helpers'

class OpenSourceHealthcareFeature extends Component {

  render() {
    return (
      <Layout>
        <Hero image="/images/features/open-source-healthcare/open-source-healthcare-hero.jpg"></Hero>
        <div className="oshc-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div className="oshc-title-area">
                <h1 className="header--xl">Open Source Healthcare</h1>
                <h3 className="header--md text--primary">We Must Set Healthcare Free</h3>
                <p className="text--gray">Open source is something that anyone can change and share, because it’s publicly available under a generous license. While it first began with computer code, open source now influences how projects and businesses work, and our lives benefit from this open sharing. Open source has grown into a way of participating with many others that asks for transparency, community-based collaboration, and meritocracy. The best ideas float to the top, and you earn trust by what you do and how you amplify the group.</p>
                <p className="text--gray">Our internet is infused with open source ideas and services &mdash;from how cell phones communicate, to how e-mail is directed from one person to the next, to Linux. All of these technologies working together are the operating system of the internet.</p>
                <p className="text--gray">Here in the US, healthcare is
                  <br />sometimes amazing,
                  <br />often lifesaving,
                  <br />always expensive,
                  <br />and mostly closed.</p>
                <p className="text--gray">It’s tribal at its core &mdash;each hospital, each doc, each healthcare system invents its own way &mdash;to the detriment of our collective health.</p>
                <Divider />
              </div>

              <div className="oshc-introduction">
                <h4 className="header--sm margin-bottom--none">We have open standards for finance</h4>
                <p className="text--gray margin-top--none margin-bottom--double">because we value our money more than our health.</p>

                <h4 className="header--sm margin-bottom--none">We have open standards for transportation</h4>
                <p className="text--gray margin-top--none margin-bottom--double">because getting to your destination is a necessity.</p>

                <h4 className="header--sm margin-bottom--none">We need open standards for healthcare</h4>
                <p className="text--gray margin-top--none margin-bottom--double">because our lives depend on it.</p>

                <p className="text--gray">Read our open source ethos,
                  <br /> with contributing articles by <a href="https://www.healthpopuli.com/2018/10/11/open-source-health-care-will-liberate-patients/" target="_blank" rel="noopener noreferrer">Jane Sarasohn-Kahn</a> and <a href="https://twitter.com/EricTopol" target="_blank" rel="noopener noreferrer">Eric Topol</a></p>

                  <div className="button-group margin-bottom--double">
                    <div className="pure-u-1 pure-u-lg-1-2"><a href={mediaUrl('/pdf/vision/open-source-healthcare/open-source-healthcare-journal.pdf')} className="button button--primary button--lg margin-top--double margin-bottom--double button--block">Download 25 MB PDF</a></div>
                    <div className="pure-u-1 pure-u-lg-1-2"><a href="http://www.blurb.com/b/8980724-open-source-healthcare-journal" target="_blank" rel="noopener noreferrer" className="button button--primary button--lg margin-top--double margin-bottom--double button--block">$12 Blurb Magazine</a></div>
                  </div>
                <Divider />
              </div>

              <div cassName="oshc-missionette">
                <h2 className="header--lg margin-top--double">Open Source Healthcare Missionette</h2>
                <p className="text--gray">We live in a closed healthcare system.
                    <br />The algorithms that drive our care,
                    <br />to our clinical and life data,
                    <br />to hospital and treatment pricing,
                    <br />are governed by blackbox services.</p>
                <p className="text--gray">By using these closed systems,
                  <br />we are actively designed out
                  <br />of the decision-making process,
                  <br />in favor of corporate “optimized care”
                  <br />for optimized returns vs optimized health outcomes.
                  <br />The crooked biases built into software,
                  <br />implemented with intent or accidentally,
                  <br />need interrogation, citizen collaboration, and correction.</p>
                <p className="text--gray">It’s our health.
                  <br />Our very lives are at stake.</p>
                <p className="text--gray">We demand that our healthcare services be open
                  <br />to inspect and correct bias,
                  <br />to be accessible for rapid innovation and evolution,
                  <br />and to become more valuable as
                  <br />more patients, clinicians, clinics, companies, and
                  <br />governments engage in healthcare for all.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default OpenSourceHealthcareFeature
