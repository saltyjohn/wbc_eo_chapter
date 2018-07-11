import React from 'react';
import Link from 'gatsby-link';

import newFlag from '../img/New-flag.gif';
import '../scss/header.scss';

const Header = ({ siteTitle, siteSubTitle }) => (
  <div id="header-container" >
    <div id="header-content">
      <Link to="/">
        <img
          id="header-image"
          src={newFlag}
          alt="Epsilon Omicron Flag"
        />
      </Link>
      <div id="title-container">
        <h1>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h2>
          {siteSubTitle}
        </h2>
        <hr style={{ background: 'white', marginBottom: 10 }} />
        <nav>
          <Link to="/reunions">Reunions</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
