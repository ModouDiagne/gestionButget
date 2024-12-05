import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Créer une instance du hook useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Conversion du rôle en ID
    const roleId = formData.role === 'admin' ? 1 : 2;

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
          role_id: roleId, // Envoyer l'ID du rôle au lieu du nom
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.errors) {
          const errorMessage = Object.values(data.errors).flat().join(' ');
          setError(errorMessage);
        } else {
          setError('Une erreur est survenue lors de l\'inscription.');
        }
        return;
      }

      // En cas de succès
      setSuccess(true);
      setError(null);

      // Redirection vers la page de connexion
      navigate('/login'); // Redirige vers la page de connexion
    } catch (error) {
      console.error('Erreur: ', error);
      setError('Une erreur est survenue lors de l\'inscription.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Inscription</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Inscription réussie !</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre nom"
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Entrez votre email"
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Entrez votre mot de passe"
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmez votre mot de passe"
                required
              />
            </Form.Group>
            <Form.Group controlId="role" className="mb-3">
              <Form.Label>Rôle</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="user">Utilisateur</option>
                <option value="admin">Administrateur</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              S'inscrire
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
