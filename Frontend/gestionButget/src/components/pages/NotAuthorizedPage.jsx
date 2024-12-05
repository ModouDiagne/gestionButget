import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorizedPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-danger">Accès refusé</h1>
      <p className="lead">Désolé, vous n'avez pas les autorisations nécessaires pour accéder à cette page.</p>
      <p>
        Veuillez <Link to="/">retourner à l'accueil</Link> ou <Link to="/login">vous connecter</Link> avec un compte ayant les droits nécessaires.
      </p>
    </div>
  );
};

export default NotAuthorizedPage;
