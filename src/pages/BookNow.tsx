import BookAppointment from "../components/BookAppointment"

export const metadata = {
  title: "Book Now - Portea Medical Services in Bangalore",
  description:
    "Book home healthcare services in Bangalore. Schedule doctor consultations, nursing care, physiotherapy, and more at your convenience.",
}

export default function BookNowPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Book Your Home Healthcare Service</h1>
          <p className="text-center text-gray-600 mb-12">
            Fill out the form below to schedule a healthcare service at your home in Bangalore. Our team will contact
            you to confirm your appointment.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <BookAppointment />
          </div>
        </div>
      </div>
    </div>
  )
}
