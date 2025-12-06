import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import "react-phone-input-2/lib/style.css";
import signupImage from "../../assets/story1.jpg";
import logoImage from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function StudentSignUp() {
    const [userType, setUserType] = useState("Student");
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const passwordRequirements = [
        { text: 'At least 8 characters', validate: (pw) => pw.length >= 8 },
        { text: 'At least 1 uppercase letter', validate: (pw) => /[A-Z]/.test(pw) },
        { text: 'At least 1 number', validate: (pw) => /[0-9]/.test(pw) },
        { text: 'At least 1 special character', validate: (pw) => /[!@#$%^&*(),.?":{}|<>]/.test(pw) }
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20">
            {/* Centered Card */}
            <div className="flex w-4/5 max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">

                {/* Left Section: Form */}
                <div className="w-1/2 p-8 flex flex-col items-center">
                    {/* Logo */}
                    <div className="self-start mb-4">
                        <img src={logoImage} alt="Logo" className="h-10 w-auto" />
                    </div>

                    {/* Title */}
                    <h1 className="text-black text-2xl font-bold text-center">Let's Get Started</h1>
                    <h1 className="text-black text-sm text-center mb-4">Please enter your details to get started</h1>

                    {/* User Type Buttons (Row on grey background) */}
                    <div className="flex w-full justify-around mb-6 bg-gray-200 rounded-lg p-2">
                        {["Student", "Agent", "Institution"].map((type) => (
                            <button
                                key={type}
                                className={`flex-1 py-2 mx-1 rounded-lg text-sm font-semibold transition
                  ${userType === type ? "bg-white text-black" : "bg-white text-gray-700"}
                `}
                                onClick={() => setUserType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>

                    {/* Social Login */}
                    <div className="flex flex-col gap-2 w-full mb-4">
                        <button className="w-full py-2 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg text-sm">
                            <FaGoogle /> Google
                        </button>
                        <button className="w-full py-2 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg text-sm">
                            <FaFacebook /> Facebook
                        </button>
                        <button className="w-full py-2 flex items-center justify-center gap-2 bg-black text-white rounded-lg text-sm">
                            <FaApple /> Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="w-full text-2xl text-center text-gray-500 my-2 mb-4">or </div>

                    {/* Full Form */}
                    <form className="flex flex-col gap-3 w-full">
                        {/* Full Name */}
                        <label htmlFor="fullName" className="text-black text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Full Name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm"
                            required
                        />

                        {/* Phone */}
                        <label htmlFor="phone" className="text-white text-sm font-medium">
                            Phone Number
                        </label>
                        <PhoneInput
                            international
                            defaultCountry="RW" // Rwanda
                            value={phone}
                            onChange={setPhone}
                            id="phone"
                            className="w-full px-3 py-2 border rounded-lg text-black text-sm"
                        />
                        {phone && !isValidPhoneNumber(phone) && (
                            <span className="text-red-500 text-xs">Invalid phone number</span>
                        )}

                        {/* Email */}
                        <label htmlFor="email" className="text-black text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm"
                            required
                        />

                        {/* Password */}
                        <label htmlFor="password" className="text-black text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg bg-white text-black text-sm"
                            required
                        />
                        {/* Password Requirements */}
                        <div className="password-requirements grid grid-cols-2 gap-2 mt-2 text-black text-sm">
                            {passwordRequirements.map((req, index) => {
                                const isValid = req.validate(password); // password = current state
                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        {isValid ? (
                                            <FaCheckCircle className="text-green-500" />
                                        ) : (
                                            <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                                        )}
                                        <span>{req.text}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Terms */}
                        <div className="flex items-center text-xs text-gray-700">
                            <input type="checkbox" className="mr-2" required />
                            <span>
                                By registering, you accept our <a className="text-green-500">Privacy Policy</a> and{" "}
                                <a className="text-green-500">Terms</a>.
                            </span>
                        </div>

                        {/* Register Button */}
                        <button
                            type="button"
                            onClick={() => navigate("/student/get-started")}
                            className="w-full py-2 bg-green-500 text-white rounded-lg text-sm mt-2"
                        >
                            Register
                        </button>

                        {/* Login Button */}
                        <button
                            type="button"
                            className="w-full py-2 mt-2 border border-black text-green-500 bg-white rounded-lg text-sm"
                        >
                            Already Registered? Login
                        </button>
                    </form>
                    {/* Bottom Buttons */}
                    <div className="self-start flex justify-between mt-10">
                        <Link to="/">
                            <button className="bg-white flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg">
                                <ChevronLeft size={18} /> Back
                            </button>
                        </Link>

                    </div>
                </div>

                {/* Right Section: Image + Transparent Card */}
                <div className="w-1/2 relative">
                    <img
                        src={signupImage}
                        alt="Signup"
                        className="w-full h-full object-cover rounded-tl-[50px] rounded-bl-[50px]"
                    />
                    <div className="absolute bottom-6 left-6 bg-white bg-opacity-70 p-4 rounded-lg max-w-xs text-sm">
                        <h2 className="text-lg font-bold">Shape your Future with Arrows Education</h2>
                        <p className="mt-1 text-gray-700 text-sm">Get expert guidance to access top universities</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
