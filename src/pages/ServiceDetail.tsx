import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TrainedAttendants from "../assets/trained-attendants.avif"
import NursingCare from "../assets/Nursing.avif"
import Physiotherapy from "../assets/physiotherapy.avif"
import Baby from "../assets/baby.avif"
import CriticalCare from "../assets/critical-care.avif"
import MedicalEquipment from "../assets/medical-equipment.avif"

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  faqs: FAQ[];
}

interface Services {
  [key: string]: ServiceData;
}

const services: Services = {
  "doctor-consultation": {
    title: "Doctor Consultation at Home",
    description: "Get expert medical consultation from qualified doctors in the comfort of your home in Bangalore.",
    image: TrainedAttendants,
    features: [
      "Consultation with experienced general physicians and specialists",
      "Comprehensive health assessment",
      "Prescription and medication guidance",
      "Follow-up consultations as needed",
      "Available 7 days a week in Bangalore",
    ],
    benefits: [
      "Avoid hospital visits and waiting rooms",
      "Personalized attention in familiar surroundings",
      "Convenient for elderly, disabled, or busy individuals",
      "Same quality care as clinic visits",
    ],
    faqs: [
      {
        question: "What types of doctors are available for home visits?",
        answer:
          "We offer consultations with general physicians, pediatricians, geriatricians, and various specialists including cardiologists, neurologists, and orthopedic doctors in Bangalore.",
      },
      {
        question: "How soon can I get a doctor to visit my home?",
        answer:
          "In most areas of Bangalore, we can arrange for a doctor visit within 24 hours, and in some cases, on the same day for urgent needs.",
      },
      {
        question: "What should I prepare before the doctor's visit?",
        answer:
          "Have your previous medical records, current medications, and a list of symptoms ready. Also, prepare a comfortable space for the examination.",
      },
    ],
  },
  "nursing-care": {
    title: "Professional Nursing Care at Home",
    description: "Experienced nurses providing quality healthcare in the comfort of your home in Bangalore.",
    image: NursingCare,
    features: [
      "Skilled nursing procedures and treatments",
      "Post-surgical care and wound management",
      "Medication administration and management",
      "Vital signs monitoring and health assessment",
      "Short-term and long-term care options",
    ],
    benefits: [
      "Professional medical care in familiar surroundings",
      "Personalized attention and care plans",
      "Reduced risk of hospital-acquired infections",
      "Greater comfort and convenience for patients",
    ],
    faqs: [
      {
        question: "Are your nurses qualified and experienced?",
        answer:
          "Yes, all our nurses are registered, qualified professionals with extensive experience in hospital and home care settings in Bangalore.",
      },
      {
        question: "Can I get nursing care for 24 hours?",
        answer:
          "Yes, we offer 24-hour nursing care with multiple nurses working in shifts to ensure continuous care for patients who need round-the-clock attention.",
      },
      {
        question: "What nursing procedures can be done at home?",
        answer:
          "Our nurses can perform various procedures including IV administration, catheter care, tube feeding, wound dressing, injections, and vital signs monitoring.",
      },
    ],
  },
  physiotherapy: {
    title: "Expert Physiotherapy Services at Home",
    description: "Professional physiotherapy sessions delivered at your doorstep in Bangalore.",
    image: Physiotherapy,
    features: [
      "Personalized treatment plans",
      "Musculoskeletal rehabilitation",
      "Post-surgical rehabilitation",
      "Neurological rehabilitation",
      "Geriatric physiotherapy",
    ],
    benefits: [
      "Convenience of therapy in familiar surroundings",
      "Customized home exercise programs",
      "No travel required for patients with mobility issues",
      "Consistent follow-up and progress tracking",
    ],
    faqs: [
      {
        question: "How many physiotherapy sessions will I need?",
        answer:
          "The number of sessions varies based on your condition, severity, and response to treatment. Our physiotherapist will assess and recommend a treatment plan during the first session.",
      },
      {
        question: "What should I wear for a physiotherapy session?",
        answer:
          "Wear comfortable, loose-fitting clothes that allow easy movement and access to the area being treated.",
      },
      {
        question: "Do I need any special equipment for home physiotherapy?",
        answer:
          "Our physiotherapists bring essential equipment for your treatment. They may recommend some basic equipment for your home exercises, which can be purchased or rented through us.",
      },
    ],
  },
  "elder-care": {
    title: "Specialized Elder Care Services",
    description: "Compassionate and professional care for elderly patients in the comfort of their homes in Bangalore.",
    image: Baby,
    features: [
      "Personal care assistance (bathing, grooming, toileting)",
      "Medication management and reminders",
      "Mobility assistance and fall prevention",
      "Companionship and emotional support",
      "Specialized care for dementia and Alzheimer's patients",
    ],
    benefits: [
      "Allows seniors to age in place with dignity",
      "Personalized care addressing individual needs",
      "Peace of mind for family members",
      "Improved quality of life and independence",
    ],
    faqs: [
      {
        question: "How are your caregivers trained for elder care?",
        answer:
          "Our caregivers undergo specialized training in geriatric care, including handling mobility issues, dementia care, fall prevention, and emergency response.",
      },
      {
        question: "Can your caregivers help with household tasks?",
        answer:
          "Yes, our caregivers can assist with light housekeeping, meal preparation, laundry, and other tasks that help maintain a comfortable living environment for the elderly.",
      },
      {
        question: "How do you match caregivers with elderly clients?",
        answer:
          "We consider factors like care needs, personality, language preferences, and specific requirements to ensure a good match between the caregiver and the elderly client.",
      },
    ],
  },
  "lab-tests": {
    title: "Convenient Lab Tests at Home",
    description: "Accurate diagnostic testing with sample collection from your home in Bangalore.",
    image: CriticalCare,
    features: [
      "Blood sample collection at home",
      "Urine and other specimen collection",
      "Wide range of diagnostic tests available",
      "Digital reports delivered via email/app",
      "Expert interpretation of results",
    ],
    benefits: [
      "No waiting in queues or traveling to labs",
      "Convenient for elderly, disabled, or busy individuals",
      "Same accuracy as laboratory visits",
      "Faster turnaround time for results",
    ],
    faqs: [
      {
        question: "How soon will I get my test results?",
        answer:
          "Most routine test results are available within 24-48 hours. Some specialized tests may take longer. The exact timeframe will be communicated during booking.",
      },
      {
        question: "Do I need to prepare for blood tests?",
        answer:
          "Some tests require fasting or other preparations. Our team will inform you about any specific preparations needed when you book the test.",
      },
      {
        question: "Are home collected samples as accurate as lab collected ones?",
        answer:
          "Yes, our phlebotomists are trained to collect samples properly, and we use appropriate preservation methods to ensure sample integrity during transport to our labs.",
      },
    ],
  },
  "medical-equipment": {
    title: "Medical Equipment Rental & Sales",
    description: "Quality medical equipment delivered and set up at your home in Bangalore.",
    image: MedicalEquipment,
    features: [
      "Wide range of medical equipment available",
      "Rental and purchase options",
      "Delivery, setup, and demonstration",
      "Maintenance and technical support",
      "Sanitized and quality-checked equipment",
    ],
    benefits: [
      "Cost-effective rental options for temporary needs",
      "Expert guidance on choosing the right equipment",
      "Convenient delivery and setup at home",
      "Technical support throughout the rental period",
    ],
    faqs: [
      {
        question: "What types of medical equipment do you provide?",
        answer:
          "We offer hospital beds, wheelchairs, oxygen concentrators, CPAP machines, patient lifts, nebulizers, and various other medical and mobility equipment.",
      },
      {
        question: "Do you provide training on how to use the equipment?",
        answer:
          "Yes, our team provides complete demonstration and training on how to use the equipment safely and effectively during the setup.",
      },
      {
        question: "What if the equipment malfunctions during the rental period?",
        answer:
          "We provide 24/7 technical support and will replace the equipment promptly if there are any issues that cannot be resolved remotely.",
      },
    ],
  },
};

