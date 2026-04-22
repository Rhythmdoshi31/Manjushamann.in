import type { Metadata, Viewport } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

export const viewport: Viewport = {
  themeColor: "#FF4621",
};

export const metadata: Metadata = {
  title: "Astrologer | Manjusha Mann",
  description: "Explore your destiny with Manjusha Mann — Certified Tarot Master, Spell Caster, Reiki Healer & Numerologist. Book personalized tarot readings and get clarity on life, love, and more.",
  keywords: "Tarot Reading, Astrologer, Astrology, Manjusha Mann, Tarot Reader India, Reiki Healing, Numerology, Spiritual Guidance, Tarot Card Reading, Online Tarot",
  authors: [{ name: "Manjusha Mann" }],
  robots: "index, follow",
  icons: {
    icon: "/images/logo.webp",
  },
  alternates: {
    canonical: "https://www.manjushamann.com/",
  },
  openGraph: {
    title: "Manjusha Mann | Certified Tarot Reader & Healer",
    description: "Explore your future with tarot readings, numerology and healing from Manjusha Mann.",
    url: "https://www.manjushamann.com",
    siteName: "Manjusha Mann",
    images: [
      {
        url: "https://www.manjushamann.com/images/logo.webp",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manjusha Mann | Certified Tarot Reader & Healer",
    description: "Explore your future with tarot readings, numerology and healing from Manjusha Mann.",
    images: ["https://manjushamann.com/images/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FFEDD0] min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
