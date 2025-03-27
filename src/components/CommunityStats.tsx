
import { useRef, useState, useEffect } from "react";
import { Code, Users, Trophy, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

type Stat = {
  id: number;
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
};

const stats: Stat[] = [
  {
    id: 1,
    label: "Active Developers",
    value: "25,000+",
    icon: <Code className="h-8 w-8" />,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    id: 2,
    label: "Community Members",
    value: "120,000+",
    icon: <Users className="h-8 w-8" />,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  },
  {
    id: 3,
    label: "Completed Hackathons",
    value: "320+",
    icon: <Trophy className="h-8 w-8" />,
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  },
  {
    id: 4,
    label: "Launched Projects",
    value: "2,800+",
    icon: <Rocket className="h-8 w-8" />,
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
  },
];

export function CommunityStats() {
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

  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Community</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join a diverse network of innovators, developers, and industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={cn(
                "glass-card p-8 rounded-xl text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-100": index === 1 },
                { "transition-delay-200": index === 2 },
                { "transition-delay-300": index === 3 },
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                stat.color
              )}>
                {stat.icon}
              </div>
              <div className="font-display text-3xl font-bold mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
