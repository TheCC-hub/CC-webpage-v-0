
import Link from 'next/link'
import React from 'react'
export default function PackageCard({ item, bgRed }: any) {


    return (
        <div className='min-w-[400px] text-black dark:text-white bg-white/20 rounded-3xl overflow-hidden border-2 border-primary'>
            <div className={`w-full  py-5 ${bgRed ? "bg-primary text-white" : "bg-secondary text-white"}`}>
                <h1 className='text-3xl font-semibold '>{item.name}</h1>
                <p>{item.description}</p>
            </div>

            <div className='flex flex-col gap-y-10 pt-10 pb-10'>
                {/* price  */}
                <div className="flex flex-col items-center relative">
                    <div className="flex items-end gap-2 relative">
                        <span className="absolute top-2 -left-3 text-lg font-semibold">$</span>
                        <span className="text-3xl line-through">{item.price}</span>
                        <span className="text-5xl font-semibold text-primary">{item.discountedPrice}</span>
                    </div>
                    <span className="absolute -bottom-4 text-sm">per {item.per}</span>
                </div>

                <div>✅ {item.endDelevery}</div>

                <Link href={"/order_form"} className='px-8 py-2 mx-auto text-xl font-bold bg-white/90 text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transform duration-300 ease-in-out'>
                    Get Start
                </Link>
            </div>
        </div>
    )
}
