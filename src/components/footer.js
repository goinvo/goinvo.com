import React, { Component } from 'react'
import { Link } from 'gatsby'

import Logo from '../assets/images/logo-goinvo.inline.svg'
import Email from '../assets/images/icon-email.inline.svg'
import Flickr from '../assets/images/icon-flickr.inline.svg'
import LinkedIn from '../assets/images/icon-linkedin.inline.svg'
import Medium from '../assets/images/icon-medium.inline.svg'
import SoundCloud from '../assets/images/icon-soundcloud.inline.svg'
import Twitter from '../assets/images/icon-twitter.inline.svg'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="max-width content-padding pad-vertical pad-top--double">
          <div className="pure-g margin-top">
            <div className="pure-u-1 pure-u-lg-1-2">
              <div className="pure-u-1-2 margin-bottom--double">
                <ul className="list--unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/work/">Work</Link>
                  </li>
                  <li>
                    <Link to="/services/">Services</Link>
                  </li>
                </ul>
              </div>
              <div className="pure-u-1-2">
                <ul className="list--unstyled">
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/about/careers/">Careers</Link>
                  </li>
                  <li>
                    <Link to="/about/open-office-hours/">
                      Open Office Hours
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <div className="pure-u-1-2 margin-bottom--double">
                <ul className="list--unstyled">
                  <li>
                    <Link to="/vision/">Vision</Link>
                  </li>
                  <li>
                    <Link to="/open-source-healthcare/?category=open-source-healthcare-vision">
                      Open Source
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="pure-u-1-2">
                <ul className="list--unstyled">
                  <li>
                    <a
                      target="blank"
                      href="https://www.google.com/maps/place/661+Massachusetts+Ave,+Arlington,+MA+02476/@42.4161234,-71.1563006,17z/"
                    >
                      661 Mass Ave
                      <br />
                      Arlington, MA 02476
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@goinvo.com">info@goinvo.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__social-links">
            <ul className="social-links list--unstyled container container--justify-space-around container--align-center">
              <li>
                <a href="mailto:hello@goinvo.com">
                  <Email className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/goinvo/">
                  <LinkedIn className="icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/goinvo">
                  <Twitter className="icon" />
                </a>
              </li>
              <li>
                <Logo className="logo" />
              </li>
              <li>
                <a href="https://medium.com/@goinvo">
                  <Medium className="icon" />
                </a>
              </li>
              <li>
                <a href="https://www.flickr.com/photos/juhansonin/">
                  <Flickr className="icon" />
                </a>
              </li>
              <li>
                <a href="https://soundcloud.com/involution-studios">
                  <SoundCloud className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
