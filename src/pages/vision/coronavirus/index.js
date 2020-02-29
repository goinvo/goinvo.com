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

const frontmatter = {
  metaTitle: 'Understanding the Novel Coronavirus (2019-nCoV) - GoInvo',
  metaDescription:
    'Learn about 2019-nCoV, what it means for U.S. residents, and how you can protect yourself. Updated as new information emerges.',
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
                <p>last update 25 February 2020</p>
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
                <strong>COVID-19</strong>, caused an outbreak of respiratory
                illness in Wuhan, China and has since spread to other parts of
                China and the world. There is still a lot that we don’t know
                about COVID-19 and the situation is evolving day-by-day.
              </p>
              <p>
                However, this isn’t the first time the world has dealt with a
                Coronavirus. Coronaviruses are a family of viruses that infect
                birds and mammals (this includes humans!). Typically, they cause
                mild respiratory symptoms similar to the common cold, but in
                some cases—like in SARS or MERS—it can lead to death, often in
                those that are already immunocompromised.
              </p>
              <h4>
                Quick look : How does COVID-19 compare to the other
                coronaviruses?
              </h4>
              {
                // TODO: Graph in code
              }
              <Image
                src="/images/features/coronavirus/graph.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
              />
              <h3 className="margin-top--quad">
                <span className="coronavirus-section-header">
                  Timeline of the outbreak<sup>18</sup>
                </span>
              </h3>
            </div>
            <Image
              src="/images/features/coronavirus/timeline.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
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
                  src="/images/features/coronavirus/mobile-spread-1.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="1">
                  Through the air by coughing and sneezing. People who are
                  nearby could inhale those droplets into their lungs.
                </NumberListItem>
                <Image
                  src="/images/features/coronavirus/mobile-spread-2.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="2">
                  Through close contact, at about 6 feet, including touching,
                  shaking hands.
                </NumberListItem>
                <Image
                  src="/images/features/coronavirus/mobile-spread-3.jpg"
                  className="image--max-width"
                  sizes={config.sizes.full}
                />
                <NumberListItem number="3">
                  It is still unclear if you can get the COVID-19 by touching an
                  object or surface contaminated by the virus, then touching
                  your mouth, nose, or eyes.
                </NumberListItem>
              </div>
            </div>
            <div className="hidden--until-lg">
              <Image
                src="/images/features/coronavirus/spread.jpg"
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
                  <h2>Your Part</h2>
                </div>
              </div>
            </div>
            <div className="max-width content-padding">
              <p>
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
                COVID-19 has not become an epidemic in America yet,
                <br />
                <strong>
                  and here’s what you can do to prevent it from becoming one:
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
                  <strong>Stay home</strong> when you are sick.
                </NumberListItem>
                <NumberListItem number="2">
                  <strong>Wash your hands</strong> often with soap and warm
                  water. If unable to wash your hands, use alcohol-based hand
                  sanitizer.
                </NumberListItem>
                <NumberListItem number="3">
                  <strong>Avoid close contact</strong> with people who are sick.
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
                  often and <strong>avoid</strong> nonessential travel to China.
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
                </p>
                <p>
                  - <strong>Monitor your health</strong> starting for at least{' '}
                  <strong>14 days</strong> after your last contact with the
                  infected person.
                </p>
                <p>
                  - Watch for these signs and symptoms
                  <br />
                  <strong>Contact your healthcare provider</strong> right away
                  if you notice these signs:
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
                  <strong>*call your doctor ahead of time</strong> to tell
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
                src="/images/features/coronavirus/close-contact.jpg"
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
                  Before an announcement of an epidemic, take care of yourself
                  just like you would during the annual flu season.
                </p>
                <p>
                  Stay on top of the news and other credible sources to keep
                  updated on if you need to do anything different.
                </p>
              </div>
              <h3 className="margin-top--quad">
                <span className="coronavirus-section-header">
                  Caring for Patients<sup>5</sup>
                </span>
              </h3>
              <p>
                If you/someone you know becomes sick with COVID-19 and does not
                require hospitalization or is determined medically stable to go
                home,{' '}
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
                  <strong>*Call ahead</strong> before visiting your doctor.
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
                  COVID-19, to prevent the spread of disease and ensure that you
                  get better!
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
                  20 seconds. If unable and your hands are not visibly dirty,
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
                    Healthcare providers, and state and local health departments
                    must be consulted
                  </strong>{' '}
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
                    Healthcare providers, and state and local health departments
                    must be consulted
                  </strong>{' '}
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
                  Only people who have <strong>traveled to China</strong>, or{' '}
                  <strong>been in contact</strong> with someone confirmed or
                  suspected to have COVID-19 in the last 14 days are at a higher
                  risk of being infected.
                </p>
                <p>
                  <strong>
                    Just because someone is of Asian descent does not mean that
                    they have COVID-19!
                  </strong>
                </p>
              </div>
            </div>
            <div className="coronavirus-masks pad-vertical">
              <div className="max-width content-padding">
                <h3 className="coronavirus-text--primary text--uppercase">
                  Physicians wear masks,
                  <br />
                  <span className="coronavirus-text--lg">
                    but you shouldn't have to!<sup>1</sup>
                  </span>
                </h3>
                <p>
                  In light of the outbreak, two kinds of facemasks have been
                  flying off American shelves:
                </p>
                <div className="hidden--lg">
                  <Image
                    src="/images/features/coronavirus/mobile-masks.jpg"
                    className="image--max-width"
                    sizes={config.sizes.full}
                  />
                  <p>
                    While surgical masks filter sprays from sneezes and mucus
                    from coughs, which is helpful for preventing the sharing of
                    germs if you are sick.
                  </p>
                  <p>
                    N95 respirators filter out 95% of small particles, the kind
                    of particles airborne viruses are transmitted through.
                  </p>
                </div>
                <div className="hidden--until-lg">
                  <p className="margin-bottom--none">
                    <strong>Surgical Masks</strong>
                  </p>
                  <div className="text--center">
                    <Image
                      src="/images/features/coronavirus/surgical-mask.png"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                  <p>
                    Helpful for preventing the sharing of germs if you are sick,
                    but are <strong>not completely effective</strong> against
                    airborne viruses that are transmitted through smaller
                    particles.
                  </p>
                  <p className="margin-bottom--none">
                    <strong>N95 Respirators</strong>
                  </p>
                  <div className="text--center">
                    <Image
                      src="/images/features/coronavirus/n95-respirator.png"
                      className="image--max-width"
                      sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                    />
                  </div>
                  <p>
                    Filters out at least 95% of airborne particles, making it
                    better at protecting against airborne viruses.
                  </p>
                </div>
                <p>
                  However,{' '}
                  <strong>
                    the CDC does not recommend public citizens to wear either of
                    these masks!
                  </strong>
                </p>
                <p>
                  For now, the CDC recommends only{' '}
                  <strong>healthcare providers</strong> taking care of patients{' '}
                  <strong>known to be infected with COVID-19</strong> to wear a
                  N95 respirator.
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
                      World Health Organization
                    </span>
                    <br />
                    Primary role is to direct international health and provide
                    global leadership and guidance on how to manage. Its
                    headquarters are located in Geneva, Switzerland.
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Each country has a Regional WHO office
                    </span>
                    <br />
                    In the US, our Regional in Washington, DC. Here, teams can
                    communicate with the WHO headquarters and get up-to-date
                    information about the emerging situation and consequently
                    manage the outbreak response.
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      WHO uses its international network of collaborating
                      centers to collect information
                    </span>
                    <br />
                    In the US, the Centers for Disease and Control in Atlanta,
                    Georgia collects international and national data, analyzes,
                    and synthesizes recommendations.
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Our world is more connected than ever
                    </span>
                    <br />
                    This means that there are plenty of ways for diseases to
                    spread to other people and places. There is a fine balance
                    between protecting borders by quarantine and overreactions
                    (that cause panics).
                  </p>
                  <p>
                    <span className="coronavirus-text--primary coronavirus-text--bold">
                      Local Emergency Operations Centers
                    </span>
                    <br />
                    Day-to-day operations are managed by a the local ground
                    team. These centers have a set of experts that work together
                    to control the local situation.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden--lg">
              <Image
                src="/images/features/coronavirus/mobile-local-ground-team.jpg"
                className="image--max-width"
                sizes={config.sizes.full}
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
                  href={mediaUrl(
                    '/pdf/vision/coronavirus/Airport%20Response.pdf'
                  )}
                >
                  Download as PDF
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
                traveled to China in the last 14 days and major international
                airports to screen all incoming travelers.
              </p>
              <p className="margin-bottom--quad">
                The three-part process begins with Custom and Border Protection
                agents questioning travelers. Next, those at-risk are sent to a
                secondary screening by health workers where their temperature is
                taken. Then, those showing symptoms are evaluated and monitored
                by the CDC— which may involve a 14-day quarantine. Travelers who
                have been to China in the last 14 days are advised to stay home
                and monitor their symptoms.
              </p>
            </div>
            <Image
              src="/images/features/coronavirus/response-hospital.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
            <div className="max-width content-padding">
              <div className="text--center margin-bottom--quad">
                <a
                  href={mediaUrl(
                    '/pdf/vision/coronavirus/Hospital%20Response.pdf'
                  )}
                >
                  Download as PDF
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
                If there is a suspected case of the COVID-19 in the region,
                hospitals and local clinics should be trained in how to deal
                with the virus. Mass General Hospital is 1 of 10 CDC designated
                “regional ebola and special pathogen treatment centers” in the
                US—meaning that they have expert knowledge in how to deal with
                something like an outbreak. Many other hospitals have turned to
                MGH as they update their emergency plans.
              </p>
              <p className="margin-top--quad">
                <span className="coronavirus-text--primary coronavirus-text--bold">
                  The US has already taken aggressive quarantine measures
                  <sup>13</sup>
                </span>
                <br />
                After closing its borders to China, the US took strict measures
                to prevent the spread of the virus. HHS has been allocated $250
                million in emergency funds to help prevent the spread of
                disease. The US has ordered all people who have traveled to
                China in the last 14 days to be quarantined for 14 days—this has
                led to 800 patients quarantined in 6 military bases across the
                States so far.
              </p>
              <p>
                These military bases were chosen because they could comfortably
                house hundreds of people. Patients are served 3 catered meals a
                day and have access to a mental health counselor. They are
                encouraged to keep 6 feet of distance at all time with other
                people, and they regularly have their symptoms checked.
              </p>
              <p>
                <span className="coronavirus-text--primary coronavirus-text--bold">
                  But what does happen when a city shuts down?<sup>10,7</sup>
                </span>
                <br />
                In the US, it is very unlikely that the CDC would mandate an
                entire city be quarantined. US policy is actually to avoid
                place-based mass quarantines. Many experts have noted that the
                effectiveness of a mass quarantine for disease may not be worth
                the significant psychological and economic costs. However, in
                the case that a mass quarantine is ordered, cities have a plan
                manage the situation.
              </p>
            </div>
            <Image
              src="/images/features/coronavirus/response-city.jpg"
              className="image--max-width"
              sizes={config.sizes.full}
            />
            <div className="max-width content-padding">
              <div className="text--center margin-bottom--quad">
                <a
                  href={mediaUrl('/pdf/vision/coronavirus/City%20Response.pdf')}
                >
                  Download as PDF
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
                <div className="max-width content-padding">
                  <p>
                    However, more extreme measures <strong>have not</strong>{' '}
                    been required to deal with Covid-19 in the US.
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
                      Food and Drug Administration
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
                    COVID19 from MA DPH and CDC.
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
              <a
                className="button"
                href={mediaUrl(
                  '/pdf/vision/coronavirus/Understanding%20the%202019%20Novel%20Coronavirus.v4.pdf'
                )}
              >
                Download PDF
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

                <h3 className="header--md">Contributors</h3>

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
                GoInvo |{' '}
                <a href="mailto:coronavirus@goinvo.com">Send us Feedback</a>
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
