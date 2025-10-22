import React from "react";
import project1 from "./../assets/react.svg";
import project2 from "./../assets/react.svg";

export default function Projects() {
  const projects = [
    { id: 1, title: "Portfolio Website", img: project1, link: "#" },
    { id: 2, title: "E-commerce App", img: project2, link: "#" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-5">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link}
            className="bg-white dark:bg-gray-900 rounded-xl shadow hover:scale-105 transition transform overflow-hidden"
          >
            <img src={p.img} alt={p.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
