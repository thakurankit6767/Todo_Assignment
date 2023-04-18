import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./css/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios
        .post("http://localhost:4000/register", user)
        .then((res) => {
          console.log(res);
          alert("Registration successful!");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Invalid input");
    }
  };

  return (
    <>
      <div className="login-container">
        <div>Create a new account</div>
        <span>
          Already have an account ?<Link to="/login">Login</Link>
        </span>
        <div>
          <form className="login-form">
            <div>
              <div>
                <input
                  type="text"
                  id="create-account-pseudo"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="FullName"
                  className="login-input"
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  id="create-account-first-name"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="login-input"
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  type="password"
                  id="create-account-email"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="login-input"
                />
              </div>
            </div>
            <div>
              <button
                className="register-button"
                type="button"
                onClick={register}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
