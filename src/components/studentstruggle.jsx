import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

// Icon Card Component with glassmorphism background - Vertical Layout
const IconCard = ({ icon, color, glowColor, title, description }) => {

    // Mouse move handler for spotlight effect
    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty('--mouse-x', `${x}px`);
        currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <motion.div
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            className="rounded-2xl p-8 flex flex-col items-start text-left gap-6 transition-all duration-300 ease-out group relative overflow-hidden border border-transparent hover:border-white/10"
            style={{
                background: `
                    linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%) padding-box,
                    linear-gradient(to right, #0A0A0A, #0A0A0A) padding-box,
                    linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%) border-box
                `,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)', // Safari support
            }}
            whileHover={{
                y: -8,
                boxShadow: '0 20px 40px -5px rgba(0,0,0,0.5)',
                transition: { type: 'spring', stiffness: 400, damping: 17 }
            }}
        >
            {/* Hover Glow Effect Overlay (Spotlight) */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}15, transparent 40%)`
                }}
            />

            {/* Icon Container with Enhanced Glow */}
            <motion.div
                className="relative w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center z-10 mb-6"
                style={{
                    background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
                    border: `1px solid ${color}40`,
                    boxShadow: `0 0 25px ${glowColor}40`,
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
                {/* Icon with Enhanced Glow */}
                <div className="relative">
                    {React.cloneElement(icon, {
                        className: `${icon.props.className || ''} w-8 h-8`,
                        style: {
                            filter: `drop-shadow(0 0 15px ${glowColor}) drop-shadow(0 0 5px ${glowColor}80)`,
                            color: 'white',
                            transition: 'all 0.3s ease-out',
                            position: 'relative',
                            zIndex: 10
                        }
                    })}
                    <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
                            filter: 'blur(10px)',
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            transform: 'scale(1.5)'
                        }}
                    />
                </div>

                {/* Hover Glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at center, ${glowColor}30 0%, transparent 70%)`
                    }}
                />
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col z-10 space-y-3">
                <h3 className="text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 group-hover:to-white transition-all duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const StudentStruggle = () => {
    return (
        <motion.section
            className="relative mt-15 w-full max-w-[1050px] mx-auto px-4 py-4 flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >

            {/* Heading Section */}
            <motion.div className="text-center mb-4" variants={itemVariants}>
                <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-2 tracking-tight">
                    Why Students Struggle in Traditional Learning
                </h2>
                <p className="text-[16px] text-gray-400 max-w-3xl mx-auto">
                    Most students want to understand concepts clearly — but face daily challenges:
                </p>
            </motion.div>

            {/* Cards Container - Horizontal Row */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
                variants={containerVariants}
            >

                {/* Card 1: No Time for Revision (Purple) */}
                <IconCard
                    icon={
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    color="#925CFF"
                    glowColor="#925CFF"
                    title="No Time for Revision"
                    description="Between school, coaching, and travel, structured revision almost never happens — only last-minute panic."
                />

                {/* Card 2: Missed Lectures (Red) */}
                <IconCard
                    icon={
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 12V8L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    color="#FF4752"
                    glowColor="#FF4752"
                    title="Missed Lectures"
                    description="If you miss a class, you depend on friends notes or try to guess what happened in between chapters."
                />

                {/* Card 3: Unanswered Doubts (Orange) */}
                <IconCard
                    icon={
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 16V16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor" />
                            <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                    color="#FF8533"
                    glowColor="#FF8533"
                    title="Unanswered Doubts"
                    description="Doubts stay pending till the teacher is free or till the next class. Many students feel shy asking in front of everyone."
                />

            </motion.div>
        </motion.section>
    );
};

export default StudentStruggle;

