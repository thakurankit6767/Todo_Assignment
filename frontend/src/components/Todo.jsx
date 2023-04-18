// ListEmployee.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

var divStyle = {
  margin: "8% 8%",
};

function Todo() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    TodoList();
  }, []);

  function TodoList() {
    axios
      .get("http://localhost:4000/todo")
      .then((response) => {
        console.log(response);
        setTodo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div style={divStyle}>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo, i) => {
            return (
              <tr key={todo._id}>
                <td>{i + 1}</td>
                <td>{todo.todo}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Todo;
