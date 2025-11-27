import React from "react";

export default function GlobalSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 flex flex-col space-y-6">

          {/* Transparent Button */}
          <button className="bg-white border border-green-200 text-black px-6 py-2 rounded-full font-semibold w-max">
            GLOBAL OPPORTUNITIES
          </button>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Give Your Children a<br /> World-Class Future
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            We provide global access to top-tier education pathways, giving 
            students the opportunity to thrive in international learning 
            environments and build a strong foundation for their future.
          </p>

          {/* CTA Button */}
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition w-max">
            Get Started →
          </button>
        </div>

        {/* RIGHT SIDE – TWO IMAGES */}
        <div className="md:w-1/2 flex space-x-4">

          {/* Big Tall Image */}
          <img
            src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg"
            alt="Global Education"
            className="w-2/3 h-60 md:h-96 object-cover rounded-2xl shadow"
          />

          {/* Smaller Image */}
          <img
            src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg"
            alt="World Class Learning"
            className="w-1/3 h-40 md:h-96 object-cover rounded-2xl shadow"
          />

        </div>
      </div>
    </section>
  );
}
