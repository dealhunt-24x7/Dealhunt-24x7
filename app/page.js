'use client';

import React, { useState } from 'react';
import '../styles/globals.css';

export default function HomePage() {
  const categories = [
    'Mobile', 'Laptop', 'Fashion', 'Electronic', 'Home & Furniture',
    'TV & Appliance', 'Flight Booking', 'Beauty', 'Grocery', 'Kids', 'Sports'
  ];

  const dealOfTheDay = Array.from({ length: 20 }, (_, i) => `Deal ${i + 1}`);

  // Example: category-wise products stored in object arrays
  const categoryProducts = {
    Mobile: Array.from({ length: 30 }, (_, i) => `Mobile ${i + 1}`),
    Laptop: Array.from({ length: 25 }, (_, i) => `Laptop ${i + 1}`),
    Fashion: Array.from({ length: 20 }, (_, i) => `Fashion ${i + 1}`),
    Electronic: Array.from({ length: 20 }, (_, i) => `Electronics ${i + 1}`),
    'Home & Furniture': Array.from({ length: 15 }, (_, i) => `Home ${i + 1}`),
    'TV & Appliance': Array.from({ length: 15 }, (_, i) => `TV ${i + 1}`),
    'Flight Booking': Array.from({ length: 10 }, (_, i) => `Flight ${i + 1}`),
    Beauty: Array.from({ length: 12 }, (_, i) => `Beauty ${i + 1}`),
    Grocery: Array.from({ length: 20 }, (_, i) => `Grocery ${i + 1}`),
    Kids: Array.from({ length: 15 }, (_, i) => `Kids ${i + 1}`),
    Sports: Array.from({ length: 15 }, (_, i) => `Sports ${i + 1}`)
  };

  return (
    <div className="homepage">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="brand">
          DealHunt<br />
          <span className="tagline">Find the best deals!</span>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search products..." />
        </div>
        <div className="top-right">
          <button>Login</button>
          <button>Profile</button>
          <button>⋮</button>
        </div>
      </div>

      {/* Categories Slider */}
      <div className="categories-slider">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">{cat}</div>
        ))}
      </div>

      {/* Deal of the Day Slider */}
      <div className="deal-slider">
        <h2>Deal of the Day</h2>
        <div className="deal-items">
          {dealOfTheDay.map((deal, index) => (
            <div key={index} className="deal-item">{deal}</div>
          ))}
        </div>
      </div>

      {/* Category-wise Product Collage */}
      {Object.keys(categoryProducts).map((cat, index) => (
        <div key={index} className="category-section">
          <h3>{cat}</h3>
          <div className="category-products-grid">
            {categoryProducts[cat].map((prod, idx) => (
              <div key={idx} className="product-collage-item">
                {prod}
                <button className="compare-btn">Compare</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer className="footer">
        © 2025 DealHunt. All rights reserved.
      </footer>
    </div>
  );
}
