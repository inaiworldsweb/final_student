import React from 'react';

const FeaturePill = ({ text, glowClass, borderHoverClass, dotGlow }) => {
    return (
        <div
            className={`group relative border border-[#FFFFFF1A] rounded-xl px-8 py-6 flex items-center justify-start text-left 
                       transition-all duration-500 ease-out cursor-pointer overflow-hidden w-full
                       hover:-translate-y-1 ${borderHoverClass} ${glowClass}`}
            style={{
                background: 'linear-gradient(80.42deg, rgba(0, 0, 0, 0.2) 25.25%, rgba(83, 84, 108, 0.2) 98.05%)',
                backdropFilter: 'blur(10px)'
            }}
        >
            {/* Inner Gradient Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Section */}
            <div className="flex items-center relative z-10 w-full">
                {/* Glowing Dot */}
                <span className={`w-2 h-2 rounded-full bg-white mr-4 shrink-0 transition-all duration-300 
                                 group-hover:scale-125 ${dotGlow}`}>
                </span>

                <span className="text-white font-medium text-lg leading-snug group-hover:text-white transition-colors duration-300">
                    {text}
                </span>
            </div>
        </div>
    );
};

const DashboardPreview = () => {
    return (
        <section id="dashboard-preview" className="relative w-full max-w-[1050px] mt-12 mx-auto px-4 py-4 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center mb-10 text-center">
                <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-[25px] md:text-[40px] font-bold text-white ">
                        Student Dashboard Preview
                    </h2>
                </div>
                <p className="text-[16px] text-gray-400 font-medium max-w-2xl">
                    Students get a simple, clutter-free dashboard where everything is organized and never overwhelming.
                </p>
            </div>

            {/* Features Grid with Intense Border Glow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mx-auto relative z-10">

                <FeaturePill 
                    text="Access Live & Recorded Classes" 
                    borderHoverClass="hover:border-purple-500/80"
                    glowClass="hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    dotGlow="group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_#a855f7]"
                />

                <FeaturePill 
                    text="Download Notes & Revision Material" 
                    borderHoverClass="hover:border-emerald-500/80"
                    glowClass="hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    dotGlow="group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_#10b981]"
                />

                <FeaturePill 
                    text="Attempt Quizzes" 
                    borderHoverClass="hover:border-pink-500/80"
                    glowClass="hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                    dotGlow="group-hover:bg-pink-400 group-hover:shadow-[0_0_10px_#ec4899]"
                />

                <FeaturePill 
                    text="Track Learning Progress Visually" 
                    borderHoverClass="hover:border-orange-500/80"
                    glowClass="hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    dotGlow="group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_#f97316]"
                />

            </div>

            {/* Decorative Side Stars */}
            <div className="absolute top-[10%] left-[-20px] hidden md:block animate-pulse duration-[3000ms] opacity-60">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>
            <div className="absolute top-[30%] right-[-20px] hidden md:block animate-pulse duration-[4000ms] opacity-60" style={{ animationDelay: '1s' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>

        </section>
    );
};

export default DashboardPreview;