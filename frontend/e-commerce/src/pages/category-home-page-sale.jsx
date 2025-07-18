import React, { useState } from "react";
import CategorySidebar from "./category-sidebar";

const demoProducts = [
  { id: 1, name: "Smartphone Lite Sale", price: 499, desc: "Discounted flagship phone.", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Wireless Earbuds Sale", price: 59, desc: "Best price, best comfort.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Laptop SaleBook", price: 799, desc: "Lightweight, powerful, on sale.", img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Bluetooth Speaker Sale", price: 39, desc: "Portable, waterproof, discounted.", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Smartwatch S2 Sale", price: 129, desc: "Track your health, save money.", img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Tablet Pro Sale", price: 349, desc: "Best for work and play, now cheaper.", img: "https://images.unsplash.com/photo-1512446733611-9099a758e63c?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Gaming Mouse Sale", price: 29, desc: "Precision and style, now on sale.", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Noise Cancelling Headphones Sale", price: 149, desc: "Block out distractions, save more.", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80" },
];

const minPrice = Math.min(...demoProducts.map(p => p.price));
const maxPrice = Math.max(...demoProducts.map(p => p.price));

export { demoProducts };

const CategoryHomePageSale = () => {
  const [price, setPrice] = useState(maxPrice);
  const filtered = demoProducts.filter(p => p.price <= price);

  return (
    <div className="flex">
      <div className="min-w-[240px]">
        <CategorySidebar price={price} setPrice={setPrice} minPrice={minPrice} maxPrice={maxPrice} />
      </div>
      <div className="flex-1 max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">Home Page Sale</h1>
        <p className="text-gray-600 mb-6 text-left">All home page sale products will be shown here.</p>
        <div className="mb-4 text-sm text-gray-500">Showing products up to <span className="font-semibold text-emerald-600">${price}</span></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow hover:shadow-2xl transition p-8 flex flex-col items-center min-h-[380px] min-w-[270px] max-w-[350px] mx-auto">
              <img src={product.img} alt={product.name} className="w-48 h-48 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-110" />
              <div className="font-semibold text-lg md:text-xl mb-2 text-center">{product.name}</div>
              <div className="text-emerald-600 font-bold mb-2 text-lg md:text-xl">${product.price}</div>
              <div className="text-sm md:text-base text-gray-500 text-center mb-4">{product.desc}</div>
              <button className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded text-base font-semibold">Add to Cart</button>
            </div>
          ))}
          {filtered.length === 0 && <div className="col-span-full text-center text-gray-400">No products found in this price range.</div>}
        </div>
      </div>
    </div>
  );
};

export default CategoryHomePageSale; 