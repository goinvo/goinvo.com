import React, { Component } from 'react'

import Layout from '../../../components/layouts/layout'
import Hero from '../../../components/hero'
import SubscribeForm from '../../../components/form-subscribe'
import Columns from '../../../components/columns'
import ExperimentCard from '../../../components/vision/experiments/experiment-card'
////import { mediaUrl } from '../../../helpers'

import experiments from '../../../data/vision/experiments/experiments.json'

import config from '../../../../config'

const frontmatter = {
  metaTitle: 'Experiments in Design',
  metaDescription:
    'A repo of our experiments in design.',
  heroImage: '/images/features/healthcare-ai/healthcare-ai-hero-4.jpg',
}

class Experiments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      experimentItems: experiments,
    }
  }

  render() {
    return (
      <Layout frontmatter={frontmatter}>
        <Hero image={frontmatter.heroImage} />
        <div className="poster-feature">
          <div className="pad-vertical--double">
            <div className="max-width max-width--md content-padding">
              <h1 className="header--xl margin-bottom--none">
                Experiments in Design
              </h1>

              <Columns columns={3}>
                {this.state.experimentItems.map((experiment, i) => {
                  return (
                    <ExperimentCard
                      title={experiment.title}
                      image={experiment.image}
                      learnMoreLink={experiment.learnMoreLink}
                      id={experiment.id}
                      sizes={config.sizes.fullToThirdAtLargeInsideMaxWidth}
                    />
                  )
                })}
              </Columns>
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

export default Experiments
