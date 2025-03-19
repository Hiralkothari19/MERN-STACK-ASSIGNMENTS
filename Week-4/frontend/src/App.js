// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails'; // Ensure correct import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Route for HeroSection */}
        <Route path="/products" element={<ProductSection />} /> {/* Route for Product Section */}
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Route for Product Details */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
