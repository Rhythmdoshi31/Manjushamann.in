"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Reel from "@/components/Reel";
import Hero from "@/components/Hero";
import DestinyCards from "@/components/DestinyCards";
import Readings from "@/components/Readings";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

interface HomeClientProps {
  videoUrl: string;
  videoText: string;
}

export default function HomeClient({ videoUrl, videoText }: HomeClientProps) {
  const [isReelOpen, setIsReelOpen] = useState(false);

  useEffect(() => {
    fetch("/api/visits/track", { method: "POST" }).catch(console.error);
  }, []);

  // WhatsApp number
  const dummyNumber = "1234567890"; 

  return (
    <>
      <Header />
      
      <Reel
        videoUrl={videoUrl}
        videoText={videoText}
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />

      <Hero onOpenReel={() => setIsReelOpen(true)} />

      <DestinyCards />

      <Readings number={dummyNumber} />

      <Reviews />

      <Footer />

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Manjusha Mann",
            jobTitle: "Tarot Reader & Healer",
            url: "https://manjushamann.com",
            sameAs: [
              "https://instagram.com/Tarot_reader_manjusha_mann",
              "https://youtube.com/@TarotreaderManjushaMann",
            ],
          }),
        }}
      />
    </>
  );
}
