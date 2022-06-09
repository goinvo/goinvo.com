import React, { Component } from 'react'
import { Graph } from 'react-d3-graph'
import config from '../data/chartconfig'
import data from '../data/chartdata'

class NetworkChart extends Component {
  render() {
    const onClickNode = function() {
      window.open(
        'https://www.goinvo.com/vision/determinants-of-health/',
        '_blank'
      )
    }

    return (
      <div>
        <Graph
          id="open-source-chart"
          data={data}
          config={config}
          onClickNode={onClickNode}
        />
      </div>
    )
  }
}

export default NetworkChart
