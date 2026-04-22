

export default function Footer() {
  const arr3 = [
    {
      icon: "ri-instagram-line text-2xl font-semibold",
      text: "My Instagram",
      href: "https://instagram.com/Tarot_reader_manjusha_mann",
    },
    {
      icon: "ri-youtube-line text-2xl font-semibold",
      text: "My YouTube",
      href: "https://youtube.com/@TarotreaderManjushaMann",
    },
    {
      icon: "ri-mail-line text-2xl font-semibold",
      text: "manjusha.mann9@gmail.com",
      href: "mailto:manjusha.mann9@gmail.com",
    },
  ];

  return (
    <footer
      id="connect"
      className="mx-auto md:w-[50%] bg-[#0B2027] text-white rounded-tr-2xl rounded-tl-2xl shadow-md p-6 mt-8"
    >
      <h2 className="text-3xl font-bold mb-3 font-mincho tracking-wide">
        Connect With Me!
      </h2>
      <div className="w-28 h-[2px] bg-[#FF4621] rounded-full mb-6"></div>

      {arr3.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-6">
          <div className="bg-orange-100 text-[#FF4621] p-3 px-4 rounded-full">
            <i className={item.icon}></i>
          </div>
          <div>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-grotesk text-xl font-semibold tracking-wide"
            >
              {item.text}
            </a>
          </div>
        </div>
      ))}

      <hr className="mt-12" />
      <h1 className="font-grotesk text-center mt-16">
        © 2025 . All rights reserved.
      </h1>
      <div className="flex items-center justify-center gap-12 mt-8 mb-8">
        {/* <Link
          href="/admin/login"
          className="font-grotesk text-base text-blue-600 underline transition"
        >
          Log In
        </Link>
        <div className="w-12 h-1"></div>
        <Link
          href="/admin/logout"
          className="font-grotesk text-base text-blue-600 underline transition"
        >
          Log Out
        </Link> */}
      </div>
    </footer>
  );
}
