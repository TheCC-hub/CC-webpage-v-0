import { map } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'
import NextAndBackButtons from './nextAndBackButtons';
import iHorizontalVideo from "@/assets/icons/hVideoIcon.png"
import iVerticalVideo from "@/assets/icons/vVideoIcon.png"
import iThumbnail from "@/assets/icons/thumbnailIcon.png"
import iChannelAssist from "@/assets/icons/order-icons/channelAssist.png"
import iOtherVideo from "@/assets/icons/order-icons/otherVideo.png"
import iSquareVideo from "@/assets/icons/order-icons/squareVideo.png"
import Image from 'next/image';
import { createOrder } from '@/utils/api-requests';

export default function OrderType({ setFormData, formData, setCurrentStep }: { setFormData: any, formData: any, setCurrentStep: any }) {
    const [canMoveNext, setCanMoveNext] = useState(false);

    useEffect(() => {
        if (formData.order_type != "") {
            setCanMoveNext(true)
        }
    }, [formData])
    return (
        <div className='w-full h-full'>

            <div className='flex flex-wrap items-center justify-between gap-6 h-full w-full'>
                {OrderTypes.map((order, idx) => {
                    return (
                        <div
                            onClick={() => setFormData({ ...formData, order_type: order.title })}
                            key={idx}
                            className={`w-[31%] h-[50%] p-2 border rounded-2xl text-center content-center relative flex flex-col items-center justify-center gap-2 ${formData.order_type === order.title ? "border-primary shadow-lg bg-red-50" : ""}`}
                        >
                            <div className={`w-4 h-4 rounded-full border absolute top-4 right-4 ${formData.order_type === order.title ? "bg-primary" : "bg-gray-200"} `} />
                            <Image src={order.icon} alt='' className='w-14' />
                            <h1 className='text-xl'>{order.title}</h1>
                            <p className='text-sm'>{order.description}</p>
                        </div>
                    )
                })}
            </div>

            <NextAndBackButtons
                setCurrentStep={setCurrentStep}
                canMoveNext={canMoveNext}
                order={formData}
            // handleNext={async () => {
            //     // setFormData({ ...formData, form_stage: 2 })
            //     await createOrder(formData)
            // }}
            />

        </div>
    )
}


const OrderTypes = [
    {
        icon: iHorizontalVideo,
        title: "Horizontal Video",
        description: "Any horizontal 16:9 video. Usually for YouTube, Facebook, Vimeo, etc.",
    },
    {
        icon: iVerticalVideo,
        title: "Vertical Video",
        description: "Any vertical 9:16 video less than 3 minutes long. Usually for YouTube Shorts, Instagram Reels, or TikTok.",
    },
    {
        icon: iSquareVideo,
        title: "Square Video",
        description: "Any square 1:1 or 4:5 video. Usually for Instagram Posts",
    },
    {
        icon: iChannelAssist,
        title: "Channel Assets",
        description: "Custom Brand Intro, Endscreen, and Call to Actions that can be used in all of your YouTube videos.",
    },
    {
        icon: iThumbnail,
        title: "Thumbnail",
        description: "A custom YouTube thumbnail only, no video editing.",
    },
    {
        icon: iOtherVideo,
        title: "Other Video",
        description: "Anything else. Please contact us before submitting.",
    },
]