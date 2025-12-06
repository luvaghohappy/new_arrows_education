import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import logoImage from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Step4() {
    const [references, setReferences] = useState([
        { firstName: "", lastName: "", email: "", relation: "" }
    ]);

    const addReference = () => {
        setReferences([
            ...references,
            { firstName: "", lastName: "", email: "", relation: "" }
        ]);
    };

    const removeReference = (index) => {
        setReferences(references.filter((_, i) => i !== index));
    };

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
                        <span>75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "75%" }}></div>
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
                            <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-1 flex items-center justify-center">
                                <Check size={14} color="white" />
                            </div>
                            Study Preferences
                        </div>
                        <div>
                            <div className="w-6 h-6 rounded-full bg-green-500 mx-auto mb-1 flex items-center justify-center">
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


                {/* Section Title */}
                <h2 className="text-xl font-semibold mb-6">Documents & References</h2>

                {/* ------------------ DOCUMENT CARDS ------------------ */}

                {/* Academic Transcript */}
                <div className="border rounded-lg p-5 mb-6">
                    <h3 className="font-semibold txt-black">Academic Transcripts</h3>
                    <p className="text-xs text-gray-500 mb-4">
                        Official transcripts from previous institutions.
                    </p>

                    <button className="txt-black px-4 py-2 bg-gray-100 border rounded-md text-sm">
                        Upload Document
                    </button>

                    <p className="text-xs text-gray-400 mt-2">
                        Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                </div>

                {/* CV / Resume */}
                <div className="border rounded-lg p-5 mb-6">
                    <h3 className="txt-black font-semibold">CV / Resume</h3>
                    <p className="text-xs text-gray-500 mb-4">Your most recent CV.</p>

                    <button className="txt-black px-4 py-2 bg-gray-100 border rounded-md text-sm">
                        Upload Document
                    </button>

                    <p className="text-xs text-gray-400 mt-2">
                        Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                </div>

                {/* Diploma / Degree */}
                <div className="border rounded-lg p-5 mb-6">
                    <h3 className="txt-black font-semibold">Diploma / Degree Certificate</h3>
                    <p className="text-xs text-gray-500 mb-4">
                        Upload your highest degree certificate.
                    </p>

                    <button className="txt-black px-4 py-2 bg-gray-100 border rounded-md text-sm">
                        Upload Document
                    </button>

                    <p className="text-xs text-gray-400 mt-2">
                        Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                </div>

                {/* ------------------ PORTFOLIO ------------------ */}
                <div className="border rounded-lg p-5 mb-8">
                    <h3 className="txt-black font-semibold">Portfolio (Optional)</h3>
                    <p className="text-xs text-gray-500 mb-4">Upload your portfolio (optional).</p>

                    <button className="txt-black px-4 py-2 bg-gray-100 border rounded-md text-sm">
                        Upload Portfolio
                    </button>

                    <p className="text-xs text-gray-400 mt-2">
                        Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                </div>

                {/* ------------------ REFERENCES ------------------ */}
                <h3 className="text-lg font-semibold mb-4">Reference Letters</h3>

                {references.map((ref, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-5 mb-6 relative bg-gray-50"
                    >
                        {/* Remove button */}
                        {index > 0 && (
                            <button
                                onClick={() => removeReference(index)}
                                className="absolute right-4 top-4 text-red-500 font-bold text-xl"
                            >
                                ×
                            </button>
                        )}

                        <p className="text-xs text-gray-500 mb-4">
                            Reference Letter {index + 1}
                        </p>

                        {/* Two per row */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                className="border p-2 rounded-md text-sm"
                                placeholder="First name"
                            />
                            <input
                                type="text"
                                className="border p-2 rounded-md text-sm"
                                placeholder="Last name"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <input
                                type="email"
                                className="border p-2 rounded-md text-sm"
                                placeholder="Reference email"
                            />

                            <select className="border p-2 rounded-md text-sm">
                                <option value="">Relationship</option>
                                <option>Teacher</option>
                                <option>Advisor</option>
                                <option>Employer</option>
                                <option>Supervisor</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                ))}

                {/* Add Reference Button */}
                <button
                    onClick={addReference}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                    + Add Reference
                </button>

                {/* Bottom Buttons */}
                <div className="flex justify-between mt-10">
                    <Link to="/student/step3">
                        <button className="bg-white flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
                            <ChevronLeft size={18} /> Go Back
                        </button>
                    </Link>
                    <Link to="/student/step5">
                        <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                            Next <ChevronRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
