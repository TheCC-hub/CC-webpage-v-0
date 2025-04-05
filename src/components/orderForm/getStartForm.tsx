import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import iNewOrder from "@/assets/icons/order-icons/order.png"
import iOldOrder from "@/assets/icons/order-icons/oldOrder.png"
import { useSession } from 'next-auth/react';
import { createOrder } from '@/utils/api-requests';
import { OrderInterface } from '@/types/order.type';
import { AddOns } from './addOnsForm';
import { formatDate } from '@/utils/helper-functions';
import { FormData } from '@/data/form.data';

export default function GetStartForm({ setFormData, formData, setCurrentStep }: { setFormData: (data: OrderInterface) => void, formData: any, setCurrentStep: any }) {
    const { data: session } = useSession()

    const [allOrders, setAllOrders] = useState<any>([])

    const getAllPendingOrders = async () => {
        try {
            const res = await fetch("/api/orders/pending", {
                method: "GET",
            })
            const data = await res.json()

            if (data.status === 200) {
                setAllOrders(data.data)
                console.log(data, "this is GET responce")
                return data.data
            } else {
                console.log("Error getting orders")
                console.log(data)
                setAllOrders([])

                return null
            }
        } catch (error) {
            return null
        }
    }

    useEffect(() => {
        const result = getAllPendingOrders()
        setAllOrders(result)
    }, [session])
    return (
        <div className='h-full w-full'>
            <div className=''>
                <h1 className='text-3xl'>Let's get started on your order!</h1>
                <p>Please select one of the following options to start your order!</p>
            </div>

            <div className='w-full h-full flex items-center justify-between gap-4 py-4'>
                {/* new order  */}
                <div
                    onClick={async () => {
                        setFormData(FormData as OrderInterface)
                        setCurrentStep(1)
                        return
                    }}
                    className='cursor-pointer hover:bg-red-50 hover:shadow-lg transform duration-300 ease-in-out hover:border-primary border border-gray-400 rounded-xl text-xl font-semibold w-full h-full text-center content-center flex flex-col items-center justify-center gap-4'
                >
                    <Image src={iNewOrder} alt='' className='w-20' />
                    New Order
                </div>

                {/* abandoned orders  */}
                <div className='transform duration-300 ease-in-out px-2 border border-gray-400 rounded-xl text-xl font-semibold w-full h-full text-center content-center flex flex-col items-center justify-center gap-4'>
                    <Image src={iOldOrder} alt='' className='w-20' />
                    Abandoned Order
                    <div className='flex flex-col w-full items-center justify-center gap-2 overflow-hidden overflow-y-scroll'>

                        {/* old orders maped */}
                        {allOrders.length > 0 ? allOrders.slice(0, 5).map((order: any, idx: number) => {
                            console.log(order, " this is order")
                            return (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center border p-4 rounded-xl w-full shadow-sm hover:shadow-md transition"
                                >
                                    <div className="flex flex-col items-start">
                                        <span className="text-lg">{order.orderType}</span>
                                        <span className="text-sm text-gray-500">Abandoned on: {formatDate(order.updatedAt)}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                            onClick={() => {
                                                setFormData({
                                                    ...formData,
                                                    order_id: order.id,
                                                    order_type: order.orderType ? order.orderType : "",
                                                    video_footage: {
                                                        raw_footage_size: order.rawFootageSiz ? order.rawFootageSize : "",
                                                        raw_footage_length: order.rawFootageLength ? order.rawFootageLength : "",
                                                    },
                                                    add_ons:
                                                        order.addOns && order.addOns.length > 0
                                                            ? order.addOns.map((item: any) => ({
                                                                title: item.title,
                                                                number: item.number,
                                                            }))
                                                            : AddOns.map(item => ({
                                                                title: item.title,
                                                                number: item.number,
                                                            })),

                                                    logistics: {
                                                        video_title: order.videoTitle ? order.videoTitle : "",
                                                        video_category: order.videoCategory ? order.videoCategory : "",
                                                        video_description: order.videoDescription ? order.videoDescription : "",
                                                        publish_date: order.publishDate ? order.publishDate : "",
                                                        final_length: order.finalLength ? order.finalLength : "",
                                                    },
                                                    video_tone: {
                                                        funny: order.funny,
                                                        serious: order.serious,
                                                        professional: order.professional,
                                                        elegant: order.elegant,
                                                        casual: order.casual,
                                                        informational: order.informational,
                                                        entertaining: order.entertaining
                                                    },
                                                    video_pace: order.videoPace ? order.videoPace : "",
                                                    order_details: {
                                                        instruction_by_client: order.instructionByClient ? order.instructionByClient : "",
                                                        example_videos: order.exampleVideos ? order.exampleVideos : "",
                                                        script_link: order.scriptLink ? order.scriptLink : ""
                                                    },
                                                    raw_footage_url: order.rawFootageUrl ? order.rawFootageUrl : "",
                                                })
                                                setCurrentStep(1)
                                            }}
                                        >
                                            Resume
                                        </button>

                                        <button
                                            className="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-gray-400"
                                            onClick={() => { console.log("delete order") }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        ) : <p className='text-lg font-semibold'>No abandoned orders</p>}
                    </div>
                </div>
            </div>

            {/* <NextAndBackButtons setCurrentStep={setCurrentStep} canMoveNext={canMoveNext} /> */}
        </div>
    )
}

