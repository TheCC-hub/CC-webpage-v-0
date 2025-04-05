
import logo from "@/assets/logo/logo1.png"
import { label } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
        <section className="px-20 py-10">
            <footer className="bg-gradient-to-r to-red-500 from-purple-600 text-white px-8 md:px-16 lg:px-32 py-10 flex flex-col justify-between items-start shadow-lg rounded-lg">
                <div className="w-full text-left flex items-center justify-start gap-3">
                    <Image src={footer.logo} alt="" width={500} height={500} className="h-10 w-auto" />
                    <h2 className="text-3xl font-extrabold">ClipCurve</h2>
                </div>

                <div className="flex items-end justify-between w-full h-fit">
                    {/* Footer Items */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mt-4">Quick Links</h3>
                        <hr className="w-full h-[0.1px] bg-white mt-1" />
                        <ul className="space-y-2 md:space-y-1 pl-1 pt-4">
                            {footer.footerItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="hover:underline">{item.label}</a>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className="flex items-center  gap-8">
                        <Link href={`https://x.com/clipcurve_x`} target="_blank">
                            <FaSquareXTwitter className="text-3xl text-black" />
                        </Link>
                        <Link href={`https://www.linkedin.com/company/clip-curve`} target="_blank">
                            <FaLinkedin className="text-blue-500 text-3xl" />
                        </Link>
                        <Link href={`mailto:theclipcurve@gmail.com`} target="_blank">
                            <SiGmail className="text-[#f2a60c] text-3xl" />
                        </Link>
                    </div>
                    <div className="flex flex-col items-end justify-end h-full gap-2 mb-2">
                        {/* <div>
                            <h3 className="text-xl font-semibold mt-4">Contact Us</h3>
                            <hr className="w-40 h-[0.1px] bg-white mt-1" />
                        </div> */}

                        <Link href={"/terms&conditions/privacy-policy"} className="mt-4 text-sm md:mt-0">Privacy Policy</Link>
                        <Link href={"/terms&conditions"} className="mt-4 text-sm md:mt-0">Terms and Conditions</Link>
                        <Link href={"/terms&conditions/dssPolicy"} className="mt-4 text-sm md:mt-0">Digital Services Shipping Policy</Link>
                        <Link href={"/terms&conditions/carPolicy"} className="mt-4 text-sm md:mt-0">Cancellation and Refund Policy</Link>
                        <p className="text-sm">Email: <a href="mailto:theclipcurve@gmail.com" className="underline">theclipcurve@gmail.com</a></p>
                        <div className="flex items-center justify-end gap-4">

                            {/* Bottom Text */}
                            <p className="text-sm text-white mt-6 md:mt-0">
                                All Rights Reserved by ("ClipCurve")
                            </p>
                        </div>
                    </div>

                </div>

            </footer>
        </section>

    );
}

const footer = {
    logo: logo,
    socialLinks: [
        {
            label: "Twitter(X)",
            link: "https://x.com/clipcurve_x",
        },
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/company/clip-curve",
        },
    ],
    footerItems: [
        {
            link: "/faq",
            label: "FAQs"
        },
        {
            link: "/#what-we-do",
            label: "What We Do"
        },
        {
            link: "#",
            label: "How It Works"
        },
        {
            link: "/#testimonials",
            label: "Testimonials"
        },
        {
            link: "https://calendly.com/clip-curve",
            label: "Contact Us for Pricing"
        }
    ]
}