import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import HubspotForm from '../../../components/hubspot-form'
import Image from '../../../components/image'
import Author from '../../../components/author'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'The AI Healthcare Future We Need - GoInvo',
  metaDescription: 'AI will transform Healthcare.',
  heroImage:
    '/images/features/digital-health-trends-2022/digital-health-trends-2022-hero.jpg',
}

class HealthcareAIFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="healthcare-ai-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl">The AI Healthcare Future We Need</h1>

              <p>
                Artificial intelligence (AI) has undergone tremendous
                advancements since its conception in the 1950s:
              </p>

              <p>
                AI Image Generation: One of the most notable developments in
                recent years is the accessibility and widespread engagement of
                AI trained on images. This includes tools such as pix2pix from
                2014, as well as more recent advancements like DALL·E,
                MidJourney and Stable Diffusion, all released between January
                2021 and August 2022. These tools have led to the mainstream
                adoption of applications that generate fine-art-like portraits,
                avatars and more, such as the "Magic Avatar" feature in the app
                Lensa, which was released in November 2022.
              </p>

              <p>
                AI Text Generation: In addition to image generation,
                conversational AI has also gained mainstream attention. RNNs,
                developed decades ago, have been used for text generation. And
                now there are various modern applications like ChatGPT, a
                machine learning model that can generate human-like text, that
                can answer nearly any imaginable question. ChatGPT was released
                in November 2022 and gained more than one million users within a
                week. This free tool has reached a mainstream audience in a way
                that feels distinct, as people of all ages and backgrounds are
                finding interesting applications for the tool. Students are
                using ChatGPT to write school papers, doctors are checking
                ChatGPT’s answers as they respond to patient questions, and
                people exploring ChatGPT’s ability to generate workout plans,
                re-write emails to be more persuasive, and craft poems and more.
                In fact, we used ChatGPT to write the first draft of this intro
                from a set of bullet points!
              </p>

              <p>
                With all of these new advancements, ai capabilities straight out
                of Fantastic Planet (1973), Blade Runner (1982), Moon (2009),
                HER (2013), Big Hero 6 (2016), I Am Mother (2019) (just to name
                a few out of hundreds) seem closer than ever. How will this
                impact health? How should it impact health? Here are our
                studio’s thoughts on the matter.
              </p>

              <div className="margin-auto">
                <Image
                  src="/images/features/digital-health-trends-2022/1-digital-health-at-home-a.jpg"
                  className="image--max-width"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>

              <h2 className="header--lg margin-top margin-bottom--none">
                Expectations for the Future
              </h2>
              <p>
                The following are gaps we’ve identified in existing tools. These
                features should exist together in a patient tool.
              </p>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Context aware and ability to personalize how it engages with me
              </h4>
              <ul>
                <li>
                  It should have MY history and provide insight in the context
                  of my health and behavior
                </li>
                <li>Health record, phone, & wearables data</li>
                <li>
                  Plug into other apps like mood tracking, food diary, condition
                  related, etc
                </li>
                <li>
                  Personalization around how it communicates with me - if I
                  prefer a different language, speech instead of text, animated
                  videos, etc. If using speech - some prefer faster answers that
                  aren’t in full sentences vs conversational phrasing.
                </li>
              </ul>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Don’t wait for me to come to it - it should come to me
              </h4>
              <ul>
                <li>
                  I won’t always remember to ask health questions or think about
                  my health. I don’t take care of myself enough. I need an
                  assistant that checks in on me at the right times.
                </li>
              </ul>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                It needs to query me
              </h4>
              <ul>
                <li>
                  If it needs more information to give a personalized answer, it
                  needs to ask me appropriate questions.
                </li>
              </ul>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Multimodal
              </h4>
              <ul>
                <li>It needs to combine with visualization and sonification</li>
                <li>
                  Ex: Show me a cartoon version of how lactose intolerance works
                </li>
              </ul>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Connected to evidence
              </h4>
              <ul>
                <li>Need a way for me to fact-check or dig deeper</li>
                <li>
                  It should have the ability to link sources that support its
                  answers
                </li>
              </ul>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                I own my data
              </h4>
              <ul>
                <li>It needs to combine with visualization and sonification</li>
                <li>Data ownership and privacy policies should be clear</li>
              </ul>

              <h4 className="header-sm margin-bottom--none margin-top--double">
                Designed for accessibility
              </h4>
              <ul>
                <li>
                  Communication should by default be short and easy to read at a
                  5th grade reading level, with deeper answers when asked
                </li>
                <li>
                  We’d love to see how this could be designed specifically for
                  those who are blind or low vision.
                </li>
              </ul>

              <h2 className="header--lg margin-top margin-bottom--none">
                Patient Tool Concept
              </h2>

              <h2 className="header--lg margin-top margin-bottom--none">
                Clinician Tool Concept
              </h2>

              <h2 className="header--lg margin-top margin-bottom--none">
                What purposes could an AI patient tool serve?
              </h2>

              <p>Here’s how we imagine it:</p>

              <ul>
                <li>Gathering all of my health data together</li>
                <ul>
                  <li>
                    Interoperability where AI does the manual labor of merging
                    across all life data
                  </li>
                </ul>
                <li>Help me find support I need based on my context</li>
                <ul>
                  <li>Based on health conditions, if I’m homeless, etc</li>
                  <li>Core basics of support, local support in your town</li>
                </ul>
                <li>
                  Symptom check / Diagnostic help (more advanced, faster ADA)
                </li>
                <ul>
                  <li>
                    Patient takes a photo or provides information about a
                    symptom: what problem is this? Chat asks questions. Provides
                    top X answers.
                  </li>
                  <li>Should be trained on medical diagnostic databases</li>
                </ul>
                <li>
                  Live support at Dr’s office (this could also happen at home)
                </li>
                <ul>
                  <li>
                    How to summarize how I’ve really been, visualize my health
                    since my last visit
                  </li>
                  <li>What else should I ask? What data’s missing?</li>
                  <li>
                    Help me keep track of follow up items and care plans I need
                    to adhere to
                  </li>
                </ul>
                <li>Just-in-time support</li>
                <ul>
                  <li>Real time feedback on exercising more effectively</li>
                  <li>
                    Noticing health conditions in real time like sleep apnea,
                    anxiety, etc
                  </li>
                  <li>Reaching out if it identifies that I’m in crisis</li>
                  <li>Help during emergencies - who to call</li>
                </ul>
                <li>
                  Help me reflect on my health and develop a caring relationship
                  with my body
                </li>
                <ul>
                  <li>
                    Ask me how I’m doing, prompt me to describe concerns,
                    provide best practice suggestions for how to address
                    concerns, help me decide what to try in order to address the
                    concern
                  </li>
                  <li>
                    Generates visual patient information for any given condition
                    and paraphrasing articles as the person digs deeper (even
                    complex articles).
                  </li>
                </ul>
                <li>Scan my health and help me take any necessary action</li>
                <ul>
                  <li>
                    (continually vs periodically based on preference) Review my
                    data, rate my health, note good health and improvements,
                    spotlight areas that need attention, help me identify what
                    to focus on first
                  </li>
                  <li>
                    When do I need to get my next physical, eye exam, dentist
                    appointment, flu shot, cancer screening, etc?
                  </li>
                </ul>
              </ul>

              <h2 className="header--lg margin-top margin-bottom--none">
                Ripple Effects and Unintended Outcomes
              </h2>

              <p>Here are the big conversations we think need to happen:</p>

              <ul>
                <li>
                  Misinformation at scale - Stack Overflow banned ChatGPT
                  answers as it got swamped with quality control at scale.
                  ChatGPT makes it incredibly easy to post an answer, but the
                  non-zero error rate is a real problem for quality control.
                  There’s no way to easily check ChatGPT’s answers without doing
                  the research manually. This could become a serious problem if
                  everyone uses a similar tool for health answers.
                </li>
                <li>
                  Ability for chatGPT to sound truer than it is? Psychology
                  might suggest that people are more susceptible to believe
                  information shared in a more conversational tone? (we need to
                  research this - but paired with the first problem, this could
                  be harmful)
                </li>
                <li>
                  Harmful information - Molotov Cocktail question can still be
                  achieved by phrasing as a print function question, I assume
                  similar information about how to effectively commit suicide
                  could be easily obtained.
                </li>
                <li>
                  Perpetuating harmful biases, conventions, etc - The AI will
                  provide answers based on the material it is trained on. If
                  that material is biased, non-inclusive, etc, the AI’s answers
                  will be the same. For example, humans depicted in MidJourney
                  are typically white unless specified otherwise. When asked to
                  portray a telehealth call, MidJourney created doctors that
                  were all white and three out of four were male.
                </li>
                <li>
                  Impact on human workers - “The cost of intelligence is going
                  down” – Rob McCready. AI could replace writers, artists,
                  musicians, and generally all white collar jobs in the long
                  run. Ideally, AI could augment these people’s work by helping
                  generate a starting point that the human can perfect or to
                  help people brainstorm a diversity of concepts, however this
                  new technology provides the opportunity for these creatives to
                  lose their jobs and for their work to be taken without
                  compensation to train ai to do the work.
                </li>
                <li>
                  Property and ownership issues - Many have voiced the problem
                  that image generation AI is training off of art that it does
                  not own. Some artists have seen their personal style and even
                  their signature show up in Stable Diffusion
                  (https://www.cbc.ca/radio/asithappens/artificial-intelligence-ai-art-ethics-greg-rutkowski-1.6679466)
                </li>
                <li>
                  Our relationship with technology and each other - Human
                  immersion into tech (smartphones and social media) has not
                  always had a positive impact on health (ex: mental health of
                  the younger generation in particular). How can we make sure
                  we’re not sprinting into more negative side effects in the
                  name of “progress.” How will an increase of artificial
                  intelligence impact human intelligence? Perhaps it will allow
                  humans to learn and accomplish new things, but it may also
                  reduce our skill in some areas such as synthesis of
                  information. We should be intentional about what we might be
                  losing.
                </li>
              </ul>
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
                <h2 className="header--xl text--center">Author</h2>
                <Author name="Sharon Lee" />
                <div className="pad-vertical--double">
                  <h3 className="header--md">Contributors</h3>
                  <p>
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

export default HealthcareAIFeature
