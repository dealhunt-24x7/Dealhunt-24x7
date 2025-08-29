export default function Sidebar({ open, setOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <button
        onClick={() => setOpen(false)}
        className="p-4 text-red-500 font-bold"
      >
        ✖ Close
      </button>
      <ul className="p-4 space-y-4">
        <li>🏠 Home</li>
        <li>⭐ Deals</li>
        <li>🛒 Cart</li>
        <li>⚙️ Settings</li>
      </ul>
    </div>
  );
}
