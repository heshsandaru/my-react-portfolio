import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
      © {new Date().getFullYear()} Heshan Sandaruwan | Built with React + Tailwind CSS 💻
    </footer>
  );
}
