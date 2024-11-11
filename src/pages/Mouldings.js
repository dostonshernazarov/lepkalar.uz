import React, { useEffect, useState } from 'react';
import { listMouldings, listCategories, listMaterials } from '../api/apiService';
import ProductCard from '../components/ProductCard';

const Mouldings = () => {
  const [mouldings, setMouldings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [filters, setFilters] = useState({ category: '', material: '' });

  useEffect(() => {
    listMouldings(filters).then((data) => setMouldings(data.mouldings));
    listCategories().then(setCategories);
    listMaterials().then(setMaterials);
  }, [filters]);

  return (
    <div className="container mt-4">
      <h1>All Mouldings</h1>
      <div className="row mb-4">
        <div className="col-md-4">
          <select onChange={(e) => setFilters({ ...filters, category: e.target.value })} className="form-select">
            <option value="">All Categories</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="col-md-4">
          <select onChange={(e) => setFilters({ ...filters, material: e.target.value })} className="form-select">
            <option value="">All Materials</option>
            {materials.map((mat) => <option key={mat} value={mat}>{mat}</option>)}
          </select>
        </div>
      </div>
      <div className="row">
        {mouldings.map((product) => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mouldings;
