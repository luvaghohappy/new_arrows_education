// App.jsx (Simplest approach - just modify your existing code)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/aboutPage';
import HowItWorks from './pages/HowItWorksPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import StudentSignUp from './components/StudentLogin/StudentSignUp';
import StudentGetStarted from "./components/StudentLogin/StudentGetStarted";
import Step1 from "./components/StudentLogin/Steps/Step1";
import Step2 from "./components/StudentLogin/Steps/Step2";
import Step3 from "./components/StudentLogin/Steps/Step3";
import Step4 from "./components/StudentLogin/Steps/Step4";

export default function App() {
  return (
    <Router>
      {/* We'll handle Navbar conditionally below */}
      <Routes>
        {/* Routes with Navbar */}
        <Route 
          path="/*" 
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/aboutPage" element={<About />} />
                <Route path="/HowitWorks" element={<HowItWorks />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route path="/Blog" element={<BlogPage />} />
              </Routes>
            </>
          } 
        />
        
        {/* Routes without Navbar */}
        <Route path="/signup" element={<StudentSignUp />} />
        <Route path="/student/get-started" element={<StudentGetStarted />} />
        <Route path="/student/step1" element={<Step1 />} />
        <Route path="/student/step2" element={<Step2 />} />
        <Route path="/student/step3" element={<Step3 />} />
        <Route path="/student/step4" element={<Step4 />} />
      </Routes>
    </Router>
  );
}