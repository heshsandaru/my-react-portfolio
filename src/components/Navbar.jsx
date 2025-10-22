import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Heshan</h1>
        <div className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition">
              {item}
            </a>
          ))}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-5 py-3 space-y-2">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-indigo-500"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
