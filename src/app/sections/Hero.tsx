import React from "react";

const socialLinks = [
  { 
    href: "https://github.com/alicankocman", 
    label: "GitHub", 
    icon: (
      <svg width="28" height="28" fill="currentColor" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.29 9.29 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
      </svg>
    )
  },
  { 
    href: "https://linkedin.com/in/alicankocman", 
    label: "LinkedIn", 
    icon: (
      <svg width="28" height="28" fill="currentColor" className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
      </svg>
    )
  },
  { 
    href: "https://twitter.com/alicankocman", 
    label: "Twitter", 
    icon: (
      <svg width="28" height="28" fill="currentColor" className="text-blue-500 hover:text-blue-600 transition-colors">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    )
  },
];

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
    {/* Optimized Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 animate-gradient opacity-85"></div>
    
    {/* Reduced Floating Elements for better performance */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '6s'}}></div>
    </div>
    
    {/* Main Content with optimized animations */}
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div className="animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight">
          Alican Koçman
        </h1>
        
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white/90 mb-4">
            Frontend Developer
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Modern web uygulamaları geliştiriyorum. Kullanıcı odaklı, performanslı ve ölçeklenebilir arayüzler tasarlamayı seviyorum.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Projelerimi Görüntüle
          </button>
          <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
            İletişime Geç
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 md:gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
        <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default Hero; 