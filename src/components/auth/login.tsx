"use client";
import { Suspense, useState } from "react";
import { FaGoogle, FaEnvelope, FaUser, FaYoutube, FaLock, FaPlay } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo/logo1.png";
import { signIn } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [form, setForm] = useState({
        email: "",
        password: "",
        rembemberMe: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const signInWithGoogle = async () => {
        signIn("google");
        // const params = new URLSearchParams(window.location.search);
        // params.delete("auth");
        // router.replace(`${pathname}?${params.toString()}`);
    }

    const redirectToSignup = () => {
        const params = new URLSearchParams(window.location.search);
        params.set("auth", "signup");
        window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
    }

    const closeModal = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("auth");
        router.replace(`${pathname}?${params.toString()}`);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await signIn('credentials', {
            redirect: false,
            email: form.email,
            password: form.password,
        });

        if (result?.error) {
            alert('Invalid email or password');
        } else {
            closeModal();
        }
    };
    return (
        <Suspense>
            <div className="max-w-md mx-auto bg-white dark:bg-black rounded-2xl shadow-xl p-8 relative">
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

                <h2 className="text-2xl font-bold text-center mb-2">Welcome back!</h2>
                <p className="text-center text-sm mb-4">Please enter your details to sign in</p>

                <button
                    onClick={signInWithGoogle}
                    className="w-full flex items-center justify-center gap-2 border py-2 rounded-md text-sm mb-4 hover:border-primary hover:text-primary transition duration-300 ease-in-out"
                >
                    <FaGoogle />
                    Signin with Google
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

                {/* Rembember me */}
                <div className="mb-4 text-sm">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="rembemberMe"
                            checked={form.rembemberMe}
                            onChange={handleChange}
                        />
                        <span>
                            Remember me
                        </span>
                    </label>
                </div>

                <button
                    className="w-full bg-red-400 hover:bg-red-500 text-white py-2 rounded-md font-medium"
                    disabled={!form.email || !form.password}
                    onClick={handleLogin}
                >
                    Log in
                </button>

                <div className="text-center text-sm mt-4 flex items-center justify-center gap-2">
                    Don't have an account?{" "}
                    <p
                        onClick={redirectToSignup}
                        className="text-red-500 font-semibold cursor-pointer"
                    >
                        Create an account here
                    </p>
                </div>
            </div>
        </Suspense>

    );
}