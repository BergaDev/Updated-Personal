"use client";
import './styles/globals.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperiencesSection from './components/ExperiencesSection';
import ScrollArrow from './components/ScrollArrow';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const fonts = ['doto', 'send', 'dynaPuff', 'Swash', 'handDrawn', 'unicase', 'meow'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) setMenuOpen(false);
  }, [scrolled]);

  useEffect(() => {
    if (scrolled) return;
    const interval = setInterval(() => {
      setFontIndex(prev => (prev + 1) % fonts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [scrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-button") && !event.target.closest(".nav-links")) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <div className="container">
        <Header 
          fonts={fonts} 
          fontIndex={fontIndex} 
          scrolled={scrolled} 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <main className="content">
          {/* inserted blank space so that animation would't hide the immediate content block */}
          <div style={{ height: '50px' }}></div>
          <IntroSection />
          <section className="projects">
            <div className="projects-experiences-container">
              <ProjectsSection />
              <ExperiencesSection />
            </div>
          </section>
        </main>
        <ScrollArrow />
      </div>
    </>
  );
}