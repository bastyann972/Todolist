import React from "react";

const Bouton = ({ toggleShowCompleted, showCompleted }) => {
  return (
    <button className="toggler" onClick={toggleShowCompleted}>
      {showCompleted
        ? "Masquer les tâches terminées"
        : "Afficher les tâches terminées"}
    </button>
  );
};

export default Bouton;
