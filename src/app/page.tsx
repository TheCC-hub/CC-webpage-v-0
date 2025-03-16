"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import Wraper from "@/components/wraper";
import HeroSection from "@/components/sections/hero-section";
import Testimonial from "@/components/sections/testimonial";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-secondary relative h-fit">

      <div className="h-screen text-center item-center justify-center flex">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-[54px] font-extrabold leading-snug">
            Skyrocket Your <span className="text-primary uppercase">YouTube</span> Growth,
            <br />
            Slash Your <span className="text-accent uppercase">Team</span> Costs!
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
            <Link href={"/price"} className="px-6 py-3 border border-accent rounded-lg shadow-xl hover:bg-accent hover:text-white font-bold transition">
              Pricing
            </Link>
            <Link href={"https://calendly.com/clip-curve"} target="_blank" className="px-6 py-3 border border-accent rounded-lg shadow-xl hover:bg-accent hover:text-white font-bold transition">
              Enquire Now!
            </Link>
          </div>
        </div>
      </div>

      {/* what do we do  */}
      <Wraper className="w-full min-h-screen flex flex-col items-center justify-center py-40 bg-sfill">
        <WhatWeDo heading="What we do!" />
      </Wraper>

      {/* <HowItWorks /> */}

      <PlatformHoppers />
      <Testimonial />
      <HeroSection />
    </div>
  );
}



