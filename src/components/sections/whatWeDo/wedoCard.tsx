// components/wedoCard.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Services } from ".";

export default function WedoCard({ service, index }: any) {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView) setHasAnimated(true);
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0, zIndex: 0 }}
            animate={
                hasAnimated
                    ? {
                        y: index * -30, // stack-up effect
                        opacity: 1,
                        zIndex: Services.length - index,
                    }
                    : {}
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative bg-white/20 dark:bg-black/20 p-6 shadow-lg border-2 border-primary rounded-xl w-full max-w-5xl backdrop-blur-sm"
        >
            <div className="flex items-center gap-4">
                <img src={service.icon.src} alt={service.name} className="w-12 h-12" />
                <h3 className="text-2xl font-bold">{service.name}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-left">
                {service.description.map((line: string, i: number) => (
                    <li key={i} className="text-xl">• {line}</li>
                ))}
            </ul>

            {/* Handle thumbnails or videos if available */}
            {service.samples?.images && (
                <div className="mt-4 flex flex-wrap gap-4 w-full items-center justify-center">
                    {service.samples.images.map((img: any, idx: number) => (
                        <Image
                            key={idx}
                            src={img}
                            alt="Thumbnail"
                            width={service.samples.aspactRatio.width}
                            height={service.samples.aspactRatio.height}
                            className="rounded-md shadow-md"
                        />
                    ))}
                </div>
            )}
            {service.samples?.videos && (
                <div className="mt-4 flex flex-wrap gap-4 w-full items-center justify-center">
                    {service.samples.videos.map((url: string, idx: number) => (
                        <iframe
                            key={idx}
                            src={url}
                            width={service.samples.aspactRatio.width}
                            height={service.samples.aspactRatio.height}
                            allow="autoplay"
                            className="rounded-md shadow-md"
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
}









