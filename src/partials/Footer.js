import React from 'react'
import Nav from './Nav'
import NavSocial from './NavSocial'

const Footer = () => (
  <footer role="contentinfo" className="footer">
    <div className="l-container">
      <h1>👋</h1>
      bio
      <hr className="hr--short"/>
      <Nav className="nav--footer" extras />
      <NavSocial />
    </div>
  </footer>
)

export default Footer
