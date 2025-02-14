"use client";

import { Key, useEffect, useState } from "react";
import { Inertia, Keyframes, motion, None, Spring, Tween } from "framer-motion";
import bgImg3 from "@/assets/bg/p3.png"

const StarryBackground = () => {
    const [stars, setStars] = useState<any>([]);

    useEffect(() => {
        const generateStar = (id: number) => {
            const isShooting = Math.random() < 0.1; // 10% chance to be a shooting star
            return {
                id,
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                size: Math.random() * 3 + 1,
                delay: Math.random() * 5,
                isShooting,
                speed: isShooting ? Math.random() * 2 + 2 : 0, // Speed for shooting stars
                lifeSpan: Math.random() * 10 + 5, // Lifespan for each star
            };
        };

        setStars(Array.from({ length: 100 }, (_, index) => generateStar(index)));

        const interval = setInterval(() => {
            setStars((prevStars: any[]) =>
                prevStars.map((star) => {
                    if (star.isShooting || star.lifeSpan <= 0) {
                        return generateStar(star.id); // Replace with a new star
                    }
                    return { ...star, lifeSpan: star.lifeSpan - 1 }; // Reduce lifespan gradually
                })
            );
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden bg-black z-[-1]">
            {stars.map((star: { id: Key | null | undefined; top: any; left: any; size: any; isShooting: any; speed: unknown | number | (Tween | Spring | Keyframes | Inertia | None | { [key: string]: any; }) | undefined; delay: any; }) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={
                        star.isShooting
                            ? { x: [0, 200], y: [0, 100], opacity: [1, 0] }
                            : { opacity: [0, 1, 0] }
                    }
                    transition={{
                        duration: star.isShooting ? star.speed : 2,
                        repeat: star.isShooting ? 0 : Infinity,
                        repeatType: "reverse",
                        delay: star.delay,
                    }}
                />
            ))}


            {/* Background Image Animation */}
            <div className="relative animated-bg">
                <img
                    src={bgImg3.src}
                    alt="Animated Background"
                    className=" animate-slowspin"
                />
            </div>
        </div>
    );
};

export default StarryBackground;
