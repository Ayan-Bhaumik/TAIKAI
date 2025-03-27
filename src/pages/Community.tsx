
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Globe, MessageSquare, Users, Zap, Github, Twitter } from "lucide-react";

const Community = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Web3 Developer Meetup",
      date: "June 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Agartala, Tripura, India",
      attendees: 128,
    },
    {
      id: 2,
      title: "Blockchain for Beginners Workshop",
      date: "June 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual",
      attendees: 85,
    },
    {
      id: 3,
      title: "DeFi Innovation Roundtable",
      date: "July 5, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Dharmanagar, Tripura, India",
      attendees: 42,
    },
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Best practices for gas optimization in Solidity",
      category: "Development",
      replies: 34,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      title: "How to structure a DAO for maximum community engagement",
      category: "Governance",
      replies: 28,
      lastActive: "6 hours ago",
    },
    {
      id: 3,
      title: "Implementing zero-knowledge proofs in your dApp",
      category: "Security",
      replies: 19,
      lastActive: "1 day ago",
    },
    {
      id: 4,
      title: "The future of cross-chain interoperability",
      category: "Technology",
      replies: 42,
      lastActive: "2 days ago",
    },
  ];

  const contributors = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Smart Contract Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      contributions: 147,
      location: "Agartala, Tripura, India"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      contributions: 132,
      location: "Kailashahar, Tripura, India"
    },
    {
      id: 3,
      name: "Amit Mehta",
      role: "Security Researcher",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      contributions: 118,
      location: "Belonia, Tripura, India"
    },
    {
      id: 4,
      name: "Neha Patel",
      role: "Technical Writer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      contributions: 96,
      location: "Udaipur, Tripura, India"
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
                Join Our Global Community
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Connect with developers, entrepreneurs, and enthusiasts from Tripura, India and around the world to build the future of Web3
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-medium">
                  Join Discord
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Explore Forums
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Stats */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">12,500+</div>
                  <p className="text-gray-600 dark:text-gray-300">Community Members</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">90+</div>
                  <p className="text-gray-600 dark:text-gray-300">Countries Represented</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">3,200+</div>
                  <p className="text-gray-600 dark:text-gray-300">Active Contributors</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare size={24} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">18,000+</div>
                  <p className="text-gray-600 dark:text-gray-300">Forum Posts</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Channels</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Stay connected with our community across multiple platforms
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare size={32} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Discord</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    Join our active Discord community for real-time discussions and support.
                  </p>
                  <Button className="w-full font-medium">Join Discord</Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Twitter size={32} className="text-blue-500 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">Twitter</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    Follow us on Twitter for the latest news, updates, and announcements.
                  </p>
                  <Button variant="outline" className="w-full font-medium">Follow on Twitter</Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Github size={32} className="text-gray-900 dark:text-gray-200" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    Contribute to our open-source projects and collaborate with developers.
                  </p>
                  <Button variant="outline" className="w-full font-medium">Fork on GitHub</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Upcoming Events</h2>
                <Button variant="outline" className="font-medium group">
                  View All
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-5 w-5 text-primary mr-2" />
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {event.date} • {event.time}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Users size={16} className="mr-1" />
                          {event.attendees} attending
                        </div>
                      </div>
                      
                      <Button className="w-full font-medium">Join Event</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Forum Topics */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Popular Forum Topics</h2>
                <Button variant="outline" className="font-medium group">
                  Visit Forums
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-800 hidden md:grid md:grid-cols-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <div className="col-span-2">Topic</div>
                  <div>Category</div>
                  <div>Activity</div>
                </div>
                
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {forumTopics.map((topic) => (
                    <div key={topic.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                      <div className="px-6 py-4 md:grid md:grid-cols-4 md:gap-4">
                        <div className="col-span-2 mb-2 md:mb-0">
                          <h3 className="font-medium">{topic.title}</h3>
                        </div>
                        <div className="md:text-center">
                          <Badge variant="outline">{topic.category}</Badge>
                        </div>
                        <div className="flex items-center justify-between md:justify-end mt-2 md:mt-0">
                          <span className="text-sm text-gray-500 dark:text-gray-400 md:mr-4">{topic.replies} replies</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{topic.lastActive}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Top Contributors */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Top Contributors</h2>
                <Button variant="outline" className="font-medium group">
                  See All
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {contributors.map((contributor) => (
                  <Card key={contributor.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <img
                          src={contributor.avatar}
                          alt={contributor.name}
                          className="rounded-full object-cover w-full h-full"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                          {contributor.contributions}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-1">{contributor.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{contributor.role}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{contributor.location}</p>
                      
                      <Button variant="outline" size="sm" className="w-full font-medium">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
