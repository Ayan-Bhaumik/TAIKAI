
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Hackathons", href: "/hackathons" },
  { name: "Bounties", href: "/bounties" },
  { name: "Community", href: "/community" },
  { name: "Learn", href: "/learn" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                TAIKAI
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 link-underline"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              className="p-2 text-gray-500 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Button variant="outline" size="sm" className="font-medium">
              Log in
            </Button>
            <Button size="sm" className="font-medium">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open main menu"}
              </span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out transform",
          mobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              TAIKAI
            </span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root px-6">
          <div className="space-y-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-base font-medium text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 space-y-4">
            <Button variant="outline" className="w-full justify-center font-medium">
              Log in
            </Button>
            <Button className="w-full justify-center font-medium">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
