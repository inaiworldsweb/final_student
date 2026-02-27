import React from 'react';
import InaiLogo from '../logo/inai.svg';
import VnaiLogo from '../logo/vnai.svg';
import AiraLogo from '../logo/aira.svg';
import BgImage from '../logo/6456743230b63b81430cbd7d9a404141b2aa83c2.png';

const TeacherCard = ({ logo, name, role, description, showBorder = true }) => {
    return (
        <div className={`flex flex-col items-center text-center p-6 md:p-8 w-full transition-all duration-300 hover:-translate-y-3 hover:brightness-125 hover:scale-105 cursor-pointer group ${showBorder ? 'md:border-r border-white/10' : ''}`}>
            {/* Logo Container with Height for alignment */}
            <div className="h-40 flex items-end justify-center mb-6">
                <img src={logo} alt={name} className="h-60 w-auto object-contain opacity-90 transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Name */}
            <h3 className="text-white font-bold text-xl tracking-wider mb-2 group-hover:text-white transition-colors">{name}</h3>

            {/* Role */}
            <p className="text-white font-semibold text-sm mb-4 group-hover:text-white transition-colors">{role}</p>

            {/* Description */}
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-[250px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                {description}
            </p>
        </div>
    );
};

const MeetYourTeacher = () => {
    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Main Gradient Container */}
            <div
                className="relative w-full rounded-[40px] p-8 md:p-16 flex flex-col items-center overflow-hidden border border-white/10"
                style={{
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Decorative connecting lines (left and right) outside the box could go here, but keeping it inside for clean component structure initially */}

                {/* Heading */}
                <div className="relative z-10 flex flex-col items-center mb-12">
                    <div className="mb-4 border border-white/30 px-10 py-3 backdrop-blur-sm rounded-none">
                        <h2 className="text-xl md:text-xl font-bold text-white tracking-[0.2em] uppercase">
                            MEET YOUR AI TEACHERS <span className="opacity-70 font-normal">&lt;/&gt;</span>
                        </h2>
                    </div>
                    <p className="text-gray-300 text-xs md:text-sm tracking-wide font-medium">
                        Three AI Teachers. One Learning Goal: Your Success.
                    </p>
                </div>

                {/* Teachers Grid */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 w-full">

                    {/* INAI */}
                    <TeacherCard
                        logo={InaiLogo}
                        name="INAI"
                        role="Concept Builder"
                        description="Builds Strong Fundamentals With Clear, Structured Explanations."
                    />

                    {/* VNAI */}
                    <TeacherCard
                        logo={VnaiLogo}
                        name="VNAI"
                        role="Visual Learning Expert"
                        description="Uses Visuals, Slides, And Examples To Simplify Tough Topics."
                    />

                    {/* AIRA - No right border on desktop */}
                    <TeacherCard
                        logo={AiraLogo}
                        name="AIRA"
                        role="Doubt Solver & Progress Guide"
                        description="Answers Doubts Instantly And Tracks Your Learning Progress."
                        showBorder={false}
                    />

                </div>
            </div>
        </section>
    );
};

export default MeetYourTeacher;
