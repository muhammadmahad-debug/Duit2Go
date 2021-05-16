/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */

import React from "react";
import Logo from "../../logo-01.png";
const Navbar = () => {
  return (
    <header id='header' className='header tra-menu navbar-dark'>
      <div className='header-wrapper'>
        <div className='wsmainfull menu clearfix'>
          <div className='wsmainwp clearfix'>
            <div className='desktoplogo'>
              <a href='#hero-3' className='logo-black'>
                <img
                  src={Logo}
                  style={{ maxWidth: "16rem" }}
                  alt='header-logo'
                />
              </a>
            </div>
            <nav className='wsmenu clearfix'>
              <ul className='wsmenu-list nav-theme-hover'>
                <li aria-haspopup='true'>
                  <a href='#content-4'>How It Works</a>
                </li>
                <li aria-haspopup='true'>
                  <a href='#content-2'>Why Duit2Go?</a>
                </li>
                <li>
                  <a href='contacts.html'>Contact Us</a>
                </li>
                <li class='nl-simple' aria-haspopup='true'>
                  <a href='#faqs-1'>FAQs</a>
                </li>
                <li
                  className='nl-simple header-phone ico-25'
                  aria-haspopup='true'
                >
                  <a href='tel:123456789'>
                    <span className='flaticon-phone-call bg-white theme-color'></span>
                    +12 9 8765 4321
                  </a>
                </li>

                <li className='nl-simple' aria-haspopup='true'>
                  <a
                    href='#download-1'
                    className='btn btn-theme tra-black-hover last-link'
                  >
                    Download
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
