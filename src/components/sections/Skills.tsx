import React, { JSX } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaGit, FaAws, FaJava, FaWindows } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, 
         SiMysql, SiDjango, SiBootstrap, SiCplusplus, SiPhp, SiLinux } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';


interface SkillItem {
  name: string;
  icon: JSX.Element;
}

interface SkillCategories {
  languages: SkillItem[];
  frontend: SkillItem[];
  backend: SkillItem[];
  database: SkillItem[];
  tools: SkillItem[];
}

export default function Skills() {
  const skills: SkillCategories = {
    languages: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={24} /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={24} /> },
      { name: "Python", icon: <FaPython className="text-blue-500" size={24} /> },
      { name: "Java", icon: <FaJava className="text-red-500" size={24} /> },
      { name: "C", icon: <TbBrandCpp className="text-blue-800" size={24} /> },
      { name: "C++", icon: <SiCplusplus className="text-green-600" size={24} /> },
      { name: "PHP", icon: <SiPhp className="text-purple-600" size={24} /> },
      { name: "Visual Basic", icon: <FaWindows className="text-blue-700" size={24} /> },
    ],
    frontend: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={24} /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={24} /> },
      { name: "React", icon: <FaReact className="text-blue-400" size={24} /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={24} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" size={24} /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" size={24} /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={24} /> },
      { name: "Express", icon: <SiExpress className="text-gray-600 dark:text-gray-400" size={24} /> },
      { name: "Django", icon: <SiDjango className="text-green-800" size={24} /> },
      { name: "REST Framework", icon: <SiDjango className="text-red-600" size={24} /> },
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={24} /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" size={24} /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-800" size={24} /> },
      { name: "SQLite", icon: <FaDatabase className="text-blue-400" size={24} /> },
    ],
    tools: [
      { name: "Git", icon: <FaGit className="text-orange-600" size={24} /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" size={24} /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" size={24} /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-500" size={24} /> },
    ],
  };

  const renderSkillItem = (skill: SkillItem, index: number) => (
    <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-blue-100 dark:border-blue-800">
      <div className="flex-shrink-0">
        {skill.icon}
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
    </div>
  );
  

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">Skills & Expertise</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          A comprehensive overview of my technical stack and proficiencies across various domains of software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <TbBrandCpp className="text-blue-600" size={28} />
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.languages.map((skill, index) => renderSkillItem(skill, index))}
              </div>
            </div>
          </div>

          {/* Frontend */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <FaReact className="text-blue-400" size={28} />
                Frontend
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.frontend.map((skill, index) => renderSkillItem(skill, index))}
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <FaNodeJs className="text-green-500" size={28} />
                Backend
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.backend.map((skill, index) => renderSkillItem(skill, index))}
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <FaDatabase className="text-blue-500" size={28} />
                Database
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.database.map((skill, index) => renderSkillItem(skill, index))}
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <FaDocker className="text-blue-500" size={28} />
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.tools.map((skill, index) => renderSkillItem(skill, index))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}