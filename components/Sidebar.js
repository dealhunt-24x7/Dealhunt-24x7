"use client";

export default function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={() => setOpen(false)}
        className="mb-6 text-right w-full text-2xl"
      >
        ✕
      </button>

      <ul className="space-y-4">
        <li>
          <a href="/" onClick={() => setOpen(false)}>
            🏠 Home
          </a>
        </li>
        <li>
          <a href="/products" onClick={() => setOpen(false)}>
            🛒 Products
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setOpen(false)}>
            ℹ️ About
          </a>
        </li>
      </ul>
    </div>
  );
}
