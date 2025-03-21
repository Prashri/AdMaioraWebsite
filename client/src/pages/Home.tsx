import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Handshake, Star, Quote, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 via-[#1E3A8A]/5 to-white z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
          <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[#22C55E]/20 filter blur-3xl"></div>
          <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-[#1E3A8A]/20 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <div className="absolute top-0 left-0 w-20 h-2 bg-[#22C55E]"></div>
                <h1 className="font-['Montserrat'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6 text-[#1E3A8A]">
                  Is Your Procurement <span className="relative inline-block">
                    Chaos
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#22C55E]/20 -z-10"></span>
                  </span> Stalling Your Dreams?
                </h1>
              </div>
              <p className="text-lg md:text-xl mb-8 text-neutral-700 font-['Open_Sans'] max-w-lg">
                Every delay, every hidden cost, every unreliable supplier—eating away at your growth. Isn't it time your business broke free from the mess?
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <Button className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-white font-bold py-5 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    Contact Us for Pricing
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A]/5 font-bold py-5 px-8 rounded-md transition-all duration-300">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 border-2 border-white flex items-center justify-center text-xs font-bold text-[#1E3A8A]">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-neutral-600">
                  <span className="font-bold">200+</span> SMEs trust our service
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[#1E3A8A] rounded-xl transform rotate-3 opacity-10"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[#22C55E] rounded-xl transform -rotate-3 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Procurement consultants meeting with client" 
                className="rounded-xl shadow-2xl w-full max-w-md relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-[200px]">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#22C55E]/20 rounded-full flex items-center justify-center mr-3">
                    <Star className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <div>
                    <p className="text-[#1E3A8A] font-bold">4.9/5</p>
                    <p className="text-xs text-neutral-500">Client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F9FAFB] relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#22C55E] font-medium font-['Montserrat'] mb-3">OUR SERVICES</p>
            <h2 className="text-4xl font-['Montserrat'] font-bold mb-6 text-[#1E3A8A]">What We Offer</h2>
            <div className="w-20 h-1 bg-[#22C55E] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service Card 1 */}
            <div className="group">
              <Card className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 h-full">
                <div className="relative h-48 bg-gradient-to-r from-[#1E3A8A]/90 to-[#1E3A8A] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-30 mix-blend-overlay bg-center bg-cover"></div>
                  <Search size={64} className="text-white relative z-10" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#1E3A8A] group-hover:text-[#22C55E] transition-colors duration-300">Find Suppliers</h3>
                  <p className="text-neutral-700 font-['Open_Sans'] leading-relaxed">Connect with trusted vendors tailored to your needs. Our extensive network ensures you find the perfect match.</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link href="/services">
                      <span className="text-[#1E3A8A] font-medium group-hover:text-[#22C55E] inline-flex items-center transition-colors duration-300 cursor-pointer">
                        Learn more 
                        <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Service Card 2 */}
            <div className="group">
              <Card className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 h-full">
                <div className="relative h-48 bg-gradient-to-r from-[#1E3A8A]/90 to-[#1E3A8A] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-30 mix-blend-overlay bg-center bg-cover"></div>
                  <FileText size={64} className="text-white relative z-10" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#1E3A8A] group-hover:text-[#22C55E] transition-colors duration-300">Get a Report</h3>
                  <p className="text-neutral-700 font-['Open_Sans'] leading-relaxed">Receive a detailed supplier report with actionable insights. Make informed decisions with our expert analysis.</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link href="/services">
                      <span className="text-[#1E3A8A] font-medium group-hover:text-[#22C55E] inline-flex items-center transition-colors duration-300 cursor-pointer">
                        Learn more 
                        <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Service Card 3 */}
            <div className="group">
              <Card className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-105 h-full">
                <div className="relative h-48 bg-gradient-to-r from-[#1E3A8A]/90 to-[#1E3A8A] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')] opacity-30 mix-blend-overlay bg-center bg-cover"></div>
                  <Handshake size={64} className="text-white relative z-10" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-['Montserrat'] font-bold mb-4 text-[#1E3A8A] group-hover:text-[#22C55E] transition-colors duration-300">Coordinate Deals</h3>
                  <p className="text-neutral-700 font-['Open_Sans'] leading-relaxed">Let us handle the setup while you focus on success. We manage negotiations and paperwork for seamless procurement.</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link href="/services">
                      <span className="text-[#1E3A8A] font-medium group-hover:text-[#22C55E] inline-flex items-center transition-colors duration-300 cursor-pointer">
                        Learn more 
                        <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Most Liked Feature */}
      <section className="py-16 bg-[#1E3A8A] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl mb-6">
              <Star className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-3xl font-['Montserrat'] font-bold mb-6">A Guiding Star for Success</h2>
            <p className="text-lg leading-relaxed font-['Open_Sans']">
              Our feedback-driven system highlights top-rated suppliers, ensuring you choose with confidence. Real ratings from fellow SMEs light your path to better decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Montserrat'] font-bold text-center mb-12 text-[#1E3A8A]">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-[#F9FAFB] rounded-lg shadow-md border border-[#E5E7EB] transition duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-[#22C55E] mr-2">
                    <Quote size={24} />
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic font-['Open_Sans']">
                  "Ad Maiora delivered 10X sales growth for Amazon India! Their brand onboarding and coordination are seamless. A true partner!"
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-[#1E3A8A]/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-[#1E3A8A] font-bold">PS</span>
                  </div>
                  <div>
                    <p className="font-bold">Priya Sharma</p>
                    <p className="text-sm text-neutral-600">Key Account Manager, Amazon India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="bg-[#F9FAFB] rounded-lg shadow-md border border-[#E5E7EB] transition duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-[#22C55E] mr-2">
                    <Quote size={24} />
                  </div>
                </div>
                <p className="text-neutral-700 mb-6 italic font-['Open_Sans']">
                  "Ad Maiora boosted tech course enrollments at Acadeemia! Their tailored strategies inspired students. They're a game-changer!"
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-[#1E3A8A]/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-[#1E3A8A] font-bold">AR</span>
                  </div>
                  <div>
                    <p className="font-bold">Dr. Anjali Rao</p>
                    <p className="text-sm text-neutral-600">Program Director, Acadeemia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
