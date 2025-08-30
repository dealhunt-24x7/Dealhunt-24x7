"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuRef = useRef();

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <nav className="top-navbar">
      <div className="flex items-center gap-2">
        {/* Hamburger */}
        <button
          className="hamburger md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="brand-name">DealHunt</h1>
      </div>

      {/* Center search */}
      <div className="searchbar">
        <input type="text" placeholder="Search products..." />
      </div>

      {/* Right */}
      <div className="top-right">
        <img src="/profile.jpg" alt="Profile" className="profile-icon" />
        <button className="topbtn">Menu</button>
      </div>

      {/* Sidebar / 3-line menu */}
      <div
        ref={menuRef}
        className={`dots-menu ${sidebarOpen ? "open" : ""}`}
      >
        <div className="dots-menu-item">Home</div>
        <div className="dots-menu-item">Products</div>
        <div className="dots-menu-item">About</div>
        <div className="dots-menu-item">Contact</div>
      </div>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </nav>
  );
}
