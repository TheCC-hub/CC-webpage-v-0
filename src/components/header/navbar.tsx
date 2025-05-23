"use client"
import React from 'react'
import logo from "@/assets/logo/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { GlowingButton } from '../button'
import { redirect } from 'next/navigation'
import { scrollToElementById } from '@/utils/utils'

export default function Navbar() {
    return (
        <>
            <nav className="flex md:justify-end justify-between items-center md:py-8 py-3 w-full md:px-28 sm:px-10 px-4 relative">


                <Link href={"/"} className='flex items-center justify-center gap-2 md:absolute relative md:left-[108px]'>
                    <div className='md:w-[50px] w-[36px] flex items-center hover:w-[70px] transform ease-out duration-300 '>
                        <Image src={logo} alt='' className="h-full w-full bg-cover object-center" width={100} height={100} />
                    </div>
                    <h1 className='md:text-2xl text-xl hover:text-3xl transform ease-out duration-300 font-semibold hover:text-primary'>ClipCurve</h1>
                </Link>


                <div className="space-x-8 items-center flex">
                    <div onClick={() => scrollToElementById("what-we-do")} className='hidden sm:block cursor-pointer transform duration-300 ease-in-out hover:text-lg hover:text-primary'>What we Do</div>
                    <div onClick={() => scrollToElementById("pricing")} className='hidden sm:block cursor-pointer transform duration-300 ease-in-out hover:text-lg hover:text-primary'>Prices</div>
                    <Link href={"/about"} className='hidden sm:block cursor-pointer transform duration-300 ease-in-out hover:text-lg hover:text-primary'>About Us</Link>
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
                    }}
                        className='sm:text-lg text-sm'
                    />
                </div>
            </nav>
        </>


    )
}
