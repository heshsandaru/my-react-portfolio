import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Heshan</h1>
      <p className="text-xl mb-6">I'm a Full Stack Developer building modern web apps with React & Tailwind CSS.</p>
      <a href="#projects" className="px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition">View Projects</a>
    </section>
  );
}
