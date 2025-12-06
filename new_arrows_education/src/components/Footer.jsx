// File: src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-white mt-20">

            {/* ---------------------------------------- */}
            {/* GREEN CTA BANNER WITH GRADIENT */}
            {/* ---------------------------------------- */}
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div
                    className="rounded-2xl p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 relative overflow-hidden"
                    style={{
                        background: "linear-gradient(90deg, #064e3b 0%, #ffffff 100%, #0f6b48 35%)"
                    }}
                >
                    {/* Left Text */}
                    <div className="text-white max-w-lg">
                        <h2 className="text-3xl font-bold leading-snug">
                            It’s Time To Invest <br />
                            In Your Future Through <br />
                            <span className="text-green-300">Global Education</span>
                        </h2>
                    </div>

                    {/* Right Text + Button */}
                    <div className="text-white max-w-sm">
                        <p className="mb-5 text-sm leading-relaxed">
                            Start your journey today with expert guidance and trusted international
                            connections.
                        </p>

                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2">
                            Get Started →
                        </button>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------- */}
            {/* MAIN FOOTER */}
            {/* ---------------------------------------- */}
            <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Logo + Description */}
                <div>
                    <img src={logo} alt="Arrows Logo" className="h-12 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed">
                        An enim nullam tempor sapien gravida donec porta and blandit ipsum enim justo integer velna vitae.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-5 text-gray-700">
                        <a href="#" className="hover:text-green-600 text-xl"><FaFacebookF /></a>
                        <a href="#" className="hover:text-green-600 text-xl"><FaInstagram /></a>
                        <a href="#" className="hover:text-green-600 text-xl"><FaYoutube /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li><a href="/" className="hover:text-green-600">Home</a></li>
                        <li><a href="/aboutPage" className="hover:text-green-600">About</a></li>
                        <li><a href="/HowItWorks" className="hover:text-green-600">How It Works</a></li>
                        <li><a href="/ContactPage" className="hover:text-green-600">Contact</a></li>
                        <li><a href="/Blog" className="hover:text-green-600">Blog</a></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>Payment</li>
                        <li>Admission Services</li>
                        <li>Terms and Conditions</li>
                        <li>Research Solutions & Support</li>
                    </ul>
                </div>

                {/* Scholarships */}
                <div>
                    <h3 className="font-semibold mb-4">Scholarships</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>Ghanaian Students</li>
                        <li>Nigerian Students</li>
                        <li>Bangladeshi Students</li>
                        <li>West Africa Edufair</li>
                        <li>Truth About Scholarships</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center py-6 text-sm text-gray-600 border-t">
                © 2025 Arrows Education. All rights reserved.
            </div>

        </footer>
    );
}
