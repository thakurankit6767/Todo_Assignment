import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./css/EditTodo.css";

const EditTodo = () => {
  const [emp, setEmp] = useState({
    todo: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTodoId();
  }, []);

  function getTodoId() {
    axios
      .get("http://localhost:4000/todo/edittodo/" + id)
      .then((response) => {
        // console.log(response.data);
        setEmp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmp({
      ...emp,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:4000/todo/updatetodo/" + id, emp)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Todo</label>
        <input
          type="text"
          name="todo"
          value={emp.todo}
          onChange={handleInputChange}
          placeholder="Edit Todo"
          className="login-input"
        />

        <button type="submit" className="register-button">
          Edit Todo
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
