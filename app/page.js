'use client';
import React, { useEffect, useRef, useState } from 'react';
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

  // Deal of the day
  const dealOfTheDay = [
    { title: 'Deal 1', image: '/products/deal1.png' },
    { title: 'Deal 2', image: '/products/deal2.png' },
    { title: 'Deal 3', image: '/products/deal3.png' },
    { title: 'Deal 4', image: '/products/deal4.png' },
  ];

  // Category-wise products
  const categoryProducts = {};
  categories.forEach(cat => {
    categoryProducts[cat.name] = Array.from({ length: 25 }, (_, i) => ({
      name: `${cat.name} ${i + 1}`,
      image: '/products/placeholder.png',
    }));
  });

  // Auto-scroll Deal
  const dealRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (dealRef.current) {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= dealOfTheDay.length) nextIndex = 0;
        setCurrentIndex(nextIndex);
        dealRef.current.scrollTo({
          left: nextIndex * dealRef.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // 3-dots menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOptions = [
    'Account', 'Coin zone', 'All categories', 'Filters', 'Language',
    'Offers', 'My orders', 'My cart', 'My wishlist', 'Notifications',
    'Help center', 'Return & exchange', 'Wallet', 'Referral & earn'
  ];

  return (
    <div className="homepage">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="brand">
          <span className="brand-name">DealHunt</span><br />
          <span className="tagline">Find the best deals!</span>
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="top-right">
          <img
            src="/icons/avatar.png"
            alt="Profile"
            className="profile-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <button
            className="topbtn dots-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ⋮
          </button>
        </div>
      </div>

      {/* 3 Dots Side Panel */}
      <div className={`dots-menu ${menuOpen ? 'open' : ''}`}>
        <h3>Menu</h3>
        {menuOptions.map((opt, idx) => (
          <div key={idx} className="dots-menu-item">{opt}</div>
        ))}
      </div>

      {/* Categories Slider */}
      <div className="categories-slider">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
            <img
              src={`/icons/${cat.icon}`}
              alt={cat.name}
              className="category-icon"
              onError={(e) => e.currentTarget.src = '/icons/default-category.png'}
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
              <img src={deal.image} alt={deal.title} className="deal-image" />
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
                <img src={prod.image} alt={prod.name} className="product-image" />
                <p className="product-name">{prod.name}</p>
                <button className="compare-btn">Compare</button>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Floating Cart */}
      <div className="floating-cart">🛒</div>

      {/* Footer */}
      <footer className="footer">
        <div>About DealHunt</div>
        <div>Contact us</div>
        <div>Help center</div>
        <div>Mail us</div>
        <div>Social: Instagram | Facebook | X</div>
      </footer>
    </div>
  );
}
