
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Clock, Video, File, CheckCircle, Users } from "lucide-react";

const Learn = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "Blockchain Fundamentals",
      description: "Learn the core concepts of blockchain technology and its revolutionary potential.",
      level: "Beginner",
      duration: "4 weeks",
      modules: 7,
      students: 2548,
      instructor: "Dr. Rakesh Kumar",
      instructorTitle: "Professor, NIT Tripura",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Smart Contract Development with Solidity",
      description: "Master the Solidity programming language and build secure smart contracts.",
      level: "Intermediate",
      duration: "6 weeks",
      modules: 10,
      students: 1837,
      instructor: "Priya Sharma",
      instructorTitle: "Lead Developer, Tripura Web3 Labs",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Decentralized Finance (DeFi) Deep Dive",
      description: "Explore the world of DeFi protocols, lending platforms, and yield farming strategies.",
      level: "Advanced",
      duration: "8 weeks",
      modules: 12,
      students: 1253,
      instructor: "Amit Patel",
      instructorTitle: "Founder, Tripura DeFi Alliance",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const resourceCategories = [
    {
      id: "articles",
      title: "Articles & Tutorials",
      icon: <BookOpen className="h-6 w-6" />,
      count: 147,
    },
    {
      id: "videos",
      title: "Video Courses",
      icon: <Video className="h-6 w-6" />,
      count: 68,
    },
    {
      id: "documentation",
      title: "Documentation",
      icon: <File className="h-6 w-6" />,
      count: 92,
    },
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: "Web3 Development in 2025: Trends and Opportunities",
      date: "June 18, 2025",
      time: "3:00 PM IST",
      speaker: "Neha Verma",
      speakerTitle: "CTO, Tripura Blockchain Foundation",
    },
    {
      id: 2,
      title: "Building Scalable dApps on Ethereum Layer 2 Solutions",
      date: "June 25, 2025",
      time: "5:30 PM IST",
      speaker: "Rajesh Mehta",
      speakerTitle: "Senior Engineer, ETH India",
    },
    {
      id: 3,
      title: "NFT Use Cases Beyond Digital Art",
      date: "July 5, 2025",
      time: "4:00 PM IST",
      speaker: "Vikram Singh",
      speakerTitle: "Founder, Tripura NFT Collective",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Advanced":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
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
                Learn Web3 Development
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Access high-quality courses, tutorials, and resources to build your skills in blockchain and Web3 technologies
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="font-medium">
                  Browse Courses
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  View Learning Paths
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Courses */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold">Featured Courses</h2>
                <Button variant="outline" className="font-medium group">
                  View All Courses
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {featuredCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Badge 
                          className={getLevelColor(course.level)}
                        >
                          {course.level}
                        </Badge>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {course.description}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <img
                          src={`https://ui-avatars.com/api/?name=${course.instructor.replace(' ', '+')}&background=random`}
                          alt={course.instructor}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <div>
                          <div className="font-medium">{course.instructor}</div>
                          <div className="text-xs">{course.instructorTitle}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen size={14} className="mr-1" />
                          <span>{course.modules} modules</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full font-medium group">
                        Start Learning
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Learning Resources */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-4">Free Learning Resources</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Explore our library of free resources to expand your knowledge and skills
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {resourceCategories.map((category) => (
                  <Card key={category.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {category.count}+ resources available
                      </p>
                      <Button variant="outline" className="font-medium group">
                        Browse {category.title}
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Learning Paths */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Learning Paths</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Follow our guided learning paths to master specific skills and technologies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="overflow-hidden border-primary/20 border-2 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Blockchain Developer Path</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Introduction to Blockchain</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Learn the fundamentals of blockchain technology</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Solidity Programming</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Master smart contract development</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Web3.js & Frontend Integration</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Build user interfaces for blockchain applications</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Security & Best Practices</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Secure your smart contracts and applications</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full font-medium group">
                      Start This Path
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">DeFi Specialist Path</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">DeFi Fundamentals</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Understand decentralized finance concepts</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Lending Protocols & AMMs</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Deep dive into lending and trading mechanisms</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Yield Farming Strategies</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Learn optimal investment strategies</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium">DeFi Security & Risk Management</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">Protect against exploits and vulnerabilities</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full font-medium group">
                      Start This Path
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Webinars */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold">Upcoming Webinars</h2>
                <Button variant="outline" className="font-medium group">
                  View All
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingWebinars.map((webinar) => (
                  <Card key={webinar.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="md:flex md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                          <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-300">
                            <Clock size={16} className="mr-1" />
                            <span>{webinar.date} • {webinar.time}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <img
                              src={`https://ui-avatars.com/api/?name=${webinar.speaker.replace(' ', '+')}&background=random`}
                              alt={webinar.speaker}
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <div>
                              <div className="font-medium">{webinar.speaker}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{webinar.speakerTitle}</div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:flex items-center">
                          <Button className="w-full md:w-auto whitespace-nowrap font-medium">Register Now</Button>
                        </div>
                      </div>
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

export default Learn;
