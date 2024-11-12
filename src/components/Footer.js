// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Mouldings Shop</h2>
          <p>High-quality mouldings for all your needs.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@mouldingshop.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Moulding St., Design City</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Mouldings Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
