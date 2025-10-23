import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 
                 text-white overflow-hidden"
    >
      {/* Floating Gradient Orbs */}
      <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl top-10 left-[-50px] animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl bottom-10 right-[-50px] animate-ping"></div>

      {/* Subtle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/70 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: ["0%", "100%"],
              opacity: [1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 
                   rounded-3xl p-10 shadow-2xl max-w-2xl text-center"
      >
        {/* Profile Image */}
        {/* <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          className="mx-auto w-40 h-40 rounded-full mb-6 
                     bg-gradient-to-tr from-yellow-400 to-pink-400 p-[3px] 
                     shadow-lg hover:shadow-yellow-300/50 transition-shadow"
        >
          <img
            src="./../assets/1756476474646.jpeg" // 🖼️ Replace with your actual profile image path
            alt="Heshan"
            className="w-full h-full rounded-full object-cover border-4 border-white/10"
          />
        </motion.div> */}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-3"
        >
          Hi, I’m <span className="text-yellow-300">Heshan 👋</span>
        </motion.h1>

        {/* Type Animation */}
        <TypeAnimation
          sequence={[
            "Full-Stack Developer 💻",
            2000,
            "React & Spring Boot Expert ⚙️",
            2000,
            "UI/UX Designer 🎨",
            2000,
            "Tech Innovator 🚀",
            2000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent"
        />

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-2xl 
                       shadow-lg hover:bg-gray-100 transition-all"
          >
            🚀 View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-white/70 text-white 
                       font-semibold rounded-2xl hover:bg-white hover:text-indigo-700 transition-all"
          >
            ✉️ Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 text-sm md:text-base text-white/70 tracking-wide"
      >
        Scroll down to explore more ↓
      </motion.p>
    </section>
  );
}
