import React, { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

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
  const [date, setDate] = useState<Date | null>(null)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage("")

    setTimeout(() => {
      setLoading(false)
      setSuccessMessage("We have received your appointment request. Our team will contact you shortly.")
      e.currentTarget.reset()
      setDate(null)
    }, 1500)
  }

  return (
    <section className="py-16 bg-teal-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Book an Appointment in Bangalore</h2>
            <p className="text-gray-600">
              Fill out the form below to schedule a home healthcare service in Bangalore
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area in Bangalore</label>
                  <select
                    id="area"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  >
                    <option value="" disabled selected>Select your area</option>
                    {bangaloreAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
                  <select
                    id="service"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  >
                    <option value="" disabled selected>Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById("datePicker")
                        input?.focus()
                      }}
                      className="w-full text-left px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2"
                    >
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                      <span className={date ? "" : "text-gray-400"}>
                        {date ? format(date, "PPP") : "Select a date"}
                      </span>
                    </button>
                    <input
                      type="date"
                      id="datePicker"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const selected = new Date(e.target.value)
                        if (!isNaN(selected.getTime())) setDate(selected)
                      }}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Please provide any additional details about your healthcare needs"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-medium px-4 py-2 rounded-md ${
                  loading ? "bg-orange-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {loading ? "Processing..." : "Book Appointment"}
              </button>

              {successMessage && (
                <p className="text-green-600 text-sm mt-4 text-center">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
