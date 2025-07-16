"use client";

import React, { useState } from "react";
import WaveSeparator from '../../components/WaveSeparator';

const skills = [
  { 
    name: "Next.js", 
    icon: "⚡",
    color: "from-blue-500 to-cyan-500",
    description: "SSR, SSG, API Routes",
    category: "Frontend",
    backInfo: {
      icon: "🚀",
      title: "Performans",
      description: "SEO optimizasyonu ve hızlı sayfa yüklemeleri için SSR/SSG kullanıyorum."
    }
  },
  { 
    name: "React", 
    icon: "⚛️",
    color: "from-blue-600 to-blue-700",
    description: "Hooks, Context, Redux",
    category: "Frontend",
    backInfo: {
      icon: "⚡",
      title: "Modern Hooks",
      description: "Custom hooks ile state yönetimi ve component logic'ini optimize ediyorum."
    }
  },
  { 
    name: "TypeScript", 
    icon: "🔷",
    color: "from-blue-700 to-blue-800",
    description: "Type Safety, Interfaces",
    category: "Language",
    backInfo: {
      icon: "🛡️",
      title: "Type Safety",
      description: "Runtime hatalarını compile time'da yakalayarak daha güvenli kod yazıyorum."
    }
  },
  { 
    name: "Supabase", 
    icon: "🟢",
    color: "from-green-500 to-emerald-500",
    description: "Backend as a Service",
    category: "Backend",
    backInfo: {
      icon: "🔥",
      title: "Real-time DB",
      description: "PostgreSQL tabanlı real-time veritabanı ve authentication çözümleri."
    }
  },
  { 
    name: "Tailwind CSS", 
    icon: "🎨",
    color: "from-cyan-500 to-blue-500",
    description: "Utility-First CSS",
    category: "Styling",
    backInfo: {
      icon: "⚡",
      title: "Hızlı UI",
      description: "Utility-first yaklaşımı ile hızlı ve responsive tasarımlar geliştiriyorum."
    }
  },
  { 
    name: "Vue.js", 
    icon: "💚",
    color: "from-green-400 to-green-600",
    description: "Progressive Framework",
    category: "Frontend",
    backInfo: {
      icon: "🔄",
      title: "Reactive",
      description: "Reactive data binding ve component-based architecture ile modern uygulamalar."
    }
  },
  { 
    name: "Firebase", 
    icon: "🔥",
    color: "from-orange-500 to-red-500",
    description: "Cloud Services",
    category: "Backend",
    backInfo: {
      icon: "☁️",
      title: "Cloud Native",
      description: "Authentication, hosting ve real-time database ile serverless çözümler."
    }
  },
  { 
    name: "MongoDB", 
    icon: "🍃",
    color: "from-green-600 to-green-800",
    description: "NoSQL Database",
    category: "Database",
    backInfo: {
      icon: "📊",
      title: "Flexible Schema",
      description: "Document-based veri yapısı ile esnek ve ölçeklenebilir veritabanı çözümleri."
    }
  },
  { 
    name: "Jest", 
    icon: "🧪",
    color: "from-red-500 to-pink-500",
    description: "Testing & Mocking",
    category: "Testing",
    backInfo: {
      icon: "🔍",
      title: "Test Coverage",
      description: "Unit ve integration testleri ile kod kalitesini garanti ediyorum."
    }
  },
  { 
    name: "Node.js", 
    icon: "🟢",
    color: "from-green-500 to-emerald-500",
    description: "Backend Development",
    category: "Backend",
    backInfo: {
      icon: "⚙️",
      title: "Full Stack",
      description: "REST API'ler ve server-side logic ile tam kapsamlı çözümler sunuyorum."
    }
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="w-full relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient opacity-90"></div>
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 mb-8">
            Yetenekler
          </h2>
          <div className="w-48 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`group relative perspective-1000 transform-gpu transition-all duration-700 ${
                  hoveredSkill === skill.name ? 'scale-105 z-20' : 'scale-100'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* 3D Card Container */}
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-12">
                  {/* Front of card */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl shadow-2xl p-8 flex flex-col justify-between transform-gpu transition-all duration-500 group-hover:shadow-3xl`}>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="text-6xl mb-6 transform-gpu transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        {skill.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-black text-white mb-3 group-hover:text-shadow-lg">
                        {skill.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 text-lg font-medium">
                        {skill.description}
                      </p>
                    </div>
                    
                    {/* Category badge */}
                    <div className="relative z-10">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm border border-white/30">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Back of card - appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col justify-center transform-gpu rotate-y-180 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center transform-gpu rotate-y-180">
                      <div className="text-4xl mb-4">{skill.backInfo.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{skill.backInfo.title}</h4>
                      <p className="text-gray-300 text-sm">
                        {skill.backInfo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Interactive Summary */}
          <div className="relative">
            <div className="bg-gradient-to-r from-white/20 to-white/10 dark:from-gray-800/40 dark:to-gray-800/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-gray-700/50 shadow-2xl">
              <div className="text-center">
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                  Teknoloji Yığınım
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Modern web teknolojilerinde kapsamlı deneyime sahibim. Her projede en güncel araçları kullanarak 
                  performanslı ve ölçeklenebilir çözümler geliştiriyorum. Sürekli öğrenmeye odaklanıyorum ve 
                  yeni teknolojileri hızlıca adapte edebiliyorum.
                </p>
                
                {/* Interactive stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                  <div className="text-center group">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      10+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">Teknoloji</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      100%
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">Bağlılık</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      ∞
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">Öğrenme</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                      🚀
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">Full Stack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveSeparator flip />
    </section>
  );
};

export default Skills; 