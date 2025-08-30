"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuOptions = [
    "Account", "Coin zone", "All categories", "Filters", "Language",
    "Offers", "My orders", "My cart", "My wishlist", "Notifications",
    "Help center", "Return & exchange", "Wallet", "Referral & earn"
  ];

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md relative">
      {/* Left - Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden p-2 bg-blue-500 rounded-lg"
      >
        ☰
      </button>

      {/* Center - Brand */}
      <h1 className="text-2xl font-bold">DealHunt</h1>

      {/* Right - Profile + 3-dot menu */}
      <div className="flex items-center gap-4 relative">
        <img
          src="/icons/avatar.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <button
          className="dots-btn text-xl font-bold cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ⋮
        </button>

        {/* 3-dot Side Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="flex-1" /> {/* Empty space to click outside */}
            <div
              ref={menuRef}
              className="w-60 bg-white shadow-lg p-4 flex flex-col gap-2 overflow-y-auto"
            >
              <h3 className="font-bold mb-2">Menu</h3>
              {menuOptions.map((opt, idx) => (
                <div
                  key={idx}
                  className="p-2 cursor-pointer border-b last:border-b-0 hover:bg-gray-100 font-semibold"
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6 ml-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/products" className="hover:underline">Products</a>
        <a href="/about" className="hover:underline">About</a>
      </div>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </nav>
  );
}
