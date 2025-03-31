"use client";

// src/components/sections/Hero.tsx
import { useState, useEffect } from 'react';
import { FaReact, FaLaptopCode } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [greeting, setGreeting] = useState('');
  
  // Tech stack with icons
  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> }
  ];

  // Auto-rotate tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  // Set time-based greeting
  useEffect(() => {
    const setTimeBasedGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting('Good Morning');
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };
    
    // Set initial greeting
    setTimeBasedGreeting();
    
    // Update greeting every minute
    const interval = setInterval(setTimeBasedGreeting, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left side - Developer Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-5/12 flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <motion.div 
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  y: [0, -5, 0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  ease: "easeInOut" 
                }}
                className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500 rounded-lg opacity-20"
              />
              <motion.div 
                animate={{ 
                  rotate: [0, -5, 0, 5, 0],
                  y: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-500 rounded-full opacity-20"
              />
              
              {/* Main illustration card */}
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl overflow-hidden">
                {/* Code background pattern */}
                <div className="absolute inset-0 opacity-5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="text-xs text-gray-900 font-mono whitespace-nowrap overflow-hidden" style={{ marginTop: `${i * 20}px` }}>
                      {`<div className="${i % 2 === 0 ? 'flex justify-between' : 'grid grid-cols-2'}">`}
                      {`  <Component${i} props={{ data: value${i} }} />`}
                      {`</div>`}
                    </div>
                  ))}
                </div>
                
                {/* Decorative code editor header */}
                <div className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-500 dark:text-gray-400 font-mono">developer.jsx</div>
                </div>
                
                {/* Main illustration content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                      <FaLaptopCode className="text-4xl" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Developer</h3>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 font-mono text-sm text-gray-800 dark:text-gray-200 mb-4">
                    <div><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">developer</span> = {`{`}</div>
                    <div className="pl-4"><span className="text-green-600 dark:text-green-400">createUI:</span> <span className="text-orange-600 dark:text-orange-400">true</span>,</div>
                    <div className="pl-4"><span className="text-green-600 dark:text-green-400">solveProblems:</span> <span className="text-orange-600 dark:text-orange-400">true</span>,</div>
                    <div className="pl-4"><span className="text-green-600 dark:text-green-400">coffee:</span> <span className="text-orange-600 dark:text-orange-400">required</span></div>
                    <div>{`}`};</div>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    {techStack.slice(0, 3).map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="w-10 h-10 bg-white dark:bg-gray-700 rounded-lg shadow-md flex items-center justify-center text-xl"
                      >
                        {tech.icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Developer Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-7/12 text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-gray-800 dark:text-white">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2"
              >
                <span className="text-blue-600 dark:text-blue-400">{greeting},</span>
                <span>I&apos;m <span className="text-blue-600 dark:text-blue-400">Harendra Sijapati</span></span>
              </motion.div>
            </h1>
            
            <div className="mt-4 flex items-center text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              <span>Full Stack Developer</span>
              <div className="mx-2 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center"
              >
                {techStack[activeIndex].icon}
                <span className="ml-1.5">{techStack[activeIndex].name}</span>
              </motion.div>
            </div>
            
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              I build exceptional and accessible web applications that combine form with function.
              Specializing in React, Django REST Framework, and PostgreSQL to create robust and
              scalable solutions for modern businesses.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full shadow-sm"
                >
                  <span className="text-xl mr-1.5">{tech.icon}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-200">{tech.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}