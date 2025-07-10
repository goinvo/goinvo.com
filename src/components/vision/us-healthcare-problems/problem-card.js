import React, { Component } from 'react'

class ProblemCard extends Component {
  render() {
    const {
      number,
      id,
      title,
      description,
      deaths,
      peopleImpacted,
      spending,
      references = null,
    } = this.props

    return (
      <div className="problem">
        <div className={id}>
          <h2>
            {number + 1}.&nbsp;
            {title}
            {references ? (
              <a href="#references">
                <sup>{references}</sup>
              </a>
            ) : null}
          </h2>
          <p>{description}</p>

          <p>
            {deaths ? <span>{deaths} Deaths - </span> : null}
            {peopleImpacted ? (
              <span>{peopleImpacted} People Impacted - </span>
            ) : null}
            {spending ? <span>{spending} Spending</span> : null}
          </p>
        </div>
      </div>
    )
  }
}

export default ProblemCard
