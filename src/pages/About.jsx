import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import './About.css';
import img from '../assets/mypic1.jpg';
import cvFile from '../assets/mycv.pdf';


const About = () => {
  const aboutSectionRef = useRef(null);
  const contentRefs = useRef([]);

  const handleDownload = () => {
    window.open(cvFile, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    contentRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
      contentRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="about-container" id="about" ref={aboutSectionRef}>
      <div className="projects-header" ref={(el) => (contentRefs.current[0] = el)}>About Me</div>
      <div className="about-content">
        <div className="about-left" ref={(el) => (contentRefs.current[1] = el)}>
          <img src={img} alt="Dhananjana Hirushan" className="about-image" />
        </div>
        <div className="about-right" ref={(el) => (contentRefs.current[2] = el)}>
          <div className="about-box">
            <h1>Hi Guys!</h1>
            <p>
              I'm a passionate, enthusiastic, and skilled undergraduate who is committed to working smart to achieve goals and willing to take on any challenge. Moreover, a responsible team player with solid and friendly leadership qualities and a good team spirit who can adapt and focus on any productive targets, seeking an opportunity as a software engineer intern to apply and explore existing and emerging technologies in the field of Information Technology.
            </p>
            <div className="about-details">
              <p><b>Name</b>: Dhananjana Hirushan</p>
              <p><b>Age</b>: 22 Years</p>
              <p><b>Experience</b>: Have worked with my own projects</p>
              <p><b>Country</b>: Sri Lanka</p>
              <p><b>Location</b>: weligama, Matara</p>
              <p><b>e-mail</b>: dhpdhananjana@gmail.com</p>
              <p><b>Phone</b>: 076-4512428</p>
            </div>
            <div className="about-buttons">
              <Button  onClick={handleDownload} icon={<DownloadOutlined />} className="download-resume-btn">DOWNLOAD RESUME</Button>
              <Button  href="#contact" icon={<MailOutlined />} className="contact-me-btn">CONTACT ME</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;