import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "Now I can ask doubts anytime and revise before exams.",
        author: "Class 10 Student"
    },
    {
        quote: "The personalized learning path helped me improve my grades significantly.",
        author: "Class 12 Student"
    },
    {
        quote: "edInai makes learning complex topics incredibly simple and fun.",
        author: "JEE Aspirant"
    }
];

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

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction) => ({
        x: direction < 0 ? 100 : -100,
        opacity: 0,
        transition: { duration: 0.3 }
    })
};

const StudentTestimonial = () => {
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 3000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextTestimonial = () => {
        setCurrentIndex(([prevIndex]) => [(prevIndex + 1) % testimonials.length, 1]);
    };

    const prevTestimonial = () => {
        setCurrentIndex(([prevIndex]) => [(prevIndex - 1 + testimonials.length) % testimonials.length, -1]);
    };

    return (
        <motion.section
            className="relative w-full max-w-[1050px] mt-18 mx-auto px-4 py-4 flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >

            {/* Heading */}
            <motion.div
                className="relative z-10 flex flex-col items-center mb-4 text-center"
                variants={itemVariants}
            >
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    <h2 className="text-[25px] md:text-[40px] font-bold text-white  uppercase">
                        Student Testimonials
                    </h2>
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                </div>
                <p className="text-[16px] text-gray-300 font-medium">
                    What's our user says about us
                </p>
            </motion.div>

            {/* Testimonial Slider Container */}
            <motion.div
                className="relative w-full max-w-4xl flex items-center justify-center gap-4 md:gap-6"
                variants={itemVariants}
            >

                {/* Prev Button */}
                <motion.button
                    onClick={prevTestimonial}
                    className="hidden md:flex w-12 h-10 rounded-full bg-blue-900/50 text-white items-center justify-center transition-colors shadow-lg border border-blue-500/30"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 58, 138, 0.8)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>

                {/* Main Card */}
                <div className="w-full relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full border border-white/10 rounded-2xl p-5 md:p-8 min-h-[250px] flex flex-col justify-center relative shadow-2xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(180deg, rgba(6, 6, 8, 1) 0%, rgba(15, 15, 26, 1) 100%)'
                            }}
                        >

                            {/* Background Glow */}
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>

                            {/* Content */}
                            <div className="relative z-6">
                                <p className="text-gray-400 text-lg md:text-xl italic mb-6 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <h4 className="text-white font-bold text-xl md:text-2xl ">
                                    {testimonials[currentIndex].author}
                                </h4>
                            </div>

                            {/* Pagination Dots */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {testimonials.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className="rounded-full"
                                        animate={{
                                            width: index === currentIndex ? 12 : 6,
                                            backgroundColor: index === currentIndex ? '#3B82F6' : '#4B5563'
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{ height: 6 }}
                                    />
                                ))}
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Next Button */}
                <motion.button
                    onClick={nextTestimonial}
                    className="hidden md:flex w-12 h-10 rounded-full bg-blue-900/50 text-white items-center justify-center transition-colors shadow-lg border border-blue-500/30"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 58, 138, 0.8)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.button>

            </motion.div>

            {/* Mobile Navigation (Visible only on small screens) */}
            <div className="flex md:hidden gap-6 mt-6">
                <motion.button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-blue-900/50 text-white flex items-center justify-center border border-blue-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18L9 12L15 6" /></svg>
                </motion.button>
                <motion.button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-blue-900/50 text-white flex items-center justify-center border border-blue-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18L15 12L9 6" /></svg>
                </motion.button>
            </div>


            {/* Decorative Top Star */}
            <motion.div
                className="absolute top-[0%] left-1/2 transform -translate-x-1/2 -mt-10 opacity-60"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </motion.div>

        </motion.section>
    );
};

export default StudentTestimonial;

