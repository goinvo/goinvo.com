import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Divider from '../../../components/divider'
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
  heroImage: '/images/features/faces-in-health-communication/hero.jpg',
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
          <Hero image={frontmatter.heroImage} />
          <div className="max-width--sm pad-horizontal margin-top pad-top margin-auto">
            <div className="margin-bottom pad-bottom">
              <h1 className="header--xl">Faces in Health Communication</h1>
              <p>
                In healthcare, clear communication that can be easily understood
                by a broad patient audience is more important now than ever.
              </p>
              <p>
                But all too often, complex medical information is unsuccessfully
                communicated to populations with poor health literacy, which can
                have devastating outcomes.
              </p>
              <p>
                Our research explores how incorporating visual information in
                healthcare communication, and specifically the use of human
                faces in health infographics, can improve patients'
                understanding of critical instructions and information.
              </p>
            </div>
            <Divider />
            <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
              <h1 className="max-width--xs header--xl text--center margin-auto">
                Problem: The High Cost of Low Health Literacy
              </h1>
            </div>
            <div className="margin-auto pad-bottom max-width--80">
              <Image
                src="/images/features/faces-in-health-communication/02-HHS-defines-health-literacy.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              The U.S. Department of Health and Human Services (HHS) defines
              health literacy as “the degree to which individuals have the
              capacity to obtain, process, and understand basic health
              information needed to make appropriate health decisions.”
            </p>
            <div className="margin-auto pad-bottom pad-top--quad max-width--80">
              <Image
                src="/images/features/faces-in-health-communication/03-36.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              More than a third of Americans have low health literacy,
              especially among the elderly, individuals with lower socioeconomic
              status, and those with low English proficiency.
            </p>
            <p>
              People with low health literacy are often unable to derive
              meaningful information from health education materials, which are
              often written at high school or college level.
              <a href="#references">[1]</a>
            </p>
            <div className="margin-auto pad-bottom pad-top--quad max-width--80">
              <Image
                src="/images/features/faces-in-health-communication/04-numerical-skill.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            Many Americans have low numeracy skills, increasing the effort
            patients exert in calculating risk and comparing options when making
            medical decisions. 2 Not unexpectedly, healthcare outcomes worsen,
            and costs substantially increase for Americans with low health
            literacy. Compared to those with proficient health literacy, adults
            who have low health literacy experience:
            <p>
              Many Americans have low numeracy skills, increasing the effort
              patients exert in calculating risk and comparing options when
              making medical decisions.<a href="#references">[4]</a>
            </p>
            <p className="margin-bottom--double">
              Not unexpectedly, healthcare outcomes worsen, and costs
              substantially increase for Americans with low health literacy.
              Compared to those with proficient health literacy, adults who have
              low health literacy experience:<a href="#reference">[3]</a>
            </p>
            <Columns columns={3}>
              <div className="max-width--60--until-lg margin-auto">
                <Image
                  src="/images/features/faces-in-health-communication/05-236B-1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <div className="text--uppercase text--center text--bold margin-top">
                  2-day longer hospital stays
                </div>
              </div>
              <div className="max-width--60--until-lg margin-auto">
                <Image
                  src="/images/features/faces-in-health-communication/05-236B-2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <div className="text--uppercase text--center text--bold margin-top">
                  6% more hospital visits
                </div>
              </div>
              <div className="max-width--60--until-lg margin-auto">
                <Image
                  src="/images/features/faces-in-health-communication/05-236B-3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
                <div className="text--uppercase text--center text--bold margin-top">
                  4x higher healthcare costs
                </div>
              </div>
            </Columns>
            <div className="pad-vertical--double">
              <p>
                <span className="text--serif text--base text--lg">
                  Through all of its impact - medical errors, increased illness
                  and disability, loss of wages, and compromised public health -
                  low health literacy is estimated to cost the U.S. economy up
                  to $238B per year.
                </span>
                <a href="#references">[4]</a>
              </p>
            </div>
            <div className="margin-auto pad-bottom--double">
              <Image
                src="/images/features/faces-in-health-communication/05-236B-4.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <Divider />
            <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
              <h1 className="header--xl text--center max-width--xs margin-auto">
                The Benefits of Visual Healthcare Communication
              </h1>
            </div>
            <p>
              When conveying complex information, there are a number of benefits
              that come from incorporating visuals.
            </p>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-right margin-top max-width--60 max-width--80--only-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/06-icon1.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3 display--flex display--flex--column display--flex--justify-center">
                <div className="pad-left">
                  <p>
                    Incorporating visuals adds several benefits in
                    communication, increases people’s understanding of
                    information significantly, from 70% to 95%.{' '}
                    <a href="#references">[5]</a>
                  </p>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-right margin-top max-width--60 max-width--80--only-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/06-icon2.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3 display--flex display--flex--column display--flex--justify-center">
                <div className="pad-left">
                  <p>
                    People following directions with text and illustration do
                    323% better than those without illustrations.
                    <a href="#references">[6]</a>
                  </p>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3">
                <div className="pad-right margin-top max-width--60 max-width--80--only-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/06-icon3.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-2-3 display--flex display--flex--column display--flex--justify-center">
                <div className="pad-left">
                  <p>
                    Overall, visual information is faster and more effective,
                    taking nearly 1/10 of a second to process compared to the 60
                    seconds needed to understand an equal amount of written
                    information.<a href="#references">[7]</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="pure-g margin-top--double">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg pad-bottom--double pad-top--double--only-lg max-width--60--until-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/07-more-likely.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg margin-bottom">
                  <p>
                    Healthcare communications should have visuals for
                    individuals to best process the information at hand.
                  </p>
                  <p>
                    In one study published in the{' '}
                    <i>Annals of Emergency Medicine</i>, patients were tested
                    with <b>discharge instructions</b> with and without
                    illustrations.
                  </p>
                  <p>
                    Patients given illustrations were{' '}
                    <b>
                      <span className="text--xl">1.5x</span> more likely to
                      choose 5 or more correct responses
                    </b>{' '}
                    than those without illustrations <b>(65% vs 43%)</b>.
                    <a href="#references">[8]</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg max-width--40--until-lg max-width--60--only-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/08-wound-care.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg margin-bottom">
                  <div className="pad-vertical--double--only-lg">
                    <p>
                      Similarly, another study that used{' '}
                      <b>wound care instructions</b> received similar results,
                      with{' '}
                      <b>
                        better results for clarity, ease of understanding,
                        correct answers, and compliance to care
                      </b>{' '}
                      for illustrations rather than instructions with no
                      illustrations.<a href="#references">[9]</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="pad-top--half pad-bottom--half pad-horizontal margin-bottom--double">
              <h1 className="header--xl text--center max-width--xs margin-auto">
                Human Faces and Communication
              </h1>
            </div>
            <div className="pure-g">
              <div className="pure-u-1-2 pure-u-lg-1-4">
                <div className="max-width--60 max-width--80--only-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/09-born-to-look-at-faces1.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1-2 pure-u-lg-1-4">
                <div className="max-width--60 max-width--80--only-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/09-born-to-look-at-faces2.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1-2 pure-u-lg-1-4">
                <div className="max-width--60 max-width--80--only-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/09-born-to-look-at-faces3.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1-2 pure-u-lg-1-4">
                <div className="max-width--60 max-width--80--only-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/09-born-to-look-at-faces4.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
            </div>
            <div className="text--center">
              <p className="text--serif text--lg">
                Humans are born to look at faces.
              </p>
              From the very beginning of our lives, we look to others’ faces to
              ascertain vital information. CONSPEC/CONLERN, a two-process theory
              of infant face recognition proposed by Johnson and Morton,
              explains how newborns use innate knowledge about the structure of
              faces. 10
              <p>
                From the very beginning of our lives, we look to others’ faces
                to ascertain vital information. <b>CONSPEC/CONLERN</b>, a
                two-process theory of infant face recognition proposed by
                Johnson and Morton,{' '}
                <b>
                  explains how newborns use innate knowledge about the structure
                  of faces.
                </b>
                <a href="#references">[10]</a>
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
            <p className="text--center margin-bottom--double">
              <span className="text--serif text--lg">
                Although we may share the same biological networks for
                processing faces,{' '}
                <span className="text--primary">
                  individuals from different cultural backgrounds have different
                  methodologies for looking at faces.
                </span>
              </span>
              <a href="#references">[23]</a>
            </p>
            <div className="text--center margin-auto">
              <Columns columns={2}>
                <div className="pad-right max-width--60--until-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/11-how-we-look-at-face-triangle.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p>
                    Western Caucasians tend to fixate more on the eyes and
                    single details, forming a triangular scan of one’s face.
                    <a href="#references">[24]</a>
                  </p>
                </div>
                <div className="pad-left max-width--60--until-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/11-how-we-look-at-face-circle.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p>
                    East Asians tend to integrate information holistically by
                    focusing on the center of the face.
                    <a href="#references">[25]</a>
                  </p>
                </div>
              </Columns>
            </div>
            <p>
              Unsurprisingly, humans tend to gravitate towards faces similar to
              their own. Infants have shown the <b>own-race bias (ORB)</b>
              <a href="#references">[26]</a>, recognizing their own faces better
              than the faces of another race.
            </p>
            <div className="max-width--60 margin-auto">
              <Image
                src="/images/features/faces-in-health-communication/12-ORB.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              Eye-tracking surveys revealed that infants consistently fixate
              longer on their own-race face regardless of age, compared to a
              decline in fixation time as they age for other-race faces.
              <a href="#references">[27]</a>
            </p>
            <p>
              This declining trend is aassociated with decreased recognition
              memory for other race faces. This trend continues into adulthood.
              After thirty years of investigating the own race bias, ORB has
              been consistently found across different cultures and races,
              including individuals with Caucasian, African, and Asian ancestry
              <a href="#references">[28]</a> and in both adults
              <a href="#references">[29]</a> and children
              <a href="#references">[30]</a> as young as 3-month old infants.
              <a href="#references">[31]</a>
            </p>
            <div className="max-width--50 margin-auto">
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
            <Divider />
            <div className="pad-top--half pad-bottom--half">
              <h1 className="header--xl text--center">
                Healthcare Graphics, Persuastion, and Emotion
              </h1>
            </div>
            <div className="pure-g margin-bottom--double">
              <div className="pure-u-1 pure-u-lg-2-5">
                <div className="pad-right--only-lg">
                  <Image
                    src="/images/features/faces-in-health-communication/15-plot-message-self-referent1.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-3-5">
                <div className="pad-left--only-lg">
                  <p>
                    <b>
                      Healthcare graphics and health campaigns rely heavily on
                      emotion to motivate behavior.
                    </b>{' '}
                    When individuals are exposed to these messages, they may
                    express three pathways of emotions
                    <a href="#references">[32]</a> — plot-referent,
                    message-referent, and self-referent.
                  </p>
                </div>
              </div>
            </div>
            <Columns columns={3}>
              <div className="text--center">
                <div className="max-width--60--until-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/15-plot-message-self-referent3.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
                <p className="text--sm">
                  Anti-smoking messaging and images: Disgusted to the tar lining{' '}
                </p>
                <p className="text--uppercase">Message-referent</p>
              </div>
              <div className="text--center">
                <div className="max-width--60--until-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/15-plot-message-self-referent4.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
                <p className="text--sm">Anger and sadness for the smoker</p>
                <p className="text--uppercase">Plot-referent</p>
              </div>
              <div className="text--center">
                <div className="max-width--60--until-lg margin-auto">
                  <Image
                    src="/images/features/faces-in-health-communication/15-plot-message-self-referent5.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
                <p className="text--sm">Shame for their own smoking</p>
                <p className="text--uppercase">Self-referent</p>
              </div>
            </Columns>
            <Image
              src="/images/features/faces-in-health-communication/16-PC-impact-what-we-believe.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
            {/* <Image
              src="/images/features/faces-in-health-communication/16-mobile-impact-what-we-believe.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            /> */}
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
                    We fully experience the self-referent emotion when we
                    recognize a relationship between a message and ourselves.
                    This emotion influences how we perceive the possible
                    outcomes and severity of consequences of an action.
                    <a href="#references">[33]</a>{' '}
                    <b>
                      There is a clear distinction between recognizing a risk
                      which triggers an emotional response and experiencing an
                      "enduring perception of future risk" influenced by
                      self-referential emotions.
                    </b>
                    <a href="#references">[34]</a>
                  </p>
                  <p>
                    For example, adult smokers reduced cigarette consumption and
                    increased intentions to quit when they could see themselves
                    reflected in the messaging.<a href="#references">[35]</a>
                  </p>
                </div>
              </div>
            </div>
            <p className="text--serif text--lg">
              Self-referent emotions surface when the reader relates to the
              narrative,{' '}
              <span className="text--primary">
                diverse representation in infographics makes these narratives
                more effective.
              </span>
            </p>
            <Image
              src="/images/features/faces-in-health-communication/18-diversity.jpg"
              className="image--max-width"
              sizes={config.sizes.fullInsideMaxWidth}
            />
            {/* <Image
              src="/images/features/faces-in-health-communication/18-diversity.jpg"
              className="image--max-width"
              sizes={config.sizes.fullInsideMaxWidth}
            /> */}
            <Divider />
            <div className="pad-top--half pad-bottom--half pad-horizontal">
              <h1 className="header--xl text--center">Conclusion</h1>
            </div>
            <div className="margin-vertical">
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-3 margin-top">
                  <div className="max-width--60--until-lg max-width--80--only-lg pad-right--only-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/19-conclusion1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3 margin-top">
                  <div className="pad-left--only-lg">
                    <p className="text--serif text--lg margin-top--none">
                      <span className="text--primary">
                        Prioritize higher engagement
                      </span>{' '}
                      to effectively communicate critical information to
                      patients with low health literacy.
                    </p>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-3 margin-top">
                  <div className="max-width--60--until-lg max-width--80--only-lg pad-right--only-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/19-conclusion2.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3 margin-top">
                  <div className="pad-left--only-lg">
                    <p className="text--serif text--lg margin-top--none">
                      Emphasize the{' '}
                      <span className="text--primary">
                        usage of infographics
                      </span>{' '}
                      to improve the understanding of health messaging and
                      instruction.
                    </p>
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-1-3 margin-top">
                  <div className="max-width--60--until-lg max-width--80--only-lg pad-right--only-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/19-conclusion3.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1 pure-u-lg-2-3 margin-top">
                  <div className="pad-left--only-lg">
                    <p className="text--serif text--lg margin-top--none">
                      Showing{' '}
                      <span className="text--primary">diverse human faces</span>{' '}
                      in healthcare communication can further engage readers,
                      influence how the message is understood, and elicit
                      self-referent emotions that encourage behavior change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="pad-top--half pad-bottom--half pad-horizontal">
              <h1 className="header--xl text--center">
                Appendix.
                <br />A Lean Experiment Evaluating Healthcare Information
                Graphics
              </h1>
            </div>
            <p className="text--serif text--lg">
              To learn more about how healthcare visuals and the use of faces in
              particular, improve engagement and emotional understanding, the
              GoInvo health design studio devised a lean experiment.
            </p>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg">
                  <Image
                    src="/images/features/faces-in-health-communication/20-appendix.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                </div>
              </div>
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-left--only-lg">
                  <p>
                    Using Amazon’s Mechanical Turk (Mturk) service, we conducted
                    a national survey of over 400 people, age 18 and over,
                    testing the comprehension of information graphics both with
                    and without faces.
                  </p>
                  <p>
                    Findings from our survey showed that respondents had{' '}
                    <b>
                      a clear preference for information graphics that used
                      faces
                    </b>{' '}
                    versus those that did not.
                  </p>
                  <p>
                    Additionally, the faces in the information graphics played{' '}
                    <b>
                      an important role in how the respondents understood the
                      emotional content
                    </b>{' '}
                    of the message.
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
              A?” Only 74% of those respondents who saw the option without a
              face selected “yes”, versus nearly 92% of those respondents who
              saw the option showing a face.
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
