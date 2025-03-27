"use client"
import Background from "@/components/boubble-background";
import Link from "next/link";
import React from "react";
import { FaCaretRight } from "react-icons/fa6";

const Pricing = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sred via-text to-sred p-6">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Background />
            </div>
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mt-28">
                {/* Pricing Plans */}
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="relative bg-white/60 dark:bg-white/85  text-black border-2 border-black shadow-lg p-6 rounded-xl text-center w-full"
                    >
                        {/* Highlight Badge */}
                        {plan?.highlight && (
                            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-300 text-black px-3 py-1 text-xs font-bold rounded-md">
                                {plan.highlight}
                            </span>
                        )}

                        {/* Plan Title */}
                        <h2 className="text-xl font-bold">{plan.name}</h2>

                        {/* Price */}
                        <div>
                            <p className="text-5xl font-extrabold mt-3">${plan.price}</p>
                            <p className="text-[12px] mt-2 font-bold uppercase">Every month</p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-800 mt-4 mb-5">{plan.description}</p>

                        {/* Button */}
                        <Link
                            href={`/price/${plan.name.toLowerCase().split(" ")[0]}`}
                            className="bg-black text-white py-2 rounded-lg text-lg hover:bg-gray-900 transition px-3"
                        >
                            Subscribe 🚀
                        </Link>

                        {/* Features List */}
                        <ul className="mt-6 text-left border-t-2 border-black pt-4 space-y-5">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center justify-start gap-2">
                                    <FaCaretRight className="text-sred" /> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Plan Data
const plans = [
    {
        id: 1,
        name: "Base Plan",
        price: "149",
        description: "Start strong with our Base Plan Kit, essential features & assistance included.",
        features: [
            "+ 2 Long-Forms",
            "+ 5 Reels",
            "+ Thumbnails",
            "+ 3 day turnaround",
            "+ Can Request Reels",
            "+ Frame.io for Reviewing",
            "+ Mail Assistance",
            "+ Badass Editing",
            "+ AI Dynamo Kit",
        ],
    },
    {
        id: 2,
        name: "Growth Starter",
        price: "349",
        description: "Elevate your game with Growth Starter, advanced features & multi-channel publishing.",
        features: [
            "+ 4 Long-Forms",
            "+ 15 Reels",
            "Everything in Base Plan and...",
            "+ 2 day turnaround",
            "+ Chat Assistance",
            // "+ 2 Months Required",
        ],
    },
    {
        id: 3,
        name: "Content Pro",
        price: "799",
        description: "Unleash Pro with Mastermind Mastery Move, all-inclusive features & promotional opportunities.",
        features: [
            "+ 6 Long-Forms",
            "+ 25 Reels",
            "Everything in Growth Starter and...",
            // "+ Video Ideas",
            "+ 3 Video's Script (upto 15 min)",
            "+ 1 Dedicated Editor",
            "+ 2 Channel Publishing",
            "+ Analytics (monthly report)",
            "+ SEO (Title, Tags, Description)"
        ],
        highlight: "Scale Up Quick!",
    },
    {
        id: 4,
        name: "Elite",
        price: "1499",
        description: "Unlock excellence with Mastermind Mastery Move—featuring all-inclusive perks and exclusive promotional opportunities!",
        features: [
            "+ 8 Long-Forms",
            "+ 35 Reels",
            "+ Analytics (weekly report, growth insights)",
            "+ 3 Channel Publishing",
            "+ 6 Video's Script (upto 20 min)",
            "Everything in Content Pro and...",
        ],
        highlight: "Scale Up Quick!",
    },
];

export default Pricing;