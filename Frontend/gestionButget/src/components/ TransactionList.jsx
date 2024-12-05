import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionList from "../TransactionList";
import TransactionForm from "../TransactionForm"; // Si vous avez un formulaire pour ajouter/modifier les transactions

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utiliser useEffect pour charger les transactions depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transactions") // L'URL de l'API Spring Boot
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Erreur lors du chargement des transactions.");
        setLoading(false);
      });
  }, []);

  // Gérer l'ajout d'une nouvelle transaction
  const handleAddTransaction = (newTransaction) => {
    axios
      .post("http://localhost:8080/api/transactions", newTransaction)
      .then((response) => {
        setTransactions([...transactions, response.data]); // Ajouter la nouvelle transaction à l'état
      })
      .catch((error) => {
        setError("Erreur lors de l'ajout de la transaction.");
      });
  };

  // Gérer la suppression d'une transaction
  const handleDeleteTransaction = (id) => {
    axios
      .delete(`http://localhost:8080/api/transactions/${id}`)
      .then(() => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id)); // Met à jour l'état après suppression
      })
      .catch((error) => {
        setError("Erreur lors de la suppression de la transaction.");
      });
  };

  // Gérer la modification d'une transaction
  const handleEditTransaction = (transaction) => {
    // Vous pouvez ici ouvrir un formulaire pour modifier la transaction
    console.log("Modifier la transaction : ", transaction);
    // Exemple de mise à jour, envoyer la requête PUT à votre API :
    axios
      .put(`http://localhost:8080/api/transactions/${transaction.id}`, transaction)
      .then((response) => {
        const updatedTransactions = transactions.map((t) =>
          t.id === transaction.id ? response.data : t
        );
        setTransactions(updatedTransactions);
      })
      .catch((error) => {
        setError("Erreur lors de la mise à jour de la transaction.");
      });
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Gestion des Transactions</h1>
      <TransactionForm onSubmit={handleAddTransaction} /> {/* Formulaire pour ajouter une nouvelle transaction */}
      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteTransaction}
        onEdit={handleEditTransaction}
      />
    </div>
  );
};

export default TransactionPage;
