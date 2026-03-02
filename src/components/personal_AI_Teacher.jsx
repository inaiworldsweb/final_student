import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ═══════════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════════
const COMPARISON_DATA = [
    { feature: "Class Availability", traditional: "Fixed school hours", ai: "24/7 Live + Recordings" },
    { feature: "Doubt Clearing", traditional: "Wait for teacher", ai: "Instant Voice/Text Answers" },
    { feature: "Revision Access", traditional: "Limited notes", ai: "Full Recordings + AI Notes" },
    { feature: "Personalization", traditional: "One style fits all", ai: "Adapts to Your Learning Style" },
    { feature: "Progress Tracking", traditional: "Manual", ai: "Real-Time Dashboard" },
    { feature: "Deployment", traditional: "Months", ai: "3 Weeks Setup" }
];

const TOTAL_NODES = COMPARISON_DATA.length;
const CYCLE_DURATION = 2000;
const STACK_LIMIT = 2;
const VISIBILITY_THRESHOLD = 0.5;

// ═══════════════════════════════════════════════════════════════════════════════
// INTERSECTION OBSERVER HOOK
// ═══════════════════════════════════════════════════════════════════════════════
const useIntersectionObserver = (ref, threshold = 0.5) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting && entry.intersectionRatio >= threshold),
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return isVisible;
};

// ═══════════════════════════════════════════════════════════════════════════════
// PROGRESS RING COMPONENT - Countdown Timer Visual
// ═══════════════════════════════════════════════════════════════════════════════
const ProgressRing = memo(({ progress, radius = 170 }) => {
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 350 350">
            <circle cx="175" cy="175" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <circle
                cx="175"
                cy="175"
                r={radius}
                fill="none"
                stroke="url(#neonGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.7))' }}
            />
            <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="50%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
            </defs>
        </svg>
    );
});

ProgressRing.displayName = 'ProgressRing';

// ═══════════════════════════════════════════════════════════════════════════════
// ORBIT NODE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const OrbitNode = memo(({ item, index, isActive, isRunning, onNodeClick, orbitRadius }) => {
    const angle = (360 / TOTAL_NODES) * index - 90;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * orbitRadius;
    const y = Math.sin(radian) * orbitRadius;
    const finalX = 175 + x - 24;
    const finalY = 175 + y - 24;

    return (
        <motion.div
            className="absolute cursor-pointer"
            style={{ left: 0, top: 0 }}
            initial={{ x: finalX, y: finalY }}
            animate={{ x: finalX, y: finalY }}
            whileHover={{ scale: isActive ? 1.25 : 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNodeClick(index)}
        >
            <motion.div
                animate={isRunning ? { y: [0, -4, 0] } : { y: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.15, ease: 'easeInOut' }}
            >
                <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 backdrop-blur-sm ${isActive ? 'bg-cyan-500/40 border-cyan-400' : 'bg-[#0D1117]/80 border-white/20 hover:border-cyan-400/50'
                        }`}
                    animate={isActive ? { boxShadow: '0 0 20px rgba(6,182,212,0.6)' } : { boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <span className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-400'}`}>{index + 1}</span>
                </motion.div>
                <div
                    className="absolute whitespace-nowrap left-1/2 -translate-x-1/2"
                    style={{ [y < 0 ? 'bottom' : 'top']: '100%', marginTop: y >= 0 ? 4 : 0, marginBottom: y < 0 ? 4 : 0 }}
                >
                    <span className={`text-[9px] px-2 py-0.5 rounded-full ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-500'}`}>
                        {item.feature}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
});

OrbitNode.displayName = 'OrbitNode';

// ═══════════════════════════════════════════════════════════════════════════════
// CIRCULAR WHEEL COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const CircularWheel = memo(({ activeIndex, progress, onNodeClick, isRunning }) => (
    <div className="relative w-[350px] h-[350px] flex-shrink-0">
        <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
        <ProgressRing progress={progress} />
        <div className="absolute inset-10 rounded-full border border-white/5" />

        {/* Central Core */}
        <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 flex items-center justify-center"
            animate={{ boxShadow: isRunning ? ['0 0 25px rgba(6,182,212,0.4)', '0 0 45px rgba(6,182,212,0.6)', '0 0 25px rgba(6,182,212,0.4)'] : '0 0 20px rgba(6,182,212,0.3)' }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <motion.div
                className="absolute inset-0 rounded-full overflow-hidden"
                animate={isRunning ? { rotate: 360 } : {}}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
                <div className="absolute inset-0" style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.2) 10%, transparent 20%)' }} />
            </motion.div>
            <div className="relative z-10 text-center">
                <div className="text-white font-bold text-lg" style={{ textShadow: '0 0 12px rgba(6,182,212,0.8)' }}>ED-INAI</div>
                <div className="text-cyan-200/70 text-[10px]">AI Teachers</div>
            </div>
        </motion.div>

        {COMPARISON_DATA.map((item, index) => (
            <OrbitNode key={index} item={item} index={index} isActive={activeIndex === index} isRunning={isRunning} onNodeClick={onNodeClick} orbitRadius={130} />
        ))}
    </div>
));

