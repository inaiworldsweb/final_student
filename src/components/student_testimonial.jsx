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
    },
    {
        quote: "The interactive 3D models helped me visualize Biology concepts easily.",
        author: "NEET Student"
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
        x: direction > 0 ? 50 : -50,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction) => ({
        x: direction < 0 ? 50 : -50,
        opacity: 0,
        transition: { duration: 0.3 }
    })
};

const StudentTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 4000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Logic to get two items for the row
    const getVisibleTestimonials = () => {
        const first = testimonials[currentIndex];
        const second = testimonials[(currentIndex + 1) % testimonials.length];
        return [first, second];
    };

    return (
        <motion.section
            className="relative w-full max-w-[1050px] mt-18 mx-auto px-4 py-8 flex flex-col items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Heading */}
            <motion.div
                className="relative z-10 flex flex-col items-center mb-10 text-center"
                variants={itemVariants}
            >
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    <h2 className="text-[25px] md:text-[40px] font-bold text-white uppercase tracking-tight">
                        Student Testimonials
                    </h2>
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                </div>
                <p className="text-[16px] text-gray-400 font-medium">
                    What our users say about us
                </p>
            </motion.div>

            {/* Carousel Container */}
            <div className="relative w-full flex items-center justify-center gap-4">
                
                {/* Desktop Prev Button */}
                <motion.button
                    onClick={prevTestimonial}
                    className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-blue-900/30 text-white items-center justify-center border border-white/10 backdrop-blur-md z-20"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 58, 138, 0.6)' }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18L9 12L15 6" /></svg>
                </motion.button>

                {/* Cards Wrapper */}
                <div className="w-full overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                        >
                            {getVisibleTestimonials().map((item, idx) => (
                                <div
                                    key={`${currentIndex}-${idx}`}
                                    className={`w-full border border-white/10 rounded-[24px] p-8 min-h-[220px] flex flex-col justify-center relative shadow-2xl transition-all duration-300 hover:border-blue-500/40 ${idx === 1 ? 'hidden md:flex' : 'flex'}`}
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(10, 10, 15, 1) 0%, rgba(20, 20, 35, 1) 100%)'
                                    }}
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V4H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V12C2.017 12.5523 1.56928 13 1.017 13H0.017V4H10.017V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z" /></svg>
                                    </div>
                                    <p className="text-gray-300 text-lg italic mb-6 leading-relaxed relative z-10">
                                        "{item.quote}"
                                    </p>
                                    <h4 className="text-blue-400 font-bold text-xl tracking-wide">
                                        {item.author}
                                    </h4>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Desktop Next Button */}
                <motion.button
                    onClick={nextTestimonial}
                    className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-blue-900/30 text-white items-center justify-center border border-white/10 backdrop-blur-md z-20"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(30, 58, 138, 0.6)' }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18L15 12L9 6" /></svg>
                </motion.button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                        }`}
                    />
                ))}
            </div>

            {/* Mobile Arrows */}
            <div className="flex md:hidden gap-6 mt-6">
                <button onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-blue-900/20 border border-white/10 flex items-center justify-center text-white">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" /></svg>
                </button>
                <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-blue-900/20 border border-white/10 flex items-center justify-center text-white">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18L15 12L9 6" /></svg>
                </button>
            </div>

            {/* Decorative Star */}
            <div className="absolute top-0 right-10 opacity-20 animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="white" /></svg>
            </div>

        </motion.section>
    );
};

export default StudentTestimonial;