"use client"
import React from 'react'
import logo from "@/assets/logo/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navbar() {

    const pathName = usePathname();
    console.log(pathName)
    const scrollToElementById = (id: string) => {
        if (typeof document === "undefined") return; // Prevents SSR issues in Next.js

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            console.warn(`Element with ID "${id}" not found`);
        }
    };

    return (
        <nav className="flex justify-between items-center py-4 border-b-[0.1px] border-text shadow-md w-full top-0 left-0 px-20 text-text ">
            <Link href={"/"} className='flex items-center'>
                <div className='flex items-center justify-start gap-2'>
                    <div className='h-[45px] flex items-center '>
                        <Image src={logo} alt='' className="h-full w-fit bg-cover object-center" width={100} height={100} />
                    </div>
                    <h1 className='text-2xl text-text font-extrabold'>ClipCurve</h1>
                </div>
            </Link>

            <ul className="flex space-x-6 font-semibold">
                <li className={`${pathName === "/" ? "text-pred" : "text-text"} cursor-pointer hover:text-sred font-extrabold text-xl`}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={`${pathName === "/case-studies" ? "text-pred" : "text-text"} cursor-pointer hover:text-sred font-extrabold text-xl`}>
                    <Link href={"/case-studies"}>Case Studies</Link>
                </li>
                <li className={`${pathName === "/testimonials" ? "text-pred" : "text-text"} cursor-pointer hover:text-sred font-extrabold text-xl`}>
                    <Link href={"/"} onClick={() => scrollToElementById("testimonials")}>Testimonials</Link>
                </li>
                <li className={`${pathName === "/faq" ? "text-pred" : "text-text"} cursor-pointer hover:text-sred font-extrabold text-xl`}>
                    <Link href={"/faq"}>FAQs</Link>
                </li>
            </ul>
            <button className="border-2 font-extrabold text-xl border-accent px-4 py-2 shadow-xl rounded-full hover:bg-accent hover:text-white transition">Free Consultation</button>
        </nav>
    )
}
