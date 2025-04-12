"use client"

import { useState, useEffect } from "react"
import { Menu, X, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface NavbarProps {
  onNavigate: {
    about: () => void
    practiceAreas: () => void
    team: () => void
    caseResults: () => void
    testimonials: () => void
    contact: () => void
    
  }
}

export function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when clicking a link
  const handleNavClick = (callback: () => void) => {
    callback()
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-slate-900 shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white">
          <Scale className="h-8 w-8" />
          <span className="text-xl font-bold">GABRIEL BAES</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white hover:text-slate-300 transition-colors"
          >
            Home
          </button>
          <button onClick={() => onNavigate.about()} className="text-white hover:text-slate-300 transition-colors">
            About
          </button>
          <button
            onClick={() => onNavigate.practiceAreas()}
            className="text-white hover:text-slate-300 transition-colors"
          >
            Practice Areas
          </button>
          <button onClick={() => onNavigate.team()} className="text-white hover:text-slate-300 transition-colors">
            Team
          </button>
          <button
            onClick={() => onNavigate.caseResults()}
            className="text-white hover:text-slate-300 transition-colors"
          >
            Case Results
          </button>
          <button
            onClick={() => onNavigate.testimonials()}
            className="text-white hover:text-slate-300 transition-colors"
          >
            Testimonials
          </button>
          <Button onClick={() => onNavigate.contact()} size="sm" className="bg-white text-slate-900 hover:bg-slate-200">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick(() => window.scrollTo({ top: 0, behavior: "smooth" }))}
                className="text-white hover:text-slate-300 transition-colors py-2 border-b border-slate-800"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick(onNavigate.about)}
                className="text-white hover:text-slate-300 transition-colors py-2 border-b border-slate-800"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick(onNavigate.practiceAreas)}
                className="text-white hover:text-slate-300 transition-colors py-2 border-b border-slate-800"
              >
                Practice Areas
              </button>
              <button
                onClick={() => handleNavClick(onNavigate.team)}
                className="text-white hover:text-slate-300 transition-colors py-2 border-b border-slate-800"
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick(onNavigate.caseResults)}
                className="text-white hover:text-slate-300 transition-colors py-2 border-b border-slate-800"
              >
                Case Results
              </button>
              <button
                onClick={() => handleNavClick(onNavigate.testimonials)}
                className="text-white hover:text-slate-300 transition-colors py-2 border-b border-slate-800"
              >
                Testimonials
              </button>
              <Button
                onClick={() => handleNavClick(onNavigate.contact)}
                className="bg-white text-slate-900 hover:bg-slate-200 w-full"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

