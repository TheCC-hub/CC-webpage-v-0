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

    const variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section ref={ref} className="py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-extrabold mb-10"
                    variants={variants}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                >
                    So... Who’s Behind ClipCurve?
                </motion.h2>

                {[
                    `We’re not a giant corporation with layers of management and buzzword meetings. 
           We’re just a tight-knit squad of college friends who turned late-night editing 
           sessions and caffeine-fueled creative rants into a real business.`,

                    `ClipCurve was born in dorm rooms, built on shared dreams (and questionable Wi-Fi). 
           Our goal? Help creators, streamers, vloggers, educators, and brands take their 
           content from “meh” to “🔥 wow, how’d you make that?”`,

                    `We’re passionate about storytelling, obsessed with pixel-perfect edits, and 
           slightly addicted to coffee. Whether you’re building a personal brand, launching 
           a YouTube channel, or looking to level up your marketing content — we gotchu.`,

                    `Think of us as your behind-the-scenes creative crew. We mix professional editing 
           skills with strategy, trends, and a bit of ✨magic✨.`,

                    `TL;DR: We're small, scrappy, passionate, and pretty damn good at what we do.`,
                ].map((text, idx) => (
                    <motion.p
                        key={idx}
                        className={`text-xl leading-relaxed mb-4 ${idx === 4 ? 'font-semibold text-primary' : ''}`}
                        variants={variants}
                        initial="hidden"
                        animate={hasAnimated ? 'visible' : 'hidden'}
                        transition={{ delay: 0.2 + idx * 0.2 }}
                    >
                        {text}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}