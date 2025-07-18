import React from "react";
import { Link, useLocation } from "react-router-dom";

const categories = [
  { name: "All Products", to: "/category/shop-all" },
  { name: "Best Sellers", to: "/category/best-sellers" },
  { name: "Computers", to: "/category/computers" },
  { name: "Drones & Cameras", to: "/category/drones-cameras" },
  { name: "Headphones", to: "/category/headphones" },
  { name: "Home Page Best Sellers", to: "/category/home-page-best-sellers" },
  { name: "Home Page Sale", to: "/category/home-page-sale" },
  { name: "Mobile", to: "/category/mobile" },
  { name: "Sale", to: "/category/sales" },
  { name: "Speakers", to: "/category/speakers" },
  { name: "Tablets", to: "/category/tablets" },
  { name: "TV & Home Cinema", to: "/category/tv-home-cinema" },
  { name: "Wearable Tech", to: "/category/wearable-tech" },
];

const CategorySidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-gray-100 p-4 w-full max-w-[240px] border-r border-gray-200 h-full">
      <div>
        <h3 className="font-semibold mb-2">Browse by</h3>
        <hr className="mb-2" />
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                to={cat.to}
                className={`block py-0.5 px-1 transition ${
                  location.pathname === cat.to
                    ? "font-bold text-black"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2">Filter by</h3>
        <hr className="mb-2" />
        <div>
          <label className="block text-sm mb-1">Price</label>
          <input type="range" min="0" max="100" className="w-full" />
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar; 