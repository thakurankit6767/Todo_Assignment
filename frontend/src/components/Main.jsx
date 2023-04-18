import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";

import HomePage from "./HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

const Main = () => {
    const [user, setLoginUser] = useState(null);
    return (
      <Routes>
        <Route exact path="/" element={user && user._id ? <Todo /> : <Login />} />
        
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    );
  };
  
  export default Main;
