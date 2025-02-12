import React from "react";

export default function WhatWeDo({ heading }: { heading: string }) {
    return (
        <section className=" text-white py-16 px-6 text-center h-full gap-5 flex flex-col">
            <h2 className="text-4xl font-extrabold mb-10">{heading}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* Strategic Planning */}
                <div className="flex flex-col items-center">
                    <div className="bg-blue-500 p-4 rounded-full mb-4">
                        {/* Replace with an actual icon */}
                        <span className="text-4xl text-white">🎯</span>
                    </div>
                    <h3 className="text-lg font-bold">Strategic Planning <br /> + Production</h3>
                    <p className="text-gray-400 mt-2 text-sm">
                        In a sea of options and limited time, standing out is tough. Only 2.5% of YouTubers hit 1,000 subscribers. Let our expert strategists make your channel stand out.
                    </p>
                </div>

                {/* Thumbnail Design */}
                <div className="flex flex-col items-center">
                    <div className="bg-pink-500 p-4 rounded-full mb-4">
                        <span className="text-4xl text-white">🖼️</span>
                    </div>
                    <h3 className="text-lg font-bold">Thumbnail Design <br /> + Optimization</h3>
                    <p className="text-gray-400 mt-2 text-sm">
                        Thumbnail perfection is key, but getting it right can be tough. Our Perfect Packaging process ensures flawless thumbnails, optimizing your content effortlessly.
                    </p>
                </div>

                {/* Conceptualization */}
                <div className="flex flex-col items-center">
                    <div className="bg-blue-500 p-4 rounded-full mb-4">
                        <span className="text-4xl text-white">💡</span>
                    </div>
                    <h3 className="text-lg font-bold">Conceptualization <br /> + Hooks</h3>
                    <p className="text-gray-400 mt-2 text-sm">
                        Tired of the endless grind of brainstorming, researching, and crafting captivating content? Enter GrowCo – your one-stop shop for idea generation and top-tier writing talent.
                    </p>
                </div>

                {/* Video Editing */}
                <div className="flex flex-col items-center">
                    <div className="bg-pink-500 p-4 rounded-full mb-4">
                        <span className="text-4xl text-white">🎬</span>
                    </div>
                    <h3 className="text-lg font-bold">Video Editing <br /> + Animation</h3>
                    <p className="text-gray-400 mt-2 text-sm">
                        Creating a stellar video demands over 40 hours of editing work. Our team of top-tier editors and animators has got you covered. Just hit record, and leave the rest to us.
                    </p>
                </div>
            </div>
        </section>
    );
}

