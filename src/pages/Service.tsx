import type React from "react"
import TrainedAttendants from "../assets/trained-attendants.avif"
import NursingCare from "../assets/nursing-care.avif"
import Physiotherapy from "../assets/physiotherapy.avif"
import Baby from "../assets/baby.avif"
import CriticalCare from "../assets/critical-care.avif"
import MedicalEquipment from "../assets/medical-equipment.avif"

// Define the Service type
interface Service {
  id: number
  title: string
  description: string
  icon: string
  link: string
}

// Create services array
const services: Service[] = [
  {
    id: 1,
    title: "Doctor Consultation",
    description: "Consult with experienced doctors in the comfort of your home in Bangalore",
    icon: TrainedAttendants,
    link: "/service/doctor-consultation", // Changed from /services/ to /service/
  },
  {
    id: 2,
    title: "Nursing Care",
    description: "Professional nursing services at home for patients in Bangalore",
    icon: NursingCare,
    link: "/service/nursing-care", // Changed from /services/ to /service/
  },
  {
    id: 3,
    title: "Physiotherapy",
    description: "Expert physiotherapy sessions at your home in Bangalore",
    icon: Physiotherapy,
    link: "/service/physiotherapy", // Changed from /services/ to /service/
  },
  {
    id: 4,
    title: "Elder Care",
    description: "Specialized care services for elderly patients in Bangalore",
    icon: Baby,
    link: "/service/elder-care", // Changed from /services/ to /service/
  },
  {
    id: 5,
    title: "Lab Tests",
    description: "Convenient lab sample collection from your home in Bangalore",
    icon: CriticalCare,
    link: "/service/lab-tests", // Changed from /services/ to /service/
  },
  {
    id: 6,
    title: "Medical Equipment",
    description: "Rent or purchase medical equipment delivered to your home in Bangalore",
    icon: MedicalEquipment,
    link: "/service/medical-equipment", // Changed from /services/ to /service/
  },
]

// Card component to replace the UI library's Card
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={`bg-white border rounded-lg shadow-sm ${className || ""}`}>{children}</div>
}

// CardContent component to replace the UI library's CardContent
const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={className || ""}>{children}</div>
}

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Medical Services Offered At Home</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Portea Medical offers a variety of healthcare services in the comfort of our patient's homes in Bangalore
            including:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a key={service.id} href={service.link} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-md group-hover:border-teal-500">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 relative">
                      <img
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
