import React from "react"
import { Quote } from "lucide-react"
import avatar from "../assets/avatar.avif" // Placeholder for the first testimonial image

type Testimonial = {
  id: number
  name: string
  location: string
  testimonial: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Indiranagar, Bangalore",
    testimonial:
      "The physiotherapy services from Portea have been excellent. The therapist was professional and helped me recover from my knee surgery much faster than expected.",
    image: avatar,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Koramangala, Bangalore",
    testimonial:
      "I've been using Portea's nursing services for my elderly mother. The nurses are well-trained, compassionate, and punctual. Highly recommended for home healthcare in Bangalore.",
    image: avatar,
  },
  {
    id: 3,
    name: "Suresh Menon",
    location: "Whitefield, Bangalore",
    testimonial:
      "The doctor consultation service was very convenient. The doctor was knowledgeable and took time to explain everything. The follow-up was also excellent.",
    image: avatar,
  },
]

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied patients in Bangalore about their experience with Portea's home healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm h-full"
            >
              <div className="p-6">
                <Quote className="h-8 w-8 text-teal-600 mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.testimonial}</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
