// File: src/sections/Hero.jsx
import React from "react";
import heroImg from "../assets/heroImage.jpg";

export default function Hero() {
  return (
    <section className="w-full bg-white pt-20 pb-32">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1">
          <p className="text-orange-500 font-semibold tracking-wide uppercase mb-3">
            AI-Powered Student Recruitment Platform
          </p>

          <h1 className="text-black text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Simplify Your Journey<br />To Study Abroad
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            Connect with top universities worldwide through our AI-driven platform.
            Streamline applications, get personalized matches, and make your study
            abroad dreams a reality.
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
            Get Started →
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative flex-1">
          <img
            src={heroImg}
            alt="Students"
            className="rounded-xl shadow-xl w-full object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute -bottom-8 left-10 bg-white shadow-xl rounded-xl p-4 flex items-center gap-6 w-[260px]">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" className="w-10 h-10 rounded-full border" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-10 h-10 rounded-full border" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-10 h-10 rounded-full border" />
              <img src="https://i.pravatar.cc/40?img=4" className="w-10 h-10 rounded-full border" />
            </div>

            <div>
              <p className="font-semibold text-gray-800">45K+ Students</p>
              <p className="text-yellow-500 text-sm">★★★★★ 5.0</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
