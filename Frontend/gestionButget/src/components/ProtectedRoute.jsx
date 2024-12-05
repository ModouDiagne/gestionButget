import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Assure-toi que tu as un contexte d'authentification

const ProtectedRoute = ({ requiredRole }) => {
  const { user } = useContext(AuthContext); // Récupère l'utilisateur depuis le contexte

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== requiredRole) {
    return <Navigate to="/not-authorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
