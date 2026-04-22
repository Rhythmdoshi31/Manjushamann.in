"use client";

import { useState } from "react";
import Image from "next/image";

const cards = ["/images/card1.webp", "/images/card2.webp", "/images/card3.webp"];

export default function DestinyCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="destiny"
      className="relative w-[75%] mx-auto overflow-hidden rounded-xl shadow-lg mt-20 md:w-[30vw] md:h-[50vh]"
    >
      {/* Cards Wrapper */}
      <div
        id="cards"
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ width: "300%", transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-1/3 h-[50vh] flex-shrink-0 relative bg-gray-200">
            <Image
              src={card}
              alt={`Card ${index + 1}`}
              fill
              className="absolute inset-0 w-full h-full object-cover object-bottom rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        id="prev"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 p-1 text-white px-2 rounded-full text-2xl"
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <button
        id="next"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 p-1 text-white px-2 rounded-full text-2xl"
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot w-3 h-3 rounded-full transition duration-200 ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
