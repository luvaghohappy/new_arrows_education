// File: src/pages/ContactPage.jsx
import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
    return (
        <div className="w-full bg-white px-6 py-20">

            {/* ---------------------------- */}
            {/* HEADER */}
            {/* ---------------------------- */}
            <div className="text-center mb-16">
                <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm">
                    Contact Us
                </button>

                <h2 className="text-3xl font-bold text-gray-900 mt-4">
                    Send Us a Message
                </h2>
            </div>


            {/* ---------------------------- */}
            {/* 3 CONTACT CARDS */}
            {/* ---------------------------- */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

                {/* Card 1 — Contact Us */}
                <div className="bg-white shadow rounded-xl p-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl">
                        <FiPhone />
                    </div>

                    <h3 className="mt-6 font-semibold text-lg">Contact Us</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Reach our support team directly for quick assistance.
                    </p>
                </div>

                {/* Card 2 — Email Us */}
                <div className="bg-white shadow rounded-xl p-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl">
                        <FiMail />
                    </div>

                    <h3 className="mt-6 font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Send us an email anytime for inquiries or support.
                    </p>
                </div>

                {/* Card 3 — Visit Us */}
                <div className="bg-white shadow rounded-xl p-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl">
                        <FiMapPin />
                    </div>

                    <h3 className="mt-6 font-semibold text-lg">Visit Us</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Meet our team at our physical office locations.
                    </p>
                </div>

            </div>


            {/* ---------------------------- */}
            {/* CONTACT FORM CARD */}
            {/* ---------------------------- */}
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    We'd love to hear from you!
                </h3>

                <form className="flex flex-col gap-6">

                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Your Message
                        </label>
                        <textarea
                            rows="5"
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                            placeholder="Type your message..."
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition"
                    >
                        Send →
                    </button>

                </form>
            </div>

        </div>
    );
}
