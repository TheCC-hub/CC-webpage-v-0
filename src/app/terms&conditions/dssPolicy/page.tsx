
import React from "react";

const ShippingPolicy = () => {
    return (
        <div className="w-full§ flex items-start justify-center relative">
            <div className="container w-full p-8 max-w-3xl py-36 relative">
                <h1 className="text-3xl font-bold mb-4 text-primary">Digital Services Shipping Policy</h1>
                <p className="text-gray-300">ClipCurve - Shipping Policy</p>
                <p className="text-gray-0">Last Updated - 01/01/2025</p>

                <p className="mt-4">
                    ClipCurve provides digital services only and does not deal with physical products.
                </p>

                <h2 className="text-xl font-semibold mt-6">Service Delivery</h2>
                <p>
                    Digital assets, including video content, reels, and thumbnails, are delivered through designated platforms (Monday.com, Frame.io).
                    Customers will receive content as per their service plan.
                </p>

                <h2 className="text-xl font-semibold mt-6">Turnaround Time</h2>
                <p>
                    Initial work begins within 2-3 business days after a request.
                    Revisions must be requested within 48 hours of delivery, after which the work is considered automatically accepted.
                </p>

                <h2 className="text-xl font-semibold mt-6">Service Modifications & Customization</h2>
                <p>
                    All service plans are customizable based on the creator's needs.
                    ClipCurve reserves the right to enhance or modify services at its discretion.
                </p>

                <h2 className="text-xl font-semibold mt-6">Non-Delivery Policy</h2>
                <p>
                    In the unlikely event that ClipCurve is unable to deliver content due to unforeseen circumstances, customers will be notified, and an appropriate solution will be provided.
                </p>

                <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
                <p>
                    For any service-related concerns, please contact <a href="mailto:theclipcurve@gmail.com" className="text-blue-600 underline">theclipcurve@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default ShippingPolicy;
