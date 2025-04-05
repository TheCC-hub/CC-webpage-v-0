"use client"
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar';
import GetStartForm from '@/components/orderForm/getStartForm';
import OrderType from '@/components/orderForm/orderType';
import VideoFootageFrom from '@/components/orderForm/videoFootageFrom';
import AddOnsForm from '@/components/orderForm/addOnsForm';
import LogisticsForm from '@/components/orderForm/logisticsForm';
import StyleDetailsForm from '@/components/orderForm/styleDetailsForm';
import VideoDetailsForm from '@/components/orderForm/orderDetails';
import FootageUploadForm from '@/components/orderForm/footageUpload';
import { OrderInterface } from '@/types/order.type';
import { FaRegUser } from 'react-icons/fa6';
import Image from 'next/image';
import NextAndBackButtons from '@/components/orderForm/nextAndBackButtons';
import { createOrder } from '@/utils/api-requests';
import OrderSummary from '@/components/orderForm/orderSummary';

export default function OrderForm() {
    const [formData, setFormData] = useState<OrderInterface>({} as OrderInterface);

    const [currentStep, setCurrentStep] = useState(formData.form_stage || 0);

    const { data: session } = useSession();



    if (!session) {
        return (<p>Login to continue</p>)
    }
    return (
        <div className='pt-20 mb-20 px-10 w-full min-h-screen h-screen text-black'>
            <div className='flex items-center bg-white rounded-2xl w-full h-full overflow-hidden'>
                {/* progress bar or form index  */}
                <div className='h-full max-w-[250px] px-4 py-6 bg-primary text-white flex flex-col items-center justify-between'>
                    <div className=''>
                        <h1 className='text-3xl'>ClipCurve</h1>
                    </div>

                    <div className='w-full flex items-center justify-center mx-10 mt-10'>
                        <ProgressBar steps={steps} currentStep={currentStep} />
                    </div>

                    <div className='w-full flex items-end justify-center mt-10'>
                        <div className='flex items-center justify-center gap-3 relative'>
                            <div
                                className='w-8 h-8 rounded-full overflow-hidden cursor-pointer hover:border-2 border-primary'
                            >
                                {session?.user?.image ?
                                    <Image src={session?.user?.image} alt='icon' width={500} height={500} /> :
                                    <FaRegUser />
                                }
                            </div>
                            <span className="text-lg font-semibold">{session?.user?.name}</span>

                        </div>
                    </div>
                </div>

                <div className='w-full h-full relative px-10 py-6'>
                    <div className='h-full w-full pb-20'>

                        {currentStep === 0 && <GetStartForm formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 1 && <OrderType formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 2 && <VideoFootageFrom formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 3 && <AddOnsForm formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 4 && <LogisticsForm formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 5 && <StyleDetailsForm formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 6 && <VideoDetailsForm formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 7 && <FootageUploadForm formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                        {currentStep === 8 && <OrderSummary formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />}
                    </div>

                </div>
            </div>
        </div>
    )
}
const steps = [
    "Start Your Order",
    "Order Type",
    "Video Footage",
    "Add Ons",
    "Logistics",
    "Style Details",
    "Order Details",
    "Footage Upload",
    "Review Order",
];

