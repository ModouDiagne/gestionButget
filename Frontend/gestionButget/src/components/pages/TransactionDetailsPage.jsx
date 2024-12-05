import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';

const fetchTransactionDetails = async (id) => {
  const response = await fetch(`http://localhost:8080/api/transactions/${id}`);
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des détails de la transaction');
  }
  const data = await response.json();
  return data;
};

const TransactionDetailsPage = () => {
  const { id } = useParams(); // Récupère l'ID de la transaction depuis l'URL
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getTransactionDetails = async () => {
      try {
        const data = await fetchTransactionDetails(id);
        setTransaction(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getTransactionDetails();
  }, [id]);

  const handleEdit = () => {
    navigate(`/transactions/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8080/api/transactions/${id}`, {
        method: 'DELETE',
      });
      navigate('/transactions');
    } catch (error) {
      console.error('Erreur lors de la suppression de la transaction:', error);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!transaction) return <div>Aucune transaction trouvée.</div>;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{transaction.description}</Card.Title>
              <Card.Text>
                <strong>Type : </strong> {transaction.type === 'revenu' ? 'Revenu' : 'Dépense'}
              </Card.Text>
              <Card.Text>
                <strong>Montant : </strong> {transaction.amount} €
              </Card.Text>
              <Card.Text>
                <strong>Date : </strong> {new Date(transaction.date).toLocaleDateString()}
              </Card.Text>
              <Button variant="primary" onClick={handleEdit} className="me-2">
                Modifier
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Supprimer
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionDetailsPage;
