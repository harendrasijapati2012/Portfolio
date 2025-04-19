"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Home, Briefcase, Code2, Mail, Code } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

interface NavItem {
  label: string;
  href: string;
  icon: typeof Home; // More specific type for icons
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

// Custom button component for navigation items
const NavButton = ({
  active,
  icon: Icon,
  label,
  onClick,
  onKeyDown,
  className,
}: {
  active: boolean;
  icon: typeof Home;
  label: string;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  className?: string;
}) => (
  <Button
    variant="ghost"
    className={cn(
      "flex items-center space-x-2 transition-colors",
      active ? "text-blue-500 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",
      className
    )}
    onClick={onClick}
    onKeyDown={onKeyDown}
    role="link"
    aria-current={active ? "page" : undefined}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </Button>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Check if page is scrolled to apply shadow/background change
      setIsScrolled(scrollPosition > 10);
      
      // Get all sections and their positions
      const sections = navItems.map(item => {
        const element = document.getElementById(item.href.substring(1));
        if (!element) return null;
        
        return {
          id: item.href.substring(1),
          offset: Math.abs(element.getBoundingClientRect().top + scrollPosition - scrollPosition)
        };
      }).filter((section): section is { id: string; offset: number } => section !== null);

      // Find the section closest to the top of the viewport
      if (sections.length > 0) {
        const closestSection = sections.reduce((closest, current) => {
          return current.offset < closest.offset ? current : closest;
        });

        if (closestSection) {
          setActiveSection(closestSection.id);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - 80;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  const handleKeyNavigation = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(href);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (
        isMenuOpen && 
        mobileMenu && 
        menuButton && 
        !mobileMenu.contains(target) && 
        !menuButton.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  if (!mounted) return null;

  // Theme toggle button component
  const ThemeToggle = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 h-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-md" 
        : "bg-white/75 dark:bg-gray-900/75"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="relative h-8 w-8 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white overflow-hidden group">
              <Code className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Harendra
            </h1>
            <div className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md font-mono ml-1">
              <span className="text-blue-600 dark:text-blue-400">dev</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavButton
                key={item.href}
                icon={item.icon}
                label={item.label}
                active={activeSection === item.href.substring(1)}
                onClick={() => scrollToSection(item.href)}
                onKeyDown={(e) => handleKeyNavigation(e, item.href)}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              id="menu-button"
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Slide from right with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[65%] bg-white dark:bg-gray-900 shadow-xl z-50 p-5 pt-20 md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * navItems.findIndex(i => i.href === item.href) }}
                  >
                    <NavButton
                      icon={item.icon}
                      label={item.label}
                      active={activeSection === item.href.substring(1)}
                      onClick={() => scrollToSection(item.href)}
                      onKeyDown={(e) => handleKeyNavigation(e, item.href)}
                      className="w-full justify-start text-lg py-3"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Overlay when mobile menu is open */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;