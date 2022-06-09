import React, { Component } from 'react'
import { Graph } from 'react-d3-graph'
import config from '../data/chartconfig'
import data from '../data/chartdata'

class NetworkChart extends Component {
  render() {
    const onClickNode = function(nodeId) {
      window.alert(`Clicked node ${nodeId}`)
    }

    return (
      <div>
        <Graph
          id="test"
          data={data}
          config={config}
          onClickNode={onClickNode}
        />
      </div>
    )
  }
}

export default NetworkChart
