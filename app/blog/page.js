"use client";
import './styles/globals.css';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

export default function Blog() {
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
          <section className="blog-section">
            <h2>Blog & Photos</h2>
            <div className="blog-content">
              <p>Coming soon...</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
} 