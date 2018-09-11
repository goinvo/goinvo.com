import React, { Component } from 'react'
import { Link } from 'gatsby'

import Logo from '../assets/images/logo-goinvo.inline.svg'

class Footer extends Component {
  render() {
    return (
      <div className="footer background--gray">
        <div className="max-width content-padding pad-vertical pad-top--double">
          <div className="pure-g margin-top">
            <div className="pure-u-1 pure-u-lg-1-2">
              <div className="pure-u-1-2 margin-bottom--double">
                <ul className="list--unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/work/">Work</Link></li>
                  <li><Link to="/services/">Services</Link></li>
                </ul>
              </div>
              <div className="pure-u-1-2">
                <ul className="list--unstyled">
                  <li><Link to="/about/">About</Link></li>
                  <li><Link to="/about/careers/">Careers</Link></li>
                  <li><Link to="/about/open-office-hours/">Open Office Hours</Link></li>
                </ul>
              </div>
            </div>
            <div className="pure-u-1 pure-u-lg-1-2">
              <div className="pure-u-1-2 margin-bottom--double">
                <ul className="list--unstyled">
                  <li><Link to="/vision/">Vision</Link></li>
                  <li><a target="blank" href="http://thedigitalife.com/">The Digital Life</a></li>
                </ul>
              </div>
              <div className="pure-u-1-2">
                <ul className="list--unstyled">
                  <li><Link to="/contact/">Contact Us</Link></li>
                  <li><a target="blank" href="https://www.google.com/maps/place/661+Massachusetts+Ave,+Arlington,+MA+02476/@42.4161234,-71.1563006,17z/">661 Mass Ave Arlington MA 02476</a></li>
                  <li><a href="mailto:info@goinvo.com">info@goinvo.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__social-links container--center-children">
            <Logo className="logo" />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
