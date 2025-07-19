import React, { useState } from "react";
import CategorySidebar from "./category-sidebar";
import ProductFlipCard from "./ProductFlipCard";

const demoProducts = [
  { id: 1, name: "4K Drone Pro", price: 499, desc: "Stabilized 4K video, 30min flight.", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Action Camera X", price: 199, desc: "Waterproof, 4K, slow-mo.", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Mini Drone SE", price: 129, desc: "Palm-sized, easy to fly.", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "DSLR Camera Pro", price: 899, desc: "24MP, WiFi, fast autofocus.", img: "https://images.unsplash.com/photo-1512446733611-9099a758e63c?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "360° Camera", price: 299, desc: "Capture everything around you.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Drone FPV Kit", price: 349, desc: "First-person view, racing fun.", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Mirrorless Camera S", price: 799, desc: "Lightweight, 4K video, fast lens.", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Drone Carry Case", price: 59, desc: "Protect your drone on the go.", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
];

const minPrice = Math.min(...demoProducts.map(p => p.price));
const maxPrice = Math.max(...demoProducts.map(p => p.price));

const CategoryDronesCameras = () => {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left">Drones & Cameras</h1>
        <p className="text-gray-600 mb-6 text-left">All drones and cameras will be shown here.</p>
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
export default CategoryDronesCameras; 