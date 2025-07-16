"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

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
    
    // Update document class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 shadow border border-white/30 dark:border-gray-700/40 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-300 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 shadow border border-white/30 dark:border-gray-700/40 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
      aria-label={theme === 'light' ? 'Dark mode\'a geç' : 'Light mode\'a geç'}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className="relative z-10">
        {/* Sun icon */}
        <Sun 
          className={`w-5 h-5 text-yellow-500 transition-all duration-500 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`} 
        />
        
        {/* Moon icon */}
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-500 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`} 
        />
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-active:opacity-100 group-active:scale-150 transition-all duration-300 pointer-events-none" />
    </button>
  );
};

export default ThemeToggle; 