import React, { useState } from 'react';
import axios from 'axios';

const AjouterTransactionPage = () => {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('revenu'); // par défaut, c'est un revenu
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(null); // Pour afficher des erreurs si l'API échoue

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prépare les données de la transaction
    const newTransaction = { description, type, amount, date };
    
    // Logique pour envoyer la requête POST à l'API backend
    axios
      .post('http://localhost:8080/api/transactions', newTransaction) // URL de l'API Spring Boot
      .then((response) => {
        console.log('Transaction ajoutée avec succès', response.data);
        
        // Réinitialisation du formulaire après l'ajout réussi
        setDescription('');
        setType('revenu');
        setAmount('');
        setDate('');
      })
      .catch((error) => {
        console.error('Il y a eu une erreur avec l\'ajout de la transaction', error);
        setError('Erreur lors de l\'ajout de la transaction.');
      });
  };

  return (
    <div>
      <h1>Ajouter une Transaction</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Afficher l'erreur si elle existe */}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description de la transaction"
            required
          />
        </div>

        <div>
          <label>Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="revenu">Revenu</option>
            <option value="dépense">Dépense</option>
          </select>
        </div>

        <div>
          <label>Montant</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Montant de la transaction"
            required
          />
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ajouter la Transaction</button>
      </form>
    </div>
  );
};

export default AjouterTransactionPage;
