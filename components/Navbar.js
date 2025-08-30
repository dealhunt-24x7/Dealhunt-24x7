"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="top-navbar">
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

      <div className="searchbar">
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="top-right">
        <img src="/profile.jpg" alt="Profile" className="profile-icon" />
        <button className="topbtn">Menu</button>
      </div>

      <div ref={menuRef}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>
    </nav>
  );
}
