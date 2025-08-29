"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md">
      {/* Left - Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden p-2 bg-blue-500 rounded-lg"
      >
        ☰
      </button>

      {/* Center - Brand */}
      <h1 className="text-2xl font-bold">DealHunt</h1>

      {/* Right - Nav Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/products" className="hover:underline">Products</a>
        <a href="/about" className="hover:underline">About</a>
      </div>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </nav>
  );
}
