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
          <a href="https://web.facebook.com/dhananjanahirushan/" aria-label="Facebook"><FacebookOutlined /></a>
          <a href="https://x.com/dhanajanahp" aria-label="Twitter"><TwitterOutlined /></a>
          <a href="https://www.linkedin.com/in/dhananjana-hirushan-70992625b/" aria-label="LinkedIn"><LinkedinOutlined /></a>
          <a href="https://www.instagram.com/dhananjanahirushan/" aria-label="Instagram"><InstagramOutlined /></a>
        </div>
        <p className="footer-copy">© 2024 Dhananjana Hirushan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;