import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'; 
import '../styles/App.css';

const Header = ({ onContactClick }) => {  
  return (
    <Navbar className="Header" expand="lg">
      <Navbar.Brand href="#home">
        <img className="Header-logo"
          src="/images/logo.png" 
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="Header-centre">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#listing">LISTING</Nav.Link>
          <Nav.Link href="#about-us">ABOUT US</Nav.Link>
        </Nav>
        <Button 
          variant="outline-light" 
          className='Header-contact' 
          onClick={onContactClick} 
        >
          Contact
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
