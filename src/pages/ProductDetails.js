// src/pages/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Fetch the product details by ID
    fetch(`https://api.lepkalar.uz/v1/mouldings/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));

    // Fetch the company's contact information
    fetch('https://api.lepkalar.uz/v1/about')
      .then((response) => response.json())
      .then((data) => setContactInfo(data));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        {/* Product Image */}
        <div className="product-image">
          <img src={product.photos[0]} alt={product.name} />
        </div>

        {/* Product Information */}
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-material">Material: {product.material}</p>
          <p className="product-description">{product.description}</p>

          {/* Back Button */}
          <Link to="/mouldings" className="back-button">
            &larr; Back to Mouldings
          </Link>
        </div>
      </div>

      {/* Contact Information Section */}
      {contactInfo && (
        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>{contactInfo.contact}</p>
          <p>Email: <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a></p>
          <p>Telegram: <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className="contact-link">Telegram</a></p>
          <p>Instagram: <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a></p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
