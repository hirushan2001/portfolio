import React from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined, UserOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => scrollToSection('home')}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<UserOutlined />} onClick={() => scrollToSection('about')}>
          About
        </Menu.Item>
        <Menu.Item key="projects" icon={<ProjectOutlined />} onClick={() => scrollToSection('projects')}>
          Projects
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />} onClick={() => scrollToSection('contact')}>
          Contact
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;