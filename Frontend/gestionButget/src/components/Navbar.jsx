import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importez Link

const NavigationBar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#F4EFEA' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ color: '#27AE60' }}>Gestion de Budget</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#27AE60' }}>Accueil</Nav.Link>
            <Nav.Link as={Link} to="/transactions" style={{ color: '#27AE60' }}>Transactions</Nav.Link> {/* Remplacez Cocktails par Transactions */}
            <Nav.Link as={Link} to="/about" style={{ color: '#27AE60' }}>À propos</Nav.Link>
            <NavDropdown title="Plus" id="nav-dropdown" style={{ color: '#27AE60' }}>
              <NavDropdown.Item as={Link} to="/statistiques">Statistiques</NavDropdown.Item> {/* Ajouter une page pour les statistiques */}
              <NavDropdown.Item as={Link} to="/settings">Paramètres</NavDropdown.Item> {/* Ajouter une page pour les paramètres */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item> {/* Ajouter une page Contact */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
              style={{ borderColor: '#27AE60' }}
            />
            <Button variant="outline-success" style={{ borderColor: '#27AE60', color: '#27AE60' }}>Rechercher</Button>
          </Form>
          <Nav>
            <Button as={Link} to="/login" variant="outline-primary" className="me-2" style={{ borderColor: '#27AE60', color: '#27AE60' }}>
              Se connecter
            </Button>
            <Button as={Link} to="/register" variant="primary" style={{ backgroundColor: '#27AE60', borderColor: '#27AE60' }}>
              S'inscrire
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
