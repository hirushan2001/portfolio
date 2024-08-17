import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projectpopup.css';
import { IoClose } from 'react-icons/io5';
import { FaGithub, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const ProjectPopup = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project.image, ...(project.additionalImages || [])];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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
        
        <div className="image-carousel">
          <img src={images[currentImageIndex]} alt={project.title} className="popup-image" />
          {images.length > 1 && (
            <>
              <button className="carousel-button prev" onClick={prevImage}><FaChevronLeft /></button>
              <button className="carousel-button next" onClick={nextImage}><FaChevronRight /></button>
            </>
          )}
        </div>
        
        <div className="popup-details">
        <h3>Project Overview</h3>
          <ReactMarkdown>{project.longDescription}</ReactMarkdown>
          
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