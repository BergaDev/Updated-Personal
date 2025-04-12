export default function ProjectsSection() {
    return (
      <div className="projectsDiv">
        <div className="project-container">
          <h2><a href="https://www.bergadev.com/trainFinder" target="_blank">Sydney Trains Lookup</a></h2><br />
          <h3>Built as part of another project, this site searches for an entered train set number or carriage number passed to it</h3>
          <h3>This project interacts with a DB to return the results</h3>
        </div>
        <div className="project-container">
          <h2><a href="https://www.bergadev.com/TrainTracking" target="_blank">Train Track(ing)</a></h2>
          <p><a href="https://github.com/BergaDev/TrainTracking">Source</a></p>
          <h3>A current W.I.P that allows a user (myself) to keep a log of the specific train sets and carriages that they have ridden in before</h3>
        </div>
      </div>
    );
  }