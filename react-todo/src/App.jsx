import React from "react";
import TodoList from "./components/TodoList"; // Import the TodoList component

const App = () => {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
};

export default App;