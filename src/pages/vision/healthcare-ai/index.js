import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SmartImage, { LazyImage } from '../../../components/optimized-image'
import SubscribeForm from '../../../components/form-subscribe'
import Author from '../../../components/author'
import Divider from '../../../components/divider'

import config from '../../../../config'
import { mediaUrl } from '../../../helpers'

const frontmatter = {
  metaTitle: 'The AI Healthcare Future We Need - GoInvo',
  metaDescription:
    'Exploring the AI Healthcare future – opportunities and unexpected outcomes.',
  heroImage: '/images/features/healthcare-ai/healthcare-ai-hero-4.jpg',
}

class HealthcareAIFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="healthcare-ai-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-top--none">
                The AI Healthcare Future We Need
              </h1>
              <p>
                <strong>Melanoma AI Healthcare Assistant</strong>
              </p>
            </div>
            <div className="healthcare-ai-feature__video">
              <video
                poster={mediaUrl(
                  '/images/features/healthcare-ai/melanoma_mobile_assistant_goinvo_aug2024.jpg'
                )}
                controls
              >
                <source
                  src={mediaUrl(
                    '/videos/features/healthcare-ai/melanoma_mobile_assistant_goinvo_aug2024.mp4'
                  )}
                  type="video/mp4"
                />
                <source
                  src={mediaUrl(
                    '/videos/features/healthcare-ai/melanoma_mobile_assistant_goinvo_aug2024.webm'
                  )}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="max-width max-width--md content-padding">
              <p>
                <strong>Ankle Pain AI Healthcare Assistant</strong>
              </p>
            </div>
            <div className="healthcare-ai-feature__video">
              <video
                poster={mediaUrl(
                  '/images/features/healthcare-ai/pearl-health-ankle-pain-2023-08-29.jpg'
                )}
                controls
              >
                <source
                  src={mediaUrl(
                    '/videos/features/healthcare-ai/pearl-health-ankle-pain-2023-08-29.mp4'
                  )}
                  type="video/mp4"
                />
                <source
                  src={mediaUrl(
                    '/videos/features/healthcare-ai/pearl-health-ankle-pain-2023-08-29.webm'
                  )}
                  type="video/webm"
                />
              </video>
            </div>
            <div className="max-width max-width--md content-padding">
              <p>
                Artificial intelligence (AI) has undergone tremendous
                advancements since its conception in the 1950s:
              </p>
              <p>
                <strong>AI Image Generation</strong>: One of the most notable
                developments in recent years is the accessibility and widespread
                engagement of AI trained on images. This includes tools like
                pix2pix from 2014 and more recent advancements like DALL·E,
                released in January 2021, as well as MidJourney and Stable
                Diffusion, both released in the summer of 2022. These tools have
                since fueled the mainstream adoption of app features like
                Lensa's "Magic Avatar" that generate fine-art-like portraits,
                avatars, and more.
              </p>
              <p>
                <strong>AI Text Generation</strong>: In addition to image
                generation, conversational AI has also gained mainstream
                attention. Originally developed decades ago, recurrent neural
                networks (RNNs) have been used for text generation. While RNNs
                can be trained on data sets like{' '}
                <a href="https://www.tensorflow.org/text/tutorials/text_generation">
                  Shakespeare's writing
                </a>{' '}
                and generate text to match, ChatGPT can answer nearly any
                question imaginable in nearly any style. Released for free in
                November 2022, ChatGPT gained more than{' '}
                <a href="https://www.demandsage.com/chatgpt-statistics/">
                  one million users
                </a>{' '}
                within its first week. It has reached a mainstream audience in a
                way that feels distinct, as people of all ages and backgrounds
                continue to find different applications for the tool. Students
                are using it to write school papers, and doctors are checking
                ChatGPT's answers as they respond to patient questions; others
                are exploring ChatGPT's ability to generate workout plans,
                rewrite emails to be more persuasive, craft poems, and more. In
                fact, ChatGPT was given a set of bullet points and produced the
                first draft of this article introduction!
              </p>
              <p>
                With all of these new advancements, AI capabilities straight out
                of sci-fi movies like Fantastic Planet, Moon, and Her seem
                closer than ever.
              </p>
              <p>
                How will this impact health?
                <br />
                How <em>should</em> it impact health?
              </p>
              <p>Here are our studio's thoughts on the matter.</p>
              <h2 className="header--lg margin-top--double margin-bottom--none">
                Expectations for the Future
              </h2>
              <p>
                The following are gaps we've identified in existing technology
                that we would expect from an ideal patient tool:
              </p>
              <ul className="margin-top--none">
                <li>
                  <strong>Context awareness</strong>
                </li>
                <ul>
                  <li>
                    It should provide insight grounded in the historical context
                    of my health and behavior.
                  </li>
                  <li>
                    With my consent, it could gather this data from my health
                    record, native health apps (Apple Health, Google Fit), and
                    phone data (GPS, screen time) as well as plug into
                    wearables, mood tracking, fitness, pain tracking, and other
                    health apps.
                  </li>
                </ul>
                <li>
                  <strong>Personalized engagement</strong>
                </li>
                <ul>
                  <li>
                    The mode of communication could be personalized by switching
                    to my preferred language, using speech instead of text,
                    playing animated videos, etc. If using speech, some prefer
                    faster answers that aren't in full sentences vs.
                    conversational phrasing.
                  </li>
                  <li>
                    Some people will want more nudges and interaction than
                    others.
                  </li>
                </ul>
                <li>
                  <strong>Proactive approach</strong>
                </li>
                <ul>
                  <li>
                    I won't always remember to ask health questions or think
                    about my health. Most people don't take the time to focus on
                    their health. I need an assistant that checks in at the
                    right times to help me engage with my health and better
                    understand my body.
                  </li>
                </ul>
                <li>
                  <strong>Queries for better answers</strong>
                </li>
                <ul>
                  <li>
                    If it needs more information to give a personalized answer,
                    it should prompt me with appropriate follow-up questions.
                  </li>
                </ul>
                <li>
                  <strong>Multimodal communication</strong>
                </li>
                <ul>
                  <li>
                    It should enrich communication through visualization and
                    sonification and accommodate different learning styles.
                  </li>
                  <li>
                    For example: "Show me a cartoon representation of how
                    lactose intolerance works."
                  </li>
                </ul>
                <li>
                  <strong>Emphasis on evidence</strong>
                </li>
                <ul>
                  <li>
                    It should provide ways for me to fact-check or dig deeper.
                  </li>
                  <li>
                    It should link reputable sources that support its answers.
                  </li>
                </ul>
                <li>
                  <strong>Transparency and user data ownership</strong>
                </li>
                <ul>
                  <li>Data ownership and privacy policies should be clear.</li>
                  <li>
                    People should own or co-own their data; they should also
                    have control over how their data is used and who can access
                    it.
                  </li>
                </ul>
                <li>
                  <strong>Accessible Design</strong>
                </li>
                <ul>
                  <li>
                    Initial communication should be concise and easy to read at
                    a fifth grade reading level, following up with more thorough
                    explanations when asked.
                  </li>
                  <li>
                    We'd love to see how this could be designed specifically for
                    individuals with low vision, mobility and dexterity
                    impairments, and other conditions that might make
                    interaction with this kind of tool challenging.
                  </li>
                </ul>
              </ul>
              <h2 className="header--lg margin-top--double margin-bottom--none">
                Patient Tool Concepts
              </h2>
              <p>
                <strong>AdHoc Health Guide</strong>
              </p>
              <div className="margin-auto">
                <LazyImage
                  src="/images/features/healthcare-ai/storyboard-patient-mole.jpg"
                  className="image--max-width image--center"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <p className="margin-top--double">
                <strong>Mental Health Support</strong>
                <br />
                <em>Storyboard with images generated by MidJourney</em>
              </p>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                  <LazyImage
                    src="/images/features/healthcare-ai/storyboard-1a.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="margin-top--none">
                    Jay gets home from school. AiHealth believes they may be
                    feeling depressed based on their health data:
                  </p>
                  <ul>
                    <li>Their heart rate variability is low</li>
                    <li>They've been on their phone more than often</li>
                    <li>Step count is low</li>
                  </ul>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
                  <LazyImage
                    src="/images/features/healthcare-ai/storyboard-2.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="margin-top--none">
                    AiHealth sends Jay a photo they took with their family on a
                    hike 3 months ago. Reminding Jay of happy memories often
                    cheers them up.
                  </p>
                  <p>
                    However, Jay doesn't respond to the images. They end up
                    skipping dinner and staying in bed until the next morning.
                  </p>
                </div>
              </div>
              <div className="pure-g margin-top--double">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                  <LazyImage
                    src="/images/features/healthcare-ai/storyboard-3a.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="margin-top--none">
                    AiHealth sends a text message: "Hey are you ok? I'm here for
                    you if you want to chat."
                  </p>
                  <p>
                    Jay is hungry, tired, and stressed. They reply, "no... idk."
                  </p>
                  <p>
                    AiHealth: "I can see the stress coming through in your
                    health data. That must be difficult."
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
                  <LazyImage
                    src="/images/features/healthcare-ai/storyboard-4a.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="margin-top--none">
                    AiHealth: "Why don't we do something to make your body feel
                    a little better?"
                  </p>
                  <p>Jay: "ok"</p>
                  <p>
                    AiHealth knows Jay likes images and animations, so it
                    creates a little sparkling glass of water with a written
                    reminder: "Drink some water and have a snack! Your body will
                    feel a little better right away."
                  </p>
                </div>
              </div>
              <div className="pure-g margin-top--double">
                <div className="pure-u-1 pure-u-lg-1-2 pad-right--only-lg">
                  <LazyImage
                    src="/images/features/healthcare-ai/storyboard-5a.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="margin-top--none">
                    AiHealth: "How do you feel now?"
                  </p>
                  <p>Jay: "A little better maybe... it's good to get up"</p>
                  <p>
                    AiHealth: "Well if that helped, here are some other things
                    we can do to help your body feel better..."
                  </p>
                  <p>
                    AiHealth walks Jay through washing their face, brushing
                    their teeth, putting on a fresh change of clothes, and
                    finally going outside to get some fresh air.
                  </p>
                </div>
                <div className="pure-u-1 pure-u-lg-1-2 pad-left--only-lg">
                  <LazyImage
                    src="/images/features/healthcare-ai/storyboard-6c.jpg"
                    className="image--max-width"
                    sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                  />
                  <p className="margin-top--none">
                    Jay starts texting AiHealth about what's been bothering
                    them: tension between friends groups at school, a big
                    misunderstanding, and just feeling really down for a while.
                  </p>
                  <p>
                    AiHealth listens, asks good questions, and makes space for
                    this.
                  </p>
                </div>
              </div>
              <LazyImage
                src="/images/features/healthcare-ai/chatgpt-output.jpg"
                className="image--max-width"
                sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
              />
              <p className="margin-top--none">
                <em>This image is a screenshot from ChatGPT</em>
              </p>
              <p>
                At the end AiHealth asks if they'd like any help or suggestions
                to feel better.
              </p>
              <h2 className="header--lg margin-top--double margin-bottom--none">
                What purposes could an AI patient tool serve?
              </h2>
              <p>Here's how we imagine it:</p>
              <ul>
                <li>
                  <strong>Interoperability</strong>
                </li>
                <ul>
                  <li>Gathers and merges all longitudinal patient data</li>
                  <li>Helps identify gaps and missing data</li>
                </ul>
                <li>
                  <strong>
                    Context and location-based support and resources
                  </strong>
                </li>
                <ul>
                  <li>
                    Refers to information regarding health conditions, housing
                    security, employment status, etc.
                  </li>
                  <li>Provides basic resources, local support in your town</li>
                </ul>
                <li>
                  <strong>Symptom check / diagnostic help</strong>
                </li>
                <ul>
                  <li>
                    Patient takes a photo and/or provides information about
                    symptoms and AI provides top-N answers
                  </li>
                  <li>Should be trained on medical diagnostic databases</li>
                  <li>
                    Can feature a more conversational tone than current options
                    like Ada Health and Babylon chat bots
                  </li>
                </ul>
                <li>
                  <strong>
                    Live support at appointments, both in-person and virtual
                  </strong>
                </li>
                <ul>
                  <li>
                    Guides the patient in reflecting on how they've been and
                    visualizing their health since their last visit
                  </li>
                  <li>
                    Provides the patient with a list of possible questions to
                    ask their doctor
                  </li>
                  <li>
                    Helps identify missing information needed for optimal care
                  </li>
                  <li>
                    Helps the patient keep track of to-do lists and care plans
                  </li>
                </ul>
                <li>
                  <strong>Just-in-time support</strong>
                </li>
                <ul>
                  <li>
                    Provides real-time feedback on exercising more effectively
                  </li>
                  <li>
                    Notices health condition risks in real time, like sleep
                    apnea, anxiety, etc.
                  </li>
                  <li>Reaches out if it identifies that I'm in crisis</li>
                  <li>Helps during emergencies, like suggesting who to call</li>
                </ul>
                <li>
                  <strong>
                    Health check-ins that increase patient engagement in their
                    own health
                  </strong>
                </li>
                <ul>
                  <li>
                    Asks how the person is doing, prompts them to describe
                    concerns, provides best practice suggestions, helps them
                    decide what habits or actions to try, follows up for
                    accountability and reflection
                  </li>
                  <li>
                    Generates article summaries and visual patient information
                    for different conditions, increasing accessibility of
                    anything from basic human biology to recent neuroscience
                    research
                  </li>
                </ul>
                <li>
                  <strong>Personal health scans</strong>
                </li>
                <ul>
                  <li>
                    Continually or periodically reviews the patient's data and
                    care they've received, notes positive health trends and
                    improvements, spotlights areas that need attention, helps
                    the patient identify what to prioritize
                  </li>
                  <li>
                    Examples: When do I need to schedule my next physical, eye
                    exam, dentist appointment, flu shot, cancer screening, etc?
                  </li>
                </ul>
              </ul>
              <div>
                <LazyImage
                  src="/images/features/healthcare-ai/sketch-ai-bench.jpg"
                  className="image--max-width image--center margin-top--double"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <div>
                <LazyImage
                  src="/images/features/healthcare-ai/sketch-ai-bedroom.jpg"
                  className="image--max-width image--center margin-top--double"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <div>
                <LazyImage
                  src="/images/features/healthcare-ai/sketch-ai-encounter.jpg"
                  className="image--max-width image--center margin-top--double"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <div>
                <LazyImage
                  src="/images/features/healthcare-ai/sketch-ai-train.jpg"
                  className="image--max-width image--center margin-top--double"
                  sizes={config.sizes.fullToHalfAtLargeInsideMaxWidth}
                />
              </div>
              <h2 className="header--lg margin-top margin-bottom--none">
                Ripple Effects and Unintended Outcomes
              </h2>
              <p>Here are the big conversations we think need to happen:</p>
              <ul>
                <li>
                  <strong>Misinformation at scale</strong>: Stack Overflow
                  banned ChatGPT answers as it got swamped with quality control
                  at scale. ChatGPT makes it incredibly easy to post an answer,
                  but the non-zero error rate is a real problem for quality
                  control. There's no easy way to check ChatGPT's answers
                  without doing the research manually. This could become a
                  serious problem if everyone uses a similar tool for health
                  answers.
                </li>
                <li>
                  <strong>Harmful information</strong>: "Molotov Cocktail
                  questions" can still be achieved by phrasing as a{' '}
                  <a href="https://twitter.com/zswitten/status/1598197802676682752">
                    print function question
                  </a>
                  . Presumably similar information about how to effectively
                  commit suicide, for example, could be easily obtained.
                </li>
                <li>
                  <strong>Perpetuating harmful biases, conventions, etc</strong>
                  : The AI will provide answers based on the material it is
                  trained on. If the material is biased or non-inclusive, the
                  AI's answers will reflect that. For example, when asked to
                  portray a telehealth call, MidJourney generated four all-white
                  doctors, three of whom were male.
                </li>
                <li>
                  <strong>Impact on human workers</strong>: In the long run, AI
                  could replace writers, artists, musicians, and many
                  white-collar jobs. Ideally, AI could augment these people's
                  work by generating a starting point that humans can perfect or
                  brainstorming initial concepts. However, this new technology
                  may ultimately fill jobs and put humans out of work.
                </li>
                <li>
                  <strong>Property and ownership issues</strong>: Many have
                  raised the issue that image generation AI is trained on art
                  that it does not own. Some artists have seen their personal
                  style and even their signature show up in Stable Diffusion (
                  <a href="https://www.cbc.ca/radio/asithappens/artificial-intelligence-ai-art-ethics-greg-rutkowski-1.6679466">
                    article
                  </a>
                  ).
                </li>
                <li>
                  <strong>
                    Our relationship with technology and each other
                  </strong>
                  : Human immersion into technology has not always had a
                  positive impact on health (e.g., social media's impact on
                  mental health). How can we make sure we're not running blindly
                  into more negative effects in the name of "progress?" How will
                  an increase of artificial intelligence impact human
                  intelligence? It may allow humans to learn and accomplish new
                  things, but it may also reduce our skills in other areas, like
                  synthesis of information. It's important to closely examine
                  what we might be losing.
                </li>
              </ul>
            </div>
          </div>

          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <Divider />
              <h2 className="header--xl text--center">Authors</h2>
              <Author name="Sharon Lee" />
              <Author name="Juhan Sonin" />
              <div className="pad-vertical--double">
                <h3 className="header--md">Contributors</h3>
                <p>
                  Eric Benoit
                  <br />
                  Xiaokun Qian
                  <br />
                  Carina Zhang
                </p>
              </div>
            </div>
          </div>

          <div className="background--gray pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HealthcareAIFeature
