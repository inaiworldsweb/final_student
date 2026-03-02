import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../logo/6456743230b63b81430cbd7d9a404141b2aa83c2.png';
import StudentRegistrationModal from './StudentRegistrationModal';

const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

const LearningToday = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.section
            className="w-full max-w-[1050px] mx-auto px-4 py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.div
                className="w-full rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-center py-12 px-6 md:px-12 shadow-2xl"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                variants={itemVariants}
            >
                <motion.div
                    className="relative z-10 flex flex-col items-center"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-[25px] md:text-[40px] font-bold text-white mb-4 leading-tight tracking-tight"
                        variants={itemVariants}
                    >
                        Start Learning Smarter<br />with AI Today
                    </motion.h2>

                    <motion.p
                        className="text-gray-200 text-[15px] md:text-[25px] mb-8 max-w-2xl font-medium opacity-90"
                        variants={itemVariants}
                    >
                        Don't let doubts slow you down.<br className="hidden md:block" />
                        Learn with <span className="font-bold text-white">India's First Virtual AI Teachers.</span>
                    </motion.p>

                    <motion.button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-blue-900 font-bold py-4 px-10 rounded-xl shadow-lg text-lg"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: '0 15px 30px -5px rgba(255, 255, 255, 0.3)',
                            transition: { type: 'spring', stiffness: 400, damping: 17 }
                        }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Start Learning Now
                    </motion.button>
                </motion.div>

                {/* Decorative star top right */}
                <motion.div
                    className="absolute top-[10%] right-[10%] opacity-90 hidden md:block"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.9, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.9, 1, 0.9]
                    }}
                    style={{
                        animation: 'pulse 3s ease-in-out infinite'
                    }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="#9CA3AF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" />
                    </svg>
                </motion.div>
            </motion.div>

            <StudentRegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </motion.section>
    );
};

export default LearningToday;
