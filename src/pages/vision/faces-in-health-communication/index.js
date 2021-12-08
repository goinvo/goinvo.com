import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../../../components/layouts/layout'
import BackgroundImage from '../../../components/background-image'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'
import Columns from '../../../components/columns'

import { mediaUrl } from '../../../helpers'
import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Faces in Health Communication - GoInvo',
  metaDescription:
    'The Benefits of Information Graphics and Human Faces for Improved Patient Understanding.',
  heroImage: '/images/features/coronavirus/hero-2.jpg',
}

class FacesInHealthCommunicationFeature extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="faces-in-health-communication">
          <div className="max-width">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <h1 className="header--xl">
                      Faces in Health Communication
                    </h1>
                    <h2 className="header--lg">
                      The Benefits of Information Graphics and Human Faces for
                      Improved Patient Understanding
                    </h2>
                    <p>
                      In healthcare, clear communication that’s easily
                      understood by a broad patient audience is more important
                      now than ever.
                    </p>
                    <p>
                      But all too often complex medical information is
                      unsuccessfully communicated to populations with poor
                      health literacy. This can have devastating outcomes.
                    </p>
                    <p>
                      Our research explores how the incorporation of visual
                      information in healthcare communication, and specifically
                      the use of human faces in health infographics, can improve
                      patients' understanding of critical instructions and
                      information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">
              Problem:
              <br />
              The High Cost of Low Health Literacy
            </h1>
          </div>
          <div className="max-width">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      The US Department of Health and Human Services (HHS)
                      defines health literacy as
                    </p>
                    <p>
                      “the degree to which individuals have the capacity to
                      obtain, process, and understand basic health information
                      needed to{' '}
                      <span className="text--primary">
                        make appropriate health decisions
                      </span>
                      .”
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
            </div>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      <span className="text--primary">
                        More than a third of Americans, nearly 36%, have low
                        health literacy
                      </span>{' '}
                      — which is particularly prevalent among the elderly,
                      individuals with lower socioeconomic status, and those
                      with low English proficiency.
                    </p>
                    <p>
                      People with low health literacy are often unable to derive
                      meaningful information from health education materials,
                      which are in many instances written at a high school or a
                      college level. <a href="#references">[1]</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      Further, many Americans have{' '}
                      <span className="text--primary">low numeracy skills</span>
                      ,
                    </p>
                    <p>
                      “making the cognitive demand greater whenever… patients
                      are presented with risk statistics and are asked to make
                      comparisons between the risks and benefits of multiple
                      options and to make informed medical decisions.”{' '}
                      <a href="#references">[4]</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
            </div>

            <p>
              Perhaps not unexpectedly,{' '}
              <span className="text--primary">
                healthcare outcomes worsen and costs substantially increase
              </span>{' '}
              for Americans with low health literacy. Compared to those with
              proficient health literacy, adults who have low health literacy
              experience: <a href="#reference">[2]</a>
            </p>

            <Columns columns={3}>
              <div>//TODO</div>
              <div>//TODO</div>
              <div>//TODO</div>
            </Columns>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p className="text--serif text--base">
                      Through all of its impact - medical errors, increased
                      illness and disability, loss of wages, and compromised
                      public health - low health literacy is estimated to cost
                      the U.S. economy up to
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">
              The Benefits of Incorporating Visual Information in Healthcare
              Communication
            </h1>
          </div>
          <div className="max-width">
            <p className="text--serif text--base">
              When conveying complex information, there are a number of benefits
              that come from incorporating visuals.
            </p>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      In general, incorporating images into communication{' '}
                      <span className="text--primary">
                        increases people’s understanding of information
                      </span>{' '}
                      significantly, from 70%{' '}
                      <span className="text--primary">to 95%</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      In fact, people{' '}
                      <span className="text--primary">
                        following directions with text and illustration do 323%
                        better
                      </span>{' '}
                      than people following directions without illustrations.{' '}
                      <a href="#references">[6]</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      Overall,{' '}
                      <span className="text--primary">
                        visual information is simply faster and more effective
                      </span>
                      , taking nearly{' '}
                      <span className="text--primary">
                        1/10 of a second to process
                      </span>{' '}
                      in comparison to the 60 seconds needed to process an equal
                      amount of written information.{' '}
                      <a href="#references">[9]</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      Healthcare infographics should have visuals for
                      individuals to best process the information at hand.
                    </p>
                    <p>
                      In one study, published in the Annals of emergency
                      medicine, patients were tested with{' '}
                      <span className="text--primary">
                        discharge instructions
                      </span>{' '}
                      with and without illustrations.
                    </p>
                    <p>
                      Patients receiving discharge instructions are{' '}
                      <span className="text--primary">
                        <span className="text--lg">1.5x more likely</span> to
                        understand those instructions when presented with
                        illustrations than without
                      </span>
                      . <a href="#references">[7]</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-2-3">
                <div className="pad-right--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      Similarly, another study which utilized{' '}
                      <span className="text--primary">
                        wound care instructions
                      </span>{' '}
                      received similar results, with unanimously{' '}
                      <span className="text--primary">
                        better results for clarity, ease of understanding,
                        correct answers, and compliance to care for
                        illustrations
                      </span>{' '}
                      rather than no illustrations.{' '}
                      <a href="#references">[8]</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    // TODO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default FacesInHealthCommunicationFeature
