// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mouldings Shop</div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-button" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/mouldings" className="nav-button" activeClassName="active">
          Mouldings
        </NavLink>
        <NavLink to="/about" className="nav-button" activeClassName="active">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
