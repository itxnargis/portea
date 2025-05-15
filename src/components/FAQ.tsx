import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What areas in Bangalore do you serve?",
    answer:
      "We provide home healthcare services across all major areas in Bangalore including Indiranagar, Koramangala, Whitefield, Jayanagar, JP Nagar, Marathahalli, Electronic City, Bannerghatta Road, Hebbal, and Yelahanka.",
  },
  {
    question: "How do I book a home healthcare service?",
    answer:
      "You can book our services by filling out the appointment form on our website, calling our customer care number at +1800 121 2323, or using our mobile app. Our team will contact you to confirm the appointment details.",
  },
  {
    question: "What qualifications do your healthcare professionals have?",
    answer:
      "All our healthcare professionals are fully qualified and experienced in their respective fields. Our doctors, nurses, and therapists are licensed practitioners with relevant certifications and undergo regular training to stay updated with the latest medical practices.",
  },
  {
    question: "Do you provide emergency services?",
    answer:
      "Yes, we provide emergency healthcare services in Bangalore. You can contact our 24/7 helpline for immediate assistance. However, for life-threatening emergencies, we recommend calling an ambulance service first.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, net banking, UPI, and cash. We also work with major health insurance providers for cashless services where applicable.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment by contacting our customer care at least 4 hours before the scheduled time. Cancellations made less than 4 hours before the appointment may incur a nominal fee.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our home healthcare services in Bangalore
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border border-gray-400 rounded-xl shadow-sm transition-all duration-200 ${
                  openIndex === index ? "border-blue-200 bg-blue-50" : "hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 font-medium flex justify-between items-center gap-4"
                >
                  <span className="text-lg">{faq.question}</span>
                  <div className="text-blue-500 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp size={20} className="transition-transform duration-300" />
                    ) : (
                      <ChevronDown size={20} className="transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}