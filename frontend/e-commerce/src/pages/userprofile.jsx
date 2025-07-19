import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Please login to view your profile.</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center max-w-md w-full mb-8">
        <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <span className="text-5xl text-emerald-500 font-bold">
            {username ? username[0].toUpperCase() : email[0].toUpperCase()}
          </span>
        </div>
        {edit ? (
          <>
            <input
              className="mb-2 px-3 py-2 border rounded w-full text-lg text-center"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              className="mb-2 px-3 py-2 border rounded w-full text-lg text-center"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              disabled
            />
            <button
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded mt-2"
              onClick={() => setEdit(false)}
            >Save</button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2 text-emerald-700">{username || "User"}</h2>
            <div className="text-gray-600 mb-2">{email}</div>
            <button
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded mt-2"
              onClick={() => setEdit(true)}
            >Edit Profile</button>
          </>
        )}
        <div className="w-full border-t pt-4 mt-4">
          <div className="text-gray-500 text-sm">Member since: <span className="font-semibold">(not available)</span></div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h3 className="text-xl font-bold mb-4 text-emerald-700">My Orders</h3>
        {orders.length === 0 ? (
          <div className="text-gray-400 text-center">No orders found.</div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <div className="font-semibold">Order #{order.id}</div>
                  <div className="text-sm text-gray-500">{order.date} | <span className="font-semibold text-emerald-600">{order.status}</span></div>
                </div>
                <div className="mb-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm text-gray-700">
                      <span>{item.name} x{item.qty}</span>
                      <span>${item.price * item.qty}</span>
                    </div>
                  ))}
                </div>
                <div className="text-right font-bold text-emerald-700">Total: ${order.total}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile; 