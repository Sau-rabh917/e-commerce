import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const paymentOptions = [
  { value: "cod", label: "Cash on Delivery" },
  { value: "card", label: "Credit/Debit Card" },
  { value: "upi", label: "UPI" },
];

const RAZORPAY_KEY = "rzp_test_1DP5mmOlF5G5ag"; // Demo/test key, replace with your own for production

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const OrderSummary = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: `ORD${Date.now()}`,
      date: new Date().toISOString().slice(0, 10),
      status: "Placed",
      total,
      address,
      payment,
      items: cart.map(item => ({ name: item.name, qty: item.quantity, price: item.price })),
    };
    localStorage.setItem("orders", JSON.stringify([newOrder, ...orders]));
    localStorage.setItem("cart", JSON.stringify([]));
    setSuccess("Order placed successfully!");
    setTimeout(() => {
      setSuccess("");
      navigate("/profile");
    }, 1500);
  };

  const handleRazorpay = async () => {
    setLoading(true);
    const res = await loadRazorpayScript();
    setLoading(false);
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      key: RAZORPAY_KEY,
      amount: total * 100, // in paise
      currency: "INR",
      name: "TechShed",
      description: "Order Payment",
      handler: function (response) {
        placeOrder();
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address,
      },
      theme: {
        color: "#10b981",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    if (!address.trim()) {
      setSuccess("Please enter your address.");
      return;
    }
    if (payment === "card" || payment === "upi") {
      await handleRazorpay();
      return;
    }
    placeOrder();
  };

  if (!cart.length) return <div className="min-h-screen flex items-center justify-center">Your cart is empty.</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">Order Summary</h2>
        <div className="mb-6">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name} x{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Shipping Address</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
              placeholder="Enter your delivery address"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Payment Method</label>
            <div className="flex gap-4">
              {paymentOptions.map(opt => (
                <label key={opt.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value={opt.value}
                    checked={payment === opt.value}
                    onChange={e => setPayment(e.target.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg text-lg shadow-md transition" disabled={loading}>{loading ? "Loading..." : "Pay & Confirm"}</button>
          {success && <div className="text-green-600 text-center mt-2">{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default OrderSummary; 