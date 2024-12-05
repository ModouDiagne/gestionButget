import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Exemple de témoignages pour la gestion de budget
const testimonials = [
  { id: 1, name: 'Alice Dupont', text: 'Grâce à cette application, j’ai enfin pu maîtriser mes dépenses et économiser !' },
  { id: 2, name: 'Marc Lefevre', text: 'Un excellent outil pour suivre mes revenus et mes dépenses au quotidien.' },
  { id: 3, name: 'Sophie Martin', text: 'J’adore les graphiques qui montrent où va mon argent. Très utile pour prendre des décisions financières.' },
  { id: 4, name: 'Paul Dubois', text: 'Simple et efficace. Cette application m’aide à garder mon budget sous contrôle.' },
];

const Testimonials = () => {
  return (
    <section style={{ backgroundColor: '#E9ECEF', padding: '3rem 0' }}>
      <Container>
        <h2 style={{ color: '#2C3E50', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
          Témoignages de Nos Utilisateurs
        </h2>
        <Row>
          {testimonials.map(testimonial => (
            <Col key={testimonial.id} md={6} className="mb-4">
              <Card className="shadow-sm border-0" style={{ backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
                <Card.Body>
                  <Card.Text style={{ fontStyle: 'italic', color: '#495057' }}>
                    "{testimonial.text}"
                  </Card.Text>
                  <Card.Subtitle className="mt-3 text-end" style={{ color: '#6C757D', fontWeight: '600' }}>
                    - {testimonial.name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
