import React, { Component } from 'react'

class Results extends Component {
  render() {
    return (
      <div className="results pad-top pad-bottom--double">
        <div className="max-width content-padding">
          <h2 className="header--lg text--center margin-bottom--half">Results</h2>
          <div className="pure-g">
            {this.props.stats.map(stat => {
              return (
                <div key={stat.stat} className="pure-u-1 pure-u-lg-1-3 text--center pad-all">
                  <span className="display--block text--xl text--serif text--primary">{stat.stat}</span>
                  <span className="text--gray">{stat.description}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Results
