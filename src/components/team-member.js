import React, { Component } from 'react'

import Image from './image'

import Email from '../assets/images/icon-email.inline.svg'
import LinkedIn from '../assets/images/icon-linkedin.inline.svg'
import Twitter from '../assets/images/icon-twitter.inline.svg'

class TeamMember extends Component {
  render() {
    const { name, title, bio, social, image } = this.props.member;

    return (
      <div className="team-member margin-bottom--double">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="pad-right--only-lg margin-bottom">
              <Image src={image} className="image--max-width" />
            </div>
          </div>
          <div className="pure-u-1 pure-u-lg-1-2">
            <div className="pad-left--only-lg">
              <p className="text--bold margin-top--none margin-bottom--half">{name}</p>
              <p className="text--gray margin--none">{title}</p>
              <ul className="social-links list--unstyled container container--align-center">
                {
                  social.email ?
                    <li><a href={social.email}><Email className="icon icon--md" /></a></li>
                  : null
                }
                {
                  social.twitter ?
                    <li><a href={social.twitter}><Twitter className="icon icon--md" /></a></li>
                  : null
                }
                {
                  social.linkedin ?
                    <li><a href={social.linkedin}><LinkedIn className="icon icon--md" /></a></li>
                  : null
                }
              </ul>
              <p className="text--gray margin-top--none">{bio}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMember
