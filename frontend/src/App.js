



import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

const App = () => {
    const [user, setLoginUser] = useState(null);
    return (
      <div className="App">
        <Header />
      <Routes>
        <Route exact path="/" element={user && user._id ? <Todo /> : <Login />} />
        
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      </div>
    );
  };
  
  export default App;
