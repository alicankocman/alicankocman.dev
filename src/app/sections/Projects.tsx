import React from "react";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Typescript Shopping Project",
    description: "TypeScript ile geliştirilmiş modern e-ticaret projesi. Tip güvenliği ve modern web teknolojileri kullanılarak oluşturuldu.",
    tech: ["TypeScript", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/alicankocman/Typescript-ShoppingProject-",
    image: "/api/placeholder/400/250",
    category: "Frontend"
  },
  {
    title: "FakeStore API Project",
    description: "FakeStore API kullanarak geliştirilmiş e-ticaret uygulaması. Modern JavaScript ve API entegrasyonu ile oluşturuldu.",
    tech: ["JavaScript", "HTML", "CSS", "API"],
    link: "https://github.com/alicankocman/FakeStoreApiProject",
    image: "/api/placeholder/400/250",
    category: "Frontend"
  },
  {
    title: "Cyber Project",
    description: "Modern web teknolojileri ile geliştirilmiş siber güvenlik temalı proje. Responsive tasarım ve interaktif özellikler içeriyor.",
    tech: ["JavaScript", "HTML", "CSS", "Responsive"],
    link: "https://github.com/alicankocman/Cyber",
    image: "/api/placeholder/400/250",
    category: "Frontend"
  },
  {
    title: "Shopping Page",
    description: "Responsive e-ticaret sayfası. Modern HTML ve CSS kullanılarak geliştirilmiş, kullanıcı dostu arayüz tasarımı.",
    tech: ["HTML", "CSS", "Responsive", "UI/UX"],
    link: "https://github.com/alicankocman/shopping-page",
    image: "/api/placeholder/400/250",
    category: "Frontend"
  },
  {
    title: "PATIKA Projects",
    description: "Patika.dev platformunda geliştirdiğim çeşitli projeler. HTML, CSS ve JavaScript ile oluşturulmuş modern web uygulamaları.",
    tech: ["HTML", "CSS", "JavaScript", "Patika"],
    link: "https://github.com/alicankocman/PATIKA",
    image: "/api/placeholder/400/250",
    category: "Learning"
  },
  {
    title: "Personal Portfolio",
    description: "Kişisel portfolio websitesi. Modern CSS teknikleri ve responsive tasarım ile geliştirilmiş profesyonel web sitesi.",
    tech: ["CSS", "HTML", "Responsive", "Portfolio"],
    link: "https://github.com/alicankocman/alicankocman.MyPage",
    image: "/api/placeholder/400/250",
    category: "Portfolio"
  }
];

const Projects = () => (
  <section id="projects" className="section-gray">
    <div className="container">
      {/* Professional Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
          <FolderOpen className="text-3xl" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Projeler
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Geliştirdiğim öne çıkan projeler ve çözümler
        </p>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
      </div>
      
      {/* Professional Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
          >
            {/* Project Image */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">💻</div>
                <p className="text-white font-semibold">{project.category}</p>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Project Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Kullanılan Teknolojiler
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Action */}
              <div className="flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-sm"
                >
                  Projeyi Görüntüle
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                {/* Project Category Badge */}
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Professional CTA */}
      <div className="text-center mt-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Daha Fazla Proje
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            GitHub profilimde daha fazla proje ve açık kaynak katkılarımı inceleyebilirsiniz.
          </p>
          <a
            href="https://github.com/alicankocman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.29 9.29 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
            </svg>
            GitHub'da Görüntüle
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 