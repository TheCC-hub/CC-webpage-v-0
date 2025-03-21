"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import Wraper from "@/components/wraper";
import HeroSection from "@/components/sections/hero-section";
import Testimonial from "@/components/sections/testimonial";
import Link from "next/link";
import VideoCarousel from "@/components/videoCarousel";
import GradientBackground from "@/components/gradient-background";
import bgImage from "@/assets/bg/background.png"
import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-black dark:text-white relative h-fit w-full">

      <div className="h-screen text-center item-center justify-center flex">

        <div className="absolute w-full h-full -z-10">
          <Image src={bgImage} className="inset-0 w-full object-cover" alt="background" />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-[54px] font-extrabold leading-snug">
            Boost Your <span className="text-primary uppercase">YouTube</span> Growth,
            <br />
            & Slash <span className="text-accent uppercase ">Team</span> Costs!
          </h2>

          <div className="">
            <p className="mt-4 text-xl font-semibold ">
              AI-powered, cost-efficient, and creatively crafted solutions for creators.
            </p>

            <p className="mt-4 text-sm font-light">
              Creators and entrepreneurs aiming for YouTube success trust us—the ultimate strategy and production team.
            </p>
          </div>

          <div className="mt-6 space-x-4">
            <Link
              href={"/price"}
              className="border font-bold border-black px-4 py-2 shadow-xl rounded-md hover:bg-white bg-black hover:text-black transition text-white"
            >
              Pricing
            </Link>
            <Link
              href={"https://calendly.com/clip-curve"}
              target="_blank"
              className="border font-bold border-gray-400 px-4 py-2 shadow-xl rounded-md hover:bg-black hover:text-white transition text-black"
            >
              Enquire Now!
            </Link>
          </div>
        </div>

      </div>

      <VideoCarousel />

      {/* what do we do  */}
      <Wraper className="w-full min-h-screen flex flex-col items-center justify-center py-40 bg-[#9B3D57]">
        <WhatWeDo heading="What we do!" />
      </Wraper>

      {/* <HowItWorks /> */}

      <PlatformHoppers />
      <Testimonial />
      <HeroSection />
    </div>
  );
}



