import React from 'react';
import Nav from './Nav';
import NavSocial from './NavSocial';
import Bio from './Bio';

const Footer = () => (
  <footer role="contentinfo" className="footer">
    <div className="l-container">
      <Bio />
      <hr className="hr--short" />
      <Nav className="nav--footer" extras />
      <NavSocial />
    </div>
  </footer>
);

export default Footer;
