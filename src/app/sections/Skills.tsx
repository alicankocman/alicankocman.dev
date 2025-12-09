"use client";

import React from "react";
import { Code2 } from "lucide-react";

const skills = [
  {
    icon: "⚛️",
    name: "React",
    category: "Frontend",
    description: "Hooks, Context, Redux",
    level: 90,
  },
  {
    icon: "⚡",
    name: "Next.js",
    category: "Frontend",
    description: "SSR, SSG, API Routes",
    level: 85,
  },
  {
    icon: "🔷",
    name: "TypeScript",
    category: "Language",
    description: "Type Safety, Interfaces",
    level: 80,
  },
  {
    icon: "🟢",
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript",
    level: 75,
  },
  {
    icon: "🟡",
    name: "JavaScript",
    category: "Language",
    description: "ES6+, Modern JS",
    level: 90,
  },
  {
    icon: "🎨",
    name: "HTML/CSS",
    category: "Frontend",
    description: "Semantic HTML, CSS3",
    level: 95,
  },
  {
    icon: "📝",
    name: "Git",
    category: "Tools",
    description: "Version Control",
    level: 85,
  },
  {
    icon: "🔗",
    name: "REST API",
    category: "Backend",
    description: "API Development",
    level: 80,
  },
  {
    icon: "🍃",
    name: "MongoDB",
    category: "Database",
    description: "NoSQL Database",
    level: 70,
  },
  {
    icon: "🐘",
    name: "PostgreSQL",
    category: "Database",
    description: "SQL Database",
    level: 65,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-light py-12 lg:py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 lg:w-20 lg:h-20 bg-blue-600 rounded-full mb-4 lg:mb-6">
            <Code2 className="text-xl lg:text-3xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
            Yetenekler
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Modern web teknolojilerinde kapsamlı deneyime sahibim. Her projede en güncel araçları kullanarak performanslı ve ölçeklenebilir çözümler geliştiriyorum.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-8 lg:mb-16 px-4 lg:px-0">
          <div className="text-center">
            <div className="text-xl lg:text-3xl font-bold text-blue-600 mb-1 lg:mb-2">1+</div>
            <p className="text-xs lg:text-base text-gray-600 dark:text-gray-400">Yıl Deneyim</p>
          </div>
          <div className="text-center">
            <div className="text-xl lg:text-3xl font-bold text-green-600 mb-1 lg:mb-2">15+</div>
            <p className="text-xs lg:text-base text-gray-600 dark:text-gray-400">Tamamlanan Proje</p>
          </div>
          <div className="text-center">
            <div className="text-xl lg:text-3xl font-bold text-purple-600 mb-1 lg:mb-2">10+</div>
            <p className="text-xs lg:text-base text-gray-600 dark:text-gray-400">Teknoloji</p>
          </div>
          <div className="text-center">
            <div className="text-xl lg:text-3xl font-bold text-pink-600 mb-1 lg:mb-2">100%</div>
            <p className="text-xs lg:text-base text-gray-600 dark:text-gray-400">Memnuniyet</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 px-4 lg:px-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 lg:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
            >
              {/* Skill Header */}
              <div className="flex items-center mb-2 lg:mb-4">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center mr-2 lg:mr-4 shadow-lg">
                  <span className="text-sm lg:text-2xl">{skill.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm lg:text-xl font-bold text-gray-900 dark:text-white mb-0 lg:mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs lg:text-sm font-medium text-blue-600 dark:text-blue-400">
                    {skill.category}
                  </p>
                </div>
              </div>
              
              {/* Skill Description */}
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 