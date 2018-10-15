import React from 'react'
import Chart from 'react-google-charts'

import determinants from './visualization-data.json'

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
  render() {
    return (
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
    );
  }
}

export default Chartdoh

/*google.visualization.events.addListener(chart, 'select', selectHandler);
selectHandlerApplied = true;

function selectHandler(e) {
  var selectedItem = chart.getSelection()[0];
  // console.log(selectedItem);

  if (selectedItem) {
    currentSelection = selectedItem.row;
    $("#determinant-info").html(template({determinantIndex: currentSelection, data: chartData}));
  }
}

class ChartDetails extends React.Component {
  render() {
    const { title, description, division } = this.props.determinant;
    const { title, factor } = this.props.division;

    return (
      //for selected determinant
      <div>
      <h4> {determinant.title} </h4>
      <p> {determinant.descriptions} </p>
      <div className="divisions">

          //loop through all divisions
          <div className="factors">
            //loop through all factors
            <h5>{determinant.division.title}</h5>
            <ul>
              <li>{determinant.division.factor}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
google.visualization.events.addListener(chart, 'ready', function() {
    // set the selection to the first row in the chart
    chart.setSelection([{"row": 3}]);
    $("#determinant-info").html(template({determinantIndex: 3, data: chartData}));
});

export default Chartdetails

*/

/*$(document).ready(function() {
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(getChartData);

  var $chartContainer = $('#determinants-chart');
  var chartData = [];
  var currentSelection = 0;

  function formatData(data) {
    // Grab the keys for the google charts data column titles
    var keys = Object.keys(data[0]);
    // Add the column titles as the first row
    var chartDeterminants = [keys];
    // Add rows for each determinant
    _.each(data, function(determinant, i) {
      chartDeterminants.push([]);
      _.each(keys, function(key) {
        chartDeterminants[i + 1].push(determinant[key]);
      });
    });
    return google.visualization.arrayToDataTable(chartDeterminants);
  }

  function getChartData() {
    $.getJSON("/features/determinants-of-health/visualization-data.json", function( data ) {
      chartData = formatData(data);

      drawChart();
    });
  }
  */

  /*function drawChart() {

    // Resize the container div
    var chartdiv = $("#determinants-chart");
    var factor = Math.max(Math.min(.55, (chartdiv.width()-600)/800), .4);
    chartdiv.height(chartdiv.width()*factor + "px");

    var options = {
      chartArea: { left: 10, top: 10, width: '90%', height: '90%' },
      legend: { position: "labeled" },
      pieHole: 0.25,
      pieSliceText: 'none',
      pieSliceTextStyle: { 'color': '#444', 'font-size': '12px' },
      fontName: "Open Sans",
      fontColor: "#444",
      tooltip: {"trigger":"none"},
      colors: ['#F9D7A7', '#B2E5E9', '#E8ED9D', '#F8CBC5', '#90EED4']
    };

    var chart = new google.visualization.PieChart($chartContainer[0]);
    chart.draw(chartData, options);

    var template = $("#determinant-info-template").html();
    var template = _.template(template);

    $("#determinant-info").html(template({determinantIndex: currentSelection, data: chartData}));

    google.visualization.events.addListener(chart, 'select', selectHandler);
    selectHandlerApplied = true;

    function selectHandler(e) {
      var selectedItem = chart.getSelection()[0];
      // console.log(selectedItem);

      if (selectedItem) {
        currentSelection = selectedItem.row;
        $("#determinant-info").html(template({determinantIndex: currentSelection, data: chartData}));
      }
    }


    google.visualization.events.addListener(chart, 'ready', function() {
        // set the selection to the first row in the chart
        chart.setSelection([{"row": 3}]);
        $("#determinant-info").html(template({determinantIndex: 3, data: chartData}));
    });

  }

  $(window).resize(function(){
    drawChart();
  });
});

*/
