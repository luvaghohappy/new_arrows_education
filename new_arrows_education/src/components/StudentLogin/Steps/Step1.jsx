import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import logoImage from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Step1() {

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-md p-10 relative">

                {/* Main Card */}
                <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg p-10 relative">

                    {/* Top AppBar Row */}
                    <div className="w-full flex justify-center relative mb-4">

                        {/* Left: Logo */}
                        <img
                            src={logoImage}
                            alt="Logo"
                            className="w-14 h-14 object-contain absolute left-0"
                        />

                        {/* Center: Title */}
                        <h2 className="text-center text-sm text-gray-600">
                            Set up student account
                        </h2>

                        {/* Right: Help */}
                        <div className="bg-white border border-gray-300 rounded-full absolute right-0 text-sm text-gray-600 flex items-center gap-1 cursor-pointer px-3 py-1">
                        <span>Help</span>
                        <span>🛈</span>
                    </div>
                    </div>
                </div>


                {/* Title + Icon */}
                <div className="text-center mt-4">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                        alt="student icon"
                        className="w-16 h-16 mx-auto mb-4"
                    />
                    <h1 className="text-black text-lg font-semibold">Complete Your Student Profile</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Help us find the perfect programs for your educational journey
                    </p>
                    <button className="bg-white text-black mt-5 px-5 py-2 border border-gray-300 rounded-full text-sm flex items-center gap-2 mx-auto hover:bg-green-300">
                        Skip to Dashboard →
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 w-full">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <span>Profile Completion</span>
                        <span>0%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "0%" }}></div>
                    </div>
                    <div className="flex justify-between mt-5 text-center text-gray-500 text-xs">
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-100 mx-auto mb-1 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                            Personal Info
                        </div>
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-100 mx-auto mb-1 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                            Academic Background
                        </div>
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-100 mx-auto mb-1 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                            Study Preferences
                        </div>
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-100 mx-auto mb-1 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                            Documents
                        </div>
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-100 mx-auto mb-1 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                            Review
                        </div>
                    </div>
                </div>

                {/* Personal Info Title */}
                <h2 className="mt-10 mb-3 font-semibold text-sm">Personal Info</h2>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Date of Birth */}
                    <div>
                        <label className="text-xs text-black">Date of Birth</label>
                        <input
                            type="date"
                            className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm"
                        />
                    </div>

                    {/* Nationality */}
                    <div>
                        <label className="text-xs text-black">Nationality</label>
                        <select className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm">
                            <option>Select your nationality</option>
                        </select>
                    </div>

                    {/* State */}
                    <div>
                        <label className="text-xs text-black">State</label>
                        <select className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm">
                            <option>Select your state</option>
                        </select>
                    </div>

                    {/* City */}
                    <div>
                        <label className="text-xs text-black">City</label>
                        <select className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm">
                            <option>Select your city</option>
                        </select>
                    </div>

                    {/* Address full width */}
                    <div className="md:col-span-2">
                        <label className="text-xs text-black">Address</label>
                        <input
                            type="text"
                            placeholder="e.g No.1 abc street"
                            className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm"
                        />
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div className="flex justify-between mt-10">
                    <Link to="/student/get-started">
                        <button className="bg-white flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
                            <ChevronLeft size={18} /> Go Back
                        </button>
                    </Link>

                    <Link to="/student/step2">
                        <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                            Next <ChevronRight size={18} />
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}
