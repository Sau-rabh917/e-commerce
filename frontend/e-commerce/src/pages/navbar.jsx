import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle,FaRegHeart  } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { TbCircleNumber0Filled } from "react-icons/tb";
import { useState, useRef } from "react";




const Navbar = () => {
  const [audioDropdown, setAudioDropdown] = useState(false);
  const audioRef = useRef(null);
  const categories = [
    { name: "Shop All", to: "/category/shop-all" },
    { name: "Best Sellers", to: "/category/best-sellers" },
    { name: "Computers", to: "/category/computers" },
    { name: "Drones & Cameras", to: "/category/drones-cameras" },
    { name: "Audio", to: "/category/audio" },
    { name: "Mobile", to: "/category/mobile" },
    { name: "Sale", to: "/category/sales" },
    { name: "Tablets", to: "/category/tablets" },
    { name: "T.V & Home Cinema", to: "/category/tv-home-cinema" },
    { name: "Wearable Tech", to: "/category/wearable-tech" },
  ];
  return (
    <>
      {/* Free Shipping Bar */}
      <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white px-2 py-2 md:py-3 flex flex-col md:flex-row md:justify-between md:items-center">
        <p className="text-center md:text-left w-full md:w-auto text-xs md:text-base font-semibold tracking-wide m-0">
          Free Shipping for orders over $50
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5 mt-2 md:mt-0 text-xs md:text-sm">
          <Link to="/" className="hover:text-emerald-500">Home</Link>
          <Link to="/about" className="hover:text-emerald-500">About</Link>
          <Link to="/contact" className="hover:text-emerald-500">Contact</Link>
          <Link to="/helpcentre" className="hover:text-emerald-500">Help & Centre</Link>
          <a href="tel:110223467" className="hover:text-emerald-500">Call us 110223467</a>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="flex justify-between items-center bg-white text-black p-4 shadow">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide min-w-[100px] flex-1 md:flex-none text-center md:text-left">
          <Link to="/" className="leading-tight hover:text-emerald-500 transition-colors">
            TechShed
          </Link>
        </div>
        {/* User, Log In, Wishlist, Cart, Search */}
        <div className="flex items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
          <Link to="/search"><IoSearchOutline className="text-2xl cursor-pointer hover:text-emerald-500" title="Search" /></Link>
          <FaUserCircle className="text-xl" title="User" />
          <Link to="/signin" className="hover:text-emerald-500">Log In</Link>
          <Link to="/wishlist" className="text-xl hover:text-emerald-500" title="Wishlist"><FaRegHeart /></Link>
          <Link to="/cart" className="text-xl hover:text-emerald-500 flex items-center" title="Cart"><BsCart2 /><span><TbCircleNumber0Filled/></span></Link>
        </div>
      </div>
      {/* Category Navigation Bar */}
      <div className="bg-gray-100 text-black py-2 shadow-sm font-medium overflow-x-auto">
        <div className="flex flex-nowrap md:gap-8 gap-4 px-2 md:px-0 text-xs md:text-sm whitespace-nowrap relative">
          {categories.map((cat) => (
            cat.name === "Audio" ? (
              <div
                key={cat.name}
                className="relative group"
                onMouseEnter={() => setAudioDropdown(true)}
                onMouseLeave={() => setAudioDropdown(false)}
                ref={audioRef}
              >
                <span className="hover:text-emerald-500 cursor-pointer px-2 py-1 inline-block">Audio</span>
                {/* Dropdown */}
                {audioDropdown && (
                  <div
                    className="fixed left-0 mt-1 bg-white shadow rounded z-50 min-w-[140px] py-2 transition-all duration-200"
                    style={{
                      top: audioRef.current ? audioRef.current.getBoundingClientRect().bottom + window.scrollY : 0,
                      left: audioRef.current ? audioRef.current.getBoundingClientRect().left : 0,
                    }}
                  >
                    <Link to="/category/speakers" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Speakers</Link>
                    <Link to="/category/headphones" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600">Headphones</Link>
                  </div>
                )}
              </div>
            ) : (
              <Link key={cat.name} to={cat.to} className="hover:text-emerald-500">
                {cat.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
