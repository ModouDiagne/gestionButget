import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Tableau de Bord Administrateur - Gestion de Budget</h1>
      <Row>
        {/* Gérer les Transactions */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Gérer les Transactions</Card.Title>
              <Card.Text>
                Ajouter, modifier ou supprimer des transactions (revenus et dépenses) dans la base de données.
              </Card.Text>
              <Link to="/ajouter-transaction">
                <Button variant="primary">Ajouter une Transaction</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Gérer les Utilisateurs */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Gérer les Utilisateurs</Card.Title>
              <Card.Text>
                Visualiser et gérer les utilisateurs enregistrés sur la plateforme.
              </Card.Text>
              <Link to="/admin/utilisateurs">
                <Button variant="primary">Voir les Utilisateurs</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Statistiques financières */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Statistiques Financières</Card.Title>
              <Card.Text>
                Voir les statistiques globales des transactions et des utilisateurs.
              </Card.Text>
              <Link to="/admin/statistiques">
                <Button variant="primary">Voir les Statistiques</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
