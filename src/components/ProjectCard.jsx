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
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">GitHub</a>
          )}
          {project.websiteLink && (
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="project-link website-link">Website</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

