import React from 'react';
import Link, { withPrefix } from "gatsby-link";

import newFlag from '../img/New-flag.gif';

import '../scss/footer.scss'

const Footer = () => {
  const isHomepage = location.pathname === withPrefix("/")
  return (
    <div id="footer">
      <img src={newFlag} alt="Epsilon Omicron Flag" />
      <a href="https://thetachiburg-original.netlify.com/" target="_blank">Duck's Original Site</a>
    </div>
  )
}

export default Footer
