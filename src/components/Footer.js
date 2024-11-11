// src/components/Footer.js
import React from 'react';

const Footer = ({ companyInfo }) => {
  // Ensure `companyInfo` is defined before accessing its properties
  if (!companyInfo) {
    return null;  // Render nothing if companyInfo is undefined
  }

  return (
    <footer className="bg-dark text-white text-center p-3">
      <p>Contact: {companyInfo.contact}</p>
      <p>Email: {companyInfo.email}</p>
      <p>Follow us on Instagram: {companyInfo.instagram}</p>
    </footer>
  );
};

export default Footer;
