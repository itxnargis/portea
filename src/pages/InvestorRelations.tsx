// src/pages/InvestorRelationsPage.tsx
import { Link } from "react-router-dom"
import Investor from "../assets/investor.png"

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-50 py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Investor Relations
                <span className="block text-teal-600 mt-2">Building the Future of Healthcare</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Portea Medical is transforming healthcare delivery in India through innovative home healthcare
                solutions. Learn about our growth story and investment opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <img src={Investor} alt="Investor Relations" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Financial Highlights</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Key financial metrics showcasing Portea's growth and performance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: "Annual Revenue Growth", value: "32%", description: "Year-over-year increase" },
              { metric: "Patient Base", value: "200,000+", description: "Across India" },
              { metric: "Service Locations", value: "40+", description: "Cities in India" },
              { metric: "Healthcare Professionals", value: "4,000+", description: "In our network" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-2">{item.metric}</p>
                <h3 className="text-3xl font-bold text-teal-600 mb-1">{item.value}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Growth Strategy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Portea's strategic initiatives to drive sustainable growth and market leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-600">Geographic Expansion</h3>
                <p className="text-gray-600">
                  Expanding our services to tier-2 and tier-3 cities across India, with a focus on establishing strong
                  presence in key metropolitan areas like Bangalore.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-600">Service Diversification</h3>
                <p className="text-gray-600">
                  Broadening our service portfolio to include specialized care programs, chronic disease management, and
                  preventive healthcare packages.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-600">Technology Integration</h3>
                <p className="text-gray-600">
                  Investing in digital health platforms, telemedicine capabilities, and AI-driven healthcare solutions
                  to enhance service delivery and patient experience.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-600">Strategic Partnerships</h3>
                <p className="text-gray-600">
                  Collaborating with hospitals, insurance providers, and healthcare technology companies to create
                  integrated care pathways and expand market reach.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <img src="/growth-strategy.png" alt="Growth Strategy" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Investor Resources */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investor Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Access financial reports, presentations, and other resources for investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Reports",
                description: "Comprehensive financial and operational performance reports",
                link: "/investor-relations/annual-reports",
              },
              {
                title: "Quarterly Results",
                description: "Quarterly financial statements and performance updates",
                link: "/investor-relations/quarterly-results",
              },
              {
                title: "Investor Presentations",
                description: "Presentations on company strategy, market opportunity, and growth plans",
                link: "/investor-relations/presentations",
              },
              {
                title: "Press Releases",
                description: "Latest news and announcements for investors",
                link: "/investor-relations/press-releases",
              },
              {
                title: "Corporate Governance",
                description: "Information on our governance structure and policies",
                link: "/investor-relations/corporate-governance",
              },
              {
                title: "FAQs",
                description: "Answers to frequently asked questions by investors",
                link: "/investor-relations/faqs",
              },
            ].map((resource, index) => (
              <Link key={index} to={resource.link} className="group">
                <div className="bg-gray-50 p-6 rounded-lg h-full transition-all duration-200 hover:shadow-md group-hover:border-teal-500">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-600">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <p className="text-teal-600 font-medium">View Details →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Investor Relations */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Investor Relations</h2>
            <p className="mb-8">
              For investor inquiries, please contact our Investor Relations team. We're here to provide you with the
              information you need.
            </p>
            <div className="bg-white text-gray-800 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-teal-600">Investor Relations Contact</h3>
                  <p className="mb-2">
                    <strong>Email:</strong> investors@portea.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +91 80 4200 2345
                  </p>
                  <p>
                    <strong>Address:</strong> Portea Medical, #22, 3rd Floor, Salarpuria Towers-I, Hosur Road, Bangalore
                    - 560095
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-teal-600">Media Relations</h3>
                  <p className="mb-2">
                    <strong>Email:</strong> media@portea.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +91 80 4200 2346
                  </p>
                  <p>
                    <strong>Press Kit:</strong>{" "}
                    <a href="/media-kit" className="text-teal-600 underline">
                      Download Media Kit
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
