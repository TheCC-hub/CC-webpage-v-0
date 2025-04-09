import React, { useState } from 'react'
import WedoCard from './wedoCard'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'
import Image from 'next/image'
import vVideoIcon from "@/assets/icons/vVideoIcon.png"
import thumbnailIcon from "@/assets/icons/thumbnailIcon.png"
import hVideoIcon from "@/assets/icons/hVideoIcon.png"
import managementIcon from "@/assets/icons/managementIcon.png"
import t1 from "@/assets/thumbnails/t1.webp"
import t2 from "@/assets/thumbnails/t2.jpg"
import t3 from "@/assets/thumbnails/t3.jpg"
import t4 from "@/assets/thumbnails/t4.jpg"
import t5 from "@/assets/thumbnails/t5.jpg"
import t6 from "@/assets/thumbnails/t6.jpg"

export default function WhatWeDo() {

    return (
        <div className='w-full flex flex-col items-center' id='services'>
            <h1 className='text-center text-4xl font-bold mb-10'>What we do</h1>

            <div className='flex flex-col w-full items-center gap-20'>
                {Services.map((service, idx) => (
                    <WedoCard service={service} key={idx} index={idx} />
                ))}
                {/* <WedoCard service={Services[1]} /> */}
            </div>
        </div>
    )
}


export const Services = [
    {
        icon: hVideoIcon,
        name: "Horizontal Video",
        description: [
            "From motion graphics that pop to VFX that wow, we’ve got your long-form videos covered! Need audio magic, color correction, or snazzy text? ✅ Done.",
            "Want copyright-free music & stock footage so you don’t get flagged? ✅ Handled.",
            "Oh, and guess what? You’ll also get a personal video manager—think of them as your video’s guardian angel, making sure every frame is flawless. Excellence & consistency? Guaranteed. 🚀"
        ],
        samples: {
            aspactRatio: {
                height: "200",
                width: "400"
            },
            videos: [
                "https://drive.google.com/file/d/1tv5qd5TXS4bngok1trddhlGow_DBWfs5/preview",
                "https://drive.google.com/file/d/1l3EYCWCQixl_V5qhm8HRM0KINg_7LFFY/preview",
                "https://drive.google.com/file/d/1NpvhJfIBftb9crcnnyMyDWlpOrU7iZ0j/preview",
                "https://drive.google.com/file/d/1aTANVvZJAM8juOL05tS-jW8Scq9Vqn31/preview"
            ]
        }
    },
    {
        icon: vVideoIcon,
        name: "Vertical Video",
        description: [
            "Why let your best moments get lost in a long video when they can steal the spotlight in Shorts?",
            "Vertical and square reformats are your ticket to viral fame on YouTube Shorts, TikTok, Reels, and even LinkedIn (because professionals love a good scroll too 😏).",
            "And the best part? 24-hour turnaround ⏳ + unlimited revisions 🔄 = No excuses to not go viral! 🚀 Need Shorts from your long-form content? Just add reformats to your order, and we’ll work our magic. 🎬🔥",
            "Let’s make your content the one people can’t stop watching! 😎"
        ],
        samples: {
            aspactRatio: {
                height: "400",
                width: "250"
            },
            videos: [
                "https://drive.google.com/file/d/19i8d5uL9gT8osjvQwkIGJEOcE5wgSOax/preview",
                "https://drive.google.com/file/d/1A6oaixZfQ5PZqyzmRouRaVflRaf6irOz/preview",
                "https://drive.google.com/file/d/1XYNbBeqEOjBNx9TcFz6_jmbDGnSz2x01/preview"
            ]
        }
    },
    {
        icon: thumbnailIcon,
        name: "Thumbnail Design",
        description: [
            "Let’s be real—your content deserves attention, but without a 🔥 thumbnail, it’s like a party with no invites. That’s where we come in! Our professional thumbnail artists design eye-catching, high-performing thumbnails from scratch, making sure your videos stand out, not scroll past",
            "More clicks = more views = more growth 🚀. Let’s get those CTRs soaring! 📈🔥"
        ],
        samples: {
            aspactRatio: {
                height: "200",
                width: "300"
            },
            images: [
                t1, t2, t3, t4, t5, t6
            ]
        }
    },
    {
        icon: managementIcon,
        name: "YouTube Channel Management",
        description: [
            "Making fire YouTube content? Awesome. But spending hours optimizing, uploading, and cracking the algorithm? Not so fun.😵‍💫",
            "With our expert channel managers, you’ll get one-on-one strategy calls and a personal YouTube guru who handles uploads, killer titles, thumbnail A/B tests, and even community engagement—so you can grow without the grind.",
            "More content, less stress, and a channel that actually takes off? Sounds like a win-win. 🎯🔥 Let’s get you trending! 📈",
        ]
    },

]