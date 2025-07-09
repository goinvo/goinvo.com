import React, { Component } from 'react'
import CardSpotlight from './card-spotlight'
import ImageBlock from './image-block'
import config from '../../config'

class WorkItemsGrid extends Component {
  render() {
    const { workItems, extractWorkItemLinkDetails } = this.props

    // Define the grid layout pattern
    const gridPattern = [
      { span: 2, type: 'half' },    // Row 1: Half card
      { span: 1, type: 'quarter' }, // Row 1: Quarter card
      { span: 1, type: 'quarter' }, // Row 1: Quarter card
      { span: 1, type: 'quarter' }, // Row 2: Quarter card
      { span: 1, type: 'quarter' }, // Row 2: Quarter card
      { span: 2, type: 'half' },    // Row 2: Half card
      { span: 2, type: 'half' },    // Row 3: Half card
      { span: 2, type: 'half' },    // Row 3: Half card
      { span: 4, type: 'full' },    // Row 4: Full width card
    ]

    return (
      <div className="work-items-grid">
        <div className="work-items-grid__container">
          {workItems.slice(0, 9).map((item, i) => {
            const {
              link,
              externalLink,
              suppressNewTab,
            } = extractWorkItemLinkDetails(item)

            const gridItem = gridPattern[i] || { span: 1, type: 'quarter' }
            const cardClass = `work-items-grid__card work-items-grid__card--${gridItem.type}`

            return (
              <div
                key={link}
                className={`work-items-grid__item work-items-grid__item--span-${gridItem.span}`}
              >
                <CardSpotlight
                  link={link}
                  externalLink={externalLink}
                  suppressNewTab={suppressNewTab}
                  className={cardClass}
                >
                  <ImageBlock
                    title={item.title}
                    image={item.image}
                    client={item.client}
                    categories={item.categories}
                    caption={item.caption}
                    sizes={this.getImageSizes(gridItem.type)}
                    hoverable
                  />
                </CardSpotlight>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  getImageSizes(type) {
    switch (type) {
      case 'full':
        return config.sizes.fullToHalfAtMediumInsideMaxWidth
      case 'half':
        return config.sizes.fullToHalfAtMediumInsideMaxWidth
      case 'quarter':
        return config.sizes.fullToThirdAtLargeInsideMaxWidth
      default:
        return config.sizes.fullToHalfAtMediumInsideMaxWidth
    }
  }
}

export default WorkItemsGrid
