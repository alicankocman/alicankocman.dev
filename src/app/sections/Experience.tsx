import React from "react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ABC Teknoloji",
    period: "2022 - Günümüz",
    description: "React ve Next.js ile modern web uygulamaları geliştiriyorum. Kullanıcı deneyimi odaklı arayüzler tasarlıyorum.",
    type: "work",
    icon: "💼",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Junior Frontend Developer",
    company: "XYZ Yazılım",
    period: "2021 - 2022",
    description: "Vue.js ve JavaScript ile e-ticaret platformları geliştirdim. Responsive tasarım ve performans optimizasyonu konularında deneyim kazandım.",
    type: "work",
    icon: "💻",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Bilgisayar Mühendisliği",
    company: "İstanbul Üniversitesi",
    period: "2017 - 2021",
    description: "Yazılım geliştirme, veri yapıları ve algoritma analizi konularında kapsamlı eğitim aldım.",
    type: "education",
    icon: "🎓",
    color: "from-green-500 to-emerald-500"
  }
];

const Experience = () => (
  <section id="experience" className="w-full">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Deneyim & Eğitim
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>
    
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 shadow-lg z-10"></div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                        <span className="text-2xl">{exp.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                      {exp.period}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                      exp.type === 'work' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    }`}>
                      {exp.type === 'work' ? 'İş Deneyimi' : 'Eğitim'}
                    </span>
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