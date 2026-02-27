import React from 'react';
import missLectureIcon from '../logo/miss_lecture.svg';
import doubtClearedIcon from '../logo/doubt_cleared.svg';
import notesReadyIcon from '../logo/notes_ready.svg';
import learnsYourWayIcon from '../logo/learns_your_way.svg';

const LoveCard = ({ icon, text, glowClass, iconBgClass, customBoxShadow }) => {
    return (
        <div
            className={`relative bg-[#050505] rounded-2xl p-4 md:p-6 flex items-center h-24 w-full overflow-hidden group transition-all duration-300 hover:-translate-y-1`}
            style={{ boxShadow: customBoxShadow }}
        >

            {/* Bottom Glow */}
            <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${glowClass} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}></div>



            {/* Icon Box */}
            <div className={`relative z-10 w-16 h-16 rounded-lg ${iconBgClass} flex items-center justify-center mr-4 md:mr-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0`}>
                {icon}
            </div>

            {/* Text */}
            <h3 className="text-white font-medium text-base md:text-lg relative z-10">
                {text}
            </h3>
        </div>
    );
};

const WhyStudentsLoveEdInai = () => {
    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Main Dark Container */}
            <div className="relative w-full bg-[#030303] border border-white/10 rounded-[40px] p-8 md:p-16 flex flex-col items-center text-center overflow-hidden shadow-2xl">

                {/* Heading */}
                <div className="relative z-10 flex flex-col items-center mb-12 text-center">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-0.5 h-8 bg-white opacity-80"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                            WHY STUDENTS LOVE ED-INAI 
                        </h2>
                        <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    </div>
                    <p className="text-gray-300 text-sm tracking-wide font-medium">
                        Learning Without Fear or Pressure
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto relative z-10">

                    {/* 1. Purple - Never Miss a Lecture */}
                    <LoveCard
                        icon={
                            <img src={missLectureIcon} alt="Never Miss a Lecture" className="w-full h-full object-contain" />
                        }
                        text="Never Miss a Lecture"
                        glowClass="from-purple-600 to-transparent"
                        iconBgClass=""
                        customBoxShadow="0px 6px 16px -6px #925CFF7A, 0px 0px 12px 0px #925CFF1F inset, 0px 0px 3px 0px #925CFF3D inset, 0px 0px 1px 0px #925CFF inset"
                    />

                    {/* 2. Green - Doubts Cleared Instantly */}
                    <LoveCard
                        icon={
                            <img src={doubtClearedIcon} alt="Doubts Cleared Instantly" className="w-full h-full object-contain" />
                        }
                        text="Doubts Cleared Instantly"
                        glowClass="from-green-600 to-transparent"
                        iconBgClass=""
                        customBoxShadow="0px 6px 16px -6px #43EF9F7A, 0px 0px 12px 0px #43EF9F1F inset, 0px 0px 3px 0px #43EF9F3D inset, 0px 0px 1px 0px #43EF9F inset"
                    />

                    {/* 3. Red - Notes Ready Instantly */}
                    <LoveCard
                        icon={
                            <img src={notesReadyIcon} alt="Notes Ready Instantly" className="w-full h-full object-contain" />
                        }
                        text="Notes Ready Instantly"
                        glowClass="from-red-600 to-transparent"
                        iconBgClass=""
                        customBoxShadow="0px 6px 16px -6px #FF47527A, 0px 0px 12px 0px #FF47521F inset, 0px 0px 3px 0px #FF47523D inset, 0px 0px 1px 0px #FF4752 inset"
                    />

                    {/* 4. Yellow - Learns Your Way */}
                    <LoveCard
                        icon={
                            <img src={learnsYourWayIcon} alt="Learns Your Way" className="w-full h-full object-contain" />
                        }
                        text="Learns Your Way"
                        glowClass="from-yellow-600 to-transparent"
                        iconBgClass=""
                        customBoxShadow="0px 6px 16px -6px #FFC9337A, 0px 0px 12px 0px #FFC9331F inset, 0px 0px 3px 0px #FFC9333D inset, 0px 0px 1px 0px #FFC933 inset"
                    />
                </div>

                <div className="absolute -top-10 -left-10 z-20 hidden lg:block opacity-60">
                    <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 0 13.5 8.5 22 12C13.5 15.5 12 24 12 24C12 24 10.5 15.5 2 12C10.5 8.5 12 0 12 0Z" fill="#9CA3AF" />
                    </svg>
                </div>

            </div>
        </section>
    );
};

export default WhyStudentsLoveEdInai;
