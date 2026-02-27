import React, { useState } from 'react';

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
        quote: "ED-INAI makes learning complex topics incredibly simple and fun.",
        author: "JEE Aspirant"
    }
];

const StudentTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Heading */}
            <div className="relative z-10 flex flex-col items-center mb-16 text-center">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                        STUDENT TESTIMONIALS 
                    </h2>
                    <div className="w-0.5 h-8 bg-white opacity-80"></div>
                </div>
                <p className="text-gray-300 text-sm tracking-wide font-medium">
                    What’s our user says about us
                </p>
            </div>

            {/* Testimonial Slider Container */}
            <div className="relative w-full max-w-4xl flex items-center justify-center gap-8 md:gap-12">

                {/* Prev Button */}
                <button
                    onClick={prevTestimonial}
                    className="hidden md:flex w-12 h-10 rounded-full bg-blue-900/50 hover:bg-blue-800 text-white items-center justify-center transition-colors shadow-lg border border-blue-500/30"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Main Card */}
                <div
                    className="w-full border border-white/10 rounded-2xl p-5 md:p-8  min-h-[250px] flex flex-col justify-center relative shadow-2xl overflow-hidden"
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
                        <h4 className="text-white font-bold text-xl md:text-2xl tracking-wide">
                            {testimonials[currentIndex].author}
                        </h4>
                    </div>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-500 w-3' : 'bg-gray-600'}`}
                            ></div>
                        ))}
                    </div>

                </div>

                {/* Next Button */}
                <button
                    onClick={nextTestimonial}
                    className="hidden md:flex w-12 h-10 rounded-full bg-blue-900/50 hover:bg-blue-800 text-white items-center justify-center transition-colors shadow-lg border border-blue-500/30"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            </div>

            {/* Mobile Navigation (Visible only on small screens) */}
            <div className="flex md:hidden gap-6 mt-6">
                <button onClick={prevTestimonial} className="w-10 h-10 rounded-full bg-blue-900/50 text-white flex items-center justify-center border border-blue-500/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18L9 12L15 6" /></svg>
                </button>
                <button onClick={nextTestimonial} className="w-10 h-10 rounded-full bg-blue-900/50 text-white flex items-center justify-center border border-blue-500/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18L15 12L9 6" /></svg>
                </button>
            </div>


            {/* Decorative Top Star */}
            <div className="absolute top-[0%] left-1/2 transform -translate-x-1/2 -mt-10 animate-pulse duration-[3000ms] opacity-60">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                </svg>
            </div>

        </section>
    );
};

export default StudentTestimonial;
