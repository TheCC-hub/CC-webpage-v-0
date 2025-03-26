import Background from '@/components/boubble-background'
import React from 'react'

export default function AboutPage() {
    return (
        <div className="w-full§ flex items-start justify-center relative">

            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Background />
            </div>
            <div className='container w-full p-8 max-w-3xl py-36 relative'>
                <section className="mt-8">
                    <h1 className="text-4xl font-bold">About ClipCurve</h1>
                    <h2 className="text-2xl font-semibold mt-4">Helping YouTubers Blow Up with Next-Level Shorts & Editing 🎬💥</h2>
                    <p className="mt-2">Welcome to ClipCurve, where we turn your long, epic videos into snackable, viral-worthy Shorts that get views, subs, and clout. Because let’s be real—attention spans are shorter than a TikTok dance trend. 😆</p>

                </section>
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">🚀 What We Do (A.K.A. How We Make YouTube Fame Easy)</h2>
                    <p className="mt-2">We’re all about making your content work smarter, not harder. If you’re tired of spending <b>hours editing</b>, let us handle the magic while you focus on creating <b>banger content</b>.</p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>🔥 <b>Shorts That Slap</b> – We cut the fluff & keep only the gold. Viral potential? ✅</li>
                        <li>🎬 <b>Editing That Hits Different</b> – Smooth transitions, crispy cuts, and just the right effects.</li>
                        <li>📸 <b>Thumbnails That Pop</b> – Scroll-stopping visuals that make people <b>click FAST</b>.</li>
                        <li>📈 <b>Growth Hacks</b> – We <b>optimize for views & engagement</b> so you blow up.</li>
                        <li>💡 <b>AI-Driven Edits</b> – We leverage AI to create edits that keep audiences hooked.</li>
                        <li>⏳ <b>Faster Turnaround</b> – Because waiting sucks. We deliver pro edits in record time.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">🎯 Why ClipCurve? (Other Than the Fact That We’re Awesome)</h2>
                    <ul className="list-disc ml-6 mt-2">
                        <li>✅ <b>Your Channel = Our Priority</b> – We obsess over making <b>your content go viral</b>.</li>
                        <li>✅ <b>Editing So Good, Even Your Mom Will Be Impressed</b> – We make you look pro-level.</li>
                        <li>✅ <b>We Know the Algorithm’s Secrets</b> – Stay ahead of trends without lifting a finger.</li>
                        <li>✅ <b>No Stress, Just Growth</b> – We handle the tech, you enjoy the fame. Simple.</li>
                        <li>✅ <b>Made for Creators, by Creators</b> – We get it because we’ve been there.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">📖 The ClipCurve Mentality: Work Smart, Not Hard</h2>
                    <p className="mt-2">We know the struggle—grinding for hours, editing until your eyes burn, and still not hitting the algorithm jackpot. That’s why we built ClipCurve: to give creators like YOU the <b>edge you need to grow FAST without losing sleep</b>. Because if MrBeast can hack the algorithm, why can’t we? 😏</p>
                    <p className="mt-2">We believe in working smart, not hard. So while you focus on **creating**, we handle the **editing, optimization, and engagement tactics** to make sure your videos get the **attention they deserve**. Think of us as your **growth cheat code**. 🎮✨</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold">💬 What Creators Say (AKA Proof We Know Our Stuff)</h2>
                    <blockquote className="mt-2 italic border-l-4 border-red-500 pl-4">"ClipCurve helped me hit 10K subs in a month! I barely did anything, they just WORKED." – <b>Some Cool YouTuber</b></blockquote>
                    <blockquote className="mt-2 italic border-l-4 border-red-500 pl-4">"My Shorts are finally getting traction! Their edits are next-level. 10/10." – <b>Another Satisfied Creator</b></blockquote>
                    <blockquote className="mt-2 italic border-l-4 border-red-500 pl-4">"I went from struggling with engagement to **trending on YouTube**. ClipCurve is 🔥." – <b>A Happy Creator</b></blockquote>
                </section>

                <section className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold">🚀 Ready to Glow Up Your Channel? Let’s Get Started! 🌟</h2>
                    <p className="mt-2">If you’re serious about YouTube growth and don’t want to spend hours on boring editing… <b>we got you.</b></p>
                    <p className="mt-4">📩 <b>Slide into Our Inbox:</b> <a href="mailto:theclipcurve@gmail.com" className="text-red-500 underline">theclipcurve@gmail.com</a></p>
                    <p className="mt-2">🎥 <b>Let’s Make Some Viral Content!</b></p>
                </section>

            </div>
        </div>


    )
}
