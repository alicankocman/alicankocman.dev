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

  useEffect(() => {
    setMounted(true);
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
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? "backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border-b border-white/50 dark:border-gray-700/60 shadow-xl" 
          : "backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border-b border-transparent"
        }
        ${mounted ? "animate-navbar-fade-in" : "opacity-0"}
      `}
      style={{height: 56}}
      aria-label="Site navigation"
    >
      {/* Noise/texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-soft-light bg-[url('data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><rect width=\'40\' height=\'40\' fill=\'%23fff\' fill-opacity=\'0.02\'/><circle cx=\'20\' cy=\'20\' r=\'1.5\' fill=\'%23fff\' fill-opacity=\'0.08\'/></svg>')]" />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between h-14 relative z-10">
        {/* Logo / Avatar */}
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Anasayfa">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 flex items-center justify-center text-white text-base font-black shadow border-2 border-transparent group-hover:border-gradient group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300 select-none relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-blue-400 before:via-purple-400 before:to-pink-400 before:opacity-0 group-hover:before:opacity-60 before:blur before:transition-all before:duration-300">
            <span className="relative z-10">AK</span>
          </span>
          <span className="hidden sm:block text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-tight select-none drop-shadow-sm">
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
              className={`relative px-4 py-1.5 rounded-full font-semibold outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-all duration-200 text-sm
                group
                ${active === link.href ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white shadow-lg" : "text-gray-800 dark:text-gray-100 hover:text-white"}
              `}
              tabIndex={0}
              style={{scrollBehavior: "smooth"}}
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative z-10 group-hover:scale-105 group-hover:drop-shadow-lg transition-transform duration-200">{link.label}</span>
              {/* Animated underline */}
              <span className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-0 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100 transition-all duration-300 ${active === link.href ? "opacity-100 scale-x-100" : ""}`}></span>
              {/* Glow for active */}
              {active === link.href && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-25 blur pointer-events-none animate-navbar-glow"></span>
              )}
              {/* Hover blur */}
              <span className="absolute inset-0 rounded-full bg-white/30 dark:bg-gray-700/20 opacity-0 group-hover:opacity-60 blur-sm transition-all duration-300 pointer-events-none"></span>
            </a>
          ))}
        </div>
        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/70 dark:bg-gray-800/70 shadow border border-white/30 dark:border-gray-700/40 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className={`block w-6 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded mt-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded mt-1 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/40 z-40 transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setMenuOpen(false)}></div>
        <nav
          className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white/95 dark:bg-gray-900/95 shadow-2xl border-l border-white/30 dark:border-gray-700/40 z-50 flex flex-col pt-20 gap-2 transition-transform duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          aria-label="Mobil menü"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              className={`relative px-7 py-3 rounded-full font-semibold outline-none focus-visible:ring-2 focus-visible:ring-blue-300 transition-all duration-200 text-base
                group
                ${active === link.href ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white shadow-lg" : "text-gray-800 dark:text-gray-100 hover:text-white"}
              `}
              tabIndex={0}
              style={{scrollBehavior: "smooth"}}
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative z-10 group-hover:scale-105 group-hover:drop-shadow-lg transition-transform duration-200">{link.label}</span>
              <span className={`absolute left-8 right-8 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-0 scale-x-0 group-hover:opacity-90 group-hover:scale-x-100 transition-all duration-300 ${active === link.href ? "opacity-100 scale-x-100" : ""}`}></span>
              {active === link.href && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-25 blur pointer-events-none animate-navbar-glow"></span>
              )}
              <span className="absolute inset-0 rounded-full bg-white/30 dark:bg-gray-700/20 opacity-0 group-hover:opacity-60 blur-sm transition-all duration-300 pointer-events-none"></span>
            </a>
          ))}
        </nav>
      </div>
      {/* Bottom gradient line */}
      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-60" />
    </nav>
  );
};

// Animations
// Add to your global CSS (e.g. globals.css):
// .animate-navbar-fade-in { animation: navbarFadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both; }
// @keyframes navbarFadeIn { from { opacity: 0; transform: translateY(-24px); } to { opacity: 1; transform: none; } }
// .animate-navbar-glow { animation: navbarGlow 1.2s infinite alternate; }
// @keyframes navbarGlow { from { opacity: 0.25; } to { opacity: 0.45; } }

export default Navbar; 