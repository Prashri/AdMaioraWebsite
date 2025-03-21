import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-navy shadow-lg py-2" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="font-greatVibes text-4xl text-gold-light drop-shadow-sm cursor-pointer">
            Ad Maiora
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link href={link.href}>
                <span className={`font-playfair text-sm tracking-wide uppercase font-medium cursor-pointer ${
                  location === link.href 
                    ? "text-gold" 
                    : scrolled ? "text-white hover:text-gold" : "text-white/90 hover:text-gold"
                } transition duration-300 ease-in-out`}>
                  {link.name}
                </span>
              </Link>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
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
          className="md:hidden text-gold hover:bg-navy/20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className={`
            bg-navy/95 px-4 py-5 shadow-lg
            animate-fadeIn
          `}>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <div key={link.name} style={{ animationDelay: `${index * 0.1}s` }} className="fade-in">
                  <Link href={link.href}>
                    <span className={`block font-playfair text-sm uppercase tracking-wider py-3 cursor-pointer ${
                      location === link.href 
                        ? "text-gold" 
                        : "text-white hover:text-gold"
                    } transition duration-300 ease-in-out`}>
                      {link.name}
                    </span>
                  </Link>
                  <div className="w-full h-px bg-navy-light/50"></div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
