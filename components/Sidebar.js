"use client";

export default function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 flex flex-col transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        onClick={() => setOpen(false)}
        className="mb-6 text-right w-full text-2xl hover:text-red-500"
      >
        ✕
      </button>

      <ul className="flex flex-col gap-4">
        <li><a href="/" onClick={() => setOpen(false)}>🏠 Home</a></li>
        <li><a href="/products" onClick={() => setOpen(false)}>🛒 Products</a></li>
        <li><a href="/about" onClick={() => setOpen(false)}>ℹ️ About</a></li>
        <li><a href="/contact" onClick={() => setOpen(false)}>📞 Contact</a></li>
      </ul>

      <div className="mt-auto pt-4 border-t border-gray-700 text-sm text-gray-400">
        &copy; 2025 DealHunt
      </div>
    </div>
  );
}
