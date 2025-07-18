import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-4 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-gray-700 pb-8">
        {/* Logo & Description */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-white">TechShed</h2>
          <p className="text-sm mb-4">Your one-stop shop for the latest electronics, gadgets, and accessories. Quality, value, and service you can trust.</p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400" aria-label="Facebook"><FaFacebookF size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400" aria-label="Twitter"><FaTwitter size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400" aria-label="YouTube"><FaYoutube size={20} /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
            <li><Link to="/helpcentre" className="hover:text-emerald-400">Help Centre</Link></li>
            <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
          </ul>
        </div>
        {/* Shop Links */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-3 text-white">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/category-shop-all" className="hover:text-emerald-400">Shop All</Link></li>
            <li><Link to="/category-computers" className="hover:text-emerald-400">Computers</Link></li>
            <li><Link to="/category-drones-cameras" className="hover:text-emerald-400">Drones & Cameras</Link></li>
            <li><Link to="/category-audio" className="hover:text-emerald-400">Audio</Link></li>
            <li><Link to="/category-mobile" className="hover:text-emerald-400">Mobile</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-400">Phone:</span> <a href="tel:110223467" className="hover:text-emerald-400">110223467</a></li>
            <li><span className="text-gray-400">Email:</span> <a href="mailto:info@techshed.com" className="hover:text-emerald-400">info@techshed.com</a></li>
            <li><span className="text-gray-400">Location:</span> 123 Tech Street, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-400 gap-2 md:gap-0">
        <span>&copy; {new Date().getFullYear()} TechShed. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Made with 49 for E-Commerce</span>
        <span className="mt-2 md:mt-0"><Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link> | <Link to="/terms" className="hover:text-emerald-400">Terms</Link></span>
      </div>
    </footer>
  );
};

export default Footer;   