// src/pages/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMouldingById } from '../api/apiService';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getMouldingById(id).then(setProduct).catch((error) => console.error(error.message));
  }, [id]);

  return (
    <div className="container mt-4">
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <p>Material: {product.material}</p>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          {product.photos && (
            <div>
              {product.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`${product.name} ${index}`} className="img-fluid" />
              ))}
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
