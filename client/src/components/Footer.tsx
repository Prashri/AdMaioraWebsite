export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="font-['Dancing_Script'] text-3xl text-white">Ad Maiora</a>
            <p className="mt-2">Procurement consulting for Indian SMEs</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:info@admaiora.in" className="text-white hover:text-[#22C55E] transition">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-[#22C55E] transition">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Ad Maiora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
