import React, { useState } from 'react';
import './ProjectsSection.css';

export default function ProjectsSection() {
    const [showNewImageTracking, setShowNewImageTracking] = useState(true);
    const [showNewImageTrainSearch, setShowNewImageTrainSearch] = useState(true);

    return (
      <div className="projectsDiv">
        <div className="project-container">
          <h2><a href="https://www.bergadev.com/TrainTracking" target="_blank">Train Track(ing)</a></h2>
          <p><a href="https://github.com/BergaDev/TrainTracking">Source</a></p>
          <div className="project-container">
            <img src={showNewImageTracking ? "pics/UpdatedTrainTracking.png" : "pics/OldTrainTracking.png"} alt="Train Tracking" />
            <div className="toggle-buttons">
              <button 
                className={showNewImageTracking ? 'active' : ''} 
                onClick={() => setShowNewImageTracking(true)}
              >
                New
              </button>
              <button 
                className={!showNewImageTracking ? 'active' : ''} 
                onClick={() => setShowNewImageTracking(false)}
              >
                Old
              </button>
            </div>
          </div>
          <h3>A current W.I.P that allows a user (myself) to keep a log of the specific train sets and carriages that they have ridden in before</h3>
        </div>
        <div className="project-container">
          <h2><a href="https://www.new.bergadev.com/train-searchr" target="_blank">Sydney Trains Lookup</a></h2><br />
          <p><a href="https://github.com/BergaDev/TrainTracking">Source - Now built into Train Track(ing)</a></p>
          <div className="project-container">
            <img src={showNewImageTrainSearch ? "pics/UpdatedSearch.png" : "pics/OldSearch.png"} alt="Train Finder" />
            <div className="toggle-buttons">
              <button 
                className={showNewImageTrainSearch ? 'active' : ''} 
                onClick={() => setShowNewImageTrainSearch(true)}
              >
                New
              </button>
              <button 
                className={!showNewImageTrainSearch ? 'active' : ''} 
                onClick={() => setShowNewImageTrainSearch(false)}
              >
                Old
              </button>
            </div>
          </div>
          <h3>Origianlly built for me to prototype TrainTrack(ing), this site searches for an entered train set number or carriage number passed to it</h3>
          <h3>This project interacts with a DB to return the results</h3>
        </div>
        <div className="project-container">
          <h2><a href="https://www.ticketexpert.me" target="_blank">Group Project - TicketExpert</a></h2>
          <p>Source coming soon</p>
          <img src="pics/ticketexpertPic.png" alt="TicketExpert" />
          <h3>The result of 8 weeks of planning, designing, and building a full stack web application with a team of 5</h3><br />
          <h3>This project is built with React, Node.js, Express, and PostgreSQL</h3>
          <h3>DB, backend and frontend are all self hosted on own hardware with proxy through a VPS</h3><br />

          <h3>Me - Building backend, API routes, and database models</h3><br />
        </div>
      </div>
    );
  }