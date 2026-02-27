import React from 'react';

const TargetCard = ({ title, description }) => {
    return (
        <div
            className="border border-[#FFFFFF1A] rounded-2xl p-8 flex flex-col justify-center text-left hover:border-white/20 transition-colors h-full min-h-[160px]"
            style={{
                background: 'linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)',
                backdropFilter: 'blur(5px)'
            }}
        >
            <h3 className="text-white font-bold text-lg md:text-xl mb-3 leading-tight">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">
                {description}
            </p>
        </div>
    );
};

const EdInaiFor = () => {
    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center mb-16 text-center">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                        WHO IS ED-INAI FOR? 
                    </h2>
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide font-medium">
                    Perfect For Students From
                </p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">

                {/* 1. Schools */}
                <TargetCard
                    title="Schools (Classes 6–12)"
                    description="Class 9-12 students preparing for boards and finals who need clear concepts and strong revision."
                />

                {/* 2. Colleges & Universities */}
                <TargetCard
                    title="Colleges & Universities"
                    description="UG students managing lectures, projects, and placements who want fast, structured revision."
                />

                {/* 3. Coaching & Competitive Exams */}
                <TargetCard
                    title="Coaching & Competitive Exams"
                    description="JEE/NEET and other aspirants who need repeated explanations and unlimited practice."
                />

                {/* 4. Skill & Professional Courses */}
                <TargetCard
                    title="Skill & Professional Courses"
                    description="Anyone preparing for entrance or government exams requiring deep understanding and repetition."
                />

            </div>

            {/* Decorative Side Star (Right) */}
            <div className="absolute top-[10%] right-[-20px] hidden md:block animate-pulse duration-[3000ms] opacity-60">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>

        </section>
    );
};

export default EdInaiFor;
