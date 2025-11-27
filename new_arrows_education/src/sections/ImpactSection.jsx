import React from "react";

export default function ImpactSection() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="text-4xl font-semibold text-orange-500 text-center">Our impact in Numbers</div>

        {/* ====== NEW STATS CARDS ====== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-green-200 shadow-md rounded-2xl p-8 border border-gray-100">
            <h2 className="text-4xl font-bold text-green-700">45K+</h2>
            <p className="text-lg font-semibold mt-1 text-black">Students</p>
            <p className="text-gray-600 mt-3 text-sm">
              Thousands of students placed in top global institutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-200 shadow-md rounded-2xl p-8 border border-gray-100">
            <h2 className="text-4xl font-bold text-green-700">2K+</h2>
            <p className="text-lg font-semibold mt-1 text-black">Institutions</p>
            <p className="text-gray-600 mt-3 text-sm">
              Accredited by 2,500+ institutions offering direct support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-200 shadow-md rounded-2xl p-8 border border-gray-100">
            <h2 className="text-4xl font-bold text-green-700">30+</h2>
            <p className="text-lg font-semibold mt-1 text-black">Countries</p>
            <p className="text-gray-600 mt-3 text-sm">
              International presence supporting clients across the world.
            </p>
          </div>

        </div>

        {/* ====== SCHOLARSHIPS SECTION ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT IMAGE GRID */}
          <div className="relative flex flex-col gap-6">

            {/* Big image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg"
                className="w-full h-60 object-cover rounded-2xl"
                alt="scholarship"
              />

              {/* Yellow circle overlapping EXACTLY ON THE IMAGE */}
              <div className="absolute -bottom-12 right-6 bg-yellow-400 text-black w-32 h-32 rounded-full flex flex-col justify-center items-center font-bold shadow-xl">
                <span className="text-2xl">200+</span>
                <span className="text-xs mt-1">Scholarships</span>
              </div>
            </div>

            {/* Small 2 images */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <img
                src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg"
                className="h-40 object-cover rounded-xl w-full"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg"
                className="h-40 object-cover rounded-xl w-full"
                alt=""
              />
            </div>

          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center gap-6">
            
            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-md w-fit text-sm">
              SCHOLARSHIPS
            </span>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Top Scholarships to Fund Your Study Abroad Journey
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Finding the right scholarship can be hard. We've curated the best
              opportunities for Bachelor's, Master's, PhD, and Postdoc programs.
            </p>

            <button className="px-6 py-3 bg-green-600 text-white rounded-full w-fit hover:bg-green-700 transition">
              List of Best Scholarship →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
