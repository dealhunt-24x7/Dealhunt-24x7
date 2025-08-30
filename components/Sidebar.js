"use client";

export default function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 flex flex-col justify-start transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="mb-6 text-right w-full text-2xl hover:text-red-500 transition-colors"
      >
        ✕
      </button>

      {/* Menu Links */}
      <ul className="flex flex-col gap-4">
        <li>
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 transition-colors"
          >
            🏠 Home
          </a>
        </li>
        <li>
          <a
            href="/products"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 transition-colors"
          >
            🛒 Products
          </a>
        </li>
        <li>
          <a
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 transition-colors"
          >
            ℹ️ About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 transition-colors"
          >
            📞 Contact
          </a>
        </li>
        <li>
          <a
            href="/blog"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 transition-colors"
          >
            📝 Blog
          </a>
        </li>
        <li>
          <a
            href="/faq"
            onClick={() => setOpen(false)}
            className="hover:text-yellow-400 transition-colors"
          >
            ❓ FAQ
          </a>
        </li>
      </ul>

      {/* Optional Footer */}
      <div className="mt-auto pt-4 border-t border-gray-700 text-sm text-gray-400">
        &copy; 2025 DealHunt. All rights reserved.
      </div>
    </div>
  );
}
