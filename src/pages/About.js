import React, { useEffect, useState } from 'react';
import { getAboutCompany } from '../api/apiService';

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
          <p>Follow us on <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
      ) : (
        <p>Loading company information...</p>
      )}
    </div>
  );
};

export default About;
