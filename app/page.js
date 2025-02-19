"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);

  const fonts = [
    'Arial, sans-serif',
    'Georgia, serif',
    'Courier New, monospace',
    'Tahoma, sans-serif',
    'Verdana, sans-serif'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) return;

    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [scrolled]);

  //Contents of page go under here
  return (
    <div className="container">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="name" style={{ fontFamily: fonts[fontIndex] }}>Matthew Bergamini</h1>
      </header>

      <main className="content">
        <section className="intro">
          <h2>Have a look around!</h2>
          <p>Scroll down to explore some of my projects</p>
        </section>
        <section className="projects">
        <div className="projects-experiences-container">
          <div className="projectsDiv">
            <div className="project-container">
              <h2><a href="https://www.bergadev.com/trainFinder" target="_blank">Sydney Trains Lookup</a></h2>
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
            <h2>Diploma of Information Technology</h2>
            <h3>UOW - 2023-2024</h3><br></br>
            <h2>Bachelor of Information Technology</h2>
            <h3>UOW - 2024-Present</h3><br></br><br></br>

            <h1>Known Technologies</h1>
          </div>
        </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          background-color: #2D9DFF;
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
          background-color: #2D9DFF;
          color: yellow;
        }

        .header.scrolled {
          height: 50px;
          background: #2D9DFF;
          justify-content: flex-start;
          padding-right: 20px;
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
        }

        .project-container {
         background-color: rgba(200, 220, 255, 0.8);
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

        .projectsDiv {
          width: 50%;
        }

        .experiences {
          width: 50%;
        }

        h2 {
        color: yellow;
        }

      `}</style>
    </div>
  );
}
