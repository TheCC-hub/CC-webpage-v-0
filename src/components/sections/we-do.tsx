import { wedo } from "@/data/what-we-do";
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

                {wedo?.map((item, idx) => (
                    <div className="flex flex-col items-center w-fit px-6" key={item.id}>
                        <div className="bg-blue-500 p-4 rounded-full mb-4">
                            {/* Replace with an actual icon */}
                            <span className="text-4xl text-white">{item.icon}</span>
                        </div>
                        <h3 className="text-[20px] font-extrabold mb-6">{item.titleOne} <br /> {item.titleTwo}</h3>
                        <p className="text-white mt-2 text-[15px]">{item.body}</p>
                    </div>
                ))}

            </div>

            <div className="relative mt-20">

                <h2 className="text-6xl font-extrabold mb-2">That Isn't All!</h2>
                <h2 className="text-2xl font-extrabold mb-10">We even work on...</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

                    {wedo?.map((item, idx) => (
                        <div className="flex flex-col items-center w-fit px-6" key={item.id}>
                            <div className="bg-blue-500 p-4 rounded-full mb-4">
                                {/* Replace with an actual icon */}
                                <span className="text-4xl text-white">{item.icon}</span>
                            </div>
                            <h3 className="text-[20px] font-extrabold mb-6">{item.titleOne} <br /> {item.titleTwo}</h3>
                            <p className="text-white mt-2 text-[15px]">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

