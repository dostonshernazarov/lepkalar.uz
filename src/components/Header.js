// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          <h1>Welcome to Lepkalar.uz</h1>
          <p>Discover exquisite mouldings and design elements</p>
          <div className="header-buttons">
            <Link to="/mouldings" className="header-button">
              View Mouldings
            </Link>
            <Link to="/about" className="header-button header-button-outline">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
