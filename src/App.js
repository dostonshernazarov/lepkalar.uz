// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header'; // Header component
import Home from './pages/Home';
import Mouldings from './pages/Mouldings';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Only render Header on the Home page */}
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/mouldings" element={<Mouldings />} />
        <Route path="/mouldings/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
