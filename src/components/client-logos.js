import React, { Component } from 'react'

import ThreeM from '../assets/images/client-logos/logo-3m.inline.svg'
import BD from '../assets/images/client-logos/logo-bd.inline.svg'
import InfoBionic from '../assets/images/client-logos/logo-infobionic.inline.svg'
import JohnsonAndJohnson from '../assets/images/client-logos/logo-jnj.inline.svg'
import JournalOfParticipatoryMedicine from '../assets/images/client-logos/logo-journalofparticipatorymedicine.inline.svg'
import Mass from '../assets/images/client-logos/logo-mass.inline.svg'
import MGH from '../assets/images/client-logos/logo-mgh.inline.svg'
import Mitre from '../assets/images/client-logos/logo-mitre.inline.svg'
import MountSinai from '../assets/images/client-logos/logo-mountsinai.inline.svg'
import NationalScienceFoundation from '../assets/images/client-logos/logo-nationalsciencefoundation.inline.svg'
import NIH from '../assets/images/client-logos/logo-nih.inline.svg'
import Partners from '../assets/images/client-logos/logo-partners.inline.svg'
import PersonalGenomeProject from '../assets/images/client-logos/logo-pgp.inline.svg'
import Walgreens from '../assets/images/client-logos/logo-walgreens.inline.svg'
import Wuxi from '../assets/images/client-logos/logo-wuxinextcode.inline.svg'

class ClientLogos extends Component {
  render() {
    return (
      <ul className="list--unstyled client-logos">
        <li>
          <ThreeM />
        </li>
        <li>
          <Partners />
        </li>
        <li>
          <BD />
        </li>
        <li className="hidden--sm">
          <InfoBionic />
        </li>
        <li className="hidden--sm">
          <MGH />
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
          <NIH />
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
    )
  }
}

export default ClientLogos
