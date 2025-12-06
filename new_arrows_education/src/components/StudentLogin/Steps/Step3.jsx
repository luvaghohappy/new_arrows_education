import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import logoImage from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Step3() {
    const countries = [
        "USA", "Canada", "UK",
        "Germany", "France", "Australia",
        "Japan", "China", "India"
    ];

    const programs = [
        "Computer Science", "Engineering", "Economics",
        "Law", "Medicine", "Pharmacy",
        "Nursing", "Business", "Mathematics"
    ];

    const budgetOptions = ["$5000", "$10000", "$15000", "$20000"];
    const startDates = ["Fall 2026", "Spring 2027", "Fall 2027", "Spring 2028"];

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedProgram, setSelectedProgram] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");
    const [selectedStartDate, setSelectedStartDate] = useState("");

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-md p-10 relative">

                {/* Top AppBar */}
                <div className="w-full flex justify-center relative mb-4">
                    <img src={logoImage} alt="Logo" className="w-14 h-14 object-contain absolute left-0" />
                    <h2 className="text-center text-sm text-gray-600">Set up student account</h2>
                    <div className="bg-white border border-gray-300 rounded-full absolute right-0 text-sm text-gray-600 flex items-center gap-1 cursor-pointer px-3 py-1">
                        <span>Help</span>
                        <span>🛈</span>
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
                        <span>50%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "50%" }}></div>
                    </div>
                    <div className="flex justify-between mt-5 text-center text-gray-500 text-xs">
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-1 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                            Personal Info
                        </div>
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-1 flex items-center justify-center">
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

                {/* Study Preferences */}
                <h2 className="mt-10 mb-3 font-semibold text-sm text-black">Study Preferences</h2>

                {/* Preferred Country */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2 text-black">Preferred Country</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {countries.map((country) => (
                            <label key={country} className="text-xs flex items-center gap-2 cursor-pointer text-black">
                                <input
                                    type="radio"
                                    name="country"
                                    value={country}
                                    checked={selectedCountry === country}
                                    onChange={() => setSelectedCountry(country)}
                                    className="accent-green-600"
                                />
                                <span>{country}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Preferred Program */}
                <div className="mb-6">
                    <h3 className="font-medium mb-2 text-black">Preferred Program</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {programs.map((program) => (
                            <label key={program} className="text-xs flex items-center gap-2 cursor-pointer text-black">
                                <input
                                    type="radio"
                                    name="program"
                                    value={program}
                                    checked={selectedProgram === program}
                                    onChange={() => setSelectedProgram(program)}
                                    className="accent-green-600"
                                />
                                <span>{program}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Budget and Start Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                    <div>
                        <label className="block font-medium mb-1">Budget per Year</label>
                        <select
                            value={selectedBudget}
                            onChange={(e) => setSelectedBudget(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
                        >
                            <option value="">Select Budget</option>
                            {budgetOptions.map((b) => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Preferred Start Date</label>
                        <select
                            value={selectedStartDate}
                            onChange={(e) => setSelectedStartDate(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
                        >
                            <option value="">Select Start Date</option>
                            {startDates.map((date) => (
                                <option key={date} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div className="flex justify-between mt-10">
                    <Link to="/student/step2">
                        <button className="bg-white flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
                            <ChevronLeft size={18} /> Go Back
                        </button>
                    </Link>
                    <Link to="/student/step4">
                        <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                            Next <ChevronRight size={18} />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
