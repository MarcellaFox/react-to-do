import "./App.css";
import TaskTable from "./TaskTable";

const App = () => {
  return (
    <div className="App">
      <h1>Get this done</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Task</h2>
        </div>
        <div className="flex-large">
          <h2>View Tasks</h2>
          <TaskTable />
        </div>
      </div>
    </div>
  );
};

export default App;
