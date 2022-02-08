import React, { Component } from 'react'

import Mitre from '../assets/images/client-logos/logo-mitre.inline.svg'
import NIH from '../assets/images/client-logos/logo-nih.inline.svg'
import PersonalGenomeProject from '../assets/images/client-logos/logo-pgp.inline.svg'
import Walgreens from '../assets/images/client-logos/logo-walgreens.inline.svg'
import Crossover from '../assets/images/client-logos/logo-crossover.inline.svg'

class ClientLogos extends Component {
  render() {
    return (
      <ul className="list--unstyled client-logos">
        <li>
          <Walgreens />
        </li>
        <li>
          <NIH />
        </li>
        <li className="">
          <PersonalGenomeProject />
        </li>
        <li className="">
          <Mitre />
        </li>
        <li className="">
          <Crossover />
        </li>
      </ul>
    )
  }
}

export default ClientLogos
