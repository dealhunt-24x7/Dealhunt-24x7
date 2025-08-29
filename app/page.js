'use client';
import React, { useEffect, useRef } from 'react';
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
    { id: 1, title: 'Deal 1', image: '/products/deal1.png' },
    { id: 2, title: 'Deal 2', image: '/products/deal2.png' },
    { id: 3, title: 'Deal 3', image: '/products/deal3.png' },
    { id: 4, title: 'Deal 4', image: '/products/deal4.png' },
  ];

  const categoryProducts = {
    Mobile: [
      { name: 'Mobile 1', image: '/products/mobile1.png' },
      { name: 'Mobile 2', image: '/products/mobile2.png' },
      { name: 'Mobile 3', image: '/products/mobile3.png' },
      { name: 'Mobile 4', image: '/products/mobile4.png' },
      { name: 'Mobile 5', image: '/products/mobile5.png' },
      { name: 'Mobile 6', image: '/products/mobile6.png' },
    ],
    // ... baki categories same as before
  };

  // **Ref + auto-scroll logic**
  const dealRef = useRef(null);
  useEffect(() => {
    const scrollContainer = dealRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    }, 20); // adjust speed here

    return () => clearInterval(interval);
  }, []);

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
          <img src="/icons/avatar.png" alt="Profile" className="profile-icon" />
          <button className="topbtn">Login</button>
          <button className="topbtn">⋮</button>
        </div>
      </div>

      {/* Categories Slider */}
      <div className="categories-slider">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
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

      {/* Deal of the Day (auto-scroll 1 product visible at a time) */}
      <section className="deal-slider">
        <h2>Deal of the Day</h2>
        <div className="deal-items" ref={dealRef}>
          {dealOfTheDay.map((deal) => (
            <div key={deal.id} className="deal-item deal-main">
              <img
                src={deal.image || '/products/placeholder.png'}
                alt={deal.title}
                className="deal-image"
                onError={(e) => (e.currentTarget.src = '/products/placeholder.png')}
              />
              <div className="deal-info">
                <p className="deal-title">{deal.title}</p>
                <button className="compare-btn">Compare</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category-wise products */}
      {Object.keys(categoryProducts).map((cat, index) => (
        <section key={index} className="category-section">
          <h3>{cat}</h3>
          <div className="category-products-row">
            {categoryProducts[cat].map((prod, idx) => (
              <div key={idx} className="product-card">
                <img
                  src={prod.image || '/products/placeholder.png'}
                  alt={prod.name}
                  className="product-image"
                  onError={(e) => (e.currentTarget.src = '/products/placeholder.png')}
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
