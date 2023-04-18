// ListEmployee.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

var divStyle = {
  margin: "8% 8%",
};

function Todo() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate(); // Get history from react-router-dom

  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    axios
      .get("http://localhost:4000/todo")
      .then((response) => {
        console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleDelete(todoId) {
    axios
      .delete(`http://localhost:4000/todo/deletetodo/${todoId}`)
      .then((response) => {
        console.log(response);
        fetchTodos(); // Fetch updated todos after successful deletion
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleEdit(todoId) {
    navigate(`/edittodo/${todoId}`);
  }

  return (
    <div style={divStyle}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => {
            return (
              <tr key={todo._id}>
                <td>{i + 1}</td>
                <td>{todo.todo}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </Button>{" "}
                  {/* Add a space between buttons */}
                  <Button
                    variant="primary"
                    onClick={() => handleEdit(todo._id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Todo;
