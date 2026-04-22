import Image from "next/image";

interface ReadingsProps {
  number: string;
}

export default function Readings({ number }: ReadingsProps) {
  const arr2 = [
    { src: "/images/p1.webp", heading: "1 Yes/No Question", price: "51" },
    { src: "/images/p2.webp", heading: "3 Yes/No Question", price: "121" },
    { src: "/images/p3.webp", heading: "1 Question", price: "101" },
    { src: "/images/p4.webp", heading: "3 Question", price: "201" },
    { src: "/images/p5.webp", heading: "15 Min Reading", price: "151" },
    { src: "/images/p6.webp", heading: "30 Min Reading", price: "251" },
    { src: "/images/p7.webp", heading: "60 Min Reading", price: "501" },
  ];

  return (
    <section
      id="readings"
      className="h-full w-full flex flex-col justify-center items-center mt-14 mb-4 px-2 md:w-[40%] md:mx-auto"
    >
      <h1 className="text-4xl font-semibold text-center font-mincho">
        Featured Readings
      </h1>
      <div className="mt-2 mb-8 bg-[#FF4621] h-[4px] w-[50%]"></div>

      {arr2.map((card, index) => (
        <div
          key={index}
          className="w-[90vw] h-[36vh] bg-white rounded-lg mb-8 overflow-hidden shadow-lg md:w-[36vw] md:h-[52vh]"
        >
          <div className="relative h-[70%] w-full bg-red-600 rounded-lg">
            <Image
              src={card.src}
              alt={card.heading}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-[30%] rounded-lg pl-3 pr-5 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold text-grotesk">
                •{card.heading}
              </h1>
              <h1 className="text-xl font-semibold text-[#FF4621]">
                ₹{card.price}
              </h1>
            </div>
            <a
              href={`https://wa.me/${number}?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20the%20%22${encodeURIComponent(
                card.heading
              )}%22%20reading%20for%20%E2%82%B9${card.price}.%0A%0A[ Please%20wait%20until%20the%20astrologer%20responds. ]`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 p-2 px-3 bg-green-600 text-lg text-white rounded-3xl"
            >
              <i className="ri-whatsapp-line"></i>
              <h1>Book Now</h1>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
