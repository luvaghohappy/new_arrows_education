
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/aboutPage";
import HowItWorks from "./pages/HowItWorksPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/HowitWorks" element={<HowItWorks />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        {/* More pages will be added later */}
      </Routes>
    </Router>
  );
}
