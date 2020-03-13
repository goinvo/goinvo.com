import React, { Component } from 'react'

export default class Bars extends Component {
  color = data => {
    if (data.id === 'covid-19') {
      return this.props.valueKey === 'cases' ? '#D6D2EA' : '#563C8D'
    } else {
      return this.props.valueKey === 'cases' ? '#E2E2E2' : '#747070'
    }
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props
    const { xScale, yScale } = scales
    const { height } = svgDimensions

    const bars = data.map(datum => (
      <rect
        key={datum.id}
        x={xScale(datum.id)}
        y={yScale(datum[this.props.valueKey])}
        height={
          height - margins.bottom - scales.yScale(datum[this.props.valueKey])
        }
        width={xScale.bandwidth()}
        fill={this.color(datum)}
      />
    ))

    return <g>{bars}</g>
  }
}
