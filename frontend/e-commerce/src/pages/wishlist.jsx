import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      <FaRegHeart className="text-6xl text-emerald-400 mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">Your Wishlist</h1>
      <p className="text-gray-500 text-lg text-center max-w-md mb-8">You haven't added any products to your wishlist yet. Start exploring and add your favorite items!</p>
      {/* Future: Wishlist product cards will go here */}
    </div>
  );
};

export default Wishlist; 