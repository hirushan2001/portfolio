import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import './About.css';
import img from '../assets/mypic.png';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-left">
          <img src={img} alt="Dhananjana Hirushan" className="about-image" />
        </div>
        <div className="about-right">
          <div className="about-box">
            <h1>Hi Guys!</h1>
            <p>I'm a passionate, enthusiastic, and skilled undergraduate who is committed to working smart to achieve goals and willing to take on any challenge. Moreover, a responsible team player with solid and friendly leadership qualities and a good team spirit who can adapt and focus on any productive targets, seeking an opportunity as a software engineer intern to apply and explore existing and emerging technologies in the field of Information Technology.</p>
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
              <Button icon={<DownloadOutlined />} className="download-resume-btn">DOWNLOAD RESUME</Button>
              <Button icon={<MailOutlined />} className="contact-me-btn">CONTACT ME</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
