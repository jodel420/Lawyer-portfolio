"use client"

import { useState,useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"

interface HeroSectionProps {
  onNavigate?: {
    contact: () => void // Function to navigate to the contact section
  }
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  const defaultContactNavigation = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      console.log("Contact section not found")
    }
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

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

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-[500px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <img src="/images/bg-2.jpg" alt="Law firm background" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Justice & Excellence
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Dedicated legal representation with a proven track record of success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <Button onClick={openModal} size="lg" className="bg-slate-100 text-slate-900 hover:bg-slate-200">
              Schedule Consultation
            </Button> */}

                    <Button  onClick={() => (onNavigate?.contact ? onNavigate.contact() : defaultContactNavigation())} size="lg" className="bg-slate-100 text-slate-900 hover:bg-slate-200">
                      Schedule Consultation
                    </Button>
            
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-100">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Number.POSITIVE_INFINITY }}
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-10 w-10 text-slate-300" />
      </motion.div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  )
}

