import React, { useState } from "react";
import project1 from "./../assets/react.svg";
import project2 from "./../assets/react.svg";
import project3 from "./../assets/react.svg";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const projects = [
    { id: 1, title: "Portfolio Website", img: project1, desc: "Modern personal portfolio with React + TailwindCSS" },
    { id: 2, title: "E-commerce Store", img: project2, desc: "React + Node.js full-stack e-commerce solution" },
    { id: 3, title: "Smart Parking System", img: project3, desc: "IoT + Spring Boot based parking management system" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            onClick={() => setSelected(p)}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
              <h3 className="text-white text-xl font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
