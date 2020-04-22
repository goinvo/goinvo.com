import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import Author from '../../../components/author'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Physician Burnout: The Silent Killer - GoInvo',
  metaDescription: '',
  heroImage: '/images/features/burnout/hero.jpg',
}

class ConsentFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="consent-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">
                Physician Burnout: The Silent Killer
              </h1>

              <p>
                Physician burnout is a public health crisis.
                <sup>
                  <a href="#references">1</a>
                </sup>{' '}
                We’re losing physicians to burnout, drop out, and suicide at a
                rate of <strong>28 to 40 per 100,000</strong>. By{' '}
                <strong>2032</strong> with the status quo we will have{' '}
                <strong>2.37</strong> physicians to every <strong>1000</strong>{' '}
                patients, and with early retirement that number will drop even
                further to <strong>2.25</strong> physicians per{' '}
                <strong>1000</strong> patients. This is a respective 4% and 8%
                decline in the physician-to-population ratio (declining from
                2.47 physicians per 1000 patients in 2017).
              </p>
              <p>
                Physician burnout is a problem that has been recognized for
                decades. More than half of physicians experience symptoms of
                burnout, a rate nearly double of workers in other professions
                after taking into account hours, work, age, sex, and other
                factors.
                <sup>
                  <a href="#references">2</a>
                </sup>{' '}
                Burnout is identified in physicians as emotional exhaustion,
                depersonalization, cynicism, and job dissatisfaction,
                <sup>
                  <a href="#references">1</a>
                </sup>{' '}
                and can lead to physical exhaustion, feelings of failure, social
                isolation, conflicts with colleagues, poor clinical performance,
                depression, and substance abuse or self-medication.
                <sup>
                  <a href="#references">14</a>
                </sup>
              </p>

              <h2 className="header--lg margin-top--quad margin-bottom--half">
                Covid-19 is intensifying the burnout crisis.
              </h2>
              <p>
                Pre-covid, we began 2020 with unprecedented rates of clinical
                depression and suicide in the physician and, in fact, the entire
                US healtcare workforce. With the Covid-19 global pandemic making
                waves through the world’s healthcare systems, more healthcare
                workers than ever are on the front-lines, putting themselves at
                risk to save lives and beat this virus. They are working long
                hours, with a growing number of cases each day, with limited
                (and dwindling) resources at hand. They often have no personal
                protective equipment (PPE) or are asked to reuse equipment
                designed for single use. Healthcare workers expressing concerns
                and advocating for safety are silenced and often retaliated
                against, by way of termination of employment, when they do speak
                up. Eric Topol, MD sums it up best in a perspective piece,{' '}
                <a
                  href="https://www.medscape.com/viewarticle/927811#vp_1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  US Betrays Healthcare Workers in Coronavirus Disaster
                </a>
                , published in Medscape.
              </p>
              <div className="research-section">
                <div className="research-chunk">
                  <div className="research-graph"></div>
                  <div className="research-text">
                    <h4 className="header--sm margin-bottom--none">
                      National Burnout Rate
                    </h4>
                    <p className="margin-top--none">
                      The 2013 Medscape Lifestyle Report, based on surveyed
                      responses of over <strong>20,000</strong> physicians,
                      reported a nationwide burnout rate of <strong>40%</strong>
                      ,
                      <sup>
                        <a href="#references">3</a>
                      </sup>{' '}
                      yet the 2017 report found a rate of <strong>51%</strong>,
                      <sup>
                        <a href="#references">4</a>
                      </sup>{' '}
                      a staggering <strong>25%</strong> increase over four
                      years.
                    </p>
                  </div>
                </div>
                <div className="research-chunk">
                  <div className="research-graph"></div>
                  <div className="research-text">
                    <h4 className="header--sm margin-bottom--none">
                      Depression & Suicide Report
                    </h4>
                    <p className="margin-top--none">
                      Per a 2019 Medscape National Physician Burnout, Depression
                      & Suicide Report, <strong>66%</strong> of physicians
                      reported feeling burned out (44%), colloquial depression
                      (11%), or clinical depression (11%).
                    </p>
                  </div>
                </div>
                <div className="research-chunk">
                  <div className="research-graph"></div>
                  <div className="research-text">
                    <h4 className="header--sm margin-bottom--none">
                      Burnout in Academic Physicians
                    </h4>
                    <p className="margin-top--none">
                      In an academic medical faculty practice study administered
                      to <strong>1,774</strong> physicians in 2014 and{' '}
                      <strong>1,882</strong> physicians in 2017 burnout
                      increased from <strong>40.6%</strong> (720) to{' '}
                      <strong>45.6%</strong> (858).
                      <sup>
                        <a href="#references">5</a>
                      </sup>
                    </p>
                  </div>
                </div>
                <div className="research-chunk">
                  <div className="research-graph"></div>
                  <div className="research-text">
                    <h4 className="header--sm margin-bottom--none">
                      Physicians with Symptoms
                    </h4>
                    <p className="margin-top--none">
                      A 2018 Survey of America’s Practice Patterns and
                      Perspective conducted by Merritt Hawkins found that 78% of
                      over 8,000 physicians experience symptoms of burnout at
                      least once in their career.
                      <sup>
                        <a href="#references">6</a>
                      </sup>{' '}
                      Typically, once experienced, symptoms of burnout will
                      return over the course of a career.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="header--lg margin-top--quad margin-bottom--half">
                Research does not say it all
              </h2>
              <p>
                Although a recent study published in Mayo Clinic Proceedings
                <sup>
                  <a href="#references">7</a>
                </sup>{' '}
                reported a decline in physician burnout at a rate below 50%, its
                optimistic conclusions are premature. It concluded “burnout and
                satisfaction with Work Life Index (WLI) among US physicians has
                improved between 2014 and 2017. This trend is reason for
                optimism and suggests that progress is both possible and under
                way.” As of 2016 there were over <strong>950,000</strong>{' '}
                actively licensed physicians in US.
                <sup>
                  <a href="#references">8</a>
                </sup>{' '}
                In the study, <strong>only 5,207</strong> physicians responded,
                representing a mere 0.54% of these physicians. Physicians
                working the front lines of care, especially female physicians,
                are at a greater risk for burnout; yet these physicians were
                underrepresented. The majority of respondents were male, and
                only 23.8% physicians surveyed were in primary care. Evidence
                shows that female physicians, as well as those in primary and
                urgent care, are more at-risk for showing signs of burnout.
                Additionally, the study only captured a single snapshot rather
                than a longitudinal measurement of burnout. Despite the report
                of improvement in WLI satisfaction regarding burnout, the number
                of physicians who screened positive for depression increased
                from <strong>38.2%</strong> in 2011 to <strong>39.8%</strong> in
                2014 and to <strong>41.7%</strong> in 2017. Work-related risk
                factors for burnout are predictors of depression. The
                improvement seen in burnout and WLI is likely a result of the
                desire to provide acceptable answers, under-report symptoms of
                burnout, and downplay the significant attrition of the physician
                workforce from 2011 to 2017.
              </p>
              <p>
                Physician burnout is worsening, and will continue to do so for
                the foreseeable future. A report by AAMC (Association of
                American Medical Colleges) has projected that physician demand
                will increase faster than supply and has projected a shortage of
                122,000 physicians by 2032.
                <sup>
                  <a href="#references">9</a>
                </sup>{' '}
                Signs of burnout have been identified at all levels of medical
                training, with emotional distress in residency leading to
                emotional exhaustion and depersonalization later in career.
                <sup>
                  <a href="#references">14</a>
                </sup>{' '}
                <strong>
                  Burnout isn’t limited to starting out as a physician. Once
                  symptoms are experienced, they will surface again and again
                  and stay with a physician throughout their career.
                </strong>{' '}
                Physicians experiencing burnout symptoms are likely to reduce
                their hours, change specialties, or leave healthcare altogether,
                costing approximately $160,000 to $1,000,000 to replace a single
                physician, leading to $4.6 billion yearly in the United States.
                <sup>
                  <a href="#references">10,14</a>
                </sup>{' '}
                Its impact extends beyond physicians and their employers and
                affects us all. Fewer physicians in practice can mean longer
                wait times for patients, shorter visits, and dissatisfaction
                with care.
              </p>
              <p>
                Further evidence links burnout with increasing medical errors.
                <sup>
                  <a href="#references">11</a>
                </sup>{' '}
                Additionally, physicians experiencing burnout are twice as
                likely to be affected by patient safety incidents, twice as
                likely to deliver suboptimal care to patients due to low
                professionalism, and three times more likely to receive low
                satisfaction ratings from patients. Patients on the receiving
                end of erroneous care will no longer trust their attending
                physician, leading to reduced compliance of following prescribed
                therapies, distrust of the medical and healthcare system as a
                whole, and added pressure on the clinician.
              </p>

              <h2 className="header--lg margin-top--quad margin-bottom--half">
                Contributors
                <sup>
                  <a href="#references">14,15</a>
                </sup>
              </h2>
              <p>
                There are many contributing factors that put healthcare workers
                at risk of burnout, including but not limited to those listed
                below. To get at root causes of burnout and the symptoms leading
                up to them, comprehensive qualitative studies are needed with
                proper representation across all of healthcare. This is no easy
                task, but until it is done, we will have an incomplete picture
                of physician burnout.
              </p>
            </div>
          </div>

          <div className="mobile hidden--lg">
            <div className="pad-vertical--double">
              <div className="max-width max-width--md content-padding">
                <ol>
                  <li>
                    <strong>EHRs are painful</strong> for clinicians to use
                  </li>
                  <li>
                    <strong>Keeping up with high patient demand</strong>
                    <ul>
                      <li>
                        Inability to care for patients properly due to factors
                        beyond their control (lack of insurance, poverty, etc.)
                      </li>
                      <li>Rise in aging population</li>
                    </ul>
                  </li>
                  <li>
                    Rising <strong>medical school debt</strong> with
                    insufficient income
                  </li>
                  <li>
                    <strong>Too much documentation,</strong> too little patient
                    time
                  </li>
                  <li>
                    <strong>Long work hours</strong> with too many patients
                  </li>
                  <li>
                    <strong>Loss of autonomy</strong>
                    <ul>
                      <li>Feeling of being a cog in a wheel</li>
                      <li>
                        Held accountable for factors out of their control.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Emotional stress and pressure
                    <ul>
                      <li>
                        Second victim syndrome, where healthcare workers feel
                        the emotional effects of involvement in an adverse event
                        or medical error
                      </li>
                      <li>
                        Societal pressures for high performance and
                        infallibility
                      </li>
                      <li>
                        Frequent exposure to deeply emotional situations without
                        time or resources for healthy coping mechanisms
                      </li>
                      <li>Fear or added stress of litigation</li>
                    </ul>
                  </li>
                  <li>
                    Values taught in medical school are inconsistent with real
                    world practice and external pressures &emdash;profits over
                    patients
                  </li>
                </ol>
              </div>
            </div>
            <Image
              src="/images/features/burnout/contributors-mobile.jpg"
              className="image--max-width"
              sizes={config.sizes.fullInsideMediumMaxWidth}
              alt="A physician balancing the heavy burden of contributors to burnout."
            />
          </div>

          <Image
            src="/images/features/burnout/contributors-desktop.jpg"
            className="image--max-width hidden--until-lg"
            sizes={config.sizes.fullInsideMediumMaxWidth}
            alt="A physician balancing the heavy burden of contributors to burnout. 1. EHRs are painful for clinicians to use. 2. Keeping up with high patient demand. Inability to care for patients properly due to factors beyond their control (lack of insurance, poverty, etc.). Rise in aging population. 3. Rising medical school debt with insufficient income. 4. Too much documentation, too little patient time. 5. Long work hours with too many patients. 6. Loss of autonomy. Feeling of being a cog in a wheel. Held accountable for factors out of their control. 7. Emotional stress and pressure. Second victim syndrome, where healthcare workers feel the emotional effects of involvement in an adverse event or medical error. Societal pressures for high performance and infallibility. Frequent exposure to deeply emotional situations without time or resources for healthy coping mechanisms. Fear or added stress of litigation. 8. Values taught in medical school are inconsistent with real world practice and external pressures -profits over patients."
          />

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h2 className="header--lg margin-bottom--half">
                What we can do about it <strong>now</strong>
              </h2>
              <p>
                Rather than paying lip-service to a chronic and escalating
                crisis, we need to see action toward measurable change and
                sustainable solutions. By looking at the contributors, we have
                specific targets for change, as well as systemic change that
                would greatly reduce the burden put upon physicians and health
                care workers. We can do this in small ways, by giving patients
                and physicians more tools for remote care, with the use of
                telemedicine, at-home or time-of patient-reported outcomes
                (PROs) to track the health of a patient in real time, and the
                recording and analysis of those outcomes to become predictors of
                our health.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Organization-oriented approaches for better interventions
              </h4>
              <p className="margin-top--none">
                The term “burnout” itself and its medicalization is problematic
                and minimizes the role of systemic factors. Burnout is an
                outcome rather than root cause of issues in our healthcare
                system, as a result of complex interactions between
                environmental, genetic, demographic, and psychosocial factors.
                The understanding of how these factors influence burnout is
                critical to customizing interventions rather than the current
                one-size-fits-none model.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Eliminate the stigma
              </h4>
              <p className="margin-top--none">
                There is a value mismatch between organizations and physicians,
                in which the business of healthcare does not align with the
                practice of medicine. Medicine was once a profession and beyond
                medical school it has evolved to become the business of
                healthcare. In the business of healthcare, physicians are known
                as providers, ability to pay matters, and efficiency trumps
                empathy. The start of medical school begins with the hippocratic
                oath where physicians are taught to do no harm and care for all
                patients equally and without discrimination. Physicians are
                ensnared in a perpetual dilemma between ethics of medical
                training, patient health, and the realities of a business that
                profits when people are extremely ill and incredibly vulnerable.
                Because the number of physicians with symptoms of burnout is so
                high, it is unlikely that the origin of the issue is in the
                susceptibility of individuals, rather it is rooted in the
                environment and care delivery system.
                <sup>
                  <a href="#references">14</a>
                </sup>{' '}
                It is precisely why individual measures alone have failed to
                address the problem. Organization-oriented approaches are more
                effective than individual ones according to a systematic review
                analyzing individual and organizational strategies.
                <sup>
                  <a href="#references">13</a>
                </sup>
              </p>
              <p>
                In terms of psychosocial factors, stigma and punitive measures
                associated with mental illness must be eliminated. Physicians
                who suffer from mood disorders are often reluctant to admit it
                or seek treatment because they are subject to unjust dire
                consequences such as career jeopardy, revocation of license to
                practice by state medical boards, and retaliation, rather than
                support, from employers, state boards, professional
                organizations, and peers. Historically, it has been the norm to
                hold those in the medical profession to infallible and
                superhuman standards. Presently nothing has changed; burnout is
                viewed as a sign of personal weakness or failure in the
                profession,
                <sup>
                  <a href="#references">14</a>
                </sup>{' '}
                leading to many symptoms and cases going underreported. Fear of
                litigation is a disabling affliction. This culture shift is
                critical if we are ever to reduce burnout. Physicians would
                rather quit medicine than report burnout or symptoms of burnout.
              </p>
              <p>
                Defining the problem, both at an individual and systemic level,
                and utilizing accurate measurement tools would be a starting
                point. Burnout is now a legitimate medical diagnosis per the
                International Classification of Diseases (ICD-11) and the World
                Health Organization's (WHO) clinician handbook but there is no
                consensus on the measurement of burnout.
                <sup>
                  <a href="#references">12</a>
                </sup>{' '}
                The most commonly used measure of burnout is the Maslach Burnout
                Inventory (MBI) which was designed as a research tool, rather
                than a diagnostic and clinical tool. Create a reportable quality
                of life measure for physicians that can’t be used to determine
                clinical quality. With destigmatization, more accurate reporting
                can lead to real change in healthcare culture that will reduce
                healthcare worker burden.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Physician-friendly EHRs
              </h4>
              <p className="margin-top--none">
                It is imperative that all healthcare stakeholders be held
                accountable for their contributions, especially health
                technology companies, their investors, as well as policy makers
                and regulators. While the roots of burnout predate the routine
                use of electronic health records (EHRs), there is wide consensus
                that frustration with EHRs is the top contributor to physician
                burnout. While relying on EHRs has made strides in healthcare
                delivery efficiency, software is still prone to glitches and
                performance issues. A note that may have taken upwards of 15
                minutes to compose can be wiped out in microseconds due to poor
                UI design or malfunction. Frustrations with EHRs aren’t limited
                to software issues. From the beginning, EHRs were designed to
                optimize billing and maximize reimbursement —not for patient
                care. Yet healthcare technology continues to “innovate” at
                lightning speed and with minimal consideration of their end
                users, physicians and patients.
              </p>
              <p>
                There are many technology solutions claiming to be the magic
                pill to cure burnout. However, the majority of these solutions
                are created without a thorough understanding of the physician
                needs and pain points. It adds fuel to the fire, further
                intensifying the burnout crisis. Co-design with physicians,
                nurses, and patients, to intentionally create experiences
                patient safety and experience in mind{' '}
                <strong>
                  <em>for</em>
                </strong>{' '}
                people, rather than designing healthcare{' '}
                <strong>
                  <em>around</em>
                </strong>{' '}
                them.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                The self-documenting encounter
              </h4>
              <p className="margin-top--none">
                Use audio and visual recording to passively document encounters
                and reduce how much time physicians spend at the keyboard with
                administrative tasks, buried in software. The physician would
                use voice commands and structured keywords to trigger orders and
                actions, query and input key information into the medical record
                as structured data or documentation of the clinical encounter.
                The self-documenting encounter will be finely tuned and evolve
                to become the defacto way to seamlessly capture information each
                visit. Physicians will spend less with fingers to keyboard and
                nose to screen and more face time with the patient.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                National licensing will expand physician reach
              </h4>
              <p className="margin-top--none">
                Physicians who work for hospitals and independent practitioners
                who want to bill insurance must undergo licensing,
                credentialing, certification, and privileging. As an independent
                practitioner who does not bill insurance, at the very least one
                must be licensed and certified. Medical licenses are only valid
                in the state in which one is licensed except if one works for
                the federal government organization, such as the Veterans
                Affairs (VA) System, then a valid license in one state is valid
                nationwide. There is no standardized process or central
                licensing system. The state by state requirements and processing
                times highly vary. At present clinicians need to jump through
                hoops to be certified, licensed, credentialed, and privileged,
                making the option to leave clinical medicine more appealing.
                There is decentralization and fragmentation of the process. One
                nationwide license and eliminating state-by-state licensing will
                allow physicians to practice between state lines including
                telemedicine which has proven to be a critical resource during
                the current viral pandemic. Additionally, a single national
                provider network with a searchable national provider database
                needs to be created in place of the current repository of
                National Provider Identification, NPIs which are unsearchable
                and incomplete.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Expand medical education
              </h4>
              <p className="margin-top--none">
                Medical education curriculum needs reform and to move away from
                strictly a biological health-disease model to one that is
                comprehensive to also include psychological, social, cultural,
                and economic components of medicine. 11% of health is medical
                care and 89% occurs outside the clinical space. Courses in the
                business of healthcare need to be mandatory so new graduates are
                skilled to navigate the complexities of the business of
                healthcare. The cost of education also needs to be addressed.
                Per AAMC 2019 report, the cost of medical education tuition and
                fees ranges from $37,556 (public, in-state) to $62,194 (public,
                out-of-state) yearly and with private school figures ranging
                from $60,665 and $62,111 per year. Surgical specialties
                compensate far greater than their non-surgical counterparts and
                specialists are better rewarded than generalists and primary
                care physicians. Physicians lag a decade in earnings as compared
                to their non-physician colleagues. In combination, these can
                lead physicians to pursue post-graduate training in more
                financially lucrative specialties to pay off an insurmountable
                debt.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                More work is needed
              </h4>
              <p className="margin-top--none">
                These ideas illustrated above are by no means the end to what
                needs to change in the United States healthcare system. Our
                hospital system is strained, we have too many patients per
                clinician, and the few clinicians we have are not getting the
                support they need. Despite that, the healthcare industry is
                growing everyday, with new players entering some with innovative
                ideas, all with conflicting interests, whether regulatory,
                data-centric, or profit-oriented, where the number of patients
                per day are the bottom line. In the end, patients are the
                subjects of care, and the outcomes of their care is what
                matters. Asking physicians to juggle all the interests competing
                for attention in the healthcare industry is irresponsible.
              </p>
            </div>
          </div>

          <Image
            src="/images/features/burnout/vision.jpg"
            className="image--max-width"
            sizes={config.sizes.fullInsideMediumMaxWidth}
          />

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h2 className="header--lg margin-bottom--half">
                The time to act is now
              </h2>
              <p>
                We need to give support to our physicians on the front lines
                during this public health crisis that is now further exacerbated
                by the Covid-19 pandemic. The tide for the physician burnout
                crisis is not turning. Physician burnout is only the tip of the
                healthcare industry’s sickness. Physicians will become scarce in
                ten years should we fail to end this epidemic with well-designed
                approaches addressing both individual and organizational needs.
                Patients unable to buy their way to the top may have to wait
                years for a routine surgery or it may be internationally
                outsourced. It is unacceptable that so many physicians are
                painfully suffering in silence and dying. Even one physician
                suicide is one loss too many.
              </p>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <HubspotForm
                formId={config.hubspotNewsletterFullFormId}
                title="Subscribe to our open source healthcare newsletter."
                submitButtonText="Subscribe"
              />
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <div>
                <h2 className="header--xl text--center">Authors</h2>
                <Author name="Meghana Karande" />
                <Author name="Jen Patel" />
                <Author name="Parsuree Vatanasirisuk" />
                <Author name="Juhan Sonin" />
              </div>

              <Divider />

              <div id="references">
                <References
                  references={[
                    {
                      title: '',
                      link: '',
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

export default ConsentFeature
