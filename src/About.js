import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import './About.css';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = React.useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={`accordion-toggle ${isCurrentEventKey ? 'pink' : 'blue'}`}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const About = () => {
  return (
    <div className="container mt-4">
      <div className="roww">
        <div className="col-lg-12">
          <div className="about-section">
            <h2>About Me</h2>
            <p>
            Hello! Let me introduce myself, my name is Halimatussa'diah. I am a student majoring in Computer Science Education at Universitas Pendidikan Indonesia and am currently in semester 3. 
            The reason I created this website is because it is a Mid-Semester Test assignment for the Internet Programming course. 
            Maybe there is not much I can tell here, for more you can contact me or check my social media.
            </p>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <ContextAwareToggle eventKey="0">Committee Experience</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ol><li>Secretary of the Socio-political Advocacy Division</li>
                    <li>Secretary of P2M</li>
                    <li>Staff of Consumption of Graduation Souvenirs batch 3</li>
                    <li>Staff of Dynamic Business Funds. </li></ol>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <ContextAwareToggle eventKey="1">History of Education</ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul><li>As-Syafi'iyah Islamic High School 02 Bekasi 2019 - 2022</li></ul>
                    <ul><li>Indonesian University of Education 2022 - Now</li></ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;