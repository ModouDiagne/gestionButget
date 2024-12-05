import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2C3E50', padding: '2rem 0', color: '#FFFFFF' }}>
      <Container className="text-center">
        <p style={{ margin: 0 }}>
          &copy; 2024 Gestion de Budget. Tous droits réservés.
        </p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Conçu avec <span style={{ color: '#E74C3C' }}>❤</span> par Modou Diagne
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
