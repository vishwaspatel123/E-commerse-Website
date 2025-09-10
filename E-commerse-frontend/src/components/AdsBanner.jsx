import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import all from "../assets/images/ChatGPT Image Sep 8, 2025, 01_25_52 PM.png";
import men from "../assets/images/ChatGPT Image Sep 8, 2025, 01_27_28 PM.png";
import women from "../assets/images/ChatGPT Image Sep 8, 2025, 01_28_40 PM.png";
import kids from "../assets/images/ChatGPT Image Sep 8, 2025, 01_30_43 PM.png";

const slides = [
  {
    img: all,
    link: "/Productpage",
    alt: "Ad Banner 1",
  },
  {
    img: men,
    link: "/Productpage",
    alt: "Ad Banner 2",
  },
  {
    img: women,
    link: "/Productpage",
    alt: "Ad Banner 3",
  },
  {
    img: kids,
    link: "/Productpage",
    alt: "Ad Banner 4",
  },
];

function AdsBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-0 sm:px-4 md:px-8 py-4">
      <div className="w-full h-[45vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 bg-gradient-to-r from-blue-100 via-white to-pink-100 flex items-center justify-center relative group transition-all duration-500">
        {slides.map((slide, idx) => (
          <Link
            to={slide.link}
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            } group-hover:scale-105 group-hover:shadow-2xl`}
          >
            <img
              src={
                typeof slide.img === "string" ? slide.img : slide.img.default
              }
              alt={slide.alt}
              className="object-fill object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
              style={{ minHeight: 0, minWidth: 0 }}
            />
          </Link>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 border-blue-400 shadow transition-all duration-200 ${
                current === idx
                  ? "bg-blue-500 scale-125"
                  : "bg-white hover:bg-blue-200"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdsBanner;
