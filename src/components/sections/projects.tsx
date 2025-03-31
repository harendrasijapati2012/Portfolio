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
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/banking-management",
      category: "c"
    },
    {
      title: "Authentication System",
      description: "Secure authentication system using JWT, REST Framework with both local storage and cookie-based sessions.",
      technologies: ["React", "Django", "JWT", "REST API"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/auth-system",
      liveUrl: "https://auth-demo.example.com",
      category: "fullstack"
    },
    {
      title: "JavaScript Mini Games",
      description: "Collection of interactive games including Tic-Tac-Toe, Rock Paper Scissors, and other classic games.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/js-games",
      liveUrl: "https://js-games.example.com",
      category: "javascript"
    },
    {
      title: "Restaurant Billing System",
      description: "An efficient point-of-sale solution for restaurants with inventory management and billing features.",
      technologies: ["Visual Basic", "SQL", "Reporting Services"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/restaurant-billing",
      category: "visualbasic"
    },
    {
      title: "User Management Control Panel",
      description: "Comprehensive user management system with role-based access control and detailed analytics.",
      technologies: ["Django", "React", "Redux", "PostgreSQL"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/user-management",
      liveUrl: "https://user-panel.example.com",
      category: "fullstack"
    },
    {
      title: "Admin Dashboard",
      description: "Feature-rich admin control panel with customizable widgets and comprehensive reporting.",
      technologies: ["React", "Django", "Tailwind CSS", "Material UI", "shadcn/ui"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/admin-dashboard",
      liveUrl: "https://admin-dash.example.com",
      category: "fullstack"
    },
    {
      title: "College Finder System",
      description: "Platform helping students find colleges based on their preferences, courses, and locations.",
      technologies: ["Django", "Python", "React", "PostgreSQL"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/college-finder",
      liveUrl: "https://findmycollege.example.com",
      category: "fullstack"
    },
    {
      title: "Event Organization & Blood Donation",
      description: "Platform for organizing events and coordinating blood donation drives with donor management.",
      technologies: ["Laravel", "PHP", "Next.js", "React", "MySQL"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/event-blooddonation",
      liveUrl: "https://events-donate.example.com",
      category: "laravel"
    },
    {
      title: "Gharbeti Rental Services",
      description: "Property rental marketplace connecting landlords with tenants, featuring property listings and booking system.",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Redux"],
      imageUrl: "/api/placeholder/400/250",
      githubUrl: "https://github.com/yourusername/gharbeti-rental",
      liveUrl: "https://gharbeti.example.com",
      category: "nodejs"
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

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">My Projects</h2>
        <p className="text-xl text-gray-600 text-center mb-8">Explore my latest work and development projects</p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'fullstack' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Full Stack
          </button>
          <button 
            onClick={() => setFilter('javascript')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'javascript' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            JavaScript
          </button>
          <button 
            onClick={() => setFilter('c')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'c' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            C Language
          </button>
          <button 
            onClick={() => setFilter('visualbasic')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'visualbasic' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Visual Basic
          </button>
          <button 
            onClick={() => setFilter('nodejs')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'nodejs' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Node.js
          </button>
          <button 
            onClick={() => setFilter('laravel')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === 'laravel' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Laravel
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
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
</div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
                    >
                      {getIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}