const Counter = ({ tasks }) => {
  // nombre de tâches en cours = nombre de tâches dont la valeur done = false
  const notDoneTasks = (tasks) => {
    let counter = 0;
    for (task of tasks) {
      if (task.done === false) {
        counter++;
      }
    }
    return counter;
  };

  return (
    <p className="counter">
      {notDoneTasks(tasks)} tâches en cours / {tasks.length} totales
    </p>
  );
};

export default Counter;
