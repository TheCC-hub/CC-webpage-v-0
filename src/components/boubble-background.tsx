"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bg1 from "@/assets/bg/bg1.png"
import bg2 from "@/assets/bg/bg2.png"
import bg3 from "@/assets/bg/bg3.png"
import bg4 from "@/assets/bg/bg4.png"
import bg5 from "@/assets/bg/bg5.png"
import bg6 from "@/assets/bg/bg6.png"

export default function Background() {
    return (
        <div className=" w-full h-full -z-10 overflow-hidden dark:opacity-50 opacity-80">
            {/* Floating PNG Circles */}
            <FloatingImage src={bg1} className="top-[10%] left-[5%] w-[250px] h-[250px]" />
            <FloatingImage src={bg2} className="top-[20%] right-[10%] w-[300px] h-[300px]" />
            <FloatingImage src={bg3} className="bottom-[5%] left-[20%] w-[200px] h-[200px]" />
            <FloatingImage src={bg4} className="bottom-[10%] right-[25%] w-[350px] h-[350px]" />
            <FloatingImage src={bg5} className="top-[50%] left-[40%] w-[180px] h-[180px]" />
            <FloatingImage src={bg6} className="top-[10%] right-[35%] w-[280px] h-[280px]" />
        </div>
    );
}

const FloatingImage = ({ src, className }: { src: any; className: string }) => {
    return (
        <motion.div
            animate={{
                y: ["0%", "5%", "0%"],
                // x: ["0%", "5%", "0%"],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
            className={`absolute ${className}`}
        >
            <Image src={src} alt="Background Element" width={200} height={200} className="w-full h-full" />
        </motion.div>
    );
};