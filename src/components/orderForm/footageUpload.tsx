import React from 'react'
import NextAndBackButtons from './nextAndBackButtons'
import { FiUploadCloud } from 'react-icons/fi'
import { LuLink } from 'react-icons/lu'
import { createOrder } from '@/utils/api-requests'
import { url } from 'inspector'

export default function FootageUploadForm({ setFormData, formData, setCurrentStep }: { setFormData: any, formData: any, setCurrentStep: any }) {
    const [urlPopup, setUrlPopup] = React.useState(true)

    return (
        <div className='h-full w-full'>
            <div className=''>
                <h1 className='text-3xl'>Let's get started on your order!</h1>
                <p>Please select one of the following options to start your order!</p>
            </div>

            <div className='w-full h-full flex items-center justify-between gap-4 py-4'>
                <div className='border border-gray-400 opacity-80 bg-black/10 cursor-not-allowed rounded-xl w-full h-full flex flex-col items-center justify-center ga-2 text-center content-center'>
                    <FiUploadCloud className='text-4xl text-primary' />
                    <p className=''>Upload raw footage</p>
                    <p className='text-sm text-gray-400 mt-3'>Upload to our cloud</p>
                </div>
                <div className='border border-gray-400 rounded-xl w-full h-full flex flex-col items-center justify-center ga-2 text-center content-center'>
                    <div onClick={() => setUrlPopup(!urlPopup)} className='flex flex-col items-center justify-center gap-2 cursor-pointer'>
                        <LuLink className='text-4xl text-primary' />
                        <p className=''>Personal Storage</p>
                        <p className='text-sm text-gray-400 mt-3'>Leave a link to your own personal storage</p>
                    </div>
                    {urlPopup &&
                        <div className='mt-4 w-full' >
                            <input
                                type='text'
                                value={formData.raw_footage_url}
                                onChange={(e) => setFormData({ ...formData, raw_footage_url: e.target.value })}
                                className='border border-gray-300 rounded-md p-2 w-[60%] bg-transparent'
                                placeholder='Enter your URL here'
                            />
                            {/* <button
                                onClick={() => {
                                    setFormData({ ...formData, footage_url: uploadUrl })
                                    setUrlPopup(false)
                                }}
                                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'
                            >
                                Submit
                            </button> */}
                        </div>}

                </div>
            </div>

            <NextAndBackButtons
                setCurrentStep={setCurrentStep}
                canMoveNext={true}
                order={formData}
            // handleNext={async () => {
            //     await createOrder(formData)
            // }}
            />
        </div >
    )
}
