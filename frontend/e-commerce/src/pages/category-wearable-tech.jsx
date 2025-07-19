import React, { useState } from "react";
import CategorySidebar from "./category-sidebar";
import ProductFlipCard from "./ProductFlipCard";

const demoProducts = [
  { id: 1, name: "Smartwatch Pro", price: 199, desc: "Track health, notifications, GPS.", img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Fitness Band X", price: 59, desc: "Heart rate, sleep, steps.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Smart Glasses", price: 299, desc: "AR display, calls, music.", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Kids Smartwatch", price: 79, desc: "GPS, safe zones, calls.", img: "https://images.unsplash.com/photo-1512446733611-9099a758e63c?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Luxury Fitness Watch", price: 299, desc: "Premium build, advanced tracking.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Smart Ring", price: 149, desc: "Sleep, activity, heart rate.", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Health Clip", price: 39, desc: "Clip-on tracker, steps, calories.", img: "https://images.unsplash.com/photo-1512446733611-9099a758e63c?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Smart Band Kids", price: 49, desc: "Fun, safe, colorful.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
];

const minPrice = Math.min(...demoProducts.map(p => p.price));
const maxPrice = Math.max(...demoProducts.map(p => p.price));

const CategoryWearableTech = () => {
  const [price, setPrice] = useState(maxPrice);
  const [success, setSuccess] = useState("");
  const [wishlistSuccess, setWishlistSuccess] = useState("");
  const filtered = demoProducts.filter(p => p.price <= price);

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

  const handleAddToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.find(item => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setWishlistSuccess(`${product.name} added to wishlist!`);
      setTimeout(() => setWishlistSuccess(""), 1500);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-full overflow-x-hidden">
      {/* Sidebar: Hamburger on mobile, vertical on desktop */}
      <div className="w-full md:w-auto md:min-w-[240px]">
        <CategorySidebar price={price} setPrice={setPrice} minPrice={minPrice} maxPrice={maxPrice} />
      </div>
      {/* Main content */}
      <div className="flex-1 w-full max-w-full py-8 px-2 sm:px-4 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left">Wearable Tech</h1>
        <p className="text-gray-600 mb-6 text-left">All wearable tech products will be shown here.</p>
        {success && <div className="text-green-600 text-center mb-2">{success}</div>}
        {wishlistSuccess && <div className="text-blue-600 text-center mb-2">{wishlistSuccess}</div>}
        <div className="mb-4 text-sm text-gray-500">Showing products up to <span className="font-semibold text-emerald-600">${price}</span></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <ProductFlipCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
          {filtered.length === 0 && <div className="col-span-full text-center text-gray-400">No products found in this price range.</div>}
        </div>
      </div>
    </div>
  );
};

export { demoProducts };
export default CategoryWearableTech; 