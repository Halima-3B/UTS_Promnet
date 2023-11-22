import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="containerrr mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-section">
            <h2>Message</h2>
            <p>I would be happy if we could get to know each other.</p>
            <p>If you have any questions or messages, you can send them here.</p>
            <p>I will reply as soon as possible and thank you for coming.
            </p>
            <div className="form-container">
              <Form>
                <Form.Group controlId="formName" className="form-group">
                  <Form.Label className="form-label">Sender</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="form-group">
                  <Form.Label className="form-label">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="form-group">
                  <Form.Label className="form-label">Message column</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;