"use client"
import { Suspense, useState } from "react";
import { FaGoogle, FaEnvelope, FaUser, FaYoutube, FaLock, FaPlay } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo/logo1.png";
import { signIn } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SignUpForm() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const [form, setForm] = useState({
        email: "",
        fullName: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const signInWithGoogle = async () => {
        await signIn("google");
        // const params = new URLSearchParams(window.location.search);
        // params.delete("auth");
        // // window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
        // router.replace(`${pathname}?${params.toString()}`);

    }

    const redirectToLogin = () => {
        const params = new URLSearchParams(window.location.search);
        params.set("auth", "login");
        window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
    }


    const closeModal = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("auth");
        router.replace(`${pathname}?${params.toString()}`);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) {
            redirectToLogin();
        } else {
            alert("Error signing up, please try again");
            console.log(data.error || "Something went wrong");
        }
    };
    return (
        <Suspense>
            <div className="max-w-md mx-auto bg-white dark:bg-black rounded-2xl shadow-xl p-8 relative">
                {/* cose button  */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="flex justify-center">
                    <div className="w-14 h-auto rounded-full  flex items-center justify-center mb-4">
                        <Image src={logo} alt="" className="text-white w-full" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center mb-2">Sign up</h2>
                <div className="text-center text-sm mb-4 flex items-center justify-center gap-2">
                    Already have an account?{" "}
                    <p
                        onClick={redirectToLogin}
                        className="text-red-500 font-semibold"
                    >
                        Sign in here
                    </p>
                </div>

                <button
                    onClick={signInWithGoogle}
                    className="w-full flex items-center justify-center gap-2 border py-2 rounded-md text-sm mb-4 hover:border-primary hover:text-primary transition duration-300 ease-in-out"
                >
                    <FaGoogle />
                    Signup with Google
                </button>

                <div className="flex items-center justify-center mb-4">
                    <span className="border-t w-full"></span>
                    <span className="px-2 text-gray-500 text-sm">or</span>
                    <span className="border-t w-full"></span>
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <div className="relative">
                        <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                        <input
                            name="email"
                            type="email"
                            placeholder="johndoe@gmail.com"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full pl-10 border rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Full Name */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <div className="relative">
                        <FaUser className="absolute top-3 left-3 text-gray-400" />
                        <input
                            name="fullName"
                            type="text"
                            placeholder="John Doe"
                            value={form.fullName}
                            onChange={handleChange}
                            className="w-full pl-10 border rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="relative">
                        <FaLock className="absolute top-3 left-3 text-gray-400" />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full pl-10 border rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <div className="relative">
                        <FaLock className="absolute top-3 left-3 text-gray-400" />
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full pl-10 border rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Terms */}
                <div className="mb-4 text-sm">
                    <label className="flex items-center justify-center gap-2">
                        <input
                            type="checkbox"
                            name="acceptedTerms"
                            checked={form.acceptedTerms}
                            onChange={handleChange}
                        />
                        <span>
                            I have read and accepted the{" "}
                            <a href="/terms&conditions" className="text-red-500 whitespace-nowrap">
                                terms and conditions
                            </a>
                            .
                        </span>
                    </label>
                </div>

                <button
                    className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-md font-medium"
                    disabled={!form.acceptedTerms}
                    onClick={handleSubmit}
                >
                    Create account
                </button>
            </div>
        </Suspense>

    );
}