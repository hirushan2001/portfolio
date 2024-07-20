import React from 'react';
import { Card, Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const Contact = () => {
  return (
    <div className="container" id="contact">
      <Card>
        <Title>Contact Me</Title>
        <Form>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Message" name="message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Send</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
