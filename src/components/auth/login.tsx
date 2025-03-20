import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPopup({ setPopup }: any) {


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

            <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
                {/* Close Button */}
                <button
                    onClick={() => setPopup("")}
                    className="absolute top-3 right-3 text-gray-600 text-lg">
                    ✕
                </button>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Login</h2>

                {/* Google Sign-Up */}
                <button onClick={() => signIn("google")} className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 mb-4">
                    <FcGoogle className="text-xl mr-2" />
                    Login with Google
                </button>

                <div className="border-t border-gray-300 my-4"></div>

                {/* Email & Password Signup */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-gray-400"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md mb-4 focus:outline-none focus:ring focus:border-gray-400"
                />

                <button className="w-full bg-gray-700 text-white py-2 rounded-md">
                    Create Account
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Create account!{" "}
                    <span onClick={() => setPopup("signup")} className="text-blue-600">Sign up</span>
                </p>
            </div>
        </div>
    );
}
