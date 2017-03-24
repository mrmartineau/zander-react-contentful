import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Nav = (props) => {
  const navClass = `nav ${props.className}`;
  return (
    <nav className={navClass} role="navigation">
      <NavLink to="/articles" activeClassName="is-active" className="nav-link">Articles</NavLink>
      <NavLink to="/work" activeClassName="is-active" className="nav-link">Work</NavLink>
      {
        props.extras &&
          <NavLink to="/styleguide" activeClassName="is-active" title="View this site's style guide" className="nav-link">Style guide</NavLink>
      }
      {
        props.extras &&
          <Link to="http://github.com/mrmartineau/zander.wtf" title="Fork this site's source code" className="nav-link">Source</Link>
      }
    </nav>
  )
}

export default Nav
