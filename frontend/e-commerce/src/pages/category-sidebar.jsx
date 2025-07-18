import React, { useState } from "react";
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

const CategorySidebar = ({ price, setPrice, minPrice, maxPrice }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="md:hidden mb-4">
        <button
          className="p-2 rounded bg-emerald-500 text-white flex items-center"
          onClick={() => setOpen(true)}
          aria-label="Open categories menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span className="ml-2 font-semibold">Categories</span>
        </button>
        {/* Overlay and Drawer */}
        {open && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setOpen(false)}></div>
            <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4 overflow-y-auto transition-transform duration-300" style={{transform: open ? 'translateX(0)' : 'translateX(-100%)'}}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Categories</h3>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-gray-500 hover:text-black p-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <ul className="space-y-1 mb-6">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      to={cat.to}
                      className={`block py-1 px-2 rounded transition ${
                        location.pathname === cat.to
                          ? "bg-emerald-500 text-white font-bold"
                          : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <h3 className="font-semibold mb-2">Filter by</h3>
                <hr className="mb-2" />
                <div>
                  <label className="block text-sm mb-1">Price</label>
                  {setPrice ? (
                    <input type="range" min={minPrice} max={maxPrice} value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full" />
                  ) : (
                    <input type="range" min="0" max="100" className="w-full" />
                  )}
                </div>
              </div>
            </aside>
          </>
        )}
      </div>
      {/* Desktop sidebar */}
      <aside className="bg-gray-100 p-4 w-full max-w-[240px] rounded hidden md:block">
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
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Filter by</h3>
          <hr className="mb-2" />
          <div>
            <label className="block text-sm mb-1">Price</label>
            {setPrice ? (
              <input type="range" min={minPrice} max={maxPrice} value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full" />
            ) : (
              <input type="range" min="0" max="100" className="w-full" />
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default CategorySidebar; 