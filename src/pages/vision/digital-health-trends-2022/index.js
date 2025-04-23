import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Digital Health Trends to Watch - GoInvo',
  metaDescription:
    'GoInvo breaks down significant digital health trends you should watch for.',
  heroImage:
    '/images/features/digital-health-trends-2022/digital-health-trends-2022-hero.jpg',
}

class DigitalHealthTrendsFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="digital-health-trends-2022-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">Digital Health Trends to Watch</h1>

              <p>
                We're at a major inflection point for digital health. The
                pandemic has created a unique set of factors that are
                accelerating existing trends in digital health and forcing
                change. While digital transformation in healthcare has happened
                slowly compared to other industries — the fax is making its last
                stand supporting healthcare communications — there's no turning
                back now.
              </p>

              <p>
                The ongoing COVID pandemic has nearly exhausted the American
                healthcare system. Healthcare workers are leaving the industry
                in droves — down by 298,000 since February 2020, according to
                the{'  '}
                <a
                  href="https://www.bls.gov/news.release/archives/empsit_04012022.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bureau of Labor Statistics March 2022 report
                </a>
                .
              </p>

              <p>
                The U.S. already has a significant shortage of doctors and
                nurses — a problem that is not going away anytime soon.{'  '}
                <a
                  href="https://www.aamc.org/news-insights/press-releases/new-aamc-report-confirms-growing-physician-shortage"
                  target="_blank"
                  rel="noreferrer"
                >
                  A report from the AAMC (Association of American Medical
                  Colleges)
                </a>{' '}
                indicates that by 2033, the U.S. could see a projected shortfall
                of 54,100 - 139,000 doctors in primary and specialty care.
              </p>

              <p>
                Add to this an aging population — by 2030, 1 of 5 Americans will
                be at retirement age,{'  '}
                <a
                  href="https://www.census.gov/newsroom/press-releases/2018/cb18-41-population-projections.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  according to the U.S. Census Bureau
                </a>{' '}
                — and a lack of options for primary care, especially in rural
                areas, and you have the potential for a healthcare crisis of
                epic proportions.
              </p>

              <p>
                The possibility for digital health solutions to mitigate some of
                these problems, among many other healthcare issues, is
                significant and much needed. These five digital health trends
                are patient-centric, including but not focused solely on a
                particular set of digital health technologies — mobile
                applications, telehealth, artificial intelligence, embedded
                sensors, connected medical devices, and the like. These trends
                are in many ways related and connected, but they do not
                encompass the entirety of digital health. They all speak, in
                different ways, to the future of care delivery and emerging
                models for delivering care at home via a virtual environment or
                outpatient care in a local, non-traditional setting. These
                digital health solutions hold the promise of better quality of
                care — increased accessibility, cost efficiency, and perhaps
                most importantly, improved patient experience and better
                outcomes.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/digital-health-trends-2022/1-digital-health-at-home-a.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <h2 className="header--lg margin-top margin-bottom--half">
                1. The race for digital health at home
              </h2>
              <p>
                Possibly the most exciting digital health trend is one that's
                still very early in the adoption curve. Digital health in the
                home will continue its bumpy progression towards adoption in
                2022 onward as more companies attempt to leverage and expand
                their existing, connected footprint in your home with new
                software and service layers focused on healthcare.
              </p>
              <p>
                Every company making products for the home — from bathroom
                fixtures to kitchen appliances to televisions — is now
                potentially a digital health company or aspires to be a part of
                the IoT (Internet of Things) network supporting your health.
                {'  '}
                <a
                  href="https://www.theverge.com/2022/1/4/22865640/lg-tv-telehealth-platform-independa"
                  target="_blank"
                  rel="noreferrer"
                >
                  LG, for instance, has added a health platform to its smart TV
                  models to enable telehealth visits and health education
                </a>
                .
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                The bathroom of the future
              </h4>
              <p>
                The COVID pandemic has changed what people expect of their
                homes, accelerating the trend towards multi-functional connected
                spaces that support a variety of living and working activities
                within them. In particular,{'  '}
                <a
                  href="https://www.wsj.com/articles/high-tech-bathroom-11642720799"
                  target="_blank"
                  rel="noreferrer"
                >
                  the vision of the bathroom of the future is continually
                  evolving
                </a>
                . Already equipped with advanced devices to create a spa-like
                atmosphere, the modern bathroom is well on its way to fully
                {'  '}
                <a
                  href="https://www.goinvo.com/features/from-bathroom-to-healthroom"
                  target="_blank"
                  rel="noreferrer"
                >
                  transforming into a "health room" with the integration of more
                  sophisticated, sensor-driven, connected devices that monitor
                  our daily health metrics status
                </a>
                .
              </p>
              <p>
                There will be increasing competition to be the home health hub,
                or at least one of many, as telehealth, fitness, and connected
                medical devices converge on a health-focused lifestyle
                integrated into your residence. In addition, adoption of these
                technologies will be driven by the need for healthcare as more
                Americans desire to age in place, remaining in their homes
                rather than moving elsewhere.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/digital-health-trends-2022/3-virtualizing-primary-care-a.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <h2 className="header--lg margin-top margin-bottom--half">
                2. Advances in remote patient monitoring
              </h2>
              <p>
                Advances in remote patient monitoring will make it not only
                possible, but routine to connect the hospital to at-home care.
                Services for remote care and monitoring will overlay and enhance
                digital health at home, collecting data from a patient via
                sensors and other digital technologies, like smart watches,
                connected medical devices, and{'  '}
                <a
                  href="https://www.goinvo.com/work/infobionic-heart-monitoring"
                  target="_blank"
                  rel="noreferrer"
                >
                  on-body sensors
                </a>
                , and transmitting it securely to a provider for assessment and
                recommendations. This can help families and health providers
                monitor chronic conditions or symptoms.
              </p>
              <p>
                Additionally, remote monitoring allows patients to more easily
                participate in clinical trials, opening up recruitment to more
                diverse patient populations. Digital platforms improve
                management and communication with patients in the home, enabling
                better patient engagement and retention for clinical trials.
                However, adoption is limited so far.
              </p>
              <p>
                We can already see the strong connection between those companies
                that will supply the infrastructure for digital health at home
                and patient monitoring. For instance,{'  '}
                <a
                  href="https://www.cnbc.com/2021/10/12/best-buy-is-acquiring-british-health-care-company-current-health.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  technology retailer Best Buy recently acquired a UK company
                  specializing in remote patient monitoring. Best Buy Health
                </a>{' '}
                will partner with providers to customize end-to-end care
                delivery solutions.
              </p>
              <p>
                <a
                  href="https://www.amazon.com/Alexa-Together/b?node=21390531011"
                  target="_blank"
                  rel="noreferrer"
                >
                  Alexa Together
                </a>
                {'  '}
                is Amazon's endeavor into remote monitoring and assistance for
                the family caring for their elderly relatives. Amazon
                incorporates AI-driven remote healthcare monitoring —
                particularly fall detection — care team tools to support the
                person aging in place, and an urgent response team to assist
                when needed.
              </p>
              <p>
                Remote patient care and monitoring have many benefits, including
                deep personalization for each patient. These tools can reduce
                the use of hospital resources, and be used for both outpatient
                recovery and proactive management of patients dealing with
                long-term conditions. For chronic disease monitoring for
                conditions such as diabetes, remote patient monitoring will
                integrate with personalized health plans — recommendations for
                diet, exercise, etc.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/digital-health-trends-2022/5-managing-our-health-data-a.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <h2 className="header--lg margin-top margin-bottom--half">
                3. Virtualizing primary care
              </h2>
              <p>
                We're at the start of a significant systemic shift to new care
                delivery models. Telehealth adoption took a big step forward
                during the pandemic, enabling virtual visits when in-person
                interactions were difficult, if not impossible, due to COVID.
                According to a research report from the HHS Office of the
                Assistant Secretary for Planning and Evaluation,{'  '}
                <a
                  href="https://aspe.hhs.gov/sites/default/files/documents/a1d5d810fe3433e18b192be42dbf2351/medicare-telehealth-report.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Medicare Beneficiaries' Use of Telehealth in 2020: Trends by
                  Beneficiary Characteristics and Location
                </a>
                , "the number of Medicare fee-for-service (FFS) beneficiary
                telehealth visits increased 63-fold in 2020, from approximately
                840,000 in 2019 to nearly 52.7 million in 2020."
              </p>
              <p>
                Virtual primary care is convenient and saves time for patients
                and providers. You no longer need to see a doctor in person for
                many types of interactions. In fact,{'  '}
                <a
                  href="https://www.goinvo.com/vision/virtual-care/"
                  target="_blank"
                  rel="noreferrer"
                >
                  half of face-to-face clinical office visits can be conducted
                  virtually
                </a>
                .
              </p>
              <p>
                As patients adopt the technology and integrate it into their
                lives, telemedicine can reduce barriers and increase access,
                especially important for chronic disease management. With a lack
                of healthcare options, especially in rural areas of the U.S.,
                virtualizing primary care will make a significant difference in
                overall health. Telehealth providers like{' '}
                <a
                  href="https://www.wellviasolutions.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WellVia
                </a>
                {'  '}
                are pioneering virtualized primary care while companies like
                {'  '}
                <a
                  href="https://www.onemedical.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  One Medical
                </a>{' '}
                take a hybrid approach, with offerings that combine telehealth
                and in-person care.
              </p>
              <p>
                However, integrating telehealth visits into regular, replicable
                outpatient routines as a mainstay of primary care interactions
                will be a journey that progresses in fits and starts. As the
                pandemic begins to wane and in-person visits are more feasible,
                the longevity of telehealth as a regular service for healthcare
                will be tested.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/digital-health-trends-2022/4-shift-to-local-a.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <h2 className="header--lg margin-top margin-bottom--half">
                4. The shift to local health service delivery
              </h2>
              <p>
                Much has been made of the need to shift the "front door to
                health". Healthcare is no longer confined to the doctor's
                office, hospital, or urgent care clinics, but has expanded into
                non-traditional settings like retail and pharmacy. As we’ve
                seen, the overstressed American healthcare system, further taxed
                by the COVID pandemic, lacks options for primary care,
                especially in rural areas. In response, retail outlets and
                pharmacies have begun to incorporate health services into their
                offerings for basic healthcare consultations and immunizations.
                CVS Health, Walgreens, RiteAid, and Walmart are leveraging their
                existing footprint in communities{'  '}
                <a
                  href="https://www.jaxdailyrecord.com/article/walgreens-walmart-adding-medical-clinics"
                  target="_blank"
                  rel="noreferrer"
                >
                  to provide access to local, convenient care through a
                  combination of in-person services and telehealth
                </a>
                .
              </p>
              <p>
                Walmart, for instance, is investing heavily in building its
                network of clinics that offer primary care services and operate
                within the company's existing stores, with 105 locations
                currently available and more in development.
              </p>
              <p>
                These clinics, co-located with retail and pharmacy, are
                particularly helpful for patients managing chronic conditions,
                who can benefit from more frequent visits with a healthcare
                provider and{'  '}
                <a
                  href="https://www.goinvo.com/work/hgraph"
                  target="_blank"
                  rel="noreferrer"
                >
                  regular tracking and analysis of their health data
                </a>
                . It's local and less expensive. Further, these retail-based
                primary care clinics can combine in-person services and
                lower-cost telehealth consultations to deliver care at value to
                patients when and where they need it.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/digital-health-trends-2022/2-advances-in-remote-a.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <h2 className="header--lg margin-top margin-bottom--half">
                5. Managing our health data
              </h2>
              <p>
                Our{'  '}
                <a
                  href="https://www.goinvo.com/vision/who-uses-my-health-data/"
                  target="_blank"
                  rel="noreferrer"
                >
                  health data
                </a>{' '}
                is growing at a remarkable rate. With the increased prevalence
                of digital health services — from telehealth to connected
                medical devices to remote patient monitoring to sensors embedded
                in the home — and the ongoing usage of digital health records,
                EHRs, PHRs, etc., the amount of health data contained in silos
                across hospital records, primary care, and personal devices, is
                unprecedented.
              </p>
              <p>
                Ironically, we're simultaneously experiencing a data glut and
                yet have limited access to that information — with patient data
                stranded in various places and no one way to retrieve and manage
                it. Realizing the promise of digital health requires that we
                address this issue. The slow march to solve this problem of
                managing patient data across multiple sources will influence and
                shape the digital health landscape for years to come.
              </p>
              <p>
                The healthcare industry struggles with data. We throw out or
                abandon too much of our health data, whether it be stored
                readings from an at-home blood pressure cuff, heart rate data
                from our smart watch, or test results we get from an urgent care
                clinic. The stored data is often owned by someone else and not
                parseable when we receive it. The promise of digital
                transformation has been hindered by siloed, hoarded, and
                ultimately stranded data, limiting the use of patient data for
                prevention, early diagnosis, and research.
              </p>
              <p>
                And the healthcare data deluge will only continue. As social
                determinants of health integrate into healthcare evaluation and
                decision making, our day-to-day life data — from our food
                purchases to our leisure activities — will increasingly be
                considered a part of our health data.
              </p>
              <p>
                Universally accepted and adopted data standards supporting
                interoperability between electronic health records, patient data
                use agreements that facilitate personal access and control, and
                patient-centric software that allows for{'  '}
                <a
                  href="https://goinvo.com/vision/own-your-health-data/"
                  target="_blank"
                  rel="noreferrer"
                >
                  patient data management
                </a>
                , are all examples of ways in which we'll move along the path, a
                trend that is often under-appreciated.
              </p>
              <p>
                There is a massive opportunity in patient data management of
                their own medical records and health data. We'll begin seeing
                the potential, for instance, in the emergence of new digital
                services, allowing patients to more easily move medical records
                from one hospital to another.
              </p>
              <p>
                But, it will be a long road to travel before we can{'  '}
                <a
                  href="https://www.statnews.com/2021/11/15/its-time-for-individuals-not-doctors-or-companies-to-own-their-health-data/"
                  target="_blank"
                  rel="noreferrer"
                >
                  manage our health data with confidence and ease
                </a>
                .
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our newsletter."
                submitButtonText="Subscribe"
              />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Author</h2>
                <Author name="Jonathan Follett" />
                <div className="pad-vertical--double">
                  <h3 className="header--md">Contributors</h3>
                  <p>
                    Huahua Zhu
                    <br />
                    Jen Patel
                    <br />
                    Sharon Lee
                    <br />
                    Juhan Sonin
                    <br />
                    Eric Benoit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DigitalHealthTrendsFeature
