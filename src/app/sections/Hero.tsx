"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const socialLinks = [
  { 
    href: "https://github.com/alicankocman", 
    label: "GitHub", 
    icon: (
      <svg width="20" height="20" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.29 9.29 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
      </svg>
    )
  },
  { 
    href: "https://linkedin.com/in/alicankocman", 
    label: "LinkedIn", 
    icon: (
      <svg width="20" height="20" fill="currentColor">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
      </svg>
    )
  },
  { 
    href: "mailto:kocmanalican@gmail.com", 
    label: "Email", 
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
];

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    
    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains('dark');
      setIsDark(darkMode);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="section-light relative overflow-hidden">
      {/* Remove custom background - use default section-light background */}
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[60vh] py-6 lg:py-8">
          
          {/* Left Column - Content */}
          <div className="text-left space-y-5 lg:space-y-8">
            {/* Greeting Badge */}
            <div className="inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              <span className="hidden sm:inline">Merhaba! Ben Alican Koçman</span>
              <span className="sm:hidden">Merhaba!</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span 
                  className="text-gray-900 dark:text-white"
                  style={{ color: isDark ? '#ffffff' : '#111827' }}
                >
                  Full Stack
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Modern web teknolojileri ile geleceği inşa ediyorum
              </p>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              React, Next.js, TypeScript ve Web3 teknolojileri ile modern web uygulamaları geliştiriyorum. 
              Blockchain ve smart contract geliştirme konusunda tutkulu bir geliştiriciyim. 
              Kullanıcı odaklı, performanslı ve yenilikçi çözümler üretmeye odaklanıyorum.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 lg:gap-6 py-3 lg:py-6">
              <div className="text-center p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  5+
                </div>
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Yıl Deneyim</p>
              </div>
              <div className="text-center p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Tamamlanan Proje</p>
              </div>
              <div className="text-center p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Memnuniyet</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-4 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                Projelerimi Görüntüle
                <svg className="w-4 h-4 lg:w-5 lg:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-4 py-3 lg:px-8 lg:py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg lg:rounded-xl shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-sm lg:text-base"
              >
                İletişime Geç
                <svg className="w-4 h-4 lg:w-5 lg:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 lg:gap-4 pt-2 lg:pt-4">
              <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">Takip et:</span>
              <div className="flex gap-2 lg:gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-7 h-7 lg:w-10 lg:h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl lg:rounded-3xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl overflow-hidden">
                    <Image 
                      src="/images/profile.jpg"
                      alt="Alican Koçman"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Floating Elements - only in dark mode */}
                <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-sm lg:text-2xl shadow-lg dark:block hidden">
                  ⚡
                </div>
                <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg lg:rounded-xl flex items-center justify-center text-white text-sm lg:text-lg shadow-lg dark:block hidden">
                  🚀
                </div>
              </div>
              
              {/* Tech Stack Badges */}
              <div className="absolute -bottom-4 lg:-bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 lg:gap-2">
                <div className="px-2 py-1 lg:px-4 lg:py-2 bg-white dark:bg-gray-800 rounded-full text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-lg">
                  React
                </div>
                <div className="px-2 py-1 lg:px-4 lg:py-2 bg-white dark:bg-gray-800 rounded-full text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-lg">
                  Next.js
                </div>
                <div className="px-2 py-1 lg:px-4 lg:py-2 bg-white dark:bg-gray-800 rounded-full text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-lg">
                  Web3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 