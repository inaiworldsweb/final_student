import React from 'react';

const FeatureItem = ({ icon, title, description }) => {
    return (
        <div
            className="rounded-2xl p-4 flex flex-col items-start text-left transition-colors group border border-[#53546C]/30 hover:border-[#53546C]/50"
            style={{
                background: 'linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)',
                backdropFilter: 'blur(10px)' // Optional: Adds glass effect if desired, consistent with modern UI
            }}
        >
            {/* Icon */}
            <div className="mb-6 text-blue-500">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

const KeyFeatures = () => {
    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-24 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center mb-16 text-center">
                <div className="flex items-center gap-4 mb-3 border-x-2 border-white px-6 py-1">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">
                        KEY FEATURES FOR STUDENTS 
                        </h2>
                </div>
                <p className="text-gray-400 text-sm tracking-wide font-medium">
                    "Interactive lessons, real-time feedback, and smarter learning tools."
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">

                {/* 1. Live AI Classes */}
                <FeatureItem
                    icon={
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                        </svg>
                    }
                    title="Live AI Classes"
                    description="Attend Scheduled AI-Led Lectures For Your Subjects, With Real-Time Explanations And Interaction."
                />

                {/* 2. 24/7 Recordings */}
                <FeatureItem
                    icon={
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                    }
                    title="24/7 Recordings"
                    description="Missed A Class? Rewatch The Full Lecture Anytime, Control Speed, And Pause Where You Need More Time."
                />

                {/* 3. Instant Doubt Solving */}
                <FeatureItem
                    icon={
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                    }
                    title="Instant Doubt Solving"
                    description="Ask Doubts In Your Own Words Through Voice Or Chat, And Get Clear, Step-By-Step Solutions."
                />

                {/* 4. AI-Generated Notes */}
                <FeatureItem
                    icon={
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    }
                    title="AI-Generated Notes"
                    description="Get Summaries, Key Formulas, And Highlighted Concepts After Every Session – Ready For Exam Prep."
                />

                {/* 5. Adaptive Quizzes */}
                <FeatureItem
                    icon={
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                    }
                    title="Adaptive Quizzes"
                    description="Practice With Quizzes That Adapt To Your Level And Help You Focus On Weak Areas."
                />

                {/* 6. Smart Tracking */}
                <FeatureItem
                    icon={
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20V10" />
                            <path d="M18 20V4" />
                            <path d="M6 20v-6" />
                        </svg>
                    }
                    title="Smart Tracking"
                    description="See Completed Chapters, Quiz Scores, And Recommended Next Steps In A Clean Visual Dashboard."
                />

            </div>

            {/* Decorative Star (Left) */}
            <div className="absolute top-[10%] left-[-20px] hidden md:block animate-pulse duration-[4000ms] opacity-60">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>

        </section>
    );
};

export default KeyFeatures;
