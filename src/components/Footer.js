import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/App.css';

const Footer = () => {
  return (
    <footer className="Footer-container">
      <Container>
        <Row>
          <Col className="Footer-left-heading">
            <a href="#privacy">Privacy</a> •
            <a href="#terms-of-use">Terms of Use</a> •
            <a href="#site-map">Site Map</a>
          </Col>
          <Col className="Footer-right-heading">
            <span>&copy; 2024, All Rights Reserved by Dev</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
