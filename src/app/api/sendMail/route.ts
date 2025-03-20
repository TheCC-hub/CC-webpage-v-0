import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email, name, amount } = await req.json();

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "Gmail", // or use SMTP
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Payment Confirmation",
            html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for your payment of <strong>$${amount}</strong>.</p>
        <p>Your transaction was successful.</p>
        <p>Best Regards,<br>ClipCurve Team</p>
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
