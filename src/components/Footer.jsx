import React from "react";
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <Github size={20} />, link: "https://github.com/heshsandaru?tab=repositories" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/heshansandaruwan/" },
    { icon: <Mail size={20} />, link: "mailto:heshansandaruwan@gmail.com" },
    { icon: <Facebook size={20} />, link: "https://web.facebook.com/heshan.sandaruwan.52/" },
    { icon: <Instagram size={20} />, link: "https://instagram.com/heshan.sandaruwan" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-300 dark:border-gray-700">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-gray-800 dark:text-gray-300">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
            Heshan Sandaruwan
          </h2>
          <p className="text-sm leading-relaxed">
            A passionate Full Stack Developer creating beautiful and high-performance web applications using
            <span className="font-semibold text-indigo-500"> React</span> and <span className="font-semibold text-teal-500">Tailwind CSS</span>.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition">Contact</a></li>
            <li><a href="#services" className="hover:text-indigo-500 transition">Services</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex space-x-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 hover:text-white transition transform hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {year} <span className="font-medium text-indigo-600 dark:text-indigo-400">Heshan Sandaruwan</span> — Built with 💙 React + Tailwind CSS
      </div>
    </footer>
  );
}
