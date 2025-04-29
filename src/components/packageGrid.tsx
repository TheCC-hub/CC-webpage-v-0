'use client';

import { AudioLines, Captions, Film, GalleryHorizontal, GalleryThumbnails, MessageSquareDot, RefreshCcw } from "lucide-react";
import { GiTeamIdea } from "react-icons/gi";
import { GrThreeDEffects } from "react-icons/gr";
import { MdDeliveryDining, MdMicExternalOn } from "react-icons/md";
import { RiColorFilterFill } from "react-icons/ri";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
type Feature = {
    title: string;
    description: string;
    icon: any;
};

const features: Feature[] = [
    {
        icon: <GrThreeDEffects />,
        title: "Advanced Visual Effects",
        description: "Explosions, glitchy intros, smooth transitions—your videos will look like Hollywood (but on a startup budget).",
    },
    {
        icon: <Film />,
        title: "Motion Graphics",
        description: "We bring your static stuff to life. Animations that pop, move, and make your audience say 'whoa.'",
    },
    {
        icon: <Captions />,
        title: "Animated Captions",
        description: "Engaging captions that bounce, zoom, or dance—no more boring subtitles. Great for retention and vibes.",
    },
    {
        icon: <AudioLines />,
        title: "Music & Sound Effects",
        description: "Royalty-free beats and slick sound design tailored to your content. It’s like background music... but cooler.",
    },
    {
        icon: <RiColorFilterFill />,
        title: "Color Correction",
        description: "No more weird lighting. We make your footage vibrant, clean, and consistently pro-level.",
    },
    {
        icon: <MdMicExternalOn />,
        title: "Audio Correction",
        description: "Echoes, background noise, and mumbling? Gone. We clean your audio until it’s podcast-worthy.",
    },
    {
        icon: <GiTeamIdea />,
        title: "Dedicated Team",
        description: "You’ll work with the same editor + manager every time. Like teammates, but without the office small talk.",
    },
    {
        icon: <MessageSquareDot />,
        title: "Real-Time Updates",
        description: "Expect updates every 24 hours. Plus, you can chat with your team anytime—because ghosting isn’t our thing.",
    },
    {
        icon: <RefreshCcw />,
        title: "Unlimited Revisions",
        description: "We tweak, fine-tune, and perfect until you're 100% happy. No limits, no ego.",
    },
    {
        icon: <GalleryThumbnails />,
        title: "Add-on: Thumbnail",
        description: "Thumbnails that turn scrolls into clicks. Designed to pop and drive more eyeballs. $4 flat.",
    },
    {
        icon: <GalleryHorizontal />,
        title: "Add-on: Vertical Video",
        description: "We’ll repurpose your content into Reels, Shorts & TikToks so you can dominate all platforms. Just $10.",
    },
    {
        icon: <MdDeliveryDining />,
        title: "48 Hour Turnaround",
        description: "We hustle (without cutting corners) to get your edits done fast. Most projects delivered in under 48 hours.",
    },
];

export default function PackageGrid() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [inView, controls]);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.15,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section className="py-16" ref={ref}>
            <div className="mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-4xl font-bold text-center text-gray-200 mb-12"
                >
                    All Packages Include:
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate={controls}
                            variants={fadeUp}
                            className="group backdrop-blur hover:border-primary rounded pb-8 px-1 text-center shadow-md border-b-[0.1px] border-gray-400"
                        >
                            <div className="text-4xl mb-4 flex items-center justify-center group-hover:text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-white/90">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}