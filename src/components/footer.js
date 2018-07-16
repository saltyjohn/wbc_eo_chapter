import React from 'react';
import Link from 'gatsby-link';

import newFlag from '../img/New-flag.gif';

import '../scss/footer.scss'

const Footer = () => {
  return (
    <div id="footer">
      <Link to="/">
        <img id="header-image" src={newFlag} alt="Epsilon Omicron Flag" />
      </Link>
      <a id="original-link" href="https://thetachiburg-original.netlify.com/" target="_blank">Duck's Original Site</a>
    </div>
  )
}

export default Footer
