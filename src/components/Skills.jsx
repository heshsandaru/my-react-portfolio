import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  GitBranch,
  Server,
  Rocket,
  Cpu,
  Cloud,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "React", icon: <Code className="w-6 h-6 text-blue-500" /> },
    { name: "Vite", icon: <Rocket className="w-6 h-6 text-purple-500" /> },
    { name: "Tailwind CSS", icon: <Wrench className="w-6 h-6 text-cyan-500" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6 text-green-500" /> },
    { name: "Spring Boot", icon: <Cpu className="w-6 h-6 text-emerald-500" /> },
    { name: "MongoDB", icon: <Database className="w-6 h-6 text-green-600" /> },
    { name: "MySQL", icon: <Database className="w-6 h-6 text-blue-600" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-6 h-6 text-orange-500" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Skills
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-transparent hover:border-indigo-500 transition-all"
          >
            <div className="mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
