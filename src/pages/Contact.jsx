import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { motion,useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

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


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(0, 255, 157, ${Math.random() * 0.5 + 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    createParticles();
    animateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    animate={controls}
    >
          <canvas ref={canvasRef} className="background-canvas"></canvas>

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