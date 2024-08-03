import React from 'react';
import { motion } from 'framer-motion';
import './Projectpopup.css';
import { IoClose } from 'react-icons/io5';
import { FaGithub, FaGlobe } from 'react-icons/fa';  // Import GitHub and website icons

const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <motion.div
      className="project-popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-popup-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="popup-title">{project.title}</h2>
        <img src={project.image} alt={project.title} className="popup-image" />
        
        <div className="popup-details">
          <h3>Project Overview</h3>
          <p>{project.description}</p>
          
          <h3>Technologies Used</h3>
          <div className="popup-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="popup-tag">{tag}</span>
            ))}
          </div>
          
          {project.features && (
            <>
              <h3>Key Features</h3>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          
          {project.challenges && (
            <>
              <h3>Challenges & Solutions</h3>
              <p>{project.challenges}</p>
            </>
          )}
          
          <div className="project-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                <FaGithub />
              </a>
            )}
            {project.websiteLink && (
              <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="project-link website-link">
                <FaGlobe />
              </a>
            )}
          </div>
        </div>
        
        <button className="close-popup" onClick={onClose}><IoClose /></button>
      </motion.div>
    </motion.div>
  ); 
};

export default ProjectPopup;