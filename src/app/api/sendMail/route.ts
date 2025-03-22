import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email, name, amount, planName } = await req.json();

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "Gmail", // or use SMTP
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + 30);

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to ClipCurve – Your Plan is Activated! 🚀",
            html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2 style="color: #ed1c31;">Hii ${name}, </h2>
                <h3> Welcome to ClipCurve! 🎉</h3>
                <p>Thank you for choosing <b>ClipCurve</b>! We're thrilled to have you on board and can't wait to help you create amazing content.</p>

                <h3>📜 Plan Details:</h3>
                <ul>
                    <li><b>Plan Name:</b> ${planName}</li>
                    <li><b>Amount:</b> ${amount}</li>
                    <li><b>Start Date:</b> ${today}</li>
                    <li><b>Renewal Date:</b> ${futureDate}</li>
                </ul>

                <h3>✅ What’s Next?</h3>
                <p>🔹 Our team will begin processing your request within 24-48 hours.</p>
                <p>🔹 You’ll receive an update on your content schedule soon.</p>
                <p>🔹 If you have any preferences, feel free to reply to this email!</p>

                <h3>📞 Need Help?</h3>
                <p>If you have any questions or need assistance, reach out to us at <a href="mailto:support@clipcurve.com">support@clipcurve.com</a>.</p>

                <p>We’re excited to be part of your content journey! 🚀</p>

                <p>Best,<br><b>The ClipCurve Team</b></p>
                <p><a href="https://clipcurve.com">Visit Our Website</a></p>
            </div>
        `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" });
    }
}
