
import logo from "@/assets/logo/logo1.png"
import Image from "next/image";
export default function Testimonial() {
    return (
        <section id="testimonials" className="flex flex-col md:flex-row items-start justify-center gap-12 px-8 py-16 bg-primary">
            {/* Heading */}
            <h2 className="text-5xl font-extrabold text-white text-left">
                Listen to what <br />
                our creators <br />
                have to say! 👂
            </h2>

            <div className=" p-2">
                {/* Testimonial Card */}
                <div className="bg-white border-2 border-black shadow-lg rounded-2xl p-8 max-w-lg">
                    {/* Profile Section */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Image
                                src={logo}
                                alt="RaDona Ludlow"
                                className="w-24 h-24 object-cover rounded-full border-2 border-black"
                            />
                            <a href="#" className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 bg-white text-black text-xs border border-black px-2 py-1 rounded-full">
                                click
                            </a>
                        </div>

                        <div>
                            <p className="font-bold text-lg text-black">Channel Owner</p>
                            <p className="italic text-gray-600">X and Y</p>
                            <p className="text-gray-700 font-medium">196K Subscribers</p>
                        </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="mt-4 italic text-xl text-gray-900 text-center">
                        "We can't wait to see where we will be in 1 year with ClipCurve!"
                    </blockquote>

                    {/* Detailed Review */}
                    <p className="mt-4 text-gray-700 text-sm">
                        In just 60 days, our YouTube channel has grown 10x in real-life subscribers. We have moved from
                        6,000 views to 55,000 views per day.
                        <span className="italic"> CC is a wonderful investment and they have rocked our site in such a short time.</span>
                    </p>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                    </div>
                </div>
            </div>

        </section>
    );
}