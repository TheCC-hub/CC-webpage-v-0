import { WEDO } from "@/data/what-we-do.data";
import React from "react";
import Image from "next/image";
import bgImg1 from "@/assets/bg/p1.png"
import Background from "../boubble-background";

export default function WhatWeDo() {
    return (
        <section className="py-16 px-6 text-center h-full gap-5 flex flex-col">

            <div className="relative">
                <h2 className="text-5xl font-bold mb-10">What we do!</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

                {WEDO?.slice(0, 4).map((item, idx) => (
                    <div className="flex flex-col items-center w-fit px-6" key={item.id}>
                        <div className=" p-4 rounded-full mb-4 flex justify-center items-center text-4xl text-white">
                            {item.icon}
                            {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/positive-dynamic.png" alt="positive-dynamic" /> */}
                        </div>

                        <div className="text-[20px] font-semibold mb-6 items-center flex flex-col gap-0">
                            <span className="whitespace-nowrap">{item.titleOne} &</span>
                            {/* <span className="whitespace-nowrap text-xl">&</span> */}
                            <span className="whitespace-nowrap"> {item.titleTwo}</span>
                        </div>
                        <p className="mt-2 text-[15px] text-justify">{item.body}</p>
                    </div>
                ))}

            </div>

            <div className="relative mt-20">

                <h2 className="text-6xl font-bold mb-5">And That’s Just the Start!</h2>
                <h2 className="text-2xl font-bold mb-10">🚀 We do even more to help you grow effortlessly!</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {WEDO?.slice(4, 8).map((item, idx) => (
                        <div className="flex flex-col items-center w-fit px-6" key={item.id}>
                            <div className=" p-4 rounded-full mb-4 flex justify-center items-center text-4xl text-white">
                                {item.icon}
                                {/* <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/positive-dynamic.png" alt="positive-dynamic" /> */}
                            </div>

                            <div className="text-[20px] font-semibold mb-6 items-center flex flex-col gap-0">
                                <span className="whitespace-nowrap">{item.titleOne} &</span>
                                {/* <span className="whitespace-nowrap text-xl">&</span> */}
                                <span className="whitespace-nowrap">{item.titleTwo}</span>
                            </div>
                            <p className="mt-2 text-[15px] text-justify">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

