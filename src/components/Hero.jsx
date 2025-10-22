import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce">
        Hi, I'm Heshan 👋
      </h1>
      <p className="text-lg md:text-2xl mb-6 max-w-2xl">
        A passionate Full-Stack Developer who loves building clean, modern web
        applications using React, Vite, and Tailwind CSS.
      </p>
      <a
        href="#projects"
        className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        View My Work
      </a>
    </section>
  );
}
