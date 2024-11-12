import React, { useEffect, useState } from 'react';
import { getAboutCompany } from '../api/apiService';
import './Footer.css'; // Ensure your Footer styling is updated here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState({
    telegram: '',
    instagram: '',
    email: ''
  });

    useEffect(() => {
    getAboutCompany().then(setCompanyInfo);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h2>Lepkalar.uz</h2>
          <p>High-quality mouldings for all your needs.</p>
          <h4>Connect with us:</h4>
        </div>
        <div className="social-icons">
          {/* Telegram Icon */}
          <a href={companyInfo.telegram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>

          {/* Instagram Icon */}
          <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          {/* Email Icon */}
          <a href={companyInfo.email} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>

        </div>

      </div>
      <div className='footer-contact'>
          {/* Tel */}
          <p> {companyInfo.contact} </p>
        </div>
    </footer>
  );
};

export default Footer;



//   return (
//     <div className="container mt-4 about-section">
//       <h1>About Us</h1>
//       {companyInfo ? (
//         <div>
//           <p>{companyInfo.description}</p>
//           <p>Contact: {companyInfo.contact}</p>
//           <p>Email: {companyInfo.email}</p>
//           <p>Follow us on <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
//         </div>
//       ) : (
//         <p>Loading company information...</p>
//       )}
//     </div>
//   );
// };

// export default About;
