import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Layout from '../../../components/layouts/layout'
import BackgroundImage from '../../../components/background-image'
import Image from '../../../components/image'
import Author from '../../../components/author'
import References from '../../../components/references'

import NumberListItem from '../../../components/vision/coronavirus/number-list-item'

import { mediaUrl } from '../../../helpers'
import config from '../../../../config'

import checkIcon from '../../../assets/images/vision/coronavirus/icon-check.svg'
import xIcon from '../../../assets/images/vision/coronavirus/icon-x.svg'

const frontmatter = {
  metaTitle: 'Understanding the Novel Coronavirus (COVID-19) - GoInvo',
  metaDescription:
    'Learn about COVID-19, what it means for U.S. residents, and how you can protect yourself. Updated as new information emerges.',
  heroImage: '/images/features/coronavirus/hero-2.jpg',
}

class CoronavirusFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="coronavirus">
          <div className="hero">
            <div className="hero__image-container">
              <BackgroundImage
                src={frontmatter.heroImage}
                className="hero__image"
              />
            </div>
            <div className="coronavirus-header-container">
              <div className="max-width content-padding pad-bottom">
                {
                  // TODO: Add links to sections
                }
                <h1>
                  Understanding
                  <br />
                  the Novel Coronavirus
                </h1>
                <h2>COVID-19</h2>
                <p>last update 6 March 2020</p>
              </div>
            </div>
          </div>
          <section>
            <div className="max-width content-padding">
              <h3>
                <span className="coronavirus-section-header">
                  What is COVID-19?
                </span>
              </h3>
              <p>
                The 2019 Novel Coronavirus, also known as{' '}
                <strong>SARS-CoV-2</strong>, caused an outbreak of respiratory
                illness called <strong>COVID-19</strong>, in Wuhan, China. It
                has since spread to other parts of China and the world. There is
                still a lot that we don’t know about COVID-19, and the situation
                is evolving day-by-day.
              </p>
              <p>
                However, this isn’t the first time the world has dealt with a
                coronavirus. Coronaviruses are a family of viruses that infect
                birds and mammals (this includes humans!). Typically, they cause
                mild respiratory symptoms similar to the common cold, but in
                some cases—like in SARS or MERS—it can lead to death, often in
                those who are already immunocompromised.
              </p>
              <h4>
                Quick look : How does COVID-19 compare to the other
                coronaviruses?
              </h4>
              {
                // TODO: Graph in code
              }
              <Image
                src="/images/features/coronavirus/graph-2.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <h3 className="margin-top--quad">
                <span className="coronavirus-section-header">
                  Timeline of the outbreak<sup>18</sup>
                </span>
              </h3>
              <div className="corona-timeline">
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">1 Dec 2019</span>
                    <br />
                    First patient confirmed in Wuhan, China
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">31 Dec 2019</span>
                    <br />
                    China sends urgent notice to WHO of unknown pneumonia cause
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">7 Jan 2020</span>
                    <ul>
                      <li>New virus identified as a coronavirus</li>
                      <li>Europe’s first case confirmed in France</li>
                    </ul>
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">11 Jan 2020</span>
                    <br />
                    First death announced in China
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">21 Jan 2020</span>
                    <br />
                    First case in the US confirmed; Snohomish County, Washington
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">24 Jan 2020</span>
                    <br />
                    First confirmed case of human-to-human transmission outside
                    of China in Vietnam
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">30 Jan 2020</span>
                    <ul>
                      <li>
                        World Health Organization declares the outbreak a global
                        public-health emergency
                      </li>
                      <li>
                        The United States reports the first confirmed instance
                        of person-to-person spread
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">31 Jan 2020</span>
                    <ul>
                      <li>
                        HHS Secretary declares a public health emergency (PHE)
                        for the US
                      </li>
                      <li>
                        President Trump enforces a 14-day quarantine preceding
                        the entry of travelers from mainland China into the US
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">11 Feb 2020</span>
                    <br />
                    WHO announces a new official name for the disease as
                    “COVID-19”
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">25 Feb 2020</span>
                    <br />
                    CDC warns community to prepare for the spread of COVID-19 in
                    the US
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">29 Feb 2020</span>
                    <br />
                    First death in the US in King County, Washington
                  </p>
                </div>
                <div className="timepoint time-highlight">
                  <div class="dot" />
                  <p>
                    <span className="text--bold">1 Mar 2020</span>
                    <br />
                    UN releases $15 mill US from the Central Emergency Response
                    Fund (CERF) to fund global efforts to contain the virus
                  </p>
                </div>
                <div className="timepoint">
                  <div class="dot dotted" />
                  <p className="text--bold corona-text--primary">
                    The COVID-19 outbreak is rapid, but not yet considered a
                    pandemic
                  </p>
                </div>
              </div>
            </div>
            <div className="max-width content-padding">
              <h3 className="margin-top--quad">
                <span className="coronavirus-section-header">
                  How is it spreading?<sup>6</sup>
                </span>
              </h3>
              <p>
                At this time, we don’t know how fast or easily this virus is
                spreading between people. More information is discovered
                everyday, but here’s what we know so far.
              </p>
              <h4>Human-to-human transmission is possible</h4>
              <p>
                The virus first came from an animal source, but it is now able
                to spread from human to human.
              </p>
              <h4>It’s an airborne virus</h4>
              <p>It can infect humans through...</p>
              <div className="hidden--lg">
                <Image
                  src="/images/features/coronavirus/mobile-spread-2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="1">
                  ...close contact of 6 feet or less, including touching and
                  shaking hands.
                </NumberListItem>
                <Image
                  src="/images/features/coronavirus/mobile-spread-1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="2">
                  ...the air by coughing and sneezing. People nearby may inhale
                  droplets from coughs and sneezes into their lungs.
                </NumberListItem>
                <Image
                  src="/images/features/coronavirus/mobile-spread-3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="3">
                  ...and by touching an object or surface contaminated by the
                  virus, then touching one's mouth, nose, or eyes.
                </NumberListItem>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/spread-2.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
            <div className="max-width content-padding">
              <h4>
                Incubation Period<sup>9</sup>
              </h4>
              <p>
                The time between exposure to the virus and the start of symptoms
                is between 5.2 - 12.5 days.
              </p>
            </div>
          </section>
          <section className="margin-top--quad">
            <div className="hero hero--small">
              <div className="hero__image-container">
                <BackgroundImage
                  src="/images/features/coronavirus/section-header-2.jpg"
                  className="hero__image"
                />
              </div>
              <div className="coronavirus-header-container">
                <div className="max-width content-padding">
                  <h2>Your Part</h2>
                </div>
              </div>
            </div>
            <div className="max-width content-padding">
              <p className="margin-top--double">
                Outbreaks at this scale can be scary, but besides staying up to
                date on the news, there are still a lot of things that you can
                do to stay healthy and help stop the spread of disease!
              </p>
              <h3 className="margin-top--quad">
                <span className="coronavirus-section-header">
                  Prevention<sup>4</sup>
                </span>
              </h3>
              <p>
                COVID-19 has not become an epidemic in America yet;
                <br />
                <strong>
                  here’s what you can do to prevent it from becoming one:
                </strong>
              </p>
            </div>
            <div className="hidden--lg">
              <Image
                src="/images/features/coronavirus/mobile-prevention.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="max-width content-padding">
                <NumberListItem number="1">
                  <strong>Stay home</strong> if you are sick.
                </NumberListItem>
                <NumberListItem number="2">
                  <strong>Wash your hands</strong> often with soap and warm
                  water. If unable to wash your hands, use alcohol-based hand
                  sanitizer.
                </NumberListItem>
                <NumberListItem number="3">
                  <strong>Avoid close contact</strong> with those who are sick.
                </NumberListItem>
                <NumberListItem number="4">
                  <strong>Clean and disinfect</strong> frequently touched
                  objects and surfaces.
                </NumberListItem>
                <NumberListItem number="5">
                  <strong>Cover coughs and sneezes</strong> with your elbow or a
                  tissue. Throw tissues in the trash.
                </NumberListItem>
                <NumberListItem number="6">
                  Get your annual <strong>flu vaccine.</strong>
                </NumberListItem>
                <NumberListItem number="7">
                  <strong>Take flu antivirals</strong> if prescribed.
                </NumberListItem>
                <NumberListItem number="8">
                  <strong>Avoid touching</strong> your eyes, nose, and mouth
                  with unwashed hands.
                </NumberListItem>
                <NumberListItem number="9">
                  Check CDC's COVID-19 <strong>travel health notices</strong>{' '}
                  often and <strong>avoid</strong> nonessential travel.
                </NumberListItem>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/prevention.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
            <div className="max-width content-padding">
              <div className="close-contact">
                <h3 className="margin-top--quad">
                  <span className="coronavirus-section-header">
                    Close Contact<sup>3</sup>
                  </span>
                </h3>
                <p>
                  If you come into close contact with someone who is confirmed
                  to have COVID-19,
                  <br />
                  <strong>here’s what you can do to stay well:</strong>
                  <ul>
                    <li>
                      <strong>Monitor your health</strong> starting for at least{' '}
                      <strong>14 days</strong> after your last contact with the
                      infected person.
                    </li>
                    <li>
                      Watch for these signs and symptoms.
                      <br />
                      <strong>Contact your healthcare provider</strong> right
                      away if you notice these signs:
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="hidden--lg">
              <Image
                src="/images/features/coronavirus/mobile-close-contact.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="max-width content-padding">
                <NumberListItem number="1">Fever</NumberListItem>
                <NumberListItem number="2">Coughing</NumberListItem>
                <NumberListItem number="3">Shortness of breath</NumberListItem>
                <p>
                  If you have any of these symptoms,{' '}
                  <strong>call your doctor ahead of time</strong> to tell
                  them...
                </p>
                <p>
                  ...you've had <strong>close contact</strong> with someone with
                  the COVID-19 infection
                </p>
                <p>
                  ...to call the <strong>local</strong> or{' '}
                  <strong>state health department</strong>
                </p>
                <p>
                  This helps your provider prevent other people from being
                  infected.
                </p>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/close-contact-2.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
            <div className="max-width content-padding">
              <div className="stay-calm pad-horizontal--double pad-vertical">
                <p className="coronavirus-text--primary text--uppercase text--lg">
                  <strong>Stay Calm, Take Care</strong>
                </p>
                <p>
                  Remember, <strong>don't panic!</strong>
                </p>
                <p>
                  Before an announcement of an epidemic, take care of yourself{' '}
                  <strong>
                    just like you would during the annual flu season.
                  </strong>
                </p>
                <p>
                  <strong>Stay on top of the news</strong> and other credible
                  sources to keep updated on if you need to do anything
                  different.
                </p>
              </div>
              <h3 className="margin-top--quad">
                <span className="coronavirus-section-header">
                  Caring for Patients<sup>5</sup>
                </span>
              </h3>
              <p>
                If you or someone you know becomes sick with COVID-19 and does
                not require hospitalization or is told they are medically stable
                to go home,{' '}
                <strong>
                  here’s what you can do to take care and prevent further spread
                  of the disease
                </strong>{' '}
                for{' '}
                <strong>
                  patients<span className="hidden--until-lg"> (P)</span>
                </strong>{' '}
                and for{' '}
                <strong>
                  caregivers<span className="hidden--until-lg"> (C)</span>
                </strong>
                .
              </p>
            </div>
            <div className="hidden--lg">
              <div className="max-width content-padding">
                <p className="coronavirus-text--primary">
                  For <strong>Patients</strong>
                </p>
              </div>
              <Image
                src="/images/features/coronavirus/mobile-care-1.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="max-width content-padding">
                <NumberListItem number="1">
                  <strong>Stay home</strong> except to get medical care.
                </NumberListItem>
                <NumberListItem number="2">
                  Stay in a <strong>different room</strong> from other people in
                  your home and use a separate bathroom, if available.
                </NumberListItem>
                <NumberListItem number="3">
                  <strong>Call ahead</strong> before visiting your doctor.
                </NumberListItem>
                <NumberListItem number="4">
                  <strong>Wear a facemask.</strong>
                </NumberListItem>
                <NumberListItem number="5">
                  <strong>Cover coughs and sneezes</strong> with your elbow or a
                  tissue. Throw tissues in the trash and then wash your hands.
                </NumberListItem>
                <p>
                  Follow these precautions until you are fully recovered from
                  COVID-19, to prevent the spread of disease and ensure you get
                  better!
                </p>
              </div>
              <Image
                src="/images/features/coronavirus/mobile-care-2.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />

              <div className="max-width content-padding">
                <NumberListItem number="1">
                  Ensure shared spaces have <strong>good air flow.</strong>
                </NumberListItem>
                <NumberListItem number="2">
                  Only have <strong>people essential for providing care</strong>{' '}
                  for the person in the home. Keep the elderly and those likely
                  to get sick away from the patient.
                </NumberListItem>
                <NumberListItem number="3">
                  Clean all <strong>"high touch"</strong> surfaces.
                </NumberListItem>
                <NumberListItem number="4">
                  Understand and help the person{' '}
                  <strong>follow the healthcare provider's instructions</strong>{' '}
                  for medical care.
                </NumberListItem>
                <NumberListItem number="5">
                  <strong>Dispose of contaminated items</strong> in a lined
                  container before disposing them with other household waste.
                </NumberListItem>
                <NumberListItem number="6">
                  Wear at least a disposable{' '}
                  <strong>facemask and gloves</strong> when you touch or have
                  contact with the person's blood, body fluids, and/or
                  secretions.
                </NumberListItem>
                <NumberListItem number="7">
                  <strong>Wash laundry thoroughly.</strong> Immediately remove
                  and wash clothes or bedding that have any body fluids and/or
                  secretions or excretions on them.
                </NumberListItem>
                <p className="coronavirus-text--primary">
                  For <strong>Both Patients and Caregivers</strong>
                </p>
                <NumberListItem number="1">
                  <strong>Wash your hands often</strong> with soap and water for
                  20 seconds. If unable to and your hands are not visibly dirty,
                  use an alcohol-based hand sanitizer (>60% alcohol). Avoid
                  touching your face with unwashed hands.
                </NumberListItem>
                <NumberListItem number="2">
                  <strong>Avoid sharing</strong> household items.
                </NumberListItem>
                <NumberListItem number="3">
                  <strong>Monitor</strong> your symptoms, and{' '}
                  <strong>seek medical attention</strong> as soon as possible if
                  you notice any symptoms and/or if your illness worsens.
                </NumberListItem>
                <p>
                  <strong>
                    Healthcare providers and state/local health departments must
                    be consulted
                  </strong>{' '}
                  to get permission to end home isolation. They will give their
                  permission when the patient’s risk of spreading COVID-19 to
                  others is low; the timing differs from patient to patient.
                </p>
                <p>
                  <strong>Contact your state or local health department</strong>{' '}
                  if you still have any questions.
                </p>
              </div>
            </div>

            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/care.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <div className="max-width content-padding">
                <p>
                  <strong>
                    Stay home and follow these precautions until you are fully
                    recovered from COVID-19,
                  </strong>{' '}
                  to prevent the spread of disease and ensure that you get
                  better!
                </p>
                <p>
                  <strong>
                    Healthcare providers and state/local health departments must
                    be consulted
                  </strong>
                  to get permission to end home isolation. They will give their
                  permission when the patient’s risk of spreading COVID-19 to
                  others is low; the timing differs from patient-to-patient.
                </p>
                <p>
                  <strong>Contact your state or local health department</strong>{' '}
                  if you still have any questions.
                </p>
              </div>
            </div>
            <div className="coronavirus-prejudice pad-vertical">
              <div className="max-width content-padding">
                <h3 className="coronavirus-text--primary text--uppercase">
                  <span className="coronavirus-text--lg">
                    End the prejudice!<sup>4</sup>
                  </span>
                </h3>
                <p>
                  Asian people <strong>are not</strong> at a higher risk than
                  other people from becoming sick with COVID-19.
                </p>
                <p>
                  Only people who have{' '}
                  <strong>traveled to high-risk areas</strong> or{' '}
                  <strong>been in contact</strong> with someone confirmed or
                  suspected to have COVID-19 in the last 14 days are at a higher
                  risk of being infected.
                </p>
                <p className="text--bold">
                  Just because someone is of Asian descent does not mean that
                  they have COVID-19!
                </p>
              </div>
            </div>
            <div className="coronavirus-masks pad-vertical">
              <div className="max-width content-padding">
                <h3 className="coronavirus-text--primary text--uppercase">
                  Physicians wear masks,
                  <br />
                  <span className="coronavirus-text--lg">
                    but you shouldn't have to unless you are sick!<sup>1</sup>
                  </span>
                </h3>
                <p>
                  In light of the outbreak, two kinds of facemasks have been
                  flying off American shelves:
                </p>
                <div className="hidden--lg">
                  <Image
                    src="/images/features/coronavirus/mobile-masks-2.jpg"
                    className="image--max-width"
                    sizes={config.sizes.full}
                  />
                  <p>
                    Surgical masks filter the wearer's sprays from sneezes and
                    mucus from coughs, which will help{' '}
                    <strong>
                      prevent the spread of COVID-19 if you are sick,
                    </strong>{' '}
                    but <strong>does not effectively prevent catching</strong>{' '}
                    COVID-19.
                  </p>
                  <p>
                    N95 respirators filter out at least 95% of small airborne
                    particles. These will help{' '}
                    <strong>prevent against catching and spreading</strong>{' '}
                    COVID-19, but{' '}
                    <strong>
                      if it has a breathing valve, does not effectively prevent
                      the spread
                    </strong>{' '}
                    of COVID-19 if you are sick.
                  </p>
                </div>
                <div className="hidden--until-lg">
                  <div className="mask-half">
                    <h4 className="margin-bottom--none">Surgical Masks</h4>
                    <div className="text--center">
                      <Image
                        src="/images/features/coronavirus/surgical-mask-3.png"
                        className="image--max-width"
                        sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                      />
                    </div>
                    <div class="pro-con">
                      <img
                        className="pro-con-icon"
                        src={checkIcon}
                        alt="pros"
                      />
                      <p>
                        Will help <strong>prevent the spread</strong> of
                        COVID-19 if you are sick
                      </p>
                    </div>
                    <div class="pro-con">
                      <img className="pro-con-icon" src={xIcon} alt="cons" />
                      <p>
                        <strong>Does not effectively prevent catching</strong>{' '}
                        COVID-19
                      </p>
                    </div>
                  </div>

                  <div className="mask-half">
                    <h4 className="margin-top--quad margin-bottom--none">
                      N95 Respirators
                    </h4>
                    <div className="text--center">
                      <Image
                        src="/images/features/coronavirus/n95-respirator-3.png"
                        className="image--max-width n95"
                        sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                      />
                    </div>
                    <div class="pro-con">
                      <img
                        className="pro-con-icon"
                        src={checkIcon}
                        alt="pros"
                      />
                      <p>
                        Will help{' '}
                        <strong>prevent against catching and spreading</strong>{' '}
                        COVID-19
                      </p>
                    </div>
                    <div class="pro-con">
                      <img className="pro-con-icon" src={xIcon} alt="cons" />
                      <p>
                        <strong>
                          If it has a breathing valve, does not effectively
                          prevent the spread
                        </strong>{' '}
                        of COVID-19 if you are sick
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text--lg">
                  However,{' '}
                  <strong>
                    the CDC <i>does not</i> recommend healthy public citizens to
                    wear either of these masks.
                  </strong>
                </p>
                <p>
                  In order to maintain supply for the people who need it most,{' '}
                  <strong>please do not hoard masks.</strong> Only wear a
                  facemask <strong>if you are sick</strong> and need to go out
                  in public or are <strong>caring for someone</strong> who is
                  sick.
                </p>
                <p>
                  For now, the CDC recommends only{' '}
                  <strong>healthcare providers</strong> taking care of patients{' '}
                  <strong>known to be infected with COVID-19</strong> to wear a
                  N95 respirator or higher.
                </p>
                <p>
                  Just remember, if you do buy a mask,{' '}
                  <strong>be sensible</strong> and make sure it fits{' '}
                  <strong>you</strong> and <strong>your needs.</strong>
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="hero hero--small">
              <div className="hero__image-container">
                <BackgroundImage
                  src="/images/features/coronavirus/section-header-2.jpg"
                  className="hero__image"
                />
              </div>
              <div className="coronavirus-header-container">
                <div className="max-width content-padding">
                  <h2>Action Plan</h2>
                </div>
              </div>
            </div>
            <div
              className="coronavirus-action-plan"
              style={{
                backgroundImage: `url(${mediaUrl(
                  '/images/features/coronavirus/line-of-command.jpg'
                )}`,
              }}
            >
              <div className="max-width content-padding">
                <div className="hidden--lg">
                  <h3 className="margin-top--quad">
                    <span className="coronavirus-section-header">
                      How does the world respond to an epidemic?<sup>16</sup>
                    </span>
                  </h3>
                </div>
                <div className="hidden--until-lg">
                  <h3 className="coronavirus-text--primary coronavirus-text--lg coronavirus-text--regular">
                    How does the world respond to an epidemic?<sup>16</sup>
                  </h3>
                </div>
                <p>
                  An epidemic in the world is pretty scary. But the good news is
                  that we have a plan on how to deal with situations like these.
                </p>
                <div className="coronavirus-around-the-world-mobile">
                  <Image
                    src="/images/features/coronavirus/mobile-line-of-command.jpg"
                    className="image--max-width"
                    sizes={config.sizes.full}
                  />
                </div>
                <div className="coronavirus-around-the-world">
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      World Health Organization (WHO)
                    </span>
                    <br />
                    Their primary role is to direct international health and
                    provide global leadership and guidance on how to manage. Its
                    headquarters are located in Geneva, Switzerland.
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Each country has a Regional WHO Office
                    </span>
                    <br />
                    The US Regional Office is in in Washington, DC. Here, teams
                    can communicate with the WHO headquarters and get up-to-date
                    information about the emerging situation and consequently
                    manage the outbreak response.
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      The WHO uses its international network of collaborating
                      centers to collect information
                    </span>
                    <br />
                    In the US, the Centers for Disease and Control (CDC) in
                    Atlanta, Georgia collects international and national data,
                    analyzes that data, and synthesizes recommendations.
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Our world is more connected than ever
                    </span>
                    <br />
                    This means that there are plenty of ways for diseases to
                    spread to other people and places. There is a fine balance
                    between protecting borders by quarantine and overreactions
                    (that cause panic).
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Local Emergency Operations Centers
                    </span>
                    <br />
                    Day-to-day operations are managed by a local ground team.
                    These centers have a set of experts that work together to
                    control the local situation.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden--lg">
              <Image
                src="/images/features/coronavirus/mobile-local-ground-team-2.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
                alt="An illustration of a local grount team working together to manage the outbreak. The Incident Manager oversees the entire EOC, provides leadership to ensure coordination between the team, and is a liason to the regional office. Environment experts study the environmental causes related to the disease. Policy makers ensure we have the regulations and permissions necessary to control the situation and may create new ones as needed. Scientists analyze lab samples, research, and learn about the disease. Communications oversee how information is being disseminated to the public to ensure a strong voice. Epidemiologists analyze the distribution and patterns of the disease so that we can understand how it is affecting the population."
              />
              <div className="max-width content-padding">
                <NumberListItem number="1">
                  <strong>Communications</strong> oversee how information is
                  being disseminated to the public to ensure a strong unified
                  voice.
                </NumberListItem>
                <NumberListItem number="2">
                  <strong>Environment experts</strong> study the environmental
                  causes related to the disease.
                </NumberListItem>
                <NumberListItem number="3">
                  <strong>Epidemiologists</strong> analyze the distribution and
                  patterns of the disease so that we can understand how it is
                  affecting the population.
                </NumberListItem>
                <NumberListItem number="4">
                  <strong>Incident Manager</strong> oversees the entire EOC,
                  provides leadership to ensure coordination between the team,
                  and is a liason to the regional office.
                </NumberListItem>
                <NumberListItem number="5">
                  <strong>Policy makers</strong> ensure we have the regulations
                  and permissions necessary to control the situation and may
                  create new ones as needed.
                </NumberListItem>
                <NumberListItem number="6">
                  <strong>Scientists</strong> analyze lab samples, research, and
                  learn about the disease.
                </NumberListItem>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/local-ground-team.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
            </div>
            <div className="max-width content-padding">
              <div className="hidden--lg">
                <h3 className="margin-top--quad">
                  <span className="coronavirus-section-header">
                    So what does this look like in practice?
                  </span>
                </h3>
              </div>
              <div className="hidden--until-lg text--center">
                <h3 className="coronavirus-text--primary coronavirus-text--lg coronavirus-text--regular">
                  So what does this look like in practice?
                </h3>
              </div>
            </div>
            <Image
              src="/images/features/coronavirus/response-airport.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
            <div className="max-width content-padding">
              <div className="text--center margin-bottom--quad">
                <a
                  className="button button--sm"
                  href="https://github.com/goinvo/COVID19/raw/master/understandingcoronavirus_airports.pdf"
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className="max-width content-padding">
              <p>
                <span className="coronavirus-text--primary coronavirus-text--bold">
                  At the national level, our first line of defense is monitoring
                  ports-of-entry<sup>11,14</sup>
                </span>
                <br />
                Since the virus outbreak began outside of the US, the first line
                of defense is to manage places where the disease could enter.
                The CDC has ordered airlines to find out which passengers have
                traveled to China in the last 14 days and for major
                international airports to screen all incoming travelers.
              </p>
              <p className="margin-bottom--quad">
                The three-part process begins with Customs and Border Protection
                agents questioning travelers. Next, those at-risk are sent to a
                secondary screening by health workers where their temperature is
                taken. Then, those showing symptoms are evaluated and monitored
                by the CDC —which may involve a 14-day quarantine. Travelers who
                have been to China in the last 14 days are advised to stay home
                and monitor their symptoms.
              </p>
            </div>
            <Image
              src="/images/features/coronavirus/response-hospital-2.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
            <div className="max-width content-padding">
              <div className="text--center margin-bottom--quad">
                <a
                  className="button button--sm"
                  href="https://github.com/goinvo/COVID19/raw/master/understandingcoronavirus_hospitals.pdf"
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className="max-width content-padding">
              <p>
                <span className="coronavirus-text--primary coronavirus-text--bold">
                  If the virus enters a state, hospitals need to be prepared to
                  respond<sup>2,12,15</sup>
                </span>
                <br />
                If there is a suspected case of COVID-19 in the region,
                hospitals and local clinics should be trained in how to deal
                with the virus. Massachusetts General Hospital (MGH) is 1 of 10
                CDC designated “regional ebola and special pathogen treatment
                centers” in the US —meaning that they have expert knowledge in
                how to deal with something like an outbreak. Many other
                hospitals have turned to MGH as they update their emergency
                plans.
              </p>
              <p className="margin-top--double">
                <span className="coronavirus-text--primary coronavirus-text--bold">
                  The US has already taken aggressive quarantine measures
                  <sup>13</sup>
                </span>
                <br />
                After closing its borders to China, the US took strict measures
                to prevent the spread of the virus. HHS has been allocated $250
                million in emergency funds to help prevent the spread of
                disease. All people who have traveled to China within 14 days of
                arrival to the US have been ordered to be quarantined for 14
                days —this has led to more than 800 patients quarantined in 6
                military bases across the States so far.
              </p>
              <p>
                These military bases were chosen because they could comfortably
                house hundreds of people. Patients are served 3 catered meals a
                day and have access to a mental health counselor. They are
                encouraged to maintain 6 feet of distance at all times with
                other people, and they regularly have their symptoms checked.
              </p>
              <p className="margin-top--double">
                <span className="coronavirus-text--primary coronavirus-text--bold margin">
                  If a city shuts down, what happens?<sup>10,7</sup>
                </span>
                <br />
                In the US, it is very unlikely that the CDC would mandate an
                entire city be quarantined. US policy is actually to avoid
                location-based mass quarantines. Many experts have noted that
                the effectiveness of a mass quarantine for disease may not be
                worth the significant psychological and economic costs. However,
                in the case that a mass quarantine is ordered, cities have a
                plan to manage the situation.
              </p>
            </div>
            <Image
              src="/images/features/coronavirus/response-city-2.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
            <div className="max-width content-padding">
              <div className="text--center margin-bottom--quad">
                <a
                  className="button button--sm"
                  href="https://github.com/goinvo/COVID19/raw/master/understandingcoronavirus_cities.pdf"
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className="coronavirus-action-end">
              <BackgroundImage
                src="/images/features/coronavirus/mobile-conclusion.jpg"
                className="hidden--lg"
              />
              <BackgroundImage
                src="/images/features/coronavirus/conclusion.jpg"
                className="hidden--until-lg"
              />
              <div className="content">
                <div className="max-width content-padding margin-top--none">
                  <p>
                    However the situation is under control, and more extreme
                    measures like this have not been required to deal with
                    COVID-19 in the US.
                  </p>
                  <p>
                    For now, <strong>keep calm</strong>, follow regular flu
                    season <strong>preventative measures</strong>, and{' '}
                    <strong>keep up to date</strong> on the news for updates on
                    protocols and treatment development.
                  </p>
                  <p>
                    While you may not see it, a lot of people are working to
                    contain this virus so you can stay well.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="hero hero--small">
              <div className="hero__image-container">
                <BackgroundImage
                  src="/images/features/coronavirus/section-header-2.jpg"
                  className="hero__image"
                />
              </div>
              <div className="coronavirus-header-container">
                <div className="max-width content-padding">
                  <h2>
                    <span className="hidden--until-lg">Important </span>
                    Resources
                  </h2>
                </div>
              </div>
            </div>
            <div className="max-width content-padding margin-top--quad">
              <div className="coronavirus-logo">
                <div className="coronavirus-logo--left">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                  >
                    <Image
                      src="/images/features/coronavirus/logo-who.jpg"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </a>
                </div>
                <div className="hidden--until-lg">
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      World Health Organization
                    </span>
                    <br />
                    Information and guidance for the general publics.
                    <br />
                    Live update
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                    >
                      https://www.who.int/emergencies/diseases/novel-coronavirus-2019
                    </a>
                  </p>
                </div>
              </div>
              <div className="coronavirus-logo">
                <div className="coronavirus-logo--left">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.cdc.gov/coronavirus/2019-nCoV/"
                  >
                    <Image
                      src="/images/features/coronavirus/logo-cdc.jpg"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </a>
                </div>
                <div className="hidden--until-lg">
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Centers for Disease Control and Prevention
                    </span>
                    <br />
                    Information and guidance for the general publics and
                    healthcare professionals.
                    <br />
                    Live update
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.cdc.gov/coronavirus/2019-nCoV/"
                    >
                      https://www.cdc.gov/coronavirus/2019-nCoV/
                    </a>
                  </p>
                </div>
              </div>
              <div className="coronavirus-logo">
                <div className="coronavirus-logo--left">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.niaid.nih.gov/diseases-conditions/coronaviruses"
                  >
                    <Image
                      src="/images/features/coronavirus/logo-nih.jpg"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </a>
                </div>
                <div className="hidden--until-lg">
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      National Institute of Allergy and Infectious Diseases
                    </span>
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.niaid.nih.gov/diseases-conditions/coronaviruses"
                    >
                      https://www.niaid.nih.gov/diseases-conditions/coronaviruses
                    </a>
                  </p>
                </div>
              </div>
              <div className="coronavirus-logo">
                <div className="coronavirus-logo--left">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.fda.gov/emergency-preparedness-and-response/mcm-issues/novel-coronavirus-2019-ncov"
                  >
                    <Image
                      src="/images/features/coronavirus/logo-fda.jpg"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </a>
                </div>
                <div className="hidden--until-lg">
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      US Food and Drug Administration
                    </span>
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.fda.gov/emergency-preparedness-and-response/mcm-issues/novel-coronavirus-2019-ncov"
                    >
                      https://www.fda.gov/emergency-preparedness-and-response/mcm-issues/novel-coronavirus-2019-ncov
                    </a>
                  </p>
                </div>
              </div>
              <div className="coronavirus-logo">
                <div className="coronavirus-logo--left">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.massmed.org/COVID-19/"
                  >
                    <Image
                      src="/images/features/coronavirus/logo-mass-med.jpg"
                      className="image--max-width"
                      sizes={config.sizes.full}
                    />
                  </a>
                </div>
                <div className="hidden--until-lg">
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Massachusetts Medical Society
                    </span>
                    <br />
                    Provides latest guidance and up to date information on
                    COVID-19 from MA DPH and CDC.
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.massmed.org/COVID-19/"
                    >
                      http://www.massmed.org/COVID-19/
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="max-width text--center">
              <div className="margin-bottom">
                <a
                  className="button"
                  href="https://github.com/goinvo/COVID19/raw/master/understandingcoronavirus_booklet.pdf"
                >
                  Download Booklet PDF
                </a>
              </div>
              <a
                className="button"
                href="https://github.com/goinvo/COVID19/raw/master/understandingcoronavirus_poster.pdf"
              >
                Download Poster PDF
              </a>
            </div>
          </section>
          <section className="margin-top--quad">
            <div className="hero hero--small">
              <div className="hero__image-container">
                <BackgroundImage
                  src="/images/features/coronavirus/section-header-2.jpg"
                  className="hero__image"
                />
              </div>
              <div className="coronavirus-header-container">
                <div className="max-width content-padding">
                  <h2>References</h2>
                </div>
              </div>
            </div>
            <div className="max-width content-padding pad-vertical--double">
              <References
                hideTitle
                references={[
                  {
                    title:
                      "Andrew, S. (2020, January 28). There's been a run of surgical masks in the US because of the coronavirus scare. You don't need them, physicians say. Retrieved January 28, 2020",
                    link:
                      'https://www.cnn.com/2020/01/28/health/coronavirus-us-masks-prevention-trnd/index.html',
                  },
                  {
                    title:
                      'Bruce, M. (2020, January 31). 2019 Novel Coronavirus Response at the Brigham: 5 Things to Know',
                    link:
                      'https://bwhbulletin.org/2020/01/30/2019-novel-coronavirus-response-at-the-brigham-5-things-to-know/',
                  },
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020, January 29). Prevention, Treatment of Novel Coronavirus (2019-nCoV). Retrieved February 5, 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/about/prevention-treatment.html',
                  },
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020, January 28). What to do if you are sick with 2019 Novel Coronavirus (2019-nCoV). Retrieved January 31, 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/about/steps-when-sick.html',
                  },
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020, January 29). Preventing 2019-nCoV from Spreading to Others. Retrieved January 31, 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/hcp/guidance-prevent-spread.html#steps-for-caregivers',
                  },
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020, January 29). How 2019-nCoV Spreads. Retrieved February 6 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html',
                  },
                  {
                    title:
                      'Day, T., Park, A., Madras, N., Gumel, A., & Wu, J. (2006). When Is Quarantine a Useful Control Strategy for Emerging Infectious Diseases? American Journal of Epidemiology, 163(5), 479–485. doi: 10.1093/aje/kwj056',
                  },
                  {
                    title:
                      'Johns Hopkins CSSE. (2020 February 6). Coronavirus 2019-nCoV Global Cases by Johns Hopkins CSSE',
                    link:
                      'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
                  },
                  {
                    title:
                      'Li, Q., Zhu, N., Munster, V. J., Phan, L. T., & Chinese Center for Disease Control and Prevention. (2020, January 24). Early Transmission Dynamics in Wuhan, China, of Novel Coronavirus–Infected Pneumonia: NEJM. Retrieved January 31, 2020',
                    link:
                      'http://www.nejm.org/doi/full/10.1056/NEJMoa2001316?query=featured_home',
                  },
                  {
                    title:
                      'New Hampshire CDC. State of New Hampshire Interim Severe Acute Respiratory Syndrome (SARS) Epidemic Preparedness Plan, State of New Hampshire Interim Severe Acute Respiratory Syndrome (SARS) Epidemic Preparedness Plan (2004).',
                    link:
                      'https://www.dhhs.nh.gov/dphs/cdcs/sars/documents/sarsplan.pdf',
                  },
                  {
                    title:
                      'Pappas, S. (2020, February 4). Will airport screenings be enough to stop coronavirus in the US? Retrieved February 6, 2020.',
                    link:
                      'https://www.livescience.com/can-airport-screening-stop-coronavirus.html',
                  },
                  {
                    title:
                      'Shenoy, E. (2020, January 24). Monitoring coronavirus. Retrieved February 1, 2020',
                    link:
                      'https://www.massgeneral.org/news/hotline/HTL012420/monitoring-coronavirus',
                  },
                  {
                    title:
                      "Steinmetz, K. (2020, February 10). The U.S. Government Is Quarantining More Than 800 Americans. Here's Why That Very Rarely Happens. Retrieved February 11, 2020",
                    link:
                      'https://time.com/5780049/coronavirus-quarantines-united-states/',
                  },
                  {
                    title:
                      'Tate, C. (2020, February 10). U.S. has screened 17,000 passengers for coronavirus at 11 airports since Sunday. Retrieved February 11, 2020',
                    link:
                      'https://www.usatoday.com/story/travel/2020/02/07/coronavirus-u-s-passenger-screenings-11-airports/4693589002/',
                  },
                  {
                    title:
                      'Thielking, M., Loose, Y., Chu, J., Adam, Adsm, & Reach, J. (2020, February 7). U.S. hospitals call all hands on deck to brace for more coronavirus cases. Retrieved February 10, 2020',
                    link:
                      'https://www.statnews.com/2020/02/07/hospitals-harnessing-resources-brace-spike-coronavirus-cases/',
                  },
                  {
                    title:
                      'World Health Organization. (2017). Emergency Response Framework (2nd ed.). Geneva. Licence: CC BY-NC-SA 3.0 IGO.',
                  },
                  {
                    title:
                      'World Health Organization. (2020, January 23). Middle East respiratory syndrome coronavirus (MERS-CoV). Retrieved January 31, 2020.',
                    link: 'https://www.who.int/emergencies/mers-cov/en/',
                  },
                  {
                    title:
                      'Centers for Disease Control and Prevention. (2020,  February 13). Coronavirus Disease 2019 (COVID-19) Situation Summary. Retrieved February 14, 2020',
                    link:
                      'https://www.cdc.gov/coronavirus/2019-nCoV/summary.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fwhat-you-should-do.html#anchor_1580064337377',
                  },
                ]}
              />
            </div>
          </section>
          <section>
            <div className="hero hero--small">
              <div className="hero__image-container">
                <BackgroundImage
                  src="/images/features/coronavirus/section-header-2.jpg"
                  className="hero__image"
                />
              </div>
              <div className="coronavirus-header-container">
                <div className="max-width content-padding">
                  <h2>Authors</h2>
                </div>
              </div>
            </div>
            <div className="max-width max-width--md content-padding">
              <div className="pad-vertical--double">
                <Author name="Patricia Nguyen" />
                <Author name="Colleen Tang Poy" />
                <Author name="Parsuree Vatanasirisuk" />
                <Author name="Craig McGinley" />

                <h3 className="header--md">Contributors</h3>

                <Author name="Jen Patel" />
                <Author name="Meghana Karande" />
                <Author name="Juhan Sonin" />
              </div>
            </div>
          </section>
          <section>
            <div className="hero hero--small">
              <div className="hero__image-container">
                <BackgroundImage
                  src="/images/features/coronavirus/section-header-2.jpg"
                  className="hero__image"
                />
              </div>
              <div className="coronavirus-header-container">
                <div className="max-width content-padding">
                  <h2>Special Thanks</h2>
                </div>
              </div>
            </div>
            <div className="max-width max-width--md content-padding">
              <p className="text--gray margin-top--quad">
                Additional feedback provided by
              </p>
              <p className="text--gray pad-bottom--double">
                Jan Benway
                <br />
                Grace Cordovano
                <br />
                Dorian Freeman
                <br />
                Eric Moreno
                <br />
                Joey Nichols
                <br />
                Martin Pitt
                <br />
                Corinne Pritchard
                <br />
                James Rini
                <br />
                Ernst-Jan van Woerden
                <br />
              </p>
              <p className="text--gray text--sm margin-top--quad pad-bottom--double">
                Licensed under Creative Commons Attribution v3 | Created by
                GoInvo
                <br />
                <a href="mailto:coronavirus@goinvo.com">
                  Send us Feedback
                </a> |{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/goinvo/COVID19"
                >
                  Check out the GitHub repo
                </a>
              </p>
              <div className="text--center margin-top--quad margin-bottom--quad">
                <p>Have feedback? Reach us at</p>
                <a
                  className="text--xl text--bold corona-text--primary"
                  href="mailto:coronavirus@goinvo.com"
                >
                  coronavirus@goinvo.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default CoronavirusFeature
