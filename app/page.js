'use client';
import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';

export default function HomePage() {
  // categories (icons must exist in public/icons/)
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

  // Deal of the Day (a few items; first one appears large)
  const dealOfTheDay = Array.from({ length: 8 }, (_, i) => ({
    id: `deal-${i + 1}`,
    title: `Deal ${i + 1}`,
    image: '/products/placeholder.png',
  }));

  // Create 25-30 placeholders per category (homepage placeholders only)
  const makePlaceholders = (n, prefix) =>
    Array.from({ length: n }, (_, i) => ({
      id: `${prefix}-${i + 1}`,
      name: `${prefix} ${i + 1}`,
      image: '/products/placeholder.png',
    }));

  const categoryProducts = {
    Mobile: makePlaceholders(30, 'Mobile'),
    Laptop: makePlaceholders(30, 'Laptop'),
    Fashion: makePlaceholders(30, 'Fashion'),
    Electronic: makePlaceholders(30, 'Electronic'),
    'Home & Furniture': makePlaceholders(25, 'Home'),
    'TV & Appliance': makePlaceholders(25, 'TV'),
    'Flight Booking': makePlaceholders(20, 'Flight'),
    Beauty: makePlaceholders(20, 'Beauty'),
    Grocery: makePlaceholders(30, 'Grocery'),
    Kids: makePlaceholders(20, 'Kids'),
    Sports: makePlaceholders(20, 'Sports'),
  };

  return (
    <div className="homepage">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="brand">
          DealHunt
          <br />
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
        {categories.map((cat, idx) => (
          <div key={idx} className="category-item">
            <img
              src={`/icons/${cat.icon}`}
              alt={cat.name}
              className="category-icon"
              onError={(e) => (e.currentTarget.src = '/icons/default-category.png')}
            />
            <span className="category-text">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Deal of the Day (large first, rest scroll) */}
      <section className="deal-slider">
        <h2>Deal of the Day</h2>
        <div className="deal-items">
          {dealOfTheDay.map((d, i) => (
            <div key={d.id} className={`deal-item ${i === 0 ? 'deal-main' : ''}`}>
              <img
                src={d.image}
                alt={d.title}
                className="deal-image"
                onError={(e) => (e.currentTarget.src = '/products/placeholder.png')}
              />
              <div className="deal-info">
                <p className="deal-title">{d.title}</p>
                {/* Link to compare page: pass id & category via query */}
                <Link href={`/compare?pid=${encodeURIComponent(d.id)}&title=${encodeURIComponent(d.title)}`}>
                  <button className="compare-btn">Compare</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category-wise horizontal rows (25-30 placeholders each) */}
      {Object.keys(categoryProducts).map((cat, index) => (
        <section key={index} className="category-section">
          <div className="category-header">
            <h3>{cat}</h3>
            <Link
              href={`/category?name=${encodeURIComponent(cat)}`}
              className="view-all-link"
            >
              View all
            </Link>
          </div>

          <div className="category-products-row">
            {categoryProducts[cat].map((prod) => (
              <div key={prod.id} className="product-card">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="product-image"
                  onError={(e) => (e.currentTarget.src = '/products/placeholder.png')}
                />
                <p className="product-name">{prod.name}</p>
                <Link href={`/compare?pid=${encodeURIComponent(prod.id)}&title=${encodeURIComponent(prod.name)}`}>
                  <button className="compare-btn">Compare</button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer className="footer">© 2025 DealHunt. All rights reserved.</footer>
    </div>
  );
}
