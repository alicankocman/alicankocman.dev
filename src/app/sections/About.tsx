import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "JavaScript", "HTML/CSS", "Git", "REST API", "MongoDB", "PostgreSQL"
];

const About = () => (
  <section id="about" className="section-gray">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Professional Content */}
        <div>
          {/* Professional Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <User className="text-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hakkımda
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          {/* Professional Description */}
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Merhaba! Ben Alican Koçman, tutkulu bir Full Stack Developer'ım. Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştirmeyi seviyorum.
            </p>
            <p>
              Doruksistem AS'de Full Stack Developer olarak çalışıyorum. React, Next.js, TypeScript ve Node.js gibi modern teknolojilerle hem frontend hem backend geliştirme yapıyorum.
            </p>
            <p>
              Sürekli öğrenmeye odaklanıyorum ve yeni teknolojileri hızlıca adapte edebiliyorum. Takım çalışmasına değer veriyor ve her projede en yüksek kaliteyi hedefliyorum.
            </p>
          </div>
          
          {/* Professional Skills */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Teknolojiler
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Professional Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/profile.jpg"
                  alt="Alican Koçman"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Professional Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Yıl Deneyim</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proje</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 