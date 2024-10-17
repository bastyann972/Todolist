import React, { useState } from "react";
import Form from "../Form/Form.js";
import IndexListe from "../Task/index.js"; // Correction de l'import
import Bouton from "../Bouton/index.js";
import Counter from "../Counter/Counter.js";
import "../../Style/styles.css";
import data from "../../data/tasks.js";

const App = () => {
  // Création du state pour accueillir le tableau des tâches
  const [tasks, setTasks] = useState(data);
  const [showCompleted, setShowCompleted] = useState(true); // État pour masquer ou non les tâches terminées
  // Fonction pour modifier le statut d'une tâche
  const toggleListe = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(newTasks);
  };

  // Fonction pour ajouter une nouvelle tâche
  const addTask = (label) => {
    const newTask = {
      id: tasks.length + 1, // Génération d'un nouvel id unique
      label, // Le texte de la tâche
      done: false, // Par défaut, une nouvelle tâche n'est pas faite
    };

    // Mise à jour du state avec la nouvelle tâche ajoutée
    setTasks([...tasks, newTask]);
  };
  // Fonction pour basculer l'affichage des tâches terminées
  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted); // Inverse la valeur de showCompleted
  };

  // Filtrage des tâches en fonction de showCompleted
  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.done); // Masque les tâches terminées si showCompleted est faux
  return (
    <div className="app">
      <Form addTask={addTask} /> {/* Passe la fonction d'ajout de tâche */}
      <Counter tasks={filteredTasks} />
      <IndexListe tasks={filteredTasks} toggleListe={toggleListe} />
      <Bouton
        toggleShowCompleted={toggleShowCompleted}
        showCompleted={showCompleted}
      />
    </div>
  );
};
export { App };

/*
  Création du state pour accueillir le tableau des tâches
  const [tasks, setTasks] = useState(data); // Renommé en "tasks"
   je veux créer une fonction qui modifie le statut
   d'une tâche
  const toggleListe = (taskId) => {
   Dans le composant TodoList, crée une fonction qui change le statut d'une tâche en utilisant la fonction de modification du state.
     Si done est vrai, on le passe à faux et si done est faux, on le passe à vrai.
   Cette fonction prend en paramètre l'id de la tâche à modifier.

     ATTENTION A UTILISER L'IMMUTABILITE

    il faut toujours repartir d'un tableau vide
    const newTasks = [];

     Etapes (pour faire cette fonction de façon impérative)
     IDEES (proposées par Amandine) => 1- récupérer les valeurs de l'ancien tableau, 2- vérifier que l'id de la tâche à modifier correspond à un id du tableau, 3- si oui changer la valeur de done de true à false ou false à true

     1- récupérer les valeurs de l'ancien tableau (soit avec un for, soit avec spread operator)
    for (const task of tasks) {
      newTasks.push(task);
    }

     2 - vérifier que l'id de la tâche à modifier correspond à un id du tableau
    for (const newTask of newTasks) {
      if (taskId === newTask.id) {
         3- si oui changer la valeur de done de true à false ou false à true
        if (newTask.done === true) newTask.done = false;
        else newTask.done = true;
      }
    }
     Appel du setter
    setTasks(newTasks);
  };*/
