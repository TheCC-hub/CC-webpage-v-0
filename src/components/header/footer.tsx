export default function Footer() {
    return (
        <section className="px-32 py-10">

            <footer className="bg-[#b7c7e6] text-black px-8 md:px-16 lg:px-32 py-10 flex flex-col md:flex-row justify-between items-center">
                {/* Left Side - Text Links */}
                <div className="flex items-end gap-4 text-lg font-medium">
                    <h2 className="text-3xl font-extrabold">ClipCurve</h2>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                        <li><a href="#" className="hover:underline">What We Do</a></li>
                        <li><a href="#" className="hover:underline">How It Works</a></li>
                        <li><a href="#" className="hover:underline">Testimonials</a></li>
                        <li><a href="#" className="hover:underline">Contact Us for Pricing</a></li>
                    </ul>
                    <p className="mt-4 text-sm">Terms and Conditions</p>
                    <p className="text-sm">Email: <a href="mailto:Team@grow-co.net" className="underline">Team@clip-curve.net</a></p>
                </div>

                {/* Bottom Text */}
                <p className="text-sm text-black mt-6 md:mt-0">
                    All Rights Reserved by Tonkdu LLP ("ClipCurve")
                </p>

            </footer>
        </section>

    );
}