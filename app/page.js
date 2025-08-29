import React from 'react';
import '../styles/globals.css';

export default function HomePage() {
  const categories = [
    'Mobile', 'Laptop', 'Fashion', 'Electronic', 'Home & Furniture', 
    'TV & Appliance', 'Flight Booking', 'Beauty', 'Grocery', 'Kids', 'Sports'
  ];

  const dealOfTheDay = ['Deal 1', 'Deal 2', 'Deal 3', 'Deal 4'];

  // Example placeholder products for each category
  const categoryProducts = {
    Mobile: ['Mobile 1', 'Mobile 2', 'Mobile 3', 'Mobile 4', 'Mobile 5', 'Mobile 6'],
    Laptop: ['Laptop 1', 'Laptop 2', 'Laptop 3', 'Laptop 4', 'Laptop 5'],
    Fashion: ['Fashion 1', 'Fashion 2', 'Fashion 3', 'Fashion 4'],
    Electronic: ['Electronics 1', 'Electronics 2', 'Electronics 3', 'Electronics 4'],
    'Home & Furniture': ['Home 1', 'Furniture 1', 'Home 2', 'Furniture 2'],
    'TV & Appliance': ['TV 1', 'Appliance 1', 'TV 2', 'Appliance 2'],
    'Flight Booking': ['Flight 1', 'Flight 2', 'Flight 3'],
    Beauty: ['Beauty 1', 'Beauty 2', 'Beauty 3'],
    Grocery: ['Grocery 1', 'Grocery 2', 'Grocery 3'],
    Kids: ['Kids 1', 'Kids 2', 'Kids 3', 'Kids 4'],
    Sports: ['Sports 1', 'Sports 2', 'Sports 3', 'Sports 4'],
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
