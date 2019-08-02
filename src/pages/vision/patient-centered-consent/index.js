import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Divider from '../../../components/divider'
import References from '../../../components/references'
import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'A Guide to Patient-Centered Consent - GoInvo',
  metaDescription: '',
  heroImage: '/images/features/patient-centered-consent/consent-hero.jpg',
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
                A Guide to Patient-Centered Consent
              </h1>

              <p>
                We spoke to leading experts in the field and borrowed best
                practices on the management of patient health information (PHI)
                to outline an open and ethical approach for designing
                patient-centered, meaningful consent. The wisdom and guidance of
                Jane Sarasohn-Kahn, Joyce Lee, Ernesto Ramirez, Gabriel
                Martinez-Santibañez, Charles Schick, and Woody MacDuffie helped
                immensely on this journey.
              </p>

              <h2 className="header--lg">Background</h2>
              <h4 className="header--sm">What is Informed Consent?</h4>
              <p>
                "Informed consent: The process by which a patient learns about
                and understands the purpose, benefits, and potential risks of a
                medical or surgical intervention, including clinical trials, and
                then agrees to receive the treatment or participate in the trial
                <sup>
                  <a href="#references">1</a>
                </sup>
                ."
              </p>
              <p>
                At a baseline, meaningful consent requires
                <sup>
                  <a href="#references">2</a>
                </sup>
                :
                <ul>
                  <li>informedness</li>
                  <li>comprehension, AND</li>
                  <li>voluntariness</li>
                </ul>
              </p>
              <p>
                Consent materials should cover both <strong>benefits</strong>{' '}
                and <strong>Risks</strong> of participation
                <sup>
                  <a href="#references">2</a>
                </sup>
                .
              </p>
              <p>
                When patient health data is involved, meaningful consent should
                also effectively communicate
                <sup>
                  <a href="#references">3</a>
                </sup>
                :
                <ul>
                  <li>how patient data will be used,</li>
                  <li>who will have access,</li>
                  <li>how it will be protected, and</li>
                  <li>what rights the patient has over the shared data.</li>
                </ul>
              </p>
              <h4 className="header--sm">The gap in comprehension</h4>
              <p>
                It is especially important in medicine and health related
                services for informed consent to be achieved. Patients need to
                adequately weigh the pros and cons of their involvement to make
                the best choice for their health. Unfortunately, three issues
                with traditional consent can prevent patients from fully
                understanding what they are agreeing to.
                <ol>
                  <li>
                    <strong>
                      Consent documents are usually filled with complex legal
                      language
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                      .
                    </strong>
                  </li>
                  <li>
                    <strong>
                      The consent process is usually rushed
                      <sup>
                        <a href="#references">4</a>
                      </sup>
                      .
                    </strong>
                  </li>
                  <li>
                    <strong>
                      It has become the norm to accept documents without fully
                      understanding them.
                    </strong>{' '}
                    The documents themselves are usually not designed with a
                    focused effort to promote patient understanding
                    <sup>
                      <a href="#references">4</a>
                    </sup>
                    . One group of researchers found that over 90% of adults
                    agreed to a terms of services and privacy policy that
                    included multiple ‘gotcha clauses’ including "providing a
                    first-born child as payment for SNS access
                    <sup>
                      <a href="#references">5</a>
                    </sup>
                    ".
                  </li>
                  <li>
                    <strong>Comprehension is rarely measured.</strong> In other
                    words, most consent processes don’t track what patients
                    understand.
                  </li>
                </ol>
              </p>
              <h4 className="header--sm">An opportunity for re-design</h4>
              <p>
                Pew Research Center found that 77% of Americans have smartphones
                as of 2018
                <sup>
                  <a href="#references">6</a>
                </sup>
                . Despite this, many patient consent processes are still filled
                out on paper. From a survey conducted in 2017 with 146
                respondents from top biotech, pharma, CRO, and IRB
                organizations, 53% reported their organizations still didn’t use
                electronic consent
                <sup>
                  <a href="#references">7</a>
                </sup>
                .
              </p>

              <p>
                Paper consent often requires extra steps of downloading PDFs,
                printing, signing in separate software, and then scanning,
                mailing, or emailing it in. A mobile consent process allows
                patients to work through consent whenever and wherever they want
                <sup>
                  <a href="#references">2</a>
                </sup>
                . It allows them to complete the consent process in their own
                time, supports the patients’ future reference of the agreement,
                and can allow patients to manage or revoke their consent as the
                terms allow.
              </p>

              <p>
                As researchers, healthcare providers, and healthcare companies
                shift to eConsent, a few researchers have explored best
                practices for their design. Groups, including Sage BioNetworks
                and AllofUs, are pushing the needle away from lengthy, complex
                terms and conditions and towards truly meaningful consent.
              </p>

              <p>
                We hope that this list of guidelines to improve patient
                comprehension can help to inform eConsent design.
              </p>

              <Divider />

              <h2 className="header--lg">9 Guidelines for eConsent Design</h2>

              <h4 className="header--sm">1. Meet Accessibility Standards</h4>
              <p>
                At the most basic level, the consent process must meet the needs
                of those with disabilities (see{' '}
                <a
                  href={mediaUrl('https://www.w3.org/TR/WCAG21/')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WCAG2.1 guidelines
                </a>
                ).
              </p>

              <h4 className="header--sm">2. Make Consent Front and Center</h4>
              <Image
                src="/images/features/patient-centered-consent/consent-resilient-proj.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="text--caption">
                The gateway to involvement in the Resilience Project is a 10
                minute screening + consent process (
                <a
                  href={mediaUrl(
                    'https://www.goinvo.com/work/mount-sinai-consent'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Goinvo designs with Mount Sinai and Sage Bionetworks from 2015
                </a>
                ).
              </p>
              <p>
                Beyond this, we must remove other barriers to access, such as
                burying consent documents under numerous links or only
                supporting paper consent.
              </p>

              <h4 className="header--sm">3. Use Plain, Concise Language</h4>
              <Image
                src="/images/features/patient-centered-consent/consent-pdua.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="text--caption">
                These initial designs for (
                <a
                  href={mediaUrl(
                    'https://github.com/patient-data-manager/pdm-designs/blob/master/pdm_data_use_agreement_storyboard.pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patient Health Data Manager
                </a>{' '}
                (an opensource project by MITRE and GoInvo) use familiar
                language and a non-intimidating format.
              </p>
              <p>
                Legalese can sound like a foreign language to patients. Plain,
                concise language can be read quickly and understood, making it
                more accessible
                <sup>
                  <a href="#references">8</a>
                </sup>
                . Plain language should be at or below a 5th grade reading level
                in order to support the comprehension of those with low literacy
                <sup>
                  <a href="#references">9</a>
                </sup>
                .
              </p>

              <h4 className="header--sm">4. Set Time Expectations</h4>
              <p>
                Consent can feel like an endless stream of content. Cue patients
                in on how long it will take them through a comment at the start,
                a progress bar, or other. This allows patients to evaluate
                whether they currently have enough time to complete the consent
                process and can help prevent patients from rushing to the end.
              </p>

              <h4 className="header--sm">
                5. Organize Content into Bite-sized Sections
              </h4>
              <Image
                src="/images/features/patient-centered-consent/consent-wilbanks-informed-consent.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="text--caption">
                Above is Table 1 from "
                <a
                  href={mediaUrl(
                    'https://poseidon01.ssrn.com/delivery.php?ID=722009025090070117080012101085114002000071009031061037125097088119009102109102119101099038107061010025028092092080122065098105007010093003076112103109116006085100029057035000100077107084125011002065028029127126094079096086083107104089069097105001078017&EXT=pdf'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developing a transparent, participant-navigated electronic
                  informed consent for mobile-mediated research
                </a>
                ," which illustrates how sections can be paired down to their
                essence and organized by topic
                <sup>
                  <a href="#references">10</a>
                </sup>
                .
              </p>
              <p>
                In a "novel multi-media approach to addressing transparency and
                comprehension within electronic informed consent," Sage
                Bionetworks suggest focussing on the essential and organizing
                content deliberately
                <sup>
                  <a href="#references">10</a>
                </sup>
                . Breaking the consent document into bite-sized, topic-focused
                chunks can help the participant better grasp the sections.
                Keeping content succinct can help prevent the reader from
                skimming.
              </p>

              <h4 className="header--sm">6. Use Visual Storytelling</h4>
              <Image
                src="/images/features/patient-centered-consent/consent-allofus-consent.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="text--caption">
                Above are select screens from the{' '}
                <a
                  href={mediaUrl(
                    'https://participant.joinallofus.org/#/dashboard'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AllofUs consent process
                </a>
                , which uses animated and narrated videos to inform the patient.
              </p>
              <p>
                Humans are visual and aural communicators. Adding straight
                forward icons, illustrations, animations, or even videos can
                help to engage the reader. Visuals serve as a memorable
                indicator of topic that can help bolster understanding
                <sup>
                  <a href="#references">10</a>
                </sup>
                . One research group found that using friendly comic strip
                visuals improved "patient comprehension, anxiety, and
                satisfaction
                <sup>
                  <a href="#references">11</a>
                </sup>
                ."
              </p>

              <h4 className="header--sm">7. Provide Real-Time Help</h4>
              <Image
                src="/images/features/patient-centered-consent/consent-mpower.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="text--caption">
                The{' '}
                <a
                  href={mediaUrl('https://parkinsonmpower.org/study/overview')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mPower consent process
                </a>{' '}
                features a "Need Help?" button throughout the entire consent
                process. It provides the patient with a thorough FAQ section as
                well as a toll free number for additional support.
              </p>
              <p>
                Supporting comprehension takes more than just clear wording and
                accessibility. It means providing help and resources to patients
                when and where they need it. Resources and support can take many
                forms such as a ‘Learn More’ or ‘Help’ button, a support chat, a
                toll-free phone number with a helpful human resource on the
                other end, and more
                <sup>
                  <a href="#references">10</a>
                </sup>
                .
              </p>

              <h4 className="header--sm">
                8. Use "Repeat Back" to Engage the Brain
              </h4>
              <Image
                src="/images/features/patient-centered-consent/consent-mpower-quiz.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="text--caption">
                After reviewing the consent documents but before signing, the
                mPower consent process gives the patient a short 5 question
                quiz.
              </p>
              <p>
                The National Quality Forum developed an approach called Safe
                Practice 10 with in-person patient consent to improve
                comprehension. Part of this practice includes a “teach back” or
                “repeat back” technique where the patient is asked to recall
                primary details from consent that has just been discussed with
                them. Multiple studies have found that having the patient recall
                the information improves comprehension
                <sup>
                  <a href="#references">12</a>
                </sup>
                . Similarly with eConsent, a short quiz can help engage the
                patient’s mind in a new way and help them retain the major
                takeaways of the agreement.
              </p>

              <h4 className="header--sm">
                Bonus: 9. Keep Measuring + Iterating!
              </h4>
              <Image
                src="/images/features/patient-centered-consent/consent-resilient-expression.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="text--caption">
                A concept explored to adjust content and interaction in
                real-time based on facial expressions (from our Resilience
                Project designs).
              </p>
              <p>
                There is always room for improvement in consent design. Before
                releasing the consent process, set lofty goals for your designs
                and test them with representative users. Are users able to
                answer questions on the primary consent take-aways after going
                through the process? After releasing your consent process, are
                there systems in place to continue receiving feedback and
                measuring comprehension?
              </p>

              <h2 className="header--lg">Recap</h2>
              <ol>
                <li>Meet Accessibility Standards</li>
                <li>Make Consent Front and Center</li>
                <li>Use Plain, Concise Language</li>
                <li>Set Time Expectations</li>
                <li>Organize Content into Bite-sized Sections</li>
                <li>Use Visual Storytelling</li>
                <li>Provide Real-Time Help</li>
                <li>Use "Repeat Back" to Engage the Brain</li>
                <li>Bonus: Keep Measuring + iterating!</li>
              </ol>
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

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                    <Image
                      src="/images/about/headshot-sharon-lee.jpg"
                      className="image--max-width"
                    />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p>
                      <strong>Sharon Lee</strong>
                      <span className="text--gray">, GoInvo</span>
                    </p>
                    <p className="text--gray">
                      Sharon is a designer with an eclectic background in
                      engineering, medicine, and art. Passionate about
                      healthcare, she has focused her efforts on human-centered
                      software design. She joined Invo in 2016 with a BS in
                      Biomedical Engineering from the University of Virginia.
                    </p>
                  </div>
                </div>

                <h3 className="header--md">Contributors</h3>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                    <Image
                      src="/images/about/headshot-parsuree-vatanasirisuk.jpg"
                      className="image--max-width"
                    />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p>
                      <strong>Parsuree Vatanasirisuk</strong>
                      <span className="text--gray">, GoInvo</span>
                    </p>
                    <p className="text--gray">
                      Parsuree is a user experience designer and illustrator
                      with background in industrial design. She makes the
                      complex beautiful and approachable through illustration
                      and information design. Parsuree joined Invo in 2018, and
                      has a BA in Industrial Design from Chulalongkorn
                      University and is a MFA candidate of the Rochester
                      Institute of Technology (RIT).
                    </p>
                  </div>
                </div>

                <div className="author">
                  <div className="authorImg pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                    <Image
                      src="/images/about/headshot-juhan-sonin.jpg"
                      className="image--max-width"
                    />
                  </div>
                  <div className="authorBio pure-u-1 pure-u-lg-1-2">
                    <p>
                      <strong>Juhan Sonin</strong>
                      <span className="text--gray">, GoInvo, MIT</span>
                    </p>
                    <p className="text--gray">
                      Juhan specialized in software design and system
                      engineering. He operates, and is the director of, GoInvo.
                      He has worked at Apple, National Center for Supercomputing
                      Applications, Massachusetts Institute of Technology (MIT),
                      and MITRE. Juhan co-founded Invo Boston in 2009 and is a
                      graduate of the University of Illinois at
                      Urbana-Champaign. He currently lectures at MIT.
                    </p>
                  </div>
                </div>
              </div>

              <Divider />

              <div id="references">
                <References
                  references={[
                    {
                      title:
                        'Jr, W. C. (n.d.). Definition of Informed consent. Retrieved June 18, 2019',
                      link:
                        'https://www.medicinenet.com/script/main/art.asp?articlekey=22414',
                    },
                    {
                      title:
                        'Doerr, M., Truong, A. M., Bot, B. M., Wilbanks, J., Suver, C., & Mangravite, L. M. (2017). Formative Evaluation of Participant Experience With Mobile eConsent in the App-Mediated Parkinson mPower Study: A Mixed Methods Study. JMIR MHealth and UHealth, 5(2). doi:10.2196/mhealth.6521',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5334514/',
                    },
                    {
                      title:
                        'Patient Consent for Electronic Health Information Exchange. (n.d.). Retrieved June 18, 2019',
                      link:
                        'https://www.healthit.gov/topic/patient-consent-electronic-health-information-exchange',
                    },
                    {
                      title:
                        'Wilbanks, J., B.A. (2018). Design Issues in E-Consent. J Law Med Ethics. doi:10.1177/1073110518766025',
                      link:
                        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6062847/',
                    },
                    {
                      title:
                        'Obar, J. A., & Oeldorf-Hirsch, A. (2018). The Biggest Lie on the Internet: Ignoring the Privacy Policies and Terms of Service Policies of Social Networking Services. SSRN Electronic Journal. doi:10.2139/ssrn.2757465',
                      link:
                        'https://www.tandfonline.com/doi/abs/10.1080/1369118X.2018.1486870',
                    },
                    {
                      title:
                        'Demographics of Mobile Device Ownership and Adoption in the United States. (2019, June 12). Retrieved June 18, 2019',
                      link: 'https://www.pewinternet.org/fact-sheet/mobile/',
                    },
                    {
                      title:
                        'State of eConsent 2017 Report. (n.d.). Retrieved June 18, 2019',
                      link:
                        'https://resources.crfhealth.com/electronic-informed-consent/state-of-econsent-2017-report ',
                    },
                    {
                      title:
                        'White House Precision Medicine Initiative. (n.d.). Retrieved June 18, 2019',
                      link:
                        'https://obamawhitehouse.archives.gov/precision-medicine#section-principles',
                    },
                    {
                      title:
                        'Communicating with Patients Who Have Limited Literacy Skills. (1998). The Journal of Family Practice, 46(2), 168-175. Retrieved June 18, 2019',
                      link:
                        'https://mdedge-files-live.s3.us-east-2.amazonaws.com/files/s3fs-public/jfp-archived-issues/1998-volume_46-47/JFP_1998-02_v46_i2_communicating-with-patients-who-have-lim.pdf',
                    },
                    {
                      title:
                        'Doerr, M., Suver, C., & Wilbanks, J. (2016). Developing a Transparent, Participant-Navigated Electronic Informed Consent for Mobile-Mediated Research. SSRN Electronic Journal. doi:10.2139/ssrn.2769129',
                      link:
                        'https://poseidon01.ssrn.com/delivery.php?ID=722009025090070117080012101085114002000071009031061037125097088119009102109102119101099038107061010025028092092080122065098105007010093003076112103109116006085100029057035000100077107084125011002065028029127126094079096086083107104089069097105001078017&EXT=pdf',
                    },
                    {
                      title:
                        'Brand, A., M.D., Gao, L., M.D., Hamann, A., Crayen, C., PhD, Brand, H., Squier, S. M., PhD, . . . Stangl, V., V. (2019). Medical Graphic Narratives to Improve Patient Comprehension and Periprocedural Anxiety Before Coronary Angiography and Percutaneous Coronary Intervention: A Randomized Trial. Annals of Internal Medicine, 170(8), 579. doi:10.7326/m18-2976',
                      link:
                        'https://annals.org/aim/article-abstract/2730521/medical-graphic-narratives-improve-patient-comprehension-periprocedural-anxiety-before-coronary',
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
