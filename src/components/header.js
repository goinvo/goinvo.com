import React, { Component } from 'react'
import { Link } from 'gatsby'

import Divider from './divider'

import Logo from '../assets/images/logo-goinvo.inline.svg'
import Hamburger from '../assets/images/icon-hamburger.inline.svg'
import Close from '../assets/images/icon-close.inline.svg'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavOpen: false
    };
  }

  toggleMobileNav = () => {
    document.body.classList.toggle('has-overlay');
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen });
  }

  render() {
    const navItems = [
      { link: "/work/", title: "Work" },
      { link: "/about/", title: "About", class: "hidden--until-lg" },
      { link: "/services/", title: "Services", class: "hidden--until-lg" },
      { link: "/vision/", title: "Vision" },
    ];

    return (
      <div className={`header-nav ${ this.state.mobileNavOpen ? 'header-nav--mobile-nav-open' : '' }`} id="header">
        <Link to="/" className="header-nav__link header-nav__logo">
          <Logo />
        </Link>
        { navItems.map(navItem => {
          return (
            <Link
              key={navItem.link}
              to={navItem.link}
              className={`header-nav__link ${navItem.class}`}
              activeClassName="header-nav__link--active">
                {navItem.title}
            </Link>
          )
        })}
        <button className="header-nav__hamburger button button--transparent hidden--lg" onClick={this.toggleMobileNav}>
          <Hamburger />
        </button>
        <Link to="/contact/" className="header-nav__link hidden--until-lg">
          <div className="button button--primary">Contact</div>
        </Link>
        <div className="mobile-nav-overlay hidden--lg" onClick={this.toggleMobileNav}></div>
        <div className="mobile-nav">
          <div className="button button--transparent mobile-nav__close" onClick={this.toggleMobileNav}>
            <Close />
          </div>
          <div className="mobile-nav__content">
            <ul className="mobile-nav__list">
              <li>
                <Link
                  to="/"
                  className="mobile-nav__link"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.toggleMobileNav}>
                    Home
                </Link>
              </li>
              { navItems.map(navItem => {
                return (
                  <li key={navItem.link}>
                    <Link
                      to={navItem.link}
                      className={`mobile-nav__link`}
                      activeClassName="mobile-nav__link--active"
                      onClick={this.toggleMobileNav}>
                        {navItem.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Divider />
            <ul className="mobile-nav__list">
              <li>
                <Link
                  to="/about/careers/"
                  className="mobile-nav__link-secondary"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.toggleMobileNav}>
                    Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/about/open-office-hours/"
                  className="mobile-nav__link-secondary"
                  activeClassName="mobile-nav__link--active"
                  onClick={this.toggleMobileNav}>
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
