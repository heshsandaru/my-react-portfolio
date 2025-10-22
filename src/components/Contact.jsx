import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <form className="max-w-lg mx-auto space-y-5 px-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
