import React from 'react'
import Chart from 'react-google-charts'

/*TODO: use json to populate */
const data = [
  ["Determinant", "Percentage"],
  ["Individual Behavior", 36],
  ["Social circumstances", 24],
  ["Genetics and Biology", 22],
  ["Medical Care", 11],
  ["Environment", 7]
];
const currentSelection = 0;

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

class Chartdoh extends React.Component {
  handleSelect = ({ chartWrapper }) => {
    this.props.onSelect(chartWrapper.getChart().getSelection());
  }

  render() {
    return (
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
          chartEvents={[
            {
              eventName: "select",
              callback: this.handleSelect
            }
          ]}
        />
    );
  }
}

export default Chartdoh
