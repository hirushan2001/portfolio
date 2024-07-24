import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="contact-container"
      id='contact'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="contact-content">
        <motion.h2 variants={itemVariants}>Let's Connect</motion.h2>
        <motion.p variants={itemVariants}>Have a project in mind or just want to say hi? I'd love to hear from you!</motion.p>
        <div className="contact-columns">
          <motion.form className="contact-form" variants={itemVariants}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>
            <motion.div>
              <Button type="primary" htmlType="submit" className="send-btn">
                Send Message
              </Button>
            </motion.div>
          </motion.form>
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaMapMarkerAlt />
              <p>Sirigiri, Pathegama, Weligama.</p>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <p>dhpdhananjana@gmail.com</p>
            </div>
            <div className="info-item">
              <FaPhone />
              <p>+94 (76) 451-2428</p>
            </div>
            <div className="social-linksc">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;