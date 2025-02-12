"use client"
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

      <HowItWorks />

      Clipcurve
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-white py-16 px-6 text-center">
      <h2 className="text-4xl font-extrabold text-black mb-10">How It Works!</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black">
          <div className="text-black font-bold text-2xl mb-3">1</div>
          <img src="/icons/package-selection.svg" alt="Package Selection" className="h-16 mb-4" />
          <p className="text-black font-medium text-sm">
            CHOOSE THE PACKAGE THAT'S CONTENT-TAILORED FOR YOU!
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black">
          <div className="text-black font-bold text-2xl mb-3">2</div>
          <img src="/icons/idea-sharing.svg" alt="Share Inspiration" className="h-16 mb-4" />
          <p className="text-black font-medium text-sm">
            SHARE YOUR INSPIRATION WITH OUR TEAM!
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black">
          <div className="text-black font-bold text-2xl mb-3">3</div>
          <img src="/icons/send-request.svg" alt="Send Request" className="h-16 mb-4" />
          <p className="text-black font-medium text-sm">
            DROP YOUR REQUESTS AND CHAT IT OUT WITH OUR CONTENT STRATEGIST.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black">
          <div className="text-black font-bold text-2xl mb-3">4</div>
          <img src="/icons/editing-wizard.svg" alt="Editing Wizards" className="h-16 mb-4" />
          <p className="text-black font-medium text-sm">
            THE EDITING WIZARDS THEN GO BONKERS!
          </p>
        </div>
      </div>
    </section>
  );
}
