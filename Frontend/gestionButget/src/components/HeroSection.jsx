import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importez Link

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#E8F5E9', padding: '5rem 0', borderRadius: '8px' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 style={{ color: '#2C3E50', fontWeight: '700', fontSize: '3rem', marginBottom: '1.5rem' }}>
              Bienvenue sur <span style={{ color: '#27AE60' }}>Gestion de Budget</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#34495E', marginBottom: '2rem' }}>
              Suivez vos revenus et dépenses pour mieux gérer vos finances. Simplifiez la gestion de votre budget personnel.
            </p>
            <Button
              as={Link} // Utilisez Link pour la navigation
              to="/transactions" // Lien vers la page des transactions
              variant="success"
              style={{
                backgroundColor: '#27AE60',
                borderColor: '#27AE60',
                padding: '0.75rem 1.5rem',
                fontSize: '1.1rem',
                fontWeight: '500',
              }}
            >
              Commencer
            </Button>
          </Col>
          <Col md={6}>
            <img
               src="/images/budget.jpg" // Mettez ici une image en rapport avec le budget ou la gestion financière
              alt="Gestion de Budget"
              style={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
