import React from "react";
import "./TaskTable.css";

export default function TaskTable(props) {
  return (
    <div className="TaskTable">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.length > 0 ? (
            props.tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td>{task.assign}</td>
                <td>
                  <button>Edit</button>
                  <button
                    onClick={() => {
                      props.deleteTask(task.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>You have nothing to do!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
