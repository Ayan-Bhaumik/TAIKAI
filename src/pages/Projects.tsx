
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock, Users, Filter, MapPin } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All Projects",
    "Web3",
    "AI & Machine Learning",
    "DeFi",
    "NFT",
    "Gaming",
    "Social Impact",
    "Developer Tools",
  ];

  const projects = [
    {
      id: 1,
      title: "Decentralized Identity Platform",
      description: "A self-sovereign identity solution built on blockchain technology that gives users control over their digital identities.",
      category: "Web3",
      stars: 128,
      contributors: 18,
      lastUpdated: "2 days ago",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80",
      featured: true,
      location: "Agartala, Tripura, India"
    },
    {
      id: 2,
      title: "AI-Powered Portfolio Management",
      description: "Machine learning algorithms that analyze market trends and suggest optimal portfolio allocations for various risk profiles.",
      category: "AI & Machine Learning",
      stars: 87,
      contributors: 12,
      lastUpdated: "1 week ago",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
      featured: false,
      location: "Remote"
    },
    {
      id: 3,
      title: "Peer-to-Peer Lending Protocol",
      description: "A decentralized lending protocol that connects borrowers directly with lenders, eliminating traditional financial intermediaries.",
      category: "DeFi",
      stars: 214,
      contributors: 23,
      lastUpdated: "3 days ago",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80",
      featured: true,
      location: "Udaipur, Tripura, India"
    },
    {
      id: 4,
      title: "Dynamic NFT Marketplace",
      description: "A platform for creating, buying, and selling NFTs with dynamic properties that evolve based on real-world events.",
      category: "NFT",
      stars: 165,
      contributors: 15,
      lastUpdated: "5 days ago",
      image: "https://images.unsplash.com/photo-1645679142238-ad6931556482?auto=format&fit=crop&w=800&q=80",
      featured: false,
      location: "Belonia, Tripura, India"
    },
    {
      id: 5,
      title: "Blockchain Gaming Platform",
      description: "A gaming ecosystem that integrates blockchain technology for true ownership of in-game assets and play-to-earn mechanics.",
      category: "Gaming",
      stars: 179,
      contributors: 27,
      lastUpdated: "6 days ago",
      image: "https://images.unsplash.com/photo-1640367169401-5968883fa463?auto=format&fit=crop&w=800&q=80",
      featured: false,
      location: "Remote"
    },
    {
      id: 6,
      title: "Carbon Credit Tracking System",
      description: "A blockchain-based platform that verifies and tracks carbon credits for individuals and organizations to offset their carbon footprint.",
      category: "Social Impact",
      stars: 93,
      contributors: 14,
      lastUpdated: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1621644963228-78f6aa8bc81b?auto=format&fit=crop&w=800&q=80",
      featured: false,
      location: "Kailashahar, Tripura, India"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Discover Innovative Projects
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Explore and contribute to cutting-edge open source projects from Tripura, India and around the world building the future of Web3
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-medium">
                  Browse Projects
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Submit Your Project
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-12 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center mb-8">
              <h2 className="text-2xl font-bold mr-4">Projects</h2>
              <div className="relative">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter size={16} />
                  <span>Filter</span>
                </Button>
              </div>
            </div>
            
            <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-2">
              {categories.map((category) => (
                <div key={category} className="px-2">
                  <Button 
                    variant={category === "All Projects" ? "default" : "outline"} 
                    size="sm"
                    className="whitespace-nowrap font-medium"
                  >
                    {category}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="font-medium">{project.category}</Badge>
                      {project.featured && (
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <MapPin size={16} className="mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4 gap-4">
                      <div className="flex items-center">
                        <Star size={16} className="mr-1" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span>{project.contributors}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{project.lastUpdated}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full font-medium group">
                      View Project
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="font-medium group">
                Load More Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
