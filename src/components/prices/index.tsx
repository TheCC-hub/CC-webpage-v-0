
import React, { useEffect, useState } from 'react'
import PriceMenu from './priceMenu'
import PackageSection from './packageSection'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState(Tabs[0].label);
    const [activeTabData, setActiveTabData] = useState(Tabs[0]);

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        const setData = () => {
            const selected = Tabs.find((tab) => tab.label === activeTab);
            if (selected) setActiveTabData(selected);
        };
        setData();
    }, [activeTab]);

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [inView, controls]);

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    return (
        <div ref={ref} className="w-full text-center py-20" id="pricing">
            <motion.h1
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                className="text-4xl font-semibold"
            >
                Pricing
            </motion.h1>

            <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-5 mt-10"
            >
                <PriceMenu tabs={Tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
            </motion.div>

            <motion.div
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                transition={{ delay: 0.4 }}
                className="mt-10"
            >
                <PackageSection tabData={activeTabData} />
            </motion.div>
        </div>
    );
}


export const Tabs = [
    {
        label: "Horizontal Video",
        description: [
            "🎬 One Video or a Whole Binge-Worthy Batch? Your Call! 🎬",
            "Grab a single video or save big with a discounted multi-video package—because great content shouldn’t break the bank! 💰 Our horizontal video editing starts at just $69 per video. 📌 Check out our packages below and see what’s included! 🚀",
        ],
        packages: [
            {
                name: "Explore Package",
                description: "1 horizontal video with ~14% discount",
                price: "89",
                discountedPrice: "69",
                per: "video",
                endDelevery: " 1 horizontal video",

            },
            {
                name: "Trending Package",
                description: "4 horizontal video with ~34% discount",
                price: "79",
                discountedPrice: "59",
                per: "video",
                endDelevery: " 4 horizontal video",

            },
            {
                name: "Viral Package",
                description: "10 horizontal video with ~39% discount",
                price: "69",
                discountedPrice: "49",
                per: "video",
                endDelevery: " 10 horizontal video",

            },
        ]
    },
    {
        label: "Vertical Video",
        description: [
            "Get a single reformat or save more with a discounted package—because vertical content is king! 👑 We convert your old 16:9 videos to 9:16 and edit original vertical videos to keep you trending.",
            "📌 Check out our packages below and start going viral! 🚀"
        ],
        packages: [
            {
                name: "Explore Package",
                description: "1 vertical video with ~34% discount",
                price: "30",
                discountedPrice: "20",
                per: "video",
                endDelevery: "1 vertical video",

            },
            {
                name: "Trending Package",
                description: "10 vertical video with ~46% discount",
                price: "24",
                discountedPrice: "16",
                per: "video",
                endDelevery: "10 vertical video",

            },
            {
                name: "Viral Package",
                description: "20 vertical video with 50% discount",
                price: "20",
                discountedPrice: "15",
                per: "video",
                endDelevery: "20 vertical video",

            },
        ]
    },
    {
        label: "Channel Management",
        description: [
            "Sit back and let us run your channel like a pro! From in-depth keyword research and SEO optimization to audience engagement and deep YouTube analytics, we handle it all—so you can focus on creating while we focus on growing.",
            "📌 Let’s turn your channel into a powerhouse! 🚀"
        ],
        packages: [
            {
                name: "Quarterly",
                description: "3 month subscription",
                price: "699",
                discountedPrice: "499",
                per: "month",
                endDelevery: "3 month subscription",

            },
            {
                name: "Semi-Annual",
                description: "save 25% with a 6 month subscription",
                price: "599",
                discountedPrice: "449",
                per: "month",
                endDelevery: "6 month subscription",

            },
            {
                name: "Annual",
                description: "save 33% with a 12 month subscription",
                price: "499",
                discountedPrice: "399",
                per: "month",
                endDelevery: "12 month subscription",

            },
        ]
    },
    {
        label: "Social Media Management",
        description: [
            "From strategy & ideation to video editing, scheduling, SEO, and engagement, we handle every platform so you don’t have to. Sit back, relax, and watch your content reach the right audience & grow like never before! 📈🔥",
            "📌 Let’s make your socials unstoppable! 😎"
        ],
        packages: [
            {
                name: "Every Platform",
                description: "done-for-you social media management",
                price: "5000",
                discountedPrice: "1999",
                per: "month",
                endDelevery: "done-for-you social media management​",

            },
        ]
    },
]
