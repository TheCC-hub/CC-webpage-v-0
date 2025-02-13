"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import Wraper from "@/components/wraper";
import logo from "@/assets/logo/logo1.png"
import Image from "next/image";
import CircleAnimation from "./test-video/page";


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

export function HeroSection() {
  return (
    <section className="bg-black text-white px-8 md:px-16 lg:px-32 py-16 flex flex-col gap-8">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Opt for <span className="text-[#0073ff]">GrowCo</span> and reclaim <br />
        your time for what truly <br /> matters.
      </h2>

      <h2 className="text-4xl md:text-6xl font-extrabold text-right leading-tight">
        Leave the heavy lifting of <br />
        <span className="text-[#b05a9f]">video editing</span> and <span className="text-[#b05a9f]">content<br /> marketing</span> to us.
      </h2>
    </section>
  );
}
export function Testimonial() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-12 px-8 py-16 bg-white">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-black text-left">
        Listen to what <br />
        our creators <br />
        have to say! 👂
      </h2>

      <div className="bg-black p-2">
        {/* Testimonial Card */}
        <div className="bg-white border-2 border-black shadow-lg rounded-2xl p-8 max-w-lg">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={logo}
                alt="RaDona Ludlow"
                className="w-24 h-24 object-cover rounded-full border-2 border-black"
              />
              <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 bg-white text-xs border border-black px-2 py-1 rounded-full">
                click
              </span>
            </div>

            <div>
              <p className="font-bold text-lg">RaDona Ludlow</p>
              <p className="italic text-gray-600">Boys and Girls Hairstyle</p>
              <p className="text-gray-700 font-medium">196K Subscribers</p>
            </div>
          </div>

          {/* Testimonial Text */}
          <blockquote className="mt-4 italic text-xl text-gray-900 text-center">
            "We can't wait to see where we will be in 1 year with GrowCo!"
          </blockquote>

          {/* Detailed Review */}
          <p className="mt-4 text-gray-700 text-sm">
            In just 60 days, our YouTube channel has grown 10x in real-life subscribers. We have moved from
            6,000 views to 55,000 views per day.
            <span className="italic"> GrowCo is a wonderful investment and they have rocked our site in such a short time.</span>
          </p>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>

    </section>
  );
}
