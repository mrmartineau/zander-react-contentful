import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Masthead = () => {
  return (
    <header id="masthead" className="masthead" role="banner">
      <Link to="/" className="logo">
        <svg className="logo-icon"><use xlinkHref="#icon-zmLogo" /></svg>
        <span className="is-visuallyHidden">Zander Martineau</span>
      </Link>
      <Nav className="nav--masthead" />
    </header>
  );
};

export default Masthead;
