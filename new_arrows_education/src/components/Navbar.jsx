// File: src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="ArrowsEdu Logo" className="h-10 w-10 mr-2" />
                        <span className="text-2xl font-bold text-black">
                            ARROWS<span className="text-sm text-black ml-1">EDUCATION</span>
                        </span>
                    </div>


                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-6 text-black font-medium">
                        <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
                        <Link to="/aboutPage" className="hover:text-gray-600 transition-colors">About</Link>
                        <Link to="/HowitWorks" className="hover:text-gray-600 transition-colors">How It Works</Link>
                        <Link to="/ContactPage" className="hover:text-gray-600 transition-colors">Contact</Link>
                        <Link to="/Blog" className="hover:text-gray-600 transition-colors">Blog</Link>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 font-medium text-black border border-black bg-white hover:bg-gray-100 transition-colors">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800 transition-colors">
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}
