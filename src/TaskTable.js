import React from "react";

export default function TaskTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Assignee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Task Data</td>
          <td>Assign Data</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
