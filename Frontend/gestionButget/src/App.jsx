import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import TransactionListPage from './components/pages/TransactionListPage';
import TransactionDetailsPage from './components/pages/TransactionDetailsPage'; // Page des détails de la transaction
import AboutPage from './components/pages/AboutPage';
import RegisterPage from './components/pages/RegisterPage';
import NotAuthorizedPage from './components/pages/NotAuthorizedPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/pages/AdminDashboard';
import { AuthProvider } from './components/AuthContext'; // Contexte d'authentification

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/not-authorized" element={<NotAuthorizedPage />} />

          {/* Routes liées aux transactions */}
          <Route path="/transactions" element={<TransactionListPage />} />
          <Route path="/transactions/:id" element={<TransactionDetailsPage />} /> {/* Détails de la transaction */}

          {/* Routes protégées pour l'admin */}
          <Route element={<ProtectedRoute requiredRole="admin" />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
