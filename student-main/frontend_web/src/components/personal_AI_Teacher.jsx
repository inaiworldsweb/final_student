import React, { useState } from 'react';

const ComparisonRow = ({ feature, traditional, ai, hoveredCol, setHoveredCol }) => {
    // Base styles for all cells
    const baseClasses = "rounded-md p-6 flex items-center min-h-[80px] transition-all duration-300 border cursor-default";

    // Active/Hover styles with light blue background
    const activeClasses = "bg-blue-100/20 border-blue-300/50 shadow-[0_0_20px_rgba(147,197,253,0.3)] relative z-10 scale-[1.02] -translate-y-2 transition-all duration-300";

    // Inactive/Default styles with hover effects
    const defaultFeatureClasses = "bg-[#0A0A0A] border-white/5 text-gray-200 hover:bg-blue-900/30 hover:border-blue-300/30 transition-colors duration-300";
    const defaultTradClasses = "bg-[#111111] border-white/5 text-white -400 hover:bg-blue-900/30 hover:border-blue-300/30 transition-colors duration-300";
    const defaultAiClasses = "bg-[#0A0A0A] border-white/10 text-white hover:bg-blue-900/30 hover:border-blue-300/30 transition-colors duration-300";

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
            {/* Feature Name (Column 0) */}
            <div
                className={`${baseClasses} ${hoveredCol === 0 ? activeClasses : defaultFeatureClasses}`}
                onMouseEnter={() => setHoveredCol(0)}
                onMouseLeave={() => setHoveredCol(null)}
            >
                <span className={`font-semibold text-lg tracking-wide ${hoveredCol === 0 ? 'text-white' : ''} transition-colors`}>{feature}</span>
            </div>

            {/* Traditional (Column 1) */}
            <div
                className={`${baseClasses} ${hoveredCol === 1 ? activeClasses : defaultTradClasses}`}
                onMouseEnter={() => setHoveredCol(1)}
                onMouseLeave={() => setHoveredCol(null)}
            >
                <span className={`text-base ${hoveredCol === 1 ? 'text-white' : ''} transition-colors`}>{traditional}</span>
            </div>

            {/* AI Teacher (Column 2) */}
            <div
                className={`${baseClasses} ${hoveredCol === 2 ? activeClasses : defaultAiClasses}`}
                onMouseEnter={() => setHoveredCol(2)}
                onMouseLeave={() => setHoveredCol(null)}
            >
                <span className={`font-medium text-base ${hoveredCol === 2 ? 'text-white' : ''} transition-colors`}>{ai}</span>
            </div>
        </div>
    )
}

const PersonalAITeacher = () => {
    const [hoveredCol, setHoveredCol] = useState(null);

    const features = [
        { feature: "Class Availability", traditional: "Fixed school hours", ai: "24/7 Live + Recordings" },
        { feature: "Doubt Clearing", traditional: "Wait for teacher", ai: "Instant Voice/Text Answers" },
        { feature: "Revision Access", traditional: "Limited notes", ai: "Full Recordings + AI Notes" },
        { feature: "Personalization", traditional: "One style fits all", ai: "Adapts to Your Learning Style" },
        { feature: "Progress Tracking", traditional: "Manual", ai: "Real-Time Dashboard" },
        { feature: "Deployment", traditional: "Months", ai: "3 Weeks Setup" }
    ];

    // Header styling logic
    const headerBase = "rounded-md p-6 flex items-center justify-center md:justify-start transition-all duration-300 border cursor-default";
    const headerActive = "bg-gradient-to-r from-[#11235A] to-[#1E3A8A] border-[#3B82F6]/50 shadow-lg shadow-blue-900/20 text-white";
    const headerStyle = "bg-gradient-to-r from-[#11235A] to-[#1E3A8A] border-[#3B82F6]/50 shadow-lg shadow-blue-900/20 text-white";

    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Decorative Stars */}
            <div className="absolute top-0 left-[-20px] animate-pulse hidden md:block opacity-60">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>
            <div className="absolute top-20 right-[-20px] animate-pulse hidden md:block opacity-60" style={{ animationDelay: '1.5s' }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>

            {/* Heading */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Your Personal AI Teacher – Always Available
                </h2>
                <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
                    Ed-INAI solves these problems by giving every student their own AI teacher who explains topics clearly, answers doubts instantly, and helps revise concepts anytime.
                </p>
            </div>

            {/* Comparison Table */}
            <div className="w-full flex flex-col gap-4">
                {/* Headers */}
                <div className="hidden md:grid grid-cols-3 gap-4 w-full mb-2">
                    {/* Feature Header (Col 0) */}
                    <div
                        className={`${headerBase} ${headerStyle}`}
                        onMouseEnter={() => setHoveredCol(0)}
                        onMouseLeave={() => setHoveredCol(null)}
                    >
                        <div className="text-center md:text-left font-bold text-white text-lg tracking-wide">Feature</div>
                    </div>

                    {/* Traditional Header (Col 1) */}
                    <div
                        className={`${headerBase} ${headerStyle}`}
                        onMouseEnter={() => setHoveredCol(1)}
                        onMouseLeave={() => setHoveredCol(null)}
                    >
                        <div className="text-center md:text-left font-bold text-white text-lg tracking-wide">Traditional Classes</div>
                    </div>

                    {/* AI Teachers Header (Col 2) */}
                    <div
                        className={`${headerBase} ${headerStyle}`}
                        onMouseEnter={() => setHoveredCol(2)}
                        onMouseLeave={() => setHoveredCol(null)}
                    >
                        <div className="text-center md:text-left font-bold text-white text-lg tracking-wide flex items-center gap-2">
                            ED-INAI AI Teachers
                        </div>
                    </div>
                </div>

                {/* Rows */}
                {features.map((item, index) => (
                    <ComparisonRow
                        key={index}
                        {...item}
                        hoveredCol={hoveredCol}
                        setHoveredCol={setHoveredCol}
                    />
                ))}
            </div>
        </section>
    );
};

export default PersonalAITeacher;
