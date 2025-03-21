import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="mb-6 bg-white rounded-lg shadow-sm">
      <button 
        className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-['Montserrat'] font-bold text-[#1E3A8A]">{question}</span>
        <ChevronDown 
          className={`text-[#1E3A8A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-neutral-700 font-['Open_Sans']">{answer}</p>
        </div>
      )}
    </Card>
  );
}

export default function Faq() {
  const faqItems = [
    {
      question: "How does Ad Maiora find suppliers?",
      answer: "We research and vet vendors based on your needs and our 'Most Liked by Clients' feedback. Our extensive network and industry expertise allow us to find the perfect match for your requirements."
    },
    {
      question: "What types of suppliers do you work with?",
      answer: "From raw materials to tech solutions, we cover all SME needs. We work across various industries including textiles, electronics, software, manufacturing, and more to ensure comprehensive procurement support."
    },
    {
      question: "How do you ensure supplier quality?",
      answer: "Client feedback and rigorous vetting keep our standards high. We conduct thorough background checks, quality assessments, and regularly update our supplier database based on performance and client satisfaction."
    },
    {
      question: "What if I'm not satisfied with the suppliers?",
      answer: "We'll refine the search until you're happy—your success is our priority. Our commitment is to ensure you find the right supplier match, and we'll continue working until you're completely satisfied with the options provided."
    }
  ];
  
  return (
    <section id="faq" className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-['Montserrat'] font-bold text-center mb-3 text-[#1E3A8A]">Your Questions, Answered</h2>
        <h3 className="text-xl text-[#22C55E] font-medium text-center mb-12 font-['Montserrat']">Knowledge is the Surest Basis of Happiness</h3>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
