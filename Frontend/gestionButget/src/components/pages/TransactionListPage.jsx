import React from 'react';
import TransactionList from '../ TransactionList';
import TransactionPage from './TransactionPage'; // Assurez-vous que ce chemin est correct

const TransactionListPage = () => {
  return (
    <div>
      <h1>Liste des Transactions</h1>
      <TransactionList />
      <TransactionPage/> {/* Ce composant affichera la liste des transactions */}
    </div>
  );
};

export default TransactionListPage; // Assurez-vous d'avoir un export par défaut
