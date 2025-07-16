"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Update document class with smooth transition
    document.documentElement.style.transition = 'all 0.5s ease-in-out';
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Remove transition after animation
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 500);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    
    // Reset animation state
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 shadow border border-white/30 dark:border-gray-700/40 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-300 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className={`relative w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 shadow-lg border border-white/30 dark:border-gray-700/40 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-500 hover:scale-110 hover:shadow-xl group ${
          isAnimating ? 'animate-pulse' : ''
        }`}
        aria-label={theme === 'light' ? 'Dark mode\'a geç' : 'Light mode\'a geç'}
      >
        {/* Enhanced background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
          <div className="w-full h-full rounded-full bg-white/70 dark:bg-gray-800/70" />
        </div>
        
        {/* Icon container */}
        <div className="relative z-10">
          {/* Sun icon with enhanced styling */}
          <Sun 
            className={`w-5 h-5 text-yellow-500 drop-shadow-lg transition-all duration-700 ${
              theme === 'light' 
                ? 'opacity-100 rotate-0 scale-100 filter drop-shadow-md' 
                : 'opacity-0 rotate-90 scale-75'
            }`} 
          />
          
          {/* Moon icon with enhanced styling */}
          <Moon 
            className={`absolute inset-0 w-5 h-5 text-blue-400 drop-shadow-lg transition-all duration-700 ${
              theme === 'dark' 
                ? 'opacity-100 rotate-0 scale-100 filter drop-shadow-md' 
                : 'opacity-0 -rotate-90 scale-75'
            }`} 
          />
        </div>
        
        {/* Enhanced ripple effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 opacity-0 group-active:opacity-100 group-active:scale-150 transition-all duration-300 pointer-events-none blur-sm" />
        
        {/* Sparkle effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
          <Sparkles className="absolute -bottom-1 -left-1 w-2 h-2 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
      </div>
    </div>
  );
};

export default ThemeToggle; 