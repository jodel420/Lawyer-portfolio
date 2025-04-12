"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add the selected date and time to the form data
    if (selectedDate) {
      formData.append("scheduleDate", selectedDate.toISOString().split("T")[0]);
    }
    if (selectedTime) {
      formData.append(
        "scheduleTime",
        selectedTime.toLocaleTimeString("en-US", { hour12: true })
      );
    }

    try {
      const response = await fetch("https://formspree.io/f/xwplapzy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        form.reset(); // Clear all inputs
        setSelectedDate(null); // Clear the date picker
        setSelectedTime(null); // Clear the time picker
        setSubmitted(true);

        // Reset the submitted state after a delay (optional)
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        alert("There was an issue submitting your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Contact Us
          </h2>
          <p className="text-lg text-slate-700">
            Schedule a consultation with our legal team to discuss your case and
            explore your options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input id="first-name" name="first-name" required />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <Input id="last-name" name="last-name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="schedule" className="text-sm font-medium">
                      Schedule
                    </label>
                    <div className="flex gap-4 justify-center">
                      <DatePicker
                        id="schedule"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        className="w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholderText="Select a date"
                        dateFormat="MMMM d, yyyy"
                        autoComplete="off"
                        required
                        popperPlacement="bottom-start" // Ensures the dropdown appears below the input
                        popperModifiers={[
                          {
                            name: "offset",
                            options: {
                              offset: [0, 10], // Adjusts the dropdown's offset
                            },
                            fn: () => ({}), // No-op function to satisfy the type requirement
                          },
                        ]}
                      />
                      <DatePicker
                        selected={selectedTime}
                        onChange={(time) => setSelectedTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="w-full max-w-xs border p-2 rounded"
                        placeholderText="Click to select time"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                  <Button
                    type="button"
                    className="w-full bg-red-500 text-white hover:bg-red-600"
                    onClick={() => {
                      const form = document.querySelector("form");
                      form?.reset(); // Reset all form inputs
                      setSelectedDate(null); // Reset date picker
                      setSelectedTime(null); // Reset time picker
                    }}
                  >
                    Cancel
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-slate-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Main Office</h3>
                    <p className="text-slate-600">
                      Aniceta Building, Osmeña Blvd,
                      <br />
                      Cebu City, 6000 Cebu Philippines
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-5 w-5 text-slate-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Phone</h3>
                    <p className="text-slate-600">09177715766</p>
                    <p className="text-slate-500 text-sm">
                      Toll Free: 1-800-LAW-FIRM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-5 w-5 text-slate-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <p className="text-slate-600">anecita@lawfirm.com</p>
                    <p className="text-slate-500 text-sm">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-5 w-5 text-slate-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-900">Office Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-slate-500 text-sm">
                      Weekends: By appointment only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-auto">
              <CardContent className="p-0">
                <div className="aspect-video w-full h-64 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.104597630496!2d123.88643947764537!3d10.315735363522796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9994a271f1827%3A0x95d744d439fd6eb6!2sAniceta%20Building%2C%20Osme%C3%B1a%20Blvd%2C%20Cebu%20City%2C%206000%20Cebu!5e1!3m2!1sen!2sph!4v1744104603726!5m2!1sen!2sph"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
