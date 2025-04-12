"use client"

import type React from "react"

import { useState } from "react"
import { X, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormErrors {
  fullname?: string
  email?: string
  phone?: string
  location?: string
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    concerns: "",
    files: [] as File[],
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number is invalid"
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 3) // Limit to 3 files
      setFormData((prevData) => ({
        ...prevData,
        files: [...prevData.files, ...files],
      }))
    }
  }

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      console.log("Form validation failed", errors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // Log all form data
      console.log("Form submitted successfully:", {
        fullName: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        concerns: formData.concerns,
        files: formData.files.map((file) => ({
          name: file.name,
          type: file.type,
          size: `${(file.size / 1024).toFixed(2)} KB`,
        })),
      })

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Close modal after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
        // Reset form
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          location: "",
          concerns: "",
          files: [],
        })
      }, 2000)
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto my-8 p-6 md:p-8">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
            <p className="text-slate-600 text-center">
              Your consultation request has been received. We'll contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl">Schedule Consultation</DialogTitle>
              <DialogDescription>
                Fill out the form below to schedule a consultation with our legal team.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-sm font-medium">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className={errors.fullname ? "border-red-500" : ""}
                  placeholder="Enter your full name"
                />
                {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "border-red-500" : ""}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? "border-red-500" : ""}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">
                  Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className={errors.location ? "border-red-500" : ""}
                  placeholder="City, State"
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="concerns" className="text-sm font-medium">
                  Legal Concerns
                </Label>
                <Textarea
                  id="concerns"
                  name="concerns"
                  value={formData.concerns}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please describe your legal concerns or questions"
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="files" className="text-sm font-medium">
                  Attach Files (up to 3)
                </Label>
                <Input
                  id="files"
                  name="files"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  className="cursor-pointer"
                  disabled={formData.files.length >= 3}
                />

                {formData.files.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {formData.files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-slate-100 p-2 rounded-md">
                        <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="h-6 w-6 p-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-xs text-slate-500">Accepted file types: PDF, DOC, DOCX, JPG, PNG (Max 5MB each)</p>
              </div>

              <Alert className="bg-slate-50 border-slate-200 mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  All fields marked with <span className="text-red-500">*</span> are required.
                </AlertDescription>
              </Alert>

              <DialogFooter className="mt-6 pt-4 border-t flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="w-full sm:w-auto order-1 sm:order-2" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

