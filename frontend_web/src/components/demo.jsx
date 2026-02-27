import React, { useState } from 'react';

const Demo = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const youtubeUrl = "https://www.youtube.com/embed/Rw0bD05OuH0?autoplay=1";

    const playVideo = () => {
        setIsVideoPlaying(true);
    };

    return (
        <section className="relative w-full max-w-[1050px] mx-auto px-4 py-20 flex flex-col items-center justify-center">

            {/* Main Container */}
            <div className="relative w-full bg-[#050505] border border-white/10 rounded-[30px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden shadow-2xl">

                {/* Content - Left Side */}
                <div className="flex flex-col items-start w-full md:w-1/2 z-10">

                    {/* Label */}
                    <div className="flex items-center gap-2 mb-6 border-l-2 border-white pl-3 py-1">
                       Watch Demo                       
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                        See How Students Learn with AI
                    </h2>

                    {/* Bullet Points */}
                    <ul className="text-gray-400 space-y-3 mb-10 text-base md:text-lg">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            AI Teachers Conduct Live Classes
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            Students Ask Doubts Via Voice
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            Notes & Quizzes Are Generated
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                            Progress Is Tracked Automatically
                        </li>
                    </ul>

                    {/* Button */}
                    <button
                        onClick={playVideo}
                        className="px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold rounded-full shadow-lg shadow-blue-900/40 hover:scale-105 transition-transform duration-300"
                    >
                        Watch Demo
                    </button>
                </div>

                {/* Video Area - Right Side */}
                <div className="w-full md:w-1/2 relative z-10">
                    <div className="relative w-full aspect-video bg-[#0A0A0B] border border-white/5 rounded-2xl overflow-hidden shadow-lg">

                        {!isVideoPlaying ? (
                            // Thumbnail with Play Button
                            <div
                                onClick={playVideo}
                                className="relative w-full h-full flex items-center justify-center group cursor-pointer"
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
                                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/5 backdrop-blur-sm z-20">
                                    {/* Play Icon */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                        <path d="M8 5V19L19 12L8 5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
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
                </div>

            </div>
        </section>
    );
};

export default Demo;


