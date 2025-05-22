'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { GlowingButton } from './button';
import {
    LucideIcon,
    Pickaxe,
    Film,
    GalleryHorizontal,
    AudioLines,
    PaintBucket,
    RefreshCcw,
    Rss,
    Images,
} from 'lucide-react';
import { scrollToElementById } from '@/utils/utils';

export default function WhatWeDo() {
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
        <section className="relative w-full py-20 what-we-do" id='what-we-do' ref={ref}>
            <motion.div
                className="flex items-center"
                initial="hidden"
                animate={hasAnimated ? 'visible' : 'hidden'}
                variants={variants}
            >
                <motion.div
                    variants={variants}
                    transition={{ delay: 0.3 }}
                    className="max-w-[40%]"
                >
                    <h1 className="text-4xl text-gray-200 font-bold mb-10">
                        Where big ideas become unstoppable products.
                    </h1>
                    <GlowingButton title="Pricing" onClick={() => scrollToElementById("pricing")} />
                </motion.div>

                <motion.div
                    className=""
                    variants={variants}
                    transition={{ delay: 0.3 }}
                >
                    <ServicesGrid />
                </motion.div>
            </motion.div>
        </section>
    );
}

interface ServiceItem {
    icon: LucideIcon;
    title: string;
    description: string;
}

const servicesLeft: ServiceItem[] = [
    {
        icon: Pickaxe,
        title: 'Advanced Visual Effects',
        description: "Explosions? Glitches? Unlimited VFX for every video. Go wild.",
    },
    {
        icon: Film,
        title: 'Motion Graphics',
        description: "Endless animations. Our editors make stuff move—really well.",
    },
    {
        icon: GalleryHorizontal,
        title: 'Add-on: Vertical Video',
        description: "Need it tall? We’ll reformat for Shorts, Reels & TikTok. Just $10.",
    },
    {
        icon: AudioLines,
        title: 'Music & Sound Effects​',
        description: "Beats, booms, and vibes—royalty-free and brand-ready.",
    },
];

const servicesRight: ServiceItem[] = [
    {
        icon: PaintBucket,
        title: 'Color Correction​',
        description: "Raw footage? We’ll fix the colors so you look like a pro.",
    },
    {
        icon: RefreshCcw,
        title: 'Unlimited Revisions​',
        description: "Tweak away—we revise until you're doing a happy dance.",
    },
    {
        icon: Rss,
        title: 'Real-Time Updates',
        description: "Daily updates. Stay in the loop, or just pop in to say hi.",
    },
    {
        icon: Images,
        title: 'Add-on: Thumbnail',
        description: "Custom thumbnails that scream 'click me!' Just $4.",
    },
];

export function ServicesGrid() {
    return (
        <section className="py-20 text-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {servicesLeft.map((service, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <service.icon className="w-10 h-10 text-gray-400" />
                                <div>
                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                    <p className="text-sm text-gray-400">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {servicesRight.map((service, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <service.icon className="w-10 h-10 text-gray-400" />
                                <div>
                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                    <p className="text-sm text-gray-400">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}