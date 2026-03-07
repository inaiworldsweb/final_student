import React from "react";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const FeatureItem = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl p-4 flex flex-col items-start text-left transition-colors group border border-[#53546C]/30 hover:border-[#53546C]/50"
      style={{
        background:
          "linear-gradient(80.42deg, rgba(0, 0, 0, 0.16) 25.25%, rgba(83, 84, 108, 0.16) 98.05%)",
        backdropFilter: "blur(10px)",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 30px -10px rgba(0,0,0,0.4)",
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
    >
      {/* Icon */}
      <motion.div
        className="mb-6 text-blue-500"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-white font-bold text-xl mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:via-blue-500 group-hover:to-blue-700 group-hover:bg-clip-text group-hover:text-transparent transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const KeyFeatures = () => {
  return (
    <motion.section
      className="relative w-full max-w-[1050px] mx-auto px-4 md:py-16 py-10 flex flex-col items-center justify-center"
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
        {/* <div className="flex items-center gap-4 mb-2 border-x-2 border-white px-6 py-1"> */}
        <h2 className="text-[25px] md:text-[40px] font-bold mb-6 text-white ">
          Key Features For Students
        </h2>
        {/* </div> */}
        <p className="text-[16px] md:text-[21px] mb-7 text-gray-400 font-medium">
          "Interactive lessons, real-time feedback, and smarter learning tools."
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full relative z-10"
        variants={containerVariants}
      >
        {/* 1. Live AI Classes */}
        <FeatureItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon
                points="10 8 16 12 10 16 10 8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          }
          title="Live AI Classes"
          description="Attend Scheduled AI-Led Lectures For Your Subjects, With Real-Time Explanations And Interaction."
        />

        {/* 2. 24/7 Recordings */}
        <FeatureItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          }
          title="24/7 Recordings"
          description="Missed A Class? Rewatch The Full Lecture Anytime, Control Speed, And Pause Where You Need More Time."
        />

        {/* 3. Instant Doubt Solving */}
        <FeatureItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          }
          title="Instant Doubt Solving"
          description="Ask Doubts In Your Own Words Through Voice Or Chat, And Get Clear, Step-By-Step Solutions."
        />

        {/* 4. AI-Generated Notes */}
        <FeatureItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          }
          title="AI-Generated Notes"
          description="Get Summaries, Key Formulas, And Highlighted Concepts After Every Session – Ready For Exam Prep."
        />

        {/* 5. Adaptive Quizzes */}
        <FeatureItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          }
          title="Adaptive Quizzes"
          description="Practice With Quizzes That Adapt To Your Level And Help You Focus On Weak Areas."
        />

        {/* 6. Smart Tracking */}
        <FeatureItem
          icon={
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-6" />
            </svg>
          }
          title="Smart Tracking"
          description="See Completed Chapters, Quiz Scores, And Recommended Next Steps In A Clean Visual Dashboard."
        />
      </motion.div>

      {/* Decorative Star (Left) */}
      <motion.div
        className="absolute top-[10%] left-[-20px] hidden md:block opacity-60"
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
    </motion.section>
  );
};

export default KeyFeatures;
