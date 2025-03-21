import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close mobile menu when the window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#1E3A8A]/95 to-[#1E3A8A] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-['Dancing_Script'] text-3xl font-bold">
          <Link href="/">
            Ad Maiora
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href}>
                <span className={`font-['Montserrat'] font-medium cursor-pointer ${
                  location === link.href 
                    ? "text-white" 
                    : "text-white/90 hover:text-white"
                } transition duration-300 ease-in-out`}>
                  {link.name}
                </span>
              </Link>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover:w-full ${
                location === link.href ? "w-full" : ""
              }`}></span>
            </div>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          className="md:hidden text-white hover:bg-[#1E3A8A]/20"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-[#1E3A8A]/95 md:hidden px-4 py-3 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link href={link.href}>
                  <span className={`block font-['Montserrat'] font-medium py-2 cursor-pointer ${
                    location === link.href 
                      ? "text-[#22C55E]" 
                      : "text-white hover:text-[#22C55E]"
                  } transition duration-300 ease-in-out`}>
                    {link.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
