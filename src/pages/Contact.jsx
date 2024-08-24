import React, { useEffect, useRef, useState } from 'react';
import { Button,message } from 'antd';
import { motion,useAnimation,AnimatePresence   } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';
import ParticleBackground from '../components/ParticleBackground';


const Contact = () => {

  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000); // Message will disappear after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
      setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSuccessMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };

  const canvasRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
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
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    animate={controls}
    >
      <ParticleBackground />

      <div className="contact-content">
        <motion.h2 variants={itemVariants}>Let's Connect</motion.h2>
        <motion.p variants={itemVariants}>Have a project in mind or just want to say hi? I'd love to hear from you!</motion.p>
        <div className="contact-columns">
        <motion.form className="contact-form" variants={itemVariants} onSubmit={handleSubmit}>
  <input 
    type="text" 
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    placeholder="Your Name" 
    required 
  />
  <input 
    type="email" 
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    placeholder="Your Email" 
    required 
  />
  <input 
    type="text" 
    name="subject"
    value={formData.subject}
    onChange={handleInputChange}
    placeholder="Subject" 
    required 
  />
  <textarea 
    name="message"
    value={formData.message}
    onChange={handleInputChange}
    placeholder="Your Message" 
    required
  ></textarea>
  <motion.div>
    <Button type="primary" htmlType="submit" className="send-btn">
      Send Message
    </Button>
  </motion.div>
  <AnimatePresence>
    {successMessage && (
      <motion.div 
        className="success-message"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {successMessage}
      </motion.div>
    )}
  </AnimatePresence>
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
              <a href="https://www.linkedin.com/in/dhananjana-hirushan-70992625b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/hirushan2001" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://x.com/dhanajanahp" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;