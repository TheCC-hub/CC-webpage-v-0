import React from 'react'
import PackageCard from './packageCard'


export default function PackageSection({ tabData }: any) {
    return (
        <div className=''>

            <div className='text-justify'>
                {tabData.description.map((item: any, idx: number) => (
                    <p className="text-xl mb-2" key={idx}>{item}</p>
                ))}
            </div>

            <div className='mt-10 flex items-center justify-evenly gap-4 flex-wrap relative w-full'>
                {tabData?.packages?.map((item: any, idx: number) => {


                    return (<PackageCard item={item} key={idx} bgRed={idx === tabData?.packages.length - 1} />)
                })}

            </div>
        </div>
    )
}
