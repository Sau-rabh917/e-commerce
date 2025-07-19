import React, { useState } from "react";
import CategorySidebar from "./category-sidebar";

const demoProducts = [
  { id: 1, name: "Smartphone X1", price: 699, desc: "Flagship, fast, beautiful display.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Budget Phone Lite", price: 199, desc: "Affordable, reliable, long battery.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Camera Phone Pro", price: 499, desc: "Best camera, night mode.", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Gaming Phone Max", price: 599, desc: "High refresh rate, big battery.", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Foldable Phone", price: 999, desc: "Innovative, flexible display.", img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Mini Smartphone", price: 299, desc: "Compact, easy to use.", img: "https://images.unsplash.com/photo-1512446733611-9099a758e63c?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "5G Power Phone", price: 799, desc: "Super fast 5G, big screen.", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Rugged Phone", price: 399, desc: "Shockproof, waterproof, tough.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
];

const minPrice = Math.min(...demoProducts.map(p => p.price));
const maxPrice = Math.max(...demoProducts.map(p => p.price));

const CategoryMobile = () => {
  const [price, setPrice] = useState(maxPrice);
  const [success, setSuccess] = useState("");
  const [wishlistSuccess, setWishlistSuccess] = useState("");
  const [flipped, setFlipped] = useState({});
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-left">Mobile</h1>
        <p className="text-gray-600 mb-6 text-left">All mobile phones and related products will be shown here.</p>
        {success && <div className="text-green-600 text-center mb-2">{success}</div>}
        {wishlistSuccess && <div className="text-blue-600 text-center mb-2">{wishlistSuccess}</div>}
        <div className="mb-4 text-sm text-gray-500">Showing products up to <span className="font-semibold text-emerald-600">${price}</span></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div
              key={product.id}
              className="relative w-full max-w-xs mx-auto min-h-[340px]"
              style={{ perspective: 1000 }}
              onMouseEnter={() => setFlipped(f => ({ ...f, [product.id]: true }))}
              onMouseLeave={() => setFlipped(f => ({ ...f, [product.id]: false }))}
            >
              <div
                className="w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped[product.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full flex flex-col items-center bg-white rounded-2xl shadow p-4"
                  style={{ backfaceVisibility: 'hidden', zIndex: 2 }}
                >
                  <img src={product.img} alt={product.name} className="w-40 h-40 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <div className="font-semibold text-lg mb-2 text-center">{product.name}</div>
                  <div className="text-emerald-600 font-bold mb-2 text-lg">${product.price}</div>
                </div>
                {/* Back Side */}
                <div
                  className="absolute w-full h-full flex flex-col items-center bg-emerald-50 rounded-2xl shadow p-4"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', zIndex: 3 }}
                >
                  <div className="font-semibold text-lg mb-2 text-center">{product.name}</div>
                  <div className="text-emerald-600 font-bold mb-2 text-lg">${product.price}</div>
                  <div className="text-gray-700 text-center mb-4">{product.desc}</div>
                  <button className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded text-base font-semibold mb-2" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-base font-semibold" onClick={() => handleAddToWishlist(product)}>Add to Wishlist</button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="col-span-full text-center text-gray-400">No products found in this price range.</div>}
        </div>
      </div>
    </div>
  );
};

export { demoProducts };
export default CategoryMobile; 