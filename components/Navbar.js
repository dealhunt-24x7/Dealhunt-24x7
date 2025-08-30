"use client";

import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Menu options
  const menuOptions = [
    "Account", "Coin zone", "All categories", "Filters", "Language",
    "Offers", "My orders", "My cart", "My wishlist", "Notifications",
    "Help center", "Return & exchange", "Wallet", "Referral & earn"
  ];

  return (
    <>
      <nav className="top-navbar">
        {/* Brand */}
        <div className="brand">
          <span className="brand-name">DealHunt</span><br/>
          <span className="tagline">Find the best deals!</span>
        </div>

        {/* Search */}
        <div className="searchbar">
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Right side */}
        <div className="top-right">
          <img
            src="/icons/avatar.png"
            alt="Profile"
            className="profile-icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />

          {/* Hamburger for mobile */}
          <div
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {sidebarOpen && (
        <div
          className="side-menu-overlay"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="side-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Menu</h3>
            {menuOptions.map((opt, idx) => (
              <div key={idx} className="side-menu-item">{opt}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
