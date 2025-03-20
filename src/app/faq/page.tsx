import React from 'react'
import { FAQs } from '@/data/faq.data'

export default function FaqPage() {
    return (
        <div className='w-full flex items-start justify-center text-white bg-secondary'>
            <div className='w-[60%] px-20 pt-20  min-h-full mt-20'>
                <h1 className='text-4xl font-bold'>FAQs! 🙋</h1>

                <p className='mt-4'>Got questions? We've got answers!</p>
            </div>

            <div className='bg-fill pl-5 pr-20 pt-40 py-20 text-left items-start justify-start flex min-h-full flex-col w-auto border-l border-pred'>
                <h1 className='text-4xl font-bold text-center'>Frequently Asked Questions</h1>

                <div className='mt-8 flex flex-col items-center justify-start gap-0'>
                    {FAQs.map((faq, index) => (
                        <div key={index} className='mt-10 text-left'>
                            <h2 className='text-xl font-semibold text-justify'>Q{index + 1} | {faq.question}</h2>
                            <div className='mt-4 text-justify ml-2'>
                                {faq.answer.map((ans, index) => (
                                    <p key={index} className='mt-2 line-'>{ans}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
