import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import EditTodo from "./components/EditTodo";

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={user && user._id ? <Todo /> : <Login />} /> */}
        <Route path="/" element={<Todo />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edittodo/:id" element={<EditTodo />} />
      </Routes>
    </div>
  );
};

export default App;
