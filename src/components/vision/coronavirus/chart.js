import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { format } from 'd3-format'

import Axis from './axis'
import Bars from './bars'

const data = [
  {
    id: 'sars',
    title: 'SARS',
    date: 'Nov 2002 - July 2003',
    cases: 8098,
    deaths: 774,
    // recovered: null,
  },
  {
    id: 'mers',
    title: 'MERS',
    date: 'Sep 2012 - 2015',
    cases: 2494,
    deaths: 858,
    // recovered: null,
  },
  {
    id: 'covid-19',
    title: 'COVID-19',
    date: 'Dec 2019 - Present',
    cases: 111363,
    deaths: 3892,
    // recovered: 62683,
  },
]

const xAxisData = [
  {
    key: 'cases',
    title: 'Confirmed cases',
  },
  {
    key: 'deaths',
    title: 'Deaths',
  },
  // {
  //   key: 'recovered',
  //   title: 'Recovered',
  // },
  {
    title: 'Death rate',
  },
]

const commaFormat = format(',')

class Chart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      containerWidth: null,
      // recovered: 0,
    }

    this.xScale = scaleBand()
    this.yScale = scaleLinear()

    this.axisElement = React.createRef()
    this.chartContainer = React.createRef()
  }

  componentDidMount() {
    this.fitParentContainer()
    window.addEventListener('resize', this.fitParentContainer)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitParentContainer)
  }

  fitParentContainer = () => {
    const { containerWidth } = this.state
    const currentContainerWidth = this.chartContainer.current.getBoundingClientRect()
      .width

    const shouldResize = containerWidth !== currentContainerWidth

    if (shouldResize) {
      this.setState({
        containerWidth: currentContainerWidth,
      })
    }
  }

  renderChart = () => {
    const isMobile = window.innerWidth < 700 ? true : false
    const margins = {
      top: isMobile ? 45 : 75,
      right: 20,
      bottom: 200,
      left: isMobile ? 100 : 175,
    }
    const svgDimensions = {
      width: this.state.containerWidth || 800,
      height: isMobile ? 500 : 700,
    }
    const { height, width } = svgDimensions
    const { cases, deaths } = this.props

    data[2] = Object.assign(data[2], { cases, deaths })

    data.forEach(d => (d.rate = d.deaths / d.cases))

    const maxValue = Math.max(...data.map(d => d.cases))

    const xScale = this.xScale
      .paddingOuter(0.25)
      .paddingInner(0.5)
      .domain(data.map(d => d.id))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = this.yScale
      .domain([0, maxValue + 10000])
      .range([svgDimensions.height - margins.bottom, margins.top])

    // const xProps = {
    //   orient: 'Bottom',
    //   scale: xScale,
    //   translate: `translate(0, ${height - margins.bottom})`,
    //   tickSize: height - margins.top - margins.bottom,
    // }

    const yProps = {
      orient: 'Left',
      scale: yScale,
      translate: `translate(${margins.left}, 0)`,
      tickSize: width - margins.left - margins.right,
    }

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        {/* <Axis {...xProps} /> */}
        <Axis {...yProps} />
        <g transform="translate(0, 30)">
          {data.map(d => {
            return (
              <g x={xScale(d.id) + xScale.bandwidth() / 2} textAnchor="middle">
                <text
                  x={xScale(d.id) + xScale.bandwidth() / 2}
                  className={
                    d.id === 'covid-19'
                      ? 'coronavirus-text--primary coronavirus-text--bold'
                      : ''
                  }
                >
                  {d.title}
                </text>
                {!isMobile ? (
                  <text
                    className={
                      d.id === 'covid-19' ? 'coronavirus-text--primary' : ''
                    }
                    x={xScale(d.id) + xScale.bandwidth() / 2}
                    y={25}
                  >
                    {d.date}
                  </text>
                ) : null}
              </g>
            )
          })}
        </g>
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          valueKey="cases"
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          valueKey="deaths"
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
        <g transform={`translate(0, ${height - (margins.bottom - 40)})`}>
          {xAxisData.map((d, i) => {
            const rowHeight = 50
            return (
              <g transform={`translate(0, ${i * rowHeight})`}>
                {d.key === 'cases' && isMobile ? (
                  <g>
                    <text dy="-0.2em">Confirmed</text>
                    <text dy="1em">cases</text>
                  </g>
                ) : d.key === 'cases' ? (
                  <g>
                    <text dy="0.4em">Confirmed cases</text>
                  </g>
                ) : (
                  <text
                    className={!d.key ? 'coronavirus-text--bold' : ''}
                    dy="0.4em"
                  >
                    {d.title}
                  </text>
                )}
                {data.map(v => {
                  return (
                    <g>
                      <rect
                        x={xScale(v.id) - xScale.bandwidth() / 2}
                        y={-(rowHeight / 2)}
                        width={xScale.bandwidth() * 2}
                        height={rowHeight}
                        fill={
                          d.key === 'cases'
                            ? v.id === 'covid-19'
                              ? '#D6D2EA'
                              : '#E2E2E2'
                            : d.key === 'deaths'
                            ? v.id === 'covid-19'
                              ? '#563C8D'
                              : '#747070'
                            : 'transparent'
                        }
                      />
                      <text
                        className={!d.key ? 'coronavirus-text--bold' : ''}
                        x={xScale(v.id) + xScale.bandwidth() / 2}
                        dy="0.4em"
                        textAnchor="middle"
                        fill={d.key === 'deaths' ? 'white' : ''}
                      >
                        {d.key
                          ? commaFormat(v[d.key])
                          : ((v.deaths / v.cases) * 100).toFixed(1) + '%'}
                      </text>
                    </g>
                  )
                })}
              </g>
            )
          })}
        </g>
      </svg>
    )
  }

  render() {
    return (
      <div className="chart" ref={this.chartContainer}>
        {this.state.containerWidth !== null && this.renderChart()}
      </div>
    )
  }
}

export default Chart
