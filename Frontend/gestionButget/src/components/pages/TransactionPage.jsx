import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionForm from "../TransactionForm";
import TransactionList from "../TransactionList";

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true); // Gère le chargement des données
  const [error, setError] = useState(null); // Gère les erreurs

  // Récupérer les transactions depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transactions") // L'URL de votre API backend Spring Boot
      .then((response) => {
        setTransactions(response.data); // Met à jour l'état des transactions avec les données reçues
        setLoading(false); // Terminer le chargement
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des transactions :", error);
        setError("Erreur lors du chargement des transactions.");
        setLoading(false); // Terminer le chargement même en cas d'erreur
      });
  }, []);

  const handleAddTransaction = (newTransaction) => {
    // Envoyer la nouvelle transaction au backend via une requête POST
    axios
      .post("http://localhost:8080/api/transactions", newTransaction)
      .then((response) => {
        // Mettre à jour l'état avec la nouvelle transaction ajoutée
        setTransactions([...transactions, response.data]);
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de la transaction :", error);
        setError("Erreur lors de l'ajout de la transaction.");
      });
  };

  const handleDeleteTransaction = (id) => {
    // Supprimer la transaction du backend via une requête DELETE
    axios
      .delete(`http://localhost:8080/api/transactions/${id}`)
      .then(() => {
        // Mettre à jour l'état après la suppression de la transaction
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la transaction :", error);
        setError("Erreur lors de la suppression de la transaction.");
      });
  };

  if (loading) return <div>Chargement...</div>; // Afficher un message pendant le chargement
  if (error) return <div>{error}</div>; // Afficher un message d'erreur s'il y en a

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Gestion des Transactions</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
};

export default TransactionPage;
