import React from "react";

export default function Skills() {
  const skills = [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 text-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
