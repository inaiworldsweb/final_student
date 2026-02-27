import { motion } from 'framer-motion';

// Animation variants for consistent animations across the app
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

// Hover animations
export const hoverScale = {
    scale: 1.03,
    transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const hoverLift = {
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const tapScale = { scale: 0.98 };

// Reusable AnimatedSection wrapper
const AnimatedSection = ({ 
    children, 
    className = "", 
    variant = "fadeInUp",
    delay = 0,
    ...props 
}) => {
    const variants = {
        fadeInUp,
        fadeIn,
        scaleIn
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants[variant]}
            className={className}
            style={{ willChange: 'opacity, transform' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

// Stagger container for lists/grids
export const StaggerContainer = ({ children, className = "", ...props }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
);

// Stagger item wrapper
export const StaggerItem = ({ children, className = "", ...props }) => (
    <motion.div
        variants={staggerItem}
        className={className}
        style={{ willChange: 'opacity, transform' }}
        {...props}
    >
        {children}
    </motion.div>
);

export default AnimatedSection;
