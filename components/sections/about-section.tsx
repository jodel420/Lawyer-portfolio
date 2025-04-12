"use client"

import { motion } from "framer-motion"
import { Scale } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-lg overflow-hidden"
              >
                <img
                  src="/images/bg-aniceta.png"
                  alt="Law firm office"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white">
                    <Scale className="h-6 w-6" />
                    <span className="text-lg font-semibold">Established 1995</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">About Our Firm</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Founded in 1995, our law firm has established itself as a leader in providing exceptional legal
                    services across multiple practice areas. With a team of experienced attorneys, we are committed to
                    delivering personalized attention and strategic solutions to each client.
                  </p>
                  <p>
                    Our approach combines thorough legal knowledge with practical business sense, allowing us to address
                    complex legal challenges effectively. We pride ourselves on our accessibility, responsiveness, and
                    dedication to achieving the best possible outcomes for our clients.
                  </p>
                  <p>
                    Whether you're facing a personal injury claim, need assistance with business matters, or require
                    representation in court, our team is ready to provide the guidance and advocacy you deserve.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-slate-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-slate-900">25+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-slate-900">500+</div>
                    <div className="text-sm text-slate-600">Cases Won</div>
                  </div>
                  <div className="bg-slate-100 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-slate-900">25</div>
                    <div className="text-sm text-slate-600">Expert Attorneys</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

