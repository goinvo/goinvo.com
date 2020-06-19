import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../../components/layouts/layout'
import Columns from '../../components/columns'
import Demand from '../../components/demand'

import studioDemands from '../../data/goinvo-action.json'

class DemandsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      demands: [],
      healthcareDemands: [],
      studioDemands,
    }
  }

  componentDidMount() {
    this.getDemands()
  }

  getDemands = () => {
    axios
      .get('https://listofdemands.us/GoInvo.json')
      .then(res => {
        // Remove duplicates of Demands (town vs state vs USA)
        const map = new Map()
        const demands = res.data.filter(demand => {
          const exists = map.get(demand.demand_description)
          if (exists) {
            return false
          }
          map.set(demand.demand_description, true)
          return true
        })

        const healthcareDemands = []
        demands.map((d, i) =>
          d.topic === 'Healthcare'
            ? healthcareDemands.push(demands.splice(i, 1)[0])
            : null
        )

        this.setState({
          demands,
          healthcareDemands,
        })
      })
      .catch(err => {
        console.log("Couldn't fetch GoInvo demands from ListOfDemands.us", err)
      })
  }

  render() {
    return (
      <Layout>
        <div className="max-width content-padding pad-vertical">
          <div className="pure-g">
            <div className="pure-u-1 pure-u-lg-1-5"></div>
            <div className="pure-u-1 pure-u-lg-4-5 pad-left">
              <h1 className="margin-bottom--none text--bold text--xl">
                GOINVO POSITION 2020
              </h1>
              <p className="margin--none text--lg text--bold">US POLICY</p>
              <p className="margin--none text--lg text--bold text--demand-red">
                US HEALTHCARE POLICY
              </p>
              <p className="margin-top--none text--lg text--bold text--demand-blue">
                GOINVO ACTION
              </p>
            </div>
            {this.state.demands.length ? (
              <div>
                <div className="pure-u-1 pure-u-lg-1-5 pad-left">
                  <h3 className="text--lg text--bold margin-top">US POLICY</h3>
                </div>
                <div className="pure-u-1 pure-u-lg-4-5">
                  <Columns strict>
                    {this.state.demands.map(demand => (
                      <Demand key={demand.id} data={demand} />
                    ))}
                  </Columns>
                </div>
              </div>
            ) : null}
            {this.state.healthcareDemands.length ? (
              <div>
                <div className="pure-u-1 pure-u-lg-1-5 pad-left">
                  <h3 className="text--lg text--bold margin-top text--demand-red">
                    US <br />
                    HEALTHCARE <br />
                    POLICY
                  </h3>
                </div>
                <div className="pure-u-1 pure-u-lg-4-5">
                  <Columns strict>
                    {this.state.healthcareDemands.map(demand => (
                      <Demand key={demand.id} data={demand} healthcare />
                    ))}
                  </Columns>
                </div>
              </div>
            ) : null}
            <div>
              <div className="pure-u-1 pure-u-lg-1-5 pad-left">
                <h3 className="text--lg text--bold margin-top text--demand-blue">
                  GOINVO ACTION
                </h3>
              </div>
              <div className="pure-u-1 pure-u-lg-4-5">
                <Columns strict>
                  {this.state.studioDemands.map(demand => (
                    <Demand key={demand.id} data={demand} studio />
                  ))}
                </Columns>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DemandsPage
