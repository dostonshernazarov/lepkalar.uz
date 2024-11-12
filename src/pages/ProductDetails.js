// src/pages/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details by ID
    fetch(`https://api.lepkalar.uz/v1/mouldings/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
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
          <p className="product-price">${product.price.toFixed(2)}/{product.unity}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-material">Material: {product.material}</p>
          <p className="product-description">{product.description}</p>

          {/* Back Button */}
          <Link to="/mouldings" className="back-button">
            &larr; Back to Mouldings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
