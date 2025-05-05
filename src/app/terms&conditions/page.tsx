
import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="w-full§ flex items-start justify-center relative">
            <div className="container mx-auto max-w-3xl px-6 py-36">
                <h1 className="text-3xl font-bold text-center mb-6 text-primary">Terms and Conditions</h1>
                <p className="text-gray-300 mb-4">Last Updated - 01/01/2025</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Agreement Overview</h2>
                    <p>
                        This Terms of Use constitutes a legally binding agreement between ClipCurve and the Customer ("Customer").
                        Failure to agree to these terms results in prohibition of service use, requiring immediate discontinuation.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Service Plans</h2>
                    <ul className="list-disc pl-6">
                        <li>
                            <strong>Elite :</strong> Up to fifteen reels and two long-form videos per month, basic reels with attractive elements.
                        </li>
                        <li>
                            <strong>Dominate :</strong> 5 additional reels, 2 more long-forms, and thumbnails with these videos.
                        </li>
                        <li>
                            <strong>Mastery :</strong> Assigns one dedicated editor/animator and one content strategist, working on two requests concurrently.
                        </li>
                    </ul>
                    <p>All plans are customizable as per the creator’s needs.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Cancellation and Renewal Policy</h2>
                    <p>
                        Customers must cancel their service at least seven days before renewal to avoid charges. Failure to cancel on time results in non-refundable charges.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Pricing & Refund Policy</h2>
                    <p>
                        Subscriptions can be canceled at any time, but no refunds are offered. Customers will continue to receive services until the end of the billing cycle.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Intellectual Property Rights</h2>
                    <p>
                        ClipCurve retains ownership of service content, but custom-created works are owned by the customer upon full payment.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Prohibited Activities</h2>
                    <ul className="list-disc pl-6">
                        <li>Reselling, redistributing, or exploiting content without authorization.</li>
                        <li>Using services in a way that infringes on intellectual property rights.</li>
                        <li>Engaging in illegal, fraudulent, or third-party rights-violating activities.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
                    <p>
                        These Terms of Use are governed by the laws of India, without regard to conflict of law principles.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <p>Email us at: <a href="mailto:theclipcurve@gmail.com" className="text-blue-500">theclipcurve@gmail.com</a> | <a href="mailto:theclipcurve@gmail.com" className="text-blue-500">theclipcurve@gmail.com</a></p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;