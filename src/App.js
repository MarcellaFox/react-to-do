import "./App.css";
import TaskTable from "./TaskTable";
import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import EditTaskForm from "./EditTaskForm";

const App = () => {
  const taskData = [
    { id: 1, task: "clean kitchen", assign: "Gabby" },
    { id: 2, task: "wash clothes", assign: "Marcella" },
  ];

  const initialFormState = { id: null, task: "", assign: "" };

  const [tasks, setTasks] = useState(taskData);
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setEditing(false);
  };

  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const editTask = (task) => {
    setEditing(true);
    setCurrentTask({ id: task.id, task: task.task, assign: task.assign });
  };

  return (
    <div className="App">
      <h1>What do I have to do?</h1>

      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Task</h2>
              <EditTaskForm
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </div>
          ) : (
            <div>
              <h2>Add Task</h2>
              <AddTaskForm addTask={addTask} />{" "}
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Tasks</h2>
          <TaskTable
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
