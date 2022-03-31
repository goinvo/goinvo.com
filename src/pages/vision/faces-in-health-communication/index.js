import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Divider from '../../../components/divider'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'
import Columns from '../../../components/columns'

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
    let elements = this.grid.current.getElementsByClassName('fihc-row--1')
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

    elements.forEach(el => {
      el.style.height = `${height}px`
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
              <sup>
                <a href="#references">1</a>
              </sup>
            </p>
            <div className="margin-auto pad-bottom pad-top--quad max-width--80">
              <Image
                src="/images/features/faces-in-health-communication/04-numerical-skill.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              Many Americans have low numeracy skills, increasing the effort
              patients exert in calculating risk and comparing options when
              making medical decisions.
              <sup>
                <a href="#references">2</a>
              </sup>
            </p>
            <p className="margin-bottom--double">
              Not unexpectedly, healthcare outcomes worsen, and costs
              substantially increase for Americans with low health literacy.
              Compared to those with proficient health literacy, adults who have
              low health literacy experience:
              <sup>
                <a href="#reference">3</a>
              </sup>
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
                  Through all of its impact – medical errors, increased illness
                  and disability, loss of wages, and compromised public health -
                  low health literacy is estimated to cost the U.S. economy up
                  to $238B per year.
                </span>
                <sup>
                  <a href="#references">4</a>
                </sup>
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
                    information significantly, from 70% to 95%.
                    <sup>
                      <a href="#references">5</a>
                    </sup>
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
                    <sup>
                      <a href="#references">6</a>
                    </sup>
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
                    information.
                    <sup>
                      <a href="#references">7</a>
                    </sup>
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
                    <sup>
                      <a href="#references">8</a>
                    </sup>
                  </p>
                </div>
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-2">
                <div className="pad-right--only-lg">
                  <div className="pad-bottom--double pad-top--double--only-lg max-width--40--until-lg max-width--60--only-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/08-wound-care-b.jpg"
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
                      illustrations.
                      <sup>
                        <a href="#references">9</a>
                      </sup>
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
            <div className="text">
              <p className="text--serif text--center text--lg">
                Humans are born to look at faces.
              </p>
              <p>
                From the very beginning of our lives, we look to others’ faces
                to ascertain vital information. <b>CONSPEC/CONLERN</b>, a
                two-process theory of infant face recognition proposed by
                Johnson and Morton,{' '}
                <b>
                  explains how newborns use innate knowledge about the structure
                  of faces.
                </b>
                <sup>
                  <a href="#references">10</a>
                </sup>
              </p>
            </div>
            <div className="border border--light-gray border--heavy margin-top--double">
              <div className="background--gray pad-all text--center">
                <span className="text--serif text--xl">CONSPEC</span>
                <div className="text--sm pad-top--half">
                  Guides an infant’s preferences for facelike patterns from
                  birth.{' '}
                  <sup>
                    <a href="#references">11, 12, 13, 14, 15, 16</a>
                  </sup>
                </div>
              </div>
              <div className="pad-all border-bottom border--light-gray border--heavy text--bold text--center text--uppercase">
                2 Days Old
              </div>
              <div className="pure-g">
                <div className="pure-u-1-2 pure-u-lg-8-24 border-right border--light-gray border--heavy display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <div className="text--center text--uppercase text--bold">
                      Frontal Lobe
                    </div>
                    <Image
                      src="/images/features/faces-in-health-communication/10-brain1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1-2 pure-u-lg-14-24 display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/10-baby1.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
              <div className="pad-all border-top border--light-gray border--heavy">
                Infants spend a longer time looking at face that are arranged
                properly. As early as two days old, newborns are able to
                discriminate between averting eye gaze and direct gaze.
              </div>
            </div>
            <div className="border border--blue border--heavy margin-top--double">
              <div className="background--blue pad-all text--center">
                <span className="text--serif text--xl">CONLERN</span>
                <div className="text--sm pad-top--half">
                  A cortical visuomotor mechanism. These subcortical structures
                  support the development of specialized cortical circuits that
                  we use as adults.{' '}
                  <sup>
                    <a href="#references">17, 18, 19, 20, 21, 22</a>
                  </sup>
                </div>
              </div>
              <div className="pad-all border-bottom border--light-gray border--heavy text--bold text--center text--uppercase">
                2 Months Old
              </div>
              <div className="pure-g">
                <div className="pure-u-1-2 pure-u-lg-8-24 border-right border--light-gray border--heavy display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <div className="text--center text--uppercase text--bold">
                      Motor Cortex
                    </div>
                    <Image
                      src="/images/features/faces-in-health-communication/10-brain2.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1-2 pure-u-lg-14-24 display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/10-baby2.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
              <div className="pad-all border-top border--light-gray border--heavy">
                Infants learn to <b>prefer a realistic human face</b> through
                their cortical visuomotor mechanism.
              </div>
            </div>
            <div className="border border--blue border--heavy">
              <div className="pad-all border-bottom border--light-gray border--heavy text--bold text--center text--uppercase">
                4 Months Old
              </div>
              <div className="pure-g">
                <div className="pure-u-1-2 pure-u-lg-8-24 border-right border--light-gray border--heavy display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <div className="text--center text--uppercase text--bold">
                      Occipital Lobe
                    </div>
                    <Image
                      src="/images/features/faces-in-health-communication/10-brain3.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1-2 pure-u-lg-14-24 display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/10-baby3.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
              <div className="pad-all border-top border--light-gray border--heavy">
                Infants can simulate neural responses in their temporal lobe to
                a level similar to adults.
                <br />
                The lower level of the visual processing system in the occipital
                lobe is responsible for <b>analyzing non-facial images</b>.
              </div>
            </div>
            <div className="border border--blue border--heavy">
              <div className="pad-all border-bottom border--light-gray border--heavy text--bold text--center text--uppercase">
                9 Months Old
              </div>
              <div className="pure-g">
                <div className="pure-u-1-2 pure-u-lg-8-24 border-right border--light-gray border--heavy display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <div className="text--center text--uppercase text--bold">
                      Temporal Lobe
                    </div>
                    <Image
                      src="/images/features/faces-in-health-communication/10-brain4.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
                <div className="pure-u-1-2 pure-u-lg-14-24 display--flex display--flex--column display--flex--justify-center">
                  <div className="pad-horizontal pad-top--until-lg pad-bottom--until-lg">
                    <Image
                      src="/images/features/faces-in-health-communication/10-baby4.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  </div>
                </div>
              </div>
              <div className="pad-all border-top border--light-gray border--heavy">
                Infants <b>develop joint attention</b>, where they can
                purposefully coordinate their attention with that of another
                person.
              </div>
            </div>
            <p className="text--center margin-top--double margin-bottom--double">
              <span className="text--serif text--lg">
                Although we may share the same biological networks for
                processing faces,{' '}
                <span className="text--primary">
                  individuals from different cultural backgrounds have different
                  methodologies for looking at faces.
                </span>
              </span>
              <sup>
                <a href="#references">23</a>
              </sup>
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
                    <sup>
                      <a href="#references">24</a>
                    </sup>
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
                    <sup>
                      <a href="#references">25</a>
                    </sup>
                  </p>
                </div>
              </Columns>
            </div>
            <p>
              Unsurprisingly, humans tend to gravitate towards faces similar to
              their own. Infants have shown the <b>own-race bias (ORB)</b>
              <sup>
                <a href="#references">26</a>
              </sup>
              , recognizing their own faces better than the faces of another
              race.
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
              <sup>
                <a href="#references">27</a>
              </sup>
            </p>
            <p>
              This declining trend is associated with decreased recognition
              memory for other race faces. This trend continues into adulthood.
              After thirty years of investigating the own race bias, ORB has
              been consistently found across different cultures and races,
              including individuals with Caucasian, African, and Asian ancestry
              <sup>
                <a href="#references">28</a>
              </sup>{' '}
              and in both adults
              <sup>
                <a href="#references">29</a>
              </sup>{' '}
              and children
              <sup>
                <a href="#references">30</a>
              </sup>{' '}
              as young as 3-month old infants.
              <sup>
                <a href="#references">31</a>
              </sup>
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
              making them critical to communication. Not only do humans
              naturally gravitate to faces, but they{' '}
              <b>
                remember better and mentally engage with information depicting
                individuals who are similar to them
              </b>
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
                Healthcare Graphics, Persuasion, and Emotion
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
                    <sup>
                      <a href="#references">32</a>
                    </sup>{' '}
                    — plot-referent, message-referent, and self-referent.
                  </p>
                </div>
              </div>
            </div>
            <div ref={this.grid}>
              <Columns columns={3}>
                <div className="text--center">
                  <div className="max-width--60--until-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/15-plot-message-self-referent3.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                  <p className="text--uppercase margin-bottom--none">
                    Message-referent
                  </p>
                  <p className="text--xs fihc-row--1 display--flex display--flex--column display--flex--justify-center margin-top--none">
                    Anti-smoking messaging and images: Disgusted to the tar
                    lining
                  </p>
                </div>
                <div className="text--center">
                  <div className="max-width--60--until-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/15-plot-message-self-referent4.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                  <p className="text--uppercase margin-bottom--none">
                    Plot-referent
                  </p>
                  <p className="text--xs fihc-row--1 display--flex display--flex--column display--flex--justify-center margin-top--none">
                    Anger and sadness for the smoker
                  </p>
                </div>
                <div className="text--center">
                  <div className="max-width--60--until-lg margin-auto">
                    <Image
                      src="/images/features/faces-in-health-communication/15-plot-message-self-referent5.jpg"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                  <p className="text--uppercase margin-bottom--none">
                    Self-referent
                  </p>
                  <p className="text--xs fihc-row--1 display--flex display--flex--column display--flex--justify-center margin-top--none">
                    Shame for their own smoking
                  </p>
                </div>
              </Columns>
            </div>
            <div className="fihc-impact hidden--until-lg">
              <Image
                src="/images/features/faces-in-health-communication/16-PC-impact-what-we-believe.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="fihc-impact__text-container fihc-impact__text-container--desktop pure-g text--bold">
                <div className="pure-u-1-3 pad-horizontal">
                  <p className="pad-horizontal">
                    These narratives have the power to touch our emotions,
                  </p>
                </div>
                <div className="pure-u-1-3 pad-horizontal">
                  <p className="pad-horizontal">impact what we believe,</p>
                </div>
                <div className="pure-u-1-3 pad-horizontal">
                  <p className="pad-horizontal">teach us new behaviors.</p>
                </div>
              </div>
            </div>
            <div className="fihc-impact hidden--lg">
              <Image
                src="/images/features/faces-in-health-communication/16-mobile-impact-what-we-believe.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="fihc-impact__text-container fihc-impact__text-container--mobile text--bold">
                <div className="pad-horizontal">
                  These narratives have the power to touch our emotions,
                </div>
                <div className="pad-horizontal">impact what we believe,</div>
                <div className="pad-horizontal">teach us new behaviors.</div>
              </div>
            </div>
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
                    <sup>
                      <a href="#references">33</a>
                    </sup>{' '}
                    <b>
                      There is a clear distinction between recognizing a risk
                      which triggers an emotional response and experiencing an
                      "enduring perception of future risk" influenced by
                      self-referential emotions.
                    </b>
                    <sup>
                      <a href="#references">34</a>
                    </sup>
                  </p>
                  <p>
                    For example, adult smokers reduced cigarette consumption and
                    increased intentions to quit when they could see themselves
                    reflected in the messaging.
                    <sup>
                      <a href="#references">35</a>
                    </sup>
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
            <div className="hidden--until-lg">
              <Image
                src="/images/features/faces-in-health-communication/18-diversity.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMaxWidth}
              />
            </div>
            <div className="hidden--lg">
              <Image
                src="/images/features/faces-in-health-communication/18-mobile-diversity.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMaxWidth}
              />
            </div>
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
            <p className="text--serif text--lg margin-top--none">
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
              <Image
                src="/images/features/faces-in-health-communication/21-research.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              We asked respondents to rank the boy’s emotions on a scale of 1-5,
              from unhappy to happy. Individuals who saw Option 1 (no face)
              thought the boy eating A ranked at a 4, while individuals who saw
              Option 2 (face) thought that the boy ranked at a 5 in happiness.
            </p>
            <div>
              <Image
                src="/images/features/faces-in-health-communication/22-scale.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              When answering the question, “Is the boy happy after eating blob
              A?” Only 74% of those respondents who saw the option without a
              face selected “yes”, versus nearly 92% of those respondents who
              saw the option showing a face.
            </p>
            <div>
              <Image
                src="/images/features/faces-in-health-communication/23-happy.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              In this first test — that the boy was happy eating blob A, the
              respondents’{' '}
              <b>
                emotional understanding of the content increased due to
                including a facial expression in the infographic.
              </b>
            </p>
            <div>
              <Image
                src="/images/features/faces-in-health-communication/24-pie-chart.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              For our second test, the addition of body language to the
              infographic gave respondents another piece of information to
              interpret.
              <br />
              Regarding the boy eating blob B, 76.2% of respondents given the
              without-a-face option ranked the boy at a 1 (unhappy), while 70.1%
              of the showing-a-face option respondents ranked the boy at a 1
              (unhappy).
            </p>
            <div>
              <Image
                src="/images/features/faces-in-health-communication/25-sad-b.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
            <p>
              While the majority of respondents understood that the boy was
              unhappy, those who relied solely on body language interpreted
              greater unhappiness than those who had the additional facial
              information.{' '}
              <b>
                The addition of facial expression in this case, seemed to
                mitigate the message that the boy was unhappy.
              </b>
            </p>
            <div>
              <Image
                src="/images/features/faces-in-health-communication/26-bar.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
            </div>
          </div>
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Chloe Ma" company="GoInvo" />
                <Author name="Vickie Hua" company="GoInvo" />
                <Author name="Sharon Lee" company="GoInvo" />

                <h3 className="header--md margin-top--double">Contributors</h3>

                <p>
                  Jen Patel
                  <br />
                  Colleen Tang Poy
                  <br />
                  Jon Follett
                  <br />
                  Craig McGinley
                  <br />
                  Eric Benoit
                  <br />
                  Juhan Sonin
                </p>
              </div>

              <Divider />

              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'Center for Healthcare Strategies, Inc. (2013, October). What is Health Literacy? Center for Health Care Strategies . What is Health Literacy?',
                      link:
                        'https://www.chcs.org/media/CHCS_Health_Literacy_Fact_Sheets_2013_1.pdf',
                    },
                    {
                      title:
                        'Angela Fagerlin, Brian J. Zikmund-Fisher, Peter A. Ubel, Helping Patients Decide: Ten Steps to Better Risk Communication, JNCI: Journal of the National Cancer Institute, Volume 103, Issue 19, 5 October 2011, Pages 1436–1443',
                      link: 'https://doi.org/10.1093/jnci/djr318',
                    },
                    {
                      title:
                        'Mahadevan, R. (2019, July 18). Health Literacy Fact Sheets. Center for Health Care Strategies.',
                      link:
                        'https://www.chcs.org/resource/health-literacy-fact-sheets/',
                    },
                    {
                      title:
                        'Mahadevan, R. (2019, July 18). Health Literacy Fact Sheets. Center for Health Care Strategies.',
                      link:
                        'https://www.chcs.org/resource/health-literacy-fact-sheets/',
                    },
                    {
                      title:
                        'Levie, W.H., Lentz, R. Effects of text illustrations: A review of research. ECTJ 30, 195–232 (1982).',
                      link: 'https://doi.org/10.1007/BF02765184',
                    },
                    {
                      title:
                        'Levie, W.H., Lentz, R. Effects of text illustrations: A review of research. ECTJ 30, 195–232 (1982).',
                      link: 'https://doi.org/10.1007/BF02765184',
                    },
                    {
                      title:
                        'Ashton, D. (2019, December 16). 10 Reasons Why Visual Content Marketing Works. NeoMam Blog.',
                      link: 'https://neomam.com/blog/13reasons/',
                    },
                    {
                      title:
                        'Austin, P. E., Matlack, R., 2nd, Dunn, K. A., Kesler, C., & Brown, C. K. (1995). Discharge instructions: do illustrations help our patients understand them?. Annals of Emergency Medicine, 25(3), 317–320.',
                      link: 'https://doi.org/10.1016/s0196-0644(95)70286-5',
                    },
                    {
                      title:
                        'Delp, C., & Jones, J. (1996). Communicating information to patients: the use of cartoon illustrations to improve comprehension of instructions. Academic emergency medicine : official journal of the Society for Academic Emergency Medicine, 3(3), 264–270.',
                      link:
                        'https://doi.org/10.1111/j.1553-2712.1996.tb03431.x',
                    },
                    {
                      title:
                        "Johnson, M. H., Dziurawiec, S., Ellis, H., & Morton, J. (1991). Newborns' preferential tracking of face-like stimuli and its subsequent decline. Cognition, 40(1-2), 1–19.",
                      link: 'https://doi.org/10.1016/0010-0277(91)90045-6',
                    },
                    {
                      title:
                        "Johnson, M. H., Dziurawiec, S., Ellis, H., & Morton, J. (1991). Newborns' preferential tracking of face-like stimuli and its subsequent decline. Cognition, 40(1-2), 1–19.",
                      link: 'https://doi.org/10.1016/0010-0277(91)90045-6',
                    },
                    {
                      title:
                        'Lewis, T. L., Mondloch, C., Budreau , D. R., Maurer, D., Dannemiller, J., Stephens, B., & Kleiner-Gathercoal, K. (1999, September 1). Face Perception During Early Infancy - Catherine J. Mondloch, Terri L. Lewis, D. Robert Budreau, Daphne Maurer, James L. Dannemiller, Benjamin R. Stephens, Kathleen A. Kleiner-Gathercoal, 1999. SAGE Journals.',
                      link:
                        'https://journals.sagepub.com/doi/pdf/10.1111/1467-9280.00179?casa_token=sbisAKlzWxYAAAAA%3A-eJ0Ei1-hA8HC700yL7eeXmS521boJTVO-ZZlFBNaXaMQIVqhWO8ijxiGvYwVZxlnwGNmmPTDqhTrw',
                    },
                    {
                      title:
                        'Morton, J., & Johnson, M. H. (1991). CONSPEC and CONLERN: a two-process theory of infant face recognition. Psychological review, 98(2), 164–181.',
                      link: 'https://doi.org/10.1037/0033-295x.98.2.164',
                    },
                    {
                      title:
                        'Looser, C. E., & Wheatley, T. (2010). The tipping point of animacy. How, when, and where we perceive life in a face. Psychological science, 21(12), 1854–1862.',
                      link: 'https://doi.org/10.1177/0956797610388044',
                    },
                    {
                      title:
                        "Turati, C., Simion, F., & Macchi, C. V. (2004, June 1). Can a Nonspecific Bias Toward Top-Heavy Patterns Explain Newborns' Face Preference? - Cassia Viola Macchi, Chiara Turati, Francesca Simion, 2004. SAGE Journals.",
                      link:
                        'https://journals.sagepub.com/doi/10.1111/j.0956-7976.2004.00688.x?url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org&rfr_dat=cr_pub++0pubmed',
                    },
                    {
                      title:
                        'Farroni, T., Csibra, G., Simion, F., & Johnson, M. (2002, May 16). Eye contact detection in humans from birth. Proceedings of the National Academy of Sciences of the United States of America.',
                      link: '',
                    },
                    {
                      title:
                        'Skrandies, W. (1987). The upper and lower visual field of man : Electrophysiological and functional differences. Core.Ac.Uk.',
                      link: 'https://core.ac.uk/download/pdf/56349616.pdf',
                    },
                    {
                      title:
                        'Chien, S. H.-L. (2012, March). No more top-heavy bias: On early specialization process for face and race in infants. ResearchGate.',
                      link:
                        'https://www.researchgate.net/publication/285295014_No_more_top-heavy_bias_On_early_specialization_process_for_face_and_race_in_infants',
                    },
                    {
                      title:
                        'De Schonen, S., & Mathivet, E. (1989). First come, first served: A scenario about the development of hemispheric specialization in face recognition during infancy. Cahiers de Psychologie Cognitive/Current Psychology of Cognition, 9(1), 3–44.',
                      link: '',
                    },
                    {
                      title:
                        "Frank, M. C., Vul, E., & Johnson, S. P. (2009). Development of infants' attention to faces during the first year. Cognition, 110(2), 160–170.",
                      link: 'https://doi.org/10.1016/j.cognition.2008.11.010',
                    },
                    {
                      title:
                        "Faraz Farzin, Chuan Hou, Anthony M. Norcia; Piecing it together: Infants' neural responses to face and object structure. Journal of Vision 2012;12(13):6. doi",
                      link: 'https://doi.org/10.1167/12.13.6',
                    },
                    {
                      title:
                        'Valley CoPA (Community of Practice in Autism). (2007, November). Joint Attention and Social Referencing . Infant VA.',
                      link:
                        'https://infantva.org/documents/CoPA-Nov-JointAttentionSocialRefer.pdf',
                    },
                    {
                      title:
                        'Blais, C. (2008, February). Culture shapes how we look at faces. ResearchGate.',
                      link:
                        'https://www.researchgate.net/publication/23181620_Culture_Shapes_How_We_Look_at_Faces',
                    },
                    {
                      title:
                        'Blais, C. (2008, February). Culture shapes how we look at faces. ResearchGate.',
                      link:
                        'https://www.researchgate.net/publication/23181620_Culture_Shapes_How_We_Look_at_Faces',
                    },
                    {
                      title:
                        'Blais, C. (2008, February). Culture shapes how we look at faces. ResearchGate.',
                      link:
                        'https://www.researchgate.net/publication/23181620_Culture_Shapes_How_We_Look_at_Faces',
                    },
                    {
                      title:
                        'Wong HK, Stephen ID and Keeble DRT (2020) The Own-Race Bias for Face Recognition in a Multiracial Society. Front. Psychol. 11:208. doi: 10.3389/fpsyg.2020.00208',
                      link: '',
                    },
                    {
                      title:
                        'Shaoying Liu, Paul C. Quinn, Andrea Wheeler, Naiqi Xiao, Liezhong Ge, Kang Lee, Similarity and difference in the processing of same- and other-race faces as revealed by eye tracking in 4- to 9-month-olds, Journal of Experimental Child Psychology,Volume 108, Issue 1, 2011, Pages 180-189, ISSN 0022-0965',
                      link: 'https://doi.org/10.1016/j.jecp.2010.06.008',
                    },
                    {
                      title:
                        'Meissner, C. A., & Brigham, J. C. (2001). Thirty years of investigating the own-race bias in memory for faces: A meta-analytic review. Psychology, Public Policy, and Law, 7(1), 3–35',
                      link: 'https://doi.org/10.1037/1076-8971.7.1.3',
                    },
                    {
                      title:
                        'Tanaka, J.W., Pierce, L.J. The neural plasticity of other-race face recognition. Cognitive, Affective, & Behavioral Neuroscience 9, 122–131 (2009).',
                      link: 'https://doi.org/10.3758/CABN.9.1.122',
                    },
                    {
                      title:
                        'Anzures, G., Kelly, D. J., Pascalis, O., Quinn, P. C., Slater, A. M., de Viviés, X., & Lee, K. (2014). Own- and other-race face identity recognition in children: The effects of pose and feature composition. Developmental Psychology, 50(2), 469–481.',
                      link: 'https://doi.org/10.1037/a0033166',
                    },
                    {
                      title:
                        'Kelly, D.J., Quinn, P.C., Slater, A.M., Lee, K., Gibson, A., Smith, M., Ge, L. and Pascalis, O. (2005), Three-month-olds, but not newborns, prefer own-race faces. Developmental Science, 8: F31-F36',
                      link: 'https://doi.org/10.1111/j.1467-7687.2005.0434a.x',
                    },
                    {
                      title:
                        'Sally Dunlop, Melanie Wakefield & Yoshi Kashima (2008) Can You Feel It? Negative Emotion, Risk, and Narrative in Health Communication, Media Psychology, 11:1, 52-75, DOI',
                      link: 'https://doi.org/10.1080/15213260701853112',
                    },
                    {
                      title:
                        'Sally Dunlop, Melanie Wakefield & Yoshi Kashima (2008) Can You Feel It? Negative Emotion, Risk, and Narrative in Health Communication, Media Psychology, 11:1, 52-75, DOI',
                      link: 'https://doi.org/10.1080/15213260701853112',
                    },
                    {
                      title:
                        'Sally Dunlop, Melanie Wakefield & Yoshi Kashima (2008) Can You Feel It? Negative Emotion, Risk, and Narrative in Health Communication, Media Psychology, 11:1, 52-75, DOI',
                      link: 'https://doi.org/10.1080/15213260701853112',
                    },
                    {
                      title:
                        'Romer, D., & Jamieson, P. (2001). The role of perceived risk in starting and stopping smoking. In P. Slovic (Ed.), Smoking: Risk, perception, & policy (pp. 64–80). Sage Publications, Inc.',
                      link: 'https://doi.org/10.4135/9781452232652.n4',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default FacesInHealthCommunicationFeature
