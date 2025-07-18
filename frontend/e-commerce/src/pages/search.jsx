import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

// Import all demoProducts from all category pages
import { demoProducts as audioProducts } from "./category-audio";
import { demoProducts as bestSellersProducts } from "./category-best-sellers";
import { demoProducts as computersProducts } from "./category-computers";
import { demoProducts as dronesCamerasProducts } from "./category-drones-cameras";
import { demoProducts as headphonesProducts } from "./category-headphones";
import { demoProducts as homePageBestSellersProducts } from "./category-home-page-best-sellers";
import { demoProducts as homePageSaleProducts } from "./category-home-page-sale";
import { demoProducts as mobileProducts } from "./category-mobile";
import { demoProducts as salesProducts } from "./category-sales";
import { demoProducts as shopAllProducts } from "./category-shop-all";
import { demoProducts as speakersProducts } from "./category-speakers";
import { demoProducts as tabletsProducts } from "./category-tablets";
import { demoProducts as tvHomeCinemaProducts } from "./category-tv-home-cinema";
import { demoProducts as wearableTechProducts } from "./category-wearable-tech";

// Aggregate all products (remove duplicates by id)
const allProducts = [
  ...audioProducts,
  ...bestSellersProducts,
  ...computersProducts,
  ...dronesCamerasProducts,
  ...headphonesProducts,
  ...homePageBestSellersProducts,
  ...homePageSaleProducts,
  ...mobileProducts,
  ...salesProducts,
  ...shopAllProducts,
  ...speakersProducts,
  ...tabletsProducts,
  ...tvHomeCinemaProducts,
  ...wearableTechProducts,
].filter((item, index, arr) => arr.findIndex(p => p.name === item.name && p.price === item.price) === index);

const Search = () => {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-4 pb-16">
      <div className="w-full max-w-xl flex flex-col items-center mt-16 mb-8">
        <IoSearchOutline className="text-6xl text-emerald-400 mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">Search Products</h1>
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-gray-50 mb-6 text-lg"
          placeholder="Search for products..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        {query.trim() ? (
          filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filtered.map(product => (
                <div key={product.name + product.price} className="bg-white rounded-2xl shadow hover:shadow-2xl transition p-8 flex flex-col items-center min-h-[380px] min-w-[270px] max-w-[350px] mx-auto">
                  <img src={product.img} alt={product.name} className="w-48 h-48 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-110" />
                  <div className="font-semibold text-lg md:text-xl mb-2 text-center">{product.name}</div>
                  <div className="text-emerald-600 font-bold mb-2 text-lg md:text-xl">${product.price}</div>
                  <div className="text-sm md:text-base text-gray-500 text-center mb-4">{product.desc}</div>
                  <button className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded text-base font-semibold">Add to Cart</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 text-lg mt-8">No products found.</div>
          )
        ) : (
          <div className="text-center text-gray-400 text-lg mt-8">Type to search for products. Search results will appear here.</div>
        )}
      </div>
    </div>
  );
};

export default Search; 