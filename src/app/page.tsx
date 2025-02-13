"use client"
import HowItWorks from "@/components/sections/how-it-works";
import PlatformHoppers from "@/components/sections/PlatformHoppers";
import WhatWeDo from "@/components/sections/we-do";
import Wraper from "@/components/wraper";


export default function Home() {
  return (
    <div className="text-text">

      {/* <div className="h-screen bg-gradient-to-r from-red-200 via-orange-300 to-purple-200 text-center item-center justify-center flex"> */}
      <div className="h-screen bg-fill text-center item-center justify-center flex">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-6xl font-extrabold leading-snug">
            Maximize <span className="text-pred underline">YouTube</span> Growth,
            <br />
            Minimize <span className="text-green-500 underline">Team</span> Spend
          </h2>

          <div className="">
            <p className="mt-4 text-2xl font-semibold text-gray-700 ">
              Refined by Human Touch; Supercharged by AI; Significant Cost Cutting
            </p>

            <p className="mt-4 text-lg font-light text-gray-700 ">
              Creators and entrepreneurs striving for YouTube growth turn to us – the ultimate strategy and production team.
            </p>
          </div>

          <div className="mt-6 space-x-4">
            <button className="px-6 py-3 border border-black rounded-lg shadow-xl hover:bg-black hover:text-white transition">Pricing</button>
            <button className="px-6 py-3 border border-black rounded-lg shadow-xl hover:bg-black hover:text-white transition">Enquire Now!</button>
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

      Clipcurve
    </div>
  );
}
