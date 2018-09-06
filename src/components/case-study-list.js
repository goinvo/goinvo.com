import React, { Component } from 'react'

import Card from './card'
import ImageBlock from './image-block'

import caseStudies from '../data/case-study-list.json'

// TODO:
// - Categories
// - Option to specify which items to show
// - Correct sorting (by featured, date?)
// - Pass sizes to ImageBlock/Image to optimize image load

class CaseStudyList extends Component {
  render() {
    return (
      <div className={`case-study-list case-study-list--${this.props.columns}`}>
        { caseStudies.map(study => {
          return (
            <div key={study.slug} className="case-study-list--item">
              <Card link={`/work/${study.slug}`}>
                <ImageBlock
                  title={study.title}
                  image={study.image}
                  client={study.client}
                  categories={study.categories}
                  caption={study.caption}
                  hoverable />
              </Card>
            </div>
          )
        })}
      </div>
    )
  }
}

CaseStudyList.defaultProps = {
  columns: 3
}

export default CaseStudyList
