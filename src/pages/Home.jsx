import React from 'react';
import { Typography } from 'antd';
import './Home.css';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-content">
        <Title className="home-greeting">Hi there, I'm</Title>
        <Title className="home-name">Dhananjana Hirushan</Title>
        <Paragraph className="home-paragraph">
          I am an <span className="home-highlight">undergraduate student at University of Moratuwa</span>
        </Paragraph>
        <Paragraph className="home-paragraph">
          Interested in <span className="home-highlight">web development</span> and <span className="home-highlight">mobile development</span>
        </Paragraph>
      </div>
    </div>
  );
};

export default Home;