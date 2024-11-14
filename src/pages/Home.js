// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [about, setAbout] = useState({});
  const [featuredMouldings, setFeaturedMouldings] = useState([]);

  useEffect(() => {
    // Fetch about info
    fetch('https://api.lepkalar.uz/v1/about')
      .then(response => response.json())
      .then(data => setAbout(data));

    // Fetch featured mouldings (example, limit results)
    fetch('https://api.lepkalar.uz/v1/mouldings/list?limit=20')
      .then(response => response.json())
      .then(data => setFeaturedMouldings(data.mouldings.slice(0, 20))); // Limit to 3 for featured
  }, []);

  return (
    <div className="home-container">
      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>{about.description}</p>
      </section>

      {/* Featured Mouldings Section */}
      <section className="featured-section">
        <h2>Featured Mouldings</h2>
        <div className="moulding-cards">
          {featuredMouldings.map((moulding) => (
            <div key={moulding.id} className="moulding-card">
              <img src={moulding.photos[0]} alt={moulding.name} className="moulding-image" />
              <h3>{moulding.name}</h3>
              <p className="moulding-price">${moulding.price.toFixed(2)}</p>
              <Link to={`/mouldings/${moulding.id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Find the Perfect Moulding for Your Home</h2>
        <Link to="/mouldings" className="cta-button">
          Browse All Mouldings
        </Link>
      </section>
    </div>
  );
};

export default Home;
