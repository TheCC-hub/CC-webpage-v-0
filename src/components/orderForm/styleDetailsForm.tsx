import React, { useEffect, useState } from 'react'
import NextAndBackButtons from './nextAndBackButtons'
import iSlow from "@/assets/icons/order-icons/snail.png"
import iMedium from "@/assets/icons/order-icons/medium.png"
import iFast from "@/assets/icons/order-icons/rabbit.png"
import Image from 'next/image'
import iFunny from "@/assets/icons/order-icons/laugh.png"
import iSerious from "@/assets/icons/order-icons/worry.png"
import iProfessional from "@/assets/icons/order-icons/businessman.png"
import iElegant from "@/assets/icons/order-icons/woman.png"
import iCasual from "@/assets/icons/order-icons/man.png"
import iInformational from "@/assets/icons/order-icons/working.png"
import iEntertaining from "@/assets/icons/order-icons/cinema.png"
import { createOrder } from '@/utils/api-requests'


const ToneIcons = [iFunny, iSerious, iProfessional, iElegant, iCasual, iInformational, iEntertaining]


export default function StyleDetailsForm({ setFormData, formData, setCurrentStep }: { setFormData: any, formData: any, setCurrentStep: any }) {
    const [canMoveNext, setCanMoveNext] = useState(true);

    return (
        <div className='w-full h-full'>
            <div>
                <h2 className="text-3xl">Pacing and Tone</h2>
                <p className="">
                    Tell us a bit more about your order...
                </p>
            </div>

            <div className='w-full flex flex-col items-center justify-between gap-6 mt-4'>
                <div className='w-full'>
                    <p className='font-semibold text-gray-500'>What should be the pacing be?</p>
                    <div className='flex items-center justify-between gap-2 h-full'>
                        {Pace.map((item, idx) => {
                            return (
                                <div
                                    onClick={() => setFormData({ ...formData, video_pace: item.pace })}
                                    key={idx}
                                    className={`w-full rounded-2xl border h-[200px] flex flex-col gap-4 items-center justify-center cursor-pointer hover:shadow-md ${formData.video_pace === item.pace ? "bg-primary/20 border-primary" : ""}`}
                                >
                                    <Image src={item.icon} alt='' className='w-12' />
                                    <p className='text-lg font-semibold'>{item.pace}</p>
                                </div>)
                        })}
                    </div>
                </div>

                <div className='w-full h-full relative'>
                    <p className='font-semibold text-gray-500'>What should be the tone be?</p>
                    <div className='flex items-center justify-between gap-2 overflow-hidden overflow-x-scroll w-full'>
                        {Object.keys(formData.video_tone).map((item: any, idx: number) => {

                            return (
                                <div
                                    onClick={() => setFormData({ ...formData, video_tone: { ...formData.video_tone, [item]: !Object.values(formData.video_tone)[idx] } })}
                                    key={idx}
                                    className={`min-w-[30%] rounded-2xl border h-[250px] flex flex-col gap-4 items-center justify-center cursor-pointer hover:shadow-md ${Object.values(formData.video_tone)[idx] ? "bg-primary/20 border-primary" : ""}`}
                                >
                                    <Image src={ToneIcons[idx]} alt='' className='w-12' />
                                    <p className='capitalize text-lg font-semibold'>{item}</p>
                                </div>)
                        })}
                    </div>
                </div>


            </div>

            <NextAndBackButtons
                setCurrentStep={setCurrentStep}
                canMoveNext={canMoveNext}
                order={formData}
            // handleNext={async () => {
            //     // setFormData({ ...formData, form_stage: 5 })
            //     await createOrder(formData)
            //     setCurrentStep((prev: number) => Math.min(prev + 1, 9 - 1))
            //     return
            // }}
            />
        </div>
    )
}



const Pace = [
    {
        icon: iSlow,
        pace: "Slow-paced"
    },
    {
        icon: iMedium,
        pace: "Medium-paced"
    },
    {
        icon: iFast,
        pace: "Fast-paced"
    }
]
