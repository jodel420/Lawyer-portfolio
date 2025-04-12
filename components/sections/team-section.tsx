"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Vincent Marquez",
    role: "Managing Partner",
    specialization: "Corporate Law",
    image: "/images/vincent.jpg",
    bio: "With over 20 years of experience, Vincent leads our corporate practice with expertise in mergers and acquisitions.",
  },
  {
    name: "Boots Morante",
    role: "Senior Partner",
    specialization: "Criminal Defense",
    image: "/images/boots.jpg",
    bio: "Former prosecutor with an impressive record of successful criminal defense cases at both state and federal levels.",
  },
  {
    name: "Elena Rodriguez",
    role: "Partner",
    specialization: "Family Law",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Dedicated to helping families navigate complex legal matters with compassion and strategic advocacy.",
  },
  {
    name: "David Washington",
    role: "Partner",
    specialization: "Personal Injury",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Recovered millions in damages for clients injured due to negligence, with a focus on complex injury cases.",
  },
]

export function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Legal Team</h2>
          <p className="text-lg text-slate-700">
            Meet our experienced attorneys who are dedicated to providing exceptional legal representation and
            personalized service to each client.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-center space-x-4">
                      <a href="#" className="text-white hover:text-slate-200 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-white hover:text-slate-200 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-white hover:text-slate-200 transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-slate-600 font-medium">{member.role}</p>
                  <p className="text-slate-500 text-sm">{member.specialization}</p>
                </CardContent>
                <CardFooter className="text-sm text-slate-700 border-t pt-4 mt-2">{member.bio}</CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

