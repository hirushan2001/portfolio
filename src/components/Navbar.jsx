import React, { useState } from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><span></span>HirushanDH<span className="logo-dot">.</span></div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
        <Button type="default" className="hire-me-btn">Github</Button>
      </div>
      <MenuOutlined className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
