import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState(""); // Pour stocker la saisie utilisateur

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire de recharger la page

    if (inputValue.trim() === "") {
      return; // Si l'input est vide, on ne fait rien
    }

    addTask(inputValue); // Ajoute la nouvelle tâche
    setInputValue(""); // Réinitialise l'input après soumission
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Faire les courses..."
        aria-label="Ajouter une tâche"
        value={inputValue} // Le state est lié à l'input
        onChange={(e) => setInputValue(e.target.value)} // Mise à jour de l'input
      />
    </form>
  );
};

export default Form;
