import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "todo":
        setTodo(value);
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/todo/addtodo", {
        todo: todo,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
    <form style={customStyle} onSubmit={handleSubmit}>
      <label>
        Todo
        <input
          name="todo" // Update the name attribute to "todo"
          type="text"
          value={todo}
          onChange={handleChange}
          className="form-control"
        />
      </label>
      <br />
      <input type="submit" value="submit" className="btn btn-primary" />
    </form>
  </div>
  );
};

export default AddTodo;
