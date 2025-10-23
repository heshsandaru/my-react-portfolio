import React, { useState } from "react";
import project1 from "./../assets/d00cd9ec-c858-4976-bd15-1917b3ef2118_thumbnail.jpg";
import project2 from "./../assets/1_o5FmjKTPdJTbhGE2MIjo6w.jpg";
import project3 from "./../assets/cover.webp";
import project4 from "./../assets/Cover_2-1-scaled.jpg"
import project5 from "./../assets/how-does-a-restaurant-pos-system-work.jpg"
import project6 from "./../assets/1683530176805.png"
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const projects = [
    { id: 1, title: "Portfolio Website", img: project1, desc: "Modern personal portfolio with React + TailwindCSS" },
    { id: 2, title: "Bus Ticket booking System", img: project2, desc: "Second-Semester-Final-Project-AAD , Spring boot." },
    { id: 3, title: "Note App", img: project3, desc: "Note App using the react native and Expo" },
    { id: 4, title: "AAD System", img: project4, desc: "Web Application AAD Using the spring Boot" },
    { id: 5, title: "POS System", img: project5, desc: "Using HTML,CSS,Javascript" },
    { id: 6, title: "Microservices", img: project6, desc: "Software-Architectures-and-Design-Patterns-II" },
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
