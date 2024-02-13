import React from 'react';


function AboutPage() {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-description">This project is about...</p>
      <div className="team-container">
        <p className="team-label">Team members:</p>
        <ul className="team-list">
          <li>
            <span className="team-member-label">Team Member 1: Dilan GUTEKUNST - GitHub:</span>
            <a href="https://github.com/karkelo1" className="github-link">karkelo1</a>
          </li>
          <li>
            <span className="team-member-label">Team Member 2: João DIAS
 - GitHub:</span>
            <a href="https://github.com/jvfd1983" className="github-link">jvfd1983</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;

