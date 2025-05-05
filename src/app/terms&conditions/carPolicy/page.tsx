
import React from "react";

const CancellationRefundPolicy = () => {
    return (

        <div className="w-full§ flex items-start justify-center relative">
            <div className="container w-full p-8 max-w-3xl py-36 relative">
                <h1 className="text-3xl font-bold text-center mb-4 text-primary">Cancellation and Refund Policy</h1>
                <p className="text-center text-sm text-gray-200">ClipCurve - Cancellation and Refund Policy</p>
                <p className="text-center text-sm text-gray-200 mb-6">Last Updated - 01/01/2025</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Cancellation Policy</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>Customers may cancel their subscription at any time.</li>
                        <li>Cancellations must be made at least seven days before renewal to avoid charges for the next billing cycle.</li>
                        <li>Customers will continue to receive their full content allocation for the remainder of their billing cycle, even after canceling.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Refund Policy</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>No refunds are provided once a subscription is active.</li>
                        <li>Exception: Refunds will be issued only in cases of duplicate charges or billing errors.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Access to Past Work</h2>
                    <p className="mt-2">Customers retain access to past content for 30 days from the date of cancellation. After 30 days, access will be revoked unless a new subscription is purchased.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Pause Option</h2>
                    <p className="mt-2">Customers may request a temporary pause on their subscription instead of canceling.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Dispute Resolution</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>If a customer disputes a charge, we first communicate via email or video chat to clarify the situation.</li>
                        <li>If the dispute is valid (e.g., duplicate charges), we issue a full refund for the incorrect charge.</li>
                        <li>If the dispute is unjustified, we provide documentation proving the service was delivered.</li>
                    </ul>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p className="mt-2">For cancellation or refund requests, please email <a href="mailto:theclipcurve@gmail.com" className="text-blue-600 underline">theclipcurve@gmail.com</a>.</p>
                </section>
            </div>
        </div>
    );
};

export default CancellationRefundPolicy;
