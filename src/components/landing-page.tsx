'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from "@/assets/bg/background.png";
import { GlowingButton } from './button';

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
        <div className="text-center items-center justify-start flex relative mt-32 mb-24" ref={ref}>

            {/* Hero Section */}
            <motion.div
                className="flex flex-col items-start justify-center text-left w-full"
                initial="hidden"
                animate={hasAnimated ? 'visible' : 'hidden'}
                variants={variants}
            >
                <div className="mb-6 flex w-full md:flex-row flex-col">
                    <motion.h1
                        className="text-[48px] w-[70%] min-w-[70%] font-semibold leading-snug bg-gradient-to-r from-white to-background/50 bg-clip-text text-transparent"
                        variants={variants}
                        transition={{ delay: 0.1 }}
                    >
                        Discover a team that crafts, <span className='text-primary/50'>edits,</span> and scales videos watched by millions.
                    </motion.h1>
                    <motion.div
                        className=""
                        variants={variants}
                        transition={{ delay: 0.1 }}
                    >
                        <h1 className='font-bold my-3'>Results-driven, no fluff - just execution.</h1>
                        <p className='font-normal text-gray-400 mb-5'>How can we help you today?</p>
                        <Link href={"https://calendly.com/clip-curve"} target='_blank'>
                            <GlowingButton title='Schedule a meeting' />
                        </Link>
                    </motion.div>
                </div>

                <div className='w-full h-[0.5px] bg-gradient-to-r from-white to-background/50 rounded-full'></div>

                <motion.div
                    className="flex items-center justify-between w-full lg:pr-20 my-6"
                    variants={variants}
                    transition={{ delay: 0.7 }}
                >
                    <motion.h1>
                        Based in Delhi, India
                    </motion.h1>
                    <motion.a href="mailto:theclipcurve@gmail.com" className='text-gray-400 font-sembold'>
                        Mail us at: <span className='text-white hover:text-primary'>theclipcurve@gmail.com</span>
                    </motion.a>
                </motion.div>

                <div className='flex my-4 text-center w-full itemsd-center justify-center'>
                    ✨ <h2 className="text-xl  text-primary shining-text">Enjoy Your First Vertical Video On Us</h2> ✨
                </div>

            </motion.div>
        </div>
    );
}