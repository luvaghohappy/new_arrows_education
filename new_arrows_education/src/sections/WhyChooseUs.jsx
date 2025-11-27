import React from "react";
import chooseUsImg from "../assets/story1.jpg"; 

export default function WhyChooseUsSection() {
    return (
        <section className="w-full bg-gray-50 py-20 px-6 md:px-16 bg-white">
            <div className="flex flex-col lg:flex-row items-start gap-16">

                {/* LEFT SIDE */}
                <div className="flex-1">

                    {/* Transparent Button */}
                    <button className="bg-white border border-green-500 text-green-600 px-6 py-2 rounded-full font-semibold mb-6">
                        WHY CHOOSE US
                    </button>

                    {/* Title */}
                    <h2 className="text-4xl font-bold text-black leading-tight mb-4">
                        Creating a Community<br />
                        of Life-long Learners
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 max-w-lg mb-10">
                        We empower students, institutions, and agents with tools designed to
                        create meaningful educational opportunities. Our commitment to
                        quality and service makes us a trusted partner in global education.
                    </p>

                    {/* 4 ORANGE TRANSPARENT CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">

                        {/* Card 1 */}
                        <div className="border-2 border-orange-400 bg-orange-50/30 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-orange-700">
                                ACCREDITATION
                            </h3>
                            <p className="text-gray-600">
                                We work only with certified and accredited institutions worldwide.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="border-2 border-orange-400 bg-orange-50/30 rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-orange-700">
                                CLIENT SATISFACTION
                            </h3>
                            <p className="text-gray-600">
                                Thousands of students trust our services for their study journey.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="border-2 border-orange-400 bg-orange-50/30 rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-orange-700">
                                AFFORDABLE SERVICES
                            </h3>
                            <p className="text-gray-600">
                                We offer fair and accessible pricing for all students and partners.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="border-2 border-orange-400 bg-orange-50/30 rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-orange-700">
                                GENUINE CARE & SERVICES
                            </h3>
                            <p className="text-gray-600">
                                Our team is dedicated to providing care, support, and guidance.
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE — IMAGE */}
                <div className="flex-1 w-full flex justify-center">
                    <img
                        src={chooseUsImg}
                        alt="Why Choose Us"
                        className="mt-20 w-full max-w-md h-[600px] object-cover rounded-2xl shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
}
