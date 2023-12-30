"use client";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
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

  const handleCheckboxChange = (index) => {
    // Handle checkbox change, if needed
    console.log(`Checkbox changed for todo at index ${index}`);
  };

  const addTodo = (newTodo) => {
    // Add the new todo to the list
    setTodos([...todos, newTodo]);
  };

  const editHandle = (index) => {
    // Handle edit action, if needed
    console.log(`Edit clicked for todo at index ${index}`);
  };

  const deleteHandle = (index) => {
    // Handle delete action, if needed
    console.log(`Delete clicked for todo at index ${index}`);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <main className="container mt-5">
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="input-group input-group-md"
              style={{
                height: "50px",
                backgroundColor: "white",
                color: "black",
              }}
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
        <h1>Today</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center" scope="col">
                check
              </th>
              <th className="text-center" scope="col" colSpan="3">
                Todos List
              </th>
              <th className="text-center" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td className="text-center">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td className="text-center" colSpan="3">
                  {todo}
                </td>
                <td className="text-center">
                  <div
                    className="btn btn-warning"
                    style={{ marginLeft: "9px", marginBottom: "5px" }}
                    onClick={() => editHandle(index)}
                  >
                    Edit
                  </div>
                  <div
                    className="btn btn-danger"
                    style={{ marginLeft: "9px", marginBottom: "5px" }}
                    onClick={() => deleteHandle(index)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
