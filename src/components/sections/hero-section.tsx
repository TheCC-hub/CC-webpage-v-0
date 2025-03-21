import bgLine from "@/assets/bg/bg-lines.png"
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="text-text px-8 md:px-16 lg:px-32 py-16 flex flex-col gap-8 relative">
            <div className="absolute bottom-0 left-0 h-full -z-10 ">
                <Image src={bgLine} alt="" className="h-full " width={1000} height={1000} />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Choose <span className="text-primary">ClipCurve</span><br />
                and take back your time for what truly matters.
            </h2>

            <h2 className="text-4xl md:text-6xl font-extrabold text-right leading-tight">
                Let us handle the grind <br />
                <span className="text-accent">video editing</span> & <span className="text-accent">content<br /> marketing </span>
                made effortless for you!
            </h2>
        </section>
    );
}