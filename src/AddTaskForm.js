import React, { useState } from "react";

export default function AddTaskForm(props) {
  const initialFormState = { id: null, task: "", assign: "" };
  const [task, setTask] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(task);
    setTask(initialFormState);
  };

  return (
    <div className="AddTaskForm">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="task"
          value={task.task}
          onChange={handleInputChange}
        />
        <label>Assign</label>
        <input
          type="text"
          name="assign"
          value={task.assign}
          onChange={handleInputChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
