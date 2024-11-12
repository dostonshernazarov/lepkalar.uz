import React, { useEffect, useState } from 'react';
import { getAboutCompany } from '../api/apiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    getAboutCompany().then(setCompanyInfo);
  }, []);

  return (
    <div className="container mt-4 about-section">
      <h1>About Us</h1>
      {companyInfo ? (
        <div>
          <p>{companyInfo.description}</p>
          <p>Contact: {companyInfo.contact}</p>
          <p>Email: {companyInfo.email}</p>
          <p>Follow us on: </p>
          {/* Telegram Icon */}
          <a href={companyInfo.telegram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          {/* Telegram Icon */}
          <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      ) : (
        <p>Loading company information...</p>
      )}
    </div>
  );
};

export default About;
