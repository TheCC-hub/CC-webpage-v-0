import React from "react"
export default function HowItWorks() {

    return (
        <section className="bg-gradient-to-b from-blue-200 to-white py-16 px-6 text-center" >
            <h2 className="text-4xl font-extrabold text-black mb-10" > How It Works! </h2>

            < div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" >
                {/* Step 1 */}
                < div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black" >
                    <div className="text-black font-bold text-2xl mb-3" > 1 </div>
                    < img src="/icons/package-selection.svg" alt="Package Selection" className="h-16 mb-4" />
                    <p className="text-black font-medium text-sm" >
                        CHOOSE THE PACKAGE THAT & apos;S CONTENT - TAILORED FOR YOU!
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black" >
                    <div className="text-black font-bold text-2xl mb-3" > 2 </div>
                    < img src="/icons/idea-sharing.svg" alt="Share Inspiration" className="h-16 mb-4" />
                    <p className="text-black font-medium text-sm" >
                        SHARE YOUR INSPIRATION WITH OUR TEAM!
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black" >
                    <div className="text-black font-bold text-2xl mb-3" > 3 </div>
                    < img src="/icons/send-request.svg" alt="Send Request" className="h-16 mb-4" />
                    <p className="text-black font-medium text-sm" >
                        DROP YOUR REQUESTS AND CHAT IT OUT WITH OUR CONTENT STRATEGIST.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center border border-black" >
                    <div className="text-black font-bold text-2xl mb-3" > 4 </div>
                    < img src="/icons/editing-wizard.svg" alt="Editing Wizards" className="h-16 mb-4" />
                    <p className="text-black font-medium text-sm" >
                        THE EDITING WIZARDS THEN GO BONKERS!
                    </p>
                </div>
            </div>
        </section>
    );
}
