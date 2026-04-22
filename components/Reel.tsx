"use client";

import { useState, useRef, useEffect } from "react";

interface ReelProps {
  videoUrl: string;
  videoText: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Reel({ videoUrl, videoText, isOpen, onClose }: ReelProps) {
  const [showText, setShowText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset text state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowText(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="reel-container"
      className="w-screen sm:w-[500px] h-screen flex items-center justify-center bg-black z-50 fixed top-0 left-0 sm:left-[calc(50%-250px)]"
    >
      <video
        ref={videoRef}
        id="video"
        src={videoUrl}
        className="w-full h-[90%] object-cover rounded-md"
        loop
        autoPlay
        playsInline
        controls
      ></video>
      <h1
        id="reel-close"
        onClick={onClose}
        className="absolute left-4 top-5 text-white text-5xl hover:text-[#6556cd] transition-colors cursor-pointer z-10"
      >
        ×
      </h1>
      <h1
        id="read"
        onClick={() => setShowText((prev) => !prev)}
        className="absolute top-5 right-[5%] border-[#FF4621] border-2 bg-[#FF4621] text-white text-xl p-2 font-semibold shadow-lg whitespace-nowrap text-center rounded-3xl z-10 cursor-pointer"
      >
        Read Your Message
      </h1>
      <div
        id="text-popup"
        className={`max-h-[80%] overflow-y-auto fixed left-1/2 bottom-0 w-[95%] sm:w-[400px] bg-black text-white text-2xl text-center py-4 px-2 rounded-t-2xl transition-transform duration-500 ${
          showText ? "translate-x-[-50%] translate-y-0" : "translate-x-[-50%] translate-y-full"
        }`}
      >
        {videoText}
      </div>
    </div>
  );
}