CircularWheel.displayName = 'CircularWheel';

// ═══════════════════════════════════════════════════════════════════════════════
// STACKING CARD COMPONENT - With Blur-Behind Effect
// ═══════════════════════════════════════════════════════════════════════════════
const StackCard = memo(({ data, index, stackPosition, isActive }) => {
    // 3D Stack Effect: Higher position = smaller, more blurred, less opaque
    const yOffset = stackPosition * -110;
    const scale = 1 - stackPosition * 0.08;
    const opacity = isActive ? 1 : 0.4;

    return (
        <motion.div
            layout
            className="absolute bottom-0 left-0 right-0"
            style={{ zIndex: 10 - stackPosition }}
            initial={{ y: 80, opacity: 0, scale: 0.85 }}
            animate={{ y: yOffset, opacity, scale }}
            exit={{ y: -120, opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
            {/* Card with Blur-Behind for background cards */}
            <div className={`
                relative p-4 rounded-xl border overflow-hidden
                ${isActive
                    ? 'bg-gradient-to-br from-[#0a1a2e]/95 to-[#0D1117]/95 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.25),0_10px_40px_rgba(0,0,0,0.3)]'
                    : 'bg-[#0D1117]/70 border-white/10 backdrop-blur-sm'
                }
            `}>
                {/* Neon Border Glow for Active Card */}
                {isActive && (
                    <>
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                        <div className="absolute inset-0 rounded-xl border border-cyan-400/30 pointer-events-none" />
                    </>
                )}

                {/* Header */}
                <div className="flex items-center gap-2 mb-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${isActive ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/5 text-gray-500'}`}>
                        {index + 1}
                    </div>
                    <span className={`text-xs uppercase tracking-wider font-bold ${isActive ? 'text-cyan-400' : 'text-gray-500'}`}>
                        {isActive ? 'Now Viewing' : 'Previous'}
                    </span>
                    {isActive && (
                        <motion.span
                            className="ml-auto px-2 py-0.5 bg-green-500/20 border border-green-500/40 rounded-full text-[9px] text-green-400 font-bold"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            ACTIVE
                        </motion.span>
                    )}
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-3 ${isActive ? 'text-white' : 'text-gray-400'}`} style={isActive ? { textShadow: '0 0 15px rgba(6,182,212,0.4)' } : {}}>
                    {data.feature}
                </h3>

                {/* Comparison */}
                <div className="space-y-2">
                    <div className={`flex items-center gap-2 p-2.5 rounded-lg ${isActive ? 'bg-red-500/10 border border-red-500/20' : 'bg-white/5'}`}>
                        <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs shrink-0">✕</span>
                        <div>
                            <div className="text-[9px] text-red-400 uppercase font-bold">Traditional</div>
                            <span className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>{data.traditional}</span>
                        </div>
                    </div>
                    <div className={`flex items-center gap-2 p-2.5 rounded-lg ${isActive ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-white/5'}`}>
                        <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs shrink-0">✓</span>
                        <div>
                            <div className="text-[9px] text-cyan-400 uppercase font-bold">ED-INAI</div>
                            <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>{data.ai}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

StackCard.displayName = 'StackCard';

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const PersonalAITeacher = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [history, setHistory] = useState([0]);
    const [isPaused, setIsPaused] = useState(false);

    // Track elapsed time to continue from where we left off
    const elapsedRef = useRef(0);
    const lastTickRef = useRef(Date.now());

    const isVisible = useIntersectionObserver(sectionRef, VISIBILITY_THRESHOLD);
    const isRunning = isVisible && !isPaused;

    // Reset progress when section goes out of view
    useEffect(() => {
        if (!isVisible) {
            setProgress(0);
            elapsedRef.current = 0;
        }
    }, [isVisible]);

    // Continuous progress animation - Drift-free implementation
    useEffect(() => {
        if (!isRunning) return;

        let animationFrame;
        // Calculate the theoretical start time to match current progress
        // This handles resuming from a paused state without jumping
        const startTime = Date.now() - ((progress / 100) * CYCLE_DURATION);

        const tick = () => {
            const now = Date.now();
            const elapsed = now - startTime;

            // Calculate progress based on total elapsed time
            // This prevents frame-time delta accumulation errors (drift)
            const newProgress = Math.min((elapsed / CYCLE_DURATION) * 100, 100);

            setProgress(newProgress);

            if (newProgress >= 100) {
                // Cycle complete
                setActiveIndex(prev => {
                    const next = (prev + 1) % TOTAL_NODES;
                    setHistory(h => h[h.length - 1] === next ? h : [...h.slice(-5), next]);
                    return next;
                });
                // Progress will be reset to 0 by the handleNodeClick or when this effect re-runs 
                // because activeIndex changes, but we should explicitly reset it here to avoid 
                // a frame where it stays at 100 if the state update is batched.
                setProgress(0);
            } else {
                animationFrame = requestAnimationFrame(tick);
            }
        };

        animationFrame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animationFrame);
    }, [isRunning, activeIndex]); // Re-run when activeIndex changes to start fresh cycle


    // Handle node click - reset timer properly
    const handleNodeClick = useCallback((index) => {
        if (activeIndex === index) return;

        setActiveIndex(index);
        setHistory(h => h[h.length - 1] === index ? h : [...h.slice(-5), index]);

        // Reset progress and timer
        setProgress(0);
        elapsedRef.current = 0;

        // Pause then resume
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 8000);
    }, [activeIndex]);

    const visibleCards = history.slice(-(STACK_LIMIT + 1)).reverse();

    return (
        <motion.section
            ref={sectionRef}
            id="ai-teachers"
            className="relative w-full min-h-screen py-4 flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_50%)]" />
            </div>

            {/* Heading */}
            <motion.div
                className="text-center mb-4 md:mb-6 px-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-2 md:mb-3 leading-tight">
                    Your Personal AI Teacher – Always Available
                </h2>
                <p className="text-[16px] text-gray-400 max-w-2xl mx-auto px-2 md:px-0">
                    edInai solves these problems by giving every student their own AI teacher who explains topics clearly, answers doubts instantly, and helps revise concepts anytime.
                </p>
            </motion.div>

            {/* Desktop Layout */}
            <div
                className="hidden lg:flex items-center justify-center w-full max-w-[1100px] mx-auto gap-12 px-6"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <CircularWheel activeIndex={activeIndex} progress={progress} onNodeClick={handleNodeClick} isRunning={isRunning} />

                <div className="relative w-full max-w-sm h-[300px]">
                    <AnimatePresence mode="popLayout">
                        {visibleCards.map((cardIndex, stackPos) => (
                            <StackCard
                                key={`${cardIndex}-${history.length - stackPos}`}
                                data={COMPARISON_DATA[cardIndex]}
                                index={cardIndex}
                                stackPosition={stackPos}
                                isActive={stackPos === 0}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden w-full px-4">
                {/* Number buttons */}
                <div className="flex justify-center gap-3 mb-6">
                    {COMPARISON_DATA.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleNodeClick(i)}
                            className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${i === activeIndex ? 'bg-cyan-600 text-white scale-110 shadow-lg shadow-cyan-500/30' : 'bg-white/10 text-gray-400 border border-white/20'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                {/* Card */}
                <div className="max-w-sm mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-br from-[#0a1a2e]/95 to-[#0D1117]/95 border border-cyan-500/50 rounded-xl p-4 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                        >
                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-3" style={{ textShadow: '0 0 15px rgba(6,182,212,0.4)' }}>
                                {COMPARISON_DATA[activeIndex].feature}
                            </h3>

                            {/* Comparison */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                                    <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs shrink-0">✕</span>
                                    <div>
                                        <div className="text-[9px] text-red-400 uppercase font-bold">Traditional</div>
                                        <span className="text-sm text-gray-300">{COMPARISON_DATA[activeIndex].traditional}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                                    <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs shrink-0">✓</span>
                                    <div>
                                        <div className="text-[9px] text-cyan-400 uppercase font-bold">ED-INAI</div>
                                        <span className="text-sm font-medium text-white">{COMPARISON_DATA[activeIndex].ai}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur border border-white/10 rounded-full text-xs text-gray-400">
                <div className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-cyan-500 animate-pulse' : 'bg-yellow-500'}`} />
                {!isVisible ? 'Scroll to activate' : isPaused ? 'Paused' : `${activeIndex + 1}/${TOTAL_NODES} • ${Math.round(progress)}%`}
            </div>
        </motion.section>
    );
};

export default PersonalAITeacher;
