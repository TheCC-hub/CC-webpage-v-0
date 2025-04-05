import React, { useState } from 'react'
import NextAndBackButtons from './nextAndBackButtons';
import { createOrder } from '@/utils/api-requests';

export default function VideoFootageFrom({ setFormData, formData, setCurrentStep }: { setFormData: any, formData: any, setCurrentStep: any }) {
    const [canMoveNext, setCanMoveNext] = useState(true);


    return (
        <div className='w-full '>
            <div className=''>
                <h1 className='text-3xl'>Video Footage</h1>
                <p >What are the specifications of your raw footage?</p>
            </div>

            <div className='flex flex-col bg-white mt-10'>
                <label htmlFor="footageSize" className='text-sm font-semibold px-1 mb-1'>Raw Footage Size</label>
                <select
                    className=' px-3 py-1 rounded-lg appearance-none bg-transparent border outline-none'
                    id="footageSize"
                    value={formData?.video_footage?.raw_footage_size}
                    onChange={(e: any) => {
                        setFormData({ ...formData, video_footage: { ...formData.video_footage, raw_footage_size: e.target.value } })
                    }}
                >
                    <option value="" disabled>Select footage size</option>
                    <option value="less-20">Less than 20 GB of new footage</option>
                    <option value="20-40">20 to 40 GB of new footage</option>
                    <option value="40-60">40 to 60 GB of new footage</option>
                    <option value="60-80">60 to 80 GB of new footage</option>
                    <option value="80-100">80 to 100 GB of new footage</option>
                    <option value="100-120">100 to 120 GB of new footage</option>
                    <option value="more-120">More than 120 GB of new footage</option>
                </select>
            </div>
            <div className='flex flex-col bg-white mt-10'>
                <label htmlFor="footageSize" className='text-sm font-semibold px-1 mb-1'>Raw Footage Length</label>
                <select
                    className=' px-3 py-1 rounded-lg appearance-none bg-transparent border outline-none'
                    id="footageSize"
                    value={formData?.video_footage?.raw_footage_length || ""}
                    onChange={(e: any) => {
                        setFormData({ ...formData, video_footage: { ...formData.video_footage, raw_footage_length: e.target.value } })

                    }}
                >
                    <option value="" disabled>Select footage length</option>
                    <option value="less-60">Less than 60 minute of new footage</option>
                    <option value="60-90">60 to 90 minute of new footage</option>
                    <option value="90-120">90 to 120 minute of new footage</option>
                    <option value="120-150">120 to 150 minute of new footage</option>
                    <option value="150-180">150 to 180 minute of new footage</option>
                    <option value="180-210">180 to 210 minute of new footage</option>
                    <option value="more-210">More than 210 minute of new footage</option>
                </select>
            </div>

            <NextAndBackButtons
                setCurrentStep={setCurrentStep}
                canMoveNext={canMoveNext}
                order={formData}
            // handleNext={async () => {
            //     // setFormData({ ...formData, form_stage: 3 })
            //     await createOrder(formData)
            // }}
            />

        </div>
    )
}
