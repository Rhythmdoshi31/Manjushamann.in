"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [todaysVisits, setTodaysVisits] = useState(0);
  const [yesterdaysVisits, setYesterdaysVisits] = useState(0);

  useEffect(() => {
    fetch("/api/visits")
      .then(res => res.json())
      .then(data => {
        setTodaysVisits(data.today);
        setYesterdaysVisits(data.yesterday);
      })
      .catch(console.error);
  }, []);

  const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Upload successful!");
        window.location.href = "/";
      } else {
        const data = await response.json();
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      alert("An error occurred during upload");
    }
  };

  return (
    <div className="bg-[#FFEDD0] min-h-screen">
      <header className="h-[9vh] bg-[#0B2027] w-full md:w-[50vw] md:mx-auto flex items-center justify-between px-6">
        <div className="flex justify-center">
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={48}
            height={48}
            className="object-cover h-12 w-12 mb-1"
          />
          <h5 className="text-xl font-grotesk pt-3 text-gray-100 font-semibold">
            Manjusha Mann
          </h5>
        </div>
        <div>
          <Link href="/" className="text-gray-100 text-4xl">
            <i className="ri-menu-3-fill"></i>
          </Link>
        </div>
      </header>

      <h1 className="text-3xl font-semibold mt-8 text-center underline">
        Admin Dashboard
      </h1>

      <div className="flex items-center justify-center px-12 py-8">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleUpload}>
            {/* Video Upload Section */}
            <div className="mb-5">
              <label
                htmlFor="video"
                className="mb-3 block text-2xl font-medium text-[#07074D]"
              >
                Upload Video
              </label>
              <input
                type="file"
                name="video"
                id="video"
                accept="video/*"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* Text Input Section */}
            <div className="mb-5">
              <label
                htmlFor="text"
                className="mb-3 block text-2xl font-medium text-[#07074D]"
              >
                Write Text Here
              </label>
              <textarea
                name="text"
                id="text"
                placeholder="Enter a longer text here"
                rows={6}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Upload
              </button>
            </div>
          </form>

          <div className="w-[40vw] mt-4 py-4 px-5 border-2 border-black rounded-lg">
            <h1 className="text-2xl tracking-wide font-semibold mb-2">
              Today's site visits : <span className="text-red-400 font-grotesk">{todaysVisits}</span>
            </h1>
            <hr className="mb-2 bg-black" />
            <h1 className="text-2xl tracking-wide font-semibold">
              Yesterday's site visits : <span className="text-red-400 font-grotesk">{yesterdaysVisits}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
