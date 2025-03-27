
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Animate the content
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div 
          className={`max-w-md w-full text-center transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative mx-auto w-24 h-24 mb-8">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-light"></div>
            <div className="absolute inset-0 flex items-center justify-center text-5xl font-display font-bold">
              404
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
            <Button 
              variant="outline" 
              className="group"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            
            <Button asChild>
              <Link to="/" className="flex items-center">
                <Home size={18} className="mr-2" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
