import React from "react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-5">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-6 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>
        <img src={project.img} alt={project.title} className="rounded-xl mb-4" />
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
        <a
          href="#"
          className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
