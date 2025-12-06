// File: src/pages/HowItWorks.jsx
import React from "react";
import sampleImage from "../assets/heroImage.jpg";
import sampleImage2 from "../assets/story1.jpg";
import agent from "../assets/agent.jpg";
import institutions from "../assets/institut.jpg";
import { FiZap, FiShield, FiHeadphones, FiTrendingUp } from "react-icons/fi";
import Footer from "../components/Footer";


export default function HowItWorks() {
    return (
        <div className="w-full bg-white">

            {/* -------------------------------------------------- */}
            {/* SECTION 1 — HERO ROW */}
            {/* -------------------------------------------------- */}
            <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div>
                    <button className="bg-green-200 text-black px-4 py-2 rounded-full text-sm mb-4">
                        How it works
                    </button>

                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        Your journey made simple
                    </h1>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Our process helps you navigate your educational journey effortlessly
                        from profile creation to enrollment, we guide you every step of the way.
                    </p>

                    <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                        Get Started →
                    </button>
                </div>

                {/* RIGHT SIDE — IMAGE */}
                <div className="flex justify-center">
                    <img
                        src={sampleImage}
                        alt="How it works"
                        className="w-96 h-96 rounded object-cover shadow-lg"
                    />
                </div>

            </section>



            {/* -------------------------------------------------- */}
            {/* SECTION 2 — STEP BY STEP */}
            {/* -------------------------------------------------- */}
            <section className="px-6 py-20 max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm mb-4">
                        STEP BY STEP
                    </button>

                    <h2 className="text-3xl font-bold text-gray-900">
                        Simple steps to success
                    </h2>
                </div>

                {/* CONTENT ROW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={sampleImage2}
                            alt="Steps"
                            className="w-96 h-96 rounded object-cover shadow-lg"
                        />
                    </div>
                    {/* RIGHT: STUDENT STEPS */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 text-black">
                            Students
                        </h3>

                        <div className="w-20 h-1 bg-green-600 mt-2 mb-6"></div>

                        {/* CARDS */}
                        <div className="flex flex-col gap-6">

                            {/* STEP 1 */}
                            <div className="bg-white rounded-xl shadow p-6 flex gap-4">
                                <div className="w-14 h-14 bg-orange-200 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">Create your profile</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Build your personalized academic profile quickly and easily.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 2 */}
                            <div className="bg-white rounded-xl shadow p-6 flex gap-4">
                                <div className="w-14 h-14 bg-orange-200 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">AI Matching</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Our AI suggests the best institutions based on your profile.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 3 */}
                            <div className="bg-white rounded-xl shadow p-6 flex gap-4">
                                <div className="w-14 h-14 bg-orange-200 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">Apply & Upload</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Submit documents, complete forms, and track requirements.
                                    </p>
                                </div>
                            </div>

                            {/* STEP 4 */}
                            <div className="bg-white rounded-xl shadow p-6 flex gap-4">
                                <div className="w-14 h-14 bg-orange-200 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold">
                                    4
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">Track & Enroll</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Monitor your application progress until you're officially enrolled.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* BUTTON */}
                        <button className="mt-8 px-6 py-3 bg-green-800 text-white rounded-full hover:bg-green-300">
                            Get Started →
                        </button>

                    </div>
                </div>
            </section>
            {/* -------------------------------------------------- */}
            {/* SECTION 3 — AGENTS & INSTITUTIONS */}
            {/* -------------------------------------------------- */}
            <section className="px-6 py-20 max-w-7xl mx-auto">

                {/* ============================ */}
                {/* PART 1 — AGENTS (Cards Left) */}
                {/* ============================ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-28">

                    {/* LEFT — CARDS */}
                    <div>

                        <h2 className="text-3xl font-bold text-gray-900">
                            AGENTS
                        </h2>

                        <div className="w-20 h-1 bg-green-600 mt-2 mb-6"></div>

                        <div className="flex flex-col gap-6">
                            {[
                                { num: 1, title: "Register your account", text: "Sign up to access your dashboard and tools." },
                                { num: 2, title: "Upload your documents", text: "Submit certification and verification files." },
                                { num: 3, title: "Connect with institutions", text: "Get approved to recruit for top schools." },
                                { num: 4, title: "Manage students", text: "Submit applications and track performance." },
                            ].map((step, index) => (
                                <div key={index} className="bg-white rounded-xl shadow p-6 flex gap-4">
                                    <div className="w-14 h-14 bg-orange-200 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black">{step.title}</h4>
                                        <p className="text-gray-600 text-sm mt-1">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
                            Agents Login →
                        </button>
                    </div>

                    {/* RIGHT — IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={agent}
                            alt="Agents"
                            className="w-96 h-96 rounded object-cover shadow-lg"
                        />
                    </div>

                </div>



                {/* =================================== */}
                {/* PART 2 — INSTITUTIONS (Opposite)   */}
                {/* =================================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* LEFT — IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={institutions}
                            alt="Institutions"
                            className="w-96 h-96 rounded object-cover shadow-lg"
                        />
                    </div>

                    {/* RIGHT — CARDS */}
                    <div>

                        <h2 className="text-3xl font-bold text-gray-900">
                            INSTITUTIONS
                        </h2>

                        <div className="w-20 h-1 bg-green-600 mt-2 mb-6"></div>

                        <div className="flex flex-col gap-6">
                            {[
                                { num: 1, title: "Create Institution Profile", text: "Set up your campus and program details." },
                                { num: 2, title: "Approve Agents", text: "Review and verify agents before partnering." },
                                { num: 3, title: "Review Applications", text: "Accept or decline student applications easily." },
                                { num: 4, title: "Enroll Students", text: "Finalize admissions and complete onboarding." },
                            ].map((step, index) => (
                                <div key={index} className="bg-white rounded-xl shadow p-6 flex gap-4">
                                    <div className="w-14 h-14 bg-orange-200 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black">{step.title}</h4>
                                        <p className="text-gray-600 text-sm mt-1">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
                            Institutions Login →
                        </button>
                    </div>

                </div>

            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 4 — WHY CHOOSE US */}
            {/* -------------------------------------------------- */}
            <section className="px-6 py-20 max-w-7xl mx-auto text-center">

                {/* Header */}
                <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm">
                    WHY CHOOSE US
                </button>

                <h2 className="text-black text-3xl font-bold mt-4 mb-12">
                    Why Choose Arrows Education?
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Card 1 */}
                    <div className="bg-white shadow rounded-xl p-8">
                        <div className="mx-auto w-16 h-16 bg-green-300 text-white rounded-full flex items-center justify-center text-2xl">
                            <FiZap />   {/* react-icon */}
                        </div>

                        <h3 className="text-black mt-6 font-semibold text-lg ">
                            Fast Processing
                        </h3>
                        {/* Centered underline */}
                        <div className="flex justify-center mt-3 py-1">
                            <div className="w-20 h-1 bg-orange-600"></div>
                        </div>

                        <p className="text-gray-600 text-sm mt-2">
                            Our simplified platform ensures quick application review and seamless processing.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow rounded-xl p-8">
                        <div className="mx-auto w-16 h-16 bg-green-300 text-white rounded-full flex items-center justify-center text-2xl">
                            <FiShield />
                        </div>

                        <h3 className="text-black mt-6 font-semibold text-lg">
                            Secure & Verified
                        </h3>
                        {/* Centered underline */}
                        <div className="flex justify-center mt-3 py-1">
                            <div className="w-20 h-1 bg-orange-600"></div>
                        </div>


                        <p className="text-gray-600 text-sm mt-2">
                            Every document and profile is validated to maintain trust and reliability.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow rounded-xl p-8">
                        <div className="mx-auto w-16 h-16 bg-green-300 text-white rounded-full flex items-center justify-center text-2xl">
                            <FiHeadphones />
                        </div>

                        <h3 className="mt-6 font-semibold text-lg text-black">
                            24/7 Support
                        </h3>
                        {/* Centered underline */}
                        <div className="flex justify-center mt-3 py-1">
                            <div className="w-20 h-1 bg-orange-600"></div>
                        </div>


                        <p className="text-gray-600 text-sm mt-2">
                            Our support team is always available to assist students, agents, and institutions.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow rounded-xl p-8">
                        <div className="mx-auto w-16 h-16 bg-green-300 text-white rounded-full flex items-center justify-center text-2xl">
                            <FiTrendingUp />
                        </div>

                        <h3 className="mt-6 font-semibold text-lg text-black">
                            High Success Rate
                        </h3>
                        {/* Centered underline */}
                        <div className="flex justify-center mt-3 py-1">
                            <div className="w-20 h-1 bg-orange-600"></div>
                        </div>

                        <p className="text-gray-600 text-sm mt-2">
                            We help thousands secure admissions through expert guidance and global partnerships.
                        </p>
                    </div>
                </div>
            </section>
          <Footer />
        </div>
    );
}
