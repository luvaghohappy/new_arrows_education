// File: src/sections/WhoWeServe.jsx
import React from "react";

export default function WhoWeServe() {
  return (
    <section className="w-full bg-gray-50 py-18 flex flex-col items-center">

      {/* Transparent Button */}
      <button className="border border-orange-500 text-orange-500 bg-transparent px-6 py-2 rounded-full font-medium hover:bg-orange-50 transition">
        WHO WE SERVE
      </button>

      {/* Title + Text */}
      <div className="text-center mt-6 max-w-2xl px-4">
        <h2 className="text-4xl font-bold text-black mb-4">
          Smart Solutions for Every Journey
        </h2>
        <p className="text-gray-700 text-lg">
          Whether you’re a student, agent, or institution, our AI-powered platform
          is designed to simplify your journey and drive success.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl w-full">

        {/* Card 1 */}
        {/* Card 1: Students */}
        <div className="bg-white shadow-lg rounded-2xl p-8 h-[320px] flex flex-col relative">

          {/* Profile Circle */}
          <div className="absolute -top-6 left-6 bg-green-100 w-14 h-14 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-2xl">👨‍🎓</span>
          </div>

          {/* Title */}
          <h2 className="text-black text-2xl font-semibold mt-10 mb-1">Students</h2>
          <div className="w-12 h-1 bg-green-500 rounded mb-4"></div>
          <p className="text-gray-600 mb-4 flex-grow">
            Get AI-powered university recommendations and streamlined applications
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
            Get Started →
          </button>
        </div>

        {/* Card 2: Agents */}
        <div className="bg-white shadow-lg rounded-2xl p-8 h-[320px] flex flex-col relative">

          {/* Profile Circle */}
          <div className="absolute -top-6 left-6 bg-green-100 w-14 h-14 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-2xl">🧑‍💼</span>
          </div>

          {/* Title */}
          <h2 className="text-black text-2xl font-semibold mt-10 mb-1">Agents</h2>
          <div className="w-12 h-1 bg-green-500 rounded mb-4"></div>
          <p className="text-gray-600 mb-4 flex-grow">
            Manage students and earn commission on successful placements
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
            Join as Agent →
          </button>
        </div>

        {/* Card 3: Institutions */}
        <div className="bg-white shadow-lg rounded-2xl p-8 h-[320px] flex flex-col relative">

          {/* Profile Circle */}
          <div className="absolute -top-6 left-6 bg-green-100 w-14 h-14 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-2xl">🏫</span>
          </div>

          {/* Title */}
          <h2 className="text-black text-2xl font-semibold mt-10 mb-1">Institutions</h2>
          <div className="w-12 h-1 bg-green-500 rounded mb-4"></div>
          <p className="text-gray-600 mb-4 flex-grow">
            Access qualified internationnal students and manage applications efficiently.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
            Patner with Us →
          </button>
        </div>

      </div>
    </section>
  );
}
