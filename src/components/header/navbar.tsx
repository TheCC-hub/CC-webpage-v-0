import React from 'react'
import logo from "@/assets/logo/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {

    return (
        <nav className="flex justify-between items-center py-4 border-b-2 border-fill shadow-md w-full  top-0 left-0 px-20 text-text ">
            <Link href={"/"} className='flex items-center'>
                <div className='flex items-center justify-start gap-2'>
                    <div className='h-[45px] flex items-center '>
                        <Image src={logo} alt='' className="h-full w-fit bg-cover object-center" width={100} height={100} />
                    </div>
                    <h1 className='text-2xl text-text font-extrabold'>ClipCurve</h1>
                </div>
            </Link>

            <ul className="flex space-x-6 font-semibold">
                <li className="text-pred cursor-pointer hover:text-sred font-extrabold text-xl">Home</li>
                <li className="cursor-pointer hover:text-accent font-extrabold text-xl">Case Studies</li>
                <li className="cursor-pointer hover:text-accent font-extrabold text-xl">Testimonials</li>
                <li className="cursor-pointer hover:text-accent font-extrabold text-xl">FAQs</li>
            </ul>
            <button className="border-2 font-extrabold text-xl border-accent px-4 py-2 shadow-xl rounded-full hover:bg-accent hover:text-white transition">Free Consultation</button>
        </nav>
    )
}
