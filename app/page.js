// app/page.js
'use client';

import React from 'react';
import '../styles/globals.css';

export default function HomePage() {
  const categories = ['Mobiles', 'Laptops', 'Fashion', 'Books', 'Electronics'];
  const dealOfTheDay = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  const categoryProducts = {
    Mobiles: ['Mobile 1', 'Mobile 2', 'Mobile 3', 'Mobile 4'],
    Laptops: ['Laptop 1', 'Laptop 2', 'Laptop 3', 'Laptop 4'],
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

      {/* Category-wise Products */}
      {Object.keys(categoryProducts).map((cat, index) => (
        <div key={index} className="category-section">
          <h3>{cat}</h3>
          <div className="category-products">
            {categoryProducts[cat].map((prod, idx) => (
              <div key={idx} className="product-item">{prod}</div>
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
