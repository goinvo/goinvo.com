import React, { Component } from 'react'
import Link from 'next/link'

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
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/work/">Work</Link>
                  </li>
                  <li>
                    <Link href="/services/">Services</Link>
                  </li>
                </ul>
              </div>
              <div className="pure-u-1-2">
                <ul className="list--unstyled">
                  <li>
                    <Link href="/about/">About</Link>
                  </li>
                  <li>
                    <Link href="/about/careers/">Careers</Link>
                  </li>
                  <li>
                    <Link href="/about/open-office-hours/">
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
                    <Link href="/vision/">Vision</Link>
                  </li>
                </ul>
              </div>
              <div className="pure-u-1-2">
                <ul className="list--unstyled">
                  <li>
                    <Link href="/contact/">Contact Us</Link>
                  </li>
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
                  <img className="icon" src="./images/icon-email.inline.svg" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/goinvo/">
                  <img className="icon" src="./images/icon-linkedin.inline.svg" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/goinvo">
                  <img className="icon" src="./images/icon-twitter.inline.svg" />
                </a>
              </li>
              <li>
                <img className="logo" src="./images/logo-goinvo.inline.svg" />
              </li>
              <li>
                <a href="https://medium.com/@goinvo">
                  <img className="icon" src="./images/icon-medium.inline.svg" />
                </a>
              </li>
              <li>
                <a href="https://www.flickr.com/photos/juhansonin/">
                  <img className="icon" src="./images/icon-flickr.inline.svg" />
                </a>
              </li>
              <li>
                <a href="https://soundcloud.com/involution-studios">
                  <img className="icon" src="./images/icon-soundcloud.inline.svg" />
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
