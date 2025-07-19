import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import { PiMotorcycleLight } from "react-icons/pi";
import { LuPackageCheck } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";

import { LuClock3 } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const carouselImages = [
  {
    src: img1,
    headline: "Upgrade Your Workspace",
    subtext: "Discover the latest in computers and accessories.",
    button: "Shop Now",
    link: "/category/computers",
  },
  {
    src: img2,
    headline: "Capture Every Moment",
    subtext: "Top deals on cameras and drones.",
    button: "Shop Now",
    link: "/category/drones-cameras",
  },
  {
    src: img3,
    headline: "Experience True Sound",
    subtext: "Premium audio devices for every lifestyle.",
    button: "Shop Now",
    link: "/category/audio",
  },
];

// Demo items for horizontal card slider
const demoItems = [
  {
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    title: "Wireless Headphones",
    price: "$59.99",
    desc: "High quality wireless headphones with noise cancellation.",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Smart Watch",
    price: "$129.99",
    desc: "Track your fitness and notifications on the go.",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "DSLR Camera",
    price: "$499.99",
    desc: "Capture stunning photos with this DSLR camera.",
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    title: "Bluetooth Speaker",
    price: "$39.99",
    desc: "Portable speaker with deep bass and long battery life.",
  },
  {
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
    title: "Gaming Mouse",
    price: "$29.99",
    desc: "Ergonomic mouse with customizable buttons.",
  },
  {
    img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    title: "Laptop",
    price: "$899.99",
    desc: "Powerful laptop for work and play.",
  },
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    title: "VR Headset",
    price: "$199.99",
    desc: "Experience immersive virtual reality gaming and videos.",
  },
  {
    img: "https://images.unsplash.com/photo-1512446733611-9099a758e63c?auto=format&fit=crop&w=400&q=80",
    title: "Tablet",
    price: "$249.99",
    desc: "Lightweight tablet for work, play, and creativity.",
  },
  {
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80",
    title: "Smartphone",
    price: "$699.99",
    desc: "Latest-gen smartphone with stunning display and camera.",
  },
  {
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    title: "Wireless Earbuds",
    price: "$79.99",
    desc: "Compact earbuds with crystal clear sound and long battery.",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Smart Home Hub",
    price: "$59.99",
    desc: "Control your smart home devices with ease.",
  },
];

const categories = [
  { name: "Shop All", to: "/category/shop-all", img: "https://img.icons8.com/fluency/96/shop.png" },
  { name: "Computers", to: "/category/computers", img: "https://img.icons8.com/fluency/96/laptop.png" },
  { name: "Tablets", to: "/category/tablets", img: "https://img.icons8.com/fluency/96/tablet.png" },
  { name: "Drones & Cameras", to: "/category/drones-cameras", img: "https://img.icons8.com/fluency/96/drone.png" },
  { name: "Audio", to: "/category/audio", img: "https://img.icons8.com/fluency/96/headphones.png" },
  { name: "Mobile", to: "/category/mobile", img: "https://img.icons8.com/fluency/96/smartphone-tablet.png" },
  { name: "T.V & Home Cinema", to: "/category/tv-home-cinema", img: "https://img.icons8.com/fluency/96/tv.png" },
  { name: "Wearable Tech", to: "/category/wearable-tech", img: "https://img.icons8.com/fluency/96/smart-watch.png" },
  { name: "Sales", to: "/category/sales", img: "https://img.icons8.com/fluency/96/discount--v1.png" },
];

