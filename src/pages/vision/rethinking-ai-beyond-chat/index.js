import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import Divider from '../../../components/divider'
import SubscribeForm from '../../../components/form-subscribe'
import Image from '../../../components/image'
import Author from '../../../components/author'

import { mediaUrl } from '../../../helpers'

import config from '../../../../config'

const frontmatter = {
  metaTitle:
    'Rethinking AI Beyond Chat',
  metaDescription:
    'Exploring the potential of AI in design beyond conversational interfaces.',
  heroImage: '/images/features/rethinking-ai-beyond-chat/hero.jpg',
}

class RethinkingAIFeature extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} position="top center" />
        <div className="rethinking-ai-beyond-chat">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-top--half">
                Rethinking AI Beyond Chat
              </h1>
              <p>This is the first instalment of a new design experiment series we’ve launched at the studio. We will explore emerging technologies by closely examining how today’s tools work and where they fall short. Through quick, week-long design sprints, each experiment seeks to reimagine how tools could be used, who they serve, and how they are designed, treating technology not as neutral or inevitable, but as something that we can actively shape.</p>
              <Divider />
              <h2 className="header--xl margin-top--double">Designing with words?</h2>
              <p>Our first experiment looks at the rapid rise of generative AI creation tools, like Cursor, Claude Code, and Loveable. The ability to turn an idea into a working prototype with just a few words is impressive.</p>
              <Image
                src="/images/features/rethinking-ai-beyond-chat/claude-code.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="caption">Claude Code Interface, a generative AI tool that turns text prompts into code.</p>

              <p>But while these tools can at times feel like magic, the experience is not without its challenges. Most AI creation workflows rely almost entirely on text to communicate intent. Prototype generation, refinement, experimentation, and collaboration all collapse inside a single conversation thread. In practice, small tweaks can require a paragraph to change, exploring alternative designs risks breaking the prototype, and working in parallel with teammates is difficult, if not impossible. </p>

              <h2 className="header--xl margin-top--double">A new mental model</h2>
              <p>If you’re a designer, shared workspaces probably feel like second nature. Tools like Figma and Miro give you an infinite canvas where things can stay messy, ideas can live off to the side, and multiple people can work together without stepping on each other. It’s how a lot of work in the studio happens, sketching, testing, circling back, and building on each other’s thinking.</p>

              <Image
                src="/images/features/rethinking-ai-beyond-chat/figma-board.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="caption">A typical Figma board at the studio</p>

              <p>That got us wondering: <em>What if AI-assisted creation worked the same way? What if vibe coding was not locked inside a chat window? What if it lived in a shared space where ideas could be pulled apart, tested, and compared without breaking the main prototype?</em></p>

              <h2 className="header--xl margin-top--double">What we explored</h2>

              <Image
                src="/images/features/rethinking-ai-beyond-chat/text-user-input.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
              />
              <p className="caption">Text + Hand-drawn input</p>

              <p>Instead of relying on text alone, what if users can sketch their idea and annotate key areas with guidance for the AI. These sketches act as a visual brief, helping communicate layout, hierarchy, and interaction. And as a feedback mechanism, the AI can respond with a live prototype preview, making it easier to see what is working and adjust in real time.</p>

              <Image
                src="/images/features/rethinking-ai-beyond-chat/collaboration.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
                alt="Two designers collaborating on the same design prototype in Figma."
              />
              <p className="caption">Collaborating with prototype components in a shared workspace</p>

              <p>We also imagined generated prototypes as objects that could be pinned into a shared workspace rather than outputs trapped in a chat window. Designers can click into these prototypes, inspect components and layers, and treat the AI output as something tangible and editable. Multiple collaborators can explore ideas side by side instead of taking turns prompting.</p>

              <Image
                src="/images/features/rethinking-ai-beyond-chat/component-prompts.jpg"
                className="image--max-width"
                sizes={config.sizes.fullInsideMediumMaxWidth}
                alt="A designer is editing and prompting multiple screen states of a design."
              />
              <p className="caption">Editing and prompting at a component level</p>

              <p>From there, what if individual components can be pulled out of the main prototype to refined independently. Designers can edit or prompt at the component level to refine or explore variations without writing a paragraph of text for one small tweak or having to regenerate an entire screen. This approach also allows multiple users to run parallel exploration outside of the main prototype without impacting functionality. Once an iteration feels right, the component can be dropped back into the core design.</p>

              <h2 className="header--xl margin-top--double">Lessons Learned</h2>
              <p>Most AI creation tools today rely on a single chat thread, assuming a linear path from idea to production. Design rarely works that way. It is messy, iterative, and collaborative, with ideas branching, looping back, and evolving through discussion and experimentation.</p>
              <p>This experiment pushed us to rethink AI creation beyond one continuous conversation and toward a shared design environment. Instead of treating AI as something you talk to and then accept or reject, we explored what it looks like to work alongside it. AI becomes a partner that helps generate, test, and refine ideas in context rather than a shortcut to an end result. By grounding AI-assisted creation in the ways designers already think and work, we open up more flexible and collaborative approaches to design with these tools.</p>
            </div>

            <div className="pad-vertical--double">
              <div className="max-width max-width--md content-padding">
                <Divider />
                <div className="pad-vertical--double">
                  <h2 className="header--xl text--center">Authors</h2>
                  <Author name="Claire Lin" />
                  <Author name="Maverick Chan" />
                </div>
              </div>
            </div>

            <div className="pad-vertical--double background--gray">
              <div className="max-width max-width--md content-padding">
                <SubscribeForm />
              </div>
            </div>

          </div>
        </div>
      </Layout >
    )
  }
}

export default RethinkingAIFeature
