import React from "react";
import imgSmall1 from "../assets/story1.jpg";
import imgSmall2 from "../assets/story2.png";
import imgLarge from "../assets/storylarge.png";

export default function OurStorySection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">

      {/* ROW: LEFT (images) + RIGHT (content) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">

        {/* LEFT SIDE — IMAGE BLOCK */}
        <div className="relative flex flex-col items-center w-full lg:w-1/2">

          {/* Two small images side by side */}
          <div className="flex space-x-4 mb-4">
            <img
              src={imgSmall1}
              className="w-48 h-48 object-cover rounded-xl"
              alt="Small"
            />
            <img
              src={imgSmall2}
              className="w-48 h-48 object-cover rounded-xl"
              alt="Small"
            />
          </div>

          {/* Large image under them */}
          <img
            src={imgLarge}
            className="w-full max-w-md h-64 object-cover rounded-xl"
            alt="Large"
          />

          {/* Floating circle centered across all 3 images */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 bg-white shadow-lg rounded-full flex flex-col items-center justify-center border-4 border-orange-500">
              <span className="text-3xl font-bold text-orange-600">8+</span>
              <p className="text-gray-700 font-medium text-center text-sm">
                Years of Experience
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE — CARDS & BUTTONS */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">

          {/* Transparent button */}
          <button className="bg-white border border-green-500 text-black px-6 py-2 rounded-full font-semibold mb-10">
            ABOUT US
          </button>

          {/* Big card */}
          <div className="bg-green-100 w-full p-8 rounded-2xl shadow-md mb-6">
            <h3 className="text-black font-bold text-xl mb-2 border-b-4 border-green-500 w-fit pb-1">
              Our Story
            </h3>
            <p className="text-gray-600">
              Over the past decade, Arrows IOT Consulting have build ourselves into a formidable force in the education consulting space. As we grew we nurtured our relationship with parents and students as well as our consultants and institutions we represent.
            </p>
          </div>

          {/* Two small cards */}
          <div className="flex flex-col md:flex-row md:space-x-6 w-full">

            <div className="bg-green-100 flex-1 p-6 rounded-2xl shadow-md mb-6 md:mb-0">
              <h3 className="text-black font-bold text-lg mb-2 border-b-4 border-green-500 w-fit pb-1">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Empowering studertunities for success.
              </p>
            </div>

            <div className=" text-black bg-green-100 flex-1 p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2 border-b-4 border-green-500 w-fit pb-1">
                Our Mission
              </h3>
              <p className="text-gray-600">
                 We are dedicated to improving education accessibility and supporting students everywhere.
              </p>
            </div>

          </div>

          {/* Learn more button */}
          <button className="mt-10 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
            Learn more →
          </button>

        </div>

      </div>

    </section>
  );
}
