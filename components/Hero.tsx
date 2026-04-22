"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenReel: () => void;
}

export default function Hero({ onOpenReel }: HeroProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-10 font-grotesk">
      <h1
        id="hero"
        onClick={onOpenReel}
        className="mb-6 cursor-pointer text-center font-extrabold text-3xl tracking-tight font-grotesk text-red-600 uppercase animate-[pulseFast_1s_infinite]"
      >
        Today's Reading is Live!
      </h1>
      <h5 className="text-sm text-center p-1 font-semibold tracking-wide px-4 bg-opacity-50 h-fit w-fit bg-red-200 rounded-2xl text-[#CA5310]">
        Poet • Writer • Author • Social Scientist
      </h5>
      <h1 className="text-center text-5xl font-mincho mt-4 mb-10 font-semibold">
        Manjusha <span className="text-orange-600">Mann</span>
      </h1>
      <h4 className="text-black text-center text-2xl">
        Certified Tarot Master, Tarot <br /> Reader & Healer, Tarot Spell Master,
        Numerologist, Reiki Healer
      </h4>

      <div className="h-[22rem] w-[80%] md:w-[30vw] rounded-lg mt-4">
        <Image
          src="/images/image.webp"
          alt="Manjusha Mann"
          width={400}
          height={400}
          className="w-full h-full object-cover object-top rounded-xl"
          priority
        />
      </div>
      <Link
        href="#readings"
        className="bg-[#FF4621] text-white mt-4 text-2xl p-3 font-semibold tracking-wide text-center shadow-lg h-fit w-[78%] rounded-3xl md:w-[25vw]"
      >
        Explore Your Destiny
      </Link>
      <Link
        href="#connect"
        className="border-[#FF4621] border-2 text-[#FF4621] mt-4 text-2xl p-3 font-semibold tracking-wide shadow-lg text-center h-fit w-[78%] rounded-3xl md:w-[25vw]"
      >
        Follow The Stars
      </Link>
    </div>
  );
}
