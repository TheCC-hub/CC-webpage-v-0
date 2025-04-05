import React from "react";
import { CheckCircle, XCircle, Video, FileText, ClipboardList, Link2 } from "lucide-react";
import { OrderInterface } from "@/types/order.type";
import NextAndBackButtons from "./nextAndBackButtons";
import { createOrder } from "@/utils/api-requests";
import { redirect } from "next/navigation";


const OrderSummary = ({ setFormData, formData, setCurrentStep }: { setFormData: any, formData: any, setCurrentStep: any }) => {
    return (
        <div className="overflow-hidden h-full w-full overflow-y-scroll">
            <div className="w-full mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">🎬 Order Summary</h2>
                    <span className="text-sm text-gray-600">Form Stage: {formData.form_stage ?? "N/A"}</span>
                </div>

                {/* Core Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard label="Order ID" value={formData.order_id} />
                    <InfoCard label="Order Type" value={formData.order_type} />
                    <InfoCard label="Video Pace" value={formData.video_pace} />
                    <InfoCard label="Raw Footage URL" value={formData.raw_footage_url ? <a className="text-blue-500 underline" href={formData.raw_footage_url} target="_blank">View</a> : "Not Uploaded"} />
                </div>

                {/* Video Footage */}
                <Section title="📹 Video Footage">
                    <TwoColList items={[
                        { label: "Raw Footage Size", value: formData.video_footage.raw_footage_size },
                        { label: "Raw Footage Length", value: formData.video_footage.raw_footage_length }
                    ]} />
                </Section>

                {/* Add-ons */}
                <Section title="🛠️ Add-ons">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {formData.add_ons.map((addon: any, i: number) => (
                            <li key={i} className="bg-white p-3 rounded-md shadow border">
                                <span className="font-medium">{addon.title}</span>
                                <div className="text-sm text-gray-500">x {addon.number}</div>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Logistics */}
                <Section title="🚚 Logistics">
                    <TwoColList items={[
                        { label: "Video Title", value: formData.logistics.video_title },
                        { label: "Category", value: formData.logistics.video_category },
                        { label: "Description", value: formData.logistics.video_description },
                        { label: "Publish Date", value: formData.logistics.publish_date },
                        { label: "Final Length", value: formData.logistics.final_length }
                    ]} />
                </Section>

                {/* Tone */}
                <Section title="🎭 Video Tone">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {Object.entries(formData.video_tone).map(([key, value]) => (
                            <li key={key} className={`flex items-center gap-2 p-2 rounded-md ${value ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                                {value ? <CheckCircle size={16} /> : <XCircle size={16} />}
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Order Details */}
                <Section title="📄 Order Details">
                    <div className="space-y-2">
                        <DetailRow icon={<ClipboardList size={16} />} label="Instructions" value={formData.order_details.instruction_by_client} />
                        <DetailRow icon={<Video size={16} />} label="Example Videos" value={formData.order_details.example_videos} />
                        <DetailRow icon={<Link2 size={16} />} label="Script Link" value={
                            <a className="text-blue-500 underline" href={formData.order_details.script_link} target="_blank">{formData.order_details.script_link}</a>
                        } />
                    </div>
                </Section>
            </div>
            <NextAndBackButtons
                setCurrentStep={setCurrentStep}
                canMoveNext={true}
                order={formData}
                nextbuttonName="Submit Order"
                handleNext={async () => {
                    if (formData.order_type === "" || formData.logistics.final_length === "" || formData.logistics.video_title === "" || formData.video_pace === "" || formData.raw_footage_url === "") {
                        alert("Please fill all the required fields")
                        return
                    }
                    try {
                        const res = await createOrder({ ...formData, status: "completed" });
                        if (res?.ok) {
                            alert("Order created successfully");
                            // redirect("/");
                        }
                    } catch (error) {
                        console.error("Error creating order:", error);
                    }
                    return
                }}
            />
        </div>

    );
};


// Reusable components
const InfoCard = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="bg-white p-4 shadow rounded-md border">
        <div className="text-xs text-gray-500">{label}</div>
        <div className="font-semibold">{value}</div>
    </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div>{children}</div>
    </div>
);

const TwoColList = ({ items }: { items: { label: string; value: string }[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {items.map((item, i) => (
            <div key={i} className="text-sm">
                <div className="text-gray-600 font-medium">{item.label}</div>
                <div className="text-gray-800">{item.value || "—"}</div>
            </div>
        ))}
    </div>
);

const DetailRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) => (
    <div className="flex items-start gap-2 text-sm">
        <div className="mt-1">{icon}</div>
        <div>
            <div className="font-medium">{label}</div>
            <div className="text-gray-700">{value}</div>
        </div>
    </div>
);

export default OrderSummary;