export default function Footer() {
    return (
        <footer className="bg-[#b7c7e6] text-black px-8 md:px-16 lg:px-32 py-10 flex flex-col md:flex-row justify-between items-center">
            {/* Left Side - Text Links */}
            <div className="flex flex-col gap-2 text-lg font-medium">
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

            {/* Right Side - Image & Social Icons */}
            <div className="relative mt-8 md:mt-0 w-full md:w-1/2">
                <img
                    src="/your-image.jpg"
                    alt="People using phones"
                    className="w-full rounded-lg shadow-lg"
                />
                {/* Social Icons */}
                <div className="absolute bottom-4 right-4 flex space-x-4">
                    <a href="#" className="text-black text-2xl hover:opacity-80">📷</a> {/* Instagram Icon */}
                    <a href="#" className="text-black text-2xl hover:opacity-80">🔗</a> {/* LinkedIn Icon */}
                    <a href="#" className="text-black text-2xl hover:opacity-80">▶️</a> {/* YouTube Icon */}
                </div>
            </div>

            {/* Bottom Text */}
            <p className="text-sm text-black mt-6 md:mt-0">
                All Rights Reserved by Tonkdu LLP ("ClipCurve")
            </p>

        </footer>
    );
}