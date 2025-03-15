"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import Wraper from "@/components/wraper";
import HeroSection from "@/components/sections/hero-section";
import Testimonial from "@/components/sections/testimonial";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="bg-fi relative h-fit">

      <div className="h-screen text-center item-center justify-center flex">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-[54px] font-extrabold leading-snug">
            Skyrocket Your <span className="text-pred uppercase">YouTube</span> Growth,
            <br />
            Slash Your <span className="text-green-500 uppercase">Team</span> Costs!
          </h2>

          <div className="">
            <p className="mt-4 text-xl font-semibold">
              Crafted with Human Creativity, Powered by AI, and Optimized for Cost Efficiency.
            </p>

            <p className="mt-4 text-sm font-light">
              Creators and entrepreneurs aiming for YouTube success trust us—the ultimate strategy and production team.
            </p>
          </div>

          <div className="mt-6 space-x-4">
            <button onClick={() => redirect("/price")} className="px-6 py-3 border border-accent rounded-lg shadow-xl hover:bg-text hover:text-accent font-bold transition">Pricing</button>
            <button className="px-6 py-3 border border-accent rounded-lg shadow-xl hover:bg-text hover:text-accent font-bold transition">Enquire Now!</button>
          </div>
        </div>
      </div>

      {/* what do we do  */}
      <Wraper className="w-full min-h-screen flex flex-col items-center justify-center py-40 bg-sred">
        <WhatWeDo heading="What we do!" />
        {/* <WhatWeDo heading="That Isn't All!" /> */}
      </Wraper>

      {/* <HowItWorks /> */}

      <PlatformHoppers />
      <Testimonial />
      <HeroSection />
    </div>
  );
}



