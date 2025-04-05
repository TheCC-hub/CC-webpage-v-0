"use client";

import { useEffect, useState } from "react";
import NextAndBackButtons from "./nextAndBackButtons";
import { createOrder } from "@/utils/api-requests";

const LogisticsForm = ({ setFormData, formData, setCurrentStep }: { setFormData: any, formData: any, setCurrentStep: any }) => {
    const [canMoveNext, setCanMoveNext] = useState(false);

    // State to manage form inputs
    const [logisticsData, setLogisticData] = useState({
        video_title: "",
        video_category: "",
        video_description: "",
        publish_date: "",
        final_length: "",
    });

    // Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // setLogisticData({ ...logisticsData, [e.target.name]: e.target.value });
        setFormData({ ...formData, logistics: { ...formData.logistics, [e.target.name]: e.target.value } });
    };




    return (
        <div className="w-full">
            {/* Title */}
            <div>
                <h2 className="text-3xl">Order Logistics</h2>
                <p className=" mb-4 cursor-pointer">
                    Tell us a bit more about your order...
                </p>
            </div>

            {/* Form */}
            <div className="space-y-4 ">
                {/* Video Title */}
                <div>
                    <label className="block text-gray-700">Video Title *</label>
                    <input
                        type="text"
                        name="video_title"
                        value={formData.logistics.video_title}
                        onChange={handleChange}
                        placeholder="What's the title of your video?"
                        className="w-full border p-2 rounded mt-1 bg-transparent"
                        required
                    />
                </div>

                {/* Video Category */}
                <div>
                    <label className="block text-gray-700">Video Category</label>
                    <input
                        type="text"
                        name="video_category"
                        value={formData.logistics.video_category}
                        onChange={handleChange}
                        placeholder="Gaming, cooking, talking head, video essay, etc."
                        className="w-full border p-2 rounded mt-1 bg-transparent"
                    />
                </div>

                {/* Video Description */}
                <div>
                    <label className="block text-gray-700">Video Description</label>
                    <textarea
                        name="video_description"
                        value={formData.logistics.video_description}
                        onChange={handleChange}
                        placeholder="What's the video about?"
                        className="w-full border p-2 rounded mt-1 h-24 resize-none bg-transparent"
                    ></textarea>
                </div>

                {/* Publish Date */}
                <div>
                    <label className="block text-gray-700">Publish Date</label>
                    <input
                        type="date"
                        name="publish_date"
                        value={formData.logistics.publish_date}
                        onChange={handleChange}
                        className="w-full border p-2 rounded mt-1 bg-transparent"
                    />
                </div>

                {/* Final Length */}
                <div>
                    <label className="block text-gray-700">Final Length *</label>
                    <input
                        type="text"
                        name="final_length"
                        value={formData.logistics.final_length}
                        onChange={handleChange}
                        placeholder="How long should the final version be?"
                        className="w-full border p-2 rounded mt-1 bg-transparent"
                        required
                    />
                </div>


            </div>

            <NextAndBackButtons
                setCurrentStep={setCurrentStep}
                canMoveNext={true}
                order={formData}
            // handleNext={async () => {
            //     await createOrder(formData)
            //     return
            // }}
            />

        </div>
    );
};

export default LogisticsForm;