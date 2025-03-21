import React from 'react'
import { FAQs } from '@/data/faq.data'
import bgLine from "@/assets/bg/bg-lines.png"
import Image from "next/image";
import Background from '@/components/boubble-background';

export default function FaqPage() {
    return (
        <div className='w-full flex items-start justify-center relative'>
            <div className="absolute bottom-0 left-0 h-full -z-10 ">
                <Image src={bgLine} alt="" className="h-full opacity-50" width={1000} height={1000} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Background />
            </div>

            <div className='w-[60%] px-20 pt-16  min-h-full mt-20'>
                <h1 className='text-4xl font-bold'>FAQs! 🙋</h1>

                <p className='mt-4'>Got questions? We've got answers!</p>
            </div>

            <div className=' pl-5 pr-20 mt-32 pt-5 pb-20 text-left items-start justify-start flex min-h-full flex-col w-auto border-l border-black dark:border-white'>
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
