import React, { Component } from 'react'

import Card from './card'

class Demand extends Component {
  render() {
    const { data } = this.props

    return (
      <Card
        className={`demand ${
          this.props.healthcare ? 'demand--healthcare' : ''
        } ${this.props.studio ? 'demand--studio' : ''}`}
        link={
          this.props.studio
            ? false
            : `https://www.listofdemands.us/demands/${data.id}`
        }
        externalLink={this.props.studio ? false : true}
      >
        <h4 className="demand__title">{data.demand_description}</h4>
        <p>{data.solution}</p>
      </Card>
    )
  }
}

export default Demand
