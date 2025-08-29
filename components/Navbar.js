"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Sidebar Toggle Button */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
        ☰
      </button>

      {/* Brand Name */}
      <h1 className="text-2xl font-bold">DealHunt</h1>

      {/* Search Bar */}
      <SearchBar />

      {/* Nav Links */}
      <NavLinks />

      {/* Sidebar Component */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </nav>
  );
}
