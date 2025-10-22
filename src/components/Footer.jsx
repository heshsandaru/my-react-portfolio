import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-900 text-center text-gray-800 dark:text-gray-200">
      &copy; {new Date().getFullYear()} Heshan Sandaruwan. All rights reserved.
    </footer>
  );
}
