import React from 'react'

import Layout from '../../components/layouts/layout'
import Hero from '../../components/hero'
import ImageBlock from '../../components/image-block'
import TeamMember from '../../components/team-member'
import Columns from '../../components/columns'
import Card from '../../components/card'

import alumni from '../../data/alumni.json'

import config from '../../../config'

const upNextList = [
  {
    link: 'http://www.opensourcehealthcare.org',
    externalLink: true,
    image:
      '/images/features/open-source-healthcare/open-source-healthcare-featured.jpg',
    title: 'Open Source Healthcare Journal',
    caption:
      'The debut issue of our Open Source Healthcare Journal, advocating innovative open source ideas to change healthcare for the better.',
  },
  {
    link: '/work/?category=open-source',
    image: '/images/services/hgraph-ipad.jpg',
    title: 'Open source healthcare products',
    caption:
      'Learn about our opensource projects and why we’re passionate about making healthcare open.',
  },
  {
    link: 'https://www.goinvo.com/features/print-big/',
    externalLink: true,
    suppressNewTab: true,
    image:
      '/images/features/print-big-print-often/print-big-print-often-featured.jpg',
    title: 'Print big. Print often.',
    caption:
      'In strategy, the pieces and parts are typically nested in different documents that do not allow everything to be seen at once. The ability to see everything at once, at anytime, is core to our approach.',
  },
]

const frontmatter = {
  metaTitle: 'About GoInvo, a Healthcare UX design company in Boston',
  metaDescription:
    'Over the past decade, we’ve created beautiful software for patients, clinicians, researchers, and administrators.',
  heroImage: '/images/about/care-cards-hand.jpg',
}

const AlumniPage = () => (
  <Layout frontmatter={frontmatter}>
    <Hero image={frontmatter.heroImage}>
      <h1 className="header--xl">
        Never forget
        <span className="text--serif text--primary">.</span>
      </h1>
    </Hero>
    <div className="max-width content-padding">
      <h2 className="header--xl text--center pad-vertical--double">Alumni</h2>
      {alumni.map(member => (
        <TeamMember key={member.name} member={member} />
      ))}
    </div>
    <div className="background--blue">
      <div className="max-width content-padding pad-vertical pad-vertical--quad--only-lg">
        <h4 className="header--md">Up next</h4>
        <Columns columns={3}>
          {upNextList.map(item => {
            return (
              <Card
                key={item.link}
                link={item.link}
                externalLink={item.externalLink}
                suppressNewTab={item.suppressNewTab}
              >
                <ImageBlock
                  title={item.title}
                  image={item.image}
                  caption={item.caption}
                  sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                  hoverable
                />
              </Card>
            )
          })}
        </Columns>
      </div>
    </div>
  </Layout>
)

export default AlumniPage
