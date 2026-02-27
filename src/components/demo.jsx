import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const Demo = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const youtubeUrl = "https://www.youtube.com/embed/Rw0bD05OuH0?autoplay=1";

    const playVideo = () => {
        setIsVideoPlaying(true);
    };

    return (
        <motion.section
            id="watch-demo"
            className="relative w-full max-w-[1050px] mx-auto px-4 py-12 flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >

            {/* Main Container */}
            <motion.div
                className="relative w-full bg-[#050505] border border-white/10 rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden shadow-2xl"
                variants={itemVariants}
            >

                {/* Content - Left Side */}
                <motion.div
                    className="flex flex-col items-start w-full md:w-1/2 z-10"
                    variants={containerVariants}
                >

                    {/* Label */}
                    <motion.div
                        className="flex items-center gap-2 mb-4 border-l-2 border-white pl-3 py-1"
                        variants={itemVariants}
                    >
                        Watch Demo
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                        variants={itemVariants}
                    >
                        See How Students Learn with AI
                    </motion.h2>

                    {/* Bullet Points */}
                    <motion.ul
                        className="text-gray-400 space-y-3 mb-8 text-base md:text-lg"
                        variants={containerVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            AI Teachers Conduct Live Classes
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            Students Ask Doubts Via Voice
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            Notes & Quizzes Are Generated
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            Progress Is Tracked Automatically
                        </motion.li>
                    </motion.ul>

                    {/* Button */}
                    <motion.button
                        onClick={playVideo}
                        className="px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold rounded-full shadow-lg shadow-blue-900/40"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -5px rgba(29, 78, 216, 0.5)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Watch Demo
                    </motion.button>
                </motion.div>

                {/* Video Area - Right Side */}
                <motion.div
                    className="w-full md:w-1/2 relative z-10"
                    variants={itemVariants}
                >
                    <div className="relative w-full aspect-video bg-[#0A0A0B] border border-white/5 rounded-2xl overflow-hidden shadow-lg">

                        {!isVideoPlaying ? (
                            // Thumbnail with Play Button
                            <motion.div
                                onClick={playVideo}
                                className="relative w-full h-full flex items-center justify-center group cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* YouTube Thumbnail Background */}
                                <img
                                    src="https://img.youtube.com/vi/Rw0bD05OuH0/maxresdefault.jpg"
                                    alt="Video Thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                                {/* Play Button Circle */}
                                <motion.div
                                    className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm z-20"
                                    whileHover={{ scale: 1.15 }}
                                    animate={{
                                        boxShadow: ['0 0 0 0 rgba(255, 255, 255, 0.3)', '0 0 0 15px rgba(255, 255, 255, 0)', '0 0 0 0 rgba(255, 255, 255, 0.3)']
                                    }}
                                    transition={{
                                        boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                                    }}
                                >
                                    {/* Play Icon */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                        <path d="M8 5V19L19 12L8 5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        ) : (
                            // YouTube Video Player
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={youtubeUrl}
                                title="ED-INAI Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}

                    </div>
                </motion.div>

            </motion.div>
        </motion.section>
    );
};

export default Demo;
