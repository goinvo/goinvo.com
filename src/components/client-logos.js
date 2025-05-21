import React, { Component } from 'react'

import ThreeM from '../assets/images/client-logos/logo-3m.inline.svg'
import Bd from '../assets/images/client-logos/logo-bd.inline.svg'
import CMS from '../assets/images/client-logos/logo-cms.inline.svg'
import Codametrix from '../assets/images/client-logos/logo-codametrix.inline.svg'
import Crossover from '../assets/images/client-logos/logo-crossover.inline.svg'
import DTA from '../assets/images/client-logos/logo-dtaconnect.inline.svg'
import InfoBionic from '../assets/images/client-logos/logo-infobionic.inline.svg'
import Ipsos from '../assets/images/client-logos/logo-ipsos.inline.svg'
import JohnsonAndJohnson from '../assets/images/client-logos/logo-jnj.inline.svg'
import JournalOfParticipatoryMedicine from '../assets/images/client-logos/logo-journalofparticipatorymedicine.inline.svg'
import Mass from '../assets/images/client-logos/logo-mass.inline.svg'
import Mgh from '../assets/images/client-logos/logo-mgh.inline.svg'
import Mitre from '../assets/images/client-logos/logo-mitre.inline.svg'
import MountSinai from '../assets/images/client-logos/logo-mountsinai.inline.svg'
import NationalScienceFoundation from '../assets/images/client-logos/logo-nationalsciencefoundation.inline.svg'
import NCI from '../assets/images/client-logos/logo-nci.inline.svg'
import Nih from '../assets/images/client-logos/logo-nih.inline.svg'
import NIH2 from '../assets/images/client-logos/logo-nih-2.inline.svg'
import Partners from '../assets/images/client-logos/logo-partners.inline.svg'
import PersonalGenomeProject from '../assets/images/client-logos/logo-pgp.inline.svg'
import Walgreens from '../assets/images/client-logos/logo-walgreens.inline.svg'
import Whitehouse from '../assets/images/client-logos/logo-whitehouse.inline.svg'
import Wuxi from '../assets/images/client-logos/logo-wuxinextcode.inline.svg'


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
        ) :
          this.props.enterprise ? (
            <ul className="list--unstyled client-logos">
              <li>
                <Walgreens />
              </li>
              <li>
                <Nih />
              </li>
              <li className="">
                <ThreeM />
              </li>
              <li className="">
                <Mitre />
              </li>
              <li className="hidden--sm">
                <Crossover />
              </li>
            </ul>
          ) :
            this.props.government ? (
              <ul className="list--unstyled client-logos">
                <li>
                  <NIH2 />
                </li>
                <li className="">
                  <Mass />
                </li>
                <li className="">
                  <DTA />
                </li>
                <li className="">
                  <CMS />
                </li>
                <li className="">
                  <Mitre />
                </li>
              </ul>
            ) :
            this.props.ai ? (
              <ul className="list--unstyled client-logos">
                <li>
                  <ThreeM />
                </li>
                <li className="">
                  <Mitre />
                </li>
                <li className="">
                  <Whitehouse />
                </li>
                <li className="">
                  <NCI />
                </li>
                <li className="">
                  <Ipsos />
                </li>
                <li className="">
                  <Codametrix />
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
