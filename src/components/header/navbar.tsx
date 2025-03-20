"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/assets/logo/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeButton from '../ThemeButton'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setIsVisible(true); // Always show navbar when at the top
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <section
            className={`flex items-center justify-center w-full fixed z-50 transition-transform duration-500 ease-in-out
         ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <span className="absolute top-5 right-5 z-50">
                <ThemeButton />
            </span>

            <nav className="flex justify-between items-center py-4 border-b-[0.1px] border-text shadow-md w-full top-0 left-0 px-20  bg-background">
                <Link href={"/"} className='flex items-center'>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='h-[45px] flex items-center '>
                            <Image src={logo} alt='' className="h-full w-fit bg-cover object-center" width={100} height={100} />
                        </div>
                        <h1 className='text-2xl font-extrabold text-primary'>ClipCurve</h1>
                    </div>
                </Link>

                <ul className="flex space-x-6 font-semibold">
                    <li className={`${pathName === "/" ? "text-primary" : "text-fill"} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={`${pathName === "/case-studies" ? "text-primary" : "text-fill"} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                        <Link href={"/case-studies"}>Case Studies</Link>
                    </li>
                    <li className={`${pathName === "/testimonials" ? "text-primary" : "text-fill"} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                        <Link href={"#testimonials"}>Testimonials</Link>
                    </li>
                    <li className={`${pathName === "/faq" ? "text-primary" : "text-fill"} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                        <Link href={"/faq"}>FAQs</Link>
                    </li>
                </ul>
                <Link
                    target='_blank'
                    href={"https://calendly.com/clip-curve"}
                    className="border-2 font-extrabold text-xl border-fill px-4 py-2 shadow-xl rounded-xl hover:bg-secondary hover:text-white transition text-accent"
                >
                    Schedule Meet
                </Link>
            </nav>
        </section>

    )
}
