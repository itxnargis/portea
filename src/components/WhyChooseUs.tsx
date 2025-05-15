import Care from "../assets/care.avif"

// Define the Reason type
interface Reason {
  id: number
  title: string
  description: string
}

// Create reasons array
const reasons: Reason[] = [
  {
    id: 1,
    title: "Experienced Healthcare Professionals",
    description: "Our team consists of qualified and experienced healthcare professionals in Bangalore",
  },
  {
    id: 2,
    title: "Personalized Care Plans",
    description: "We create customized care plans tailored to each patient's specific needs",
  },
  {
    id: 3,
    title: "Affordable Pricing",
    description: "Quality healthcare services at competitive and transparent prices",
  },
  {
    id: 4,
    title: "24/7 Availability",
    description: "Our services are available round the clock for emergencies and regular care",
  },
]

// Custom CheckCircle component to replace the Lucide React component
const CheckCircle = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <img
                src={Care}
                alt="Healthcare professionals providing care"
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg max-w-[200px]">
              <p className="text-2xl font-bold">10+ Years</p>
              <p>of excellence in home healthcare in Bangalore</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Portea in Bangalore?</h2>
            <p className="text-gray-600">
              Portea is Bangalore's trusted home healthcare provider, delivering quality medical services right at your
              doorstep. Our focus on patient comfort and care quality sets us apart.
            </p>
            <div className="space-y-4 mt-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs