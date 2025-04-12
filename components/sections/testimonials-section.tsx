"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Atty. Gabriel Baes provided exceptional legal support during our company’s merger. His strategic advice and professionalism ensured a smooth and favorable outcome.",
    author: "Engr. Carlo Santos",
    position: "President, Innovatech Solutions Inc.",
  },
  {
    quote:
      "I was lost after my accident, but Atty. Baes and his team helped me every step of the way. They handled everything—from paperwork to court hearings—and got me the compensation I needed.",
    author: "Ma. Teresa Lopez",
    position: "Personal Injury Client",
  },
  {
    quote:
      "During my annulment, Atty. Baes was not only a skilled lawyer but also a compassionate advisor. I am grateful for his guidance and steady support.",
    author: "Jonathan Reyes",
    position: "Family Law Client",
  },
  {
    quote:
      "As a local entrepreneur, I rely on Atty. Baes for all my legal needs—from drafting contracts to resolving disputes. His legal expertise is invaluable to my business.",
    author: "Jasmine Lim",
    position: "Founder, Lim’s Home Interiors",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Client Testimonials</h2>
          <p className="text-lg text-slate-700">
            Hear what our clients have to say about their experience working with our legal team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 z-10 hidden md:block"
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
          >
            <button className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors">
              <ChevronLeft className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 z-10 hidden md:block"
            onClick={() => {
              next()
              setAutoplay(false)
            }}
          >
            <button className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition-colors">
              <ChevronRight className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <Quote className="h-12 w-12 text-slate-300 mb-6" />
                    <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-6">
                      "{testimonials[current].quote}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <div className="font-semibold text-slate-900">{testimonials[current].author}</div>
                      <div className="text-slate-600 text-sm">{testimonials[current].position}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === current ? "bg-slate-700" : "bg-slate-300"}`}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

