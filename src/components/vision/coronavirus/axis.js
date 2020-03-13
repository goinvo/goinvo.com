import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { format } from 'd3-format'
import { select as d3Select } from 'd3-selection'

export default class Axis extends Component {
  constructor(props) {
    super(props)

    this.axisElement = React.createRef()
  }

  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    const axisType = `axis${this.props.orient}`
    const axis = d3Axis[axisType]()
      .scale(this.props.scale)
      .tickSize(-this.props.tickSize)
      .tickPadding([12])
      .tickFormat(format('~s'))
      .ticks([8])

    d3Select(this.axisElement.current).call(axis)
  }

  render() {
    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={this.axisElement}
        transform={this.props.translate}
      />
    )
  }
}
