import React from 'react';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-name">DHANANJANA HIRUSHAN</h3>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
        <div className="footer-social-links">
          <a href="#facebook"><FacebookOutlined /></a>
          <a href="#twitter"><TwitterOutlined /></a>
          <a href="#linkedin"><LinkedinOutlined /></a>
          <a href="#instagram"><InstagramOutlined /></a>
        </div>
        <p className="footer-copy">© 2024 Rishav Chanda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
