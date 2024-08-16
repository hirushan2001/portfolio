import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import cvFile from '../assets/mycv.pdf';
import ParticleBackground from '../components/ParticleBackground';
import EarthCanvas from '../components/EarthCanvas';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    window.open(cvFile, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
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

  return (
    <motion.div
      className="about-container"
      id="about"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <ParticleBackground />
      <div className="content-wrapper">
        <motion.h2
          className="section-title"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
          }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div className="about-left" variants={leftVariants}>
            <div className="planet" >
              <EarthCanvas />
            </div>
          </motion.div>
          <motion.div className="about-right" variants={rightVariants}>
            <motion.div className="about-box" variants={itemVariants}>
              <motion.h1 variants={itemVariants}>Hi Guys!</motion.h1>
              <motion.p variants={itemVariants}>
                I'm a passionate, enthusiastic, and skilled undergraduate who is committed to working smart to achieve goals and willing to take on any challenge. Moreover, a responsible team player with solid and friendly leadership qualities and a good team spirit who can adapt and focus on any productive targets, seeking an opportunity as a software engineer intern to apply and explore existing and emerging technologies in the field of Information Technology.
              </motion.p>
              <motion.div className="about-details" variants={itemVariants}>
                <motion.p variants={itemVariants}><b>Name</b>: Dhananjana Hirushan</motion.p>
                <motion.p variants={itemVariants}><b>Age</b>: 22 Years</motion.p>
                <motion.p variants={itemVariants}><b>Experience</b>: Have worked with my own projects</motion.p>
                <motion.p variants={itemVariants}><b>Country</b>: Sri Lanka</motion.p>
                <motion.p variants={itemVariants}><b>Location</b>: weligama, Matara</motion.p>
                <motion.p variants={itemVariants}><b>e-mail</b>: dhpdhananjana@gmail.com</motion.p>
                <motion.p variants={itemVariants}><b>Phone</b>: 076-4512428</motion.p>
              </motion.div>
              <motion.div className="about-buttons" variants={itemVariants}>
                <Button onClick={handleDownload} icon={<DownloadOutlined />} className="download-resume-btn">DOWNLOAD RESUME</Button>
                <Button href="#contact" icon={<MailOutlined />} className="contact-me-btn">CONTACT ME</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;