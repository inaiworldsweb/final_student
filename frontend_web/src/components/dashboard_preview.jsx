import React from 'react';

const FeaturePill = ({ text }) => {
    return (
        <div
            className="border border-[#FFFFFF1A] rounded-xl px-8 py-6 flex items-center justify-start text-left hover:border-white/20 transition-colors w-full"
            style={{
                background: 'linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)',
                backdropFilter: 'blur(5px)'
            }}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-4 shrink-0"></span>
            <span className="text-white font-medium text-lg leading-snug">{text}</span>
        </div>
    );
};

const DashboardPreview = () => {
    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center mb-16 text-center">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                        STUDENT DASHBOARD PREVIEW 
                    </h2>
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                </div>
                <p className="text-gray-400 text-sm tracking-wide font-medium max-w-2xl">
                    Students get a simple, clutter-free dashboard where everything is organized and never overwhelming.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto relative z-10">

                {/* 1 */}
                <FeaturePill text="Access Live & Recorded Classes" />

                {/* 2 */}
                <FeaturePill text="Download Notes & Revision Material" />

                {/* 3 */}
                <FeaturePill text="Attempt Quizzes" />

                {/* 4 */}
                <FeaturePill text="Track Learning Progress Visually" />

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
