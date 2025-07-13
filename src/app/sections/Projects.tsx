import React from "react";

const projects = [
  {
    title: "Kişisel Blog",
    description: "Next.js ve Markdown ile geliştirilen kişisel blog platformu. SEO optimizasyonu ve hızlı yükleme süreleri ile modern web standartlarına uygun.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
    link: "https://github.com/alicankocman/blog",
    image: "/api/placeholder/400/250",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-Ticaret Dashboard",
    description: "React ve Node.js ile geliştirilen admin paneli. Satış analitikleri, stok yönetimi ve kullanıcı yönetimi özellikleri.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    link: "https://github.com/alicankocman/dashboard",
    image: "/api/placeholder/400/250",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Task Management App",
    description: "Vue.js ve Firebase ile geliştirilen görev yönetim uygulaması. Gerçek zamanlı güncellemeler ve takım işbirliği özellikleri.",
    tech: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
    link: "https://github.com/alicankocman/task-app",
    image: "/api/placeholder/400/250",
    color: "from-green-500 to-emerald-500"
  }
];

const Projects = () => (
  <section id="projects" className="w-full">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Projeler
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>
    
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Project Image */}
            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
              <div className="text-6xl text-white/80">💻</div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors group/link"
              >
                Projeyi Görüntüle
                <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 