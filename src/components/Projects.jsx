import React from "react";
import project1 from "./../assets/react.svg";

export default function Projects() {
  const projects = [
    { id: 1, title: "Portfolio Website", img: project1, link: "#" },
    { id: 2, title: "E-commerce App", img: project1, link: "#" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <a href={p.link} key={p.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition">
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
