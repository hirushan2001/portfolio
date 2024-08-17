import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import './Home.css';
import img from '../assets/mypic1.png';
import cvFile from '../assets/mycv.pdf';
import ParticleBackground from '../components/ParticleBackground';
import LoadingAnimation from '../components/LoadingAnimation';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    window.open(cvFile, '_blank', 'noopener,noreferrer');
  };

  // if (isLoading) {
  //   return <LoadingAnimation />;
  // }

  return (
    <div className="home-container" id="home">
      <ParticleBackground />
      <main className="main-content">
        <div className="left-content">
          <h1 className="greeting animate-text">Hello I'm<br /><span className="name animate-text">Dhananjana Hirushan</span></h1>
          <div className="wrapper">
            <div className="job-title animate-text">I'm a</div>
            <ul className='list animate-text'>
              <li><span>Web APP Developer</span></li>
              <li><span>Mobile App Developer</span></li>
              <li><span>Content Creator</span></li>
            </ul>
          </div>
          <p className="description animate-text">
            I excel at crafting elegant digital experiences and<br />
            I am proficient in various programming languages and technologies.
          </p>
          <Button icon={<DownloadOutlined />} className="download-cv-btn animate-button" onClick={handleDownload}>DOWNLOAD CV</Button>
          <div className="social-links animate-text">
            <a href="https://github.com/hirushan2001" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
            <a href="https://www.linkedin.com/in/dhananjana-hirushan-70992625b/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
            <a href="#contact"><MailOutlined /></a>
            <a href="https://x.com/dhanajanahp" target="_blank"><TwitterOutlined /></a>
          </div>
        </div>
        <div className="right-content">
          <div className="profile-image-container">
            <img src={img} alt="Dhananjana Hirushan" className="profile-image animate-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;