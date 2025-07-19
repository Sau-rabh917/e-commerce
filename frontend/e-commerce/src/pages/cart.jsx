import React, { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleUpdate = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePlaceOrder = () => {
    navigate("/order-summary");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4">
      <BsCart2 className="text-6xl text-emerald-400 mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">Your Cart</h1>
      {success && <div className="text-green-600 font-semibold mb-4">{success}</div>}
      {!cart.length ? (
        <p className="text-gray-500 text-lg text-center max-w-md mb-8">Your cart is empty. Add some products to see them here and proceed to checkout!</p>
      ) : (
        <>
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mt-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-500">Qty: 
                  <input type="number" min="1" value={item.quantity} onChange={e => handleUpdate(item.id, Number(e.target.value))} className="w-16 ml-2 border rounded px-2" />
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:underline">Remove</button>
            </div>
          ))}
        </div>
        <button
          className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-md transition"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
        </>
      )}
    </div>
  );
};

export default Cart; 