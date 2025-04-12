"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const caseResults = [
  {
    title: "Corporate Merger Dispute",
    amount: "₱235 Million",
    category: "Corporate Law",
    description:
      "Successfully represented a mid-size Philippine tech company in a complex merger dispute, securing a favorable settlement.",
  },
  {
    title: "Medical Malpractice Settlement",
    amount: "₱157 Million",
    category: "Personal Injury",
    description:
      "Obtained substantial compensation for a client who suffered serious complications due to surgical negligence in a major Metro Manila hospital.",
  },
  {
    title: "Intellectual Property Defense",
    amount: "Case Dismissed",
    category: "IP Law",
    description:
      "Successfully defended a Filipino software firm against patent infringement claims, resulting in the case being dismissed by the court.",
  },
  {
    title: "Wrongful Termination",
    amount: "₱53 Million",
    category: "Labor Law",
    description:
      "Secured compensation for a senior executive wrongfully terminated after reporting workplace safety violations to the DOLE.",
  },
  {
    title: "Real Estate Development Dispute",
    amount: "₱196 Million",
    category: "Real Estate Law",
    description:
      "Represented a group of developers in a dispute with contractors over a Metro Cebu condominium project, resulting in a favorable ruling.",
  },
  {
    title: "Criminal Defense Victory",
    amount: "Not Guilty",
    category: "Criminal Law",
    description:
      "Successfully defended a client against serious criminal charges in a Quezon City RTC, resulting in full acquittal.",
  },
];


export function CaseResultsSection() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Notable Case Results</h2>
          <p className="text-lg text-slate-700">
            Our track record of success demonstrates our commitment to achieving the best possible outcomes for our
            clients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseResults.map((caseResult, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-l-4 border-l-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      {caseResult.category}
                    </Badge>
                    <div className="text-xl font-bold text-slate-900">{caseResult.amount}</div>
                  </div>
                  <CardTitle className="text-xl">{caseResult.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{caseResult.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

