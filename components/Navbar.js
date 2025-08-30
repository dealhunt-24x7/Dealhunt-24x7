"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuRef = useRef(null);

  // Close sidebar if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="top-navbar">
      {/* Left - Hamburger for mobile */}
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Center - Brand */}
      <h1 className="brand-name">DealHunt</h1>

      {/* Right - Nav Links (desktop) */}
      <div className="hidden md:flex space-x-6">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </div>

      {/* Sidebar / 3-line menu */}
      <div ref={menuRef}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>
    </nav>
  );
}
