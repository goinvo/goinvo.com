import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image';

import Divider from './divider'

import Logo from '../../public/images/logo-goinvo.inline.svg'
// import Hamburger from '../assets/images/icon-hamburger.inline.svg'
// import Close from '../assets/images/icon-close.inline.svg'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileNavOpen: false,
    }
  }

  toggleMobileNav = () => {
    document.body.classList.toggle('has-overlay')
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
  }

  render() {
    const navItems = [
      { link: '/work/', title: 'Work' },
      { link: '/services/', title: 'Services', class: 'hidden--until-lg' },
      { link: '/about/', title: 'About', class: 'hidden--until-lg' },
      { link: '/vision/', title: 'Vision' },
      {
        link: '/open-source-health-design/',
        title: 'Open Design',
        class: 'hidden--until-lg',
      },
    ]

    return (
      <div
        className={`header-nav ${this.state.mobileNavOpen ? 'header-nav--mobile-nav-open' : ''
          }`}
        id="header"
      >
        <Link href="/" className="header-nav__link header-nav__logo">
          <Image src={Logo} alt="GoInvo Logo" />
        </Link>
        {navItems.map(navItem => {
          return (
            <Link
              key={navItem.link}
              href={navItem.link}
              className={`header-nav__link ${navItem.class}`}
              activeClassName="header-nav__link--active"
            >
              {navItem.title}
            </Link>
          )
        })}
        <button
          className="header-nav__hamburger button button--transparent hidden--lg"
          onClick={this.toggleMobileNav}
        >
          <img src="./images/icon-hamburger.inline.svg" />
        </button>
        <Link href="/contact/" className="header-nav__link hidden--until-lg">
          <div className="button button--primary">Contact</div>
        </Link>
        <div
          className="mobile-nav-overlay hidden--lg"
          onClick={this.toggleMobileNav}
        />
        <div className="mobile-nav">
          <button
            className="button button--transparent mobile-nav__close"
            onClick={this.toggleMobileNav}
          >
            <img src="./images/icon-close.inline.svg" />
          </button>
          <div className="mobile-nav__content">
            <ul className="mobile-nav__list">
              <li>
                <Link
                  href="/"
                  className="mobile-nav__link"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.toggleMobileNav}
                >
                  Home
                </Link>
              </li>
              {navItems.map(navItem => {
                return (
                  <li key={navItem.link}>
                    <Link
                      href={navItem.link}
                      className={`mobile-nav__link`}
                      activeClassName="mobile-nav__link--active"
                      onClick={this.toggleMobileNav}
                    >
                      {navItem.title}
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link
                  href="/contact/"
                  className="mobile-nav__link"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.toggleMobileNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Divider />
            <ul className="mobile-nav__list">
              <li>
                <Link
                  href="/about/careers/"
                  className="mobile-nav__link-secondary"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.toggleMobileNav}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/about/open-office-hours/"
                  className="mobile-nav__link-secondary"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.toggleMobileNav}
                >
                  Open Office Hours
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
