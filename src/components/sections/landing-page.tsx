'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from "@/assets/bg/background.png";

export default function LandingPage() {
    const { ref, inView } = useInView({ threshold: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    return (
        <div className="h-screen text-center items-center justify-center flex px-10 relative" ref={ref}>
            {/* bg-image */}
            <div className="absolute w-full min-h-screen md:h-auto h-screen -z-10 lg:top-[-80px] top-0">
                <Image src={bgImage} className="inset-0 w-full h-full object-cover" alt="background" />
            </div>

            {/* Hero Section */}
            <motion.div
                className="flex flex-col items-start justify-center px-10 text-left w-[65%]"
                initial="hidden"
                animate={hasAnimated ? 'visible' : 'hidden'}
                variants={variants}
            >
                <div className="pb-4">
                    <motion.h1
                        className="text-[50px] font-bold leading-snug"
                        variants={variants}
                        transition={{ delay: 0.1 }}
                    >
                        Blow up your <span className="text-primary uppercase">Content</span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl font-sembold leading-snug"
                        variants={variants}
                        transition={{ delay: 0.3 }}
                    >
                        Edits for the <span className="text-primary uppercase">Hustlers</span> Behind the Camera
                        <br />
                        Gamers, Vloggers, Educators, Brands, and More
                    </motion.h2>

                    <motion.h3
                        className="text-lg mt-12"
                        variants={variants}
                        transition={{ delay: 0.5 }}
                    >
                        AI-powered, cost-efficient, and creatively crafted solutions—we help your content stand out, scale, and succeed.
                    </motion.h3>
                </div>

                {/* landing page buttons  */}
                <motion.div
                    className="mt-6 space-x-6    flex"
                    variants={variants}
                    transition={{ delay: 0.7 }}
                >
                    <Link
                        href={"/#pricing"}
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
                </motion.div>
            </motion.div>

            {/* Calendly embed */}
            <motion.div
                className="w-[500px] h-[600px] rounded-xl overflow-hidden relative mt-20"
                initial={{ opacity: 0, x: 40 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            >
                <div
                    className="calendly-inline-widget w-[500px] h-[600px] rounded-xl overflow-hidden"
                    data-url="https://calendly.com/clip-curve"
                    style={{ minWidth: "320px", height: "600px" }}
                ></div>
            </motion.div>
        </div>
    );
}