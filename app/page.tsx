'use client'

import Slider from "@/components/Slider";
import AboutMe from "./about/page";
import ProjectsSection from "@/components/ProductSection";
import EnhancedExpertiseSection from "@/components/ExpertiseSection";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
 

  return (
    <div className=" bg-[#f7f8fa] dark:bg-[#0c0a09]">
    <Hero/>

      <Slider />

      {/* <AboutMe/> */}
      <ProjectsSection/>
      <EnhancedExpertiseSection></EnhancedExpertiseSection>
      <Tech/>
      <TestimonialCarousel/>
    </div>
  );
}
