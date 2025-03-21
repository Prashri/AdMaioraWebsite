import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Handshake, Star, Quote } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A]/10 to-[#F9FAFB] pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-['Montserrat'] text-4xl md:text-5xl font-bold leading-tight mb-4 text-[#1E3A8A]">
                Is Your Procurement Chaos Stalling Your Dreams?
              </h1>
              <p className="text-lg md:text-xl mb-8 text-neutral-800 font-['Open_Sans']">
                Every delay, every hidden cost, every unreliable supplier—eating away at your growth. Isn't it time your business broke free from the mess?
              </p>
              <Link href="/contact">
                <Button className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-white font-bold py-3 px-8 rounded-md shadow-md transition transform hover:-translate-y-1">
                  Contact Us for Pricing
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Procurement consultants meeting with client" 
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Montserrat'] font-bold text-center mb-12 text-[#1E3A8A]">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-[#F9FAFB] rounded-lg shadow-md transition duration-300 ease-in-out hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-[#1E3A8A] text-4xl mb-4">
                  <Search size={48} />
                </div>
                <h3 className="text-xl font-['Montserrat'] font-bold mb-3 text-[#1E3A8A]">Find Suppliers</h3>
                <p className="text-neutral-700 font-['Open_Sans']">Connect with trusted vendors tailored to your needs.</p>
              </CardContent>
            </Card>
            
            {/* Service Card 2 */}
            <Card className="bg-[#F9FAFB] rounded-lg shadow-md transition duration-300 ease-in-out hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-[#1E3A8A] text-4xl mb-4">
                  <FileText size={48} />
                </div>
                <h3 className="text-xl font-['Montserrat'] font-bold mb-3 text-[#1E3A8A]">Get a Report</h3>
                <p className="text-neutral-700 font-['Open_Sans']">Receive a detailed supplier report with actionable insights.</p>
              </CardContent>
            </Card>
            
            {/* Service Card 3 */}
            <Card className="bg-[#F9FAFB] rounded-lg shadow-md transition duration-300 ease-in-out hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-[#1E3A8A] text-4xl mb-4">
                  <Handshake size={48} />
                </div>
                <h3 className="text-xl font-['Montserrat'] font-bold mb-3 text-[#1E3A8A]">Coordinate Deals</h3>
                <p className="text-neutral-700 font-['Open_Sans']">Let us handle the setup while you focus on success.</p>
              </CardContent>
            </Card>
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
