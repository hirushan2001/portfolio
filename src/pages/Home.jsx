import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import './Home.css';
import img from '../assets/mypic.png';

const Home = () => {
  return (
    <div className="home-container">
      <main className="main-content">
        <div className="left-content">
          <p className="job-title">Software Developer</p>
          <h1 className="greeting">Hello I'm<br /><span className="name">Dhananjana Hirushan</span></h1>
          <p className="description">
            I excel at crafting elegant digital experiences and<br />
            I am proficient in various programming languages and technologies.
          </p>
          <Button icon={<DownloadOutlined />} className="download-cv-btn">DOWNLOAD CV</Button>
          <div className="social-links">
            <a href="#github"><GithubOutlined /></a>
            <a href="#linkedin"><LinkedinOutlined /></a>
            <a href="#mail"><MailOutlined /></a>
            <a href="#twitter"><TwitterOutlined /></a>
          </div>
        </div>
        <div className="right-content">
          <div className="profile-image-container">
            <img src={img} alt="Dhananjana Hirushan" className="profile-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
