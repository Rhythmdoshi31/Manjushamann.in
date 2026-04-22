"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      text: "Thank you so much ma'am for your insightful tarot reading... Your guidance came at a time when i truly needed it and has brought me much clarity.. I'm already seeing positive changes in my life thanks to your suggestions. Grateful for you wisdom and kindness..",
      name: "Divya Mudaliar",
      location: "Rawan",
      image: "/images/reviewer.webp",
    },
    {
      text: "The reading was spot on and resonated deeply with my current situation. I highly recommend Manjusha for anyone looking for clarity.",
      name: "Rohan Sharma",
      location: "Delhi",
      image: "/images/reviewer.webp", // Assuming same image for dummy data or placeholder
    },
    {
      text: "I was amazed by the accuracy of the numerology reading. It gave me a new perspective on my career choices.",
      name: "Anita Desai",
      location: "Mumbai",
      image: "/images/reviewer.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // 4 seconds matches the CSS animation duration roughly
    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="w-[90%] mx-auto text-center rounded-2xl p-6">
      <h1 className="text-4xl font-semibold text-center font-mincho">
        What Our Customers Say
      </h1>
      <div className="mt-2 mb-16 bg-[#FF4621] h-[4px] w-[50%] mx-auto"></div>

      <div
        id="okipullup"
        className="bg-[#0B2027] text-white p-6 mt-4 rounded-2xl shadow-2xl relative md:w-[50%] mx-auto"
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#FF4621] rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-bold">
          <i className="ri-double-quotes-l"></i>
        </div>

        <div className="mt-4 text-yellow-400 flex justify-center space-x-1 text-lg">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>

        <p
          id="reviewText"
          key={`text-${currentIndex}`} // key forces re-render for animation
          className="italic text-center text-xl tracking-wide font-mincho mt-4 fade-in-out"
        >
          {currentReview.text}
        </p>

        <div className="flex flex-col items-center mt-6">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              id="reviewerImg"
              key={`img-${currentIndex}`}
              src={currentReview.image}
              alt={currentReview.name}
              width={48}
              height={48}
              className="w-full h-full object-cover fade-in-out"
            />
          </div>
          <p
            id="reviewerName"
            key={`name-${currentIndex}`}
            className="font-bold mt-2 font-grotesk text-lg fade-in-out"
          >
            {currentReview.name}
          </p>
          <p
            key={`loc-${currentIndex}`}
            className="text-[#FF4621] text-sm fade-in-out"
          >
            Loyal Customer • <span id="loc">{currentReview.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
