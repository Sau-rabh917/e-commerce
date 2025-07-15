import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    headline: "Upgrade Your Workspace",
    subtext: "Discover the latest in computers and accessories.",
    button: "Shop Now",
    link: "/computers"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    headline: "Capture Every Moment",
    subtext: "Top deals on cameras and drones.",
    button: "Shop Now",
    link: "/drones-cameras"
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    headline: "Experience True Sound",
    subtext: "Premium audio devices for every lifestyle.",
    button: "Shop Now",
    link: "/audio"
  }
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
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] overflow-hidden mt-2">
        <img
          src={src}
          alt={headline}
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="text-white max-w-md ml-6 md:ml-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{headline}</h2>
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
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-emerald-500' : 'bg-white bg-opacity-60'} border border-white`}
            />
          ))}
        </div>
      </div>
      <div className="p-8 text-center">Welcome to the Landing Page</div>
    </>
  );
};

export default Landing;
