import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./css/Login.css";
const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:4000/Login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };

  let navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <div>Login To Your Account</div>
        <div className="login-form">
          <form action="#" autoComplete="off">
            <div>
              <div>
                <span></span>
                <input
                  type="text"
                  id="sign-in-email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="login-input"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <div>
               
                <input
                  type="password"
                  id="sign-in-password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="login-input"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div>
              <div>
                <a href="#">Forgot Your Password?</a>
              </div>
            </div>
            <div>
              <button type="submit" onClick={login} className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};
export default Login;
