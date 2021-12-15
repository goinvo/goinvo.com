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

    this.grid = React.createRef()
  }

  componentDidMount() {
    this.sizeGrid()
    window.addEventListener('resize', this.sizeGrid)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.sizeGrid)
  }

  sizeGrid = () => {
    ;[...Array(5)].map((_, i) => {
      let elements = this.grid.current.getElementsByClassName(
        `fihc-row--${i + 1}`
      )
      elements = [...elements]

      elements.forEach(el => {
        el.style.height = `auto`
      })

      let mqPixels =
        parseFloat(config.mediaQueries.lg) *
        parseFloat(getComputedStyle(document.body).fontSize)

      if (window.innerWidth < mqPixels) {
        return
      }

      let height = elements.reduce(function(el, el2) {
        return el.offsetHeight > el2.offsetHeight ? el : el2
      }).offsetHeight

      if (i === 2 || i === 4) {
        height = height < 100 ? 250 : height
      }

      elements.forEach(el => {
        el.style.height = `${height}px`
      })
    })
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <div className="faces-in-health-communication">
          <div className="max-width pad-horizontal margin-top pad-top">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-2-5">
                <div className="pad-right--only-lg margin-bottom pad-bottom">
                  <h1 className="header--xl">Faces in Health Communication</h1>
                  <h2 className="header--lg">
                    The Benefits of Information Graphics and Human Faces for
                    Improved Patient Understanding
                  </h2>
                  <p>
                    In healthcare, clear communication that’s easily understood
                    by a broad patient audience is more important now than ever.
                  </p>
                  <p>
                    But all too often complex medical information is
                    unsuccessfully communicated to populations with poor health
                    literacy. This can have devastating outcomes.
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
              <div className="pure-u-1 pure-u-lg-3-5">
                <Image
                  src="/images/features/faces-in-health-communication/01-visuals-in-health-comm.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
            </div>
          </div>
          <div className="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">
              Problem:
              <br />
              The High Cost of Low Health Literacy
            </h1>
          </div>
          <div className="max-width pad-horizontal">
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
                    <Image
                      src="/images/features/faces-in-health-communication/02-HHS-defines-health-literacy.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/03-36.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
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
                    <Image
                      src="/images/features/faces-in-health-communication/04-numerical-skill.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
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
              <div className="margin-top">
                <Image
                  src="/images/features/faces-in-health-communication/05-236B-1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <div className="text--uppercase text--center margin-top">
                  2-day longer hospital stays
                </div>
              </div>
              <div className="margin-top">
                <Image
                  src="/images/features/faces-in-health-communication/05-236B-2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <div className="text--uppercase text--center margin-top">
                  6% more hospital visits
                </div>
              </div>
              <div className="margin-top">
                <Image
                  src="/images/features/faces-in-health-communication/05-236B-3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <div className="text--uppercase text--center margin-top">
                  and an astounding 4x higher healthcare costs
                </div>
              </div>
            </Columns>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-4">
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
              <div className="pure-u-1 pure-u-lg-3-4">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/05-236B-4.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">
              The Benefits of Incorporating Visual Information in Healthcare
              Communication
            </h1>
          </div>
          <div className="max-width pad-horizontal">
            <p className="text--serif text--base">
              When conveying complex information, there are a number of benefits
              that come from incorporating visuals.
            </p>

            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-left--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/06-icon1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
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
                    <Image
                      src="/images/features/faces-in-health-communication/06-icon2.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
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
                    <Image
                      src="/images/features/faces-in-health-communication/06-icon3.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
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
                    <Image
                      src="/images/features/faces-in-health-communication/07-more-likely.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
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
                    <Image
                      src="/images/features/faces-in-health-communication/08-wound-care.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">
              Human Faces and Communication
            </h1>
          </div>
          <div className="max-width pad-horizontal">
            <Columns columns={4}>
              <div>
                <Image
                  src="/images/features/faces-in-health-communication/09-born-to-look-at-faces1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <div>
                <Image
                  src="/images/features/faces-in-health-communication/09-born-to-look-at-faces2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <div>
                <Image
                  src="/images/features/faces-in-health-communication/09-born-to-look-at-faces3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <div>
                <Image
                  src="/images/features/faces-in-health-communication/09-born-to-look-at-faces4.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
            </Columns>
            <div className="text--center">
              <p className="text--serif text--lg">
                Humans are born to look at faces.
              </p>
              <p>
                From the very beginning of our lives, we look to others’ faces
                to ascertain important information.{' '}
                <span className="text--primary">CONSPEC/CONLERN</span>, a
                two-process theory of infant face recognition proposed by
                Johnson and Morton,{' '}
                <span className="text--primary">
                  explains how newborns utilize innate information about the
                  structure of faces
                </span>
                . <a href="#references">[10]</a>
              </p>
            </div>
            <div className="pure-g" ref={this.grid}>
              <div className="pure-u-1 pure-u-lg-1-4 border border--light-gray border--heavy">
                <div className="fihc-row--1 display--flex display--flex--align-center display--flex--justify-center background--gray pad-all text--center">
                  <span className="text--serif text--xl">CONSPEC</span>
                </div>
                <div className="fihc-row--2 display--flex display--flex--align-center display--flex--justify-center text--sm pad-all border-bottom border--light-gray border--heavy text--center">
                  <span>
                    Guides an infant’s preferences for facelike patterns from
                    birth. <a href="#references">[11][12][13][14][15][16]</a>
                  </span>
                </div>
                <div className="fihc-row--3">
                  <Image
                    src="/images/features/faces-in-health-communication/10-baby1.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                  />
                </div>
                <div className="fihc-row--4 border-bottom border--light-gray border--heavy">
                  <div className="background--gray pad-horizontal pad-vertical--half text--center text--uppercase text--bold">
                    2 days old
                  </div>
                  <div className="pad-horizontal">
                    <p>
                      Newborns are able to{' '}
                      <span className="text--primary">
                        discriminate between averting eye gaze and direct gaze
                      </span>
                      .
                      <br />
                      They divert attention away from faces that are inverted or
                      upside down and look longer at top-heavy stimulus.
                    </p>
                  </div>
                </div>
                <div className="fihc-row--5 pad-horizontal">
                  <Image
                    src="/images/features/faces-in-health-communication/10-brain1.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-3-4 pad-left--only-lg">
                <div className="border border--blue border--heavy">
                  <div className="fihc-row--1 display--flex display--flex--align-center display--flex--justify-center background--blue pad-all text--center">
                    <span className="text--serif text--xl">CONLERN</span>
                  </div>
                  <div className="fihc-row--2 display--flex display--flex--align-center display--flex--justify-center text--sm pad-all border-bottom border--blue border--heavy text--center">
                    A cortical visuomotor mechanism replaces CONSPEC which
                    support the gradual emergence of specialized cortical
                    circuits that we use as adults.
                  </div>
                  <div className="pure-g">
                    <div className="pure-u-1 pure-u-lg-1-3 border-right border--blue border--heavy">
                      <div className="fihc-row--3">
                        <Image
                          src="/images/features/faces-in-health-communication/10-baby2.jpg"
                          className="image--max-width"
                          sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        />
                      </div>
                      <div className="fihc-row--4 border-bottom border--blue border--heavy">
                        <div className="background--blue pad-horizontal pad-vertical--half text--center text--uppercase text--bold">
                          2 months old
                        </div>
                        <div className="pad-horizontal">
                          <p>
                            Infants learn to{' '}
                            <span className="text--primary">
                              prefer a proper human face
                            </span>{' '}
                            through their cortical visuomotor mechanism.
                          </p>
                        </div>
                      </div>
                      <div className="fihc-row--5 pad-horizontal">
                        <Image
                          src="/images/features/faces-in-health-communication/10-brain2.jpg"
                          className="image--max-width"
                          sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        />
                      </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-3 border-right border--blue border--heavy">
                      <div className="fihc-row--3">
                        <Image
                          src="/images/features/faces-in-health-communication/10-baby3.jpg"
                          className="image--max-width"
                          sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        />
                      </div>
                      <div className="fihc-row--4 border-bottom border--blue border--heavy">
                        <div className="background--blue pad-horizontal pad-vertical--half text--center text--uppercase text--bold">
                          4 months old
                        </div>
                        <div className="pad-horizontal">
                          <p>
                            Infants are able to simulate neural responses in
                            their temporal lobe to a level similar to adults.
                            <br />
                            <span className="text--primary">
                              Non-face images are being analyzed
                            </span>{' '}
                            in the lower level of their visual processing system
                            in the occipital lobe.
                          </p>
                        </div>
                      </div>
                      <div className="fihc-row--5 pad-horizontal">
                        <Image
                          src="/images/features/faces-in-health-communication/10-brain3.jpg"
                          className="image--max-width"
                          sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        />
                      </div>
                    </div>
                    <div className="pure-u-1 pure-u-lg-1-3">
                      <div className="fihc-row--3">
                        <Image
                          src="/images/features/faces-in-health-communication/10-baby4.jpg"
                          className="image--max-width"
                          sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        />
                      </div>
                      <div className="fihc-row--4 border-bottom border--blue border--heavy">
                        <div className="background--blue pad-horizontal pad-vertical--half text--center text--uppercase text--bold">
                          9 months old
                        </div>
                        <div className="pad-horizontal">
                          <p>
                            Infants{' '}
                            <span className="text--primary">
                              develop joint attention
                            </span>
                            , where they can purposefully coordinate their
                            attention with that of another person.
                          </p>
                        </div>
                      </div>
                      <div className="fihc-row--5 pad-horizontal">
                        <Image
                          src="/images/features/faces-in-health-communication/10-brain4.jpg"
                          className="image--max-width"
                          sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text--serif text--lg text--center">
              Interestingly, even though we may share the same biological
              networks for processing faces,{' '}
              <span className="text--primary">
                individuals from different cultural backgrounds have different
                methodologies for how we look at faces
              </span>
              . <a href="#references">[23]</a>
            </p>
            <div className="max-width--sm text--center margin-auto">
              <Columns columns={2}>
                <div className="pad-right">
                  <Image
                    src="/images/features/faces-in-health-communication/11-how-we-look-at-face-circle.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p>
                    Western Caucasians tend to fixate more on the eyes and
                    single details, forming a triangular scan of one’s face.{' '}
                    <a href="#references">[24]</a>
                  </p>
                </div>
                <div className="pad-left">
                  <Image
                    src="/images/features/faces-in-health-communication/11-how-we-look-at-face-triangle.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p>
                    East Asians tend to integrate information holistically from
                    focusing on the center of the face.{' '}
                    <a href="#references">[25]</a>
                  </p>
                </div>
              </Columns>
            </div>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg">
                  <Image
                    src="/images/features/faces-in-health-communication/12-ORB.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <p>
                    Perhaps unsurprisingly, humans tend to gravitate towards
                    faces similar to their own.
                  </p>
                  <p>
                    Infants have shown the{' '}
                    <span className="text--primary">own-race bias (ORB)</span>{' '}
                    <a href="#references">[26]</a>, recognizing their own faces
                    better than the faces of another race.
                  </p>
                  <p>
                    Eye-tracking surveys revealed that infants consistently
                    fixate longer on their own-race face regardless of age, in
                    comparison to a decline in fixation time as they age for
                    other-race faces. <a href="#references">[27]</a> This
                    declining trend is associated with a decline in recognition
                    memory for other race faces.
                  </p>
                </div>
              </div>
            </div>
            <p>
              This trend continues into adulthood — after thirty years of
              investigating the own race bias,{' '}
              <span className="text--primary">
                ORB has been consistently found across different cultures and
                races
              </span>
              , including individuals with Caucasian, African, and Asian
              ancestry <a href="#references">[28]</a> and in both adults{' '}
              <a href="#references">[29]</a> and children{' '}
              <a href="#references">[30]</a> as young as 3-month old infants.{' '}
              <a href="#references">[31]</a>
            </p>
            <div className="max-width--sm margin-auto">
              <Image
                src="/images/features/faces-in-health-communication/13-consistent-ORB.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              Our brains are wired to engage and respond to human faces, which
              makes them critical to communication. Not only do humans naturally
              gravitate to faces, but they are able to{' '}
              <span className="text--primary">
                better remember and mentally engage with information depicting
                individuals who are similar to them
              </span>
              .
            </p>
            <div className="margin-auto">
              <Image
                src="/images/features/faces-in-health-communication/14-PC-engaged-emotions.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
          </div>
          <div className="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">
              The Benefits of Incorporating Visual Information in Healthcare
              Communication
            </h1>
          </div>
          <div className="max-width pad-horizontal">
            <p className="text--serif text--lg">
              When conveying complex information, there are a number of benefits
              that come from incorporating visuals.
            </p>
            <div className="max-width--md margin-auto">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-right--only-lg">
                    <p>
                      <span className="text--primary">
                        Healthcare graphics and health campaigns rely heavily on
                        emotion to motivate behavior
                      </span>
                      . When individuals are exposed to these messages, they may
                      express three pathways of emotions{' '}
                      <a href="#references">[39]</a> — plot-referent,
                      message-referent, and self-referent.
                    </p>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2">
                  <div className="pad-left--only-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/15-plot-message-self-referent1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Columns columns={3}>
              <div className="text--center">
                <p>Anti-smoking messaging and images</p>
                <Image
                  src="/images/features/faces-in-health-communication/15-plot-message-self-referent3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text--uppercase">Message-referent</p>
              </div>
              <div className="text--center">
                <p>Anger and sadness for the smoker</p>
                <Image
                  src="/images/features/faces-in-health-communication/15-plot-message-self-referent4.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text--uppercase">Plot-referent</p>
              </div>
              <div className="text--center">
                <p>Shame for their own smoking</p>
                <Image
                  src="/images/features/faces-in-health-communication/15-plot-message-self-referent5.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <p className="text--uppercase">Self-referent</p>
              </div>
            </Columns>
          </div>
          <div>
            <Image
              src="/images/features/faces-in-health-communication/16-PC-impact-what-we-believe.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
          </div>
          <div className="max-width pad-horizontal">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg">
                  <Image
                    src="/images/features/faces-in-health-communication/17-quit-smoking.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <p>
                    The discrete self-referent emotion is fully experienced when
                    we recognize a relationship between a message and ourselves.
                    This emotion then influences the perceived future risk about
                    the likelihood of the outcome and the severity of its
                    consequences <a href="#references">[40]</a>.{' '}
                    <span className="text--primary">
                      There is a clear distinction between the recognition of a
                      risk that simply triggers the emotion, and the more
                      “enduring perception of future risk” that is influenced by
                      self-referential emotions
                    </span>
                    . <a href="#references">[41]</a>
                  </p>
                  <p>
                    Indeed, with adult smokers, an increased perception of risk
                    from smoking has been associated with a reduction in
                    cigarette consumption and increased intentions and attempts
                    to quit. <a href="#references">[42]</a>
                  </p>
                </div>
              </div>
            </div>
            <p className="text--serif text--lg">
              Since self-referent emotions will most often be triggered by a
              narrative that relates to the readers,{' '}
              <span className="text--primary">
                including diverse representation in infographics can ensure
                these narratives are the most effective
              </span>
              .
            </p>
            <Image
              src="/images/features/faces-in-health-communication/18-diversity.jpg"
              className="image--max-width"
              sizes={config.sizes.fullInsideMaxWidth}
            />
          </div>
          <div className="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">Conclusion</h1>
          </div>
          <div className="max-width pad-horizontal">
            <div className="margin-vertical">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-3 margin-top">
                  <div className="pad-right--only-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/19-conclusion1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3 margin-top">
                  <div className="pad-left--only-lg">
                    <p className="text--serif text--lg">
                      To effectively communicate critical information to
                      patients with low health literacy,{' '}
                      <span className="text--primary">
                        prioritize higher engagement
                      </span>
                      .
                    </p>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-3 margin-top">
                  <div className="pad-right--only-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/19-conclusion2.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3 margin-top">
                  <div className="pad-left--only-lg">
                    <p className="text--serif text--lg">
                      To improve the uptake of health messaging and instruction,
                      emphasize{' '}
                      <span className="text--primary">
                        the usage of infographics
                      </span>
                      .
                    </p>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-3 margin-top">
                  <div className="pad-right--only-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/19-conclusion3.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3 margin-top">
                  <div className="pad-left--only-lg">
                    <p className="text--serif text--lg">
                      The use of{' '}
                      <span className="text--primary">diverse human faces</span>{' '}
                      in healthcare communication can further engage readers,
                      influence how they understand the message, and even elicit
                      self-referent emotions that can encourage behavior change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background--gray pad-top--half pad-bottom--half pad-horizontal">
            <h1 className="header--xl text--center">
              Appendix. A Lean Experiment Evaluating Healthcare Information
              Graphics
            </h1>
          </div>
          <div className="max-width pad-horizontal">
            <p className="text--serif text--lg">
              To learn more about how healthcare visuals and the use of faces in
              particular, improve engagement and emotional understanding, the
              GoInvo health design studio devised a lean experiment.
            </p>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-right--only-lg">
                  <Image
                    src="/images/features/faces-in-health-communication/20-appendix.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3 ">
                <div className="pad-left--only-lg">
                  <p>
                    Using Amazon’s Mechanical Turk service, we conducted a
                    national survey of over 400 people, age 18 and over, testing
                    the comprehension of information graphics both with and
                    without faces.
                  </p>
                  <p>
                    Findings from our survey showed that{' '}
                    <span className="text--primary">
                      respondents had a clear preference for information
                      graphics that used faces, versus those that did not
                    </span>
                    .
                  </p>
                  <p>
                    Further,{' '}
                    <span className="text--primary">
                      the faces in the information graphics played an important
                      role in how the respondents understood the emotional
                      content of the message
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
            <p>
              For our first test, individuals were surveyed with one of the two
              graphics below.
            </p>
            <div>
              {
                // TODO: Image
              }
            </div>
            <p>
              We asked respondents to rank the boy’s emotions on a scale of 1-5,
              from unhappy to happy. Individuals who saw Option 1 (no face)
              thought the boy eating A ranked at a 4, while individuals who saw
              Option 2 (face) thought that the boy ranked at a 5 in happiness.
            </p>
            <div>
              {
                // TODO: Image
              }
            </div>
            <p>
              When answering the question, “Is the boy happy after eating blob
              A?”
              <br />
              Only 74% of those respondents who saw Option 1 (no face) selected
              “yes”,
              <br />
              versus nearly 92% of those respondents who saw Option 2 (face).{' '}
              <br />
              In this first test,{' '}
              <span className="text--primary">
                the respondents’ emotional understanding of the content — that
                the boy was happy eating the food represented by blob A —
                increased due to the addition of a face in the infographic
              </span>
              .
            </p>
            <div>
              {
                // TODO: Image
              }
            </div>
            <p>
              For our second test, the addition of body language to the
              infographic gave respondents another piece of information to
              interpret.
              <br />
              In regards to the boy eating blob B, 76.2% of respondents given
              Option 1 (no face) ranked the boy at a 1 (unhappy), while 70.1% of
              Option 2 respondents ranked the boy at a 1 (unhappy).
              <br />
              While the majority of respondents clearly understood that the boy
              was unhappy, those who relied solely on the body language of the
              boy indicated greater unhappiness than those who had the
              additional facial information.
              <br />
              <span className="text--primary">
                The addition of facial expression in this case, seemed to
                mitigate the message that the boy was unhappy.
              </span>
            </p>
            <div>
              {
                // TODO: Image
              }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default FacesInHealthCommunicationFeature
