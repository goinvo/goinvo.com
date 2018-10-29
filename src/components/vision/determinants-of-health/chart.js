import React from 'react'
import Chart from 'react-google-charts'

import determinants from '../../../data/vision/determinants-of-health/chart-data.json'

import iconIndividualBehavior from '../../../assets/images/vision/determinants-of-health/icon-individual-behavior.svg'
import iconSocialCircumstances from '../../../assets/images/vision/determinants-of-health/icon-social-circumstances.svg'
import iconGeneticsAndBiology from '../../../assets/images/vision/determinants-of-health/icon-genetics-and-biology.svg'
import iconMedicalCare from '../../../assets/images/vision/determinants-of-health/icon-medical-care.svg'
import iconEnvironment from '../../../assets/images/vision/determinants-of-health/icon-environment.svg'

const options = {
  chartArea: { width: '100%'},
  legend: "none",
  pieHole: 0.25,
  pieSliceText: "none",
  pieSliceTextStyle: { color: "#444", "font-size": "12px" },
  fontName: "Open Sans",
  fontColor: "#444",
  tooltip: { trigger: "none" },
  colors: ["#F9D7A7", "#B2E5E9", "#E8ED9D", "#F8CBC5", "#90EED4"]
};

const icons = [
  iconIndividualBehavior,
  iconSocialCircumstances,
  iconGeneticsAndBiology,
  iconMedicalCare,
  iconEnvironment
]

class DOHChart extends React.Component {
  constructor(props) {
    super(props)

    this.data = determinants.map(determinant => {
      return [determinant.title, determinant.percentage]
    })
    this.data.unshift(["Determinant", "Percentage"]);

    this.state = {
      legendType: "none"
    }

    this.chart = null
  }

  componentDidMount() {
    this.setChartOptions()
    window.addEventListener("resize", this.setChartOptions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setChartOptions)
  }

  componentDidUpate() {
    if (this.chart) {
      this.chart.getChart().setSelection([{ row: this.props.selectedIndex, column: null }])
    }
  }

  getLegendType = () => {
    // This check is for the Gatsby build process, where window is not defined.
    if (typeof window !== 'undefined') {
      return window.innerWidth > 800 ? { position: "labeled" } : "none";
    }
  }

  getChartOptions = () => {
    const newLegend = { legend: this.getLegendType() };
    return {...options, ...newLegend}
  }

  setChartOptions = () => {
    if (this.chart) {
      this.chart.setOptions(this.getChartOptions())
    }
  }

  initChart = ({ chartWrapper }) => {
    this.chart = chartWrapper;
    this.chart.getChart().setSelection([{ row: this.props.selectedIndex, column: null }])
  }

  handleLegendSelect = (index) => {
    this.props.onSelect(index);
  }

  handleChartSelect = ({ chartWrapper }) => {
    this.props.onSelect(chartWrapper.getChart().getSelection()[0].row);
  }

  render() {
    return (
      <div>
        <ul className="list--unstyled doh__chart-legend">
          {determinants.map((d, i) => {
            return (
              <li key={d.id}>
                <button className="button button--transparent doh__determinant-button" onClick={() => this.handleLegendSelect(i)}>
                  <img src={icons[i]} alt={d.title} /><br/>
                  <span className="text--gray text--sm" style={{ textTransform: 'none', letterSpacing: '0' }}>{d.shortTitle}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <Chart
          chartType="PieChart"
          width="100%"
          height="450px"
          data={this.data}
          options={this.getChartOptions()}
          chartEvents={[
            {
              eventName: "ready",
              callback: this.initChart
            },
            {
              eventName: "select",
              callback: this.handleChartSelect
            }
          ]}
        />
      </div>
    );
  }
}

export default DOHChart
