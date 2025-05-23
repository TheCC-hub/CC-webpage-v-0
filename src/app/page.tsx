"use client"

import PlatformHoppers from "@/components/platformHoppers";
import HeroSection from "@/components/heroSection";
import Testimonial from "@/components/testimonial";
import PricingSection from "@/components/prices";
import { useEffect } from "react";
import LandingPage from "@/components/landing-page";
import AboutUs from "@/components/about-section";
import { LucideIcon, Pickaxe, AudioLines, RefreshCcw, PaintBucket, Rss, Images, GalleryHorizontal, Film } from 'lucide-react';
import HowWeWork from "@/components/howWeWork";
import { GlowingButton } from "@/components/button";
import PackageGrid from "@/components/packageGrid";
import WhatWeDo from "@/components/whatWeDo";

export default function Home() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="relative h-fit w-full">
      <section className="md:px-28 sm:px-10 px-5">
        <LandingPage />
      </section>
      <section className="md:px-28 sm:px-10 px-5">
        <AboutUs />
      </section>
      <section className="md:px-28 sm:px-10 px-5">
        <WhatWeDo />
      </section>
      <section className="md:px-28 sm:px-10 px-5">
        <HowWeWork />
      </section>
      <section className="md:px-28 sm:px-10 px-5">
        <PricingSection />
      </section>
      <section className="md:px-28 sm:px-10 px-5">
        <PackageGrid />
      </section>
      <section className="md:px-28 sm:px-10 px-5">
        <PlatformHoppers />
      </section>

      <Testimonial />

      <HeroSection />
    </div >
  );
}


