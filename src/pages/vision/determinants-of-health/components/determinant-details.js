import React, { Component } from 'react'

class DOHDeterminantDetails extends Component {
  render() {
    const { title, description, divisions } = this.props;

    return (
      <div>
        <h3 className="determinant">{title}</h3>
        <p className="description">{description}</p>
        <div className="divisions">
          {divisions.map(division => {
            return (
              <div className="divisionSection" key={division.title}>
                <h4 className="division">{division.title}</h4>
                {
                  division.factors ?
                    <ul className="factors">
                      {division.factors.map(factor => {
                        return (
                          <li key={factor} className="factor">{factor}</li>
                        )
                      })}
                    </ul>
                  : null
                }
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default DOHDeterminantDetails
