'use client';
import React from 'react';
import '../styles/globals.css';

export default function HomePage() {
  const categories = [
    { name: 'Mobile', icon: 'Mobile.png' },
    { name: 'Laptop', icon: 'Laptop.png' },
    { name: 'Fashion', icon: 'Fashion.png' },
    { name: 'Electronic', icon: 'Electronic.png' },
    { name: 'Home & Furniture', icon: 'HomeFurniture.png' },
    { name: 'TV & Appliance', icon: 'TVAppliance.png' },
    { name: 'Flight Booking', icon: 'FlightBooking.png' },
    { name: 'Beauty', icon: 'Beauty.png' },
    { name: 'Grocery', icon: 'Grocery.png' },
    { name: 'Kids', icon: 'Kids.png' },
    { name: 'Sports', icon: 'Sports.png' },
  ];

  const dealOfTheDay = [
    { title: 'Deal 1', image: '/products/deal1.png' },
    { title: 'Deal 2', image: '/products/deal2.png' },
    { title: 'Deal 3', image: '/products/deal3.png' },
    { title: 'Deal 4', image: '/products/deal4.png' },
  ];

  const categoryProducts = {
    Mobile: Array.from({length: 25}, (_, i) => ({ name: `Mobile ${i+1}`, image: '/products/placeholder.png' })),
    Laptop: Array.from({length: 25}, (_, i) => ({ name: `Laptop ${i+1}`, image: '/products/placeholder.png' })),
    Fashion: Array.from({length: 25}, (_, i) => ({ name: `Fashion ${i+1}`, image: '/products/placeholder.png' })),
    Electronic: Array.from({length: 25}, (_, i) => ({ name: `Gadget ${i+1}`, image: '/products/placeholder.png' })),
    'Home & Furniture': Array.from({length: 25}, (_, i) => ({ name: `Item ${i+1}`, image: '/products/placeholder.png' })),
    'TV & Appliance': Array.from({length: 25}, (_, i) => ({ name: `Appliance ${i+1}`, image: '/products/placeholder.png' })),
    'Flight Booking': Array.from({length: 25}, (_, i) => ({ name: `Flight ${i+1}`, image: '/products/placeholder.png' })),
    Beauty: Array.from({length: 25}, (_, i) => ({ name: `Beauty ${i+1}`, image: '/products/placeholder.png' })),
    Grocery: Array.from({length: 25}, (_, i) => ({ name: `Grocery ${i+1}`, image: '/products/placeholder.png' })),
    Kids: Array.from({length: 25}, (_, i) => ({ name: `Kids ${i+1}`, image: '/products/placeholder.png' })),
    Sports: Array.from({length: 25}, (_, i) => ({ name: `Sports ${i+1}`, image: '/products/placeholder.png' })),
  };

  return (
    <div className="homepage">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="brand">
          DealHunt<br/>
          <span className="tagline">Find the best deals!</span>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search products..." />
        </div>
        <div className="top-right">
          <img src="/icons/avatar.png" alt="Profile" className="profile-icon" />
          <button className="topbtn">Login</button>
          <button className="topbtn">⋮</button>
        </div>
      </div>

      {/* Categories Slider */}
      <div className="categories-slider">
        {categories.map((cat, i) => (
          <div key={i} className="category-item">
            <img src={`/icons/${cat.icon}`} alt={cat.name} className="category-icon" onError={(e)=>e.currentTarget.src='/icons/default-category.png'}/>
            <span className="category-text">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Deal of the Day */}
      <section className="deal-slider">
        <h2>Deal of the Day</h2>
        <div className="deal-items">
          {dealOfTheDay.map((deal, idx) => (
            <div key={idx} className="deal-item">
              <img src={deal.image} alt={deal.title} className="deal-image"/>
              <div className="deal-info">
                <p className="deal-title">{deal.title}</p>
                <button className="compare-btn">Compare</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category-wise products */}
      {Object.keys(categoryProducts).map((cat, i) => (
        <section key={i} className="category-section">
          <h3>{cat}</h3>
          <div className="category-products-row">
            {categoryProducts[cat].map((prod, idx) => (
              <div key={idx} className="product-card">
                <img src={prod.image} alt={prod.name} className="product-image"/>
                <p className="product-name">{prod.name}</p>
                <button className="compare-btn">Compare</button>
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer className="footer">© 2025 DealHunt. All rights reserved.</footer>
    </div>
  );
}
