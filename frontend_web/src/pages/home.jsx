import Header from '../components/header'
import StudentStruggle from '../components/studentstruggle'
import PersonalAITeacher from '../components/personal_AI_Teacher'
import ED_INAI from '../components/ED_INAI'
import MeetYourTeacher from '../components/meet_your_teacher'
import LearningFlow from '../components/learning_flow'
import KeyFeatures from '../components/key_features'
import WhyStudentsLoveEdInai from '../components/why_love_edinai'
import EdInaiFor from '../components/edinai_for'
import DashboardPreview from '../components/dashboard_preview'
import Demo from '../components/demo'
import StudentTestimonial from '../components/student_testimonial'
import LearningToday from '../components/learning_today'
import FAQ from '../components/FAQ'
import Footer from '../components/footer'

function Home() {
    return (
        <div className="min-h-screen text-white font-['Inter',sans-serif] relative overflow-hidden" style={{ background: '#010101' }}>

            {/* Background Grid Lines - Matching the reference image */}
            <div className="absolute inset-0 pointer-events-none flex justify-center w-full max-w-[1600px] mx-auto z-0 opacity-20">
                <div className="w-px h-full bg-[#333] mx-auto"></div>
                <div className="w-px h-full bg-[#333] mx-auto"></div>
                <div className="w-px h-full bg-[#333] mx-auto"></div>
                <div className="w-px h-full bg-[#333] mx-auto"></div>
                <div className="w-px h-full bg-[#333] mx-auto"></div>
                <div className="w-px h-full bg-[#333] mx-auto"></div>
                <div className="w-px h-full bg-[#333] mx-auto"></div>
            </div>

            <div className="w-full mx-auto relative z-10">
                {/* Header Component */}
                <Header />
                {/* Student Struggle Component */}
                <StudentStruggle />
                {/* Personal AI Teacher Comparison Component */}
                <PersonalAITeacher />
                {/* What is ED-INAI Component */}                
                    <ED_INAI />
                {/* Meet Your AI Teacher Component */}
                    <MeetYourTeacher />
                {/* Learning Flow Component */}
                    <LearningFlow />
                {/* Key Features for Students Component */}
                <KeyFeatures />
                {/* Why Students Love ED-INAI Component */}
                <WhyStudentsLoveEdInai />
                {/* Who is Ed-Inai For Component */}
                <EdInaiFor />
                {/* Dashboard Preview Component */}
                    <DashboardPreview />
                {/* Watch Demo Component */}
                    <Demo />
                {/* Student Testimonials Component */}
                <StudentTestimonial />
                {/* Start Learning Today Component */}
                <LearningToday />
                {/* FAQ Component */}
                <FAQ />
                {/* Footer Component */}
                <Footer />
            </div>
        </div>
    )
}

export default Home
