"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuRef = useRef(null);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        sidebarOpen
      ) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <nav className="top-navbar">
      <div className="flex items-center gap-2">
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

      <div className="searchbar">
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="top-right">
        <img src="/profile.jpg" alt="Profile" className="profile-icon" />
        <button className="topbtn">Menu</button>
      </div>

      {/* Sidebar / 3-dot menu */}
      <div ref={menuRef}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>
    </nav>
  );
}
