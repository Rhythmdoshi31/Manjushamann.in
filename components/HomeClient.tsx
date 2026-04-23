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

  const whatsappNumber = process.env.NEXT_PUBLIC_NUMBER || "9826812299";

  return (
    <>
      <Header />

      <Reel
  videoUrl={"/videos/video.mp4"}
  videoText={`आज का दिन आपके लिए नए अवसरों और समृद्धि का प्रतीक है। आज आपको वित्तीय लाभ या नई व्यावसायिक संभावनाएं मिल सकती हैं। यह समय किसी नए प्रोजेक्ट की शुरुआत करने या नए निवेश में कदम रखने का है।

आपकी मेहनत और प्रयासों का फल मिलने का समय आ गया है। यदि आप किसी वित्तीय योजना पर काम कर रहे हैं, तो आज उसे आगे बढ़ाने का सही समय है। आपके पास जो संसाधन हैं, उनका सही उपयोग करने से आपको सफलता मिलेगी।

आज का दिन प्रगति और स्थिरता के लिए अनुकूल है। यदि आप किसी नई चीज़ की शुरुआत करना चाहते हैं, तो इसे लेकर उत्साहित रहें और आगे बढ़ें।

आपके विचारों में व्यावहारिकता और स्पष्टता है, जिससे आपके निर्णय मजबूत और सफल होंगे। अपने विचारों को सकारात्मक दिशा में आगे बढ़ाने के लिए दृढ़ संकल्पित रहें।

संक्षेप में, आज का दिन आपके लिए नए अवसरों के द्वार खोलने वाला है। अपने विचारों और योजनाओं को साकार करने का प्रयास करें, और सफलता आपके कदम चूमेगी।

Like ❤️ share and follow as an energy exchange. You can book a Personal`}
  isOpen={isReelOpen}
  onClose={() => setIsReelOpen(false)}
/>

      <Hero onOpenReel={() => setIsReelOpen(true)} />

      <DestinyCards />

      <Readings number={whatsappNumber} />

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
