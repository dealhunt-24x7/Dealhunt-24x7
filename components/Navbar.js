"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuRef = useRef();

  // Close sidebar if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="top-navbar">
      {/* Left - Hamburger */}
      <div className="flex items-center gap-2">
        <button
          className="hamburger md:hidden flex flex-col justify-between h-5 w-6"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="block h-0.5 w-full bg-white"></span>
          <span className="block h-0.5 w-full bg-white"></span>
          <span className="block h-0.5 w-full bg-white"></span>
        </button>
        <h1 className="brand-name">DealHunt</h1>
      </div>

      {/* Center Search */}
      <div className="searchbar">
        <input type="text" placeholder="Search products..." />
      </div>

      {/* Right */}
      <div className="top-right">
        <img src="/profile.jpg" alt="Profile" className="profile-icon" />
        <button className="topbtn">Menu</button>
      </div>

      {/* Sidebar */}
      <div ref={menuRef}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>
    </nav>
  );
}
