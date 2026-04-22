"use client";

import Image from "next/image";
import { FormEvent } from "react";

export default function AdminLogin() {
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("name");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        window.location.href = "/admin/dashboard";
      } else {
        const data = await response.json();
        alert(data.error || "Login failed");
      }
    } catch (error) {
      alert("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen #FFEDD0 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="flex justify-center relative mr-5">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={48}
            height={48}
            className="object-cover h-12 w-12 mb-4"
            priority
          />
          <h5 className="text-xl font-grotesk pt-3 text-black font-semibold">
            Manjusha Mann
          </h5>
          <Image
            src="/images/cards.webp"
            alt="Cards"
            width={32}
            height={32}
            className="absolute top-[-1%] right-[15%] object-cover h-8 w-8"
          />
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-wide font-grotesk text-center underline">
          Admin Login
        </h1>
        <div className="bg-white shadow w-full rounded-xl divide-y divide-gray-200">
          <form onSubmit={handleLogin} className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              required
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              required
            />
            <button
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
