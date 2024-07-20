import React from 'react';
import { Card, Typography, List } from 'antd';

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: 'Project 1',
    description: '[Description]',
    technologies: '[Tech used]',
    link: 'project-link',
  },
  {
    title: 'Project 2',
    description: '[Description]',
    technologies: '[Tech used]',
    link: 'project-link',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container" id = "projects">
      <Card>
        <Title>Projects</Title>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={projects}
          renderItem={(project) => (
            <List.Item key={project.title}>
              <Title level={3}>{project.title}</Title>
              <Paragraph>{project.description}</Paragraph>
              <Paragraph>Technologies: {project.technologies}</Paragraph>
              <a href={project.link}>View Project</a>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Projects;
