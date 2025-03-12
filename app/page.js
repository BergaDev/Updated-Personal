"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const fonts = [
    'doto', 
    'send', 
    'dynaPuff',
    'Swash',
    'handDrawn',
    'unicase',
    'meow'
  ];

  //Full to banner
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent nav-links from being hidden when scrolling on desktop
  useEffect(() => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  }, [scrolled]);

  //Name font trans
  useEffect(() => {
    if (scrolled) return;

    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [scrolled]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-button") && !event.target.closest(".nav-links")) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  //Contents of page go under here
  return (
    <div className="container">
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
          <a href="mailto:matthew@bergamini.au">Email</a>
        </nav>
      </header>

      <main className="content">
        <section className="intro">
          <br></br><br></br>
          <h2>Have a look around!</h2>
          <p>Scroll down to explore some of my projects</p>
        </section>
        <section className="projects">
        <div className="projects-experiences-container">
          <div className="projectsDiv">
            <div className="project-container">
              <h2><a href="https://www.bergadev.com/trainFinder" target="_blank">Sydney Trains Lookup</a></h2><br></br>
              <h3>Built as part of another project, this site searches for an entered train set number or carriage number passed to it</h3>
              <h3>This project interacts with a DB to return the results</h3>
            </div>

            <div className="project-container">
              <h2><a href="https://www.bergadev.com/TrainTracking" target="_blank">Train Track(ing) - Personal Ride Tracking</a></h2>
              <p><a href="https://github.com/BergaDev/TrainTracking">Source</a></p>
              <h3>A current W.I.P that allows a user (myself) to keep a log of the specific train sets and carriages that they have ridden in before</h3>
            </div>
          </div>

          <div className="experiences">

            <div className="other-container">
              <h2>Diploma of Information Technology</h2>
              <h3>UOW - 2023-2024</h3><br></br>
              <h2>Bachelor of Information Technology</h2>
              <h3>UOW - 2024-Present</h3>
            </div>

          <div className="other-container">
          <h2>Used Technologies</h2>
              <p>Java</p>
              <p>C++</p>
              <p>HTML/CSS</p>
              <p>JS</p>
              <p>NodeJS/NextJS</p>
          </div>
          </div>
        </div>
        </section>
      </main>

      <style jsx global>{`
        @font-face {
          font-family: 'doto';
          src: url('/fonts/Doto-VariableFont_ROND,wght.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'send';
          src: url('/fonts/SendFlowers-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'dynaPuff';
          src: url('/fonts/DynaPuff-VariableFont_wdth,wght.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'Swash';
          src: url('/fonts/DeliusSwashCaps-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'handDrawn';
          src: url('/fonts/DeliciousHandrawn-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'unicase';
          src: url('/fonts/DeliusUnicase-Bold.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'meow';
          src: url('/fonts/MeowScript-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'gowun';
          src: url('/fonts/GowunDodum-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'pixer';
          src: url('/fonts/Pixer-Regular.woff') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .project-container a:hover {
          color: orange;
        }
        
      `}</style>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          background: #2D9DFF;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          transition: all 0.3s ease;
          color: yellow;
          background: #2D9DFF;
        }

        .header.scrolled {
          height: 50px;
          background: #2D9DFF;
          justify-content: flex-start;
          padding-right: 20px;
          padding-left: 20px;
        }

        .menu-button {
          display: none;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: yellow;
          position: absolute;
          top: 10px;
          right: 20px;
          z-index: 1100; 
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999; 
        }

        @media (max-width: 768px) {
          .menu-button {
            display: block;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            position: fixed; 
            top: 50px;
            right: 10px;
            width: 85vw; /* Increased width */
            max-width: 350px;
            background: rgba(45, 157, 255, 0.95);
            padding: 25px;
            border-radius: 10px;
            z-index: 1000; 
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links a {
            color: yellow;
            text-decoration: none;
            padding: 18px; 
            font-size: 1.4rem;
            display: block;
            text-align: center; 
          }
        }

        @media (min-width: 769px) {
          .nav-links {
            display: flex !important;
            gap: 15px;
            position: absolute;
            top: 10px;
            right: 20px;
          }
        }

        .nav-links {
          display: none;
          position: absolute;
          top: 10px;
          right: 20px;
        }


        .nav-links a {
          color: yellow;
          text-decoration: none;
          font-size: 1rem;
          font-family: ${fonts[fontIndex]};
        }

        .nav-links a:hover {
          text-decoration: underline;
        }

        h2 {
        font-family: pixer;
        }

        .name {
          text-align: center;
          font-size: 4rem;
          transition: font-size 0.3s ease, transform 0.3s ease;
        }

        .header.scrolled .name {
          font-size: 1.5rem;
        }

        .content {
          margin-top: 10vh;
          padding: 20px;
        }

        .intro {
          text-align: center;
          margin-bottom: 50px;
        }

        .projects {
          margin-top: 50px;
          font-family: gowun;
        }

        .project-container {
         background-color: rgba(77, 145, 247, 0.34);
         border-radius: 15px;
         padding: 20px;
         margin-bottom: 20px;
        }

        .other-container {
         background-color: rgba(77, 145, 247, 0.34);
         border-radius: 15px;
         padding: 20px;
         margin-bottom: 20px;
        }

        table {
        border-spacing: 50px}

        .projects-experiences-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }
        
        .projectsDiv, .experiences {
          width: 50%;
        }

        .experiences {
          width: 50%;
        }

        .projectsDiv, .experiences {
          width: 90%;
        }

        h2 {
        color: yellow;
        font-size: 1.5rem;
        }

        .project-container {
            padding: 15px;
          }

        @media (max-width: 768px) {
        .projects-experiences-container {
          flex-direction: column;
          align-items: center;
        }

      `}</style>
    </div>
  );
}
