import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md dark:bg-gray-900 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Heshan</h1>
        <ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
          <li><a href="#home" className="hover:text-primary transition">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition">About</a></li>
          <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
