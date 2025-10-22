import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-3">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Heshan
        </h1>

        <div className="hidden md:flex items-center gap-6 font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`capitalize hover:text-indigo-500 ${
                active === link ? "text-indigo-600 font-semibold" : ""
              }`}
            >
              {link}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-5 py-3 space-y-2">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-indigo-500 capitalize"
            >
              {link}
            </a>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
