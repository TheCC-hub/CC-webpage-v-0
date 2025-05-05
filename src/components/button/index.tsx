import './glowRing.css'; // We will create this CSS file
export function GlowingButton({ title }: { title: string }) {
    return (
        <div className="relative group inline-block">
            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-1000 animate-glow-spin"></div>

            {/* Actual button */}
            <button className="relative bg-[#0d0c1b] text-white px-4 py-1.5 rounded-full border border-gray-700 hover:bg-[#1a1a2e] transition-all duration-300">
                {title}
            </button>
        </div>
    );
}