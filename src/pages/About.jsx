import React from 'react';
import { Card, Typography, List } from 'antd';

const { Title, Paragraph } = Typography;

const skills = ['JavaScript', 'React', 'HTML/CSS', 'Node.js'];

const About = () => {
  return (
    <div className="container" id="about">
      <Card>
        <Title>About Me</Title>
        <Paragraph>[Detailed bio]</Paragraph>
        <Title level={2}>Skills</Title>
        <List
          bordered
          dataSource={skills}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Title level={2}>Education</Title>
        <Paragraph>[Your education details]</Paragraph>
      </Card>
    </div>
  );
};

export default About;
