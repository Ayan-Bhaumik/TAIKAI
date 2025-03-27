
import { Github, Twitter, Linkedin, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                TAIKAI
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              The innovation network connecting developers, enterprises, and web3 enthusiasts.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link to="/bounties" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Bounties
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Learn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/documentation" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} TAIKAI. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <a href="mailto:info@taikai.network" className="flex items-center hover:text-primary">
              <Mail size={16} className="mr-1" />
              Contact
            </a>
            <a href="#" className="flex items-center hover:text-primary">
              <Globe size={16} className="mr-1" />
              English
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
