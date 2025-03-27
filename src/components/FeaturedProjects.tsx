
import { useRef, useState, useEffect } from "react";
import { ChevronRight, Github, ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  stars: number;
  image: string;
  url: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Blockchain Explorer",
    description: "An open-source blockchain explorer with advanced analytics and visualization tools.",
    tags: ["Blockchain", "Web3", "Analytics"],
    stars: 325,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "/projects/blockchain-explorer",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Decentralized Identity",
    description: "A comprehensive solution for self-sovereign identity management using blockchain technology.",
    tags: ["DID", "Privacy", "Security"],
    stars: 278,
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "/projects/decentralized-identity",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "DAO Governance Platform",
    description: "A toolkit for creating and managing decentralized autonomous organizations with customizable governance models.",
    tags: ["DAO", "Governance", "DeFi"],
    stars: 412,
    image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "/projects/dao-governance",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "NFT Marketplace",
    description: "A creator-focused marketplace for NFTs with low fees and integrated social features.",
    tags: ["NFT", "Marketplace", "Creator Economy"],
    stars: 356,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "/projects/nft-marketplace",
    github: "https://github.com",
  },
];

export function FeaturedProjects() {
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
    <section ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Discover innovative open-source projects created by our global community
          </p>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
        >
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={cn(
                "overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50 h-full flex flex-col",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-100": index % 4 === 1 },
                { "transition-delay-200": index % 4 === 2 },
                { "transition-delay-300": index % 4 === 3 }
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="px-5 pt-5 pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star size={16} className="mr-1 text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="px-5 py-4 flex-grow">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="px-5 py-4 flex justify-between">
                <Button size="sm" variant="ghost" asChild>
                  <a href={project.url} className="flex items-center">
                    <span>View Details</span>
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </Button>
                <div className="flex space-x-2">
                  {project.github && (
                    <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </CardFooter>
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
            <span>Explore all projects</span>
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
