"use client"

import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import HeroSection from "@/components/sections/hero-section";
import Testimonial from "@/components/sections/testimonial";
import Link from "next/link";
import VideoCarousel from "@/components/videoCarousel";
import bgImage from "@/assets/bg/background.png"
import Image from "next/image";
import Background from "@/components/boubble-background";
import windoeScreen from "@/assets/bg/window-screen.png"

export default function Home() {
  return (
    <div className=" text-black dark:text-white relative h-fit w-full">

      <div className="h-screen text-center items-center justify-center flex px-10">

        {/* bg-image  */}
        <div className="absolute w-full h-full -z-10 top-[-80px]">
          <Image src={bgImage} className="inset-0 w-full object-cover" alt="background" />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-start justify-center gap-6 px-10 text-left">
          <p className="mt-4 text-lg font-semibold ">
            AI-powered, cost-efficient, and creatively crafted solutions.
          </p>
          <h2 className="text-[38px] font-extrabold leading-snug">
            Boost Your <span className="text-primary uppercase">YouTube</span> Growth,
            <br />
            & Slash <span className="text-[#5f57fa] uppercase ">Team</span> Costs!
          </h2>

          <p className="mt-2 text-sm font-light">
            Creators and entrepreneurs aiming for YouTube success trust us—the ultimate strategy and production team.
          </p>

          <div className="mt-6 space-x-4">
            <Link
              href={"/price"}
              className="border font-bold border-black dark:border-white px-4 py-2 shadow-xl rounded-md hover:bg-white dark:hover:bg-black bg-black dark:bg-white hover:text-black dark:hover:text-white transition text-white dark:text-black"
            >
              Pricing
            </Link>
            <Link
              href={"https://calendly.com/clip-curve"}
              target="_blank"
              className="border font-bold border-black dark:border-white dark:text-white px-4 py-2 shadow-xl rounded-md dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition text-black"
            >
              Enquire Now!
            </Link>
          </div>
        </div>

        <div className="w-[60%]">
          <Image src={windoeScreen} className="inset-0 w-full object-cover" alt="background" />
        </div>

      </div>

      <div className="relative">
        <VideoCarousel />
      </div>

      {/* what do we do  */}
      <section className="relative w-full py-40 ">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Background />
        </div>
        <WhatWeDo heading="What we do!" />

      </section>

      {/* <HowItWorks /> */}

      <PlatformHoppers />
      <Testimonial />
      <HeroSection />
    </div>
  );
}



