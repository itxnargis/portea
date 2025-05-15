import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import avatar from "../assets/avatar.avif"; // Placeholder for testimonial images

type Testimonial = {
  id: number;
  name: string;
  location: string;
  testimonial: string;
  image: string;
};

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
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-teal-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-gray-800">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our satisfied patients in Bangalore about their experience with Portea's home healthcare services
          </p>
        </div>

        {/* Mobile Testimonial Carousel */}
        <div className="md:hidden">
          <div 
            className="relative bg-white rounded-xl shadow-lg p-8 overflow-hidden border-l-4 border-teal-500"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Quote className="h-10 w-10 text-teal-500 opacity-20 mb-6" />
            <p className="text-gray-700 text-lg italic mb-8">"{testimonials[activeIndex].testimonial}"</p>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-teal-500">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-teal-600">{testimonials[activeIndex].location}</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-teal-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-teal-500"
            >
              <Quote className="h-10 w-10 text-teal-500 opacity-20 mb-6" />
              <p className="text-gray-700 text-lg italic mb-8">"{testimonial.testimonial}"</p>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-teal-500">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;