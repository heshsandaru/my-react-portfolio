import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden"
    >
      <div className="backdrop-blur-md bg-white/10 rounded-3xl p-10 shadow-2xl">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Heshan 👋</h1>
        <TypeAnimation
          sequence={[
            "Full-Stack Developer 💻",
            2000,
            "React & Spring Boot Expert ⚙️",
            2000,
            "UI/UX Designer 🎨",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl font-semibold"
        />
        <div className="mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-xl shadow hover:bg-gray-100 transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
