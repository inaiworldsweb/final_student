import React from 'react';

const TargetCard = ({ title, description }) => {
    return (
        <div
            className="group border border-[#FFFFFF1A] rounded-2xl p-8 flex flex-col justify-center text-left 
                       transition-all duration-500 ease-out cursor-pointer
                       hover:border-white/40 hover:-translate-y-2 hover:scale-[1.02]
                       hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] h-full min-h-[160px] relative overflow-hidden"
            style={{
                background: 'linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)',
                backdropFilter: 'blur(5px)'
            }}
        >
            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-white font-bold text-lg md:text-xl mb-3 leading-tight group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:via-blue-500 group-hover:to-blue-700 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300 relative z-10">
                {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[90%] group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                {description}
            </p>
        </div>
    );
};

const EdInaiFor = () => {
    return (
        <section className="relative w-full max-w-[1050px] mt-12 mx-auto px-4 py-4 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center mb-10 text-center">
                <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-[25px] md:text-[40px] font-bold text-white">
                        Who Is <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">edInai</span> For? 
                    </h2>
                </div>
                <p className="text-[16px] text-gray-300 font-medium">
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