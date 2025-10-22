import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: null, msg: "" });

  // simple validation
  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ submitting: false, success: false, msg: "All fields are required!" });
      return;
    }

    if (!isEmailValid(form.email)) {
      setStatus({ submitting: false, success: false, msg: "Enter a valid email!" });
      return;
    }

    setStatus({ submitting: true, success: null, msg: "" });

    // simulate sending email (replace with EmailJS or backend API)
    setTimeout(() => {
      setStatus({ submitting: false, success: true, msg: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto px-5">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-1 duration-300"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your Message"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          ></textarea>

          <button
            type="submit"
            disabled={status.submitting}
            className="flex items-center justify-center w-full gap-2 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition transform hover:-translate-y-1 disabled:opacity-50"
          >
            {status.submitting ? "Sending..." : "Send Message"} <Send size={18} />
          </button>

          {status.success === true && (
            <p className="text-green-600 text-center mt-3 font-medium">{status.msg}</p>
          )}
          {status.success === false && (
            <p className="text-red-600 text-center mt-3 font-medium">{status.msg}</p>
          )}
        </form>

        {/* Optional: Contact Info */}
        <div className="mt-10 text-center text-gray-700 dark:text-gray-300">
          <p>Or reach me directly at:</p>
          <a
            href="mailto:heshansandaruwan@gmail.com"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            heshansandaruwan999@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
