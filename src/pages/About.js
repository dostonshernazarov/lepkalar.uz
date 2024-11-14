// src/pages/About.js
import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState(null);

  useEffect(() => {
    // Fetch About information from the API
    fetch('https://api.lepkalar.uz/v1/about')
      .then(response => response.json())
      .then(data => setAboutInfo(data));
  }, []);

  if (!aboutInfo) {
    return <p>Loading about information...</p>;
  }

  return (
    <div className="about-container">
      <section className="about-content">
        <h1>About Our Company</h1>
        <p className="about-description">{aboutInfo.description}</p>

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Phone: {aboutInfo.contact}</p>
          <p>Email: <a href={`mailto:${aboutInfo.email}`} className="contact-link">{aboutInfo.email}</a></p>
          <p>Telegram: <a href={aboutInfo.telegram} target="_blank" rel="noopener noreferrer" className="contact-link">Telegram</a></p>
          <p>Instagram: <a href={aboutInfo.instagram} target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a></p>
          <p>Facebook: <a href={aboutInfo.facebook} target="_blank" rel="noopener noreferrer" className="contact-link">Facebook</a></p>
        </div>
      </section>
    </div>
  );
};

export default About;
