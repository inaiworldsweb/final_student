import React from 'react';
import { motion } from 'framer-motion';
import missLectureIcon from '../logo/miss_lecture.svg';
import doubtClearedIcon from '../logo/doubt_cleared.svg';
import notesReadyIcon from '../logo/notes_ready.svg';
import learnsYourWayIcon from '../logo/learns_your_way.svg';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

const LoveCard = ({ icon, text, glowClass, iconBgClass, customBoxShadow }) => {
    return (
        <motion.div
            variants={itemVariants}
            className="relative bg-[#050505] rounded-2xl p-4 md:p-6 flex items-center h-24 w-full overflow-hidden group"
            style={{ boxShadow: customBoxShadow }}
            whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 400, damping: 17 }
            }}
        >

            {/* Bottom Glow */}
            <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${glowClass} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}></div>

            {/* Icon Box */}
            <motion.div
                className={`relative z-10 w-16 h-16 rounded-lg ${iconBgClass} flex items-center justify-center mr-4 md:mr-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] shrink-0`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
                {icon}
            </motion.div>

            {/* Text */}
            <h3 className="text-white font-medium text-base md:text-lg relative z-10">
                {text}
            </h3>
        </motion.div>
    );
};

const WhyStudentsLoveEdInai = () => {
    return (
        <motion.section
            className="relative w-full max-w-[1050px] mt-12 mx-auto px-4 py-4 flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >

            {/* Main Dark Container */}
            <motion.div
                className="relative w-full bg-[#030303] border border-white/10 rounded-[40px] p-4 md:p-6 flex flex-col items-center text-center overflow-hidden shadow-2xl"
                variants={itemVariants}
            >

                {/* Heading */}
                <motion.div
                    className="relative z-10 flex flex-col items-center mb-4 text-center"
                    variants={itemVariants}
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-0.5 h-8 bg-white opacity-80"></div>
                        <h2 className="text-[25px] md:text-[40px] font-bold text-white ">
                            WHY STUDENTS LOVE edInai
                        </h2>
                        <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    </div>
                    <p className="text-[16px] text-gray-300  font-medium">
                        Learning Without Fear or Pressure
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-4xl mx-auto relative z-10"
                    variants={containerVariants}
                >

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
                </motion.div>

                {/* Decorative Star */}
                <motion.div
                    className="absolute -top-10 -left-10 z-20 hidden lg:block opacity-60"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.6, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 0 13.5 8.5 22 12C13.5 15.5 12 24 12 24C12 24 10.5 15.5 2 12C10.5 8.5 12 0 12 0Z" fill="#9CA3AF" />
                    </svg>
                </motion.div>

            </motion.div>
        </motion.section>
    );
};

export default WhyStudentsLoveEdInai;
