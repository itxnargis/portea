// src/components/HealthcarePackages.tsx
import { Check } from "lucide-react"
import { Link } from "react-router-dom" // If you're using React Router; else use <a href="...">
import React from "react"

type Package = {
  id: number
  name: string
  price: string
  description: string
  features: string[]
  popular: boolean
}

const packages: Package[] = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: "₹1,999",
    description: "Essential health checkup package for regular monitoring",
    features: ["Complete Blood Count", "Blood Sugar Test", "Lipid Profile", "Urine Analysis", "Doctor Consultation"],
    popular: false,
  },
  {
    id: 2,
    name: "Comprehensive Health Package",
    price: "₹3,999",
    description: "Detailed health assessment with advanced diagnostics",
    features: [
      "All Basic Package Tests",
      "Thyroid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Vitamin Deficiency Tests",
      "ECG",
      "Doctor Consultation with Follow-up",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Senior Citizen Package",
    price: "₹4,999",
    description: "Specialized health package for elderly patients",
    features: [
      "All Comprehensive Package Tests",
      "Bone Density Test",
      "Pulmonary Function Test",
      "Cardiac Risk Assessment",
      "Prostate Specific Antigen (for men)",
      "Mammography (for women)",
      "Two Doctor Consultations",
    ],
    popular: false,
  },
]

export default function HealthcarePackages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Healthcare Packages in Bangalore</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose from our range of comprehensive healthcare packages designed for preventive care and regular health
            monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`h-full border rounded-lg bg-white p-6 flex flex-col justify-between ${
                pkg.popular ? "border-teal-500 shadow-lg relative" : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-teal-600">{pkg.price}</p>
                  <p className="text-gray-600 text-sm mt-1">{pkg.description}</p>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="/book-now"
                  className={`block text-center text-white py-2 px-4 rounded-md w-full ${
                    pkg.popular ? "bg-teal-600 hover:bg-teal-700" : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
