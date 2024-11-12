import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="card mb-4">
    <img src={product.photos[0]} alt={product.name} className="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">${product.price.toFixed(2)}</p>
      <Link to={`/mouldings/${product.id}`} className="btn btn-primary">View Details</Link>
    </div>
  </div>
);

export default ProductCard;
