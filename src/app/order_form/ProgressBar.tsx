import { useState } from "react";



export default function ProgressBar({ currentStep, steps }: { currentStep: number, steps: string[] }) {

    return (
        <div className="min-h-fit flex items-start relative w-[400px]">

            {/* Progress Bar */}
            < div className="flex flex-col items-start justify-center h-full ml-6  gap-y-7" >
                {
                    steps.map((step, index) => (
                        <div key={index} className="flex items-start justify-start relative">
                            {/* Step Indicator */}
                            <div className="flex gap-4 items-start justify-start">
                                <div
                                    className={`w-5 h-5 z-10  flex items-center justify-center rounded-full border-2
                                         ${index === currentStep
                                            ? "bg-gray-400 border-[#00E6D3]"
                                            : index < currentStep
                                                ? "bg-[#009688] border-[#1DE9B6]"
                                                : "bg-white border-gray-300"
                                        }`}
                                />
                                <div
                                    className={`whitespace-nowrap 
                                        ${index === currentStep ?
                                            "text-white font-bold"
                                            : index < currentStep
                                                ? "text-[#E0F7FA] font-bold"
                                                : "text-[#F0F4F8]"
                                        } `}
                                >
                                    {step}
                                </div>
                            </div>
                            {/* Line Above Circle */}
                            {index !== 0 && (
                                <div
                                    className={`w-0.5 h-14 -top-10 left-[9px] absolute ${index <= currentStep ? "bg-[#1DE9B6]" : "bg-white"
                                        }`}
                                />
                            )}

                        </div>
                    ))
                }
            </div >
        </div>
    );
}