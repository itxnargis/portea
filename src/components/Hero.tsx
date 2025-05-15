import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import HealthcarePackages from "./HealthcarePackages";
import Testimonials from "./Testimonials";
import BookAppointment from "./BookAppointment";
import FAQSection from "./FAQ";
import Banner from "../assets/banner.avif";

export default function Hero() {
  return (
    <section className="relative bg-white py-12 md:py-20 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Quality Medical Care Delivered At The <span className="text-teal-600">Comfort of Your Home</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Portea Medical delivers quality care with compassion. We bring quality medical care into our
              patients' homes and aim to make primary healthcare not only more accessible but also more affordable
              and accountable to our patient's needs.
            </p>
            <div className="pt-4">
              <a 
                href="/book-now" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Book Now
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <div className="relative w-full h-[400px] md:h-[450px]">
                <img 
                  src={Banner}
                  alt="Healthcare Professional" 
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            {/* <div className="absolute top-0 right-0 w-full h-full">
              <div className="relative w-full h-full">
                <img 
                  src="/hero-pattern.png" 
                  alt="Background Pattern" 
                  className="object-contain w-full h-full"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

        <Services />
          <WhyChooseUs />
          <HealthcarePackages />
          <Testimonials />
          <BookAppointment />
          <FAQSection />
    </section>


  );
}