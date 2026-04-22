import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[9vh] bg-[#0B2027] w-full md:w-[50vw] md:mx-auto flex items-center justify-between px-6">
      <div className="flex justify-center relative">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={48}
          height={48}
          className="object-cover h-12 w-12 mb-1"
          priority
        />
        <h5 className="text-xl font-grotesk pt-4 text-gray-100 font-semibold">
          Manjusha Mann
        </h5>
        <Image
          src="/images/cards.webp"
          alt="Cards"
          width={32}
          height={32}
          className="absolute top-0 right-[-15%] object-cover h-8 w-8"
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/admin/login"
          className="font-grotesk  text-gray-100 text-lg border-white border-[2px] rounded-2xl px-2"
        >
          Log In
        </Link>
        <Link href="#readings" className="text-gray-100 text-4xl">
          <i className="ri-menu-3-fill"></i>
        </Link>
      </div>
    </header>
  );
}
