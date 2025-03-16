import { WEDO } from "@/data/what-we-do.data";
import React from "react";
import Image from "next/image";
import bgImg1 from "@/assets/bg/p1.png"

export default function WhatWeDo({ heading }: { heading: string }) {
    return (
        <section className=" text-white py-16 px-6 text-center h-full gap-5 flex flex-col">
            <div className="relative">
                {/* <div className="w-[200px] -top-36 absolute right-36 rotate" >
                    <Image src={bgImg1} alt="" className="w-full h-full bg-cover " />
                </div> */}
                <h2 className="text-5xl font-extrabold mb-10">{heading}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

                {WEDO?.slice(0, 4).map((item, idx) => (
                    <div className="flex flex-col items-center w-fit px-6" key={item.id}>
                        <div className="bg-blue-500 p-4 rounded-full mb-4 flex justify-center items-center text-4xl text-white">
                            {item.icon}
                        </div>

                        <div className="text-[20px] font-extrabold mb-6 items-center flex flex-col gap-0">
                            <span className="whitespace-nowrap">{item.titleOne}</span>
                            <span className="whitespace-nowrap text-xl">&</span>
                            <span className="whitespace-nowrap">{item.titleTwo}</span>
                        </div>
                        <p className="text-white mt-2 text-[15px]">{item.body}</p>
                    </div>
                ))}

            </div>

            <div className="relative mt-20">

                <h2 className="text-6xl font-extrabold mb-5">And That’s Just the Start!</h2>
                <h2 className="text-2xl font-extrabold mb-10">🚀 We do even more to help you grow effortlessly!</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

                    {WEDO?.slice(4, 8).map((item, idx) => (
                        <div className="flex flex-col items-center w-fit px-6" key={item.id}>

                            <div className="bg-blue-500 p-4 rounded-full mb-4 flex justify-center items-center text-4xl text-white">
                                {item.icon}
                            </div>

                            <div className="text-[20px] font-extrabold mb-6 items-center flex flex-col gap-0">
                                <span className="whitespace-nowrap">{item.titleOne}</span>
                                <span className="whitespace-nowrap text-xl">&</span>
                                <span className="whitespace-nowrap">{item.titleTwo}</span>
                            </div>
                            <p className="text-white mt-2 text-[15px]">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

