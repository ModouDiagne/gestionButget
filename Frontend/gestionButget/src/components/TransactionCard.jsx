import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importez Link

const TransactionCard = ({ transaction }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{transaction.description}</Card.Title>
        <Card.Text>
          <strong>Type : </strong>{transaction.type === 'revenu' ? 'Revenu' : 'Dépense'}
        </Card.Text>
        <Card.Text>
          <strong>Montant : </strong>{transaction.amount} €
        </Card.Text>
        <Card.Text>
          <strong>Date : </strong>{new Date(transaction.date).toLocaleDateString()}
        </Card.Text>
        <Link to={`/transactions/${transaction.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="primary">Voir les détails</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default TransactionCard;
