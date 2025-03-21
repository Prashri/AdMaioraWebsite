import { Link } from "wouter";
import { Mail, Linkedin, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1E3A8A] to-[#162a64] text-white pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="font-['Dancing_Script'] text-3xl font-bold text-white mb-4">Ad Maiora</div>
            <p className="text-white/80 mb-6">Procurement consulting for Indian SMEs, helping businesses connect with reliable suppliers and streamline their procurement processes.</p>
            <div className="flex space-x-4">
              <a href="mailto:info@admaiora.in" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#22C55E] transition-colors duration-300">
                <Mail size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#22C55E] transition-colors duration-300">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-white/80 hover:text-[#22C55E] flex items-center cursor-pointer transition-colors duration-300">
                      <ChevronRight size={16} className="mr-1" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-white/80 hover:text-[#22C55E] flex items-center cursor-pointer transition-colors duration-300">
                      <ChevronRight size={16} className="mr-1" />
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#22C55E] mt-1 mr-2 flex-shrink-0" />
                <span className="text-white/80">New Delhi, India</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-[#22C55E] mt-1 mr-2 flex-shrink-0" />
                <span className="text-white/80">+91 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-[#22C55E] mt-1 mr-2 flex-shrink-0" />
                <a href="mailto:info@admaiora.in" className="text-white/80 hover:text-[#22C55E] transition-colors duration-300">info@admaiora.in</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">© {new Date().getFullYear()} Ad Maiora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
