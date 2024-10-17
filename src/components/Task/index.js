import React from "react";
import Liste from "./Liste";

const IndexListe = ({ tasks, toggleListe }) => {
  return (
    <ul className="list">
      {/* Parcours des données pour récupérer la liste des tâches (json) */}
      {tasks.map((task) => (
        <Liste
          key={task.id}
          id={task.id}
          label={task.label}
          done={task.done}
          toggleListe={toggleListe}
        />
      ))}
    </ul>
  );
};
export default IndexListe;
