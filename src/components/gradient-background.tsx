"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            {/* Top Left Gradient - Moves Slightly */}
            <motion.div
                animate={{
                    x: ["-10%", "0%", "-10%"],
                    y: ["-10%", "5%", "-10%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#A5A6F6] via-[#D6B3FF] to-[#FCFCFC] rounded-full blur-[150px] opacity-80"
            ></motion.div>

            {/* Right Gradient - Moves Up & Down */}
            <motion.div
                animate={{
                    x: ["10%", "0%", "10%"],
                    y: ["0%", "-10%", "0%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute top-[-50px] right-[-50px] w-[600px] h-[600px] bg-gradient-to-br from-[#6E72FC] via-[#A8AFFF] to-[#D4D9FF] rounded-full blur-[120px] opacity-90"
            ></motion.div>

            {/* Bottom Gradient - Expanding & Shrinking */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-150px] left-[30%] w-[700px] h-[700px] bg-gradient-to-br from-[#6E72FC] via-[#C79DFE] to-[#D4D9FF] rounded-full blur-[140px] opacity-70"
            ></motion.div>

            {/* Centered Content (Optional) */}
            <div className="relative flex items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-gray-900">Your Content Here</h1>
            </div>
        </div>
    );
}