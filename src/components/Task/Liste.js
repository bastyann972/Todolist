import React from "react";

const Liste = ({ id, label, done, toggleListe }) => {
  // Gestion conditionnelle de la classe en fonction de l'état de la tâche
  const className = done ? "list-item list-item--done" : "list-item";

  return (
    <li>
      <label className={className} htmlFor={id}>
        {/* Afficher le label de la tâche */}
        {label}
        <input
          type="checkbox"
          checked={done} // Gérer l'état coché en fonction de la propriété done
          id={id}
          onChange={() => {
            toggleListe(id); // Utiliser la fonction pour changer l'état de la tâche
          }}
        />
      </label>
    </li>
  );
};

export default Liste;
