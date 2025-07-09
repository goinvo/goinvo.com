import React, { Component } from 'react'
import { Link } from 'gatsby'
import Image from './image'
import Card from './card'
import ImageBlock from './image-block'
import config from '../../config'

class WorkSpotlightGrid extends Component {
  render() {
    const { workItems, extractWorkItemLinkDetails } = this.props
    const items = workItems ? workItems.slice(0, 9) : []

    return (
      <div className="work-spotlight-grid">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            {items[0] && this.renderWorkItem(items[0], extractWorkItemLinkDetails)}
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            {items[1] && this.renderWorkItem(items[1], extractWorkItemLinkDetails)}
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            {items[2] && this.renderWorkItem(items[2], extractWorkItemLinkDetails)}
          </div>
        </div>

        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            {items[3] && this.renderWorkItem(items[3], extractWorkItemLinkDetails)}
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            {items[4] && this.renderWorkItem(items[4], extractWorkItemLinkDetails)}
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            {items[5] && this.renderWorkItem(items[5], extractWorkItemLinkDetails)}
          </div>
        </div>

        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            {items[6] && this.renderWorkItem(items[6], extractWorkItemLinkDetails)}
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
            {items[7] && this.renderWorkItem(items[7], extractWorkItemLinkDetails)}
          </div>
        </div>

        <div className="pure-g">
          <div className="pure-u-1">
            {items[8] && this.renderWorkItem(items[8], extractWorkItemLinkDetails)}
          </div>
        </div>
      </div>
    )
  }

  renderWorkItem(item, extractWorkItemLinkDetails) {
    const {
      link,
      externalLink,
      suppressNewTab,
    } = extractWorkItemLinkDetails(item)

    return (
      <div className="work-spotlight-grid__item">
        <Card
          link={link}
          externalLink={externalLink}
          suppressNewTab={suppressNewTab}
          className="work-spotlight-grid__card"
          noShadow
          fillHeight
          spotlight
        >
          <ImageBlock
            title={item.title}
            image={item.image}
            categories={item.categories}
            sizes={config.sizes.fullInsideMediumMaxWidth}
            hoverable
          />
        </Card>
      </div>
    )
  }
}

export default WorkSpotlightGrid
