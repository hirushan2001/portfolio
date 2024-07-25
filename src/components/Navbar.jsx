import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Close the menu before scrolling
      setIsMenuOpen(false);
      // Use setTimeout to ensure the menu closes before scrolling
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const NavLinks = ({ mobile = false }) => (
    <motion.div
      className={`nav-links ${mobile ? 'mobile-nav' : 'desktop-nav'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={(e) => handleLinkClick(e, item.toLowerCase())}
          variants={linkVariants}
          whileHover={{ scale: 1.1, color: "#00ff9d" }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      <motion.div
        variants={linkVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button type="default" className="hire-me-btn">Github</Button>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.nav
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        HirushanDH<span className="logo-dot">.</span>
      </motion.div>
     
      {!isMobile && <NavLinks />}
      {isMobile && (
        <>
          <motion.div
            className="menu-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
          >
            <MenuOutlined />
          </motion.div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="mobile-nav-container"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <NavLinks mobile />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;