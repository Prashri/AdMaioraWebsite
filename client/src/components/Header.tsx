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
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="font-['Dancing_Script'] text-3xl font-bold text-[#1E3A8A]">Ad Maiora</a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <a className={`font-['Montserrat'] font-medium ${
                location === link.href ? "text-[#1E3A8A]" : "text-neutral-800 hover:text-[#1E3A8A]"
              } transition`}>
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMenu} 
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-white md:hidden px-4 py-3 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <a className={`font-['Montserrat'] font-medium ${
                  location === link.href ? "text-[#1E3A8A]" : "text-neutral-800 hover:text-[#1E3A8A]"
                } transition py-2`}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
