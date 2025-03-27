
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { ArrowRight, Search, Code, Briefcase, DollarSign, Clock, Filter, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const Bounties = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const bountyCategories = [
    "All Bounties",
    "Smart Contracts",
    "Frontend",
    "Backend",
    "Design",
    "Documentation",
    "Security",
    "Testing",
  ];

  const bounties = [
    {
      id: 1,
      title: "Implement ERC-721 NFT Smart Contract",
      description: "Create an ERC-721 compatible smart contract for a new NFT collection with metadata support.",
      category: "Smart Contracts",
      reward: "₹2,10,000",
      deadline: "7 days",
      difficulty: "Intermediate",
      company: "MetaCollect",
      location: "Agartala, Tripura, India",
      companyLogo: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    },
    {
      id: 2,
      title: "Build Dashboard UI for DeFi Protocol",
      description: "Design and implement a user dashboard for a decentralized finance application using React and web3 libraries.",
      category: "Frontend",
      reward: "₹2,70,000",
      deadline: "14 days",
      difficulty: "Advanced",
      company: "DeFiPro",
      location: "Remote",
      companyLogo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    },
    {
      id: 3,
      title: "Smart Contract Security Audit",
      description: "Perform a comprehensive security audit of our lending protocol smart contracts and provide detailed report.",
      category: "Security",
      reward: "₹4,20,000",
      deadline: "10 days",
      difficulty: "Expert",
      company: "SecureChain",
      location: "Dharmanagar, Tripura, India",
      companyLogo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    },
    {
      id: 4,
      title: "Create Technical Documentation",
      description: "Write comprehensive technical documentation for our new API, including endpoints, parameters, and examples.",
      category: "Documentation",
      reward: "₹1,00,000",
      deadline: "5 days",
      difficulty: "Beginner",
      company: "DevDocs",
      location: "Remote",
      companyLogo: "https://images.unsplash.com/photo-1560415755-bd80d06eda60?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    },
    {
      id: 5,
      title: "Design Token Economics Model",
      description: "Create a sustainable token economics model for our new DAO governance system with detailed documentation.",
      category: "Design",
      reward: "₹3,80,000",
      deadline: "21 days",
      difficulty: "Expert",
      company: "TokenDAO",
      location: "Kailashahar, Tripura, India",
      companyLogo: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    },
    {
      id: 6,
      title: "Build Real-time Data Indexer",
      description: "Develop a scalable indexing service that processes blockchain events in real-time for our analytics platform.",
      category: "Backend",
      reward: "₹3,20,000",
      deadline: "12 days",
      difficulty: "Advanced",
      company: "BlockData",
      location: "Belonia, Tripura, India",
      companyLogo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Advanced":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      case "Expert":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Complete Bounties, Earn Rewards
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Find opportunities from Tripura, India and around the world to contribute to exciting projects and earn rewards for your skills
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-medium">
                  Explore Bounties
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Post a Bounty
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-12 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search for bounties..." 
                  className="pl-10 h-12 text-base"
                />
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div className="flex overflow-x-auto pb-2 scrollbar-hide -mx-2">
                  {bountyCategories.map((category) => (
                    <div key={category} className="px-2">
                      <Button 
                        variant={category === "All Bounties" ? "default" : "outline"} 
                        size="sm"
                        className="whitespace-nowrap font-medium"
                      >
                        {category}
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="gap-2 flex-shrink-0 ml-2">
                  <Filter size={16} />
                  <span>Filter</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bounties List */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Featured Bounties</h2>
              
              <div className="space-y-5">
                {bounties.map((bounty) => (
                  <Card key={bounty.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="md:flex md:justify-between">
                        <div className="md:flex-1 pr-6">
                          <div className="flex items-center mb-3">
                            <Badge className="mr-2 font-medium">{bounty.category}</Badge>
                            <Badge 
                              variant="outline" 
                              className={getDifficultyColor(bounty.difficulty)}
                            >
                              {bounty.difficulty}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2">{bounty.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {bounty.description}
                          </p>
                          
                          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4 mb-3">
                            <div className="flex items-center">
                              <Briefcase size={16} className="mr-1" />
                              <div className="flex items-center">
                                <img
                                  src={bounty.companyLogo}
                                  alt={bounty.company}
                                  className="w-5 h-5 rounded-full mr-1"
                                />
                                <span>{bounty.company}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-1" />
                              <span>{bounty.location}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign size={16} className="mr-1" />
                              <span>{bounty.reward}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock size={16} className="mr-1" />
                              <span>{bounty.deadline} remaining</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 flex md:flex-col md:justify-center items-center">
                          <Button className="w-full font-medium">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="font-medium group">
                  View All Bounties
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Complete bounties in three simple steps and get rewarded for your contributions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Find a Bounty</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Browse through available bounties and find one that matches your skills and interests.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Complete the Work</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Submit your solution before the deadline and get feedback from the bounty creator.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Get Rewarded</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Once your submission is approved, you'll receive the bounty reward directly.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bounty posting section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto bg-primary/5 rounded-xl p-8">
              <div className="md:flex items-center">
                <div className="md:flex-1 mb-6 md:mb-0 md:pr-12">
                  <h2 className="text-2xl font-bold mb-4">Have a Project that Needs Help?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Post a bounty and get connected with skilled developers from Tripura, India and around the world. Set your budget, timeline, and requirements.
                  </p>
                  <Button size="lg" className="font-medium">Post a Bounty</Button>
                </div>
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Post a bounty" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bounties;
