"use client"
import React from 'react'
import logo from "@/assets/logo/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { GlowingButton } from '../button'
import { redirect } from 'next/navigation'

export default function Navbar() {
    return (
        <nav className="flex justify-end items-center py-8 w-full px-28 relative">


            <Link href={"/"} className='flex items-center justify-center gap-2 absolute left-[108px]'>
                <div className='w-[50px] flex items-center hover:w-[70px] transform ease-out duration-300 '>
                    <Image src={logo} alt='' className="h-full w-full bg-cover object-center" width={100} height={100} />
                </div>
                <h1 className='text-2xl hover:text-3xl transform ease-out duration-300 font-semibold hover:text-primary'>ClipCurve</h1>
            </Link>


            <div className="flex space-x-8 items-center">
                <Link href={"/#services"} className='transform duration-300 ease-in-out hover:text-lg hover:text-primary'>What we Do</Link>
                <Link href={"/case-studies"} className='transform duration-300 ease-in-out hover:text-lg hover:text-primary'>Prices</Link>
                <Link href={"/about"} className='transform duration-300 ease-in-out hover:text-lg hover:text-primary'>About Us</Link>
                {/* <Link href={"/faq"}>FAQs</Link> */}
                {/* <Link
                    href={"/order_form"}
                    className="border-[1.5px] font-semibold border-white hover:border-primary px-4 py-0.5 shadow-xl rounded-2xl hover:bg-white hover:text-background transform ease-in-out duration-300 text-white"
                >
                    Order Video
                </Link> */}
                <GlowingButton title="Order Video" onClick={() => {
                    if (typeof window !== 'undefined') {
                        window.open("https://dashboard.clipcurve.com", '_blank', 'noopener,noreferrer');
                    }
                }} />
            </div>
        </nav>

    )
}
