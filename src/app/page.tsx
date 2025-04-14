"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import HeroSection from "@/components/sections/hero-section";
import Testimonial from "@/components/sections/testimonial";
import Background from "@/components/boubble-background";
import WhatWeDo from "@/components/sections/whatWeDo";
import PricingSection from "@/components/prices";
import { useEffect } from "react";
import LandingPage from "@/components/sections/landing-page";
import AboutUs from "@/components/sections/about-section";

export default function Home() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className=" text-black dark:text-white relative h-fit w-full">
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Background />
      </div>
      <LandingPage />

      <AboutUs />

      {/* <div className="relative">
        <VideoCarousel />
      </div> */}

      {/* what do we do  */}
      <section className="relative w-full py-40 what-we-do px-20">
        {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Background />
        </div> */}

        <WhatWeDo />
      </section>

      <section className="py-20 px-20">
        <PricingSection />
      </section>

      <PlatformHoppers />
      <Testimonial />
      <HeroSection />
    </div >
  );
}



