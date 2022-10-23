import React, { useState, useEffect } from "react";

export default function EditTaskForm(props) {
  const [task, setTask] = useState(props.currentTask);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  useEffect(() => {
    setTask(props.currentTask);
  }, [props]);

  return (
    <div className="AddTaskForm">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.updateTask(task.id, task);
        }}
      >
        <label>Task</label>
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
        <input type="submit" value="Update" />
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </form>
    </div>
  );
}
