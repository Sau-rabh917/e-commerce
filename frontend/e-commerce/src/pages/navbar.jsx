import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle,FaRegHeart  } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { TbCircleNumber0Filled } from "react-icons/tb";





const Navbar = () => {
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
          <Link to="/help" className="hover:text-emerald-500">Help & Centre</Link>
          <a href="tel:110223467" className="hover:text-emerald-500">Call us 110223467</a>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="flex justify-between items-center bg-white text-black p-4 shadow">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide min-w-[100px]"><h1 className="leading-tight">TechShed</h1></div>
        {/* User, Log In, Wishlist, Cart, Search */}
        <div className="flex items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
          <IoSearchOutline className="text-2xl cursor-pointer hover:text-emerald-500" title="Search" />
          <FaUserCircle className="text-xl" title="User" />
          <Link to="/" className="hover:text-emerald-500">Log In</Link>
          <Link to="/" className="text-xl hover:text-emerald-500" title="Wishlist"><FaRegHeart /></Link>
          <Link to="/" className="text-xl hover:text-emerald-500 flex items-center" title="Cart"><BsCart2 /><span><TbCircleNumber0Filled/></span></Link>
        </div>
      </div>
      {/* Category Navigation Bar */}
      <div className="bg-gray-100 text-black py-2 shadow-sm font-medium overflow-x-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-8 gap-4 px-2 md:px-0 text-xs md:text-sm whitespace-nowrap">
          <Link to="/" className="hover:text-emerald-500">Shop All</Link>
          <Link to="/" className="hover:text-emerald-500">Computers</Link>
          <Link to="/" className="hover:text-emerald-500">Tablets</Link>
          <Link to="/" className="hover:text-emerald-500">Drones & Cameras</Link>
          <Link to="/" className="hover:text-emerald-500">Audio</Link>
          <Link to="/" className="hover:text-emerald-500">Mobile</Link>
          <Link to="/" className="hover:text-emerald-500">T.V & Home Cinema</Link>
          <Link to="/" className="hover:text-emerald-500">Wearable Tech</Link>
          <Link to="/" className="hover:text-emerald-500">Sales</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
