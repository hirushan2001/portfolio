import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as SimpleIcons from 'react-icons/si';
import { FaCode, FaServer, FaTools, FaConnectdevelop } from 'react-icons/fa';
import './Skills.css';
import ParticleBackground from '../components/ParticleBackground';


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
    { name: 'MSSQL', icon: 'SiMssql' },
    { name: 'Express JS', icon: 'SiExpress' },
  ],
  languages: [
    { name: 'Java', icon: 'SiJava' },
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'C++', icon: 'SiCplusplus' },
    { name: 'C', icon: 'SiC' },
  ],
  tools: [
    { name: 'Arduino', icon: 'SiArduino' },
    { name: 'Blender', icon: 'SiBlender' },
    { name: 'Postman', icon: 'SiPostman' },
    { name: 'Gimp', icon: 'SiGimp' },
    { name: 'Figma', icon: 'SiFigma' },
    { name: 'Git', icon: 'SiGit' },
    { name: 'Android Studio', icon: 'SiAndroidstudio' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const IconFrontend = () => <FaCode size={24} />;
const IconBackend = () => <FaServer size={24} />;
const IconDevOps = () => <FaConnectdevelop size={24} />;
const IconTools = () => <FaTools size={24} />;

const SkillSection = ({ title, skills, icon: Icon }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="skills-section"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <h2>
        <Icon className="skills-icon" /> {title}
      </h2>
      <motion.div
        className="skills-list"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {skills.map((skill, index) => {
          const SkillIcon = SimpleIcons[skill.icon];
          return (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {SkillIcon && <SkillIcon className="skill-icon" />}
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);


  return (
    <div className="skills-container" id="skills" ref={ref}>
      <ParticleBackground />
      <motion.h1
        className="skills-header"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
        }}
      >
        Skills
      </motion.h1>
      <motion.div
        className="skills-row"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <SkillSection title="Frontend" skills={skillsData.frontend} icon={IconFrontend} />
        <SkillSection title="Backend" skills={skillsData.backend} icon={IconBackend} />
        <SkillSection title="Languages" skills={skillsData.languages} icon={IconDevOps} />
        <SkillSection title="Tools" skills={skillsData.tools} icon={IconTools} />
      </motion.div>
    </div>
  );
};

export default Skills;
