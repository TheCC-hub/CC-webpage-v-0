"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import Wraper from "@/components/wraper";

import CircleAnimation from "./test-video/page";
import HeroSection from "@/components/sections/hero-section";
import Testimonial from "@/components/sections/testimonial";
import Image from "next/image";
import bgImg2 from "@/assets/bg/p2.png"
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="bg-fi relative h-fit">
      {/* animation  */}
      <section className="absolute top-0 right-0 left-0 translate-x w-full -z-[1] min-h-full">
        {/* <div className="w-[200px] fixed top-40 left-24 animate-slowspin" >
          <Image src={bgImg2} alt="" className="w-full h-full bg-cover " />
        </div> */}



        {/* <CircleAnimation /> */}
      </section>

      {/* <div className="h-screen bg-gradient-to-r from-red-200 via-orange-300 to-purple-200 text-center item-center justify-center flex"> */}
      <div className="h-screen text-center item-center justify-center flex">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-5xl font-extrabold leading-snug">
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



