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
          <p><a href="https://github.com/ticketexpert/314-project">Source</a></p>
          <img src="pics/ticketexpertPic.png" alt="TicketExpert" />
          <h3>The result of 8 weeks of planning, designing, and building a full stack web application with a team of 5</h3><br />
          <h3>This project is built with React, Node.js, Express, and PostgreSQL</h3>
          <h3>DB, backend and frontend are all hosted by myself on my own hardware with proxy through a VPS</h3><br />

          <h3>My role in this project was to build the backend, API routes, testing workflows, and database models</h3><br />
        </div>
        <div className="project-container">
          <h2>Capstone Project - Baselink</h2>
          <p>Source? Probably Closed</p>
          <img src="pics/BaselinkScreen.png" alt="Baselink" />
          <h3>A current Work In Progress fullstack project built during UOW Capstone for our client <a href="https://devika.com" target="_blank">Devika</a></h3><br />
          <h3>This project is built using their serverless "Baseline JS" framework built on top of AWS</h3>
          <h3>My role in this project is as lead-backend developer, building backend services and API routes, utalising DynamoDB, API Gateway, and Cognito</h3><br />
        </div>
      </div>
    );
  }