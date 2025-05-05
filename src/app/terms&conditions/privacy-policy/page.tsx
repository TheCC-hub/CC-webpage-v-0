
import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="w-full§ flex items-start justify-center relative">
            <div className="container w-full p-8 max-w-3xl py-36 relative">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-gray-300">Last Updated - 01/01/2025</p>

                <p className="mt-4">
                    ClipCurve values your privacy and is committed to protecting your personal data.
                    This Privacy Policy explains how we collect, use, and protect your information when you use our services.
                </p>

                <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>Payment details for processing transactions.</li>
                    <li>Contact form details (Name, Email) to communicate with potential and existing customers.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>Process payments and subscriptions.</li>
                    <li>Communicate with you about services, inquiries, or support requests.</li>
                    <li>Improve our services and ensure smooth operations.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">Data Sharing</h2>
                <p>We do not share your personal data with any third parties.</p>

                <h2 className="text-2xl font-semibold mt-6">Data Retention</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>We retain customer data only while they are actively using our services.</li>
                    <li>Testimonials provided by customers may be retained indefinitely.</li>
                    <li>Users can request data deletion upon canceling services.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
                <p>
                    You may request to access, update, or delete your personal data at any time by contacting us at
                    <a href="mailto:theclipcurve@gmail.com" className="text-blue-600"> theclipcurve@gmail.com</a>.
                </p>

                <h2 className="text-2xl font-semibold mt-6">Legal Compliance</h2>
                <p>We comply with applicable data protection laws, including GDPR, CCPA, and India's IT Act.</p>

                <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
                <p>
                    For any privacy-related concerns, please contact us at
                    <a href="mailto:theclipcurve@gmail.com" className="text-blue-600"> theclipcurve@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;