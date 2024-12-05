import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

const BudgetSummary = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utilisation de useEffect pour récupérer les transactions depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transactions") // URL de votre backend Spring Boot
      .then((response) => {
        setTransactions(response.data); // Mise à jour des transactions
        setLoading(false); // Fin du chargement
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des transactions :", error);
        setError("Erreur lors du chargement des transactions.");
        setLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, []);

  // Calcul du total des revenus et des dépenses
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "revenu")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "dépense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  if (loading) return <div>Chargement...</div>; // Affiche un message de chargement pendant la récupération
  if (error) return <Alert variant="danger">{error}</Alert>; // Affiche l'erreur s'il y en a

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title style={{ fontWeight: "700", fontSize: "1.5rem" }}>
                Résumé du Budget
              </Card.Title>
              <Card.Text>
                <strong>Solde actuel :</strong> {balance.toFixed(2)} €
              </Card.Text>
              <Card.Text>
                <strong>Revenus totaux :</strong> {totalIncome.toFixed(2)} €
              </Card.Text>
              <Card.Text>
                <strong>Dépenses totales :</strong> {totalExpenses.toFixed(2)} €
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetSummary;
