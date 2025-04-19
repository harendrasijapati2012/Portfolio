"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaReact, FaNodeJs, FaPhp, FaJs, FaLaravel } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiDjango, SiNextdotjs, SiTailwindcss, SiMui, SiCplusplus, SiExpress } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      title: "Banking Management System",
      description: "A comprehensive banking system with user accounts, transactions, and admin controls built in C language.",
      technologies: ["C", "File Handling", "Data Structures"],
      imageUrl: "/projects/banking.png",
      githubUrl: "https://github.com/harendrasijapati2012/banking-management",
      category: "c"
    },
    {
      title: "Authentication System",
      description: "Secure authentication system using JWT, REST Framework with both local storage and cookie-based sessions.",
      technologies: ["React", "Django", "JWT", "REST API"],
      imageUrl: "/projects/auth.png",
      githubUrl: "https://github.com/harendrasijapati2012/auth-system",
      liveUrl: "https://auth-demo.example.com",
      category: "fullstack"
    },
    {
      title: "JavaScript Mini Games",
      description: "Collection of interactive games including Tic-Tac-Toe, Rock Paper Scissors, and other classic games.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      imageUrl: "/projects/minigame.png",
      githubUrl: "https://github.com/yourusername/js-games",
      liveUrl: "https://js-games.example.com",
      category: "javascript"
    },
    {
      title: "Restaurant Billing System",
      description: "An efficient point-of-sale solution for restaurants with inventory management and billing features.",
      technologies: ["Visual Basic", "SQL", "Reporting Services"],
      imageUrl: "/projects/billing.png",
      githubUrl: "https://github.com/yourusername/restaurant-billing",
      category: "visualbasic"
    },
    {
      title: " Management Control Panel",
      description: "Comprehensive user management system with role-based access control and detailed analytics.",
      technologies: ["Django", "React", "Redux", "PostgreSQL"],
      imageUrl: "/projects/management.png",
      githubUrl: "https://github.com/CollegeFinderSystem/Frontend_CFS",
      liveUrl: "https://user-panel.example.com",
      category: "fullstack"
    },
    {
      title: "Admin Dashboard",
      description: "Feature-rich admin control panel with customizable widgets and comprehensive reporting.",
      technologies: ["React", "Django", "Tailwind CSS", "Material UI", "shadcn/ui"],
      imageUrl: "/projects/admin.png",
      githubUrl: "https://github.com/Advertisement-Hub-55/Frontend_Admin_Panel",
      liveUrl: "https://admin-dash.example.com",
      category: "fullstack"
    },
    {
      title: "College Finder System",
      description: "Platform helping students find colleges based on their preferences, courses, and locations.",
      technologies: ["Django", "Python", "React", "PostgreSQL"],
      imageUrl: "/projects/college.png",
      githubUrl: "https://github.com/orgs/CollegeFinderSystem/repositories",
      liveUrl: "https://findmycollege.example.com",
      category: "fullstack"
    },
    {
      title: "Event Organization & Blood Donation",
      description: "Platform for organizing events and coordinating blood donation drives with donor management.",
      technologies: ["Laravel", "PHP", "Next.js", "React", "MySQL"],
      imageUrl: "/projects/blood.png",
      githubUrl: "https://github.com/yourusername/event-blooddonation",
      liveUrl: "https://events-donate.example.com",
      category: "laravel"
    },
    {
      title: "Gharbeti Rental Services",
      description: "Property rental marketplace connecting landlords with tenants, featuring property listings and booking system.",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Redux"],
      imageUrl: "/projects/rent.png",
      githubUrl: "https://github.com/yourusername/gharbeti-rental",
      liveUrl: "https://gharbeti.example.com",
      category: "nodejs"
    },
    {
      title: "Promotion Advertisement Hub",
      description: "Property rental marketplace connecting landlords with tenants, featuring property listings and booking system.",
      technologies: ["django", "django rest framework", "Sqlite3", "React"],
      imageUrl: "/projects/advertisementhub.png",
      githubUrl: "https://github.com/orgs/Advertisement-Hub-55/repositories",
      liveUrl: "http://x08c48c8wc048w40cc0w4sow.157.173.220.245.sslip.io/",
      category: "fullstack"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getIcon = (tech: string) => {
    switch(tech.toLowerCase()) {
      case 'react': return <FaReact className="text-blue-500" />;
      case 'node.js': return <FaNodeJs className="text-green-600" />;
      case 'mongodb': return <SiMongodb className="text-green-500" />;
      case 'typescript': return <SiTypescript className="text-blue-700" />;
      case 'django': return <SiDjango className="text-green-800" />;
      case 'next.js': return <SiNextdotjs className="text-black" />;
      case 'tailwind css': return <SiTailwindcss className="text-blue-400" />;
      case 'material ui': return <SiMui className="text-blue-600" />;
      case 'c': return <SiCplusplus className="text-blue-800" />;
      case 'visual basic': return <VscCode className="text-purple-600" />;
      case 'php': return <FaPhp className="text-purple-500" />;
      case 'laravel': return <FaLaravel className="text-red-500" />;
      case 'javascript': return <FaJs className="text-yellow-500" />;
      case 'express': return <SiExpress className="text-black" />;
      default: return <FaCode className="text-gray-600" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-background">
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400"
          >
            My Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Explore my latest work and development projects
          </motion.p>
        </motion.div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-4 no-scrollbar">
          <div className="inline-flex bg-white dark:bg-[#09090b] rounded-lg p-1 shadow-md">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                ${filter === 'all' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                ${filter === 'fullstack' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'}`}
            >
              Full Stack
            </button>
            <button 
              onClick={() => setFilter('javascript')}
              className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                ${filter === 'javascript' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'}`}
            >
              JavaScript
            </button>
            <button 
              onClick={() => setFilter('c')}
              className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                ${filter === 'c' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'}`}
            >
              C Language
            </button>
            <button 
              onClick={() => setFilter('visualbasic')}
              className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                ${filter === 'visualbasic' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'}`}
            >
              Visual Basic
            </button>
            <button 
              onClick={() => setFilter('nodejs')}
              className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                ${filter === 'nodejs' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'}`}
            >
              Node.js
            </button>
            <button 
              onClick={() => setFilter('laravel')}
              className={`px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap
                ${filter === 'laravel' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400'}`}
            >
              Laravel
            </button>
          </div>
        </div>

        {/* Projects Grid with Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[70vh] overflow-y-auto pr-2 pt-2 pb-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#a855f7 transparent'
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden h-52">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <FaGithub className="w-6 h-6 text-white" />
                    </motion.a>
                  )}
                  
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-6 h-6 text-white" />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      {getIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}