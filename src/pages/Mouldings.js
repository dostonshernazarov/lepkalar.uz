// src/pages/Mouldings.js
import React, { useEffect, useState } from 'react';
import './Mouldings.css';
import { Link } from 'react-router-dom';

const Mouldings = () => {
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [mouldings, setMouldings] = useState([]);
  const [filters, setFilters] = useState({ category: '', material: '' });
  const [page, setPage] = useState(1); // Track the current page
  const [limit] = useState(10); // Set the limit of items per page
  const [totalItems, setTotalItems] = useState(0); // Track total number of mouldings

  useEffect(() => {
    // Fetch categories and materials for filter options
    fetch('https://api.lepkalar.uz/v1/mouldings/category')
      .then((response) => response.json())
      .then((data) => setCategories(data.list));

    fetch('https://api.lepkalar.uz/v1/mouldings/material')
      .then((response) => response.json())
      .then((data) => setMaterials(data.list));

    // Fetch mouldings with the initial page and limit
    fetchMouldings();
  }, [page, filters]); // Re-run the effect when page or filters change

  // Fetch mouldings based on page, limit, and selected filters
  const fetchMouldings = () => {
    const { category, material } = filters;
    const url = `https://api.lepkalar.uz/v1/mouldings/list?page=${page}&limit=${limit}&category=${category}&material=${material}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMouldings(data.mouldings);
        setTotalItems(data.count); // Assume the API response has a 'count' for total items
      });
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1); // Reset to the first page whenever filters change
  };

  // Handle page change
  const goToNextPage = () => setPage(page + 1);
  const goToPreviousPage = () => setPage(page - 1);

  return (
    <div className="mouldings-container">
      {/* Filter Section */}
      <section className="filter-section">
        <h2>Filter Mouldings</h2>
        <div className="filter-controls">
          <select name="category" onChange={handleFilterChange} value={filters.category} className="filter-dropdown">
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select name="material" onChange={handleFilterChange} value={filters.material} className="filter-dropdown">
            <option value="">All Materials</option>
            {materials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
          <button onClick={fetchMouldings} className="apply-button">
            Apply Filters
          </button>
        </div>
      </section>

      {/* Mouldings Grid Section */}
      <section className="mouldings-grid">
        {mouldings.map((moulding) => (
          <div key={moulding.id} className="moulding-card">
            <img src={moulding.photos[0]} alt={moulding.name} className="moulding-image" />
            <div className="moulding-details">
              <h3>{moulding.name}</h3>
              <p className="moulding-price">${moulding.price.toFixed(2)}</p>
              <Link to={`/mouldings/${moulding.id}`} className="view-details">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Pagination Controls */}
      <section className="pagination-controls">
        <button onClick={goToPreviousPage} disabled={page === 1} className="pagination-button">
          Previous
        </button>
        <span> {page}</span>
        <button
          onClick={goToNextPage}
          disabled={page * limit >= totalItems}
          className="pagination-button"
        >
          Next
        </button>
      </section>
    </div>
  );
};

export default Mouldings;
