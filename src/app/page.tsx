"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import Wraper from "@/components/wraper";

import CircleAnimation from "./test-video/page";
import HeroSection from "@/components/sections/hero-section";
import Testimonial from "@/components/sections/testimonial";


export default function Home() {
  return (
    <div className="text-text relative">
      <section className="absolute top-0 right-0 left-0 translate-x w-full -z-10">
        <CircleAnimation />
      </section>

      {/* <div className="h-screen bg-gradient-to-r from-red-200 via-orange-300 to-purple-200 text-center item-center justify-center flex"> */}
      <div className="h-screen text-center item-center justify-center flex">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-6xl font-extrabold leading-snug">
            Maximize <span className="text-pred underline">YouTube</span> Growth,
            <br />
            Minimize <span className="text-green-500 underline">Team</span> Spend
          </h2>

          <div className="">
            <p className="mt-4 text-2xl font-semibold">
              Refined by Human Touch; Supercharged by AI; Significant Cost Cutting
            </p>

            <p className="mt-4 text-lg font-light">
              Creators and entrepreneurs striving for YouTube growth turn to us – the ultimate strategy and production team.
            </p>
          </div>

          <div className="mt-6 space-x-4">
            <button className="px-6 py-3 border border-accent rounded-lg shadow-xl hover:bg-text hover:text-accent font-bold transition">Pricing</button>
            <button className="px-6 py-3 border border-accent rounded-lg shadow-xl hover:bg-text hover:text-accent font-bold transition">Enquire Now!</button>
          </div>
        </div>
      </div>

      {/* what do we do  */}
      <Wraper className="w-full min-h-screen flex flex-col items-center justify-center py-40">
        <WhatWeDo heading="What do we do" />
        <WhatWeDo heading="That Isn't All!" />
      </Wraper>

      {/* <HowItWorks /> */}

      <PlatformHoppers />
      <Testimonial />
      <HeroSection />
      Clipcurve
    </div>
  );
}



