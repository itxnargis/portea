import { useState } from "react";
import TrainedAttendants from "../assets/trained-attendants.avif";
import NursingCare from "../assets/Nursing.avif";
import Physiotherapy from "../assets/physiotherapy.avif";
import Baby from "../assets/baby.avif";
import CriticalCare from "../assets/critical-care.avif";
import MedicalEquipment from "../assets/medical-equipment.avif";

// Define the Service type
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

// Create services array
const services: Service[] = [
  {
    id: 1,
    title: "Doctor Consultation",
    description: "Consult with experienced doctors in the comfort of your home in Bangalore",
    icon: TrainedAttendants,
    link: "/services/doctor-consultation",
  },
  {
    id: 2,
    title: "Nursing Care",
    description: "Professional nursing services at home for patients in Bangalore",
    icon: NursingCare,
    link: "/services/nursing-care",
  },
  {
    id: 3,
    title: "Physiotherapy",
    description: "Expert physiotherapy sessions at your home in Bangalore",
    icon: Physiotherapy,
    link: "/services/physiotherapy",
  },
  {
    id: 4,
    title: "Elder Care",
    description: "Specialized care services for elderly patients in Bangalore",
    icon: Baby,
    link: "/services/elder-care",
  },
  {
    id: 5,
    title: "Lab Tests",
    description: "Convenient lab sample collection from your home in Bangalore",
    icon: CriticalCare,
    link: "/services/lab-tests",
  },
  {
    id: 6,
    title: "Medical Equipment",
    description: "Rent or purchase medical equipment delivered to your home in Bangalore",
    icon: MedicalEquipment,
    link: "/services/medical-equipment",
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <a 
      href={service.link} 
      className="group block h-full transform transition-all duration-300 hover:scale-105"
    >
      <div className="h-full rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-blue-50 p-4">
            <img
              src={service.icon}
              alt={service.title}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-teal-600">
            {service.title}
          </h3>
          <p className="text-center text-gray-600">{service.description}</p>
        </div>
      </div>
    </a>
  );
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-4xl font-bold text-gray-900">
            <span className="relative inline-block">
              <span className="relative z-10">Healthcare Services At Home</span>
              <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-blue-200 opacity-40"></span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Professional medical care delivered right to your doorstep in Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full bg-teal-600 px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-teal-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              View More Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;