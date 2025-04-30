import React, { Component } from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import Carousel from '../../components/carousel'
import GradientImageColumns from '../../components/gradient-image-columns'
import Quote from '../../components/quote'
import Columns from '../../components/columns'
import ImageBlock from '../../components/image-block'
import MailerLiteHiringForm from '../../components/mailerlite-hiring-form'
import BackgroundImage from '../../components/background-image'

import config from '../../../config'

const frontmatter = {
  metaTitle: 'Join our team of Healthcare UX designers & engineers',
  metaDescription:
    "If you're an independent thinker and passionate maker hunting for meaningful work, give us a holler.",
  heroImage: '/images/about/careers/jen-journeymap-2.jpg',
}

class CareersPage extends Component {
  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage}>
          <h1 className="header--xl">
            This is our job
            <span className="text--serif text--primary">!</span>
          </h1>
        </Hero>
        <div className="background--blue pad-vertical--double">
          <div className="max-width content-padding">
            <div className="pure-g">
              <div className="pure-u-1 pure-u-lg-1-3 pad-right--only-lg">
                <h3 className="header--sm margin-bottom--half">
                  We are open source
                </h3>
                <p className="text--gray margin-top--half">
                  We operate as an open company. Our finances are open. You own
                  a part of the company the moment you walk in the door. And all
                  of our products are licensed under open source licenses.
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3 pad-left--only-lg pad-right--only-lg">
                <h3 className="header--sm margin-bottom--half">
                  Design for action
                </h3>
                <p className="text--gray margin-top--half">
                  Design is not a theoretical exercise. Design like you give a
                  damn and ship. Shippers change the world.
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-3 pad-left--only-lg">
                <h3 className="header--sm margin-bottom--half">
                  Demand truth and justice
                </h3>
                <p className="text--gray margin-top--half">
                  Hunting for systemic problems, popping political blisters, and
                  fighting for the right idea are parts of finding truth... and
                  key to how we design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-width content-padding pad-top">
          <h2 className="header--xl margin-bottom--none">
            Experiencing GoInvo for
            <span className="text--serif text--primary">...</span>
          </h2>
        </div>
        <Carousel menuItems={['a summer internship', '1 year', '3 years']}>
          <GradientImageColumns
            image="/images/about/careers/lily-lunch.jpg"
            backgroundColor="gray"
            backgroundNotResponsive
          >
            <Quote
              background="gray"
              quotee="Lily Fan"
              quoteeSub="Design Intern"
              small
            >
              Interning at Invo made me realize the importance of not only
              working at an awesome company to help transform software in
              healthcare but the value of spending your every day in an
              extremely inclusive environment with a diverse range of people who
              genuinely want to see you succeed.
            </Quote>
          </GradientImageColumns>
          <GradientImageColumns
            image="/images/about/bai-laughing.jpg"
            backgroundColor="gray"
            backgroundNotResponsive
          >
            <Quote
              background="gray"
              quotee="Eric Bai"
              quoteeSub="Designer & Engineer"
              small
            >
              I started working at Invo as an engineer and gradually took on a
              greater design focus. My friends at Invo mentored and supported me
              as I learned design basics. But beyond just aiming for design
              competency, I was also challenged to consider the broader impact
              of the work &mdash;its effect on patients, on access to
              healthcare, and on health as a whole. If you want to work at a
              place that challenges you, supports you, and infuses your work
              with a sense of purpose, come to Invo.
            </Quote>
          </GradientImageColumns>
          <GradientImageColumns
            image="/images/about/careers/beckett-presentation.jpg"
            backgroundColor="gray"
            backgroundNotResponsive
          >
            <Quote
              background="gray"
              quotee="Beckett Rucker"
              quoteeSub="Designer"
              small
            >
              GoInvo provided a incubator-like space to expand my toolbox of
              skills and practices while also giving me a kick in the pants to
              cultivate my own design principles, passions, and ethics. It was
              an inspiring environment to do meaningful work with a family of
              driven, talented people.
            </Quote>
          </GradientImageColumns>
        </Carousel>
        <BackgroundImage src="/images/contact/studio.jpg" gradient>
          <div className="pad-vertical--quad pad--only-lg">
            <div className="background--gray max-width max-width--md content-padding--double pad-vertical--quad">
              <h2 className="header--xl margin-top--none">
                Working together towards a healthy groove
              </h2>
              <p>
                We’re looking for a designer and an engineer to join our
                intimate studio.
              </p>
              <p>
                If you’re familiar with our work, you know we design, build, and
                ship beautiful health software for companies of all sizes, like
                Apple, Johnson & Johnson, NIH (National Institutes of Health),
                and Walgreens, to micro startups. We are hyper-concerned about
                guiding people through tough decisions, and produce
                eyebrow-raising results.
              </p>
              <p>Our idealized candidate can be described in this way:</p>
              <p>
                <span className="text--bold">
                  First and foremost, you need to be exceptional:
                </span>
                <br />
                loving to design and build software, making is in your DNA,
                solving crazy problems with 50 different crazy solutions. You
                need to have a proven track record of designing healthcare
                software that has shipped.
              </p>
              <p>
                <span className="text--bold">
                  Second, you need to be a system thinker and serial do’er:
                </span>
                <br />
                to see more than just the design and production tasks but the
                entire product ecosystem, to having a firm grasp of engineering
                principles and business practices. You will need to lead not
                just yourself but other studio’ites and clients. Your
                responsibilities include leading projects and, over time,
                learning how to manage the entire service to designing software
                that is destined to ship. You will not be a cog in a machine.
                Your ideas will directly shape the experiences you create.
                Ultimately, you will be your own business unit within the studio
                and grappling with the holy trinity: design, technology, and
                business.
              </p>
              <p>
                <span className="text--bold">
                  Third, you have to really care about Design, your fellow
                  staff, and Spaceship Earth:
                </span>
                <br />
                being adrenalized about healthcare, business, writing, open
                source, innovation, craftsmanship, fun. You are given great
                freedom and responsibility for managing your own work program to
                mentoring staff to driving company goals. Taking pride in and
                feeling responsible for a high degree of personal ownership in
                your work is critical because thousands to millions of people
                will immediately interact with your finished designs. We are
                looking for a passionate, inspiring, design-obsessed apostle who
                can increase our IQs (as well as dramatically increase your
                own).
              </p>
              <p>
                That’s the kind of person we want. If you have those three
                qualities, just about anything else is negotiable.
              </p>
              <p>
                If you have any questions about the position, please email me.
              </p>
              <p>
                You can apply below, or send me your resume, portfolio, and
                phone number so we can chat.
              </p>
              <p>
                Looking forward,
                <br />
                Juhan Sonin, Director
                <br />
                <a href="mailto:juhan@goinvo.com">juhan@goinvo.com</a>
              </p>
              <div className="pad-top">
                <MailerLiteHiringForm />
              </div>
            </div>
          </div>
        </BackgroundImage>
        <div className="max-width content-padding pad-vertical--quad--only-lg">
          <Columns columns={3}>
            <ImageBlock
              key={'1'}
              image="/images/about/careers/group-lunch.jpg"
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
              title="Break Bread"
              caption="We cook for one another and share meals together. Cooking and eating as a tribe makes us a closer, better tribe."
            />
            <ImageBlock
              key={'2'}
              image="/images/about/careers/7-years-beards.jpg"
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
              title="Work & Play"
              caption="Design can be a grind. So is Life. Plan yours as you see fit. We don’t track vacation or sick days. Just be responsible."
            />
            <ImageBlock
              key={'3'}
              image="/images/about/careers/drone-hands.jpg"
              sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
              title="Makers & Shippers"
              caption="We explore with our hands, heads, and hearts. Tinkering with, building, and shipping things is part of our DNA."
            />
          </Columns>
        </div>
      </Layout>
    )
  }
}

export default CareersPage
