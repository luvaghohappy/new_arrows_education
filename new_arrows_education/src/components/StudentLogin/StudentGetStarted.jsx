import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import graduateImage from "../../assets/graduate.jpg";
import logoImage from "../../assets/logo.png";

export default function StudentGetStarted() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-20">
            {/* CARD */}
            <div className="w-[90%] max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex">

                {/* LEFT SECTION */}
                <div className="w-1/2 p-12 flex flex-col justify-center">

                    {/* Logo */}
                    <div className="self-start mb-4">
                        <img src={logoImage} alt="Logo" className="h-10 w-auto" />
                    </div>

                    {/* Success Icon */}
                    <div className="flex justify-center mb-6">
                        <FaCheckCircle className="text-green-500 text-6xl" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center">
                        Thank you for signing up
                    </h1>

                    <p className="text-gray-500 text-center text-sm mb-10">
                        Set up your profile to get the best study recommendations.
                    </p>

                    {/* STEPS */}
                    <div className="space-y-6 mb-10">
                        <Step number="1" title="Personal Info" />
                        <Step number="2" title="Academic Background" />
                        <Step number="3" title="Study Preferences" />
                        <Step number="4" title="Upload Documents" />
                        <Step number="5" title="Review your Information" />
                    </div>

                    {/* BUTTONS */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/student/step1"
                            className="bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:bg-green-700 transition w-40 text-center"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/dashboard"
                            className="border border-gray-300 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition w-60 justify-center"
                        >
                            Skip to Dashboard →
                        </Link>
                    </div>
                    {/* Bottom Buttons */}
                    <div className="flex justify-between mt-10">
                        <Link to="/signup">
                            <button className="bg-white flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
                                <ChevronLeft size={18} /> Back
                            </button>
                        </Link>

                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="w-1/2 relative">

                    <img
                        src={graduateImage}
                        alt="Graduation"
                        className="w-full h-full object-cover rounded-l-3xl"
                    />

                    {/* Transparent Card */}
                    <div className="absolute bottom-10 left-10 bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-md">
                        <h2 className="text-xl font-semibold">
                            Shape Your Future with{" "}
                            <span className="text-green-600">Arrows Education</span>
                        </h2>

                        <p className="text-gray-700 mt-2 text-sm">
                            Get expert guidance and access to top universities worldwide.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* STEP COMPONENT */
function Step({ number, title }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-sm">
                {number}
            </div>
            <p className="text-gray-700">{title}</p>
        </div>
    );
}
