import React, { useState, useEffect } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [success, setSuccess] = useState("");

  // Always update wishlist from localStorage on every render
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  });

  useEffect(() => {
    const updateWishlist = () => {
      const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(stored);
    };
    window.addEventListener("storage", updateWishlist);
    window.addEventListener("focus", updateWishlist);
    return () => {
      window.removeEventListener("storage", updateWishlist);
      window.removeEventListener("focus", updateWishlist);
    };
  }, []);

  const handleRemove = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setSuccess(`${product.name} added to cart!`);
    setTimeout(() => setSuccess(""), 1500);
  };

  if (!wishlist.length) {
    return <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">Your wishlist is empty.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">My Wishlist</h2>
        {success && <div className="text-green-600 text-center mb-4">{success}</div>}
        <div className="grid grid-cols-1 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div>
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="text-emerald-600 font-bold">${item.price}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <button onClick={() => handleAddToCart(item)} className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded font-semibold text-sm">Add to Cart</button>
                <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:underline text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist; 