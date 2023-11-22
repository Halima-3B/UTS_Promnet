import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Row>
          <Col md={6}>
            <h4>Contact Me</h4>
            <p>Email: halimaatd@gmail.com</p>
            <p>Phone: +62 8111119385</p>
          </Col>
          <Col md={6}>
            <h4>Follow Me</h4>
            {/* Tautan Twitter */}
            <p>
              <a href="https://twitter.com/ddoseofh4l" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </p>
            {/* Tautan Instagram */}
            <p>
              <a href="https://www.instagram.com/ddoseofh4l" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;