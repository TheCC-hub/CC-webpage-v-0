"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/assets/logo/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import ThemeButton from '../ThemeButton'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FaRegUser } from 'react-icons/fa6'

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const { data: session } = useSession()
    const pathName = usePathname();


    // hide and show navbar 
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
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
            <span className="absolute top-3 right-5 z-50">
                <ThemeButton />
            </span>

            <nav className="flex justify-between items-center py-3 border-b-[0.1px] border-black dark:border-white border-text shadow-md w-full top-0 left-0 px-20 backdrop-blur-sm">
                <div className='flex items-center justify-center gap-x-8'>

                    <Link href={"/"}>
                        <div className='w-[55px] flex items-center '>
                            <Image src={logo} alt='' className="h-full w-full bg-cover object-center" width={1000} height={1000} />
                        </div>
                    </Link>

                    <ul className="flex space-x-8 text-lg items-center">
                        <li className={`${pathName === "/" ? "text-primary" : ""} cursor-pointer hover:text-accent`}>
                            <Link href={"/"}>CC</Link>
                        </li>
                        <li className={`${pathName === "/#services" ? "text-primary" : ""} cursor-pointer hover:text-accent`}>
                            <Link href={"/#services"}>Services</Link>
                        </li>
                        <li className={`${pathName === "/case-studies" ? "text-primary" : ""} cursor-pointer hover:text-accent`}>
                            <Link href={"/case-studies"}>Case Studies</Link>
                        </li>
                        <li className={`${pathName === "/price" ? "text-primary" : ""} cursor-pointer hover:text-accent`}>
                            <Link href={"/price"}>Pricing</Link>
                        </li>
                        {/* <li className={`${pathName === "/testimonials" ? "text-primary" : ""} cursor-pointer hover:text-accent`}>
                            <Link href={"/#testimonials"} >Testimonials</Link>
                        </li> */}
                        <li className={`${pathName === "/about" ? "text-primary" : ""} cursor-pointer hover:text-accent`}>
                            <Link href={"/about"}>About us</Link>
                        </li>
                        <li className={`${pathName === "/faq" ? "text-primary" : ""} cursor-pointer hover:text-accent`}>
                            <Link href={"/faq"}>FAQs</Link>
                        </li>
                    </ul>
                </div>

                {/* <Link
                    href={"/dashboard"}
                    className="border-2 font-bold text-xl border-black dark:border-white px-4 py-1 shadow-xl rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition text-black dark:text-white"
                >
                    Dashboard
                </Link> */}
                {session && session?.user?.email ? (
                    <div className='flex items-center justify-center gap-3 relative'>
                        <span className="text-lg font-semibold">Hi, {session?.user?.name?.split(" ")[0]}</span>

                        <div
                            onClick={() => setIsPopupOpen(!isPopupOpen)}
                            className='w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:border-2 border-primary'
                        >
                            {session?.user?.image ?
                                <Image src={session?.user?.image} alt='icon' width={500} height={500} /> :
                                <FaRegUser />
                            }
                        </div>
                        {isPopupOpen &&
                            <div className='absolute -bottom-12 -right-5 bg-white p-2 rounded'>
                                <button
                                    onClick={() => signOut()}
                                    className='bg-gray-200 px-2 py-1'
                                >
                                    Logout
                                </button>
                            </div>}
                    </div>
                ) :
                    <button
                        onClick={() => signIn("google")}
                        className="border-2 font-bold text-xl border-black dark:border-white px-4 py-1 shadow-xl rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition text-black dark:text-white"
                    >
                        Login
                    </button>
                }


            </nav>
        </section>

    )
}
