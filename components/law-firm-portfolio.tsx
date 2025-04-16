"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProfileSummarySection } from "@/components/sections/profile-summary-section"
import { AboutSection } from "@/components/sections/about-section"
import { PracticeAreasSection } from "@/components/sections/practice-areas-section"
import { TeamSection } from "@/components/sections/team-section"
import { CaseResultsSection } from "@/components/sections/case-results-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { TestComponent } from "./TestComponents"
import { useRouter } from "next/navigation"; // U
export function LawFirmPortfolio() {
  const profileRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const practiceAreasRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const caseResultsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  // const adminiRef = useRef<HTMLDivElement>(null)



  const router = useRouter();



  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
      ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const redirectToAdmin = () => {
    router.push("/admin"); // Replace with your admin page route
  };

  // Create a navigation object with all section navigation functions
  const navigation = {
    profile: () => scrollToSection(profileRef),
    about: () => scrollToSection(aboutRef),
    practiceAreas: () => scrollToSection(practiceAreasRef),
    team: () => scrollToSection(teamRef),
    caseResults: () => scrollToSection(caseResultsRef),
    testimonials: () => scrollToSection(testimonialsRef),
    contact: () => scrollToSection(contactRef),
    admin: () => redirectToAdmin(),
  }

  return (
    <div className="min-h-screen bg-slate-50">
     <Navbar onNavigate={navigation} redirectToAdmin={redirectToAdmin} />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection onNavigate={{ contact: navigation.contact }} />

        <div ref={profileRef}>
          <ProfileSummarySection onNavigate={{ contact: navigation.contact }}/>
        </div>

        <div ref={aboutRef}>
          <AboutSection />
        </div>

        <div ref={practiceAreasRef}>
          <PracticeAreasSection />
        </div>

        <div ref={teamRef}>
          <TeamSection />
        </div>

        <div ref={caseResultsRef}>
          <CaseResultsSection />
        </div>

        <div ref={testimonialsRef}>
          <TestimonialsSection />
        </div>

        <div id="contact" ref={contactRef}>
          <ContactSection />
        </div>

        <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
      <div className="mt-4 p-4 bg-blue-500 text-white rounded">
        Testing Tailwind CSS
      </div>
    </div>
      </motion.div>
    </div>
  )
}
