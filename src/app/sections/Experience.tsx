import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    type: "İş Deneyimi",
    icon: "🌐",
    title: "Junior Web Developer",
    company: "Mersin University",
    period: "Haz 2021 - Eyl 2021",
    description: "Mersin Yenişehir'de 4 ay stajyer olarak çalıştım. Web geliştirme ve programlama temellerini öğrendim.",
  },
  {
    type: "Eğitim",
    icon: "📚",
    title: "Bilgisayar Programcılığı",
    company: "Mersin University",
    period: "2020 - 2022",
    description: "Associate's degree programını 3.40 not ortalaması ile tamamladım. Patika ve Dev C++ topluluklarında aktif rol aldım.",
  },
  {
    type: "Eğitim",
    icon: "🎓",
    title: "Yazılım Uzmanlığı",
    company: "Yıldız Teknik Üniversitesi",
    period: "Eyl 2023 - Tem 2024",
    description: "Semantik Soft Yazılım Uzmanlığı programında uzmanlık eğitimi aldım. İleri seviye yazılım geliştirme teknikleri öğrendim.",
  },
  {
    type: "İş Deneyimi",
    icon: "💻",
    title: "Junior Full-stack Developer",
    company: "Doruksistem AS",
    period: "Oca 2025 - Tem 2025",
    description: "7 ay boyunca junior full-stack developer olarak çalıştım. React, Next.js ve Node.js teknolojileri ile web uygulamaları geliştirdim.",
  },
  {
    type: "İş Deneyimi",
    icon: "💼",
    title: "Full Stack Developer",
    company: "Doruksistem AS",
    period: "Tem 2025 - Günümüz",
    description: "İstanbul'da tam zamanlı Full Stack Developer olarak çalışıyorum. React, Next.js, TypeScript ve Node.js ile modern web uygulamaları geliştiriyorum.",
  },
];

const Experience = () => (
  <section id="experience" className="section-light py-20">
    <div className="container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
          <Briefcase className="mr-3 text-4xl md:text-5xl" />
          Deneyim & Eğitim
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Kariyer yolculuğumda edindiğim deneyimler ve aldığım eğitimler
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
          <p className="text-gray-600 dark:text-gray-400">Yıl Deneyim</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">3</div>
          <p className="text-gray-600 dark:text-gray-400">Eğitim</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
          <p className="text-gray-600 dark:text-gray-400">Şirket</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
          <p className="text-gray-600 dark:text-gray-400">Memnuniyet</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="space-y-12 relative z-10">
          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-xl z-20">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
              
              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="experience-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
                  
                  {/* Header */}
                  <div className="flex items-start mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-2xl text-white">{experience.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Period */}
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {experience.period}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>
                  
                  {/* Type Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                      experience.type === 'İş Deneyimi' 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                    }`}>
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      {experience.type}
                    </span>
                    
                    {/* Decorative Element */}
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 