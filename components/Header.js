'use client';
import { useState } from 'react';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden"
      >
        ☰
      </button>
      <h1 className="text-xl font-bold">Dealhunt</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="hidden md:block px-2 py-1 rounded text-black"
      />
      {sidebarOpen && (
        <div className="absolute top-16 left-0 w-64 bg-white text-black p-4 shadow-md">
          <ul>
            <li className="mb-2">Home</li>
            <li className="mb-2">Products</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Referral</li>
            <li className="mb-2">Wallet</li>
          </ul>
        </div>
      )}
    </header>
  );
}
