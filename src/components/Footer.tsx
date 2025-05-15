import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg" // Adjust the path as necessary

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {/* Logo with react-router Link */}
            <Link to="/" className="inline-block">
              <img src={Logo} alt="Portea Logo" width={150} height={40} className="h-auto" />
            </Link>
            <p className="text-gray-400">
              Portea Medical delivers quality healthcare services at the comfort of your home in Bangalore.
            </p>
            <div className="flex space-x-4">
              {/* For social links, if no routing, use <a> */}
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/doctor-consultation" className="text-gray-400 hover:text-white">
                  Doctor Consultation
                </Link>
              </li>
              <li>
                <Link to="/services/nursing-care" className="text-gray-400 hover:text-white">
                  Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/services/physiotherapy" className="text-gray-400 hover:text-white">
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/services/elder-care" className="text-gray-400 hover:text-white">
                  Elder Care
                </Link>
              </li>
              <li>
                <Link to="/services/lab-tests" className="text-gray-400 hover:text-white">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link to="/services/medical-equipment" className="text-gray-400 hover:text-white">
                  Medical Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Portea Medical, #22, 3rd Floor, Salarpuria Towers-I, Hosur Road, Bangalore - 560095
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">+1800 121 2323</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">info@portea.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Portea Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
