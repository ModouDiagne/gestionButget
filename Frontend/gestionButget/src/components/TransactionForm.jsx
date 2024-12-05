import React, { useState } from "react";

const TransactionForm = ({ onSubmit }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("revenu");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(), // Génère un ID unique pour la transaction
      description,
      type,
      amount: parseFloat(amount),
      date,
    };
    onSubmit(newTransaction); // Appelle la fonction passée en props
    setDescription(""); // Réinitialise le champ
    setType("revenu"); // Réinitialise le type par défaut
    setAmount(""); // Réinitialise le montant
    setDate(""); // Réinitialise la date
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-light rounded">
      <h3>Ajouter une Transaction</h3>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div>
        <label>Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-control"
          required
        >
          <option value="revenu">Revenu</option>
          <option value="dépense">Dépense</option>
        </select>
      </div>
      <div>
        <label>Montant (€)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Ajouter</button>
    </form>
  );
};

export default TransactionForm;
