"use client"

import { motion } from "framer-motion"
import { Building, Briefcase, Scale, Home, FileText, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const practiceAreas = [
  {
    title: "Corporate Law",
    description: "Business formation, contracts, mergers & acquisitions, and corporate governance.",
    icon: Building,
  },
  {
    title: "Personal Injury",
    description: "Representation for victims of accidents, medical malpractice, and wrongful death.",
    icon: Shield,
  },
  {
    title: "Family Law",
    description: "Divorce, child custody, adoption, and other domestic relations matters.",
    icon: Home,
  },
  {
    title: "Criminal Defense",
    description: "Defense against misdemeanor and felony charges at state and federal levels.",
    icon: Scale,
  },
  {
    title: "Estate Planning",
    description: "Wills, trusts, probate, and comprehensive estate planning services.",
    icon: FileText,
  },
  {
    title: "Employment Law",
    description: "Workplace discrimination, wrongful termination, and employment contracts.",
    icon: Briefcase,
  },
]

export function PracticeAreasSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-slate-100">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Practice Areas</h2>
          <p className="text-lg text-slate-700">
            Our firm specializes in a wide range of legal services to meet your needs. With expertise across multiple
            practice areas, we provide comprehensive legal solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {practiceAreas.map((area, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base">{area.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

