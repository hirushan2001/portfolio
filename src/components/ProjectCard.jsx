import React,{useState }from 'react';
import { motion } from 'framer-motion';
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact, FaNodeJs,FaGithub, FaGlobe ,FaEye } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiArduino, SiCplusplus,SiNextdotjs ,SiTailwindcss,SiTypescript} from 'react-icons/si';
import './ProjectCard.css';

const iconMap = {
  'React JS': FaReact,
  'MongoDB': SiMongodb,
  'Node JS': FaNodeJs,
  'Express JS': SiExpress,
  'React Native': FaReact,
  'Framer Motion': TbBrandFramerMotion,
  'Arduino': SiArduino,
  'C++': SiCplusplus,
  'Next JS' : SiNextdotjs,
  'Tailwind CSS' : SiTailwindcss,
  'Typescript': SiTypescript
};

const ProjectCard = ({ project ,onViewMore}) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const handleViewMore = () => {
    onViewMore(project);
  };

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img 
        src={project.image} 
        alt={project.title} 
        className="project-image"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="project-info">
        <motion.div 
          className="project-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {project.tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="project-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              title={tag}
            >
              {iconMap[tag] && React.createElement(iconMap[tag], { className: 'tag-icon' })}
            </motion.span>
          ))}
        </motion.div>
        <motion.h3 
          className="project-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="project-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.description}
        </motion.p>
        <motion.div 
          className="project-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {project.githubLink && (
            <motion.a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link github-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <FaGithub />
            </motion.a>
          )}
          {project.websiteLink && (
            <motion.a 
              href={project.websiteLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link website-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Website"
            >
              <FaGlobe />
            </motion.a>
          )}
          <motion.button
            onClick={handleViewMore}
            className="project-link view-more-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="View More"
          >
            <FaEye />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;