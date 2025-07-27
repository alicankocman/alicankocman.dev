import React from "react";
import WaveSeparator from '../../components/WaveSeparator';

const experiences = [
  {
    title: "Junior Web Developer",
    company: "Mersin University",
    period: "Haz 2021 - Eyl 2021",
    description: "Mersin Yenişehir'de 4 ay stajyer olarak çalıştım. Web geliştirme ve programlama temellerini öğrendim.",
    type: "work",
    icon: "🌐",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Bilgisayar Programcılığı",
    company: "Mersin University",
    period: "2020 - 2022",
    description: "Associate's degree programını 3.40 not ortalaması ile tamamladım. Patika ve Dev C++ topluluklarında aktif rol aldım.",
    type: "education",
    icon: "📚",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Yazılım Uzmanlığı",
    company: "Yıldız Teknik Üniversitesi",
    period: "Eyl 2023 - Tem 2024",
    description: "Semantik Soft Yazılım Uzmanlığı programında uzmanlık eğitimi aldım. İleri seviye yazılım geliştirme teknikleri öğrendim.",
    type: "education",
    icon: "🎓",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Junior Full-stack Developer",
    company: "Doruksistem AS",
    period: "Oca 2025 - Tem 2025",
    description: "7 ay boyunca junior full-stack developer olarak çalıştım. Web teknolojileri ve veritabanı yönetimi konularında deneyim kazandım.",
    type: "work",
    icon: "💻",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Full-stack Developer",
    company: "Doruksistem AS",
    period: "Tem 2025 - Günümüz",
    description: "Kadıköy, İstanbul'da tam zamanlı full-stack geliştirici olarak çalışıyorum. Modern web teknolojileri ile kapsamlı uygulamalar geliştiriyorum.",
    type: "work",
    icon: "💼",
    color: "from-blue-500 to-cyan-500"
  }
];

const Experience = () => (
  <section id="experience" className="w-full relative overflow-hidden min-h-screen bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
    {/* Optimized Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 animate-gradient opacity-85"></div>
    <div className="relative z-10 flex items-center min-h-screen py-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 dark:text-gray-200 mb-6">
            Deneyim & Eğitim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
            
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-white dark:bg-gray-800 rounded-full border-3 md:border-4 border-blue-500 shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-6 md:pr-8' : 'md:ml-auto md:pl-6 md:pl-8'}`}>
                    <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/10 dark:bg-gray-800/30">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-lg`}>
                            <span className="text-lg md:text-2xl">{exp.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-lg md:text-2xl font-bold text-gray-100 dark:text-gray-200">
                              {exp.title}
                            </h3>
                            <p className="text-base md:text-lg text-blue-200 dark:text-blue-400 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-xs md:text-sm text-gray-200 dark:text-gray-400 mb-3 md:mb-4 font-medium">
                          {exp.period}
                        </p>
                        
                        <p className="text-sm md:text-base text-gray-100 dark:text-gray-300 leading-relaxed mb-3 md:mb-4">
                          {exp.description}
                        </p>
                        
                        <span className={`inline-block px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold rounded-full ${
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
      </div>
    </div>
    <WaveSeparator flip />
  </section>
);

export default Experience; 