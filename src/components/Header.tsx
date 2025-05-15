import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X, Phone, ChevronRight } from "lucide-react"
import Logo from "../assets/logo.svg"
import IndiaFlag from "../assets/ind.png"

// Define services data with icons (can be replaced with actual icons)
const services = [
  { 
    name: "Doctor Consultation", 
    href: "/services/doctor-consultation",
    description: "Connect with qualified doctors online or in-person"
  },
  { 
    name: "Nursing Care", 
    href: "/services/nursing-care",
    description: "Professional nursing services at your home"
  },
  { 
    name: "Physiotherapy", 
    href: "/services/physiotherapy",
    description: "Rehabilitation programs designed for your recovery"
  },
  { 
    name: "Elder Care", 
    href: "/services/elder-care",
    description: "Specialized care services for elderly family members"
  },
  { 
    name: "Lab Tests", 
    href: "/services/lab-tests",
    description: "Convenient diagnostic services at your doorstep"
  },
  { 
    name: "Medical Equipment", 
    href: "/services/medical-equipment",
    description: "Quality healthcare equipment for rent or purchase"
  },
]

// Enhanced dropdown component with animation and hover effects
const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 font-medium transition-colors duration-200 py-2 px-3 rounded-lg ${
          isOpen ? "text-teal-600 bg-teal-50" : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
        }`}
        aria-expanded={isOpen}
      >
        Our Services
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {/* Dropdown panel with animation */}
      <div 
        className={`absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-200 origin-top-left z-50 ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
          <h3 className="font-medium">Our Healthcare Services</h3>
          <p className="text-xs text-teal-50 mt-1">Quality healthcare at your convenience</p>
        </div>
        <div className="py-2">
          {services.map((service) => (
            <a 
              key={service.name} 
              href={service.href}
              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150 group"
            >
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                <span className="text-xs font-medium">{service.name.charAt(0)}</span>
              </div>
              <div>
                <div className="font-medium text-gray-800 group-hover:text-teal-600 transition-colors duration-150 flex items-center">
                  {service.name}
                  <ChevronRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="p-3 bg-gray-50 border-t border-gray-100">
          <a href="/all-services" className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center">
            View all services
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

// Enhanced Header component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Add scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
      isScrolled ? "shadow-md" : "border-b border-gray-100"
    }`}>
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        {/* Logo with proper spacing */}
        <a href="/" className="flex items-center mr-6">
          <img src={Logo} alt="Portea Logo" width={150} height={40} className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 flex-grow justify-end">
          <ServicesDropdown />

          <a href="/about" className="font-medium px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors duration-200">
            About Us
          </a>

          <a href="/investor-relations" className="font-medium px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors duration-200">
            Investor Relations
          </a>

          <div className="flex items-center ml-6 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
            <div className="flex items-center">
              <img src={IndiaFlag} alt="India Flag" width={24} height={16} className="h-4 w-auto mr-2" />
              <Phone className="w-4 h-4 text-teal-600 mr-1" />
            </div>
            <span className="text-sm font-medium text-gray-800">+1800 121 2323</span>
          </div>

          <a 
            href="/book-now" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 ml-4 px-5 py-2 rounded-lg text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Navigation Toggle - improved tap target */}
        <button 
          className="p-2 md:hidden rounded-md hover:bg-gray-100" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu with improved design */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <h3 className="font-medium">Healthcare Services</h3>
            <p className="text-xs text-teal-50 mt-1">Quality care at your doorstep</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-3">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                      <span className="text-xs font-medium">{service.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
            
            <div className="px-4 pb-4">
              <div className="h-px bg-gray-200 my-4"></div>
              
              <a href="/about" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                <span className="font-medium">About Us</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
              
              <a href="/investor-relations" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                <span className="font-medium">Investor Relations</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
              
              <div className="h-px bg-gray-200 my-4"></div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <img src={IndiaFlag} alt="India Flag" width={24} height={16} className="h-4 w-auto" />
                  <span className="text-sm font-medium text-gray-800">+1800 121 2323</span>
                </div>
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
            </div>
          </nav>
          
          <div className="sticky bottom-0 p-4 bg-white border-t border-gray-100">
            <a 
              href="/book-now" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-3 text-center rounded-lg text-white font-medium shadow-sm hover:shadow block w-full transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}