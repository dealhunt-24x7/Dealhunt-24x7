'use client';
import React from 'react';
import '../styles/globals.css';

export default function HomePage() {
  // Category names + icon file (keep file names exactly same in /public/icons)
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

  // Deal of the day (1 big card visible front; others via horizontal scroll)
  const dealOfTheDay = [
    { title: 'Deal 1', image: '/products/deal1.png' },
    { title: 'Deal 2', image: '/products/deal2.png' },
    { title: 'Deal 3', image: '/products/deal3.png' },
    { title: 'Deal 4', image: '/products/deal4.png' },
  ];

  // Category-wise products: name + image (Compare button shown instead of price)
  const categoryProducts = {
    Mobile: [
      { name: 'Mobile 1', image: '/products/mobile1.png' },
      { name: 'Mobile 2', image: '/products/mobile2.png' },
      { name: 'Mobile 3', image: '/products/mobile3.png' },
      { name: 'Mobile 4', image: '/products/mobile4.png' },
      { name: 'Mobile 5', image: '/products/mobile5.png' },
      { name: 'Mobile 6', image: '/products/mobile6.png' },
    ],
    Laptop: [
      { name: 'Laptop 1', image: '/products/laptop1.png' },
      { name: 'Laptop 2', image: '/products/laptop2.png' },
      { name: 'Laptop 3', image: '/products/laptop3.png' },
      { name: 'Laptop 4', image: '/products/laptop4.png' },
    ],
    Fashion: [
      { name: 'Fashion 1', image: '/products/fashion1.png' },
      { name: 'Fashion 2', image: '/products/fashion2.png' },
      { name: 'Fashion 3', image: '/products/fashion3.png' },
      { name: 'Fashion 4', image: '/products/fashion4.png' },
    ],
    Electronic: [
      { name: 'Gadget 1', image: '/products/electronic1.png' },
      { name: 'Gadget 2', image: '/products/electronic2.png' },
      { name: 'Gadget 3', image: '/products/electronic3.png' },
      { name: 'Gadget 4', image: '/products/electronic4.png' },
    ],
    'Home & Furniture': [
      { name: 'Chair 1', image: '/products/home1.png' },
      { name: 'Table 1', image: '/products/home2.png' },
      { name: 'Lamp 1', image: '/products/home3.png' },
      { name: 'Decor 1', image: '/products/home4.png' },
    ],
    'TV & Appliance': [
      { name: 'TV 1', image: '/products/tv1.png' },
      { name: 'AC 1', image: '/products/appliance1.png' },
      { name: 'WM 1', image: '/products/appliance2.png' },
      { name: 'Fridge 1', image: '/products/appliance3.png' },
    ],
    'Flight Booking': [
      { name: 'Jaipur Return', image: '/products/flight1.png' },
      { name: 'Goa Holiday', image: '/products/flight2.png' },
      { name: 'Delhi One-way', image: '/products/flight3.png' },
    ],
    Beauty: [
      { name: 'Face Cream', image: '/products/beauty1.png' },
      { name: 'Serum', image: '/products/beauty2.png' },
      { name: 'Shampoo', image: '/products/beauty3.png' },
    ],
    Grocery: [
      { name: 'Atta 5kg', image: '/products/grocery1.png' },
      { name: 'Rice 10kg', image: '/products/grocery2.png' },
      { name: 'Oil 1L', image: '/products/grocery3.png' },
      { name: 'Snacks', image: '/products/grocery4.png' },
    ],
    Kids: [
      { name: 'Toy Car', image: '/products/kids1.png' },
      { name: 'Doll', image: '/products/kids2.png' },
      { name: 'Blocks', image: '/products/kids3.png' },
      { name: 'Books', image: '/products/kids4.png' },
    ],
    Sports: [
      { name: 'Football', image: '/products/sports1.png' },
      { name: 'Cricket Bat', image: '/products/sports2.png' },
      { name: 'Yoga Mat', image: '/products/sports3.png' },
      { name: 'Skateboard', image: '/products/sports4.png' },
    ],
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
          {/* Default avatar; replace with user avatar when login is ready */}
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

      {/* Deal of the Day (1 prominent card, rest scroll) */}
      <section className="deal-slider">
        <h2>Deal of the Day</h2>
        <div className="deal-items">
          {dealOfTheDay.map((deal, idx) => (
            <div key={idx} className="deal-item">
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

      {/* Category-wise products (horizontal rows; image + name + Compare) */}
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

      {/* Footer */}
      <footer className="footer">© 2025 DealHunt. All rights reserved.</footer>
    </div>
  );
}
