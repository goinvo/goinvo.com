import React, { Component } from 'react'

import ThreeM from '../assets/images/client-logos/logo-3m.inline.svg'
import Bd from '../assets/images/client-logos/logo-bd.inline.svg'
import InfoBionic from '../assets/images/client-logos/logo-infobionic.inline.svg'
import JohnsonAndJohnson from '../assets/images/client-logos/logo-jnj.inline.svg'
import JournalOfParticipatoryMedicine from '../assets/images/client-logos/logo-journalofparticipatorymedicine.inline.svg'
import Mass from '../assets/images/client-logos/logo-mass.inline.svg'
import Mgh from '../assets/images/client-logos/logo-mgh.inline.svg'
import Mitre from '../assets/images/client-logos/logo-mitre.inline.svg'
import MountSinai from '../assets/images/client-logos/logo-mountsinai.inline.svg'
import NationalScienceFoundation from '../assets/images/client-logos/logo-nationalsciencefoundation.inline.svg'
import Nih from '../assets/images/client-logos/logo-nih.inline.svg'
import Partners from '../assets/images/client-logos/logo-partners.inline.svg'
import PersonalGenomeProject from '../assets/images/client-logos/logo-pgp.inline.svg'
import Walgreens from '../assets/images/client-logos/logo-walgreens.inline.svg'
import Wuxi from '../assets/images/client-logos/logo-wuxinextcode.inline.svg'
import Crossover from '../assets/images/client-logos/logo-crossover.inline.svg'

class ClientLogos extends Component {
  render() {
    return (
      <div>
        {this.props.openSource ? (
          <ul className="list--unstyled client-logos">
            <li>
              <Walgreens />
            </li>
            <li>
              <Nih />
            </li>
            <li className="">
              <PersonalGenomeProject />
            </li>
            <li className="">
              <Mitre />
            </li>
            <li className="hidden--sm">
              <Crossover />
            </li>
          </ul>
        ) : (
          <ul className="list--unstyled client-logos">
            <li>
              <ThreeM />
            </li>
            <li>
              <Partners />
            </li>
            <li>
              <Bd />
            </li>
            <li className="hidden--sm">
              <InfoBionic />
            </li>
            <li className="hidden--sm">
              <Mgh />
            </li>
            <li>
              <JohnsonAndJohnson />
            </li>
            <li>
              <MountSinai />
            </li>
            <li>
              <Wuxi />
            </li>
            <li>
              <Walgreens />
            </li>
            <li className="hidden--sm">
              <JournalOfParticipatoryMedicine />
            </li>
            <li className="hidden--sm">
              <NationalScienceFoundation />
            </li>
            <li>
              <Nih />
            </li>
            <li className="hidden--sm">
              <PersonalGenomeProject />
            </li>
            <li className="hidden--sm">
              <Mitre />
            </li>
            <li className="hidden--sm">
              <Mass />
            </li>
          </ul>
        )}
      </div>
    )
  }
}

export default ClientLogos
