import React, { Component } from 'react'

class References extends Component {
  render() {
    return (
      <ol className="references">
        {this.props.references.map((ref, i) => {
          return (
            <li><span id={`fn-${i + 1}`}>{ref.title}</span>: <a href={ref.link}>{ref.link}</a></li>
          )
        })}
      </ol>
    )
  }
}

export default References
