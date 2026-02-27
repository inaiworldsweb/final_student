import logo from '../assets/EDINAI Logo.png'

function Header() {
    return (
        <section className="relative flex flex-col items-center justify-start text-center px-4" style={{ paddingTop: '150px' }}>

            {/* Logo - Positioned Top Left */}
            <div className="absolute top-3 left-3 md:top-2 md:left-8 z-50">
                <img src={logo} alt="EDINAI Logo" className="h-28 md:h-35 w-auto" loading="eager" fetchpriority="high" />
            </div>

            {/* Main Content Container - Fixed width 1050px for more side space */}
            <div className="w-full max-w-[1050px] mx-auto relative">

                {/* Decorative Stars - Positioned relative to the content container for exact alignment */}

                {/* Right Star - Positioned above 'Teachers'/'With' */}
                <div className="absolute top-[-60px] right-[180px] animate-pulse z-10 hidden md:block">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#D1D5DB" />
                    </svg>
                </div>

                {/* Left Star - Positioned left of 'India's' */}
                <div className="absolute top-[80px] left-[-40px] animate-pulse z-10 hidden md:block" style={{ animationDelay: '1s' }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" fill="#9CA3AF" />
                    </svg>
                </div>

                {/* Heading Section - height: 379px, gap: 40px */}
                <div className="flex flex-col items-center justify-start mb-10" style={{ gap: '20px' }}>

                    {/* Main Heading - width: 1194px, gap: 5px */}
                    <div className="w-full flex flex-col items-center justify-center" style={{ gap: '3px' }}>
                        <h1 className="text-4xl md:text-4xl lg:text-[60px] font-bold leading-[1.1] tracking-tight text-white">
                            <span className="block">Learn Smarter With</span>
                            <span className="block mt-2">
                                India's <span className="text-[#4169E1]">First</span> Virtual <span className="text-[#4169E1]">AI</span> Teachers
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-gray-400 text-sm md:text-base max-w-[900px] mx-auto leading-relaxed opacity-80">
                        Ed-INAI gives students access to Virtual AI Teachers trained on their syllabus delivering live & recorded classes, instant doubt solving, and personalized learning support 24×7.
                    </p>
                </div>

                {/* CTA Buttons Section */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                        className="text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20 hover:opacity-90"
                        style={{ background: 'linear-gradient(90deg, #113BE1 0%, #4268FF 50.48%, #4062E3 72.41%, #113BE1 100%)' }}
                    >
                        Start Learning Now
                    </button>
                    <button className="bg-transparent border border-white hover:border-gray-400 text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-white/5">
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header
