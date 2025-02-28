// src/components/AboutAndSkills.js
import React from 'react';
import '../assets/css/home.css';
import JohnDoeAbout from '../assets/images/john-doe-about.jpg';

// Composant de barre de progression
const ProgressBar = ({ skill, percentage, color }) => {
  return (
    <div className="progress-container mb-3">
      <label>{skill}</label>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

const AboutAndSkills = () => {
  // Définir les pourcentages et les couleurs pour chaque compétence
  const reactSkill = 85;
  const jsSkill = 92;
  const cssSkill = 78;
  const nodeSkill = 80;

  const reactColor = '#61dafb';
  const jsColor = '#f0db4f';
  const cssColor = '#264de4';
  const nodeColor = '#8cc84b';

  return (
    <div className="container py-5">
      <div className="row">
        {/* Section À propos */}
        <div className="col-12 col-md-6">
          <h2>À propos</h2>
          <div className="photos mb-3">
            <img
              src={JohnDoeAbout}
              alt="john doe about"
              style={{ maxWidth: '200px' }}
            />
          </div>
          <p>
            Je suis un développeur passionné par le développement web et les
            nouvelles technologies. J'aime apprendre et améliorer mes compétences
            chaque jour.
          </p>
        </div>

        {/* Section Compétences */}
        <div className="col-12 col-md-6">
          <h3>Mes Compétences</h3>
          <ProgressBar skill="React" percentage={reactSkill} color={reactColor} />
          <ProgressBar skill="JavaScript" percentage={jsSkill} color={jsColor} />
          <ProgressBar skill="CSS" percentage={cssSkill} color={cssColor} />
          <ProgressBar skill="Node.js" percentage={nodeSkill} color={nodeColor} />
        </div>
      </div>
    </div>
  );
};

export default AboutAndSkills;
