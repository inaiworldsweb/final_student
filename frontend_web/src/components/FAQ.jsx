import React, { useState } from 'react';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="w-full bg-[#050505]  rounded-xl px-6 py-5 cursor-pointer hover:border-white/10 transition-all duration-300 mb-4"
        >
            <div className="flex items-center justify-between">
                <h3 className="text-white font-medium text-base md:text-lg">{question}</h3>
                <span className="text-white/50 text-2xl font-light transition-all duration-300">
                    {isOpen ? '−' : '+'}
                </span>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Footer = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Can I ask doubts anytime?",
            answer: "Yes. You can ask questions via voice or chat 24×7."
        },
        {
            question: "Are classes live or recorded?",
            answer: "Both. Attend live classes or revise with recordings."
        },
        {
            question: "Will I get notes and revision material?",
            answer: "Yes. AI generates notes and summaries automatically."
        },
        {
            question: "Is ED-INAI difficult to use?",
            answer: "No. It’s designed to be simple and student-friendly."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <footer className="relative w-full max-w-[1050px] mx-auto px-4 py-24 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-24">

            {/* Left Side: Heading */}
            <div className="w-full md:w-1/3 flex flex-col items-start relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Frequently Asked <br /> Questions
                </h2>

                {/* Decorative Star (Bottom Left) */}
                <div className="absolute top-[200px] left-10 md:left-0 animate-pulse duration-[4000ms] opacity-60">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                    </svg>
                </div>
            </div>

            {/* Right Side: FAQ List */}
            <div className="w-full md:w-2/3 relative z-10">
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggleFaq(index)}
                    />
                ))}
            </div>

        </footer>
    );
};

export default Footer;
