
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "The TAIKAI platform has transformed how we approach innovation challenges. The quality of submissions and the engaged community exceeded our expectations.",
    author: "Sujan Ali",
    role: "Head of Innovation",
    company: "TechCorp",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 2,
    content: "As a developer, TAIKAI has been an incredible platform to showcase my skills, connect with like-minded professionals, and work on meaningful projects.",
    author: "Ayan Bhaumik",
    role: "Senior Developer",
    company: "Blockchain Solutions",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    content: "Participating in TAIKAI hackathons helped me improve my technical skills and opened doors to exciting career opportunities in the blockchain space.",
    author: "Arijit Debnath",
    role: "Software Engineer",
    company: "DeFi Protocol",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    id: 4,
    content: "TAIKAI's platform made it easy for us to launch our open innovation challenge and connect with talented developers worldwide. The results were outstanding.",
    author: "Deb Mukherjee",
    role: "CTO",
    company: "Fintech Ventures",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
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

  const goToPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      items.push({ ...testimonials[index], position: i });
    }
    return items;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hear from the innovators, builders, and organizations in our ecosystem
          </p>
        </div>

        <div 
          className={cn(
            "relative transition-opacity duration-500",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex justify-between items-center my-8">
            <Button
              onClick={goToPrev}
              variant="outline"
              size="icon"
              className="rounded-full border border-gray-200 dark:border-gray-800 w-10 h-10"
            >
              <ChevronLeft size={20} />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? "right" : "left");
                    setActiveIndex(index);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-primary w-6"
                      : "bg-gray-300 dark:bg-gray-700"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="rounded-full border border-gray-200 dark:border-gray-800 w-10 h-10"
            >
              <ChevronRight size={20} />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="relative overflow-hidden min-h-[300px] md:min-h-[250px]">
            <div className="flex flex-col md:flex-row gap-6">
              {visibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className={cn(
                    "w-full md:w-1/3 transform transition-all duration-500",
                    testimonial.position === 0 && "md:opacity-100",
                    testimonial.position === 1 && "md:opacity-100",
                    testimonial.position === 2 && "md:opacity-100",
                    testimonial.position !== activeIndex % testimonials.length && "md:scale-95",
                  )}
                >
                  <Card className="h-full glass-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={cn(
                              i < testimonial.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300 dark:text-gray-600"
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-sm text-gray-500">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
