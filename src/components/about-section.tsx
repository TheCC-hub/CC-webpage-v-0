'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function AboutUs() {
    const { ref, inView } = useInView({ threshold: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    // Animation variant with delay control
    const fadeVariant = {
        hidden: { opacity: 0, x: 80 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                delay: i * 0.3, // 🔥 Add delay based on order
            },
        }),
    };

    const leftFadeVariant = {
        hidden: { opacity: 0, x: -80 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                delay: i * 0.3, // 🔥 Add delay based on order
            },
        }),
    };

    return (
        <section className="py-16">
            <div ref={ref} className="text-justify mx-auto space-y-6">

                <motion.h3
                    custom={0}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    variants={leftFadeVariant}
                    className="text-xl mb-5 bg-gradient-to-r from-primary to-background bg-clip-text text-transparent"
                >
                    Our Story
                </motion.h3>

                <motion.p
                    custom={1}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    variants={fadeVariant}
                    className="text-lg leading-relaxed"
                >
                    ClipCurve was born out of late-night editing sessions, big dreams, and lots of coffee.
                    What started in dorm rooms between a few passionate friends has grown into a full-fledged creative studio
                    helping creators, streamers, vloggers, and brands transform their content into high-performing visuals.
                </motion.p>

                <motion.p
                    custom={2}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    variants={leftFadeVariant}
                    className="text-lg leading-relaxed"
                >
                    We’re all about pixel-perfect edits, smart storytelling, and keeping creativity at the core.
                    Think of us as your behind-the-scenes team making your content not just good — but unforgettable.
                </motion.p>

                {/* Who's Behind Section */}
                <motion.h2
                    custom={3}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    variants={fadeVariant}
                    className="text-2xl font-semibold bg-gradient-to-r from-primary to-background/40 bg-clip-text text-transparent my-5"
                >
                    Who’s Behind ClipCurve?
                </motion.h2>

                <motion.p
                    custom={4}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    variants={leftFadeVariant}
                    className="text-lg leading-relaxed"
                >
                    We’re a small crew of editors and creative strategists — passionate, trend-savvy, and slightly addicted to coffee.
                    No buzzwords, no big agency politics — just focused, high-quality work that helps your content win.
                </motion.p>

                <motion.p
                    custom={5}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                    variants={fadeVariant}
                    className="text-xl font-semibold text-primary mt-6 text-center"
                >
                    TL;DR: Small team. Big impact. Seriously good edits.
                </motion.p>

            </div>
        </section>
    );
}