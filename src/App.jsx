import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import './Layout.css';

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Navbar />
      <Content className="content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;