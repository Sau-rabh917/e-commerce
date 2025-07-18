import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">Have a question, feedback, or need help? Fill out the form or reach us directly!</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-emerald-500" />
                <span>+91 110223467</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-emerald-500" />
                <span>info@techshed.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-emerald-500" />
                <span>123 Tech Street, City, Country</span>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Contact"
            className="w-full h-40 object-cover rounded-xl shadow-md hidden md:block"
          />
        </div>
        {/* Contact Form */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50"
                placeholder="Type your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg text-lg shadow-md transition"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-center text-emerald-600 font-semibold mt-2">Thank you! Your message has been sent.</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
