import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Users, Award, ArrowRight, Filter, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type HackathonStatus = "upcoming" | "active" | "completed";

type Hackathon = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  participants: number;
  prize: string;
  status: HackathonStatus;
  image: string;
  url: string;
};

const Hackathons = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [visibleHackathons, setVisibleHackathons] = useState(6);

  const hackathons: Hackathon[] = [
    {
      id: 1,
      title: "Web3 Development Summit",
      description: "Build innovative decentralized applications and tools for the Web3 ecosystem.",
      start_date: "2025-07-15",
      end_date: "2025-08-20",
      location: "Virtual",
      participants: 872,
      prize: "₹42,00,000",
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
      location: "Agartala, Tripura, India",
      participants: 0,
      prize: "₹63,00,000",
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
      location: "Berlin, Germany",
      participants: 945,
      prize: "₹54,00,000",
      status: "completed",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/hackathons/defi-innovation-hackathon",
    },
    {
      id: 4,
      title: "AI for Good Challenge",
      description: "Develop AI solutions to address critical social and environmental challenges.",
      start_date: "2025-08-01",
      end_date: "2025-09-15",
      location: "Virtual",
      participants: 562,
      prize: "₹67,00,000",
      status: "active",
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/hackathons/ai-for-good-challenge",
    },
    {
      id: 5,
      title: "DAO Governance Hackathon",
      description: "Create innovative solutions for decentralized autonomous organization governance.",
      start_date: "2025-10-05",
      end_date: "2025-11-20",
      location: "Dharmanagar, Tripura, India",
      participants: 0,
      prize: "₹23,000",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/hackathons/dao-governance-hackathon",
    },
    {
      id: 6,
      title: "NFT Creator Festival",
      description: "Build tools and platforms that empower artists and creators in the NFT space.",
      start_date: "2025-03-15",
      end_date: "2025-04-30",
      location: "Paris, France",
      participants: 736,
      prize: "₹50,00,000",
      status: "completed",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/hackathons/nft-creator-festival",
    },
    {
      id: 7,
      title: "Web3 Security Challenge",
      description: "Identify and solve security vulnerabilities in blockchain applications and smart contracts.",
      start_date: "2025-11-10",
      end_date: "2025-12-15",
      location: "Virtual",
      participants: 0,
      prize: "₹75,00,000",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/hackathons/web3-security-challenge",
    },
    {
      id: 8,
      title: "Gaming Metaverse Hackathon",
      description: "Build immersive gaming experiences for the metaverse.",
      start_date: "2025-04-01",
      end_date: "2025-05-15",
      location: "Kailashahar, Tripura, India",
      participants: 892,
      prize: "₹58,00,000",
      status: "completed",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "/hackathons/gaming-metaverse-hackathon",
    },
  ];

  const getStatusColor = (status: HackathonStatus) => {
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

  const loadMore = () => {
    setVisibleHackathons((prev) => Math.min(prev + 3, hackathons.length));
  };

  const activeHackathons = hackathons.filter(h => h.status === "active");
  const upcomingHackathons = hackathons.filter(h => h.status === "upcoming");
  const completedHackathons = hackathons.filter(h => h.status === "completed");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Join Global Hackathons
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Compete with talented individuals from around the world, solve real-world problems, and win exciting prizes
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-medium">
                  Find a Hackathon
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Host a Hackathon
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter size={16} />
                  <span>Filter</span>
                </Button>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {hackathons.slice(0, visibleHackathons).map((hackathon) => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                  ))}
                </div>
                
                {visibleHackathons < hackathons.length && (
                  <div className="text-center mt-12">
                    <Button onClick={loadMore} variant="outline" className="font-medium group">
                      Load More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="active" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {activeHackathons.map((hackathon) => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                  ))}
                </div>
                
                {activeHackathons.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 dark:text-gray-400">No active hackathons at the moment. Check back soon!</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {upcomingHackathons.map((hackathon) => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                  ))}
                </div>
                
                {upcomingHackathons.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 dark:text-gray-400">No upcoming hackathons at the moment. Check back soon!</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="completed" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {completedHackathons.map((hackathon) => (
                    <HackathonCard key={hackathon.id} hackathon={hackathon} />
                  ))}
                </div>
                
                {completedHackathons.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 dark:text-gray-400">No completed hackathons to display.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

type HackathonCardProps = {
  hackathon: Hackathon;
};

const HackathonCard = ({ hackathon }: HackathonCardProps) => {
  const getStatusColor = (status: HackathonStatus) => {
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
    <Card className="overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
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
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} className="mr-2 text-primary/70" />
            <span>{hackathon.location}</span>
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
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Hackathons;
