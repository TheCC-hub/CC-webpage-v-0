import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay"

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

export async function POST(req: NextRequest) {
    const data = await req.json()
    try {
        const order = await razorpay.orders.create({
            amount: data.amount * 100, // amount in cents
            currency: "USD",
            receipt: "receipt_" + Date.now(),
        });
        return NextResponse.json({ orderId: order.id }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: "Error creating order" },
            { status: 500 }
        )
    }
}