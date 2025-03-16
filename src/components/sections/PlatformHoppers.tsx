import React from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { BsCameraReelsFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { FaPlayCircle } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GiGearStick } from "react-icons/gi";

export default function PlatformHoppers() {
    return (
        <section className="bg-gradient-to-b from-sfill to-text py-16 px-6 text-center">
            <h2 className="text-4xl font-extrabold text-text mb-8">
                Our videos leap across platforms, <br />racking up views everywhere they land! 🚀

            </h2>

            {/* Container for Cards */}
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto text-fill">
                <div className="flex flex-col gap-4">
                    <div className="w-[350px] h-[170px] bg-white shadow-xl rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-fill">
                        <IoLogoYoutube className="h-20 w-20 mb-2" />
                        <p className="text-fill font-light text-xl">YouTube Videos</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-[170px] h-[300px] bg-white shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-fill">
                            <FaPlayCircle className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">TikTok Videos</p>
                        </div>

                        <div className="w-[170px] h-[300px] bg-white shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-fill">
                            <AiFillInstagram className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">Instagram Reels</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[170px] bg-white shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-fill">
                        <FaEye className="mb-2 h-20 w-20" />
                        <p className="font-light text-xl">AI Powered Videos</p>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-[350px] h-[170px] bg-white shadow-xl rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-fill">
                        <CgWebsite className="h-20 w-20 mb-2" />
                        <p className="font-light text-xl">Website Development</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="w-[170px] h-[300px] bg-white shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-fill">
                            <BsCameraReelsFill className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">Podcast Shorts</p>
                        </div>

                        <div className="w-[170px] h-[300px] bg-white shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-fill">
                            <SiYoutubeshorts className="h-20 w-20 mb-2" />
                            <p className="font-light text-xl">YouTube Shorts</p>
                        </div>

                    </div>
                    <div className="w-[350px] h-[170px] bg-white shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-fill">
                        <GiGearStick className="mb-2 h-20 w-20" />
                        <p className="font-light text-xl">Product Demo</p>
                    </div>

                </div>


            </div>
        </section >
    );
}