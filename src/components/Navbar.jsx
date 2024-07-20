import React from 'react';
import { Button } from 'antd';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hirushan<span className="logo-dot">.</span></div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#resume">Resume</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <Button type="primary" className="hire-me-btn">Hire me</Button>
      </div>
    </nav>
  );
};

export default Navbar;
