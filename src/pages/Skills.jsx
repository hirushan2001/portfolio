import React from 'react';
import { FaCode, FaServer, FaTools, FaAndroid } from 'react-icons/fa'; // Import icons
import './Skills.css';

const skillsData = {
  frontend: ['React JS', 'Redux', 'Next JS', 'Angular JS', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Material UI', 'Flutter'],
  backend: ['Node JS', 'Express JS', 'GraphQL', 'Python', 'Flask', 'Django', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  devOps: ['AWS', 'Google Cloud', 'Docker', 'Jenkins', 'Nginx', 'Grafana', 'Kubernetes', 'Prometheus'],
  android: ['Java', 'Kotlin', 'Jetpack Compose', 'XML', 'Android Studio']
};

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1 className="skills-header">Skills</h1>
      <div className="skills-row">
        <div className="skills-section">
          <h2><FaCode className="skills-icon" /> Frontend</h2>
          <div className="skills-list">
            {skillsData.frontend.map((skill, index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
        <div className="skills-section">
          <h2><FaServer className="skills-icon" /> Backend</h2>
          <div className="skills-list">
            {skillsData.backend.map((skill, index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="skills-row">
        <div className="skills-section">
          <h2><FaTools className="skills-icon" /> DevOps</h2>
          <div className="skills-list">
            {skillsData.devOps.map((skill, index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
        <div className="skills-section">
          <h2><FaAndroid className="skills-icon" /> Android</h2>
          <div className="skills-list">
            {skillsData.android.map((skill, index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
