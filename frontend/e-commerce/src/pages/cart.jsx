import React from "react";
import { BsCart2 } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      <BsCart2 className="text-6xl text-emerald-400 mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">Your Cart</h1>
      <p className="text-gray-500 text-lg text-center max-w-md mb-8">Your cart is empty. Add some products to see them here and proceed to checkout!</p>
      {/* Future: Cart items and checkout button will go here */}
    </div>
  );
};

export default Cart; 