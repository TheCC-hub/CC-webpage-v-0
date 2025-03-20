
import logo from "@/assets/logo/logo1.png"
import Image from "next/image";

export default function Footer() {
    return (
        <section className="px-32 py-10">
            <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 md:px-16 lg:px-32 py-10 flex flex-col justify-between items-start shadow-lg rounded-lg">
                <div className="w-full text-left flex items-center justify-start gap-3">
                    <Image src={footer.logo} alt="" width={500} height={500} className="h-10 w-auto" />
                    <h2 className="text-3xl font-extrabold">ClipCurve</h2>
                </div>

                <div className="flex items-end justify-between w-full h-fit">
                    {/* Footer Items */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mt-4">Quick Links</h3>
                        <hr className="w-full h-[0.1px] bg-white mt-1" />
                        <ul className="space-y-2 md:space-y-1 pl-1 py-4">
                            {footer.footerItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="hover:underline">{item.label}</a>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className="flex flex-col items-end justify-end h-full gap-2 mb-2">
                        {/* <div>
                            <h3 className="text-xl font-semibold mt-4">Contact Us</h3>
                            <hr className="w-40 h-[0.1px] bg-white mt-1" />
                        </div> */}

                        <p className="text-sm">Email: <a href="mailto:Team@grow-co.net" className="underline">Team@clip-curve.net</a></p>
                        <div className="flex items-center justify-end gap-4">

                            <p className="mt-4 text-sm md:mt-0">Terms and Conditions</p>
                            {/* Bottom Text */}
                            <p className="text-sm text-white mt-6 md:mt-0">
                                All Rights Reserved by Tonkdu LLP ("ClipCurve")
                            </p>
                        </div>
                    </div>

                </div>

            </footer>
        </section>

    );
}

const footer = {
    logo: logo,
    footerItems: [
        {
            link: "#",
            label: "FAQs"
        },
        {
            link: "#",
            label: "What We Do"
        },
        {
            link: "#",
            label: "How It Works"
        },
        {
            link: "#",
            label: "Testimonials"
        },
        {
            link: "#",
            label: "Contact Us for Pricing"
        }
    ]
}