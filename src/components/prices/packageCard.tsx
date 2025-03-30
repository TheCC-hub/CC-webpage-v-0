import React from 'react'

export default function PackageCard({ item, bgRed }: any) {
    return (
        <div className='min-w-[400px] text-black dark:text-white bg-white/20 rounded-3xl overflow-hidden border-4 border-primary'>
            <div className={`w-full  py-5 ${bgRed ? "bg-primary text-white" : "bg-secondary text-white"}`}>
                <h1 className='text-3xl font-semibold '>{item.name}</h1>
                <p>{item.description}</p>
            </div>

            <div className='flex flex-col gap-8 pt-10 pb-10'>
                {/* price  */}
                <div className='flex flex-col items-center gap-0 relative'>
                    <div>
                        $ <span className='text-[56px] font-semibold'>{item.price}</span>
                    </div>
                    <span className='absolute -bottom-1 text-sm'>per {item.per}</span>
                </div>

                <div>✅ {item.endDelevery}</div>

                <button className='px-8 py-2 mx-auto text-xl font-bold bg-white/90 text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transform duration-300 ease-in-out'>
                    Get Start
                </button>
            </div>
        </div>
    )
}
