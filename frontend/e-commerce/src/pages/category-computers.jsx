import React, { useState } from "react";
import CategorySidebar from "./category-sidebar";
import ProductFlipCard from "./ProductFlipCard";

const demoProducts = [
  { id: 1, name: "UltraBook Pro 15", price: 999, desc: "Sleek, powerful, and portable laptop.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Gaming Beast X1", price: 1499, desc: "High-end gaming laptop with RTX graphics.", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "OfficeMate 14", price: 699, desc: "Perfect for productivity and business.", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "StudentBook Lite", price: 499, desc: "Affordable laptop for students.", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Creator Studio 17", price: 1799, desc: "For creators and designers.", img: "https://images.unsplash.com/photo-1503602642458-5e560c06d307?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Netbook Mini", price: 299, desc: "Compact and lightweight netbook.", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Business Pro 13", price: 899, desc: "Business-class performance.", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "All-in-One PC", price: 799, desc: "Space-saving desktop solution.", img: "https://images.unsplash.com/photo-1512446733611-9099a758e63c?auto=format&fit=crop&w=400&q=80" },
];

const minPrice = Math.min(...demoProducts.map(p => p.price));
const maxPrice = Math.max(...demoProducts.map(p => p.price));

const CategoryComputers = () => {
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left">Computers</h1>
        <p className="text-gray-600 mb-6 text-left">All computers and related products will be shown here.</p>
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
export default CategoryComputers; 