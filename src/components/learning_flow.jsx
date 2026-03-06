import React from 'react';

const StepCard = ({ number, title, showRightBorder = false, showBottomBorder = false, className = "" }) => {
    return (
        <div className={`relative p-4 md:p-6 flex flex-col items-center text-center ${className}`}>
            {/* Number Circle */}
            <div className="w-14 h-14 rounded-full bg-[#0F172A] border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-lg mb-4 shadow-[0_0_25px_rgba(59,130,246,0.2)] relative z-10 transition-transform duration-300 hover:scale-110">
                {number}
            </div>

            {/* Text */}
            <p className="text-gray-400 font-medium text-lg leading-snug max-w-[220px] opacity-90">
                {title}
            </p>

            {/* Right Gradient Border */}
            {showRightBorder && (
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-60"></div>
            )}

            {/* Bottom Gradient Border (for Mobile/Grid) */}
            {showBottomBorder && (
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 md:hidden"></div>
            )}
        </div>
    );
};

const LearningFlow = () => {
    return (
        <section id="learning-flow" className="relative w-full max-w-[1050px] mt-12 mx-auto px-4 py-4 flex flex-col items-center justify-center">

            <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-4 text-center">
                Simple & Effective Learning Flow
            </h2>

            {/* Flow Container */}
            <div className="w-full relative">

                {/* Top Row: 3 Cols */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                    <StepCard
                        number="01"
                        title="Join Your Class Or Course"
                        showRightBorder={true}
                        showBottomBorder={true}
                    />
                    <StepCard
                        number="02"
                        title="Attend Live AI-Led Lectures Or Watch Recordings"
                        showRightBorder={true}
                        showBottomBorder={true}
                    />
                    <StepCard
                        number="03"
                        title="Ask Doubts Via Voice Or Chat"
                        showBottomBorder={true}
                    />
                </div>

                {/* Divider Line (Only visible on desktop) - Gradient Effect */}
                <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

                {/* Bottom Row: 2 Cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <StepCard
                        number="04"
                        title="Get AI-Generated Notes & Quizzes"
                        showRightBorder={true}
                        showBottomBorder={true}
                    />
                    <StepCard
                        number="05"
                        title="Track Progress And Improve Weak Areas"
                    />
                </div>
            </div>

            {/* Decorative Sparkle (Right side) */}
            <div className="absolute top-[40%] right-[-20px] md:right-[-40px] animate-pulse pointer-events-none opacity-60">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>

        </section>
    );
};

export default LearningFlow;
