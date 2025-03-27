
import { useState, useEffect, useRef } from "react";
import { ChevronRight, Code, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div 
      ref={heroRef}
      className="relative pt-24 lg:pt-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Build the Future with Open Innovation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              An innovation network where developers, enterprises, and web3 
              enthusiasts collaborate to build the next generation of technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="font-medium text-base group">
                Join the Network
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-base">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="glass-card p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Source Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">Launch and contribute to innovative open source solutions</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hackathons & Bounties</h3>
              <p className="text-gray-600 dark:text-gray-300">Solve challenges, win prizes, and showcase your skills</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Governance</h3>
              <p className="text-gray-600 dark:text-gray-300">Shape the future through transparent and inclusive governance</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute -bottom-16 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10"></div>
      <div className="hidden md:block absolute bottom-10 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="hidden md:block absolute top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
    </div>
  );
}