// Custom Button component to replace Next.js Button
function Button({ 
  children, 
  className, 
  asChild = false, 
  variant = "default" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  asChild?: boolean; 
  variant?: "default" | "outline"; 
}) {
  if (asChild) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default function ServicePage() {
  const { service } = useParams<{ service: string }>();
  const navigate = useNavigate();
  
  // Check if service exists, otherwise navigate to 404
  useEffect(() => {
    if (!service || !services[service]) {
      navigate('/404');
    }
  }, [service, navigate]);
  
  if (!service || !services[service]) {
    return null;
  }
  
  const serviceData = services[service];
  
  // Helper to format service name
  const formatServiceName = (serviceName: string) => {
    return serviceName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Set document title
  useEffect(() => {
    document.title = `${serviceData.title} - Portea Bangalore`;
  }, [serviceData.title]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-50 py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {serviceData.title}
                <span className="block text-teal-600 mt-2">in Bangalore</span>
              </h1>
              <p className="text-gray-600 text-lg">{serviceData.description}</p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 h-auto text-lg">
                <Link to="/book-now" className="inline-block">Book Now</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <img
                  src={serviceData.image || "/placeholder.svg"}
                  alt={serviceData.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our {formatServiceName(service)} Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions delivered at your doorstep in Bangalore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Service Features</h3>
              <ul className="space-y-3">
                {serviceData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-teal-600"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-3">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about our {formatServiceName(service)} services in Bangalore
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {serviceData.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Experience quality healthcare in the comfort of your home in Bangalore. Our professional team is ready to
            assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-teal-600 hover:bg-gray-100 px-8">
              <Link to="/book-now" className="inline-block py-2 px-4">Book Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-teal-700 px-8">
              <Link to="tel:+18001212323" className="inline-block py-2 px-4">Call Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}