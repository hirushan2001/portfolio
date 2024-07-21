import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card animate__animated animate__fadeInUp">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-dates">{project.dates}</p>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
