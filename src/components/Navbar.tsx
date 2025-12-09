"use client";
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hakkımda", href: "#about" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "İletişim", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>(navLinks[0].href);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    
    const NAVBAR_HEIGHT = 56;
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return Number.POSITIVE_INFINITY;
        return Math.abs((el as HTMLElement).getBoundingClientRect().top - NAVBAR_HEIGHT);
      });
      const minIndex = offsets.indexOf(Math.min(...offsets));
      if (minIndex !== -1) setActive(navLinks[minIndex].href);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    window.addEventListener("scroll", close);
    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("scroll", close);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
        ${scrolled 
          ? "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg" 
          : "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
        }
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
      style={{
        height: 56,
        backgroundColor: isDark ? '#111827' : '#ffffff',
        borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
      }}
      aria-label="Site navigation"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between h-14">
        {/* Logo / Avatar */}
        <a href="#hero" className="flex items-center gap-2" aria-label="Anasayfa">
          <span className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-base font-black">
            AK
          </span>
          <span 
            className="hidden sm:block text-lg font-black"
            style={{ color: isDark ? '#ffffff' : '#1e293b' }}
          >
            Alican Koçman
          </span>
        </a>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className={`px-4 py-1.5 rounded-full font-semibold text-sm
                ${active === link.href ? "bg-blue-500 text-white" : ""}
              `}
              style={{
                color: active === link.href 
                  ? '#ffffff' 
                  : isDark ? '#f1f5f9' : '#475569'
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border"
            style={{
              backgroundColor: isDark ? '#374151' : '#f8fafc',
              borderColor: isDark ? '#4b5563' : '#e2e8f0'
            }}
            aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span 
              className={`block w-6 h-0.5 rounded ${menuOpen ? "rotate-45 translate-y-1" : ""}`}
              style={{ backgroundColor: isDark ? '#d1d5db' : '#6b7280' }}
            ></span>
            <span 
              className={`block w-6 h-0.5 rounded mt-1 ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: isDark ? '#d1d5db' : '#6b7280' }}
            ></span>
            <span 
              className={`block w-6 h-0.5 rounded mt-1 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              style={{ backgroundColor: isDark ? '#d1d5db' : '#6b7280' }}
            ></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed top-0 left-0 w-full h-full z-40 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
          style={{ backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.3)' }}
          onClick={() => setMenuOpen(false)}
        ></div>
        <nav
          className={`md:hidden fixed top-0 right-0 w-64 h-full shadow-lg border-l z-50 flex flex-col pt-20 gap-2 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{
            backgroundColor: isDark ? '#111827' : '#ffffff',
            borderLeftColor: isDark ? '#374151' : '#e5e7eb'
          }}
          aria-label="Mobil menü"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className={`px-7 py-3 rounded-full font-semibold text-base
                ${active === link.href ? "bg-blue-500 text-white" : ""}
              `}
              style={{
                color: active === link.href 
                  ? '#ffffff' 
                  : isDark ? '#f1f5f9' : '#475569'
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Bottom border */}
      <div 
        className="absolute left-0 right-0 bottom-0 h-0.5"
        style={{ backgroundColor: isDark ? '#374151' : '#e5e7eb' }}
      />
    </nav>
  );
};

export default Navbar; 