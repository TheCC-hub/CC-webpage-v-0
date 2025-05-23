'use client';

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
    IoLogoYoutube,
} from "react-icons/io5";
import { FaEye, FaMicrophone } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { GiGearStick } from "react-icons/gi";

export default function PlatformHoppers() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
            },
        }),
    };


    return (
        <section ref={ref} className="relative py-28 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="md:text-4xl sm:text-3xl text-2xl font-extrabold text-seconday mb-8"
            >
                Our videos leap across platforms, <br />racking up views everywhere they land! 🚀
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                <div className="flex flex-col gap-4">
                    <Card
                        index={0}
                        controls={controls}
                        fadeUp={fadeUp}
                        icon={<IoLogoYoutube className="h-20 w-20 mb-2" />}
                        label="YouTube Videos"
                        className="w-[350px] h-[170px] shadow-xl rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-red-500 text-red-500 backdrop-blur-md"
                    />
                    <div className="flex gap-2 items-center">
                        <Card
                            index={1}
                            controls={controls}
                            fadeUp={fadeUp}
                            icon={<AiFillTikTok className="h-20 w-20 mb-2" />}
                            label="TikTok Videos"
                            className="w-[170px] h-[300px] shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-gray-400 text-gray-400 backdrop-blur-md"
                        />
                        <Card
                            index={2}
                            controls={controls}
                            fadeUp={fadeUp}
                            icon={<AiFillInstagram className="h-20 w-20 mb-2" />}
                            label="Instagram Reels"
                            className="w-[170px] h-[300px] shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-[#ee2a7b] text-[#ee2a7b] backdrop-blur-md"
                        />
                    </div>
                    <Card
                        index={3}
                        controls={controls}
                        fadeUp={fadeUp}
                        icon={<FaEye className="mb-2 h-20 w-20" />}
                        label="AI Powered Videos"
                        className="w-[350px] h-[170px] shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-[#0000FF] text-[#0000FF] backdrop-blur-md"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <Card
                        index={4}
                        controls={controls}
                        fadeUp={fadeUp}
                        icon={<CgWebsite className="h-20 w-20 mb-2" />}
                        label="Website Development"
                        className="w-[350px] h-[170px] shadow-xl rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-yellow-500 text-yellow-500 backdrop-blur-md"
                    />
                    <div className="flex gap-2 items-center">
                        <Card
                            index={5}
                            controls={controls}
                            fadeUp={fadeUp}
                            icon={<FaMicrophone className="h-20 w-20 mb-2" />}
                            label="Podcast Shorts"
                            className="w-[170px] h-[300px] shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-green-500 text-green-500 backdrop-blur-md"
                        />
                        <Card
                            index={6}
                            controls={controls}
                            fadeUp={fadeUp}
                            icon={<SiYoutubeshorts className="h-20 w-20 mb-2" />}
                            label="YouTube Shorts"
                            className="w-[170px] h-[300px] shadow-lg rounded-[40px] p-6 flex flex-col justify-center items-center border-4 border-red-500 text-red-500 backdrop-blur-md"
                        />
                    </div>
                    <Card
                        index={7}
                        controls={controls}
                        fadeUp={fadeUp}
                        icon={<GiGearStick className="mb-2 h-20 w-20" />}
                        label="Product Demo"
                        className="w-[350px] h-[170px] shadow-lg rounded-3xl p-6 flex flex-col justify-center items-center border-4 border-purple-500 text-purple-500 backdrop-blur-md"
                    />
                </div>
            </div>
        </section>
    );
}


const Card = ({
    index,
    icon,
    label,
    className,
    controls,
    fadeUp
}: {
    index: number;
    icon: React.ReactNode;
    label: string;
    className: string;
    controls: any;
    fadeUp: any
}) => (
    <motion.div
        custom={index}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className={className}
    >
        {icon}
        <p className="font-light text-xl">{label}</p>
    </motion.div>
);