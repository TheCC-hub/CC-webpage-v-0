
import { createOrder } from '@/utils/api-requests'
import React, { useRef } from 'react'
import isEqual from "lodash.isequal";

export default function NextAndBackButtons({ setCurrentStep, canMoveNext, order, handleNext, nextbuttonName }: any) {
    const lastSavedRef = useRef(order)


    const updateIdDataChanges = (order: any) => {
        if (!isEqual(order, lastSavedRef.current)) {
            // 🔄 Data changed, call update
            console.log("Data changed → calling update function...");
            createOrder(order);
            lastSavedRef.current = order; // update reference
        } else {
            console.log("No changes detected → skipping update");
        }

        // // Then move to next step
        // setFormData(prev => ({
        //     ...prev,
        //     form_stage: prev.form_stage + 1
        // }));
    };

    return (
        <div className=" flex w-full absolute bottom-0 left-0 items-center justify-between px-10 py-5" >
            <button
                className="px-4 py-2 bg-gray-400 text-white rounded"
                onClick={() => setCurrentStep((prev: number) => Math.max(prev - 1, 0))}
            >
                Back
            </button>
            <button
                className="px-4 py-2 bg-primary text-white rounded"
                onClick={() => {
                    if (handleNext) {
                        handleNext(order)
                    } else {
                        updateIdDataChanges(order)
                    }
                    setCurrentStep((prev: number) => Math.min(prev + 1, 9 - 1))
                }
                }
                disabled={!canMoveNext}

            >
                {nextbuttonName ? nextbuttonName : "Next"}
            </button>
        </div >
    )
}
