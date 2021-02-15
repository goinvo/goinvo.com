import React, { Component } from 'react'
//import Image from '../../image'
import BackgroundImage from '../../background-image'
import { mediaUrl } from '../../../helpers'

class ProblemCard extends Component {
  render() {
    const {
      sizes,
      id,
      title,
      description,
      deaths,
      peopleImpacted,
      spending,
      tags,
      references = null,
    } = this.props

    // const downloadLink = this.props.downloadLink
    //   ? mediaUrl(this.props.downloadLink)
    //   : this.state.downloadLink

    return (
      <div className="problem">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            {deaths} Deaths - {peopleImpacted} People Impacted - {spending}{' '}
            Spent
          </p>
        </div>
      </div>
    )
  }
}

export default ProblemCard
