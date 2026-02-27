import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/EDINAI Logo.png'
import StudentRegistrationModal from './StudentRegistrationModal';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
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

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.section
            className="relative flex flex-col items-center justify-start text-center px-4"
            style={{ paddingTop: '150px' }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >

            {/* Logo - Positioned Top Left */}
            <motion.div
                className="absolute top-3 left-3 md:top-2 md:left-8 z-50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <img src={logo} alt="EDINAI Logo" className="h-28 md:h-36 w-auto" loading="eager" fetchpriority="high" />
            </motion.div>

            {/* Main Content Container - Fixed width 1050px for more side space */}
            <div className="w-full max-w-[1050px] mx-auto relative">

                {/* Decorative Stars - Positioned relative to the content container for exact alignment */}

                {/* Right Star - Positioned above 'Teachers'/'With' */}
                <motion.div
                    className="absolute top-[-60px] right-[10%] xl:right-[180px] animate-pulse z-10 hidden lg:block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#D1D5DB" />
                    </svg>
                </motion.div>

                {/* Left Star - Positioned left of 'India's' */}
                <motion.div
                    className="absolute top-[80px] left-[5%] xl:left-[-40px] animate-pulse z-10 hidden lg:block"
                    style={{ animationDelay: '1s' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                    </svg>
                </motion.div>

                {/* Heading Section - height: 379px, gap: 40px */}
                <div className="flex flex-col items-center justify-start mb-10" style={{ gap: '20px' }}>

                    {/* Main Heading - width: 1194px, gap: 5px */}
                    <motion.div
                        className="w-full flex flex-col items-center justify-center"
                        style={{ gap: '3px' }}
                        variants={itemVariants}
                    >
                        <h1 className="text-4xl md:text-4xl lg:text-[60px] font-bold leading-[1.1] tracking-tight text-white">
                            <span className="block">Learn Smarter With</span>
                            <span className="block mt-2">
                                India's <span className="text-[#4169E1]">First</span> Virtual <span className="text-[#4169E1]">AI</span> Teachers
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-gray-400 text-sm md:text-base max-w-[900px] mx-auto leading-relaxed opacity-80"
                        variants={itemVariants}
                    >
                        Ed-INAI gives students access to Virtual AI Teachers trained on their syllabus delivering live & recorded classes, instant doubt solving, and personalized learning support 24×7.
                    </motion.p>
                </div>

                {/* CTA Buttons Section */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-2"
                    variants={itemVariants}
                >
                    <motion.button
                        onClick={() => setIsModalOpen(true)}
                        className="text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20"
                        style={{ background: 'linear-gradient(90deg, #113BE1 0%, #4268FF 50.48%, #4062E3 72.41%, #113BE1 100%)' }}
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(65, 105, 225, 0.4)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start Learning Now
                    </motion.button>
                    <motion.button
                        className="bg-transparent border border-white hover:border-gray-400 text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white/5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Watch Demo
                    </motion.button>
                </motion.div>
            </div>

            <StudentRegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

        </motion.section>
    )
}

export default Header

