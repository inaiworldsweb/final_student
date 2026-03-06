import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      onClick={onClick}
      // First component ke styles: Gradient background aur border yahan apply kiya hai
      className={`w-full bg-gradient-to-r from-[#0b0b0b] to-[#111827] border rounded-xl transition-all duration-300 ease-out cursor-pointer mb-4 ${
        isOpen
          ? "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          : "border-gray-700/50"
      }`}
      whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.2)" }}
    >
      <div className="w-full flex items-center justify-between px-6 py-5 text-left">
        <h3
          className={`font-medium text-sm md:text-base transition-colors duration-300 ${
            isOpen ? "text-white" : "text-gray-200"
          }`}
        >
          {question}
        </h3>
        {/* First component ka '+' icon aur rotation logic */}
        <span
          className={`text-2xl transition-all duration-300 font-light flex-shrink-0 ${
            isOpen ? "text-blue-400 rotate-45" : "text-gray-400 rotate-0"
          }`}
        >
          +
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25 },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "Can I ask doubts anytime?",
      answer: "Yes. You can ask questions via voice or chat 24×7.",
    },
    {
      question: "Are classes live or recorded?",
      answer: "Both. Attend live classes or revise with recordings.",
    },
    {
      question: "Will I get notes and revision material?",
      answer: "Yes. AI generates notes and summaries automatically.",
    },
    {
      question: "Is edInai difficult to use?",
      answer: "No. It's designed to be simple and student-friendly.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <motion.section
      className="relative w-full max-w-[1050px] mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Left Side: Heading */}
      <motion.div
        className="w-full md:w-2/3 flex flex-col relative z-10"
        variants={itemVariants}
      >
        <h2 className="text-[25px] md:text-[40px]  font-bold text-white leading-[1.1] mb-6">
          Frequently Asked <br />
          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        {/* Decorative Star */}
        <motion.div
          className="mt-12 opacity-40 hidden md:block"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z"
              fill="#9CA3AF"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Right Side: FAQ List */}
      <motion.div
        className="w-full md:w-2/3 relative z-10"
        variants={containerVariants}
      >
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFaq(index)}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQ;
