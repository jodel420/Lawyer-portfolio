"use client"

import type React from "react"

import { useRef, useState } from "react"
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

 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Use Next.js's useRouter

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      router.push('/'); // Navigate to the home page
    } else {
      alert('Invalid credentials');
    }
  };

  // const router = useRouter();



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

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
      </motion.div>
    </div>
  )
}
