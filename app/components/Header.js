"use client";
import { useState, useEffect } from 'react';

export default function Header({ fonts, fontIndex, scrolled, setMenuOpen, menuOpen }) {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="name" style={{ fontFamily: fonts[fontIndex] }}>Matthew Bergamini</h1>
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