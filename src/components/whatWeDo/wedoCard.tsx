import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'

export default function WedoCard({ service }: { service: any }) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div
            className={'bg-white/30 backdrop-blur-sm px-8 py-4 w-[85%] rounded-2xl flex flex-col h-auto border-4 border-primary'}
        >
            <div className='flex items-center justify-end w-full relative h-12 ' onClick={() => setIsOpen(!isOpen)}>
                <div className={`flex items-center gap-6 absolute top-0 left-0 transition-all duration-500`}
                >
                    <div className='w-12'>
                        <Image src={service.icon} alt='' />
                    </div>
                    <h1 className='text-[28px] font-semibold'>{service.name}</h1>
                </div>

                <button className='' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </button>
            </div>

            {/* {
                isOpen && */}
            <div className='mt-5 flex flex-col gap-4 text-justify h-auto transform ease-in-out duration-800'

            >
                {service?.description.map((para: string, idx: number) => (
                    <p className='text-xl text-justify' key={idx}>{para}</p>
                ))}

                {service?.samples?.videos &&
                    <div className='flex flex-wrap gap-x-20 gap-y-8 items-center justify-center'>
                        {service.samples.videos.map((url: string, idx: number) => (
                            <div className={`relative  w-[${service?.samples?.aspactRatio?.width}px] h-[${service?.samples?.aspactRatio?.height}px] overflow-hidden rounded-xl items-center flex justify-center`} key={idx}>
                                <iframe src={url} width={service.samples.aspactRatio.width} height={service.samples.aspactRatio.height} allow="autoplay"></iframe>
                            </div>
                        ))}

                    </div>}
                {service?.samples?.images &&
                    <div className='flex flex-wrap gap-x-8 gap-y-8 items-center justify-center'>
                        {service?.samples?.images.map((url: string, idx: number) => (
                            <div className={`relative  w-[300px] overflow-hidden rounded-xl items-center flex justify-center`} key={idx}>
                                <Image src={url} alt='' className='w-full' width={1000} height={1000}></Image>
                            </div>
                        ))}
                    </div>}
            </div>
            {/* } */}


        </div>
    )
}
