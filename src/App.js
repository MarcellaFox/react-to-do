import "./App.css";
import TaskTable from "./TaskTable";
import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const App = () => {
  const taskData = [
    { id: 1, task: "clean kitchen", assign: "Gabby" },
    { id: 2, task: "wash clothes", assign: "Marcella" },
  ];

  const [tasks, setTasks] = useState(taskData);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>What do I have to do?</h1>

      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Task</h2>
          <AddTaskForm addTask={addTask} />
        </div>
        <div className="flex-large">
          <h2>View Tasks</h2>
          <TaskTable tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
