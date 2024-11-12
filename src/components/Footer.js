// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Lepkalar</h2>
          <p>High-quality mouldings for all your needs.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: azizjone304@gmail.com</p>
          <p>Phone: +998 99 282 77 88</p>
          <p>Telegram: <a href={"https://t.me/of_the_bes"} target="_blank" rel="noopener noreferrer">Telegram</a></p>
          <p>Instagram: <a href={"https://www.instagram.com/of_the_best77/profilecard/?igsh=MWdqYmZ6d2tucjE1Zw=="} target="_blank" rel="noopener noreferrer">Instagram</a></p>
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
