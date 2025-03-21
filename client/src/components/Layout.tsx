import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  // Simulating page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Luxury Preloader */}
      {loading && (
        <div className="fixed inset-0 bg-navy z-50 flex items-center justify-center flex-col">
          <div className="relative w-20 h-20">
            <div className="spinner" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-navy rounded-full"></div>
            </div>
          </div>
          <div className="mt-8 font-greatVibes text-3xl text-gold animate-pulse">Ad Maiora</div>
          <p className="text-white/60 text-sm mt-2 font-playfair tracking-widest">EXCELLENCE AWAITS</p>
        </div>
      )}
      
      <div className={`flex flex-col min-h-screen transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
