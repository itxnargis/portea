import React, { useState } from "react"
import { Calendar, CheckCircle } from "lucide-react"

const services = [
  "Doctor Consultation",
  "Nursing Care",
  "Physiotherapy",
  "Elder Care",
  "Lab Tests",
  "Medical Equipment",
]

const bangaloreAreas = [
  "Indiranagar",
  "Koramangala",
  "Whitefield",
  "Jayanagar",
  "JP Nagar",
  "Marathahalli",
  "Electronic City",
  "Bannerghatta Road",
  "Hebbal",
  "Yelahanka",
]

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    service: "",
    message: ""
  })
  const [date, setDate] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  // Format date to display in a readable format
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return date.toLocaleDateString('en-US', options);
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        area: "",
        service: "",
        message: ""
      })
      setDate("")
    }, 1500)
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Book an Appointment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
              Schedule your home healthcare service in Bangalore with our simple booking form
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            {success ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Appointment Request Received</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for scheduling with us. Our team will contact you shortly to confirm your appointment details.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-600 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                      Area in Bangalore
                    </label>
                    <select
                      id="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="" disabled selected>Select your area</option>
                      {bangaloreAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Calendar className="h-5 w-5 text-teal-500" />
                      </div>
                      <input
                        id="appointmentDate"
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                        min={today}
                        className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide any additional details about your healthcare needs"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-300 focus:border-teal-500 outline-none transition-all"
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`w-full font-medium px-6 py-4 rounded-lg text-white text-lg shadow-md transition-all ${
                      loading 
                        ? "bg-indigo-400 cursor-not-allowed" 
                        : "bg-teal-600 hover:bg-teal-700 transform hover:-translate-y-1"
                    }`}
                  >
                    {loading ? "Processing..." : "Book Your Appointment"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}