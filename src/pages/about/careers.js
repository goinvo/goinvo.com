import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import Carousel from '../../components/carousel'
import GradientImageColumns from '../../components/gradient-image-columns'
import Quote from '../../components/quote'
import Columns from '../../components/columns'
import ImageBlock from '../../components/image-block'
import MailerLiteHiringForm from '../../components/mailerlite-hiring-form'
import { LazyImage } from '../../components/optimized-image'
import Card from '../../components/card'

import config from '../../../config'

import jobsData from '../../data/jobs.json'

const frontmatter = {
  metaTitle: 'Join our team of UX designers & engineers',
  metaDescription:
    "If you're an independent thinker and passionate maker hunting for meaningful work, give us a holler.",
  heroImage: '/images/about/careers/jen-journeymap-2.jpg',
}

class CareersPage extends Component {
  render() {
    const currentJobs = jobsData.filter(job => !job.closed)

    return (
      <Layout frontmatter={frontmatter}>
        <Helmet
          title={frontmatter.metaTitle}
          meta={[
            {
              name: 'description',
              content: frontmatter.metaDescription,
            },
          ]}
        />
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
        <div className="max-width content-padding">
          <h2 className="header--lg margin-bottom--half margin-top--double">
            Open Roles
          </h2>
          {currentJobs.length ? (
            <div className="pure-g">
              {currentJobs.map((job, i) => {
                return (
                  <div
                    className="pure-u-1 pure-u-lg-1-2 margin-bottom"
                    key={i}
                  >
                    <Card link={job.url} externalLink>
                      <h3 className="header--sm margin-bottom--quarter">
                        {job.title}
                      </h3>
                      <p className="text--gray margin-bottom--quarter">
                        {job.location}
                      </p>
                      <p className="margin-top--half">{job.description}</p>
                    </Card>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text--gray">
              No current openings! But we&apos;re always looking for
              exceptional people.{' '}
              <a href="mailto:careers@goinvo.com">Email us</a> if you&apos;d
              like to learn more.
            </p>
          )}
        </div>
        <Quote
          background="gray"
          quotee="Sabrina Tse"
          quoteeSub="UX Designer"
        >
          At GoInvo, I've learned to approach design as a way to make
          people's lives better, to help them solve real world problems.
          Every project is an exercise in empathy and understanding humans.
        </Quote>
        <div className="pad-vertical--double background--blue">
          <div className="max-width content-padding text--center">
            <h2 className="header--lg margin-bottom--half">Work-Life Balance</h2>
            <p className="text--gray margin-bottom--double">
              We believe in putting yourself, your family, and your life
              first. Our benefits package reflects that.
            </p>
            <div className="benefits pure-g">
              <div className="pure-u-1 pure-u-lg-1-4 benefit">
                <h3 className="header--sm text--bold">Healthcare</h3>
                <p className="text--gray">
                  GoInvo pays for 100% of health, dental, and vision insurance
                  for you and your family.
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-4 benefit">
                <h3 className="header--sm text--bold">
                  Paid Time Off
                </h3>
                <p className="text--gray">
                  We provide 33 days of PTO annually, including holidays, sick
                  time, and vacation.
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-4 benefit">
                <h3 className="header--sm text--bold">Remote</h3>
                <p className="text--gray">
                  Our team is distributed. Work from our studio space, your
                  home, or anywhere you&apos;re most productive.
                </p>
              </div>
              <div className="pure-u-1 pure-u-lg-1-4 benefit">
                <h3 className="header--sm text--bold">Equipment</h3>
                <p className="text--gray">
                  We&apos;ll get you set up with a laptop, external monitor,
                  and anything else you need to do your best work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="background--gray pad-vertical">
          <LazyImage 
            src="/images/contact/studio.jpg" 
            gradient
            alt="GoInvo studio space"
            placeholderType="skeleton"
            placeholderColor="#e8e8e8"
            className="background-image"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              background: `linear-gradient(
                to top,
                #F3F1F0 0%,
                rgba(237, 233, 230, 0.9932) 20%,
                rgba(234, 228, 225, 0.9893) 25%,
                rgba(234, 228, 225, 0.8979) 40%,
                rgba(234, 228, 225, 0.82) 55%,
                rgba(234, 228, 225, 0.538) 70%,
                rgba(234, 228, 225, 0) 100%
              ), url('${config.cloudfrontUrl}/images/contact/studio.jpg') top center / cover no-repeat`
            }}
          />
        </div>
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
              caption="Design can be a grind. So is Life. Plan yours as you see fit. We don't track vacation or sick days. Just be responsible."
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
