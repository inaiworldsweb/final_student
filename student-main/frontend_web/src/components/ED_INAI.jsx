import React from 'react';

const FeatureCard = ({ text, shadowClass, customShadow }) => {
    return (
        <div
            className={`relative bg-[#050505] rounded-2xl p-6 flex items-center justify-center text-center h-40 w-58 overflow-hidden group transition-all duration-300 hover:-translate-y-1`}
            style={{ boxShadow: customShadow }}
        >

            {/* Bottom Color Glow */}
            <div className={`absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t ${shadowClass} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>

            {/* Text */}
            <h3 className="text-white font-bold text-2xl relative z-10 leading-snug tracking-wide drop-shadow-md">
                {text}
            </h3>
        </div>
    );
};

const ED_INAI = () => {
    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Main Dark Container */}
            <div className="relative w-full bg-[#030303] border border-white/10 rounded-[40px] px-8 py-12 md:px-10 md:py-20 flex flex-col items-center text-center overflow-hidden shadow-2xl">

                {/* Subtle Background Glows */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Heading */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                        WHAT IS ED-INAI? 
                    </h2>
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                    Ed-INAI is an AI-powered learning platform where Virtual AI Teachers conduct interactive classes and help students learn better through conversation, visuals, and real-time support.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

                    {/* Card 1 - Purple */}
                    <FeatureCard
                        text="Ask questions anytime"
                        shadowClass="from-purple-600 to-transparent"
                        customShadow="0px 6px 16px -6px #925CFF7A, 0px 0px 12px 0px #925CFF1F inset, 0px 0px 3px 0px #925CFF3D inset, 0px 0px 1px 0px #925CFF inset"
                    />

                    {/* Card 2 - Orange (Warm/Brownish) */}
                    <FeatureCard
                        text="Get step-by-step explanations"
                        shadowClass="from-orange-600 to-transparent"
                        customShadow="0px 6px 16px -6px #FF85337A, 0px 0px 12px 0px #FF85331F inset, 0px 0px 3px 0px #FF85333D inset, 0px 0px 1px 0px #FF8533 inset"
                    />

                    {/* Card 3 - Red */}
                    <FeatureCard
                        text="Learn with visuals and examples"
                        customShadow="0px 6px 16px -6px #FF47527A, 0px 0px 12px 0px #FF47521F inset, 0px 0px 3px 0px #FF47523D inset, 0px 0px 1px 0px #FF4752 inset"
                        shadowClass="from-rose-600 to-transparent"
                    />

                    {/* Card 4 - Green */}
                    <FeatureCard
                        text="Repeat topics as many times as needed"
                        customShadow="0px 6px 16px -6px #43EF9F7A, 0px 0px 12px 0px #43EF9F1F inset, 0px 0px 3px 0px #43EF9F3D inset, 0px 0px 1px 0px #43EF9F inset"
                        shadowClass="from-emerald-600 to-transparent"
                    />
                </div>

                {/* Decorative Side Star (Left) */}
                <div className="absolute top-1/2 left-[-10px] -translate-y-1/2 w-12 h-12 md:hidden animate-pulse opacity-60">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-400">
                        <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* Decorative External Stars */}
            <div className="absolute top-[40%] left-[-40px] hidden lg:block animate-pulse duration-[4000ms] opacity-60">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>
            <div className="absolute top-[60%] right-[-40px] hidden lg:block animate-pulse duration-[3000ms] opacity-60" style={{ animationDelay: '1.5s' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>

        </section>
    );
};

export default ED_INAI;
