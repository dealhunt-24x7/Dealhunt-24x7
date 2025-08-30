"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">RakshakAI</div>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Support</a>
          <a href="#">Donate</a>
        </div>

        {/* Hamburger (Mobile) */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <a href="#" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#" onClick={() => setIsOpen(false)}>Features</a>
        <a href="#" onClick={() => setIsOpen(false)}>Support</a>
        <a href="#" onClick={() => setIsOpen(false)}>Donate</a>
      </div>

      {/* Overlay (click → close menu) */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
