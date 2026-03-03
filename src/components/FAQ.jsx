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
      className="w-full bg-[#050505] ms-0 sm:ms-4 md:ms-8 rounded-xl px-3 sm:px-6 py-3 sm:py-4 cursor-pointer hover:border-white/10 transition-all duration-300 mb-2 sm:mb-4"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-white font-medium text-xs sm:text-sm md:text-base md:text-lg leading-snug">
          {question}
        </h3>
        <motion.span
          className="text-white/50 text-xl sm:text-2xl font-light flex-shrink-0 pt-1"
          transition={{ duration: 0.15 }}
        >
          {isOpen ? "-" : "+"}
        </motion.span>
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
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed pt-2 sm:pt-4">
              {answer}
            </p>
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
    <motion.footer
      className="relative w-full max-w-[1050px] mt-12 mx-auto px-4 py-4 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Left Side: Heading */}
      <motion.div
        className="w-full md:w-1/3 flex flex-col items-center relative z-10"
        variants={itemVariants}
      >
        <h2 className="text-2xl sm:text-3xl w-full md:ms-15 sm:w-full md:w-[400px] md:text-[40px] font-bold text-white leading-tight">
          Frequently Asked <br />
          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        {/* Decorative Star (Bottom Left) - Hidden on mobile */}
        <motion.div
          className="absolute top-[200px] left-10 md:left-0 opacity-60 hidden md:block"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <svg
            width="80"
            height="80"
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
    </motion.footer>
  );
};

export default FAQ;
