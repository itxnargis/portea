import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "8076688419"; 
    const message = "Hello, how can you help me?";
    
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, "_blank");
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default WhatsAppButton;