const Landing = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { src, headline, subtext, button, link } = carouselImages[current];

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden ">
        <img
          src={src}
          alt={headline}
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0  opacity-100 z-20 flex items-center">
          <div className="text-black max-w-md ml-6 md:ml-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              {headline}
            </h2>
            <p className="mb-4 md:mb-6 text-sm md:text-lg">{subtext}</p>
            <a
              href={link}
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded shadow"
            >
              {button}
            </a>
          </div>
        </div>
        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-emerald-500" : "bg-white bg-opacity-60"
              } border border-white`}
            />
          ))}
        </div>
      </div>
      {/* New horizontal images section with overlays */}
      <div className="flex flex-col md:flex-row justify-center bg-gray-100 items-center gap-4 mt-6 w-full max-w-screen-sm md:max-w-none mx-auto px-2">
        <div className="relative w-full md:w-auto p-2 md:p-5 flex-shrink-0">
          <img
            src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_883,h_527,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
            alt="Promo 1"
            className="shadow w-full h-48 md:h-auto object-cover rounded"
          />
          <div className="absolute top-1/2 left-1/2 md:left-12 md:-translate-x-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center md:items-start text-black max-w-xs w-[90%] md:w-auto">
            <h2 className="text-lg md:text-2xl font-bold mb-2 text-center md:text-left">Special Promotion 1</h2>
            <p className="mb-2 text-center md:text-left text-gray-700">Don't miss out on this exclusive deal!</p>
            <a
              href="/category/mobile"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded shadow mt-2 text-center"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="relative w-full md:w-auto p-2 md:p-5 flex-shrink-0">
          <img
            src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_883,h_527,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg"
            alt="Promo 2"
            className="shadow w-full h-48 md:h-auto object-cover rounded"
          />
          <div className="absolute top-1/2 left-1/2 md:left-12 md:-translate-x-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center md:items-start text-black max-w-xs w-[90%] md:w-auto">
            <h2 className="text-lg md:text-2xl font-bold mb-2 text-center md:text-left">Special Promotion 2</h2>
            <p className="mb-2 text-center md:text-left text-gray-700">Don't miss out on this exclusive deal!</p>
            <a
              href="/category/sales"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-2 rounded shadow mt-2 text-center"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      {/* Features section below promo images */}
      <div className="w-full bg-gray-100 py-8 flex justify-center">
        <div className="bg-white w-[98%] md:w-[95%] rounded mx-auto flex flex-col md:flex-row justify-between items-center py-8 md:py-16 px-4 md:px-20 shadow">
          {/* Curb-side pickup */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto mb-8 md:mb-0">
            <PiMotorcycleLight className="text-4xl md:text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-base md:text-lg text-center md:text-left">Curb-side<br/>pickup</div>
            </div>
          </div>
          {/* Free shipping */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto mb-8 md:mb-0">
            <LuPackageCheck className="text-4xl md:text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-base md:text-lg text-center md:text-left">Free shipping on<br/>orders over $50</div>
            </div>
          </div>
          {/* Low prices guaranteed */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto mb-8 md:mb-0">
            <CiDiscount1 className="text-4xl md:text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-base md:text-lg text-center md:text-left">Low prices<br/>guaranteed</div>
            </div>
          </div>
          {/* Available 24/7 */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto">
            <LuClock3 className="text-4xl md:text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-base md:text-lg text-center md:text-left">Available to<br/>you 24/7</div>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal scrollable cards section */}
      <div className="relative max-w-7xl    mx-auto mt-10 px-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-bold">Featured Products</h2>
        </div>
        <div className="relative">
          {/* Left arrow button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg z-10"
            onClick={() => {
              const row = document.getElementById('product-scroll-row');
              if (row) {
                if (row.scrollLeft <= 0) {
                  // Loop to end
                  row.scrollLeft = row.scrollWidth;
                } else {
                  row.scrollLeft -= 250;
                }
              }
            }}
            aria-label="Scroll left"
          >
            <FaArrowRight className="rotate-180" />
          </button>
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 pr-10"
            style={{ scrollBehavior: 'smooth' }}
            id="product-scroll-row"
          >
            {demoItems.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[220px] max-w-[220px] bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex-shrink-0 flex flex-col items-center group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded mb-3 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="font-semibold text-base mb-1 text-center">{item.title}</div>
                <div className="text-emerald-600 font-bold mb-1">{item.price}</div>
                <div className="text-xs text-gray-500 text-center mb-2">{item.desc}</div>
                <button className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded text-sm">Add to Cart</button>
              </div>
            ))}
          </div>
          {/* Right arrow button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg z-10"
            onClick={() => {
              const row = document.getElementById('product-scroll-row');
              if (row) {
                const maxScroll = row.scrollWidth - row.clientWidth;
                if (row.scrollLeft >= maxScroll - 5) {
                  // Loop to start
                  row.scrollLeft = 0;
                } else {
                  row.scrollLeft += 250;
                }
              }
            }}
            aria-label="Scroll right"
          >
            <FaArrowRight />
          </button>
        </div>
        {/* View All button */}
        <div className="flex justify-center mt-4">
          <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded shadow text-base transition">View All</a>
        </div>
      </div>
      {/* Shop by Category section */}
      <div className="max-w-7xl mx-auto mt-12 px-2">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={cat.name}
              to={cat.to}
              className="flex flex-col items-center group"
              style={{ width: 240 }}
            >
              <div
                className={`w-60 h-60 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                  cat.name === 'Sales' || cat.name === 'Sale'
                    ? 'bg-[#7c3aed]'
                    : 'bg-gray-100 group-hover:bg-emerald-50'
                }`}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className={`object-contain ${cat.name === 'Sales' || cat.name === 'Sale' ? 'filter brightness-0 invert' : ''}`}
                  style={{ width: 120, height: 120 }}
                />
              </div>
              <span className="mt-1 font-bold text-lg text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
