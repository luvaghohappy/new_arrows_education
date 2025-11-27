// File: src/pages/Homepage.jsx
import React from "react";
import Hero from "../sections/HeroSection";
import WhoWeServe from "../sections/WhoWeServe";
import OurStorySection from "../sections/OurStorySection";
import WhyChooseUs from "../sections/WhyChooseUs";
import Institutions from "../sections/Instutitions";
import ImpactSection from "../sections/ImpactSection";
import GlobalSection from "../sections/GlobalSection";
import Testimonials from "../sections/Testimonials";
import FASection from "../sections/FASection";
import WebinarSection from "../sections/WebinarSection";
import BlogSection from "../sections/BlogSection";


export default function Homepage() {
  return (
    <div>
      <Hero />
      <WhoWeServe />
      <OurStorySection />
      <WhyChooseUs />
      <Institutions />
      <ImpactSection />
      <GlobalSection />
      <Testimonials />
      <FASection />
      <WebinarSection />
      <BlogSection />
      
    </div>
  );
}
