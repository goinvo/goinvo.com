import React, { Component } from 'react'

class References extends Component {
  render() {
    return (
      <div>
        <h3 className="header--md">References</h3>
        <ol className="references">
          {this.props.references.map((ref, i) => {
            const key = ref.link && ref.link.length ? ref.link : ref.title;
            return (
              <li key={key} className="text--gray margin-bottom">
                <span id={`fn-${i + 1}`}>{ref.title}</span>
                {
                  ref.link ?
                    <span>: <a href={ref.link} target="_blank" rel="noopener noreferrer">{ref.link}</a></span>
                  : null
                }
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default References
