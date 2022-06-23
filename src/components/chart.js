import React, { Component } from 'react'

class Chart extends Component {
  render() {
    return (
      <div className="network-diagram">
        <p className="category software">Clinical Software</p>

        <p className="list flux">FluxNote</p>
        <p className="list pro">Open Pro</p>
        <p className="list ehr">Inspired EHR</p>
        <p className="list hgraph">hGraph</p>

        <p className="category tools">Patient Tools</p>

        <p className="category std">Design &amp; Data Standard</p>

        <p className="category health">Understanding Healthcare</p>

        <p className="category viz">Understanding Healthcare</p>
      </div>
    )
  }
}

export default Chart
