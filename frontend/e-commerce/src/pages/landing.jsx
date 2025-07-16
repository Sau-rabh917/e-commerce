import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import { PiMotorcycleLight } from "react-icons/pi";
import { LuPackageCheck } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";

import { LuClock3 } from "react-icons/lu";


const carouselImages = [
  {
    src: img1,
    headline: "Upgrade Your Workspace",
    subtext: "Discover the latest in computers and accessories.",
    button: "Shop Now",
    link: "/computers",
  },
  {
    src: img2,
    headline: "Capture Every Moment",
    subtext: "Top deals on cameras and drones.",
    button: "Shop Now",
    link: "/drones-cameras",
  },
  {
    src: img3,
    headline: "Experience True Sound",
    subtext: "Premium audio devices for every lifestyle.",
    button: "Shop Now",
    link: "/audio",
  },
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
      <div className="flex justify-center bg-gray-100 items-center gap-4 mt-6 w-full">
        <div className="relative p-5">
          <img
            src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_883,h_527,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
            alt="Promo 1"
            className="shadow"
          />
          <div className="absolute top-1/2 left-12 -translate-y-1/2 flex flex-col items-start text-black max-w-xs">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-left">Special Promotion 1</h2>
            <p className="mb-2 text-left text-gray-700">Don't miss out on this exclusive deal!</p>
            <a
              href="/special-offers"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded shadow mt-2"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="relative p-5">
          <img
            src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_883,h_527,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg"
            alt="Promo 2"
            className="shadow"
          />
          <div className="absolute top-1/2 left-12 -translate-y-1/2 flex flex-col items-start text-black max-w-xs">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-left">Special Promotion 2</h2>
            <p className="mb-2 text-left text-gray-700">Don't miss out on this exclusive deal!</p>
            <a
              href="/special-offers"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded shadow mt-2"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      {/* Features section below promo images */}
      <div className="w-full bg-gray-100 py-8 flex justify-center">
        <div className="bg-white w-[98%] md:w-[95%] rounded mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-8 md:px-20 shadow">
          {/* Curb-side pickup */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto mb-8 md:mb-0">
            <PiMotorcycleLight className="text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-lg">Curb-side<br/>pickup</div>
            </div>
          </div>
          {/* Free shipping */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto mb-8 md:mb-0">
            <LuPackageCheck className="text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-lg">Free shipping on<br/>orders over $50</div>
            </div>
          </div>
          {/* Low prices guaranteed */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto mb-8 md:mb-0">
            <CiDiscount1 className="text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-lg">Low prices<br/>guaranteed</div>
            </div>
          </div>
          {/* Available 24/7 */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto">
            <LuClock3 className="text-5xl text-violet-500" />
            <div>
              <div className="font-bold text-lg">Available to<br/>you 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
