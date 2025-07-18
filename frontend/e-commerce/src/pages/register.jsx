import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here (not implemented)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-emerald-200">
      <div className="flex w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side Illustration (hidden on mobile) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-emerald-50 w-1/2 p-8">
          <img
            src="https://undraw.co/api/illustrations/3b0b7b7e-2e2e-4e2e-8e2e-2e2e2e2e2e2e"
            alt="Register Illustration"
            className="w-64 h-64 object-contain mb-6 drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(16,185,129,0.15))' }}
            onError={e => (e.target.style.display = 'none')}
          />
          <h3 className="text-2xl font-bold text-emerald-600 text-center">Join TechShed!</h3>
          <p className="text-gray-500 text-center mt-2">Create your account and start shopping the best tech deals.</p>
        </div>
        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-emerald-600 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50"
                placeholder="Create a password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg text-lg shadow-md transition"
            >
              Register
            </button>
          </form>
          <div className="mt-8 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/signin" className="text-emerald-600 font-semibold hover:underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
