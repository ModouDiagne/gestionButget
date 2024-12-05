import React from 'react';
import NavigationBar from '../Navbar';
import HeroSection from '../HeroSection';
import TransactionList from '../ TransactionList';  // Composant pour afficher la liste des transactions
import BudgetSummary from '../ BudgetSummary';   // Composant pour afficher le solde total
import Footer from '../Footer';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection /> {/* Vous pouvez adapter cette section pour parler de la gestion de budget */}
      <TransactionList /> {/* Liste des transactions */}
      <BudgetSummary /> {/* Affichage du solde total */}
      <Footer />
    </div>
  );
};

export default HomePage;
