// src/pages/About.js
import React, { useEffect, useState } from 'react';
import { getAboutCompany } from '../api/apiService';

const About = () => {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    getAboutCompany()
      .then((data) => setCompanyInfo(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      {companyInfo ? (
        <div>
          <p>{companyInfo.description}</p>
          <p>Contact: {companyInfo.contact}</p>
          <p>Email: {companyInfo.email}</p>
          <p>Instagram: {companyInfo.instagram}</p>
        </div>
      ) : (
        <p>Loading company information...</p>
      )}
    </div>
  );
};

export default About;
