import { useState } from "react"

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
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our home healthcare services in Bangalore
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-md">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
                >
                  {faq.question}
                  <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 py-3 border-t text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
