"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/assets/logo/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeButton from '../ThemeButton'
import { useSession } from 'next-auth/react'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { data: session } = useSession()

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

            <nav className="flex justify-between items-center py-4 border-b-[0.1px] border-black dark:border-white border-text shadow-md w-full top-0 left-0 px-20">
                <div className='flex items-center gap-10'>

                    <Link href={"/"} className='flex items-center'>
                        <div className='flex items-center justify-start gap-2'>
                            <div className='h-[45px] flex items-center '>
                                <Image src={logo} alt='' className="h-full w-fit bg-cover object-center" width={100} height={100} />
                            </div>
                            {/* <h1 className='text-2xl font-extrabold text-primary'>ClipCurve</h1> */}
                        </div>
                    </Link>

                    <ul className="flex space-x-8 font-semibold">
                        <li className={`${pathName === "/" ? "text-primary" : ""} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                            <Link href={"/"}>CC</Link>
                        </li>
                        <li className={`${pathName === "/case-studies" ? "text-primary" : ""} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                            <Link href={"/case-studies"}>Case Studies</Link>
                        </li>
                        <li className={`${pathName === "/testimonials" ? "text-primary" : ""} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                            <Link href={"#testimonials"}>Testimonials</Link>
                        </li>
                        <li className={`${pathName === "/faq" ? "text-primary" : ""} cursor-pointer hover:text-accent font-extrabold text-xl`}>
                            <Link href={"/faq"}>FAQs</Link>
                        </li>
                    </ul>
                </div>

                {session && session?.user?.email ? (
                    <Link
                        href={"/dashboard"}
                        className="border-2 font-bold text-xl border-black dark:border-white px-4 py-1 shadow-xl rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition text-black dark:text-white"
                    >
                        Dashboard
                    </Link>
                ) :
                    <Link
                        target='_blank'
                        href={"https://calendly.com/clip-curve"}
                        className="border-2 font-bold text-xl border-black dark:border-white px-4 py-1 shadow-xl rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition text-black dark:text-white"
                    >
                        Login
                    </Link>
                }


            </nav>
        </section>

    )
}
