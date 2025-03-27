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
import heroImage from "@/assets/bg/hero-image.jpg"

export default function Home() {
  return (
    <div className=" text-black dark:text-white relative h-fit w-full">

      <div className="h-screen text-center items-center justify-center flex px-10">

        {/* bg-image  */}
        <div className="absolute w-full min-h-screen md:h-auto h-screen -z-10 lg:top-[-80px] top-0">
          <Image src={bgImage} className="inset-0 w-full h-full object-cover" alt="background" />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-start justify-center px-10 text-left">
          <p className="text-lg font-semibold mb-6">
            AI-powered, cost-efficient, and creatively crafted solutions.
          </p>
          <h2 className="text-[32px] font-extrabold leading-snug py-4">
            {/* Blow up your YouTube & cut team costs like a boss—more growth, less spend, no stress! 🚀🔥” */}
            Blow up your <span className="text-primary uppercase">YouTube</span>
            <br />
            & cut <span className="text-[#5f57fa] uppercase ">team costs</span> like a boss
          </h2>

          <p>more growth, less spend, no stress!</p>

          <p className="mt-10 mb-6 text-sm font-light">
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
              Schedule meet
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-[60%] relative hidden lg:flex items-center justify-center">
          <div className="w-full">
            <Image src={windoeScreen} className="w-full object-cover" alt="background" width={1000} height={1000} />
          </div>

          <div className="absolute top-[34px] left-[15px] w-[95.5%] h-[86%] overflow-hidden rounded-b-md">
            <Image src={heroImage} className=" inset-0 w-full h-full object-cover" alt="hero-image" width={1000} height={1000} />
          </div>
        </div>

      </div>

      <div className="relative">
        <VideoCarousel />
      </div>

      {/* what do we do  */}
      <section className="relative w-full py-40 what-we-do">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Background />
        </div>

        <WhatWeDo />
      </section>

      {/* <HowItWorks /> */}

      <PlatformHoppers />
      <Testimonial />
      <HeroSection />
    </div>
  );
}



