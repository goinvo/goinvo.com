import React, { Component } from 'react'

class References extends Component {
  render() {
    return (
      <div>
        {!this.props.hideTitle ? (
          <h2 id="references" className="header--lg text--center margin-top--double">
            References
          </h2>
        ) : null}
        <ol className="references">
          {this.props.references.map((ref, i) => {
            const key = ref.link && ref.link.length ? ref.link : ref.title
            return (
              <li
                key={key}
                className="text--gray margin-bottom"
                id={`ref-${i + 1}`}
              >
                <span id={`fn-${i + 1}`}>{ref.title}</span>
                {ref.link ? (
                  <span>
                    :{' '}
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ref.link}
                    </a>
                  </span>
                ) : null}
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default References
