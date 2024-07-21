import React from 'react';
import { Button } from 'antd';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>Feel free to reach out to me for any questions or opportunities!</p>
      <form className="contact-form">
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Your Name" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" required></textarea>
        <Button type="primary" htmlType="submit" className="send-btn">Send</Button>
      </form>
    </div>
  );
};

export default Contact;
