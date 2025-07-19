import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle, FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { TbCircleNumber0Filled } from "react-icons/tb";


const Navbar = () => {
  const [audioDropdown, setAudioDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const audioRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
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

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(wishlist.length);
    };
    updateCartCount();
    updateWishlistCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("storage", updateWishlistCount);
    const interval = setInterval(() => {
      updateCartCount();
      updateWishlistCount();
    }, 500);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("storage", updateWishlistCount);
      clearInterval(interval);
    };
  }, []);

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
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center gap-2 focus:outline-none"
                onClick={() => setProfileDropdown((v) => !v)}
                onBlur={() => setTimeout(() => setProfileDropdown(false), 150)}
              >
                <FaUserCircle className="text-2xl text-emerald-600" title="Profile" />
                <span className="font-semibold text-sm hidden md:inline">{user.username || user.email}</span>
              </button>
              {profileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50 py-2">
                  <div className="px-4 py-2 border-b">
                    <div className="font-semibold">{user.username || user.email}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-emerald-50"
                    onClick={() => { setProfileDropdown(false); navigate("/profile"); }}
                  >Profile</button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-emerald-50 text-red-500"
                    onClick={() => { localStorage.removeItem("token"); localStorage.removeItem("user"); navigate("/signin"); }}
                  >Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <FaUserCircle className="text-xl" title="User" />
              <Link to="/signin" className="hover:text-emerald-500">Log In</Link>
            </>
          )}
          <Link to="/wishlist" className="text-xl hover:text-emerald-500 flex items-center relative" title="Wishlist">
            <FaRegHeart />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="text-xl hover:text-emerald-500 flex items-center relative" title="Cart">
            <BsCart2 />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-emerald-500 text-white text-xs font-bold rounded-full px-2 py-0.5 min-w-[20px] text-center">
                {cartCount}
              </span>
            )}
          </Link>
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
