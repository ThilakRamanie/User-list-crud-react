import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    fontSize: '12px',
    color: '#777',
    padding: '10px 0'
  };

  return (
    <Navbar bg="dark" variant="dark" fixed='bottom'>
      <Container className='d-flex justify-content-center align-items-center'>
        <div style={footerStyle}>
          &copy; {new Date().getFullYear()} Harrier. All rights reserved.
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;