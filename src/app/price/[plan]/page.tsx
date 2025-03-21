"use client"
import { useEffect, useState } from "react";
import { CalendarIcon, Loader, Loader2, LoaderPinwheel, LockIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { signIn, signOut, useSession } from "next-auth/react";
import SignupPopup from "@/components/auth/signup";
import LoginPopup from "@/components/auth/login";
import { isFutureOrToday } from "@/utils/helper-functions";
import Background from "@/components/boubble-background";

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function Checkout() {
    const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [popup, setPopup] = useState("");
    const [isFuture, setIsFuture] = useState<boolean>(false);

    const pathName = usePathname()
    const split = pathName.split("/");

    const planDetails = plans.filter((item) => String(item.id) === split[split.length - 1])
    console.log(pathName, planDetails)

    const { data: session } = useSession();
    console.log(session)

    const handleMail = async () => {
        try {
            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: session?.user?.email,
                    name: session?.user?.name,
                    amount: "888", // or dynamic value
                }),
            });

            const data = await response.json();
            console.log(data)
            alert("Payment successful & email sent!")

        } catch (error) {
            console.error(error)
        }
    }

    async function handlePayment() {

        setIsProcessing(true)
        try {
            const response = await fetch("/api/create-order", { method: "POST" });
            const data = await response.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: planDetails[0].price * 100,
                Currency: "INR",
                name: session ? session?.user?.name : "",
                description: "Test Transaction",
                order_id: data.orderID,
                handler: async function (request: any) {
                    console.log("payment successfull", response);
                    await handleMail();
                    setIsProcessing(false)
                },
                prefill: {
                    name: session ? session?.user?.name : "",
                    email: session ? session?.user?.email : "",
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
            setIsProcessing(false)
        }
    }

    const handleBuyNow = async () => {
        if (!isFuture) return

        await handlePayment()
    }

    useEffect(() => {
        setIsFuture(isFutureOrToday(startDate));
    }, [startDate]);


    return (
        <div className="flex justify-center items-start min-h-screen p-6 relative from-sred via-text to-sred text-black/70">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Background />
            </div>

            {isProcessing && <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center">
                <Loader2 className="text-white animate-spin" />
            </div>}

            <div className="bg-white/60 dark:bg-white/85 p-8 rounded-xl shadow-lg max-w-3xl w-full mt-28">
                <h2 className="text-2xl text-black/60 font-bold mb-6">Checkout</h2>
                {/* Sign Up Section */}
                <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-medium flex items-center gap-2">
                            {session && session?.user?.name ? <span>✅ Hi, {session?.user?.name}</span> : <span>1 Sign Up</span>}
                        </p>
                    </div>
                    {session && session?.user?.name ?
                        <p className="text-gray-500 mt-2">Logged in as <b>{session?.user?.email}</b></p> :
                        <p className="text-gray-500 mt-2">To purchase this plan and use its benefits in the future, log in to your account or sign up.</p>
                    }
                    {session && session?.user?.name ?
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <button onClick={() => signOut()} className="py-1 text-center w-full bg-black text-white border border-black">
                                Log Out
                            </button>
                        </div> :
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <button onClick={() => setPopup("signup")} className="py-1 text-center w-full bg-black text-white border border-black">
                                Sign Up
                            </button>
                            <button onClick={() => setPopup("login")} className="py-1 text-center w-full bg-white text-black border border-black">
                                Log In
                            </button>

                        </div>}
                </div>
                {popup === "signup" && <SignupPopup setPopup={setPopup} />}
                {popup === "login" && <LoginPopup setPopup={setPopup} />}

                {/* Payment Section */}
                <div className="border-b pb-4 mb-4">
                    <p className="text-lg font-medium text-black flex items-center gap-2">
                        Payment
                    </p>
                    <button
                        className="w-full mt-2 bg-gray-500 hover:bg-gray-800 text-white px-6 py-3 rounded-lg"
                        onClick={handleBuyNow}
                        disabled={session && session?.user?.name ? false : true}
                    >
                        Buy Now
                    </button>
                </div>

                {/* Order Summary */}
                <div className={`"border p-4 rounded-lg shadow-sm`}>
                    <h3 className="text-lg font-semibold">Order summary</h3>

                    {/* Start Date Picker */}
                    <label className="block text-gray-600 mt-3 text-sm">
                        Choose a start date *
                    </label>
                    <div className="relative mt-1">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className={`w-full border rounded-md p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" ${!isFuture ? "border-red-500" : "border-gray-300"}`}
                            required
                        />
                        <CalendarIcon className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                    </div>

                    {/* Package Details */}
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <p className="text-gray-800 font-medium">{planDetails[0].name}</p>
                            <p className="text-gray-500 text-sm">Duration: Until canceled</p>
                        </div>
                        <p className="text-gray-800 font-medium">${planDetails[0].price}</p>
                    </div>

                    <hr className="my-4" />

                    {/* Total Price */}
                    <div className="flex justify-between items-center text-lg font-semibold">
                        <p>Total</p>
                        <p>${planDetails[0].price}</p>
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

const plans = [
    {
        id: 1,
        name: "Kickoff Kit",
        price: 888.00,
    },
    {
        id: 2,
        name: "Rise Up",
        price: 1776.00,
    },
    {
        id: 3,
        name: "Mastery Move",
        price: 2664.00,
    },
]