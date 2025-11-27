// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                        <span className="text-2xl font-bold text-black">
                            ARROWS <span className="text-sm ml-1">EDUCATION</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 font-medium">
                        <Link to="/" className="hover:text-gray-600 text-black">Home</Link>
                        <Link to="/aboutPage" className="hover:text-gray-600 text-black">About</Link>
                        <Link to="/HowitWorks" className="hover:text-gray-600 text-black">How It Works</Link>
                        <Link to="/ContactPage" className="hover:text-gray-600 text-black">Contact</Link>
                        <Link to="/Blog" className="hover:text-gray-600 text-black">Blog</Link>
                    </nav>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-white rounded px-4 py-2 border border-black text-black hover:bg-gray-100">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl text-black bg-white rounded p-2"
                        onClick={() => setOpen(true)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Side Menu Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Mobile Side Menu Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform 
                transition-transform duration-300 md:hidden
                ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    className="text-2xl mb-6 bg-white rounded p-2 text-black"
                    onClick={() => setOpen(false)}
                >
                    ✕
                </button>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-5 font-medium text-lg">
                    <Link onClick={() => setOpen(false)} to="/" className="text-black">Home</Link>
                    <Link onClick={() => setOpen(false)} to="/aboutPage" className="text-black">About</Link>
                    <Link onClick={() => setOpen(false)} to="/HowitWorks" className="text-black">How It Works</Link>
                    <Link onClick={() => setOpen(false)} to="/ContactPage" className="text-black">Contact</Link>
                    <Link onClick={() => setOpen(false)} to="/Blog" className="text-black">Blog</Link>
                </nav>

                {/* Mobile Auth */}
                <div className="mt-8 flex flex-col space-y-4">
                    <button className="bg-white rounded px-4 py-2 border border-black text-black hover:bg-gray-100">
                        Login
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
}
