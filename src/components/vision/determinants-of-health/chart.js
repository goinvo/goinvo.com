import React from 'react'
import Chart from 'react-google-charts'

import determinants from '../../../data/vision/determinants-of-health/chart-data.json'

const options = {
  legend: { position: "labeled" },
  pieSliceText: "none",
  pieHole: 0.25,
  pieSliceTextStyle: { color: "#444", "font-size": "12px" },
  fontName: "Open Sans",
  fontColor: "#444",
  tooltip: { trigger: "none" },
  colors: ["#F9D7A7", "#B2E5E9", "#E8ED9D", "#F8CBC5", "#90EED4"]
};

class DOHChart extends React.Component {
  constructor(props) {
    super(props)

    this.data = determinants.map(determinant => {
      return [determinant.title, determinant.percentage]
    })
    this.data.unshift(["Determinant", "Percentage"]);
  }

  shouldComponentUpdate() {
    // Meh. The component was always re-rendering, but not retriggering
    // the 'ready' event, thus we were losing the internal
    // chart's selection. This component is basically dumb so we shouldn't
    // need to re-render, especially because I don't think there's an event
    // to set the selection again.
    return false
  }

  handleSelect = ({ chartWrapper }) => {
    this.props.onSelect(chartWrapper.getChart().getSelection());
  }

  setSelection = ({ chartWrapper }) => {
    chartWrapper.getChart().setSelection([this.props.selection])
  }

  render() {
    return (
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={this.data}
          options={options}
          chartEvents={[
            {
              eventName: "ready",
              callback: this.setSelection
            },
            {
              eventName: "select",
              callback: this.handleSelect
            }
          ]}
        />
    );
  }
}

export default DOHChart
