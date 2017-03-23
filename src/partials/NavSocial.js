import React from 'react'

const NavSocial = () => {
  return (
    <nav className="navSocial">
      <a href="http://twitter.com/mrmartineau" target="_blank" title="Follow Zander on Twitter" className="navSocial-link">
        <svg className="navSocial-link-icon">
          <use xlinkHref="#icon-twitter"></use>
        </svg>
      </a>

      <a href="http://github.com/mrmartineau" target="_blank" title="View Zander's open source code on Github" className="navSocial-link">
        <svg className="navSocial-link-icon">
          <use xlinkHref="#icon-github"></use>
        </svg>
        <span className="is-visuallyHidden">Github</span>
      </a>

      <a href="https://medium.com/@mrmartineau/" target="_blank" title="View Zander's Medium.com profile" className="navSocial-link">
        <svg className="navSocial-link-icon">
          <use xlinkHref="#icon-medium"></use>
        </svg>
      </a>

      <a href="https://instagram.com/mrmartineau" target="_blank" title="View Zander's npm packages" className="navSocial-link">
        <svg className="navSocial-link-icon">
          <use xlinkHref="#icon-instagram"></use>
        </svg>
      </a>

      <a href="https://www.npmjs.com/~mrmartineau" target="_blank" title="View Zander's npm packages" className="navSocial-link">
        <svg className="navSocial-link-icon">
          <use xlinkHref="#icon-npm"></use>
        </svg>
      </a>
    </nav>
  )
}

export default NavSocial
