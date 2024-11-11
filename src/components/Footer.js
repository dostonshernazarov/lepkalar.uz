import React from 'react';

const Footer = ({ companyInfo }) => (
  <footer className="bg-dark text-white text-center p-3">
    <p>Contact: {companyInfo.contact}</p>
    <p>Email: {companyInfo.email}</p>
    <p>Follow us on Instagram: {companyInfo.instagram}</p>
  </footer>
);

export default Footer;
