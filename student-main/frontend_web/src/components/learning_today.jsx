import React from 'react';
import bgImage from '../logo/6456743230b63b81430cbd7d9a404141b2aa83c2.png';

const LearningToday = () => {
    return (
        <section className="w-full max-w-[1050px] mx-auto px-4 py-20">
            <div
                className="w-full rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-center py-20 px-6 md:px-12 shadow-2xl"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Start Learning Smarter<br />with AI Today
                    </h2>

                    <p className="text-gray-200 text-base md:text-lg mb-10 max-w-2xl font-medium opacity-90">
                        Don't let doubts slow you down.<br className="hidden md:block" />
                        Learn with <span className="font-bold text-white">India's First Virtual AI Teachers.</span>
                    </p>

                    <button className="bg-white text-blue-900 font-bold py-4 px-10 rounded-xl shadow-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 text-lg">
                        Start Learning Now
                    </button>
                </div>

                {/* Decorative star top right */}
                <div className="absolute top-[10%] right-[10%] animate-pulse opacity-90 hidden md:block">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="#9CA3AF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default LearningToday;
