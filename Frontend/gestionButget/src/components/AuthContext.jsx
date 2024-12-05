import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const AuthContext = createContext();

// Fournisseur de contexte
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fonction pour se connecter
  const login = (userData) => {
    setUser(userData); // Simule l'utilisateur connecté
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Fonction pour se déconnecter
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    // Vérifier s'il y a un utilisateur connecté dans localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
