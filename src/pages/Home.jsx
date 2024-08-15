import React, { useEffect, useRef } from 'react';
import { Button } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';
import './Home.css';
import img from '../assets/mypic1.png';
import cvFile from '../assets/mycv.pdf';

const Home = () => {
  const canvasRef = useRef(null);

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

  const handleDownload = () => {
    window.open(cvFile, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="home-container" id="home">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <main className="main-content">
        <div className="left-content">
          <h1 className="greeting animate-text">Hello I'm<br /><span className="name animate-text">Dhananjana Hirushan</span></h1>
          <div className="wrapper">
            <div className="job-title animate-text">I'm a</div>
            <ul className='list animate-text'>
              <li><span>Full Stack Developer</span></li>
              <li><span>Frontend Developer</span></li>
              <li><span>Backend Developer</span></li>
            </ul>
          </div>
          <p className="description animate-text">
            I excel at crafting elegant digital experiences and<br />
            I am proficient in various programming languages and technologies.
          </p>
          <Button icon={<DownloadOutlined />} className="download-cv-btn animate-button" onClick={handleDownload}>DOWNLOAD CV</Button>
          <div className="social-links animate-text">
            <a href="https://github.com/hirushan2001" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a>
            <a href="https://www.linkedin.com/in/dhananjana-hirushan-70992625b/"><LinkedinOutlined /></a>
            <a href="#contact"><MailOutlined /></a>
            <a href="https://x.com/dhanajanahp"><TwitterOutlined /></a>
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