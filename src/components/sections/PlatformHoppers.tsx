import React from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { FaEye, FaMicrophone } from "react-icons/fa6";
import { BsCameraReelsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { FaPlayCircle } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GiGearStick } from "react-icons/gi";
import Background from "../boubble-background";


export default function PlatformHoppers() {

    return (
        <section className="relative py-16 px-6 text-center">
            <h2 className="text-4xl font-extrabold text-seconday mb-8">
                Our videos leap across platforms, <br />racking up views everywhere they land! 🚀
            </h2>

            {/* Container for Cards */}
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="w-[350px] h-[170px] shadow-xl rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-red-500 text-red-500 backdrop-blur-md">
                        <IoLogoYoutube className="h-20 w-20 mb-2" />
                        <p className=" font-light text-xl">YouTube Videos</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-[170px] h-[300px]  shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-black text-black backdrop-blur-md">
                            <AiFillTikTok className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">TikTok Videos</p>
                        </div>

                        <div className="w-[170px] h-[300px]  shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-[#ee2a7b] text-[#ee2a7b] backdrop-blur-md">
                            <AiFillInstagram className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">Instagram Reels</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[170px]  shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-[#0000FF] text-[#0000FF] backdrop-blur-md">
                        <FaEye className="mb-2 h-20 w-20" />
                        <p className="font-light text-xl">AI Powered Videos</p>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-[350px] h-[170px]  shadow-xl rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-yellow-500 text-yellow-500 backdrop-blur-md">
                        <CgWebsite className="h-20 w-20 mb-2" />
                        <p className="font-light text-xl">Website Development</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-[170px] h-[300px]  shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-green-500 text-green-500 backdrop-blur-md">
                            <FaMicrophone className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">Podcast Shorts</p>
                        </div>

                        <div className="w-[170px] h-[300px]  shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-red-500 text-red-500 backdrop-blur-md">
                            <SiYoutubeshorts className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">YouTube Shorts</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[170px]  shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-purple-500 text-purple-500 backdrop-blur-md">
                        <GiGearStick className="mb-2 h-20 w-20" />
                        <p className="font-light text-xl">Product Demo</p>
                    </div>

                </div>


            </div>
        </section >
    );
}