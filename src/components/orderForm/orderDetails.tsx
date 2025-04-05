"use client";

import { useEffect, useState } from "react";
import NextAndBackButtons from "./nextAndBackButtons";
import { createOrder } from "@/utils/api-requests";

const VideoDetailsForm = ({ setFormData, formData, setCurrentStep }: { setFormData: any, formData: any, setCurrentStep: any }) => {

    // Handle input changes
    const handleChange = (e: any) => {
        setFormData({ ...formData, order_details: { ...formData.order_details, [e.target.name]: e.target.value } })
    };


    return (
        <div className="w-full mx-auto">
            {/* Title */}
            <h2 className="text-2xl font-bold">Your video details</h2>
            <p className="text-gray-600">Tell us more about the context of your video.</p>

            {/* Rich Text Editor */}
            <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-2">How do you want us to edit the video?</label>
                <textarea
                    name="instruction_by_client"
                    value={formData.order_details.instruction_by_client}
                    onChange={handleChange}
                    placeholder="Type here"
                    className="w-full border p-3 rounded-lg bg-gray-100 placeholder-gray-400"
                />
            </div>

            {/* Example Videos */}
            <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-2">Example Videos</label>
                <input
                    type="text"
                    name="example_videos"
                    value={formData.order_details.example_videos}
                    onChange={handleChange}
                    placeholder="Leave example video links for us to draw inspiration from."
                    className="w-full border p-3 rounded-lg bg-gray-100 placeholder-gray-400"
                />
            </div>

            {/* Script Link */}
            <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-2">Script Link</label>
                <input
                    type="text"
                    name="script_link"
                    value={formData.order_details.script_link}
                    onChange={handleChange}
                    placeholder="If you have a script, leave a link here or include it with your raw footage."
                    className="w-full border p-3 rounded-lg bg-gray-100 placeholder-gray-400"
                />
            </div>
            <NextAndBackButtons
                setCurrentStep={setCurrentStep}
                canMoveNext={true}
                order={formData}
            // handleNext={async () => {
            //     // setFormData({ ...formData, form_stage: 6 })
            //     await createOrder(formData)
            // }}
            />

        </div>
    );
};

export default VideoDetailsForm;