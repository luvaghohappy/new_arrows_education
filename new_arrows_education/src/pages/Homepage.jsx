// File: src/pages/Homepage.jsx
import React from "react";
import Hero from "../sections/HeroSection";
import WhoWeServe from "../sections/WhoWeServe";
import OurStorySection from "../sections/OurStorySection";
import WhyChooseUs from "../sections/WhyChooseUs";
import Institutions from "../sections/Instutitions";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <WhoWeServe />
      <OurStorySection /> 
      <WhyChooseUs /> 
      <Institutions /> 
    </div>
  );
}
