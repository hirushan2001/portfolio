import React from 'react';
import { motion } from 'framer-motion';
import * as SimpleIcons from 'react-icons/si';
import './Skills.css';

const skillsData = {
  frontend: [
    { name: 'React JS', icon: 'SiReact' },
    { name: 'HTML', icon: 'SiHtml5' },
    { name: 'CSS', icon: 'SiCss3' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'React Native', icon: 'SiReact' },
  ],
  backend: [
    { name: 'Node JS', icon: 'SiNodedotjs' },
    { name: 'MySQL', icon: 'SiMysql' },
    { name: 'MongoDB', icon: 'SiMongodb' },
    {name :'MSSQL',icon:'SiMssql'},
    { name: 'Express JS', icon: 'SiExpress' },
  ],
  languages: [
    { name: 'Java', icon: 'SiJava' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'C++', icon: 'SiCplusplus' },
    { name: 'C', icon: 'SiC' },
    
  ],
  android: [
    { name: 'Figma', icon: 'SiFigma'},
    { name: 'Git', icon: 'SiGit' },
    { name: 'postman', icon: 'SiPostman' },
    { name: 'Gimp', icon: 'SiGimp' },
    { name: 'Arduino', icon: 'SiArduino' },
    { name: 'blender', icon: 'SiBlender' },
    { name: 'Android Studio', icon: 'SiAndroidstudio' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const IconFrontend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M13 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-2l-4 4z"/>
    <path d="M7 9l3 3-3 3M12 15h3"/>
  </svg>
);

const IconBackend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M4 1h16c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z"/>
    <path d="M7 8h10M7 12h10M7 16h7"/>
  </svg>
);

const IconDevOps = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const IconAndroid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
  </svg>
);

const SkillSection = ({ title, skills, icon: Icon }) => (
  <motion.div className="skills-section" variants={containerVariants} initial="hidden" animate="visible">
    <h2><Icon className="skills-icon" /> {title}</h2>
    <div className="skills-list">
      {skills.map((skill, index) => {
        const SkillIcon = SimpleIcons[skill.icon];
        return (
          <motion.div key={index} className="skill-item" variants={itemVariants}>
            {SkillIcon && <SkillIcon className="skill-icon" />}
            <span>{skill.name}</span>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <motion.h1 
        className="skills-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <div className="skills-grid">
        <SkillSection title="Frontend" skills={skillsData.frontend} icon={IconFrontend} />
        <SkillSection title="Backend" skills={skillsData.backend} icon={IconBackend} />
        <SkillSection title="Languages" skills={skillsData.languages} icon={IconDevOps} />
        <SkillSection title="Other Tools" skills={skillsData.android} icon={IconAndroid} />
      </div>
    </div>
  );
};

export default Skills;