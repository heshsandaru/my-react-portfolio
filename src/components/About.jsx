import React from "react";
import profile from "./../assets/react.svg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-5">
        <img
          src={profile}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-indigo-500"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a software engineer with a passion for crafting interactive web
            experiences. I enjoy learning new technologies and continuously
            improving my development skills to create better user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
