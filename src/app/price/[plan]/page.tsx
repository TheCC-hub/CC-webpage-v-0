"use client"
import { useState } from "react";
import { CalendarIcon, Contact, Currency, LockIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { signIn, signOut, useSession } from "next-auth/react";


declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function Checkout() {
    const [startDate, setStartDate] = useState("23/02/2025");

    const [isLogedin, setIsLogedin] = useState(false);
    const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const pathName = usePathname()

    const AMOUNT = 100;

    async function handlePayment() {
        setIsProcessing(true)
        try {
            const response = await fetch("/api/create-order", { method: "POST" });
            const data = await response.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: AMOUNT * 100,
                Currency: "INR",
                name: "ClipCurve",
                description: "Test Transaction",
                order_id: data.orderID,
                handler: function (request: any) {
                    console.log("payment successfull", response);
                },
                prefill: {
                    name: "Abhi",
                    email: "adiabhiraj141@gmail.com",
                    contact: "1234567890"
                },
                theme: {
                    color: "#3399cc"
                },

            }
            const rzp1 = new window.Razorpay(options);
            rzp1.open()
        } catch (error) {
            console.log("payment faile", error)
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <div className="flex justify-center items-start min-h-screen p-6 bg-gradient-to-r from-pink-100 to-blue-100 text-black/70">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl w-full">
                <h2 className="text-2xl text-black/60 font-bold mb-6">Checkout</h2>
                {/* Sign Up Section */}
                <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-medium flex items-center gap-2">
                            {isLogedin ? "✅" : "1"} <span>Sign Up</span>
                        </p>
                    </div>
                    {isLogedin ?
                        <p className="text-gray-500 mt-2">Logged in as <b>adiabhiraj000@gmail.com</b></p> :
                        <p className="text-gray-500 mt-2">To purchase this plan and use its benefits in the future, log in to your account or sign up.</p>
                    }
                    {isLogedin ?
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <button onClick={() => signOut()} className="py-1 text-center w-full bg-black text-white border border-black">
                                Log Out
                            </button>
                        </div> :
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <button onClick={() => signIn("google")} className="py-1 text-center w-full bg-black text-white border border-black">
                                Sign Up
                            </button>
                            <button onClick={() => signIn("google")} className="py-1 text-center w-full bg-white text-black border border-black">
                                Log In
                            </button>

                        </div>}
                </div>

                {/* Payment Section */}
                <div className="border-b pb-4 mb-4">
                    <p className="text-lg font-medium text-gray-400 flex items-center gap-2">
                        2 <span>Payment</span>
                    </p>
                    <button
                        className="w-full mt-2 bg-gray-500 text-white px-6 py-3 rounded-lg cursor-not-allowed"
                        onClick={handlePayment}
                    >
                        Buy Now
                    </button>
                </div>

                {/* Order Summary */}
                <div className="border p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold">Order summary</h3>

                    {/* Start Date Picker */}
                    <label className="block text-gray-600 mt-3 text-sm">
                        Choose a start date *
                    </label>
                    <div className="relative mt-1">
                        <input
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full border rounded-md p-2 pl-10"
                        />
                        <CalendarIcon className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                    </div>

                    {/* Package Details */}
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <p className="text-gray-800 font-medium">Kickoff Kit</p>
                            <p className="text-gray-500 text-sm">Duration: Until canceled</p>
                        </div>
                        <p className="text-gray-800 font-medium">$888.00</p>
                    </div>

                    <hr className="my-4" />

                    {/* Total Price */}
                    <div className="flex justify-between items-center text-lg font-semibold">
                        <p>Total</p>
                        <p>$888.00</p>
                    </div>
                    <p className="text-gray-500 text-sm">You will be charged monthly until canceled.</p>
                </div>

                {/* Secure Checkout Footer */}
                <div className="mt-6 flex items-center gap-2 text-gray-600 text-sm">
                    <LockIcon className="w-4 h-4" />
                    <span>Secure Checkout</span>
                </div>
            </div>
        </div>
    );
}