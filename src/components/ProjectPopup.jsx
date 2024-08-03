import React from 'react';
import { motion } from 'framer-motion';
import './Projectpopup.css';
import { IoClose } from 'react-icons/io5';  // Import the close icon


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
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} className="popup-image" />
        <p>{project.description}</p>
        <div className="popup-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="popup-tag">{tag}</span>
          ))}
        </div>
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {project.websiteLink && (
          <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">Website</a>
        )}
        <button className="close-popup" icon="close" onClick={onClose}><IoClose /></button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPopup;