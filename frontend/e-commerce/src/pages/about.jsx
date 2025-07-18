import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      {/* Hero/team image */}
      <div className="flex justify-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="TechShed Team"
          className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-emerald-100"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-emerald-600">About TechShed</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        TechShed is your one-stop shop for the latest electronics, gadgets, and accessories. We are passionate about bringing you the best in technology, value, and customer service. Our mission is to make tech shopping easy, affordable, and enjoyable for everyone.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        {/* Mission image */}
        <div className="flex justify-center mb-4 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
            alt="Mission"
            className="w-56 h-40 object-cover rounded-xl shadow-md border-2 border-emerald-100"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-emerald-500">Our Mission</h2>
          <p className="text-gray-600">
            To empower people with innovative technology and exceptional service, making the digital world accessible to all.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-emerald-500 mt-6">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Customer First: We put your needs at the heart of everything we do.</li>
            <li>Innovation: We embrace new ideas and technology.</li>
            <li>Integrity: We are honest, transparent, and ethical.</li>
            <li>Quality: We deliver only the best products and services.</li>
          </ul>
        </div>
      </div>
      <div className="bg-emerald-50 rounded-lg p-6 md:p-10 shadow mb-8 flex flex-col md:flex-row items-center gap-6">
        {/* Careers image/icon */}
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=120&q=80"
          alt="Careers"
          className="w-24 h-24 object-cover rounded-full shadow border-2 border-emerald-200 mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3 text-emerald-600">Careers at TechShed</h2>
          <p className="text-gray-700 mb-4">
            Want to join a passionate, innovative, and growing team? At TechShed, we’re always looking for talented people who love technology and want to make a difference.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Competitive salaries and benefits</li>
            <li>Flexible work environment</li>
            <li>Opportunities for growth and learning</li>
            <li>Inclusive and diverse culture</li>
          </ul>
          <div className="mt-4">
            <a href="mailto:careers@techshed.com" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded shadow transition">View Open Positions</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        &copy; {new Date().getFullYear()} TechShed. All rights reserved.
      </div>
    </div>
  );
};

export default About;