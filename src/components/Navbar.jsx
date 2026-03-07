import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/EDINAI Logo.png";
import StudentRegistrationModal from "./StudentRegistrationModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glass Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/80 to-[#010101]/40 backdrop-blur-md"></div>

        {/* Navbar Content */}
        <div className="relative px-2 md:px-8 py-0 md:py-4 flex items-center justify-between max-w-full">
          {/* Logo on Left */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={logo}
              alt="ED-INAI Logo"
              className="h-24 md:h-28 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
          </motion.div>

          {/* Demo Button on Right */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="text-white text-[13px] font-semibold cursor-pointer text-base px-2 md:px-7 py-1 md:py-2.5 rounded-[7px] cursor-pointer transition-all duration-300 shadow-lg shadow-blue-500/20"
            style={{
              background:
                "linear-gradient(90deg, #113BE1 0%, #4268FF 50.48%, #4062E3 72.41%, #113BE1 100%)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(65, 105, 225, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Demo
          </motion.button>
        </div>
      </motion.nav>

      {/* Student Registration Modal */}
      <StudentRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Spacer to account for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;
