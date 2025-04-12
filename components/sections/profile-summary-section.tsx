"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onNavigate?: {
    contact: () => void // Function to navigate to the contact section
  }
}


export function ProfileSummarySection({ onNavigate }: HeroSectionProps) {
 const [isScrolled, setIsScrolled] = useState(false)


 const defaultContactNavigation = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  } else {
    console.log("Contact section not found")
  }
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


  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Profile Image and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src="/images/profile-pic.jpg"
                  alt="Atty. Gabriel Gil Manlabus Baes"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                  <h2 className="text-2xl font-bold text-white">
                    Gabriel Baes
                  </h2>
                  <p className="text-slate-200">Managing Partner</p>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700">
                    Room 302 Aniceta Bldg., Osmeña Blvd., 
                      <br />
                      Capitol Site, Cebu City Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700">09177715766</p>
                    <p className="text-sm text-slate-500">
                    ggmbaes.law@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-slate-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700">Available for Consultation</p>
                    <p className="text-sm text-slate-500">
                      Monday - Friday, 9AM - 5PM
                    </p>
                  </div>
                </div>

                <Button onClick={() => (onNavigate?.contact ? onNavigate.contact() : defaultContactNavigation())} className="w-full">Schedule Consultation</Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Atty. Gabriel Gil Manlabus Baes
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="bg-slate-100">
                  Topnotcher
                </Badge>
                <Badge variant="outline" className="bg-slate-100">
                  Bar Exam 2022
                </Badge>
                <Badge variant="outline" className="bg-slate-100">
                  Renowned Cebu-Based Lawyer
                </Badge>
                <Badge variant="outline" className="bg-slate-100">
                  Contract Law
                </Badge>
              </div>
              <p className="text-slate-700 mb-4">
                Gabriel Gil Baes is a highly respected legal practitioner based
                in Cebu City, known for his sharp intellect, unwavering
                dedication to justice, and exemplary performance in the
                courtroom. A proud graduate of the University of San Carlos
                (USC), Baes made national headlines when he placed 6th in the
                2022 Bar Examinations, earning a remarkable rating of 87.25%.
                His achievement marked a significant milestone not only for
                himself but also for the Visayas legal community, as he was the
                only law graduate from outside Metro Manila to secure a spot in
                the prestigious Top Ten.
              </p>
              <p className="text-slate-700">
                Since passing the Bar, Atty. Baes has established himself as one
                of Cebu’s most promising and respected lawyers, gaining
                recognition for his courtroom presence, strategic legal
                thinking, and client-centered approach. Known for his integrity
                and professionalism, he has quickly built a reputation for
                delivering results while upholding the highest standards of
                legal ethics. Atty. Baes continues to make a meaningful impact
                in the legal field, offering his expertise across various
                practice areas and representing clients with competence and
                compassion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-slate-50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="h-10 w-10 text-slate-700 mb-3" />
                  <h3 className="font-bold text-slate-900">Recognition</h3>
                  <p className="text-sm text-slate-600">
                    Top 6 Bar Exam 2022 Nationwide
                    <br />
                    Highly Respected Cebu-Based Lawyer
                    <br />
                    Known for Courtroom Excellence
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <BookOpen className="h-10 w-10 text-slate-700 mb-3" />
                  <h3 className="font-bold text-slate-900">Education</h3>
                  <p className="text-sm text-slate-600">
                    University of San Carlos
                    <br />
                    Bar Topnotcher, 2022 (Rank 6)
                    <br />
                    87.25% Bar Rating
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Briefcase className="h-10 w-10 text-slate-700 mb-3" />
                  <h3 className="font-bold text-slate-900">Experience</h3>
                  <p className="text-sm text-slate-600">
                    Practicing Lawyer in Cebu
                    <br />
                    Known for Strategic Legal Advocacy
                    <br />
                    Trusted in Complex Legal Cases
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Areas of Practice
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Corporate Formation & Governance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Mergers & Acquisitions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Business Litigation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Contract Negotiation & Drafting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Securities Regulation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Bar Admissions
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Supreme Court of the Philippines
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Authorized to practice nationwide
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    Based in Cebu City, Philippines
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
