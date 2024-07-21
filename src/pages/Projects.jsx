import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import image1 from '../assets/mypic.png';
import image2 from '../assets/mypic.png';
import image3 from '../assets/mypic.png';

const projects = [
  {
    image: image1,
    tags: ['React JS', 'PostgreSQL', 'Node JS', 'Express JS', 'Redux', 'React Flow'],
    title: 'DecisionHub',
    dates: 'Jan 2024 - Dec 2023',
    description: 'A Rule Builder application “DecisionHub” ...'
  },
  {
    image: image2,
    tags: ['Docker', 'AWS', 'DuckDNS', 'Eslint', 'Husky', 'CI/CD', 'React JS', 'MongoDB', 'Node JS', 'Express JS', 'Redux'],
    title: 'Trackify',
    dates: 'Jun 2023 - Jul 2023',
    description: 'A full-stack web application for tracking ...'
  },
  {
    image: image3,
    tags: ['React JS', 'MongoDB', 'Node JS', 'Express JS', 'Redux'],
    title: 'Podstream',
    dates: 'Apr 2023 - May 2023',
    description: 'Developed a full-stack web application that allows ...'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-header">Projects</h1>
      <p className="projects-description">
        I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
      </p>
      <div className="projects-filters">
        <button className="filter-button">All</button>
        <button className="filter-button">Web Apps</button>
        <button className="filter-button">Android Apps</button>
        <button className="filter-button">Machine Learning</button>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
