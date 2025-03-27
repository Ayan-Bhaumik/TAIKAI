
import { useRef, useState, useEffect } from "react";
import { CalendarDays, Clock, Users, ChevronRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Hackathon = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  participants: number;
  prize: string;
  status: "upcoming" | "active" | "completed";
  image: string;
  url: string;
};

const hackathons: Hackathon[] = [
  {
    id: 1,
    title: "Web3 Development Summit",
    description: "Build innovative decentralized applications and tools for the Web3 ecosystem.",
    start_date: "2025-07-15",
    end_date: "2025-08-20",
    participants: 872,
    prize: "₹50,000",
    status: "active",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "/hackathons/web3-development-summit",
  },
  {
    id: 2,
    title: "Sustainable Blockchain Challenge",
    description: "Creating eco-friendly blockchain solutions for a sustainable future.",
    start_date: "2025-09-01",
    end_date: "2025-10-15",
    participants: 0,
    prize: "₹45,000",
    status: "upcoming",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*ZInWoes88Gnfkk93udmL0w.jpeg",
    url: "/hackathons/sustainable-blockchain-challenge",
  },
  {
    id: 3,
    title: "DeFi Innovation Hackathon",
    description: "Reimagine decentralized finance with innovative protocols and applications.",
    start_date: "2025-05-10",
    end_date: "2025-06-20",
    participants: 945,
    prize: "₹40,000",
    status: "completed",
    image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "/hackathons/defi-innovation-hackathon",
  }
];


export function Hackathons() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "completed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathons & Challenges</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Join global competitions, solve real-world problems, and win exciting prizes
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
        >
          {hackathons.map((hackathon, index) => (
            <Card
              key={hackathon.id}
              className={cn(
                "overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-200": index === 1 },
                { "transition-delay-400": index === 2 }
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    className={cn(
                      "font-medium capitalize",
                      getStatusColor(hackathon.status)
                    )}
                  >
                    {hackathon.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{hackathon.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {hackathon.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CalendarDays size={16} className="mr-2 text-primary/70" />
                    <div>
                      <div>{formatDate(hackathon.start_date)}</div>
                      <div>to {formatDate(hackathon.end_date)}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Award size={16} className="mr-2 text-primary/70" />
                    <span>{hackathon.prize}</span>
                  </div>
                  {hackathon.status !== "upcoming" && (
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users size={16} className="mr-2 text-primary/70" />
                      <span>{hackathon.participants.toLocaleString()} participants</span>
                    </div>
                  )}
                  {hackathon.status === "active" && (
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock size={16} className="mr-2 text-primary/70" />
                      <span>In progress</span>
                    </div>
                  )}
                </div>

                <Button 
                  className="w-full justify-center font-medium group" 
                  variant={hackathon.status === "upcoming" ? "default" : "outline"}
                >
                  <span>{hackathon.status === "upcoming" ? "Register Now" : "View Details"}</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={cn(
            "text-center transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <Button variant="outline" className="font-medium group">
            <span>View All Hackathons</span>
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="hidden lg:block absolute top-20 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="hidden lg:block absolute bottom-20 -left-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}
