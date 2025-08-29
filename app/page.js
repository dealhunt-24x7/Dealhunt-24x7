'use client';
import React, { useState, useEffect, useRef } from 'react';
import '../styles/globals.css';

export default function HomePage() {
  // Categories
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

  // Deal of the Day
  const dealOfTheDay = [
    { title: 'Deal 1', image: '/products/deal1.png' },
    { title: 'Deal 2', image: '/products/deal2.png' },
    { title: 'Deal 3', image: '/products/deal3.png' },
    { title: 'Deal 4', image: '/products/deal4.png' },
  ];

  const dealRef = useRef(null);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (dealRef.current) {
        const firstChild = dealRef.current.children[0];
        dealRef.current.appendChild(firstChild);
      }
    }, 3000); // 3 sec auto scroll
    return () => clearInterval(scrollInterval);
  }, []);

  // Category-wise products
  const categoryProducts = {
    Mobile: Array.from({ length: 30 }, (_, i) => ({
      name: `Mobile ${i + 1}`,
      image: `/products/mobile${(i % 6) + 1}.png`,
    })),
    Laptop: Array.from({ length: 25 }, (_, i) => ({
      name: `Laptop ${i + 1}`,
      image: `/products/laptop${(i % 4) + 1}.png`,
    })),
    Fashion: Array.from({ length: 25 }, (_, i) => ({
      name: `Fashion ${i + 1}`,
      image: `/products/fashion${(i % 4) + 1}.png`,
    })),
    Electronic: Array.from({ length: 25 }, (_, i) => ({
      name: `Gadget ${i + 1}`,
      image: `/products/electronic${(i % 4) + 1}.png`,
    })),
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <div className="top-navbar">
        <div className="brand">
          DealHunt<br />
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

      {/* Categories */}
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

      {/* Deal of the Day */}
      <section className="deal-slider">
        <h2>Deal of the Day</h2>
        <div className="deal-items" ref={dealRef}>
          {dealOfTheDay.map((deal, idx) => (
            <div key={idx} className="deal-item">
              <img
                src={deal.image || '/products/placeholder.png'}
                alt={deal.title}
                className="deal-image"
              />
              <div className="deal-info">
                <p className="deal-title">{deal.title}</p>
                <button className="compare-btn">Compare</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Products */}
      {Object.keys(categoryProducts).map((cat, idx) => (
        <section key={idx} className="category-section">
          <h3>{cat}</h3>
          <div className="category-products-row">
            {categoryProducts[cat].map((prod, idx2) => (
              <div key={idx2} className="product-card">
                <img
                  src={prod.image || '/products/placeholder.png'}
                  alt={prod.name}
                  className="product-image"
                />
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
