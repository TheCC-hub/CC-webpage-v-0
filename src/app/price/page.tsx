"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Pricing = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300 p-8">
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                {/* Pricing Plans */}
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="relative bg-white border-2 border-black shadow-lg p-6 rounded-xl text-center w-full"
                    >
                        {/* Highlight Badge */}
                        {plan.highlight && (
                            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-300 text-black px-3 py-1 text-xs font-bold rounded-md">
                                {plan.highlight}
                            </span>
                        )}

                        {/* Plan Title */}
                        <h2 className="text-xl font-bold">{plan.name}</h2>

                        {/* Price */}
                        <p className="text-4xl font-extrabold mt-2">${plan.price}</p>
                        <p className="text-xs font-semibold uppercase">Every month</p>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mt-4">{plan.description}</p>

                        {/* Button */}
                        <Link
                            href={`/price/${plan.id}`}
                            className="mt-4 w-full bg-black text-white py-2 rounded-lg text-lg font-bold hover:bg-gray-900 transition"
                        >
                            Let’s Go! 🚀
                        </Link>

                        {/* Features List */}
                        <ul className="mt-6 text-left border-t-2 border-black pt-4 space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    ✅ {feature}
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
        name: "Kickoff Kit",
        price: "888",
        description: "Start strong with our Kickstart Creator Kit, essential features & personalized assistance included.",
        features: [
            "+ 2 Long-Forms",
            "+ 15 Reels",
            "+ Clip Selection",
            "+ Can Request Reels",
            "+ Frame.io for Reviewing",
            "+ Mail Assistance",
            "+ Kickass Editing",
            "+ AI Dynamo Kit",
        ],
    },
    {
        id: 2,
        name: "Rise Up",
        price: "1,776",
        description: "Elevate your game with Rise Up, advanced features & multi-channel publishing.",
        features: [
            "+ 4 long-forms",
            "+ 20 Reels",
            "Everything in Kickoff Kit and...",
            "+ Thumbnails",
            "+ Chat Assistance",
            "+ Publishing on 3 channels",
            "+ Title Ideas and Descriptions",
        ],
    },
    {
        id: 3,
        name: "Mastery Move",
        price: "2,664",
        description: "Unleash mastery with Mastermind Mastery Move, all-inclusive features & promotional opportunities.",
        features: [
            "Everything in Rise Up Plan and...",
            "+ Video Ideas",
            "+ Video Scripts",
            "+ 1 Dedicated Editor",
            "+ 1 Content Strategist",
            "+ 5 Channel Publishing",
            "+ 3 Months Required",
            "+ Priority Assistance",
        ],
        highlight: "Scale Up Quick!",
    },
];

export default Pricing;