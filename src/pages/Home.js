import React, { useEffect, useState } from 'react';
import { getAboutCompany, listMouldings } from '../api/apiService';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [featuredMouldings, setFeaturedMouldings] = useState([]);

  useEffect(() => {
    getAboutCompany().then(setCompanyInfo);
    listMouldings().then((data) => setFeaturedMouldings(data.mouldings.slice(0, 3)));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Welcome to Shop Mouldings</h1>
      {companyInfo && <p>{companyInfo.description}</p>}
      <h2>Featured Mouldings</h2>
      <div className="row">
        {featuredMouldings.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
