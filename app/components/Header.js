"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

export default function Header({ fonts, fontIndex, scrolled, setMenuOpen, menuOpen }) {
  const pathname = usePathname();
  const nameRef = useRef(null);
  
  useEffect(() => {
    if (nameRef.current) {
      const name = nameRef.current;
      const chars = name.textContent.split('');
      name.textContent = '';
      
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        // Margin for name spaec
        if (char === ' ') {
          span.style.marginRight = '0.5em';
        }
        name.appendChild(span);
        
        // Random animation for each character
        gsap.to(span, {
          scale: () => 0.8 + Math.random() * 0.4,
          rotation: () => -10 + Math.random() * 20,
          y: () => -5 + Math.random() * 10,
          duration: 0.5,
          delay: i * 0.05,
          ease: "elastic.out(1, 0.3)",
          repeat: -1,
          yoyo: true,
          repeatDelay: 2 + Math.random() * 3
        });
      });
    }
  }, [fontIndex]);

  // Scramble ani
  useEffect(() => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        duration: 1,
        scrambleText: {
          text: "Matthew Bergamini",
          chars: "!@#$%^&*()1836cVxMsLa",
          revealDelay: 0.5,
          speed: 0.3,
          tweenLength: false
        }
      });
    }
  }, [fontIndex]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="name" ref={nameRef} style={{ fontFamily: fonts[fontIndex] }}>Matthew Bergamini</h1>
      {menuOpen && <div className="menu-overlay"></div>}
      <button className="menu-button" onClick={(e) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
      }}>
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="https://github.com/BergaDev" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/matthew-bergamini" target="_blank">Linked-In</a>
        <a href="https://www.instagram.com/could_be_a_berga/" target="_blank">Instagram</a>
        <a href="https://www.discordapp.com/users/579529508194091019" target="_blank">Discord</a>
        <a href="mailto:contact@bergamini.au">Email</a>
      </nav>
    </header>
  );
}