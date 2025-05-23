'use client';

import Image from "next/image";
import i1 from "@/assets/i1.png";
import i2 from "@/assets/i2.png";
import i3 from "@/assets/i3.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function HowWeWork() {
    const steps = [
        {
            image: i1,
            number: "01",
            title: "Log In to CC",
            description: "Log In to ClipCurve, our custom-tailored Video Order Management Application.",
            direction: "left",
        },
        {
            image: i2,
            number: "02",
            title: "Place Your Order",
            description: "Place Your Order for horizontal video editing, vertical video editing, thumbnails, YouTube channel management, or all of the above. Plus different add-ons to suit your unique needs.",
            direction: "bottom",
        },
        {
            image: i3,
            number: "03",
            title: "Delivery and Review",
            description: "Review your deliverables and leave revision notes until you're 100% satisfied. Happy with the end result? You can download your files directly, or let us handle your YouTube uploads and video SEO.",
            direction: "right",
        },
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: (direction: string) => {
            switch (direction) {
                case "left":
                    return { opacity: 0, x: -100 };
                case "right":
                    return { opacity: 0, x: 100 };
                case "bottom":
                default:
                    return { opacity: 0, y: 80 };
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="py-20" ref={ref}>
            <div className="mx-auto md:px-6 text-center">

                {/* Animated Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="md:text-4xl sm:text-3xl text-2xl font-bold text-white mb-4"
                >
                    How do we do it?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 60 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-gray-400 mb-12"
                >
                    We follow a streamlined three-step process to help you win.
                </motion.p>

                {/* Step Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            custom={step.direction}
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#1a1a2e] rounded-xl md:p-8 p-5 text-left hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-center gap-4"
                        >
                            <div>
                                <div className="text-5xl font-bold text-gray-400 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {step.description}
                                </p>
                            </div>
                            <div className="rounded-xl overflow-hidden">
                                <Image src={step.image} alt="step image" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}