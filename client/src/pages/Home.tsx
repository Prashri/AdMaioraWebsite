import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Handshake, Star, Quote, ChevronRight, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isInView, setIsInView] = useState(false);

  // Monitor scroll position to trigger animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const serviceSection = document.getElementById('services-section');
      
      if (serviceSection && scrollPosition > serviceSection.offsetTop + 100) {
        setIsInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="min-h-screen pt-32 pb-24 relative overflow-hidden flex items-center">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/80 z-10"></div>
        
        {/* Video/Image Background with Parallax */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-no-repeat parallax z-0">
          {/* Placeholder for video - would be replaced with actual video in production */}
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col max-w-5xl mx-auto text-center">
            <div className="fade-in">
              <span className="inline-block px-4 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full text-sm font-playfair tracking-wider mb-6">
                PREMIUM PROCUREMENT CONSULTING
              </span>
              
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white tracking-wide">
                Is Your Procurement <span className="relative inline-block text-gold">
                  Chaos
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gold/30"></span>
                </span> <br className="hidden md:block" />Stalling Your Dreams?
              </h1>
              
              <p className="text-xl mb-10 text-white/90 font-lora max-w-2xl mx-auto leading-relaxed">
                Every delay, every hidden cost, every unreliable supplier—eating away at your growth. Isn't it time your business broke free from the procurement chaos?
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <Link href="/contact">
                  <div className="btn-gold px-10 py-4 text-lg font-medium font-playfair tracking-wide shimmer">
                    Contact Us for Pricing
                  </div>
                </Link>
                <Link href="/services">
                  <div className="border border-gold/40 text-gold hover:bg-gold/10 font-medium py-4 px-10 rounded-md transition-all duration-300 text-lg font-playfair tracking-wide flex items-center justify-center">
                    Learn How It Works
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 mt-4 opacity-90">
                <div className="flex items-center">
                  <div className="h-14 w-14 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle size={24} className="text-gold" />
                  </div>
                  <div className="text-left">
                    <p className="text-gold font-playfair font-bold">Premium Quality</p>
                    <p className="text-white/70 text-sm">Thoroughly vetted suppliers</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-14 w-14 bg-gold/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle size={24} className="text-gold" />
                  </div>
                  <div className="text-left">
                    <p className="text-gold font-playfair font-bold">Trusted by 200+ SMEs</p>
                    <p className="text-white/70 text-sm">Across multiple industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Services Overview */}
      <section id="services-section" className="py-section bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Gold accent line */}
          <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
          
          <div className="text-center mb-20">
            <p className="text-gold font-medium font-playfair tracking-wider mb-4">OUR PREMIUM SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-navy">What We Offer</h2>
            <p className="text-navy/70 max-w-2xl mx-auto font-lora">
              Ad Maiora provides exclusive procurement consulting services designed to elevate Indian SMEs with unmatched supplier connections and strategic insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Service Card 1 */}
            <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
              <div className="group">
                <Card className="luxury-card h-full border-gold/20 rounded-none">
                  <div className="relative h-56 bg-navy flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-30 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-navy/70"></div>
                    <div className="relative z-10 transition-transform duration-500 transform group-hover:scale-110">
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-2 mx-auto">
                        <Search size={36} className="text-gold" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-navy group-hover:text-gold transition-colors duration-300">Find Elite Suppliers</h3>
                    <p className="text-navy/70 font-lora leading-relaxed mb-6">
                      Connect with our exclusive network of trusted vendors perfectly tailored to your unique business needs and quality standards.
                    </p>
                    <Link href="/services">
                      <span className="text-navy font-medium font-playfair group-hover:text-gold inline-flex items-center transition-colors duration-300 cursor-pointer gold-underline">
                        Discover More 
                        <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="group">
                <Card className="luxury-card h-full border-gold/20 rounded-none">
                  <div className="relative h-56 bg-navy flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-30 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-navy/70"></div>
                    <div className="relative z-10 transition-transform duration-500 transform group-hover:scale-110">
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-2 mx-auto">
                        <FileText size={36} className="text-gold" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-navy group-hover:text-gold transition-colors duration-300">Premium Insights</h3>
                    <p className="text-navy/70 font-lora leading-relaxed mb-6">
                      Receive meticulously crafted supplier reports with exclusive industry insights and strategic recommendations for optimal decision-making.
                    </p>
                    <Link href="/services">
                      <span className="text-navy font-medium font-playfair group-hover:text-gold inline-flex items-center transition-colors duration-300 cursor-pointer gold-underline">
                        Explore Reports 
                        <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className={`transform transition-all duration-1000 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
              <div className="group">
                <Card className="luxury-card h-full border-gold/20 rounded-none">
                  <div className="relative h-56 bg-navy flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-30 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-navy/70"></div>
                    <div className="relative z-10 transition-transform duration-500 transform group-hover:scale-110">
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-2 mx-auto">
                        <Handshake size={36} className="text-gold" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-navy group-hover:text-gold transition-colors duration-300">White-Glove Service</h3>
                    <p className="text-navy/70 font-lora leading-relaxed mb-6">
                      Experience seamless deal coordination with our bespoke service handling every aspect of negotiations, contracts, and supplier onboarding.
                    </p>
                    <Link href="/services">
                      <span className="text-navy font-medium font-playfair group-hover:text-gold inline-flex items-center transition-colors duration-300 cursor-pointer gold-underline">
                        Discover Process 
                        <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Liked Feature */}
      <section className="py-section bg-navy text-white relative">
        {/* Gold accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gold/30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gold/30"></div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-8">
              <Star className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-4xl font-playfair font-bold mb-6 text-white">A Guiding Star for Excellence</h2>
            <p className="text-xl leading-relaxed font-lora text-white/80 mb-10">
              Our exclusive feedback-driven rating system highlights elite suppliers, ensuring you choose with absolute confidence. Authentic ratings from fellow premium SMEs illuminate your path to procurement excellence.
            </p>
            <Link href="/services">
              <div className="inline-block">
                <Button className="btn-gold px-8 py-3 text-base font-medium font-playfair tracking-wide">
                  Discover Our Selection Process
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-medium font-playfair tracking-wider mb-3">TESTIMONIALS</p>
            <h2 className="text-4xl font-playfair font-bold mb-6 text-navy">What Our Elite Clients Say</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="luxury-card border-gold/30 p-1 group">
              <div className="bg-white p-8">
                <div className="flex items-center mb-6">
                  <div className="text-gold">
                    <Quote size={40} className="opacity-30" />
                  </div>
                </div>
                <p className="text-navy/80 mb-8 italic font-lora text-lg leading-relaxed">
                  "Ad Maiora delivered exceptional results, driving 10X sales growth for Amazon India. Their brand onboarding expertise and seamless coordination make them an invaluable strategic partner."
                </p>
                <div className="flex items-center">
                  <div className="rounded-full border-2 border-gold/20 w-16 h-16 flex items-center justify-center mr-5 overflow-hidden">
                    <div className="bg-navy/10 w-full h-full flex items-center justify-center">
                      <span className="text-navy font-playfair font-bold text-xl">PS</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold font-playfair text-navy text-lg">Priya Sharma</p>
                    <p className="text-sm text-navy/60 font-lora">Key Account Manager, Amazon India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="luxury-card border-gold/30 p-1 group">
              <div className="bg-white p-8">
                <div className="flex items-center mb-6">
                  <div className="text-gold">
                    <Quote size={40} className="opacity-30" />
                  </div>
                </div>
                <p className="text-navy/80 mb-8 italic font-lora text-lg leading-relaxed">
                  "Ad Maiora transformed our tech course enrollment process at Acadeemia. Their tailored procurement strategies inspired students and faculty alike. They're truly the gold standard in the industry."
                </p>
                <div className="flex items-center">
                  <div className="rounded-full border-2 border-gold/20 w-16 h-16 flex items-center justify-center mr-5 overflow-hidden">
                    <div className="bg-navy/10 w-full h-full flex items-center justify-center">
                      <span className="text-navy font-playfair font-bold text-xl">AR</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold font-playfair text-navy text-lg">Dr. Anjali Rao</p>
                    <p className="text-sm text-navy/60 font-lora">Program Director, Acadeemia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-20 text-center">
            <Link href="/success-stories">
              <div className="inline-flex items-center text-navy hover:text-gold transition-colors duration-300 font-playfair font-medium text-lg group">
                View All Success Stories 
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
