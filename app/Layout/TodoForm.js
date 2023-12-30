import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the todo is not empty
    if (todo.trim() !== "") {
      addTodo(todo);

      // Clear the input field after adding the todo
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="input-group input-group-md"
          style={{ height: "50px", backgroundColor: "white", color: "black" }}
          placeholder="Add a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-lg mt-2" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
