"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    
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
    
    // Check local storage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      if (systemTheme === 'dark') {
        applyTheme('dark');
      }
    }
    
    return () => observer.disconnect();
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('Theme applied:', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('Toggling theme from', theme, 'to', newTheme);
    
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return (
      <div 
        className="w-10 h-10 rounded-lg border flex items-center justify-center"
        style={{
          backgroundColor: isDark ? '#374151' : '#f8fafc',
          borderColor: isDark ? '#4b5563' : '#e2e8f0'
        }}
      >
        <div 
          className="w-5 h-5 rounded"
          style={{ backgroundColor: isDark ? '#9ca3af' : '#d1d5db' }}
        />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg border flex items-center justify-center"
      style={{
        backgroundColor: isDark ? '#374151' : '#f8fafc',
        borderColor: isDark ? '#4b5563' : '#e2e8f0'
      }}
      aria-label={theme === 'light' ? 'Dark mode\'a geç' : 'Light mode\'a geç'}
      title={theme === 'light' ? 'Dark mode\'a geç' : 'Light mode\'a geç'}
    >
      {theme === 'light' ? (
        <Moon 
          className="w-5 h-5" 
          style={{ color: isDark ? '#d1d5db' : '#6b7280' }}
        />
      ) : (
        <Sun 
          className="w-5 h-5" 
          style={{ color: '#fbbf24' }}
        />
      )}
    </button>
  );
};

export default ThemeToggle; 